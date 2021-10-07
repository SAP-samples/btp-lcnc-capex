(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let capexmchregistration_actions_capex_capex_createentity_action = __webpack_require__(/*! ./capexMChRegistration/Actions/Capex/Capex_CreateEntity.action */ "./build.definitions/capexMChRegistration/Actions/Capex/Capex_CreateEntity.action")
let capexmchregistration_actions_capex_capex_deleteentity_action = __webpack_require__(/*! ./capexMChRegistration/Actions/Capex/Capex_DeleteEntity.action */ "./build.definitions/capexMChRegistration/Actions/Capex/Capex_DeleteEntity.action")
let capexmchregistration_actions_capex_capex_updateentity_action = __webpack_require__(/*! ./capexMChRegistration/Actions/Capex/Capex_UpdateEntity.action */ "./build.definitions/capexMChRegistration/Actions/Capex/Capex_UpdateEntity.action")
let capexmchregistration_actions_capex_navtocapex_create_action = __webpack_require__(/*! ./capexMChRegistration/Actions/Capex/NavToCapex_Create.action */ "./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_Create.action")
let capexmchregistration_actions_capex_navtocapex_detail_action = __webpack_require__(/*! ./capexMChRegistration/Actions/Capex/NavToCapex_Detail.action */ "./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_Detail.action")
let capexmchregistration_actions_capex_navtocapex_edit_action = __webpack_require__(/*! ./capexMChRegistration/Actions/Capex/NavToCapex_Edit.action */ "./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_Edit.action")
let capexmchregistration_actions_capex_navtocapex_list_action = __webpack_require__(/*! ./capexMChRegistration/Actions/Capex/NavToCapex_List.action */ "./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_List.action")
let capexmchregistration_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./capexMChRegistration/Actions/CloseModalPage_Cancel.action */ "./build.definitions/capexMChRegistration/Actions/CloseModalPage_Cancel.action")
let capexmchregistration_actions_closemodalpage_complete_action = __webpack_require__(/*! ./capexMChRegistration/Actions/CloseModalPage_Complete.action */ "./build.definitions/capexMChRegistration/Actions/CloseModalPage_Complete.action")
let capexmchregistration_actions_closepage_action = __webpack_require__(/*! ./capexMChRegistration/Actions/ClosePage.action */ "./build.definitions/capexMChRegistration/Actions/ClosePage.action")
let capexmchregistration_actions_createentityfailuremessage_action = __webpack_require__(/*! ./capexMChRegistration/Actions/CreateEntityFailureMessage.action */ "./build.definitions/capexMChRegistration/Actions/CreateEntityFailureMessage.action")
let capexmchregistration_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./capexMChRegistration/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/capexMChRegistration/Actions/CreateEntitySuccessMessage.action")
let capexmchregistration_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./capexMChRegistration/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/capexMChRegistration/Actions/DeleteEntityFailureMessage.action")
let capexmchregistration_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./capexMChRegistration/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/capexMChRegistration/Actions/DeleteEntitySuccessMessage.action")
let capexmchregistration_actions_logout_action = __webpack_require__(/*! ./capexMChRegistration/Actions/Logout.action */ "./build.definitions/capexMChRegistration/Actions/Logout.action")
let capexmchregistration_actions_service_initializeonline_action = __webpack_require__(/*! ./capexMChRegistration/Actions/Service/InitializeOnline.action */ "./build.definitions/capexMChRegistration/Actions/Service/InitializeOnline.action")
let capexmchregistration_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./capexMChRegistration/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/capexMChRegistration/Actions/Service/InitializeOnlineFailureMessage.action")
let capexmchregistration_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./capexMChRegistration/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/capexMChRegistration/Actions/Service/InitializeOnlineSuccessMessage.action")
let capexmchregistration_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./capexMChRegistration/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/capexMChRegistration/Actions/UpdateEntityFailureMessage.action")
let capexmchregistration_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./capexMChRegistration/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/capexMChRegistration/Actions/UpdateEntitySuccessMessage.action")
let capexmchregistration_globals_appdefinition_version_global = __webpack_require__(/*! ./capexMChRegistration/Globals/AppDefinition_Version.global */ "./build.definitions/capexMChRegistration/Globals/AppDefinition_Version.global")
let capexmchregistration_i18n_i18n_properties = __webpack_require__(/*! ./capexMChRegistration/i18n/i18n.properties */ "./build.definitions/capexMChRegistration/i18n/i18n.properties")
let capexmchregistration_jsconfig_json = __webpack_require__(/*! ./capexMChRegistration/jsconfig.json */ "./build.definitions/capexMChRegistration/jsconfig.json")
let capexmchregistration_pages_capex_capex_create_page = __webpack_require__(/*! ./capexMChRegistration/Pages/Capex/Capex_Create.page */ "./build.definitions/capexMChRegistration/Pages/Capex/Capex_Create.page")
let capexmchregistration_pages_capex_capex_detail_page = __webpack_require__(/*! ./capexMChRegistration/Pages/Capex/Capex_Detail.page */ "./build.definitions/capexMChRegistration/Pages/Capex/Capex_Detail.page")
let capexmchregistration_pages_capex_capex_edit_page = __webpack_require__(/*! ./capexMChRegistration/Pages/Capex/Capex_Edit.page */ "./build.definitions/capexMChRegistration/Pages/Capex/Capex_Edit.page")
let capexmchregistration_pages_capex_capex_list_page = __webpack_require__(/*! ./capexMChRegistration/Pages/Capex/Capex_List.page */ "./build.definitions/capexMChRegistration/Pages/Capex/Capex_List.page")
let capexmchregistration_rules_capex_capex_deleteconfirmation_js = __webpack_require__(/*! ./capexMChRegistration/Rules/Capex/Capex_DeleteConfirmation.js */ "./build.definitions/capexMChRegistration/Rules/Capex/Capex_DeleteConfirmation.js")
let capexmchregistration_rules_capex_capex_request_count_js = __webpack_require__(/*! ./capexMChRegistration/Rules/Capex/Capex_Request_Count.js */ "./build.definitions/capexMChRegistration/Rules/Capex/Capex_Request_Count.js")
let capexmchregistration_rules_onwillupdate_js = __webpack_require__(/*! ./capexMChRegistration/Rules/OnWillUpdate.js */ "./build.definitions/capexMChRegistration/Rules/OnWillUpdate.js")
let capexmchregistration_services_service1_service = __webpack_require__(/*! ./capexMChRegistration/Services/service1.service */ "./build.definitions/capexMChRegistration/Services/service1.service")
let capexmchregistration_styles_styles_css = __webpack_require__(/*! ./capexMChRegistration/Styles/Styles.css */ "./build.definitions/capexMChRegistration/Styles/Styles.css")
let capexmchregistration_styles_styles_json = __webpack_require__(/*! ./capexMChRegistration/Styles/Styles.json */ "./build.definitions/capexMChRegistration/Styles/Styles.json")
let capexmchregistration_styles_styles_less = __webpack_require__(/*! ./capexMChRegistration/Styles/Styles.less */ "./build.definitions/capexMChRegistration/Styles/Styles.less")
let capexmchregistration_styles_styles_nss = __webpack_require__(/*! ./capexMChRegistration/Styles/Styles.nss */ "./build.definitions/capexMChRegistration/Styles/Styles.nss")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	capexmchregistration_actions_capex_capex_createentity_action : capexmchregistration_actions_capex_capex_createentity_action,
	capexmchregistration_actions_capex_capex_deleteentity_action : capexmchregistration_actions_capex_capex_deleteentity_action,
	capexmchregistration_actions_capex_capex_updateentity_action : capexmchregistration_actions_capex_capex_updateentity_action,
	capexmchregistration_actions_capex_navtocapex_create_action : capexmchregistration_actions_capex_navtocapex_create_action,
	capexmchregistration_actions_capex_navtocapex_detail_action : capexmchregistration_actions_capex_navtocapex_detail_action,
	capexmchregistration_actions_capex_navtocapex_edit_action : capexmchregistration_actions_capex_navtocapex_edit_action,
	capexmchregistration_actions_capex_navtocapex_list_action : capexmchregistration_actions_capex_navtocapex_list_action,
	capexmchregistration_actions_closemodalpage_cancel_action : capexmchregistration_actions_closemodalpage_cancel_action,
	capexmchregistration_actions_closemodalpage_complete_action : capexmchregistration_actions_closemodalpage_complete_action,
	capexmchregistration_actions_closepage_action : capexmchregistration_actions_closepage_action,
	capexmchregistration_actions_createentityfailuremessage_action : capexmchregistration_actions_createentityfailuremessage_action,
	capexmchregistration_actions_createentitysuccessmessage_action : capexmchregistration_actions_createentitysuccessmessage_action,
	capexmchregistration_actions_deleteentityfailuremessage_action : capexmchregistration_actions_deleteentityfailuremessage_action,
	capexmchregistration_actions_deleteentitysuccessmessage_action : capexmchregistration_actions_deleteentitysuccessmessage_action,
	capexmchregistration_actions_logout_action : capexmchregistration_actions_logout_action,
	capexmchregistration_actions_service_initializeonline_action : capexmchregistration_actions_service_initializeonline_action,
	capexmchregistration_actions_service_initializeonlinefailuremessage_action : capexmchregistration_actions_service_initializeonlinefailuremessage_action,
	capexmchregistration_actions_service_initializeonlinesuccessmessage_action : capexmchregistration_actions_service_initializeonlinesuccessmessage_action,
	capexmchregistration_actions_updateentityfailuremessage_action : capexmchregistration_actions_updateentityfailuremessage_action,
	capexmchregistration_actions_updateentitysuccessmessage_action : capexmchregistration_actions_updateentitysuccessmessage_action,
	capexmchregistration_globals_appdefinition_version_global : capexmchregistration_globals_appdefinition_version_global,
	capexmchregistration_i18n_i18n_properties : capexmchregistration_i18n_i18n_properties,
	capexmchregistration_jsconfig_json : capexmchregistration_jsconfig_json,
	capexmchregistration_pages_capex_capex_create_page : capexmchregistration_pages_capex_capex_create_page,
	capexmchregistration_pages_capex_capex_detail_page : capexmchregistration_pages_capex_capex_detail_page,
	capexmchregistration_pages_capex_capex_edit_page : capexmchregistration_pages_capex_capex_edit_page,
	capexmchregistration_pages_capex_capex_list_page : capexmchregistration_pages_capex_capex_list_page,
	capexmchregistration_rules_capex_capex_deleteconfirmation_js : capexmchregistration_rules_capex_capex_deleteconfirmation_js,
	capexmchregistration_rules_capex_capex_request_count_js : capexmchregistration_rules_capex_capex_request_count_js,
	capexmchregistration_rules_onwillupdate_js : capexmchregistration_rules_onwillupdate_js,
	capexmchregistration_services_service1_service : capexmchregistration_services_service1_service,
	capexmchregistration_styles_styles_css : capexmchregistration_styles_styles_css,
	capexmchregistration_styles_styles_json : capexmchregistration_styles_styles_json,
	capexmchregistration_styles_styles_less : capexmchregistration_styles_styles_less,
	capexmchregistration_styles_styles_nss : capexmchregistration_styles_styles_nss,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Rules/Capex/Capex_DeleteConfirmation.js":
