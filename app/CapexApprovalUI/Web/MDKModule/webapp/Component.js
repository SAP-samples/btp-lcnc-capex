sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "CapexApprovalUI/model/models"
], function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("CapexApprovalUI.Component", {

        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // enable routing
            this.getRouter().initialize();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            this.setTaskModels();
            
            if (this.getInboxAPI()) {
                this.getInboxAPI().addAction({"action":"approve","label":"Approve","type":"positive"}, function () {this.completeTask("approve");}, this);
				this.getInboxAPI().addAction({"action":"reject","label":"Reject","type":"negative"}, function () {this.completeTask("reject");}, this);
            }
        },

        setTaskModels: function () {
            let componentData = this.getComponentData();
            if (componentData && componentData.startupParameters) {
                let startupParameters = componentData.startupParameters;
                // set the task model
                if (startupParameters.taskModel && startupParameters.oParameters && startupParameters.oParameters.oQueryParameters) {
                    let capEntityKeyObject = startupParameters.oParameters.oQueryParameters.capEntityKeyObject;
                    let taskData = startupParameters.taskModel.getData();
                    if (capEntityKeyObject && capEntityKeyObject.length > 0 && taskData) {
                        try {
                            capEntityKeyObject = JSON.parse(capEntityKeyObject[0]);
                        } catch (e) {
                            capEntityKeyObject = null;
                            console.error(`Failed to parse capEntityKeyObject with error: ${e}`);
                        }
                        if (capEntityKeyObject) {
                            let equations = [];
                            let keyTypes = {"ID":"Guid"};
                            for (let key in capEntityKeyObject) {
                                if (keyTypes[key] && keyTypes[key] === 'String') {
                                    equations.push(key + " eq '" + capEntityKeyObject[key] + "'");
                                } else {
                                    equations.push(key + " eq " + capEntityKeyObject[key]);
                                }
                            }
                            taskData.capEntityFilter = equations.join(" and ");
                            startupParameters.taskModel.setData(taskData);
                        }
                    }
                }
                this.setModel(startupParameters.taskModel, "task");
            }
        },
        
        getTaskInstanceID: function() {
            if (this.getModel("task") && this.getModel("task").getData()) {
                return this.getModel("task").getData().InstanceID;
            } else {
                return null;
            }
        },

        getInboxAPI: function () {
            let componentData = this.getComponentData();
            if (componentData && componentData.startupParameters) {
                let startupParameters = componentData.startupParameters;
                return startupParameters.inboxAPI;
            } else {
                return null;
            }
        },
    
        completeTask: function (decisionId) {
            let actionMessage = {
                message: "ComponentAction",
                actionProperties: {
                    WorkflowUsertask: {
                        taskAction: {
                            taskDecisionID: decisionId
                        }
                    }
                }
            };
            this._sendMessageToMdkFrame(actionMessage);
        },

        initMdkframe: function(mdkframeId) {
            this.setModel({ frameId : mdkframeId }, "mdk");

            let taskModel = this.getModel("task");
            let contextMessage = {
                message: "ComponentContextData",
                contextData: {
                    WorkflowUsertask: {
                        taskData: taskModel ? taskModel.getData() : null
                    }
                }
            };

            let targetWindow = this._getMdkFrameWindow();
            var that = this;
            window.addEventListener("message", event => {
                if (event.origin === window.location.origin) {
                    if (event.data === "mdkframeReady" && targetWindow) {
                        targetWindow.postMessage(contextMessage, window.location.origin);
                    }
                    if (event.data === "actionCompletion") {
                        that._refreshTaskList();
                    }
                }
            }, false);
        },

        _sendMessageToMdkFrame: function (message) {
            let targetWindow = this._getMdkFrameWindow();
            if (targetWindow) {
                targetWindow.postMessage(message, window.location.origin);
            }
        },

        _getMdkFrameWindow: function() {
            let frameId = this.getModel("mdk").frameId;
            if (frameId) {
                let mdkIframe = document.getElementById(frameId);
                if (mdkIframe && mdkIframe.contentWindow) {
                    return mdkIframe.contentWindow;
                }
            }
            return null;
        },
        
        _refreshTaskList: function () {
            if (this.getInboxAPI() && this.getTaskInstanceID()) {
                this.getInboxAPI().updateTask("NA", this.getTaskInstanceID());
            }
        }
    });
});