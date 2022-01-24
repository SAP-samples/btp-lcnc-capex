{
	"_Name": "CapexRequests",
	"Version": "/CapexRequests/Globals/AppDefinition_Version.global",
	"MainPage": "/CapexRequests/Pages/Capex/Capex_List.page",
	"OnLaunch": [
		"/CapexRequests/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/CapexRequests/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/CapexRequests/Actions/Service/InitializeOnline.action",
	"Styles": "/CapexRequests/Styles/Styles.less",
	"Localization": "/CapexRequests/i18n/i18n.properties",
	"_SchemaVersion": "6.1"
}