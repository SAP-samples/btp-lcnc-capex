sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode"
], function (Controller, JSONModel, BindingMode) {
	"use strict";

	return Controller.extend("CapexApprovalUI.controller.View1", {
        setUrl: function () {
            var sIframeId = this.getView().byId(this.createId("mdkframe")).getId();
            var url = sap.ui.require.toUrl("CapexApprovalUI/mdkindex.html");
            $("#"+sIframeId).attr("src",url);
        },
        initMdkframe: function () {
            this.getOwnerComponent().initMdkframe(this.createId("mdkframe"));
        },
        onAfterRendering: function () {
            this.setUrl();
            this.initMdkframe();
        }
	});
});