/*!****************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Rules/Capex/Capex_DeleteConfirmation.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    let dialogs = clientAPI.nativescript.uiDialogsModule;
    return dialogs.confirm("Delete current registration?").then((result) => {
        if (result === true) {
            return clientAPI.executeAction('/capexMChRegistration/Actions/Capex/Capex_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Rules/Capex/Capex_Request_Count.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Rules/Capex/Capex_Request_Count.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Capex_Request_Count)
/* harmony export */ });

var clientAPI;

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function Capex_Request_Count(clientAPI) {
    let serviceName = "/capexMChRegistration/Services/service1.service";
    let entitySet = "Capex";
    return clientAPI.count(serviceName, entitySet, ' ').then((result) => {
			return result;
		}).catch(err => {
			console.log(err);
			return 0;
		});
}


/***/ }),

/***/ "./build.definitions/capexMChRegistration/Rules/OnWillUpdate.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Rules/OnWillUpdate.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    let dialogs = clientAPI.nativescript.uiDialogsModule;
    return dialogs.confirm("Update now?").then((result) => {
        console.log("Update now? " + result);
        if (result === true) {
            return Promise.resolve();
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Styles/Styles.json":
/*!*******************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Styles/Styles.json ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/capexMChRegistration/jsconfig.json":
/*!**************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/jsconfig.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/capexMChRegistration/i18n/i18n.properties":
/*!*********************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/i18n/i18n.properties ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "CreatedAt=CreatedAt\nDescription=Description\nCreatedBy=CreatedBy\nChangedAt=ChangedAt\nChangedBy=ChangedBy\nCurrency=Currency\nCountry=Country\nName=Name\nCountryCode=CountryCode\nCurrencyCode=CurrencyCode\nCurrencySymbol=CurrencySymbol\nDraft_DraftAdministrativeData=Draft_DraftAdministrativeData\nDraft_DraftUUID=Draft_DraftUUID\nDraft_CreationDateTime=Draft_CreationDateTime\nDraft_CreatedByUser=Draft_CreatedByUser\nDraft_DraftIsCreatedByMe=Draft_DraftIsCreatedByMe\nDraft_LastChangeDateTime=Draft_LastChangeDateTime\nDraft_LastChangedByUser=Draft_LastChangedByUser\nDraft_InProcessByUser=Draft_InProcessByUser\nDraft_DraftIsProcessedByMe=Draft_DraftIsProcessedByMe\n"

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Styles/Styles.css":
/*!******************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Styles/Styles.css ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "../../css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n", "",{"version":3,"sources":["webpack://./build.definitions/capexMChRegistration/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/capexMChRegistration/Styles/Styles.less":
/*!*******************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Styles/Styles.less ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "../../css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/", "",{"version":3,"sources":["webpack://./build.definitions/capexMChRegistration/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/capexMChRegistration/Styles/Styles.nss":
/*!******************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Styles/Styles.nss ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/cssWithMappingToString.js */ "../../css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../css-loader/dist/runtime/api.js":
/*!********************************************!*\
  !*** ../../css-loader/dist/runtime/api.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../../css-loader/dist/runtime/cssWithMappingToString.js":
/*!***************************************************************!*\
  !*** ../../css-loader/dist/runtime/cssWithMappingToString.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"MainPage":"/capexMChRegistration/Pages/Capex/Capex_List.page","OnLaunch":["/capexMChRegistration/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/capexMChRegistration/Rules/OnWillUpdate.js","OnDidUpdate":"/capexMChRegistration/Actions/Service/InitializeOnline.action","Styles":"/capexMChRegistration/Styles/Styles.less","Version":"/capexMChRegistration/Globals/AppDefinition_Version.global","Localization":"/capexMChRegistration/i18n/i18n.properties","_Name":"capexMChRegistration","StyleSheets":{"Styles":{"css":"/capexMChRegistration/Styles/Styles.css","ios":"/capexMChRegistration/Styles/Styles.nss","android":"/capexMChRegistration/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/Capex/Capex_CreateEntity.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/Capex/Capex_CreateEntity.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"create"},"OnFailure":"/capexMChRegistration/Actions/CreateEntityFailureMessage.action","OnSuccess":"/capexMChRegistration/Actions/CreateEntitySuccessMessage.action","Target":{"EntitySet":"Capex","Service":"/capexMChRegistration/Services/service1.service"},"Properties":{"requestid":"#Control:requestid/#Value","title":"#Control:title/#Value","firstname":"#Control:firstname/#Value","lastname":"#Control:lastname/#Value","email":"#Control:email/#Value","userid":"#Control:userid/#Value","comments":"#Control:comments/#Value","totalcost":"#Control:totalcost/#Value","type_type":"#Control:type_listpicker/#SelectedValue","capex":"#Control:capex/#Value","opex":"#Control:opex/#Value","currency_code":"#Control:currency_listpicker/#SelectedValue","roi":"#Control:roi/#Value","irr":"#Control:irr/#Value","country_code":"#Control:country_listpicker/#SelectedValue","business_unit_business_unit":"#Control:businessunit_listpicker/#SelectedValue","description":"#Control:description/#Value","energy_efficiency":"#Control:energy_efficiency/#Value","co2_efficiency":"#Control:co2_efficiency/#Value","energy_cost_savings":"#Control:energy_cost_savings/#Value","water_savings":"#Control:water_savings/#Value","folder_id":"#Control:attachment/#Value"}}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/Capex/Capex_DeleteEntity.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/Capex/Capex_DeleteEntity.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Capex","Service":"/capexMChRegistration/Services/service1.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/capexMChRegistration/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/capexMChRegistration/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/Capex/Capex_UpdateEntity.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/Capex/Capex_UpdateEntity.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Capex","Service":"/capexMChRegistration/Services/service1.service","ReadLink":"{@odata.readLink}"},"Properties":{"requestid":"#Control:requestid/#Value","title":"#Control:title/#Value","firstname":"#Control:firstname/#Value","lastname":"#Control:lastname/#Value","email":"#Control:email/#Value","userid":"#Control:userid/#Value","comments":"#Control:comments/#Value","totalcost":"#Control:totalcost/#Value","type_type":"#Control:type_listpicker/#SelectedValue","capex":"#Control:capex/#Value","opex":"#Control:opex/#Value","currency_code":"#Control:currency_listpicker/#SelectedValue","roi":"#Control:roi/#Value","irr":"#Control:irr/#Value","country_code":"#Control:country_listpicker/#SelectedValue","business_unit_business_unit":"#Control:businessunit_listpicker/#SelectedValue","description":"#Control:description/#Value","energy_efficiency":"#Control:energy_efficiency/#Value","co2_efficiency":"#Control:co2_efficiency/#Value","energy_cost_savings":"#Control:energy_cost_savings/#Value","water_savings":"#Control:water_savings/#Value","folder_id":"#Control:attachment/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/capexMChRegistration/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/capexMChRegistration/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_Create.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_Create.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/capexMChRegistration/Pages/Capex/Capex_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_Detail.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_Detail.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/capexMChRegistration/Pages/Capex/Capex_Detail.page"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_Edit.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_Edit.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/capexMChRegistration/Pages/Capex/Capex_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_List.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/Capex/NavToCapex_List.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/capexMChRegistration/Pages/Capex/Capex_List.page"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/CloseModalPage_Cancel.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/CloseModalPage_Cancel.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/CloseModalPage_Complete.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/CloseModalPage_Complete.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/ClosePage.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/ClosePage.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/CreateEntityFailureMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/CreateEntityFailureMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/CreateEntitySuccessMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/CreateEntitySuccessMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/capexMChRegistration/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/DeleteEntityFailureMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/DeleteEntityFailureMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/DeleteEntitySuccessMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/DeleteEntitySuccessMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/capexMChRegistration/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/Logout.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/Logout.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/Service/InitializeOnline.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/Service/InitializeOnline.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/capexMChRegistration/Services/service1.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/capexMChRegistration/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/capexMChRegistration/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/Service/InitializeOnlineFailureMessage.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/UpdateEntityFailureMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/UpdateEntityFailureMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Actions/UpdateEntitySuccessMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Actions/UpdateEntitySuccessMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/capexMChRegistration/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Globals/AppDefinition_Version.global":
/*!*************************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Globals/AppDefinition_Version.global ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Pages/Capex/Capex_Create.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Pages/Capex/Capex_Create.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer","Sections":[{"Target":"","Controls":[{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"firstname","IsEditable":true,"IsVisible":true,"Caption":"First Name","PlaceHolder":"enter requester firstname "},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"lastname","IsEditable":true,"IsVisible":true,"Caption":"Last Name","PlaceHolder":"enter requester lastname"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"email","IsEditable":true,"IsVisible":true,"Caption":"Email Address","PlaceHolder":"enter requester email address","KeyboardType":"Email"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"userid","IsEditable":true,"IsVisible":true,"Caption":"User ID","PlaceHolder":"PlaceHolder"}],"Caption":"Requester","Visible":true},{"Target":"","Controls":[{"Target":"","_Type":"Control.Type.FormCell.Note","_Name":"comments","IsEditable":true,"IsVisible":true,"PlaceHolder":"enter comments to the approver"}],"Caption":"Comments from Requester","Visible":true},{"Target":"","Controls":[{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"requestid","IsEditable":true,"IsVisible":true,"Caption":"Request ID","PlaceHolder":"requestid"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"title","IsEditable":true,"IsVisible":true,"Caption":"Title","PlaceHolder":"title"},{"Target":"","_Type":"Control.Type.FormCell.ListPicker","_Name":"type_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Type","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select Capex Type","IsSelectedSectionEnabled":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/capexMChRegistration/Services/service1.service","EntitySet":"CapexType"},"DisplayValue":"{typedescription}","ReturnValue":"{type}"}},{"Target":"","_Type":"Control.Type.FormCell.ListPicker","_Name":"country_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Country/Region","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select country","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/capexMChRegistration/Services/service1.service","EntitySet":"Countries"},"DisplayValue":"{name}","ReturnValue":"{code}"}},{"Target":"","_Type":"Control.Type.FormCell.ListPicker","_Name":"businessunit_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Business Unit","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select Business Unit","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/capexMChRegistration/Services/service1.service","EntitySet":"BusinessUnits"},"DisplayValue":"{name}","ReturnValue":"{business_unit}"}},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"capex","IsEditable":true,"IsVisible":true,"Caption":"CAPEX","PlaceHolder":"capex"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"opex","IsEditable":true,"IsVisible":true,"Caption":"OPEX","PlaceHolder":"opex"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"totalcost","IsEditable":true,"IsVisible":true,"Caption":"Total Cost","PlaceHolder":"total cost"},{"Target":"","_Type":"Control.Type.FormCell.ListPicker","_Name":"currency_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Currency","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select Currency","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true},"PickerItems":{"Target":{"Service":"/capexMChRegistration/Services/service1.service","EntitySet":"Currencies"},"DisplayValue":"{name}","ReturnValue":"{code}"}},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"irr","IsEditable":true,"IsVisible":true,"Caption":"IRR","PlaceHolder":"irr"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"roi","IsEditable":true,"IsVisible":true,"Caption":"ROI","PlaceHolder":"roi"}],"Caption":"Investment Details","Visible":true},{"Target":"","Controls":[{"Target":"","_Type":"Control.Type.FormCell.Note","_Name":"description","IsEditable":true,"IsVisible":true,"PlaceHolder":"PlaceHolder"}],"Caption":"Description","Visible":true},{"Controls":[{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"energy_efficiency","Caption":"Energy Efficiency %"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"co2_efficiency","Caption":"CO2 Efficiency %"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"energy_cost_savings","Caption":"Energy Cost Saving %"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"water_savings","Caption":"Water Saving %"},{"_Type":"Control.Type.FormCell.Document","_Name":"attachment","Caption":"Attachments"}],"Target":"","Caption":"Sustainability","Visible":true}]}],"Target":"","_Type":"Page","_Name":"Capex_Create","Caption":"New Capital Expenditure Request","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","Text":"","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"OnPress":"/capexMChRegistration/Actions/CloseModalPage_Cancel.action"},{"Target":"","_Name":"ActionBarItem1","Text":"","SystemItem":"Save","Position":"right","IsIconCircular":false,"OnPress":"/capexMChRegistration/Actions/Capex/Capex_CreateEntity.action"}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Pages/Capex/Capex_Detail.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Pages/Capex/Capex_Detail.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Subhead":"Request Id {requestid}","Footnote":"{type/typedescription}","Description":"{description}","StatusText":"{capex} {currency_code}","SubstatusText":"{country/name}","HeadlineText":"{title}","Tags":[],"Target":""},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0"},{"KeyAndValues":[{"Target":"","Value":"{firstname}","KeyName":"First Name","Visible":true},{"Target":"","Value":"{lastname}","KeyName":"Last Name","Visible":true},{"Target":"","Value":"{email}","KeyName":"Email","Visible":true},{"Target":"","Value":"{userid}","KeyName":"User ID","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","Target":"","_Name":"SectionKeyValue1","Header":{"UseTopPadding":false,"Caption":"Requestor"},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"KeyAndValues":[{"Target":"","Value":"{country/name}","KeyName":"Country/Region","Visible":true},{"Target":"","Value":"{business_unit/name}","KeyName":"Business Unit","Visible":true},{"Target":"","Value":"{capex}","KeyName":"CAPEX","Visible":true},{"Target":"","Value":"{opex}","KeyName":"OPEX","Visible":true},{"Target":"","Value":"{totalcost}","KeyName":"Total Cost","Visible":true},{"Target":"","Value":"{currency_code}","KeyName":"Currency","Visible":true},{"Target":"","Value":"{irr}","KeyName":"IRR","Visible":true},{"Target":"","Value":"{roi}","KeyName":"ROI","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","Target":"","_Name":"SectionKeyValue2","Header":{"UseTopPadding":false,"Caption":"Investment Details"},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"KeyAndValues":[{"Target":"","Value":"{energy_efficiency}","KeyName":"Energy Efficiency %","Visible":true},{"Target":"","Value":"{co2_efficiency}","KeyName":"CO2 Efficiency %","Visible":true},{"Target":"","Value":"{energy_cost_savings}","KeyName":"Energy Cost Saving %","Visible":true},{"Target":"","Value":"{water_savings}","KeyName":"Water Saving %","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","Target":"","_Name":"SectionKeyValue3","Header":{"UseTopPadding":false,"Caption":"Sustainability"},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"Caption":"Attachments"},"Footer":{"Caption":""},"Controls":[{"IsEditable":false,"Value":"{folder_id}","_Type":"Control.Type.FormCell.Document","_Name":"attachments"}],"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"Target":"","_Type":"Page","_Name":"Capex_Detail","Caption":"Registration Details","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","Text":"","OnPress":"/capexMChRegistration/Actions/Capex/NavToCapex_Edit.action","Position":"right","SystemItem":"Edit","IsIconCircular":false},{"Target":"","_Name":"ActionBarItem1","Text":"","OnPress":"/capexMChRegistration/Rules/Capex/Capex_DeleteConfirmation.js","Position":"right","SystemItem":"Trash","IsIconCircular":false}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Pages/Capex/Capex_Edit.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Pages/Capex/Capex_Edit.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.FormCellContainer","_Name":"PageOneFormCell","Sections":[{"Target":"","Controls":[{"Target":"","Value":"{firstname}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"firstname","IsEditable":true,"IsVisible":true,"Caption":"First Name","PlaceHolder":"enter requester firstname "},{"Target":"","Value":"{lastname}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"lastname","IsEditable":true,"IsVisible":true,"Caption":"Last Name","PlaceHolder":"enter requester lastname"},{"Target":"","Value":"{email}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"email","IsEditable":true,"IsVisible":true,"Caption":"Email Address","PlaceHolder":"enter requester email address","KeyboardType":"Email"},{"Target":"","Value":"{userid}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"userid","IsEditable":true,"IsVisible":true,"Caption":"User ID","PlaceHolder":"user id"}],"Caption":"Requester","Visible":true},{"Target":"","Controls":[{"Target":"","Value":"{comments}","_Type":"Control.Type.FormCell.Note","_Name":"comments","IsEditable":true,"IsVisible":true,"PlaceHolder":"enter comments to the approver"}],"Caption":"Comments from Requester","Visible":true},{"Target":"","Controls":[{"Target":"","Value":"{requestid}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"requestid","IsEditable":false,"IsVisible":true,"Caption":"Request ID","PlaceHolder":"requestid"},{"Target":"","Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"title","IsEditable":true,"IsVisible":true,"Caption":"Title","PlaceHolder":"tite"},{"Target":"","Value":"{type_type}","_Type":"Control.Type.FormCell.ListPicker","_Name":"type_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Type","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select Capex Type","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/capexMChRegistration/Services/service1.service","EntitySet":"CapexType"},"DisplayValue":"{typedescription}","ReturnValue":"{type}"}},{"Target":"","Value":"{country_code}","_Type":"Control.Type.FormCell.ListPicker","_Name":"country_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Country/Region","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select country","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/capexMChRegistration/Services/service1.service","EntitySet":"Countries"},"DisplayValue":"{name}","ReturnValue":"{code}"}},{"Target":"","Value":"{business_unit_business_unit}","_Type":"Control.Type.FormCell.ListPicker","_Name":"businessunit_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Business Unit","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select Business Unit","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/capexMChRegistration/Services/service1.service","EntitySet":"BusinessUnits"},"DisplayValue":"{name}","ReturnValue":"{business_unit}"}},{"Target":"","Value":"{capex}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"capex","IsEditable":true,"IsVisible":true,"Caption":"CAPEX","PlaceHolder":"capex"},{"Target":"","Value":"{opex}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"opex","IsEditable":true,"IsVisible":true,"Caption":"OPEX","PlaceHolder":"opex"},{"Target":"","Value":"{totalcost}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"totalcost","IsEditable":true,"IsVisible":true,"Caption":"Total Cost","PlaceHolder":"total cost"},{"Target":"","Value":"{currency_code}","_Type":"Control.Type.FormCell.ListPicker","_Name":"currency_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Currency","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/capexMChRegistration/Services/service1.service","EntitySet":"Currencies"},"DisplayValue":"{name}","ReturnValue":"{code}"}},{"Target":"","Value":"{irr}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"irr","IsEditable":true,"IsVisible":true,"Caption":"IRR","PlaceHolder":"irr"},{"Target":"","Value":"{roi}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"roi","IsEditable":true,"IsVisible":true,"Caption":"ROI","PlaceHolder":"roi"}],"Caption":"Investment Details","Visible":true},{"Target":"","Controls":[{"Target":"","Value":"{description}","_Type":"Control.Type.FormCell.Note","_Name":"description","IsEditable":true,"IsVisible":true,"PlaceHolder":"PlaceHolder"}],"Caption":"Description","Visible":true},{"Controls":[{"Target":"","Value":"{energy_efficiency}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"energy_efficiency","Caption":"Energy Efficiency %"},{"Target":"","Value":"{co2_efficiency}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"co2_efficiency","Caption":"CO2 Efficiency %"},{"Target":"","Value":"{energy_cost_savings}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"energy_cost_savings","Caption":"Energy Cost Saving %"},{"Target":"","Value":"{water_savings}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"water_savings","Caption":"Water Saving %"},{"Value":"{folder_id}","_Type":"Control.Type.FormCell.Document","_Name":"attachment","Caption":"Attachments"}],"Target":"","Caption":"Sustainability","Visible":true}]}],"Target":"","_Type":"Page","_Name":"Capex_Edit","Caption":"Update Capital Expenditure Request","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","Text":"","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"OnPress":"/capexMChRegistration/Actions/CloseModalPage_Cancel.action"},{"Target":"","_Name":"ActionBarItem1","Text":"","SystemItem":"Save","Position":"right","IsIconCircular":false,"OnPress":"/capexMChRegistration/Actions/Capex/Capex_UpdateEntity.action"}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Pages/Capex/Capex_List.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Pages/Capex/Capex_List.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"Target":"","_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"Caption":"Capex Requests","UseTopPadding":false},"Footer":{"Caption":"All Requests","FooterStyle":"attribute","AccessoryType":"none","AttributeLabel":"/capexMChRegistration/Rules/Capex/Capex_Request_Count.js"},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/capexMChRegistration/Services/service1.service","EntitySet":"Capex","QueryOptions":"$expand=type,country,business_unit"},"_Name":"SectionObjectTable0","EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{title}","Subhead":"Request Id {requestid}","Footnote":"{type/typedescription}","Description":"{description}","StatusText":"{capex} {currency_code}","SubstatusText":"{country/name}","DetailImageIsCircular":false,"PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","OnPress":"/capexMChRegistration/Actions/Capex/NavToCapex_Detail.action"},"Search":{"Enabled":true,"Placeholder":"Search","BarcodeScanner":true,"Delay":30,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"Target":"","_Type":"Page","DataSubscriptions":["Capex"],"_Name":"Capex_List","Caption":"Registration","ActionBar":{"Items":[{"Target":"","_Name":"ActionBarItem0","Text":"","SystemItem":"Add","Position":"right","IsIconCircular":false,"OnPress":"/capexMChRegistration/Actions/Capex/NavToCapex_Create.action"}],"_Name":"ActionBar0"}}

/***/ }),

/***/ "./build.definitions/capexMChRegistration/Services/service1.service":
/*!**************************************************************************!*\
  !*** ./build.definitions/capexMChRegistration/Services/service1.service ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"../serviceonline/","OfflineEnabled":false,"LanguageURLParam":"sap-language","OnlineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "1.1\n"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map