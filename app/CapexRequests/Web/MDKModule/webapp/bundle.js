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

/***/ "./build.definitions/CapexRequests/Rules/Capex/Capex_DeleteConfirmation.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Rules/Capex/Capex_DeleteConfirmation.js ***!
  \*********************************************************************************/
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
    return dialogs.confirm("Delete current entity?").then((result) => {
        if (result === true) {
            return clientAPI.executeAction('/CapexRequests/Actions/Capex/Capex_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/CapexRequests/Rules/Capex/Capex_Request_Count.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Rules/Capex/Capex_Request_Count.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Capex_Request_Count)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function Capex_Request_Count(clientAPI) {
    let serviceName = "/CapexRequests/Services/service1.service";
    let entitySet = "Capex";
    return clientAPI.count(serviceName, entitySet, ' ').then((result) => {
			return result;
		}).catch(err => {
			console.log(err);
			return 0;
		});
}


/***/ }),

/***/ "./build.definitions/CapexRequests/Rules/OnWillUpdate.js":
/*!***************************************************************!*\
  !*** ./build.definitions/CapexRequests/Rules/OnWillUpdate.js ***!
  \***************************************************************/
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

/***/ "./build.definitions/CapexRequests/Styles/Styles.json":
/*!************************************************************!*\
  !*** ./build.definitions/CapexRequests/Styles/Styles.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/CapexRequests/jsconfig.json":
/*!*******************************************************!*\
  !*** ./build.definitions/CapexRequests/jsconfig.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let capexrequests_actions_capex_capex_createentity_action = __webpack_require__(/*! ./CapexRequests/Actions/Capex/Capex_CreateEntity.action */ "./build.definitions/CapexRequests/Actions/Capex/Capex_CreateEntity.action")
