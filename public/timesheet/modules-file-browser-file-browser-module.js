(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-file-browser-file-browser-module"],{

/***/ "./src/app/modules/file-browser/file-browser-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/file-browser/file-browser-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FileBrowserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserRoutingModule", function() { return FileBrowserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/file-browser/file-browser.component */ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.ts");




var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_3__["FileBrowserComponent"]
            },
        ]
    }
];
var FileBrowserRoutingModule = /** @class */ (function () {
    function FileBrowserRoutingModule() {
    }
    FileBrowserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FileBrowserRoutingModule);
    return FileBrowserRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/file-browser.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/file-browser/file-browser.module.ts ***!
  \*************************************************************/
/*! exports provided: FileBrowserModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserModule", function() { return FileBrowserModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _file_browser_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./file-browser-routing.module */ "./src/app/modules/file-browser/file-browser-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/file-browser/file-browser.component */ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.ts");
/* harmony import */ var _components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/upload-files-model/upload-files-model.component */ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.ts");
/* harmony import */ var _components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/create-folder-model/create-folder-model.component */ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.ts");
/* harmony import */ var _components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-folder-modal/edit-folder-modal.component */ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.ts");
/* harmony import */ var _components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-file-modal/edit-file-modal.component */ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.ts");




















var FileBrowserModule = /** @class */ (function () {
    function FileBrowserModule() {
    }
    FileBrowserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_15__["FileBrowserComponent"],
                _components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_16__["UploadFilesModelComponent"],
                _components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_17__["CreateFolderModelComponent"],
                _components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditFolderModalComponent"],
                _components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditFolderModalComponent"],
                _components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_19__["EditFileModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _file_browser_routing_module__WEBPACK_IMPORTED_MODULE_13__["FileBrowserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_8__["NgxEditorModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__["FileSaverModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
            ],
            entryComponents: [
                _components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_16__["UploadFilesModelComponent"],
                _components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_19__["EditFileModalComponent"],
                _components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_17__["CreateFolderModelComponent"],
                _components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditFolderModalComponent"]
            ]
        })
    ], FileBrowserModule);
    return FileBrowserModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-file-browser-file-browser-module.js.map