(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/angular-checklist/dist/directives/checklist.directive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angular-checklist/dist/directives/checklist.directive.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ChecklistDirective = /** @class */ (function () {
    function ChecklistDirective() {
        this.maxSelectedItems = -1;
        this.checklistChange = new core_1.EventEmitter();
    }
    ////////////
    ChecklistDirective.prototype.ngOnChanges = function () {
        var checklist = this.checklist || [];
        this.isChecked = checklist.indexOf(this.checklistValue) >= 0;
    };
    ChecklistDirective.prototype.triggerOnChange = function ($event) {
        var target = $event.target;
        var updatedList;
        var checklist = this.checklist || [];
        if (target && target.checked) {
            if (this.maxSelectedItems === -1 || checklist.length < this.maxSelectedItems) {
                updatedList = checklist.concat([this.checklistValue]);
                this.checklistChange.emit(updatedList);
            }
            else {
                target.checked = false;
            }
        }
        else {
            var i = checklist.indexOf(this.checklistValue);
            updatedList = checklist.slice(0, i).concat(checklist.slice(i + 1));
            this.checklistChange.emit(updatedList);
        }
    };
    ChecklistDirective.decorators = [
        { type: core_1.Directive, args: [{
                    host: {
                        '(change)': 'triggerOnChange($event)',
                        '[checked]': 'isChecked',
                    },
                    selector: '[checklist]',
                },] },
    ];
    /** @nocollapse */
    ChecklistDirective.ctorParameters = function () { return []; };
    ChecklistDirective.propDecorators = {
        'checklist': [{ type: core_1.Input },],
        'checklistValue': [{ type: core_1.Input },],
        'maxSelectedItems': [{ type: core_1.Input },],
        'checklistChange': [{ type: core_1.Output },],
    };
    return ChecklistDirective;
}());
exports.ChecklistDirective = ChecklistDirective;
//# sourceMappingURL=checklist.directive.js.map

/***/ }),

/***/ "./node_modules/angular-checklist/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/angular-checklist/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var checklist_directive_1 = __webpack_require__(/*! ./directives/checklist.directive */ "./node_modules/angular-checklist/dist/directives/checklist.directive.js");
var ChecklistModule = /** @class */ (function () {
    function ChecklistModule() {
    }
    ChecklistModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        checklist_directive_1.ChecklistDirective,
                    ],
                    exports: [
                        checklist_directive_1.ChecklistDirective,
                    ],
                    imports: [
                        common_1.CommonModule,
                    ],
                },] },
    ];
    /** @nocollapse */
    ChecklistModule.ctorParameters = function () { return []; };
    return ChecklistModule;
}());
exports.ChecklistModule = ChecklistModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/core/services/defect-attachment.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/services/defect-attachment.service.ts ***!
  \************************************************************/
/*! exports provided: DefectAttachmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectAttachmentService", function() { return DefectAttachmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DefectAttachmentService = /** @class */ (function () {
    function DefectAttachmentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DefectAttachmentService.prototype.getAllAttachmentById = function (defectId) {
        return this.http.get(this.apiUrl + "/api/defect-attachment/" + defectId);
    };
    DefectAttachmentService.prototype.create = function (defectAttachment) {
        return this.http.post(this.apiUrl + "/api/defect-attachment", defectAttachment);
    };
    DefectAttachmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect-attachment/" + id);
    };
    DefectAttachmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DefectAttachmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefectAttachmentService);
    return DefectAttachmentService;
}());



/***/ }),

/***/ "./src/app/core/services/defect.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/defect.service.ts ***!
  \*************************************************/
/*! exports provided: DefectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectService", function() { return DefectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DefectService = /** @class */ (function () {
    function DefectService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DefectService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/defect");
    };
    DefectService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/defect/" + id);
    };
    DefectService.prototype.create = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect", defect);
    };
    DefectService.prototype.update = function (defect) {
        return this.http.put(this.apiUrl + "/api/defect/" + defect.id, defect);
    };
    DefectService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect/" + id);
    };
    DefectService.prototype.updateNotes = function (defect) {
        return this.http.put(this.apiUrl + "/api/defect/notes/" + defect.id, defect);
    };
    DefectService.prototype.changeStatus = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/" + defect.id + "/change-status", { "status": defect.status });
    };
    DefectService.prototype.changeSeverity = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/" + defect.id + "/change-severity", { "severity": defect.severity });
    };
    DefectService.prototype.getDefectPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/defect/" + id + "/permission/" + type, {});
    };
    DefectService.prototype.getDefectForKanban = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/kanban", defect);
    };
    DefectService.prototype.updateKanbanStatusList = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/update-kanban", defect);
    };
    DefectService.prototype.getDefectForCalendar = function (obj) {
        if (obj === void 0) { obj = {}; }
        return this.http.post(this.apiUrl + "/api/defect/calendar", obj);
    };
    DefectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DefectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefectService);
    return DefectService;
}());



/***/ }),

/***/ "./src/app/core/services/department.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/department.service.ts ***!
  \*****************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DepartmentService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/departments");
    };
    DepartmentService.prototype.getDepartmentRoles = function () {
        return this.http.get(this.apiUrl + "/api/get-department-roles");
    };
    DepartmentService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/departments/" + id);
    };
    DepartmentService.prototype.create = function (department) {
        return this.http.post(this.apiUrl + "/api/departments", department);
    };
    DepartmentService.prototype.update = function (department) {
        return this.http.put(this.apiUrl + "/api/departments/" + department.id, department);
    };
    DepartmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/departments/" + id);
    };
    DepartmentService.prototype.deleteDepartmentRole = function (id, roleId) {
        return this.http.delete(this.apiUrl + "/api/departments/" + id + "/" + roleId);
    };
    DepartmentService.prototype.getDepartmentDetail = function (id, roleId) {
        return this.http.get(this.apiUrl + "/api/departments/" + id + "/" + roleId);
    };
    DepartmentService.prototype.updateDepartmentDetail = function (id, roleId, menu) {
        return this.http.put(this.apiUrl + "/api/departments/" + id + "/" + roleId, menu);
    };
    DepartmentService.prototype.getDepartmentsClientsRoles = function () {
        return this.http.get(this.apiUrl + "/api/departments/clients-roles");
    };
    DepartmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/core/services/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    RoleService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/roles");
    };
    RoleService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/roles/" + id);
    };
    RoleService.prototype.create = function (role) {
        return this.http.post(this.apiUrl + "/api/roles", role);
    };
    RoleService.prototype.update = function (role) {
        return this.http.put(this.apiUrl + "/api/roles/" + role.id, role);
    };
    RoleService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/roles/" + id);
    };
    RoleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map