let capexrequests_actions_capex_capex_deleteentity_action = __webpack_require__(/*! ./CapexRequests/Actions/Capex/Capex_DeleteEntity.action */ "./build.definitions/CapexRequests/Actions/Capex/Capex_DeleteEntity.action")
let capexrequests_actions_capex_capex_updateentity_action = __webpack_require__(/*! ./CapexRequests/Actions/Capex/Capex_UpdateEntity.action */ "./build.definitions/CapexRequests/Actions/Capex/Capex_UpdateEntity.action")
let capexrequests_actions_capex_navtocapex_create_action = __webpack_require__(/*! ./CapexRequests/Actions/Capex/NavToCapex_Create.action */ "./build.definitions/CapexRequests/Actions/Capex/NavToCapex_Create.action")
let capexrequests_actions_capex_navtocapex_detail_action = __webpack_require__(/*! ./CapexRequests/Actions/Capex/NavToCapex_Detail.action */ "./build.definitions/CapexRequests/Actions/Capex/NavToCapex_Detail.action")
let capexrequests_actions_capex_navtocapex_edit_action = __webpack_require__(/*! ./CapexRequests/Actions/Capex/NavToCapex_Edit.action */ "./build.definitions/CapexRequests/Actions/Capex/NavToCapex_Edit.action")
let capexrequests_actions_capex_navtocapex_list_action = __webpack_require__(/*! ./CapexRequests/Actions/Capex/NavToCapex_List.action */ "./build.definitions/CapexRequests/Actions/Capex/NavToCapex_List.action")
let capexrequests_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./CapexRequests/Actions/CloseModalPage_Cancel.action */ "./build.definitions/CapexRequests/Actions/CloseModalPage_Cancel.action")
let capexrequests_actions_closemodalpage_complete_action = __webpack_require__(/*! ./CapexRequests/Actions/CloseModalPage_Complete.action */ "./build.definitions/CapexRequests/Actions/CloseModalPage_Complete.action")
let capexrequests_actions_closepage_action = __webpack_require__(/*! ./CapexRequests/Actions/ClosePage.action */ "./build.definitions/CapexRequests/Actions/ClosePage.action")
let capexrequests_actions_createentityfailuremessage_action = __webpack_require__(/*! ./CapexRequests/Actions/CreateEntityFailureMessage.action */ "./build.definitions/CapexRequests/Actions/CreateEntityFailureMessage.action")
let capexrequests_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./CapexRequests/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/CapexRequests/Actions/CreateEntitySuccessMessage.action")
let capexrequests_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./CapexRequests/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/CapexRequests/Actions/DeleteEntityFailureMessage.action")
let capexrequests_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./CapexRequests/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/CapexRequests/Actions/DeleteEntitySuccessMessage.action")
let capexrequests_actions_logout_action = __webpack_require__(/*! ./CapexRequests/Actions/Logout.action */ "./build.definitions/CapexRequests/Actions/Logout.action")
let capexrequests_actions_service_initializeonline_action = __webpack_require__(/*! ./CapexRequests/Actions/Service/InitializeOnline.action */ "./build.definitions/CapexRequests/Actions/Service/InitializeOnline.action")
let capexrequests_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./CapexRequests/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/CapexRequests/Actions/Service/InitializeOnlineFailureMessage.action")
let capexrequests_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./CapexRequests/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/CapexRequests/Actions/Service/InitializeOnlineSuccessMessage.action")
let capexrequests_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./CapexRequests/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/CapexRequests/Actions/UpdateEntityFailureMessage.action")
let capexrequests_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./CapexRequests/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/CapexRequests/Actions/UpdateEntitySuccessMessage.action")
let capexrequests_globals_appdefinition_version_global = __webpack_require__(/*! ./CapexRequests/Globals/AppDefinition_Version.global */ "./build.definitions/CapexRequests/Globals/AppDefinition_Version.global")
let capexrequests_i18n_i18n_properties = __webpack_require__(/*! ./CapexRequests/i18n/i18n.properties */ "./build.definitions/CapexRequests/i18n/i18n.properties")
let capexrequests_jsconfig_json = __webpack_require__(/*! ./CapexRequests/jsconfig.json */ "./build.definitions/CapexRequests/jsconfig.json")
let capexrequests_pages_capex_capex_create_page = __webpack_require__(/*! ./CapexRequests/Pages/Capex/Capex_Create.page */ "./build.definitions/CapexRequests/Pages/Capex/Capex_Create.page")
let capexrequests_pages_capex_capex_detail_page = __webpack_require__(/*! ./CapexRequests/Pages/Capex/Capex_Detail.page */ "./build.definitions/CapexRequests/Pages/Capex/Capex_Detail.page")
let capexrequests_pages_capex_capex_edit_page = __webpack_require__(/*! ./CapexRequests/Pages/Capex/Capex_Edit.page */ "./build.definitions/CapexRequests/Pages/Capex/Capex_Edit.page")
let capexrequests_pages_capex_capex_list_page = __webpack_require__(/*! ./CapexRequests/Pages/Capex/Capex_List.page */ "./build.definitions/CapexRequests/Pages/Capex/Capex_List.page")
let capexrequests_rules_capex_capex_deleteconfirmation_js = __webpack_require__(/*! ./CapexRequests/Rules/Capex/Capex_DeleteConfirmation.js */ "./build.definitions/CapexRequests/Rules/Capex/Capex_DeleteConfirmation.js")
let capexrequests_rules_capex_capex_request_count_js = __webpack_require__(/*! ./CapexRequests/Rules/Capex/Capex_Request_Count.js */ "./build.definitions/CapexRequests/Rules/Capex/Capex_Request_Count.js")
let capexrequests_rules_onwillupdate_js = __webpack_require__(/*! ./CapexRequests/Rules/OnWillUpdate.js */ "./build.definitions/CapexRequests/Rules/OnWillUpdate.js")
let capexrequests_services_service1_service = __webpack_require__(/*! ./CapexRequests/Services/service1.service */ "./build.definitions/CapexRequests/Services/service1.service")
let capexrequests_styles_styles_css = __webpack_require__(/*! ./CapexRequests/Styles/Styles.css */ "./build.definitions/CapexRequests/Styles/Styles.css")
let capexrequests_styles_styles_json = __webpack_require__(/*! ./CapexRequests/Styles/Styles.json */ "./build.definitions/CapexRequests/Styles/Styles.json")
let capexrequests_styles_styles_less = __webpack_require__(/*! ./CapexRequests/Styles/Styles.less */ "./build.definitions/CapexRequests/Styles/Styles.less")
let capexrequests_styles_styles_nss = __webpack_require__(/*! ./CapexRequests/Styles/Styles.nss */ "./build.definitions/CapexRequests/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	capexrequests_actions_capex_capex_createentity_action : capexrequests_actions_capex_capex_createentity_action,
	capexrequests_actions_capex_capex_deleteentity_action : capexrequests_actions_capex_capex_deleteentity_action,
	capexrequests_actions_capex_capex_updateentity_action : capexrequests_actions_capex_capex_updateentity_action,
	capexrequests_actions_capex_navtocapex_create_action : capexrequests_actions_capex_navtocapex_create_action,
	capexrequests_actions_capex_navtocapex_detail_action : capexrequests_actions_capex_navtocapex_detail_action,
	capexrequests_actions_capex_navtocapex_edit_action : capexrequests_actions_capex_navtocapex_edit_action,
	capexrequests_actions_capex_navtocapex_list_action : capexrequests_actions_capex_navtocapex_list_action,
	capexrequests_actions_closemodalpage_cancel_action : capexrequests_actions_closemodalpage_cancel_action,
	capexrequests_actions_closemodalpage_complete_action : capexrequests_actions_closemodalpage_complete_action,
	capexrequests_actions_closepage_action : capexrequests_actions_closepage_action,
	capexrequests_actions_createentityfailuremessage_action : capexrequests_actions_createentityfailuremessage_action,
	capexrequests_actions_createentitysuccessmessage_action : capexrequests_actions_createentitysuccessmessage_action,
	capexrequests_actions_deleteentityfailuremessage_action : capexrequests_actions_deleteentityfailuremessage_action,
	capexrequests_actions_deleteentitysuccessmessage_action : capexrequests_actions_deleteentitysuccessmessage_action,
	capexrequests_actions_logout_action : capexrequests_actions_logout_action,
	capexrequests_actions_service_initializeonline_action : capexrequests_actions_service_initializeonline_action,
	capexrequests_actions_service_initializeonlinefailuremessage_action : capexrequests_actions_service_initializeonlinefailuremessage_action,
	capexrequests_actions_service_initializeonlinesuccessmessage_action : capexrequests_actions_service_initializeonlinesuccessmessage_action,
	capexrequests_actions_updateentityfailuremessage_action : capexrequests_actions_updateentityfailuremessage_action,
	capexrequests_actions_updateentitysuccessmessage_action : capexrequests_actions_updateentitysuccessmessage_action,
	capexrequests_globals_appdefinition_version_global : capexrequests_globals_appdefinition_version_global,
	capexrequests_i18n_i18n_properties : capexrequests_i18n_i18n_properties,
	capexrequests_jsconfig_json : capexrequests_jsconfig_json,
	capexrequests_pages_capex_capex_create_page : capexrequests_pages_capex_capex_create_page,
	capexrequests_pages_capex_capex_detail_page : capexrequests_pages_capex_capex_detail_page,
	capexrequests_pages_capex_capex_edit_page : capexrequests_pages_capex_capex_edit_page,
	capexrequests_pages_capex_capex_list_page : capexrequests_pages_capex_capex_list_page,
	capexrequests_rules_capex_capex_deleteconfirmation_js : capexrequests_rules_capex_capex_deleteconfirmation_js,
	capexrequests_rules_capex_capex_request_count_js : capexrequests_rules_capex_capex_request_count_js,
	capexrequests_rules_onwillupdate_js : capexrequests_rules_onwillupdate_js,
	capexrequests_services_service1_service : capexrequests_services_service1_service,
	capexrequests_styles_styles_css : capexrequests_styles_styles_css,
	capexrequests_styles_styles_json : capexrequests_styles_styles_json,
	capexrequests_styles_styles_less : capexrequests_styles_styles_less,
	capexrequests_styles_styles_nss : capexrequests_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ }),

