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

/***/ "./build.definitions/CapexApprovalUI/Rules/OnWillUpdate.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Rules/OnWillUpdate.js ***!
  \*****************************************************************/
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

/***/ "./build.definitions/CapexApprovalUI/Rules/UserTask/InitializeODataServiceAndContext.js":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Rules/UserTask/InitializeODataServiceAndContext.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InitializeODataServiceAndContext)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function InitializeODataServiceAndContext(clientAPI) {
    return clientAPI.executeAction("/CapexApprovalUI/Actions/Service/InitializeOnline.action").then(() => {
        return clientAPI.executeAction("/CapexApprovalUI/Actions/UserTask/ReadFromService.action").then((result) => {
            clientAPI.getAppClientData().WorkflowUsertask.InitialBinding = result.data.getItem(0);
        });
    });
}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Rules/UserTask/OnDecisionUpdateEntitySuccess.js":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Rules/UserTask/OnDecisionUpdateEntitySuccess.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnDecisionUpdateEntitySuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnDecisionUpdateEntitySuccess(clientAPI) {
    window.parent.postMessage("actionCompletion", window.location.origin);
    clientAPI.executeAction("/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntitySuccessMessage.action");
}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Styles/Styles.json":
/*!**************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Styles/Styles.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/jsconfig.json":
/*!*********************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/jsconfig.json ***!
  \*********************************************************/
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
let capexapprovalui_actions_closepage_action = __webpack_require__(/*! ./CapexApprovalUI/Actions/ClosePage.action */ "./build.definitions/CapexApprovalUI/Actions/ClosePage.action")
let capexapprovalui_actions_logout_action = __webpack_require__(/*! ./CapexApprovalUI/Actions/Logout.action */ "./build.definitions/CapexApprovalUI/Actions/Logout.action")
let capexapprovalui_actions_service_initializeonline_action = __webpack_require__(/*! ./CapexApprovalUI/Actions/Service/InitializeOnline.action */ "./build.definitions/CapexApprovalUI/Actions/Service/InitializeOnline.action")
let capexapprovalui_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./CapexApprovalUI/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/CapexApprovalUI/Actions/Service/InitializeOnlineFailureMessage.action")
let capexapprovalui_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./CapexApprovalUI/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/CapexApprovalUI/Actions/Service/InitializeOnlineSuccessMessage.action")
let capexapprovalui_actions_usertask_decisionupdateentity_action = __webpack_require__(/*! ./CapexApprovalUI/Actions/UserTask/DecisionUpdateEntity.action */ "./build.definitions/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntity.action")
let capexapprovalui_actions_usertask_decisionupdateentityfailuremessage_action = __webpack_require__(/*! ./CapexApprovalUI/Actions/UserTask/DecisionUpdateEntityFailureMessage.action */ "./build.definitions/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntityFailureMessage.action")
let capexapprovalui_actions_usertask_decisionupdateentitysuccessmessage_action = __webpack_require__(/*! ./CapexApprovalUI/Actions/UserTask/DecisionUpdateEntitySuccessMessage.action */ "./build.definitions/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntitySuccessMessage.action")
let capexapprovalui_actions_usertask_readfromservice_action = __webpack_require__(/*! ./CapexApprovalUI/Actions/UserTask/ReadFromService.action */ "./build.definitions/CapexApprovalUI/Actions/UserTask/ReadFromService.action")
let capexapprovalui_globals_appdefinition_version_global = __webpack_require__(/*! ./CapexApprovalUI/Globals/AppDefinition_Version.global */ "./build.definitions/CapexApprovalUI/Globals/AppDefinition_Version.global")
let capexapprovalui_i18n_i18n_properties = __webpack_require__(/*! ./CapexApprovalUI/i18n/i18n.properties */ "./build.definitions/CapexApprovalUI/i18n/i18n.properties")
let capexapprovalui_jsconfig_json = __webpack_require__(/*! ./CapexApprovalUI/jsconfig.json */ "./build.definitions/CapexApprovalUI/jsconfig.json")
let capexapprovalui_pages_main_page = __webpack_require__(/*! ./CapexApprovalUI/Pages/Main.page */ "./build.definitions/CapexApprovalUI/Pages/Main.page")
let capexapprovalui_rules_onwillupdate_js = __webpack_require__(/*! ./CapexApprovalUI/Rules/OnWillUpdate.js */ "./build.definitions/CapexApprovalUI/Rules/OnWillUpdate.js")
let capexapprovalui_rules_usertask_initializeodataserviceandcontext_js = __webpack_require__(/*! ./CapexApprovalUI/Rules/UserTask/InitializeODataServiceAndContext.js */ "./build.definitions/CapexApprovalUI/Rules/UserTask/InitializeODataServiceAndContext.js")
let capexapprovalui_rules_usertask_ondecisionupdateentitysuccess_js = __webpack_require__(/*! ./CapexApprovalUI/Rules/UserTask/OnDecisionUpdateEntitySuccess.js */ "./build.definitions/CapexApprovalUI/Rules/UserTask/OnDecisionUpdateEntitySuccess.js")
let capexapprovalui_services_service1_service = __webpack_require__(/*! ./CapexApprovalUI/Services/service1.service */ "./build.definitions/CapexApprovalUI/Services/service1.service")
let capexapprovalui_styles_styles_css = __webpack_require__(/*! ./CapexApprovalUI/Styles/Styles.css */ "./build.definitions/CapexApprovalUI/Styles/Styles.css")
let capexapprovalui_styles_styles_json = __webpack_require__(/*! ./CapexApprovalUI/Styles/Styles.json */ "./build.definitions/CapexApprovalUI/Styles/Styles.json")
let capexapprovalui_styles_styles_less = __webpack_require__(/*! ./CapexApprovalUI/Styles/Styles.less */ "./build.definitions/CapexApprovalUI/Styles/Styles.less")
let capexapprovalui_styles_styles_nss = __webpack_require__(/*! ./CapexApprovalUI/Styles/Styles.nss */ "./build.definitions/CapexApprovalUI/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	capexapprovalui_actions_closepage_action : capexapprovalui_actions_closepage_action,
	capexapprovalui_actions_logout_action : capexapprovalui_actions_logout_action,
	capexapprovalui_actions_service_initializeonline_action : capexapprovalui_actions_service_initializeonline_action,
	capexapprovalui_actions_service_initializeonlinefailuremessage_action : capexapprovalui_actions_service_initializeonlinefailuremessage_action,
	capexapprovalui_actions_service_initializeonlinesuccessmessage_action : capexapprovalui_actions_service_initializeonlinesuccessmessage_action,
	capexapprovalui_actions_usertask_decisionupdateentity_action : capexapprovalui_actions_usertask_decisionupdateentity_action,
	capexapprovalui_actions_usertask_decisionupdateentityfailuremessage_action : capexapprovalui_actions_usertask_decisionupdateentityfailuremessage_action,
	capexapprovalui_actions_usertask_decisionupdateentitysuccessmessage_action : capexapprovalui_actions_usertask_decisionupdateentitysuccessmessage_action,
	capexapprovalui_actions_usertask_readfromservice_action : capexapprovalui_actions_usertask_readfromservice_action,
	capexapprovalui_globals_appdefinition_version_global : capexapprovalui_globals_appdefinition_version_global,
	capexapprovalui_i18n_i18n_properties : capexapprovalui_i18n_i18n_properties,
	capexapprovalui_jsconfig_json : capexapprovalui_jsconfig_json,
	capexapprovalui_pages_main_page : capexapprovalui_pages_main_page,
	capexapprovalui_rules_onwillupdate_js : capexapprovalui_rules_onwillupdate_js,
	capexapprovalui_rules_usertask_initializeodataserviceandcontext_js : capexapprovalui_rules_usertask_initializeodataserviceandcontext_js,
	capexapprovalui_rules_usertask_ondecisionupdateentitysuccess_js : capexapprovalui_rules_usertask_ondecisionupdateentitysuccess_js,
	capexapprovalui_services_service1_service : capexapprovalui_services_service1_service,
	capexapprovalui_styles_styles_css : capexapprovalui_styles_styles_css,
	capexapprovalui_styles_styles_json : capexapprovalui_styles_styles_json,
	capexapprovalui_styles_styles_less : capexapprovalui_styles_styles_less,
	capexapprovalui_styles_styles_nss : capexapprovalui_styles_styles_nss,
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

/***/ "./build.definitions/CapexApprovalUI/i18n/i18n.properties":
/*!****************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/i18n/i18n.properties ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "CreatedAt=CreatedAt\nDescription=Description\nCreatedBy=CreatedBy\nChangedAt=ChangedAt\nChangedBy=ChangedBy\nCurrency=Currency\nCountry=Country\nName=Name\nCurrencyCode=CurrencyCode\nCurrencySymbol=CurrencySymbol\nCountryCode=CountryCode\n"

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Styles/Styles.css":
/*!*************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Styles/Styles.css ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n", "",{"version":3,"sources":["webpack://./build.definitions/CapexApprovalUI/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Styles/Styles.less":
/*!**************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Styles/Styles.less ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/", "",{"version":3,"sources":["webpack://./build.definitions/CapexApprovalUI/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Styles/Styles.nss":
/*!*************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Styles/Styles.nss ***!
  \*************************************************************/
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

module.exports = {"_Name":"CapexApprovalUI","Version":"/CapexApprovalUI/Globals/AppDefinition_Version.global","MainPage":"/CapexApprovalUI/Pages/Main.page","OnLaunch":["/CapexApprovalUI/Rules/UserTask/InitializeODataServiceAndContext.js"],"OnWillUpdate":"/CapexApprovalUI/Rules/OnWillUpdate.js","OnDidUpdate":"/CapexApprovalUI/Actions/Service/InitializeOnline.action","Styles":"/CapexApprovalUI/Styles/Styles.less","Localization":"/CapexApprovalUI/i18n/i18n.properties","OnWorkflowUpdate":"/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntity.action","_SchemaVersion":"6.1","StyleSheets":{"Styles":{"css":"/CapexApprovalUI/Styles/Styles.css","ios":"/CapexApprovalUI/Styles/Styles.nss","android":"/CapexApprovalUI/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Actions/ClosePage.action":
/*!********************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Actions/ClosePage.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Actions/Logout.action":
/*!*****************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Actions/Logout.action ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Actions/Service/InitializeOnline.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Actions/Service/InitializeOnline.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/CapexApprovalUI/Services/service1.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/CapexApprovalUI/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/CapexApprovalUI/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Actions/Service/InitializeOnlineFailureMessage.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntity.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntity.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Capex","Service":"/CapexApprovalUI/Services/service1.service","QueryOptions":"$filter={{#Application/#ClientData/WorkflowUsertask/taskData/capEntityFilter}}"},"Properties":{"taskDecisionId":"{#Application/#ClientData/WorkflowUsertask/taskAction/taskDecisionID}","taskInstanceId":"{#Application/#ClientData/WorkflowUsertask/taskData/InstanceID}"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/CapexApprovalUI/Rules/UserTask/OnDecisionUpdateEntitySuccess.js","OnFailure":"/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntityFailureMessage.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntityFailureMessage.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntitySuccessMessage.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Actions/UserTask/DecisionUpdateEntitySuccessMessage.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Actions/UserTask/ReadFromService.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Actions/UserTask/ReadFromService.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.Read","Target":{"EntitySet":"Capex","Service":"/CapexApprovalUI/Services/service1.service","QueryOptions":"$filter={{#Application/#ClientData/WorkflowUsertask/taskData/capEntityFilter}}"},"Properties":[]}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Globals/AppDefinition_Version.global":
/*!********************************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Globals/AppDefinition_Version.global ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Services/service1.service":
/*!*********************************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Services/service1.service ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"../serviceonline/","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/CapexApprovalUI/Pages/Main.page":
/*!***********************************************************!*\
  !*** ./build.definitions/CapexApprovalUI/Pages/Main.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Request","Controls":[{"Sections":[{"KeyAndValues":[{"Value":"{#Application/#ClientData/WorkflowUsertask/taskData/CreatedBy}","KeyName":"Created By"},{"Value":"{#Application/#ClientData/WorkflowUsertask/taskData/CreatedOn}","KeyName":"Created On"},{"Value":"{#Application/#ClientData/WorkflowUsertask/taskData/Priority}","KeyName":"Priority"},{"Value":"","KeyName":""}],"Layout":{"NumberOfColumns":2},"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Controls":[],"Visible":false,"_Name":"SectionFormCell","_Type":"Section.Type.FormCell"},{"KeyAndValues":[{"KeyName":"$(L,CreatedAt)","Value":"{createdAt}"},{"KeyName":"$(L,CreatedBy)","Value":"{createdBy}"},{"KeyName":"$(L,ChangedAt)","Value":"{modifiedAt}"},{"KeyName":"$(L,ChangedBy)","Value":"{modifiedBy}"},{"KeyName":"requestid","Value":"{requestid}"},{"KeyName":"title","Value":"{title}"},{"KeyName":"firstname","Value":"{firstname}"},{"KeyName":"lastname","Value":"{lastname}"},{"KeyName":"email","Value":"{email}"},{"KeyName":"userid","Value":"{userid}"},{"KeyName":"comments","Value":"{comments}"},{"KeyName":"totalcost","Value":"{totalcost}"},{"KeyName":"type_type","Value":"{type_type}"},{"KeyName":"capex","Value":"{capex}"},{"KeyName":"opex","Value":"{opex}"},{"KeyName":"$(L,Currency)","Value":"{currency_code}"},{"KeyName":"roi","Value":"{roi}"},{"KeyName":"irr","Value":"{irr}"},{"KeyName":"$(L,Country)","Value":"{country_code}"},{"KeyName":"business_unit_business_unit","Value":"{business_unit_business_unit}"},{"KeyName":"description","Value":"{description}"},{"KeyName":"energy_efficiency","Value":"{energy_efficiency}"},{"KeyName":"co2_efficiency","Value":"{co2_efficiency}"},{"KeyName":"energy_cost_savings","Value":"{energy_cost_savings}"},{"KeyName":"water_savings","Value":"{water_savings}"},{"KeyName":"folder_id","Value":"{folder_id}"}],"Layout":{"NumberOfColumns":1},"Target":{"EntitySet":"Capex","Service":"/CapexApprovalUI/Services/service1.service","QueryOptions":"$filter={{#Application/#ClientData/WorkflowUsertask/taskData/capEntityFilter}}"},"Visible":true,"_Name":"SectionKeyValue1","_Type":"Section.Type.KeyValue"}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Name":"Main","_Type":"Page"}

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