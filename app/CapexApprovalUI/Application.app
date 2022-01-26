{
	"_Name": "CapexApprovalUI",
	"Version": "/CapexApprovalUI/Globals/AppDefinition_Version.global",
	"MainPage": "/CapexApprovalUI/Pages/Main.page",
	"OnLaunch": [
		"/CapexApprovalUI/Rules/UserTask/InitializeODataServiceAndContext.js"
	],
	"OnWillUpdate": "/CapexApprovalUI/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/CapexApprovalUI/Actions/Service/InitializeOnline.action",
	"Styles": "/CapexApprovalUI/Styles/Styles.less",
	"Localization": "/CapexApprovalUI/i18n/i18n.properties",
	"OnWorkflowUpdate": "/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntity.action",
	"_SchemaVersion": "6.1"
}