/***/ "./build.definitions/CapexRequests/i18n/i18n.properties":
/*!**************************************************************!*\
  !*** ./build.definitions/CapexRequests/i18n/i18n.properties ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "CreatedAt=CreatedAt\nDescription=Description\nCreatedBy=CreatedBy\nChangedAt=ChangedAt\nChangedBy=ChangedBy\nCurrency=Currency\nCountry=Country\nName=Name\nCurrencyCode=CurrencyCode\nCurrencySymbol=CurrencySymbol\nCountryCode=CountryCode\n"

/***/ }),

/***/ "./build.definitions/CapexRequests/Styles/Styles.css":
/*!***********************************************************!*\
  !*** ./build.definitions/CapexRequests/Styles/Styles.css ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n", "",{"version":3,"sources":["webpack://./build.definitions/CapexRequests/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/CapexRequests/Styles/Styles.less":
/*!************************************************************!*\
  !*** ./build.definitions/CapexRequests/Styles/Styles.less ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/", "",{"version":3,"sources":["webpack://./build.definitions/CapexRequests/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/CapexRequests/Styles/Styles.nss":
/*!***********************************************************!*\
  !*** ./build.definitions/CapexRequests/Styles/Styles.nss ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
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

module.exports = {"_Name":"CapexRequests","Version":"/CapexRequests/Globals/AppDefinition_Version.global","MainPage":"/CapexRequests/Pages/Capex/Capex_List.page","OnLaunch":["/CapexRequests/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/CapexRequests/Rules/OnWillUpdate.js","OnDidUpdate":"/CapexRequests/Actions/Service/InitializeOnline.action","Styles":"/CapexRequests/Styles/Styles.less","Localization":"/CapexRequests/i18n/i18n.properties","_SchemaVersion":"6.1","StyleSheets":{"Styles":{"css":"/CapexRequests/Styles/Styles.css","ios":"/CapexRequests/Styles/Styles.nss","android":"/CapexRequests/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/Capex/Capex_CreateEntity.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/Capex/Capex_CreateEntity.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/CapexRequests/Actions/CreateEntityFailureMessage.action","OnSuccess":"/CapexRequests/Actions/CreateEntitySuccessMessage.action","Properties":{"requestid":"#Control:requestid/#Value","title":"#Control:title/#Value","firstname":"#Control:firstname/#Value","lastname":"#Control:lastname/#Value","email":"#Control:email/#Value","userid":"#Control:userid/#Value","comments":"#Control:comments/#Value","totalcost":"#Control:totalcost/#Value","type_type":"#Control:type_listpicker/#SelectedValue","capex":"#Control:capex/#Value","opex":"#Control:opex/#Value","currency_code":"#Control:currency_listpicker/#SelectedValue","roi":"#Control:roi/#Value","irr":"#Control:irr/#Value","country_code":"#Control:country_listpicker/#SelectedValue","business_unit_business_unit":"#Control:businessunit_listpicker/#SelectedValue","description":"#Control:description/#Value","energy_efficiency":"#Control:energy_efficiency/#Value","co2_efficiency":"#Control:co2_efficiency/#Value","energy_cost_savings":"#Control:energy_cost_savings/#Value","water_savings":"#Control:water_savings/#Value","folder_id":"#Control:attachment/#Value"},"Target":{"EntitySet":"Capex","Service":"/CapexRequests/Services/service1.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/Capex/Capex_DeleteEntity.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/Capex/Capex_DeleteEntity.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Capex","Service":"/CapexRequests/Services/service1.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/CapexRequests/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/CapexRequests/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/Capex/Capex_UpdateEntity.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/Capex/Capex_UpdateEntity.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Capex","Service":"/CapexRequests/Services/service1.service","ReadLink":"{@odata.readLink}"},"Properties":{"requestid":"#Control:requestid/#Value","title":"#Control:title/#Value","firstname":"#Control:firstname/#Value","lastname":"#Control:lastname/#Value","email":"#Control:email/#Value","userid":"#Control:userid/#Value","comments":"#Control:comments/#Value","totalcost":"#Control:totalcost/#Value","type_type":"#Control:type_listpicker/#SelectedValue","capex":"#Control:capex/#Value","opex":"#Control:opex/#Value","currency_code":"#Control:currency_listpicker/#SelectedValue","roi":"#Control:roi/#Value","irr":"#Control:irr/#Value","country_code":"#Control:country_listpicker/#SelectedValue","business_unit_business_unit":"#Control:businessunit_listpicker/#SelectedValue","description":"#Control:description/#Value","energy_efficiency":"#Control:energy_efficiency/#Value","co2_efficiency":"#Control:co2_efficiency/#Value","energy_cost_savings":"#Control:energy_cost_savings/#Value","water_savings":"#Control:water_savings/#Value","folder_id":"#Control:attachment/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/CapexRequests/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/CapexRequests/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/Capex/NavToCapex_Create.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/Capex/NavToCapex_Create.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/CapexRequests/Pages/Capex/Capex_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/Capex/NavToCapex_Detail.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/Capex/NavToCapex_Detail.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/CapexRequests/Pages/Capex/Capex_Detail.page"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/Capex/NavToCapex_Edit.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/Capex/NavToCapex_Edit.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/CapexRequests/Pages/Capex/Capex_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/Capex/NavToCapex_List.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/Capex/NavToCapex_List.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/CapexRequests/Pages/Capex/Capex_List.page"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/CloseModalPage_Cancel.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/CloseModalPage_Cancel.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/CloseModalPage_Complete.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/CloseModalPage_Complete.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/ClosePage.action":
/*!******************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/ClosePage.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/CreateEntityFailureMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/CreateEntityFailureMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/CreateEntitySuccessMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/CreateEntitySuccessMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/CapexRequests/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/DeleteEntityFailureMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/DeleteEntityFailureMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/DeleteEntitySuccessMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/DeleteEntitySuccessMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/CapexRequests/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/Logout.action":
/*!***************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/Logout.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/Service/InitializeOnline.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/Service/InitializeOnline.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/CapexRequests/Services/service1.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/CapexRequests/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/CapexRequests/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/Service/InitializeOnlineFailureMessage.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/UpdateEntityFailureMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/UpdateEntityFailureMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Actions/UpdateEntitySuccessMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Actions/UpdateEntitySuccessMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/CapexRequests/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Globals/AppDefinition_Version.global":
/*!******************************************************************************!*\
  !*** ./build.definitions/CapexRequests/Globals/AppDefinition_Version.global ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Services/service1.service":
/*!*******************************************************************!*\
  !*** ./build.definitions/CapexRequests/Services/service1.service ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"../serviceonline/","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/CapexRequests/Pages/Capex/Capex_Create.page":
/*!***********************************************************************!*\
  !*** ./build.definitions/CapexRequests/Pages/Capex/Capex_Create.page ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/CapexRequests/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/CapexRequests/Actions/Capex/Capex_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"New Capital Expenditure Request","Controls":[{"Sections":[{"Target":"","Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"firstname","IsEditable":true,"IsVisible":true,"Caption":"First Name","PlaceHolder":"enter requester firstname "},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"lastname","IsEditable":true,"IsVisible":true,"Caption":"Last Name","PlaceHolder":"enter requester lastname"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"email","IsEditable":true,"IsVisible":true,"Caption":"Email Address","PlaceHolder":"enter requester email address","KeyboardType":"Email"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"userid","IsEditable":true,"IsVisible":true,"Caption":"User ID","PlaceHolder":"PlaceHolder"}],"Caption":"Requester","Visible":true},{"Controls":[{"_Type":"Control.Type.FormCell.Note","_Name":"comments","IsEditable":true,"IsVisible":true,"PlaceHolder":"enter comments to the approver"}],"Caption":"Comments from Requester","Visible":true},{"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"requestid","IsEditable":true,"IsVisible":true,"Caption":"Request ID","PlaceHolder":"requestid"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"title","IsEditable":true,"IsVisible":true,"Caption":"Title","PlaceHolder":"title"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"type_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Type","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select Capex Type","IsSelectedSectionEnabled":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/CapexRequests/Services/service1.service","EntitySet":"CapexType"},"DisplayValue":"{typedescription}","ReturnValue":"{type}"}},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"country_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Country/Region","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select country","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/CapexRequests/Services/service1.service","EntitySet":"Countries"},"DisplayValue":"{name}","ReturnValue":"{code}"}},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"businessunit_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Business Unit","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select Business Unit","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/CapexRequests/Services/service1.service","EntitySet":"BusinessUnits"},"DisplayValue":"{name}","ReturnValue":"{business_unit}"}},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"capex","IsEditable":true,"IsVisible":true,"Caption":"CAPEX","PlaceHolder":"capex"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"opex","IsEditable":true,"IsVisible":true,"Caption":"OPEX","PlaceHolder":"opex"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"totalcost","IsEditable":true,"IsVisible":true,"Caption":"Total Cost","PlaceHolder":"total cost"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"currency_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Currency","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select Currency","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true},"PickerItems":{"Target":{"Service":"/CapexRequests/Services/service1.service","EntitySet":"Currencies"},"DisplayValue":"{name}","ReturnValue":"{code}"}},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"irr","IsEditable":true,"IsVisible":true,"Caption":"IRR","PlaceHolder":"irr"},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"roi","IsEditable":true,"IsVisible":true,"Caption":"ROI","PlaceHolder":"roi"}],"Caption":"Investment Details","Visible":true},{"Controls":[{"_Type":"Control.Type.FormCell.Note","_Name":"description","IsEditable":true,"IsVisible":true,"PlaceHolder":"PlaceHolder"}],"Caption":"Description","Visible":true},{"Controls":[{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"energy_efficiency","Caption":"Energy Efficiency %"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"co2_efficiency","Caption":"CO2 Efficiency %"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"energy_cost_savings","Caption":"Energy Cost Saving %"},{"Target":"","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"water_savings","Caption":"Water Saving %"},{"_Type":"Control.Type.FormCell.Document","_Name":"attachment","Caption":"Attachments"}],"Target":"","Caption":"Sustainability","Visible":true}],"_Name":"FormCellContainer","_Type":"Control.Type.FormCellContainer"}],"_Type":"Page","_Name":"Capex_Create"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Pages/Capex/Capex_Detail.page":
/*!***********************************************************************!*\
  !*** ./build.definitions/CapexRequests/Pages/Capex/Capex_Detail.page ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Request Details","ActionBar":{"Items":[{"OnPress":"/CapexRequests/Actions/Capex/NavToCapex_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/CapexRequests/Rules/Capex/Capex_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Subhead":"Request Id {requestid}","Footnote":"{type/typedescription}","Description":"{description}","StatusText":"{capex} {currency_code}","SubstatusText":"{country/name}","HeadlineText":"{title}","Tags":[],"Target":{"Service":"/CapexRequests/Services/service1.service","EntitySet":"Capex","QueryOptions":"$expand=type,country,business_unit&$filter=ID eq {ID}"}},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0"},{"KeyAndValues":[{"Value":"{firstname}","KeyName":"First Name","Visible":true},{"Value":"{lastname}","KeyName":"Last Name","Visible":true},{"Value":"{email}","KeyName":"Email","Visible":true},{"Value":"{userid}","KeyName":"User ID","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Header":{"UseTopPadding":false,"Caption":"Requestor"},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"KeyAndValues":[{"Value":"{country/name}","KeyName":"Country/Region","Visible":true},{"Value":"{business_unit/name}","KeyName":"Business Unit","Visible":true},{"Value":"{capex}","KeyName":"CAPEX","Visible":true},{"Value":"{opex}","KeyName":"OPEX","Visible":true},{"Value":"{totalcost}","KeyName":"Total Cost","Visible":true},{"Value":"{currency_code}","KeyName":"Currency","Visible":true},{"Value":"{irr}","KeyName":"IRR","Visible":true},{"Value":"{roi}","KeyName":"ROI","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue2","Header":{"UseTopPadding":false,"Caption":"Investment Details"},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"KeyAndValues":[{"Value":"{energy_efficiency}","KeyName":"Energy Efficiency %","Visible":true},{"Value":"{co2_efficiency}","KeyName":"CO2 Efficiency %","Visible":true},{"Value":"{energy_cost_savings}","KeyName":"Energy Cost Saving %","Visible":true},{"Value":"{water_savings}","KeyName":"Water Saving %","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue3","Header":{"UseTopPadding":false,"Caption":"Sustainability"},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"Caption":"Attachments"},"Footer":{"Caption":""},"Controls":[{"IsEditable":false,"Value":"{folder_id}","_Type":"Control.Type.FormCell.Document","_Name":"attachments"}],"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Capex_Detail"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Pages/Capex/Capex_Edit.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/CapexRequests/Pages/Capex/Capex_Edit.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Capital Expenditure Request","ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/CapexRequests/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/CapexRequests/Actions/Capex/Capex_UpdateEntity.action"}]},"Controls":[{"Sections":[{"Controls":[{"Value":"{firstname}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"firstname","IsEditable":true,"IsVisible":true,"Caption":"First Name","PlaceHolder":"enter requester firstname "},{"Value":"{lastname}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"lastname","IsEditable":true,"IsVisible":true,"Caption":"Last Name","PlaceHolder":"enter requester lastname"},{"Value":"{email}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"email","IsEditable":true,"IsVisible":true,"Caption":"Email Address","PlaceHolder":"enter requester email address","KeyboardType":"Email"},{"Value":"{userid}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"userid","IsEditable":true,"IsVisible":true,"Caption":"User ID","PlaceHolder":"user id"}],"Caption":"Requester","Visible":true},{"Controls":[{"Value":"{comments}","_Type":"Control.Type.FormCell.Note","_Name":"comments","IsEditable":true,"IsVisible":true,"PlaceHolder":"enter comments to the approver"}],"Caption":"Comments from Requester","Visible":true},{"Controls":[{"Value":"{requestid}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"requestid","IsEditable":false,"IsVisible":true,"Caption":"Request ID","PlaceHolder":"requestid"},{"Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"title","IsEditable":true,"IsVisible":true,"Caption":"Title","PlaceHolder":"tite"},{"Value":"{type_type}","_Type":"Control.Type.FormCell.ListPicker","_Name":"type_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Type","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select Capex Type","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/CapexRequests/Services/service1.service","EntitySet":"CapexType"},"DisplayValue":"{typedescription}","ReturnValue":"{type}"}},{"Value":"{country_code}","_Type":"Control.Type.FormCell.ListPicker","_Name":"country_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Country/Region","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select country","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/CapexRequests/Services/service1.service","EntitySet":"Countries"},"DisplayValue":"{name}","ReturnValue":"{code}"}},{"Value":"{business_unit_business_unit}","_Type":"Control.Type.FormCell.ListPicker","_Name":"businessunit_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Business Unit","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select Business Unit","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/CapexRequests/Services/service1.service","EntitySet":"BusinessUnits"},"DisplayValue":"{name}","ReturnValue":"{business_unit}"}},{"Value":"{capex}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"capex","IsEditable":true,"IsVisible":true,"Caption":"CAPEX","PlaceHolder":"capex"},{"Value":"{opex}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"opex","IsEditable":true,"IsVisible":true,"Caption":"OPEX","PlaceHolder":"opex"},{"Value":"{totalcost}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"totalcost","IsEditable":true,"IsVisible":true,"Caption":"Total Cost","PlaceHolder":"total cost"},{"Value":"{currency_code}","_Type":"Control.Type.FormCell.ListPicker","_Name":"currency_listpicker","IsPickerDismissedOnSelection":true,"IsEditable":true,"IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Currency","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"Search":{"Enabled":true,"MinimumCharacterThreshold":3},"PickerItems":{"Target":{"Service":"/CapexRequests/Services/service1.service","EntitySet":"Currencies"},"DisplayValue":"{name}","ReturnValue":"{code}"}},{"Value":"{irr}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"irr","IsEditable":true,"IsVisible":true,"Caption":"IRR","PlaceHolder":"irr"},{"Value":"{roi}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"roi","IsEditable":true,"IsVisible":true,"Caption":"ROI","PlaceHolder":"roi"}],"Caption":"Investment Details","Visible":true},{"Target":"","Controls":[{"Value":"{description}","_Type":"Control.Type.FormCell.Note","_Name":"description","IsEditable":true,"IsVisible":true,"PlaceHolder":"PlaceHolder"}],"Caption":"Description","Visible":true},{"Controls":[{"Value":"{energy_efficiency}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"energy_efficiency","Caption":"Energy Efficiency %"},{"Value":"{co2_efficiency}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"co2_efficiency","Caption":"CO2 Efficiency %"},{"Value":"{energy_cost_savings}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"energy_cost_savings","Caption":"Energy Cost Saving %"},{"Value":"{water_savings}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"water_savings","Caption":"Water Saving %"},{"Value":"{folder_id}","_Type":"Control.Type.FormCell.Document","_Name":"attachment","Caption":"Attachments"}],"Caption":"Sustainability","Visible":true}],"_Name":"PageOneFormCell","_Type":"Control.Type.FormCellContainer"}],"_Type":"Page","_Name":"Capex_Edit"}

/***/ }),

/***/ "./build.definitions/CapexRequests/Pages/Capex/Capex_List.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/CapexRequests/Pages/Capex/Capex_List.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Capex Requests","ActionBar":{"Items":[{"OnPress":"/CapexRequests/Actions/Capex/NavToCapex_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"_Name":"SectionHeader0","UseTopPadding":false,"Caption":"Capex Requests"},"Footer":{"_Name":"SectionFooter0","Caption":"All Requests","AttributeLabel":"/CapexRequests/Rules/Capex/Capex_Request_Count.js","FooterStyle":"attribute","UseBottomPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","DetailImageIsCircular":false,"OnPress":"/CapexRequests/Actions/Capex/NavToCapex_Detail.action","PreserveIconStackSpacing":false,"Title":"{title}","Subhead":"Request Id {requestid}","Footnote":"{type/typedescription}","Description":"{description}","StatusText":"{capex} {currency_code}","SubstatusText":"{country/name}"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Capex","Service":"/CapexRequests/Services/service1.service","QueryOptions":"$expand=type,country,business_unit"},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","ToolBar":{"Items":[{"_Name":"LogoutToolbarItem","_Type":"Control.Type.ToolbarItem","Caption":"Logout","OnPress":"/CapexRequests/Actions/Logout.action"}]},"_Name":"Capex_List"}

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