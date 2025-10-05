(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-pm-defects-defects-module~modules-pm-tasks-tasks-module~modules-timesheet-timesheet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;{{'timesheet.create.title1' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createTimesheetForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.start_time.errors }\">\n\t\t\t\t\t\t<label for=\"start_time\">{{'timesheet.create.fields.start_time' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"start_time\" id=\"start_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder1' | translate}}\" aria-describedby=\"inputGroupPrepend1\" (dateTimeChange)=\"startTimeChange($event)\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.start_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.start_time.errors.required\">{{'timesheet.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.end_time.errors }\">\n\t\t\t\t\t\t<label for=\"end_time\">{{'timesheet.create.fields.end_time' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input class=\"form-control\"  formControlName=\"end_time\" id=\"end_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder2' | translate}}\" aria-describedby=\"inputGroupPrepend2\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.end_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.end_time.errors.required\">{{'timesheet.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"note\">{{'timesheet.create.fields.note' | translate}}</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"note\" id=\"note\" placeholder=\"{{'timesheet.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.note.errors }\"></textarea>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.note.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.note.errors.required\">{{'timesheet.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;{{'timesheet.create.title2' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsEditRoleModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editTimesheetForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.start_time.errors }\">\n\t\t\t\t\t\t<label for=\"start_time\">{{'timesheet.create.fields.start_time' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #startDT></owl-date-time>\n\t\t\t\t\t\t\t<input class=\"form-control\" [owlDateTimeTrigger]=\"startDT\" [owlDateTime]=\"startDT\" formControlName=\"start_time\" id=\"start_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder1' | translate}}\" aria-describedby=\"inputGroupPrepend1\" (dateTimeChange)=\"startTimeChange($event)\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.start_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.start_time.errors.required\">{{'timesheet.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.end_time.errors }\">\n\t\t\t\t\t\t<label for=\"end_time\">{{'timesheet.create.fields.end_time' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<owl-date-time #endDT></owl-date-time>\n\t\t\t\t\t\t\t<input class=\"form-control\" [owlDateTimeTrigger]=\"endDT\" [owlDateTime]=\"endDT\" [min]=\"editTimesheetForm.get('start_time').value\" formControlName=\"end_time\" id=\"end_time\" placeholder=\"{{'timesheet.create.placeholders.placeholder2' | translate}}\" aria-describedby=\"inputGroupPrepend2\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.end_time.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.end_time.errors.required\">{{'timesheet.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"note\">{{'timesheet.create.fields.note' | translate}}</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"note\" id=\"note\" placeholder=\"{{'timesheet.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && timesheetControl.note.errors }\"></textarea>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && timesheetControl.note.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"timesheetControl.note.errors.required\">{{'timesheet.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card bg-transparent mt-0 mb-0\">\n\t\t\t\t<!-- Card header -->\n\t\t\t\t<div class=\"card-header p-0\">\n\t\t\t\t\t<h4 class=\"sub-title mt-3\"><span>{{'timesheet.title' | translate}}</span></h4>\n\t\t\t\t\t<div class=\"card-buttons pt-2 pb-2 pr-1\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'timesheet_create']\">\n\t\t\t\t\t\t<a *ngIf=\"module_id==5\" class=\"btn btn-create mb-0\" (click)=\"addTimesheet()\" placement=\"top\" tooltip=\"{{'common.add_to_timesheet' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t\t\t\t\t\t<a *ngIf=\"module_id!=5\"class=\"btn btn-create mb-0\" (click)=\"openTimesheetCreateModal()\" placement=\"top\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Card content -->\n\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t<!-- Card body -->\n\t\t\t\t\t<div class=\"card-body\" *ngIf=\"timesheets?.length != 0\">\n\t\t\t\t\t\t<!-- Timesheet list -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl overflow-x-auto\" *ngIf=\"isPageLoaded\">\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.photo' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.user' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'timesheet.columns.note' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-110\">{{'timesheet.columns.start_time' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-110\">{{'timesheet.columns.end_time' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.time_h' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"timesheets?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let timesheet of timesheets; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', timesheet.user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{timesheet.user.firstname}} {{timesheet.user.lastname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"timesheet.user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{timesheet.user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!timesheet.user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.user.firstname}} {{timesheet.user.lastname}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"getCheckPermission(timesheet) else elseBlock;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'note'\" [fieldValue]=\"timesheet.note\" [elementFor]=\"'timesheet.inline_edit.note' | translate\" [isRequired]=\"'false'\" (updateValue)=\"saveTimesheetDetail(i, 'note', $event);\"></inline-edit-textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>{{timesheet.note}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.start_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.end_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.hour_time}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-10\" aria-controls=\"dropdown-basic-10\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-10\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngIf=\"getCheckPermission(timesheet)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"editTimesheet(timesheet)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngIf=\"getCheckPermission(timesheet)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteTimesheet(timesheet.id,i)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tfoot *ngIf=\"timesheets?.length == 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'timesheet.title' | translate}}</span></h4>\n\t\t\t\t\t<!-- <div class=\"card-buttons\">\n\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'holidays_view']\" class=\"btn btn-create mb-0\" [routerLink]=\"['/holidays']\" placement=\"top\" tooltip=\"{{'holidays.title' | translate}}\"><i class=\"fa fa-tree\"></i></a>\n\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'reports_view']\" [routerLink]=\"['/timesheet/all']\" class=\"btn btn-create mb-0\" tooltip=\"{{'timesheet.title2' | translate}}\"><i class=\"fa fa-clock-o\"></i></a>\n\t\t\t\t\t\t<a class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'timesheet_create']\" (click)=\"openTimesheetCreateModal()\" placement=\"top\" tooltip=\"{{'common.add' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t\t\t\t\t</div> -->\n\n                    <!-- <div class=\"col-md-6 d-flex mb-lg-0 mb-2 ml-lg-0 ml-4\"> -->\n                    <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded\">\n                        <!-- <a *ngIf=\"(department['department_name'] == 'Administration' || department['department_name'] == 'Accountant')\" class=\"btn btn-create mb-0\" style=\"background: #34a853 !important; color: #fff !important;\" (click)=\"exportTimeSheet()\">Export</a> -->\n                        <div class=\"btn calender-day\" (click)=\"preWeek()\">\n                            <i class=\"calendar-icon fa fa-chevron-left\"></i>\n                        </div>\n                        <div class=\"ml-2\">\n                            <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeDate($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n                        </div>\n                        <div class=\"mr-2\">\n                           <input type=\"text\" class=\"form-control\" [(ngModel)]=\"startEndWeek\" readonly />\n                        </div>\n                        <div class=\"btn calender-day\" (click)=\"nextWeek()\"  *ngIf=\"endOfWeek <= weekMax\">\n                            <i class=\"calendar-icon fa fa-chevron-right\"></i>\n                        </div>\n                    </div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Card content -->\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<!-- Card body -->\n\t\t\t\t\t<div class=\"card-body\">\n                        <div class=\"row d-flex\" *ngIf=\"isPageLoaded\" style=\"height: 62px;\">\n                            <div class=\"col-sm-3\" *ngIf=\"users?.length > 0\" >\n                                <form [formGroup]=\"timesheetFilterForm\" (ngSubmit)=\"onSubmit()\">\n                                    <div class=\"form-group\">\n<!-- *ngIf=\"department['department_name'] == 'Administration' || department['department_name'] == 'HR' || (department['department_name'] == 'Project')\" -->\n                                        <ng-select\n                                            [searchable]=\"true\"\n                                            [items]=\"users\"\n                                            [selectOnTab]=\"true\"\n                                            [multiple]=\"false\"\n                                            [selectableGroup]=\"false\"\n                                            bindLabel=\"username\"\n                                            bindValue=\"id\"\n                                            labelForId=\"user_id\"\n                                            formControlName=\"user_id\"\n                                            placeholder=\"{{'timesheet.filter.placeholders.placeholder5' | translate }}\"\n                                            (change)=\"changeUser($event)\">\n                                            <ng-template ng-label-tmp let-item=\"item\">\n                                                {{item.username}} <i *ngIf=\"item.timesheets_status\" class=\"fa fa-clock-o overdue-icon\" style=\"color: #e1981e;\"></i>\n                                            </ng-template>\n                                            <ng-template ng-option-tmp let-item=\"item\">\n                                                {{item.username}} <i *ngIf=\"item.timesheets_status\" class=\"fa fa-clock-o overdue-icon\" style=\"color: #e1981e;\"></i>\n                                            </ng-template>\n                                        </ng-select>\n                                    </div>\n                                </form>\n                            </div>\n\n                            <!-- <span class=\"card-title text-info\" *ngIf=\"actionWeek.status > 0 && actionWeek.approved1\"><b>Approved1: {{actionWeek.approved1}}</b></span> -->\n                            <span class=\"card-title text-success\" *ngIf=\"actionWeek.status > 1 && actionWeek.approved2\"><b>Approved2: {{actionWeek.approved2}}</b></span>\n                            <span class=\"card-title text-danger\" *ngIf=\"actionWeek.status > 2\"><b> - Reject: {{actionWeek.dis_approved}}</b></span>\n                            <span class=\"card-title text-warning\" *ngIf=\"draftNotifyShow\"><b> Timesheet is being saved as draft</b></span>\n\n                            <div class=\"col text-right btn_apply\">\n                                <a *ngIf=\"(timesheets_ot?.length > 0 || timesheets?.length > 0) && users_id != 'my' && !draftShow && checkApprovedPermission()\" class=\"btn btn-create mb-0\" style=\"background: #34a853 !important; color: #fff !important;\" (click)=\"approvedTimeSheet()\">Approved</a>\n                                <a *ngIf=\"(timesheets_ot?.length > 0 || timesheets?.length > 0)&& users_id != 'my' && !draftShow && (department['department_name'] == 'Administration' || department['department_name'] == 'BOD' || (actionWeek.status == 1 && department['department_name'] == 'HR' && users_id != 'my') || (actionWeek.status == 0 && (department['department_name'] == 'Project' || department['department_name'] == 'HR' || department['department_name'] == 'Marketing' || department['department_name'] == 'Accountant') && users_id != 'my'))\" class=\"btn btn-create mb-0 btn-danger\" (click)=\"disApprovedTimeSheet()\" >Reject</a>\n                                <!--  || (department['department_name'] == 'Project' && department['role_name'] == 'Manager' && users_id != 'my') -->\n                                <a *ngIf=\"draftShow && users_id == 'my'\" class=\"btn btn-create mb-0 btn-raised\" style=\"background: #5a5b5c; color: #FFFFFF;\" (click)=\"saveTimeSheet('draft')\" >Draft</a>\n                                <a *ngIf=\"((actionWeek.status == 0 || actionWeek.status == 3) || actionWeek.status == 3) && users_id == 'my'\" class=\"btn btn-create mb-0 btn-raised\" style=\"background: #1cbcd8; color: #FFFFFF;\" (click)=\"saveTimeSheet('save')\" >Submit</a>\n                            </div>\n                        </div>\n\t\t\t\t\t\t<!-- Timesheet list datatable -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"timesheets_table\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'Projects' | translate}} - {{'Tasks' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th *ngFor=\"let day of weekdays\" [ngClass]=\"{'error-input':leavesHolidays[day].status == 2 || leavesHolidays[day].status == 3, 'holiday':leavesHolidays[day].status == 1, 'error-warning':day=='sunday'||day=='saturday'}\">\n                                                    <div *ngIf=\"timesheets[0]\">{{ timesheets[0][day].date | date:'dd/MM/yyyy' }}</div>\n                                                    {{day}}\n                                                    <div *ngIf=\"leavesHolidays[day].status == 3\">(Half)</div>\n                                                    <div *ngIf=\"leavesHolidays[day].status == 2\">(Full)</div>\n                                                </th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'common.action' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'common.total' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"timesheets?.length > 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let timesheet of timesheets; index as i;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"timesheet_task_{{i}}\" >\n                                                    <ng-select\n                                                        [items]=\"tasks\"\n                                                        [selectOnTab]=\"true\"\n                                                        [multiple]=\"false\"\n                                                        [selectableGroup]=\"false\"\n                                                        bindValue=\"id\"\n                                                        bindLabel=\"full_name\"\n                                                        labelForId=\"task_id\"\n                                                        [(ngModel)]=\"timesheet.task_id\"\n                                                        placeholder=\"-- {{'Projects' | translate}} - {{'Tasks' | translate}} --\"\n                                                        [disabled]=\"users_id !== 'my' || ((actionWeek.status != 0 && actionWeek.status != 3) && actionWeek.status != 3)\">\n                                                        <ng-template ng-label-tmp let-item=\"item\" >\n                                                            <div class=\"budges-status\">\n                                                                {{ item.full_name ? item.full_name : timesheet.full_name }}\n                                                                <span class=\"medium\" *ngIf=\"item.price_rate >= item.cost && (department['department_name'] == 'Administration' || department['department_name'] == 'BOD')\">{{item.cost | number:'1.0-0'}}/{{item.price_rate | number:'1.0-0'}}</span>\n                                                                <span class=\"urgent\" *ngIf=\"item.price_rate < item.cost && (department['department_name'] == 'Administration' || department['department_name'] == 'BOD')\">{{item.cost | number:'1.0-0'}}/{{item.price_rate | number:'1.0-0'}}</span>\n                                                                <span class=\"medium\" *ngIf=\"convertTimeToDecimal(item.actual_hours) < item.estimated_hours\">{{convertTimeToDecimal(item.actual_hours)}}/{{item.estimated_hours}}</span>\n                                                                <span class=\"urgent\" *ngIf=\"convertTimeToDecimal(item.actual_hours) >= item.estimated_hours\">{{convertTimeToDecimal(item.actual_hours)}}/{{item.estimated_hours}}</span>\n                                                            </div>\n                                                        </ng-template>\n                                                        <ng-template ng-option-tmp let-item=\"item\">\n                                                            <div class=\"budges-status\">\n                                                                {{item.full_name}}\n                                                                <span class=\"medium\" *ngIf=\"item.price_rate >= item.cost && (department['department_name'] == 'Administration' || department['department_name'] == 'BOD')\">{{item.cost | number:'1.0-0'}}/{{item.price_rate | number:'1.0-0'}}</span>\n                                                                <span class=\"urgent\" *ngIf=\"item.price_rate < item.cost && (department['department_name'] == 'Administration' || department['department_name'] == 'BOD')\">{{item.cost | number:'1.0-0'}}/{{item.price_rate | number:'1.0-0'}}</span>\n                                                                <span class=\"medium\" *ngIf=\"convertTimeToDecimal(item.actual_hours) < item.estimated_hours\">{{convertTimeToDecimal(item.actual_hours)}}/{{item.estimated_hours}}</span>\n                                                                <span class=\"urgent\" *ngIf=\"convertTimeToDecimal(item.actual_hours) >= item.estimated_hours\">{{convertTimeToDecimal(item.actual_hours)}}/{{item.estimated_hours}}</span>\n                                                            </div>\n                                                        </ng-template>\n                                                    </ng-select>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td *ngFor=\"let day of weekdays\" >\n                                                    <div *ngIf=\"day!='sunday' && day !='saturday' && (leavesHolidays[day].status == 0 || leavesHolidays[day].status == 3)\">\n                                                        <div *ngIf=\"users_id != 'my' || (actionWeek.status != 0 && actionWeek.status != 3)\">{{timesheet[day].hours}}<p *ngIf=\"timesheet[day].note != ''\"><br>Note:{{timesheet[day].note}}</p></div>\n                                                        <input [disabled]=\"isDisabled(timesheets[0][day])\" *ngIf=\"users_id == 'my' && (actionWeek.status == 0 || actionWeek.status == 3)\" type=\"number\" class=\"success-input\" (change)=\"changeTimeSheet()\" [(ngModel)]=\"timesheet[day].hours\" placeholder=\"{{'common.hours' | translate}}\" style=\"width: 100px;\"  [ngClass]=\"{'error-input':timesheet_total[day].hours > working_hours, 'warning-input':timesheet_total[day].hours != working_hours - (leavesHolidays[day].working_hours ? leavesHolidays[day].working_hours: 0) && timesheet_total[day].hours > 0, 'empty-input': timesheet[day].hours === 0 || timesheet[day].hours === null || timesheet[day].hours === undefined || timesheet[day].hours === ''}\">\n                                                        <textarea [disabled]=\"isDisabled(timesheets[0][day])\" *ngIf=\"users_id == 'my' && (actionWeek.status == 0 || actionWeek.status == 3)\" type=\"text\" [(ngModel)]=\"timesheet[day].note\" placeholder=\"Note\" style=\"width: 100px;\"></textarea>\n                                                    </div>\n                                                </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n                                                    <div style=\"display: inline-flex;\" >\n                                                        <div style=\"display: inline-flex;\" *ngIf=\"users_id == 'my'\">\n                                                            <a *ngIf=\"(actionWeek.status == 0 || actionWeek.status == 3)\" class=\"btn btn-danger btn-delete btn-raised\" (click)=\"removeRow(i)\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n                                                            <a *ngIf=\"(actionWeek.status == 0 || actionWeek.status == 3) && timesheets?.length-1 == i\" class=\"btn btn-create mb-0\" (click)=\"addRow()\" placement=\"top\" tooltip=\"{{'common.add' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n                                                        </div>\n                                                        <div style=\"display: inline-flex;\" *ngIf=\"users_id != 'my' && !draftShow\">\n                                                            <a *ngIf=\"(department['department_name'] == 'Administration' || department['department_name'] == 'BOD' || timesheet.assign_to == loginUser.id) && timesheet.status == 0\" class=\"btn btn-create btn-create mb-0\"  placement=\"top\" (click)=\"approvedTimeSheet(timesheet.task_id)\">Approved</a>\n                                                        </div>\n                                                        <div class=\"budges-status\" *ngIf=\"timesheet.status >0 && timesheet.approved1 && timesheet.approved1.length >0\">\n                                                            <span class=\"medium\">{{timesheet.approved1}}</span>\n                                                        </div>\n                                                    </div>\n                                                </td>\n                                                <td style=\"background-color: rgb(119 118 114 / 11%);\">\n                                                    {{timesheet.total}}h\n                                                </td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n                                        <tbody *ngIf=\"timesheets?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr style=\"background-color: rgb(119 118 114 / 11%);\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{'common.total' | translate}}</b></td>\n                                                <td *ngFor=\"let day of weekdays\" [ngClass]=\"{'error-input':timesheet_total_viewtable[day].hours > working_hours}\">\n                                                    {{timesheet_total_viewtable[day].hours}}h\n                                                </td>\n                                                <td></td>\n                                                <td>{{timesheet_total_viewtable.total}}h</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"timesheets_ot?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\" style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\"><b>OT</b> </td>\n                                                <td style=\"background-color: rgb(119 118 114 / 11%);\"></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"timesheets_ot?.length > 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let timesheet_ot of timesheets_ot; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td  class=\"timesheet_ot_task_{{i}} background-ot\">\n                                                    <ng-select\n                                                        [items]=\"tasks\"\n                                                        [selectOnTab]=\"true\"\n                                                        [multiple]=\"false\"\n                                                        [selectableGroup]=\"false\"\n                                                        bindValue=\"id\"\n                                                        labelForId=\"task_id\"\n                                                        bindLabel=\"full_name\"\n                                                        [(ngModel)]=\"timesheet_ot.task_id\"\n                                                        placeholder=\"{{'timesheet.filter.placeholders.placeholder1' | translate }}{{'Tasks' | translate}} --\"\n                                                        [disabled]=\"users_id !== 'my' || (actionWeek.status != 0 && actionWeek.status != 3)\"\n                                                        >\n                                                        <ng-template ng-label-tmp let-item=\"item\">\n                                                            <div class=\"budges-status\">\n                                                                {{ item.full_name ? item.full_name : timesheet.full_name }}\n                                                                <span class=\"medium\" *ngIf=\"item.price_rate >= item.cost && (department['department_name'] == 'Administration' || department['department_name'] == 'BOD')\">{{item.cost | number:'1.0-0'}}/{{item.price_rate | number:'1.0-0'}}</span>\n                                                                <span class=\"urgent\" *ngIf=\"item.price_rate < item.cost && (department['department_name'] == 'Administration' || department['department_name'] == 'BOD')\">{{item.cost | number:'1.0-0'}}/{{item.price_rate | number:'1.0-0'}}</span>\n                                                                <span class=\"medium\" *ngIf=\"convertTimeToDecimal(item.actual_hours) < item.estimated_hours\">{{convertTimeToDecimal(item.actual_hours)}}/{{item.estimated_hours}}</span>\n                                                                <span class=\"urgent\" *ngIf=\"convertTimeToDecimal(item.actual_hours) >= item.estimated_hours\">{{convertTimeToDecimal(item.actual_hours)}}/{{item.estimated_hours}}</span>\n                                                            </div>\n                                                        </ng-template>\n                                                        <ng-template ng-option-tmp let-item=\"item\">\n                                                            <div class=\"budges-status\">\n                                                                {{item.full_name}}\n                                                                <span class=\"medium\" *ngIf=\"item.price_rate >= item.cost && (department['department_name'] == 'Administration' || department['department_name'] == 'BOD')\">{{item.cost | number:'1.0-0'}}/{{item.price_rate | number:'1.0-0'}}</span>\n                                                                <span class=\"urgent\" *ngIf=\"item.price_rate < item.cost && (department['department_name'] == 'Administration' || department['department_name'] == 'BOD')\">{{item.cost | number:'1.0-0'}}/{{item.price_rate | number:'1.0-0'}}</span>\n                                                                <span class=\"medium\" *ngIf=\"convertTimeToDecimal(item.actual_hours) < item.estimated_hours\">{{convertTimeToDecimal(item.actual_hours)}}/{{item.estimated_hours}}</span>\n                                                                <span class=\"urgent\" *ngIf=\"convertTimeToDecimal(item.actual_hours) >= item.estimated_hours\">{{convertTimeToDecimal(item.actual_hours)}}/{{item.estimated_hours}}</span>\n                                                            </div>\n                                                        </ng-template>\n                                                    </ng-select>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td *ngFor=\"let day of weekdays\">\n                                                    <div *ngIf=\"users_id != 'my' || (actionWeek.status != 0 && actionWeek.status != 3) || leavesHolidays[day].status == 2\">{{timesheet_ot[day].hours}}<p *ngIf=\"timesheet_ot[day].note != ''\"><br>Note:{{timesheet_ot[day].note}}</p></div>\n                                                    <input [disabled]=\"isDisabled(timesheets[0][day])\" *ngIf=\"users_id == 'my' && (actionWeek.status == 0 || actionWeek.status == 3) && leavesHolidays[day].status < 2\" type=\"number\" class=\"success-input\" (change)=\"changeTimeSheet()\" [(ngModel)]=\"timesheet_ot[day].hours\" placeholder=\"{{'common.hours' | translate}}\" style=\"width: 100px;\" [ngClass]=\"{'error-input':timesheet_total[day].hours < working_hours && timesheet_ot[day].hours > 0 && day!='sunday' && day !='saturday'&& leavesHolidays[day].status == 0, 'empty-input': timesheet_ot[day].hours === 0 || timesheet_ot[day].hours === null || timesheet_ot[day].hours === undefined || timesheet_ot[day].hours === ''}\">\n                                                    <textarea [disabled]=\"isDisabled(timesheets[0][day])\" *ngIf=\"users_id == 'my' && (actionWeek.status == 0 || actionWeek.status == 3) && leavesHolidays[day].status < 2\" type=\"text\" [(ngModel)]=\"timesheet_ot[day].note\" placeholder=\"Note\" style=\"width: 100px;\"></textarea>\n                                                </td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td >\n                                                    <div style=\"display: inline-flex;\" >\n                                                        <div  style=\"display: inline-flex;\" *ngIf=\"users_id == 'my'\">\n                                                            <a *ngIf=\"(actionWeek.status == 0 || actionWeek.status == 3)\" class=\"btn btn-danger btn-delete btn-raised\" (click)=\"removeRowOT(i)\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n                                                            <a *ngIf=\"(actionWeek.status == 0 || actionWeek.status == 3) && timesheets_ot?.length-1 == i\" class=\"btn btn-create mb-0\" (click)=\"addRowOT()\" placement=\"top\" tooltip=\"{{'common.add' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n                                                        </div>\n                                                        <div style=\"display: inline-flex;\" *ngIf=\"users_id != 'my' && !draftShow\">\n                                                            <a *ngIf=\"(department['department_name'] == 'Administration' || department['department_name'] == 'BOD' || timesheet_ot.assign_to == loginUser.id) && timesheet_ot.status == 0\" class=\"btn btn-create btn-create mb-0\"  placement=\"top\" (click)=\"approvedTimeSheet(timesheet_ot.task_id)\">Approved</a>\n                                                        </div>\n                                                        <div class=\"budges-status\" *ngIf=\"timesheet_ot.status >0 && timesheet_ot.approved1 && timesheet_ot.approved1.length >0\">\n                                                            <span class=\"medium\">{{timesheet_ot.approved1}}</span>\n                                                        </div>\n                                                    </div>\n                                                </td>\n                                                <td style=\"background-color: rgb(119 118 114 / 11%);\">{{timesheet_ot.total}}h</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n                                        <tbody *ngIf=\"timesheets_ot?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr style=\"background-color: rgb(119 118 114 / 11%);\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{'common.total' | translate}}</b></td>\n                                                <td *ngFor=\"let day of weekdays\" [ngClass]=\"{'error-input':(timesheet_total[day].hours < working_hours && timesheet_ot_total[day].hours > 0 && day!='sunday' && day !='saturday'&& leavesHolidays[day].status == 0) || (timesheet_total[day].hours+timesheet_ot_total[day].hours) > 24}\">\n                                                    {{timesheet_ot_total[day].hours}}h\n                                                </td>\n                                                <td></td>\n                                                <td>{{timesheet_ot_total.total}}h</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tfoot class=\"tfoot_dt d-none\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"10\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!--\n<table id=\"exportTable\" style=\"display: none; border: 1px;\">\n    <thead>\n        <tr>\n            <th colspan=\"10\">TimeSheets {{salary_export}}</th>\n        </tr>\n        <tr>\n            <th rowspan=\"2\">STT</th>\n            <th rowspan=\"2\">Họ và tên</th>\n            <th rowspan=\"2\">Chức vụ</th>\n            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                <div *ngIf=\"day.stt==0\">CN</div>\n                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}</div>\n            </th>\n            <th rowspan=\"3\">Ngày<br>thường</th>\n            <th rowspan=\"3\">Ngày<br>nghỉ</th>\n            <th rowspan=\"3\">Tổng<br>ngày</th>\n            <th rowspan=\"3\">Ngày<br>công<br>chuẩn</th>\n        </tr>\n        <tr>\n            <th *ngFor=\"let day of daysInMonth; let i = index\" rowspan=\"2\">\n                {{i +1}}\n            </th>\n        </tr>\n        <tr>\n            <th>A</th>\n            <th>B</th>\n            <th>C</th>\n        </tr>\n      </thead>\n    <tbody>\n        <tr *ngFor=\"let user of exportTableData; let i = index\" >\n            <td>{{i+1}}</td>\n            <td>{{user.firstname}} {{user.lastname}}</td>\n            <td>Kỹ sư</td>\n            <td *ngFor=\"let day of daysInMonth; let j = index\">\n                <div *ngIf=\"user.timesheet[j].check\">x</div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<table id=\"exportTableOT\" style=\"display: none; border: 1px;\">\n    <thead>\n        <tr>\n            <th colspan=\"10\">TimeSheets {{salary_export}}</th>\n        </tr>\n        <tr>\n            <th rowspan=\"2\">STT</th>\n            <th rowspan=\"2\">Họ và tên</th>\n            <th rowspan=\"2\">Chức vụ</th>\n            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                <div *ngIf=\"day.stt==0\">CN</div>\n                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}</div>\n            </th>\n            <th rowspan=\"3\">Ngày<br>thường</th>\n            <th rowspan=\"3\">Ngày<br>nghỉ</th>\n            <th rowspan=\"3\">Tổng<br>ngày</th>\n            <th rowspan=\"3\">Ngày<br>công<br>chuẩn</th>\n        </tr>\n        <tr>\n            <th *ngFor=\"let day of daysInMonth; let i = index\" rowspan=\"2\">\n                {{i +1}}\n            </th>\n        </tr>\n        <tr>\n            <th>A</th>\n            <th>B</th>\n            <th>C</th>\n        </tr>\n      </thead>\n    <tbody>\n        <tr *ngFor=\"let user of exportTableData; let i = index\" >\n            <td>{{i+1}}</td>\n            <td>{{user.firstname}} {{user.lastname}}</td>\n            <td>Kỹ sư</td>\n            <td *ngFor=\"let day of daysInMonth; let j = index\">\n                <div *ngIf=\"user.timesheet_ot[j].value != null\">{{user.timesheet_ot[j].value | number: '1.1-1' }}</div>\n            </td>\n        </tr>\n    </tbody>\n</table> -->\n<!--\n<table id=\"exportTableSalary\" style=\"display: none; border: 1px;\">\n    <thead>\n        <tr>\n            <th colspan=\"10\">Salary {{salary_export}}</th>\n        </tr>\n        <tr>\n            <th rowspan=\"3\">STT</th>\n            <th rowspan=\"2\"></th>\n            <th rowspan=\"2\">Họ và tên</th>\n            <th rowspan=\"2\">Chức vụ</th>\n            <th rowspan=\"3\">Lương chính thức theo thỏa thuận</th>\n\n            <th colspan=\"3\"></th>\n            <th colspan=\"11\">Tổng thu nhập người lao động</th>\n            <th colspan=\"2\"></th>\n        </tr>\n        <tr>\n            <th colspan=\"3\">Lương tháng hiện tại(Full)</th>\n            <th colspan=\"3\">Lương chi tiết theo thời gian làm việc</th>\n            <th colspan=\"2\">Lương OT</th>\n\n            <th rowspan=\"2\">Các khoản điều chỉnh giảm</th>\n            <th rowspan=\"2\">Thưởng đột xuất Lễ/Tết</th>\n\n            <th colspan=\"3\">Phụ cấp theo quy chế công ty</th>\n\n            <th rowspan=\"2\">Tổng thu nhập</th>\n\n            <th colspan=\"2\">Người phụ thuộc</th>\n        </tr>\n        <tr>\n            <th></th>\n            <th></th>\n            <th></th>\n            <th>Lương cơ bản</th>\n            <th>Hiệu quả công việc</th>\n            <th>Tổng lương</th>\n            <th>Thời gian làm việc(ngày)</th>\n            <th>Lương LV</th>\n            <th>Nghỉ phép được hưởng lương</th>\n            <th>Ngày</th>\n            <th>Lương</th>\n            <th>Ăn trưa</th>\n            <th>Điện thoại/Xăng</th>\n            <th>Đi công trình</th>\n            <th>Số NPT</th>\n            <th>Giảm trừ</th>\n        </tr>\n        <tr>\n            <th>1</th>\n            <th>2</th>\n            <th>3</th>\n            <th>4</th>\n            <th>5</th>\n            <th>6</th>\n            <th>7</th>\n            <th>8</th>\n            <th>9</th>\n            <th>10</th>\n            <th>11</th>\n            <th>12</th>\n            <th>13</th>\n            <th></th>\n            <th>14</th>\n            <th>15</th>\n            <th>16</th>\n            <th>18</th>\n            <th>19</th>\n            <th>20</th>\n            <th>21</th>\n        </tr>\n      </thead>\n    <tbody>\n        <tr *ngFor=\"let user of exportTableData; let i = index\" >\n            <td>{{i+1}}</td>\n            <td></td>\n            <td>{{user.firstname}} {{user.lastname}}</td>\n            <td>Kỹ sư</td>\n            <td><div *ngIf=\"user.contract\">{{user.contract.basic + user.contract.performance | number:'1.0-0'}}</div></td>\n            <td><div *ngIf=\"user.contract\">{{user.contract.basic | number:'1.0-0'}}</div></td>\n            <td><div *ngIf=\"user.contract\">{{user.contract.performance | number:'1.0-0'}}</div></td>\n            <td><div *ngIf=\"user.contract\">{{user.contract.basic + user.contract.performance | number:'1.0-0'}}</div></td>\n            <td><div>{{user.count_timesheets}}</div></td>\n            <td><div>{{user.day_salary*user.count_timesheets}}</div></td>\n            <td></td>\n            <td></td>\n            <td>{{user.salary_ot | number:'1.0-0'}}</td>\n            <td></td>\n            <td></td>\n            <td><div *ngIf=\"user.contract\">{{user.contract.lunch | number:'1.0-0'}}</div></td>\n            <td></td>\n            <td></td>\n            <td><div *ngIf=\"user.contract\">{{user.contract.salary | number:'1.0-0'}}</div></td>\n            <td>{{user.contract.dependents}}</td>\n            <td>{{user.contract.dependents_amount}}</td>\n        </tr>\n    </tbody>\n</table>\n\n<table id=\"exportTableDependents\" style=\"display: none; border: 1px;\">\n    <thead>\n        <tr>\n            <th colspan=\"10\">Salary {{salary_export}}</th>\n        </tr>\n        <tr>\n            <th colspan=\"5\">Tổng thu nhập chịu thuế TNCN</th>\n            <th colspan=\"2\">Khấu trừ thuế TNCN NLĐ</th>\n            <th colspan=\"4\">Lương thực nhận</th>\n            <th colspan=\"3\">Chi phí doanh nghiệp</th>\n            <th rowspan=\"3\">Ký nhận</th>\n        </tr>\n        <tr>\n            <th rowspan=\"2\">Giảm trừ bản thân</th>\n            <th rowspan=\"2\">Ăn/ĐT/CT/Xăng</th>\n            <th rowspan=\"2\">OT</th>\n            <th rowspan=\"2\">BHBB 10.5%</th>\n            <th rowspan=\"2\">Tổng</th>\n            <th rowspan=\"2\">Thu nhập chịu TNCN</th>\n            <th rowspan=\"2\">Thuế TNCN</th>\n            <th>BHBB Thực tế</th>\n            <th>Khấu trừ ĐPCĐ</th>\n            <th rowspan=\"2\">Tạm ứng</th>\n            <th rowspan=\"2\">Tổng</th>\n            <th rowspan=\"2\">BHBB 32%/21.0%</th>\n            <th rowspan=\"2\">KPCĐ 2.0%</th>\n            <th rowspan=\"2\">Tổng</th>\n        </tr>\n        <tr>\n            <th>10.5 %</th>\n            <th>1.0 %</th>\n        </tr>\n        <tr>\n            <th>22</th>\n            <th>23</th>\n            <th>24</th>\n            <th>25</th>\n            <th>26</th>\n            <th>27</th>\n            <th>28</th>\n            <th>29</th>\n            <th>30</th>\n            <th>31</th>\n            <th>32</th>\n            <th>33</th>\n            <th>34</th>\n            <th>35</th>\n            <th></th>\n        </tr>\n      </thead>\n    <tbody>\n        <tr *ngFor=\"let user of exportTableData; let i = index\" >\n            <td>{{i+1}}</td>\n            <td></td>\n            <td>{{user.firstname}} {{user.lastname}}</td>\n            <td>Kỹ sư</td>\n            <td>{{user.personal_amount | number:'1.0-0'}}</td>\n            <td>{{user.contract.lunch | number:'1.0-0'}}</td>\n            <td></td>\n            <td><div *ngIf=\"user.contract\">{{user.contract.basic*10.5/100 | number:'1.0-0'}}</div></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n        </tr>\n    </tbody>\n</table> -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/timesheet/timesheet.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/timesheet/timesheet.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'timesheet.title' | translate}}</span></h4>\n\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'holidays_view']\" class=\"btn btn-create mb-0\" [routerLink]=\"['/holidays']\" placement=\"top\" tooltip=\"{{'holidays.title' | translate}}\"><i class=\"fa fa-tree\"></i></a>\n\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin', 'timesheet_view']\" [routerLink]=\"['/timesheet']\" class=\"btn btn-create mb-0\" tooltip=\"{{'timesheet.title1' | translate}}\"><i class=\"fa fa-clock-o\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Card content -->\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<!-- Card body -->\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<!-- Filter buttons -->\n\t\t\t\t\t\t<form [formGroup]=\"timesheetFilterForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t\t<div class=\"row d-flex\" *ngIf=\"isPageLoaded\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.range.errors }\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"range\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t[items]=\"range\"\n\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"range\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"range\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"rangeChange($event)\">\n\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && filterControl.range.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"filterControl.range.errors.required\">{{'timesheet.filter.error_messages.message1' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngIf=\"filterControl.range.value == 'period'\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.period_from.errors }\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"period_from\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" (bsValueChange)=\"periodFromDateChange($event)\" formControlName=\"period_from\" id=\"period_from\" placeholder=\"{{'timesheet.filter.placeholders.placeholder3' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && filterControl.period_from.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"filterControl.period_from.errors\">{{'timesheet.filter.error_messages.message2' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngIf=\"filterControl.range.value == 'period'\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && filterControl.period_to.errors }\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"period_to\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" #dp2=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"timesheetFilterForm.get('period_from').value\" formControlName=\"period_to\" id=\"period_to\" placeholder=\"{{'timesheet.filter.placeholders.placeholder4' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && filterControl.period_to.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"filterControl.period_to.errors\">{{'timesheet.filter.error_messages.message3' | translate }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"user_id\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t[selectableGroup]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"user_id\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"user_id\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'timesheet.filter.placeholders.placeholder5' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"client_id\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[items]=\"clients\"\n\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"client_id\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'timesheet.filter.placeholders.placeholder2' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"project_ids\" class=\"sr-only\"></label>\n\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[items]=\"projects\"\n\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[selectableGroup]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"project_name\"\n\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"project_ids\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"project_ids\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'timesheet.filter.placeholders.placeholder1' | translate }}\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.project_name}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col text-left btn_apply d-none\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-submit btn-sm mb-0\">{{'common.apply' | translate}}</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<!-- Timesheet list datatable -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"timesheets_table\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-30\">{{'timesheet.columns.user' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.project_name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>{{'timesheet.columns.entry' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-150\">{{'timesheet.columns.note' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-75\">{{'timesheet.columns.start_time' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-75\">{{'timesheet.columns.end_time' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"width-50\">{{'timesheet.columns.time_h' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"timesheets?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let timesheet of timesheets; index as i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', timesheet.user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{timesheet.user.firstname}} {{timesheet.user.lastname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"timesheet.user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{timesheet.user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!timesheet.user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.project_id; else elseBlock\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/projects/detail', timesheet.project_id]\" class=\"text-info\" tooltip=\"{{timesheet.project_name}}\">#{{timesheet.project_generated_id}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>-</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/tasks/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.task_generated_id}}</a> - {{timesheet.task_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/defects/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.defect_generated_id}}</a> - {{timesheet.defect_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/incidents/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.incident_generated_id}}</a> - {{timesheet.incident_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/meetings/detail', timesheet.module_related_id]\" class=\"text-info\">#{{timesheet.meeting_generated_id}}</a> - {{timesheet.meeting_title}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 6\">-</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"timesheet.module_id == 7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{timesheet.leave_title}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.note}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.start_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.end_time | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{timesheet.hour_time}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"timesheets?.length != 0\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><b>{{'common.total' | translate}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><b>{{totalHours.hour_time}}</b></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tfoot class=\"tfoot_dt d-none\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/core/services/meeting.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/meeting.service.ts ***!
  \**************************************************/
/*! exports provided: MeetingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingService", function() { return MeetingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MeetingService = /** @class */ (function () {
    function MeetingService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    MeetingService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/meetings");
    };
    MeetingService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/meetings/" + id);
    };
    MeetingService.prototype.create = function (meeting) {
        return this.http.post(this.apiUrl + "/api/meetings", meeting);
    };
    MeetingService.prototype.update = function (meeting) {
        return this.http.put(this.apiUrl + "/api/meetings/" + meeting.id, meeting);
    };
    MeetingService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/meetings/" + id);
    };
    MeetingService.prototype.changeStatus = function (params) {
        return this.http.post(this.apiUrl + "/api/meetings/" + params.ids + "/change-status", { "status": params.status });
    };
    MeetingService.prototype.getCalendarMeetings = function () {
        return this.http.get(this.apiUrl + "/api/meetings/calendar");
    };
    MeetingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MeetingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MeetingService);
    return MeetingService;
}());



/***/ }),

/***/ "./src/app/core/services/task.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/task.service.ts ***!
  \***********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TaskService.prototype.create = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks", task);
    };
    TaskService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/tasks");
    };
    TaskService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id);
    };
    TaskService.prototype.update = function (task) {
        return this.http.put(this.apiUrl + "/api/tasks/" + task.id, task);
    };
    TaskService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/tasks/" + id);
    };
    TaskService.prototype.getTaskActivity = function (id) {
        return this.http.get(this.apiUrl + "/api/activities/Task/" + id);
    };
    TaskService.prototype.changeStatus = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/" + task.id + "/change-status", { "status": task.status });
    };
    TaskService.prototype.changePriority = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/" + task.id + "/change-priority", { "priority": task.priority });
    };
    TaskService.prototype.updateNotes = function (task) {
        return this.http.put(this.apiUrl + "/api/tasks/notes/" + task.id, task);
    };
    // getGeneratedId(){
    //     return this.http.get(`${this.apiUrl}/api/tasks/get-generated-id`);
    // }
    TaskService.prototype.getParentTask = function (id) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id + "/parent-task", {});
    };
    // getsubTaskCountByParent(id: number) {
    //     return this.http.get(`${this.apiUrl}/api/tasks/${id}/subtask-count-by-parent`,{}); 
    // }
    TaskService.prototype.getTaskForTaskBoard = function (params) {
        return this.http.post(this.apiUrl + "/api/taskboard", params);
    };
    TaskService.prototype.updateStatusList = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/status-list", task);
    };
    TaskService.prototype.getTaskPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/tasks/" + id + "/permission/" + type, {});
    };
    TaskService.prototype.getCalendarTasks = function () {
        return this.http.get(this.apiUrl + "/api/tasks/calendar");
    };
    TaskService.prototype.convertSprintTaskToTask = function (task) {
        return this.http.post(this.apiUrl + "/api/tasks/convertsprinttask-to-task", task);
    };
    TaskService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L2NvbXBvbmVudHMvY3JlYXRlLXRpbWVzaGVldC1tb2RhbC9jcmVhdGUtdGltZXNoZWV0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CreateTimesheetModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTimesheetModalComponent", function() { return CreateTimesheetModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");









var CreateTimesheetModalComponent = /** @class */ (function () {
    function CreateTimesheetModalComponent(translate, bsModalRef, formBuilder, toastr, timesheetService) {
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
    }
    CreateTimesheetModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    CreateTimesheetModalComponent.prototype.loadForms = function () {
        this.createTimesheetForm = this.formBuilder.group({
            project_id: [this.params.project_id],
            module_id: [this.params.module_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            module_related_id: [this.params.module_related_id],
            start_time: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_time: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            note: [null],
        });
    };
    Object.defineProperty(CreateTimesheetModalComponent.prototype, "timesheetControl", {
        get: function () { return this.createTimesheetForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateTimesheetModalComponent.prototype.startTimeChange = function (start_time) {
        this.createTimesheetForm.patchValue({ end_time: new Date(start_time.value) });
    };
    CreateTimesheetModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createTimesheetForm.invalid) {
            return;
        }
        this.createTimesheetForm.value.start_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.createTimesheetForm.value.start_time).format('YYYY-MM-DD HH:mm:ss');
        this.createTimesheetForm.value.end_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.createTimesheetForm.value.end_time).format('YYYY-MM-DD HH:mm:ss');
        // Check dates.
        if ((this.createTimesheetForm.value.start_time == this.createTimesheetForm.value.end_time) || (this.createTimesheetForm.value.start_time > this.createTimesheetForm.value.end_time)) {
            this.toastr.error(this.translate.instant('timesheet.create.error_messages.message3'), this.translate.instant('timesheet.title'));
            return false;
        }
        this.timesheetService.create(this.createTimesheetForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.create'), _this.translate.instant('timesheet.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    CreateTimesheetModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateTimesheetModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"] }
    ]; };
    CreateTimesheetModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-timesheet-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-timesheet-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-timesheet-modal.component.scss */ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"]])
    ], CreateTimesheetModalComponent);
    return CreateTimesheetModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L2NvbXBvbmVudHMvZWRpdC10aW1lc2hlZXQtbW9kYWwvZWRpdC10aW1lc2hlZXQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditTimesheetModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimesheetModalComponent", function() { return EditTimesheetModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");









var EditTimesheetModalComponent = /** @class */ (function () {
    function EditTimesheetModalComponent(translate, bsEditRoleModalRef, formBuilder, toastr, timesheetService) {
        this.translate = translate;
        this.bsEditRoleModalRef = bsEditRoleModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
    }
    EditTimesheetModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    EditTimesheetModalComponent.prototype.loadForm = function () {
        this.editTimesheetForm = this.formBuilder.group({
            id: [this.timesheet.id],
            start_time: [new Date(this.timesheet.start_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_time: [new Date(this.timesheet.end_time), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            note: [this.timesheet.note],
        });
    };
    Object.defineProperty(EditTimesheetModalComponent.prototype, "timesheetControl", {
        get: function () { return this.editTimesheetForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditTimesheetModalComponent.prototype.startTimeChange = function (start_time) {
        this.editTimesheetForm.patchValue({ end_time: new Date(start_time.value) });
    };
    EditTimesheetModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTimesheetForm.invalid) {
            return;
        }
        this.editTimesheetForm.value.start_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.editTimesheetForm.value.start_time).format('YYYY-MM-DD HH:mm:ss');
        this.editTimesheetForm.value.end_time = moment__WEBPACK_IMPORTED_MODULE_7__(this.editTimesheetForm.value.end_time).format('YYYY-MM-DD HH:mm:ss');
        // --
        // Check dates
        if ((this.editTimesheetForm.value.start_time == this.editTimesheetForm.value.end_time) || (this.editTimesheetForm.value.start_time > this.editTimesheetForm.value.end_time)) {
            this.toastr.error(this.translate.instant('timesheet.create.error_messages.message3'), this.translate.instant('timesheet.title'));
            return false;
        }
        this.timesheetService.update(this.editTimesheetForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.update'), _this.translate.instant('timesheet.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditTimesheetModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditRoleModalRef.hide();
    };
    EditTimesheetModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"] }
    ]; };
    EditTimesheetModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-timesheet-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-timesheet-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-timesheet-modal.component.scss */ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_8__["TimesheetService"]])
    ], EditTimesheetModalComponent);
    return EditTimesheetModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L2NvbXBvbmVudHMvdGltZXNoZWV0LWxpc3QvdGltZXNoZWV0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TimesheetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetListComponent", function() { return TimesheetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create-timesheet-modal/create-timesheet-modal.component */ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts");
/* harmony import */ var _edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edit-timesheet-modal/edit-timesheet-modal.component */ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts");











var TimesheetListComponent = /** @class */ (function () {
    function TimesheetListComponent(translate, modalService, toastr, ngxRolesService, timesheetService, meetingService) {
        this.translate = translate;
        this.modalService = modalService;
        this.toastr = toastr;
        this.ngxRolesService = ngxRolesService;
        this.timesheetService = timesheetService;
        this.meetingService = meetingService;
        this.isPageLoaded = false;
    }
    TimesheetListComponent.prototype.ngOnInit = function () {
        this.getTimesheet();
    };
    TimesheetListComponent.prototype.getTimesheet = function () {
        var _this = this;
        var params = { "module_id": this.module_id, "module_related_id": this.module_related_id };
        this.timesheetService.getTimesheetsByModule(params).subscribe(function (data) {
            _this.timesheets = data;
            _this.isPageLoaded = true;
        });
    };
    TimesheetListComponent.prototype.openTimesheetCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                params: {
                    module_id: this.module_id,
                    module_related_id: this.module_related_id,
                    project_id: this.project_id
                }
            }
        };
        this.modalRef = this.modalService.show(_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_9__["CreateTimesheetModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTimesheet();
        });
    };
    TimesheetListComponent.prototype.editTimesheet = function (timesheet) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                timesheet: timesheet
            }
        };
        this.modalRef = this.modalService.show(_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_10__["EditTimesheetModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTimesheet();
        });
    };
    TimesheetListComponent.prototype.deleteTimesheet = function (id, index) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + this.translate.instant('timesheet.title').toLowerCase() + '!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.timesheetService.delete(id).subscribe(function (data) {
                    _this.timesheets.splice(index, 1);
                    _this.toastr.success(_this.translate.instant('timesheet.messages.delete'), _this.translate.instant('timesheet.title'));
                });
            }
        });
    };
    TimesheetListComponent.prototype.saveTimesheetDetail = function (index, name, value) {
        var _this = this;
        this.timesheets[index][name] = value;
        this.timesheetService.update(this.timesheets[index]).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.update'), _this.translate.instant('timesheet.title'));
            _this.getTimesheet();
        });
    };
    TimesheetListComponent.prototype.getCheckPermission = function (timesheet) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (timesheet.created_user_id == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    TimesheetListComponent.prototype.addTimesheet = function () {
        var _this = this;
        if (this.module_id == 5) {
            this.meetingService.getById(this.module_related_id).subscribe(function (data) {
                var meeting = data;
                var params = {
                    project_id: _this.project_id,
                    module_id: _this.module_id,
                    module_related_id: _this.module_related_id,
                    start_time: meeting.start_date,
                    end_time: meeting.end_date,
                    note: null
                };
                _this.timesheetService.create(params).subscribe(function (data) {
                    _this.getTimesheet();
                    _this.toastr.success(_this.translate.instant('timesheet.messages.create'), _this.translate.instant('timesheet.title'));
                }, function (error) {
                    _this.toastr.error(_this.translate.instant('common.error_messages.message5'));
                });
            }, function (error) {
                _this.toastr.error(_this.translate.instant('common.error_messages.message5'));
            });
        }
        else {
            this.toastr.error(this.translate.instant('common.error_messages.message5'));
        }
    };
    TimesheetListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_7__["TimesheetService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_8__["MeetingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TimesheetListComponent.prototype, "module_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TimesheetListComponent.prototype, "module_related_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TimesheetListComponent.prototype, "project_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimesheetListComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimesheetListComponent.prototype, "apiUrl", void 0);
    TimesheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timesheet-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timesheet-list.component.scss */ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_7__["TimesheetService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_8__["MeetingService"]])
    ], TimesheetListComponent);
    return TimesheetListComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n\n.background-ot {\n  background-color: rgba(160, 136, 0, 0.11);\n}\n\n.success-input {\n  background-color: #92eea9;\n}\n\n.warning-input {\n  background-color: #aca235;\n}\n\n.empty-input {\n  background-color: #f0f0f0;\n}\n\n.error-warning {\n  background-color: #e0e2a4;\n  color: #000;\n}\n\n.holiday {\n  background-color: #1ab394;\n  color: #000;\n}\n\n.error-input {\n  background-color: #cf5050;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvbXktdGltZXNoZWV0L215LXRpbWVzaGVldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvbXktdGltZXNoZWV0L215LXRpbWVzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLHlDQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtBQ0dKOztBRERBO0VBQ0kseUJBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNNSjs7QURKQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ09KOztBRExBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RpbWVzaGVldC9wYWdlcy9teS10aW1lc2hlZXQvbXktdGltZXNoZWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuLmJhY2tncm91bmQtb3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxMzYsIDAsIDAuMTEpO1xufVxuLnN1Y2Nlc3MtaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MmVlYTk7XG59XG4ud2FybmluZy1pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FjYTIzNTtcbn1cbi5lbXB0eS1pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cbi5lcnJvci13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMmE0O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLmhvbGlkYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMTc5LCAxNDgpO1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLmVycm9yLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y1MDUwO1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4iLCIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJhY2tncm91bmQtb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMTM2LCAwLCAwLjExKTtcbn1cblxuLnN1Y2Nlc3MtaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJlZWE5O1xufVxuXG4ud2FybmluZy1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhY2EyMzU7XG59XG5cbi5lbXB0eS1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbi5lcnJvci13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTJhNDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5ob2xpZGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYjM5NDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5lcnJvci1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZjUwNTA7XG4gIGNvbG9yOiAjMDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts ***!
  \********************************************************************************/
/*! exports provided: MyTimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTimesheetComponent", function() { return MyTimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_20__);



















Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_17__["defineLocale"])('vi', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_18__["viLocale"]);


var MyTimesheetComponent = /** @class */ (function () {
    function MyTimesheetComponent(translate, ngxRolesService, formBuilder, http, exportAsService, taskService, toastr, timesheetService, datePipe, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.exportAsService = exportAsService;
        this.taskService = taskService;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.datePipe = datePipe;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dtOptions = {};
        this.exportTableData = [];
        this.leaves = [];
        this.holidays = [];
        this.working_hours = 8;
        this.preload = true;
        this.users_id = 'my';
        this.timesheets = [];
        this.department = [];
        this.users = [];
        this.timesheets_ot = [];
        this.viewDate = new Date();
        this.currentDate = this.datePipe.transform(new Date(), 'yyyy/MM/dd');
        this.weekMax = this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.currentDate, 7), 'yyyy/MM/dd');
        this.daysInMonth = [{}];
        this.clients = [];
        this.timesheet_total_viewtable = [];
        this.actionWeek = [];
        this.time_days = 0;
        this.time_hours = 0;
        this.isPageLoaded = false;
        this.isProjectManager = false;
        this.isFormSubmitted = false;
        this.draftShow = false;
        this.draftNotifyShow = false;
        this.weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        this.leavesHolidays = this.weekdays.reduce(function (acc, day) {
            acc[day] = { status: 0, data: [] };
            return acc;
        }, {});
        this.range = [
            { id: "today", label: this.translate.instant('timesheet.range.today') },
            { id: "this_month", label: this.translate.instant('timesheet.range.this_month') },
            { id: "last_month", label: this.translate.instant('timesheet.range.last_month') },
            { id: "this_week", label: this.translate.instant('timesheet.range.this_week') },
            { id: "last_week", label: this.translate.instant('timesheet.range.last_week') },
            { id: "period", label: this.translate.instant('timesheet.range.period') }
        ];
        this.exportAsConfig = {
            type: 'xlsx',
            elementIdOrContent: 'exportTable',
        };
        this.exportAsConfigOT = {
            type: 'xlsx',
            elementIdOrContent: 'exportTableOT',
        };
        this.exportAsConfigSalary = {
            type: 'xlsx',
            elementIdOrContent: 'exportTableSalary',
        };
        this.exportAsConfigDependents = {
            type: 'xlsx',
            elementIdOrContent: 'exportTableDependents',
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM-DD',
            containerClass: 'theme-red',
            weekStart: 1,
            maxDate: this.viewDate,
            locale: 'vi',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.working_hours = this.loginUser.settings.working_hours;
        this.time_days = this.loginUser.settings.time_days;
        this.time_hours = this.loginUser.settings.time_hours;
    }
    MyTimesheetComponent.prototype.ngOnInit = function () {
        this.loadForms();
        this.getUsers();
        this.changeDate(this.viewDate);
        this.timesheet_total = { monday: { hours: 0, note: "", date: this.startOfWeek }, tuesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 1), 'yyyy/MM/dd') }, wednesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 2), 'yyyy/MM/dd') }, thursday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 3), 'yyyy/MM/dd') }, friday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 4), 'yyyy/MM/dd') }, saturday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 5), 'yyyy/MM/dd') }, sunday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 6), 'yyyy/MM/dd') } };
        this.timesheet_ot_total = { monday: { hours: 0, note: "", date: this.startOfWeek }, tuesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 1), 'yyyy/MM/dd') }, wednesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 2), 'yyyy/MM/dd') }, thursday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 3), 'yyyy/MM/dd') }, friday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 4), 'yyyy/MM/dd') }, saturday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 5), 'yyyy/MM/dd') }, sunday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 6), 'yyyy/MM/dd') } };
    };
    MyTimesheetComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getCalendarTasks().subscribe(function (data) {
            _this.tasks = data;
        });
    };
    MyTimesheetComponent.prototype.changeDate = function (selectedDate) {
        this.viewDate = this.datePipe.transform(selectedDate, 'yyyy/MM/dd');
        this.salary_export = this.datePipe.transform(selectedDate, 'MM/yyyy');
        this.daysInMonth = this.getTotalDaysInMonth(this.viewDate);
        // console.log(this.daysInMonth);
        this.startOfWeek = this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["startOfWeek"])(selectedDate, { weekStartsOn: 1 }), 'yyyy/MM/dd');
        this.endOfWeek = this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["endOfWeek"])(selectedDate, { weekStartsOn: 1 }), 'yyyy/MM/dd');
        this.startEndWeek = this.datePipe.transform(this.startOfWeek, 'dd/MM/yyyy') + ' - ' + this.datePipe.transform(this.endOfWeek, 'dd/MM/yyyy');
        if (this.preload) {
            this.preload = false;
            // this.getHolidaysLeavesForUser();
            this.loadTimesheetDatatable();
        }
        else {
            this.onSubmit();
        }
    };
    MyTimesheetComponent.prototype.getTotalDaysInMonth = function (date) {
        var start = Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["startOfMonth"])(date);
        var end = Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["endOfMonth"])(date);
        var daysInMonth = [];
        for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
            daysInMonth.push({ date: Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["format"])(new Date(d), 'YYYY-MM-DD'), stt: Number(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["format"])(new Date(d), 'd')) });
        }
        return daysInMonth;
    };
    MyTimesheetComponent.prototype.nextWeek = function () {
        this.changeDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addWeeks"])(this.viewDate, 1));
    };
    MyTimesheetComponent.prototype.preWeek = function () {
        this.changeDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["subWeeks"])(this.viewDate, 1));
    };
    // getProjects() {
    // 	this.projectService.getMyProjects().subscribe(data => {
    // 		this.projects = data;
    // 	});
    // }
    MyTimesheetComponent.prototype.getUsers = function () {
        var _this = this;
        this.timesheetService.getUserSelect().subscribe(function (data) {
            if (data['role']['department_name'] != 'Administration' && data['role']['department_name'] != 'BOD') {
                var allUsers = data['data'] || [];
                _this.users = allUsers.filter(function (user) {
                    return _this.loginUser && user.id !== _this.loginUser.id;
                });
            }
            else {
                _this.users = data['data'];
            }
            _this.department = data['role'];
        });
    };
    MyTimesheetComponent.prototype.changeUser = function (event) {
        if (event) {
            this.users_id = event.id;
        }
        else {
            this.users_id = 'my';
        }
        if (event.timesheets_status && event.timesheets_status.start_time) {
            this.startOfWeek = this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["startOfWeek"])(event.timesheets_status.start_time, { weekStartsOn: 1 }), 'yyyy/MM/dd');
            this.endOfWeek = this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["endOfWeek"])(event.timesheets_status.start_time, { weekStartsOn: 1 }), 'yyyy/MM/dd');
            this.startEndWeek = this.datePipe.transform(this.startOfWeek, 'dd/MM/yyyy') + ' - ' + this.datePipe.transform(this.endOfWeek, 'dd/MM/yyyy');
        }
        else {
            this.startOfWeek = this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["startOfWeek"])(this.currentDate, { weekStartsOn: 1 }), 'yyyy/MM/dd');
            this.endOfWeek = this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["endOfWeek"])(this.currentDate, { weekStartsOn: 1 }), 'yyyy/MM/dd');
            this.startEndWeek = this.datePipe.transform(this.startOfWeek, 'dd/MM/yyyy') + ' - ' + this.datePipe.transform(this.endOfWeek, 'dd/MM/yyyy');
        }
        this.isProjectManager = false;
        this.checkDepartmentRoleProjectManager();
        this.onSubmit();
    };
    MyTimesheetComponent.prototype.getHolidaysLeavesForUser = function () {
        var _this = this;
        // console.log(this.startOfWeek, this.endOfWeek);
        this.timesheetService.getHolidaysLeavesForUser({ users_id: this.users_id, start: this.startOfWeek, end: this.endOfWeek }).subscribe(function (data) {
            _this.leaves = data['leaves'];
            _this.holidays = data['holidays'];
            _this.checkLeavesHolidays();
        });
    };
    // getClients() {
    // 	this.clientService.getClientsWithTrashed().subscribe(data => {
    // 		this.clients = data;
    // 	});
    // }
    MyTimesheetComponent.prototype.checkDepartmentRoleProjectManager = function () {
        var _this = this;
        this.users.forEach(function (element, index) {
            if (element.id == _this.users_id) {
                if (element.department_role && element.department_role.department_name == 'Project' && element.department_role.role_name == 'Manager') {
                    _this.isProjectManager = true;
                    return;
                }
            }
        });
    };
    MyTimesheetComponent.prototype.exportTableDataArray = function (data) {
        return Object.keys(data).map(function (key) { return ({
            key: key,
            value: data[key]
        }); });
    };
    MyTimesheetComponent.prototype.exportTimeSheet = function () {
        var _this = this;
        this.timesheetService.exportTimeSheet({ date: this.viewDate }).subscribe(function (data) {
            _this.exportTableData = data;
            _this.exportTableData.forEach(function (element, index) {
                element.timesheet = _this.exportTableDataArray(element.timesheet);
                element.timesheet_ot = _this.exportTableDataArray(element.timesheet_ot);
                element.actual_working_day = 0;
                element.timesheet.forEach(function (element2, index2) {
                    element2.check = _this.compareValues(element2, _this.working_hours);
                    if (element2.check) {
                        element.actual_working_day++;
                    }
                });
            });
            setTimeout(function () {
                _this.exportAsService.save(_this.exportAsConfig, 'Timesheet').subscribe(function () {
                });
                _this.exportAsService.save(_this.exportAsConfigOT, 'OT').subscribe(function () {
                });
                _this.exportAsService.save(_this.exportAsConfigSalary, 'Salary').subscribe(function () {
                });
                _this.exportAsService.save(_this.exportAsConfigDependents, 'Dependents').subscribe(function () {
                });
            }, 1000);
        });
    };
    MyTimesheetComponent.prototype.compareValues = function (timesheet, working_hours) {
        var isEqual = Number(timesheet.value) === Number(working_hours);
        var todayCheck = new Date(timesheet.key);
        var isSaturday = todayCheck.getDay() === 6;
        var weekOfMonth = this.getWeekOfMonth(todayCheck);
        var isSecondOrFourthWeek = (weekOfMonth === 2 || weekOfMonth === 4);
        var newDate = new Date();
        var today = Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["startOfDay"])(new Date(newDate.getFullYear(), newDate.getMonth(), 25));
        var currentWeekMonday = Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["startOfWeek"])(today, { weekStartsOn: 1 });
        var isWeekdayAndFuture = todayCheck > currentWeekMonday && Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["getDay"])(todayCheck) >= 1 && Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["getDay"])(todayCheck) <= 5;
        return isEqual || (isSaturday && isSecondOrFourthWeek) || isWeekdayAndFuture;
    };
    MyTimesheetComponent.prototype.getWeekOfMonth = function (date) {
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var firstDayOfWeek = firstDay.getDay();
        var dayOfMonth = date.getDate();
        return Math.ceil((dayOfMonth + firstDayOfWeek) / 7);
    };
    MyTimesheetComponent.prototype.checkApprovedPermission = function () {
        if (((this.actionWeek.status == 0 && (this.department['department_name'] != 'HR' || (this.department['department_name'] == 'HR' && this.isProjectManager))) ||
            (this.actionWeek.status == 1 &&
                (this.department['department_name'] == 'Administration' || this.department['department_name'] == 'BOD' || (this.department['department_name'] == 'HR' && this.users_id != 'my'))))
            &&
                (this.department['department_name'] == 'Administration' || this.department['department_name'] == 'BOD' ||
                    (this.department['department_name'] == 'HR' && this.users_id != 'my') ||
                    ((this.department['department_name'] == 'Project' || this.department['department_name'] == 'HR' || this.department['department_name'] == 'Marketing' || this.department['department_name'] == 'Accountant') &&
                        // this.department['role_name'] == 'Manager' &&
                        this.users_id != 'my'))) {
            return true;
        }
        else {
            return false;
        }
    };
    MyTimesheetComponent.prototype.loadForms = function () {
        this.timesheetFilterForm = this.formBuilder.group({
            range: [this.range[0].id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            project_ids: [null],
            client_id: [null],
            user_id: [null],
            start_date: [null],
        });
    };
    Object.defineProperty(MyTimesheetComponent.prototype, "filterControl", {
        // rangeChange(event: any){
        // 	const fromControl = this.timesheetFilterForm.get('period_from');
        // 	const toControl = this.timesheetFilterForm.get('period_to');
        // 	if (event.id === 'period') {
        //         fromControl.setValidators([Validators.required]);
        //         toControl.setValidators([Validators.required]);
        //         $('.btn_apply').removeClass('d-none');
        //     }
        //     else {
        //         fromControl.clearValidators();
        //         toControl.clearValidators();
        //         $('.btn_apply').addClass('d-none');
        //         this.onSubmit();
        //     }
        //     fromControl.updateValueAndValidity();
        //     toControl.updateValueAndValidity();
        // }
        // periodFromDateChange(event: any) {
        // 	this.timesheetFilterForm.patchValue({ period_to: event });
        // }
        get: function () { return this.timesheetFilterForm.controls; },
        enumerable: true,
        configurable: true
    });
    MyTimesheetComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        if (this.timesheetFilterForm.invalid) {
            return;
        }
        this.rerender();
    };
    MyTimesheetComponent.prototype.loadTimesheetDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            order: [0],
            processing: true,
            dom: '<"html5buttons"B>t',
            columns: [
                {
                    'sortable': false,
                    'target': [0]
                },
                {
                    'sortable': false,
                    'width': "3%",
                    'target': [1]
                },
                {
                    'sortable': false,
                    'width': "3%",
                    'target': [2]
                },
                {
                    'sortable': false,
                    'width': "3%",
                    'target': [3]
                },
                {
                    'sortable': false,
                    'width': "3%",
                    'target': [4]
                },
                {
                    'sortable': false,
                    'width': "3%",
                    'target': [5]
                },
                {
                    'sortable': false,
                    'width': "3%",
                    'target': [6]
                },
                {
                    'sortable': false,
                    'width': "4%",
                    'target': [7]
                },
                {
                    'sortable': false,
                    'width': "5%",
                    'target': [8]
                },
                {
                    'sortable': false,
                    'width': "5%",
                    'target': [9]
                }
            ],
            buttons: [],
            language: {
                "sEmptyTable": this.translate.instant('common.datatable.sEmptyTable'),
                "sInfo": this.translate.instant('common.datatable.sInfo'),
                "sInfoEmpty": this.translate.instant('common.datatable.sInfoEmpty'),
                "sSearch": "",
                "sInfoPostFix": this.translate.instant('common.datatable.sInfoPostFix'),
                "sInfoThousands": this.translate.instant('common.datatable.sInfoThousands'),
                "sLengthMenu": this.translate.instant('common.datatable.sLengthMenu'),
                "sLoadingRecords": this.translate.instant('common.datatable.sLoadingRecords'),
                "sProcessing": this.translate.instant('common.datatable.sProcessing'),
                "sZeroRecords": this.translate.instant('common.datatable.sZeroRecords'),
                "sSearchPlaceholder": this.translate.instant('common.datatable.sSearchPlaceholder'),
                "oPaginate": {
                    "sFirst": this.translate.instant('common.datatable.oPaginate.sFirst'),
                    "sLast": this.translate.instant('common.datatable.oPaginate.sLast'),
                    "sNext": this.translate.instant('common.datatable.oPaginate.sNext'),
                    "sPrevious": this.translate.instant('common.datatable.oPaginate.sPrevious')
                },
                "oAria": {
                    "sSortAscending": this.translate.instant('common.datatable.oAria.sSortAscending'),
                    "sSortDescending": this.translate.instant('common.datatable.oAria.sSortDescending')
                }
            },
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters = {
                    start: that.startOfWeek,
                    end: that.endOfWeek,
                    user_id: that.users_id
                },
                    _this.http.post(_this.apiUrl + '/api/get-timesheets-calendar', dataTablesParameters, {}).subscribe(function (resp) {
                        _this.getTasks();
                        _this.getHolidaysLeavesForUser();
                        _this.isPageLoaded = true;
                        that.timesheets = [];
                        that.timesheets_ot = [];
                        _this.actionWeek = resp.other;
                        if (resp.action == 'draft') {
                            _this.draftShow = true;
                            if (resp.data.length > 0) {
                                _this.draftNotifyShow = true;
                            }
                            else {
                                _this.draftNotifyShow = false;
                            }
                        }
                        else {
                            if (_this.actionWeek.status == 3) {
                                _this.draftShow = true;
                                _this.draftNotifyShow = false;
                            }
                            else {
                                _this.draftShow = false;
                                _this.draftNotifyShow = false;
                            }
                        }
                        resp.data.forEach(function (element, index) {
                            var dataPush = { task_id: element.module_related_id, status: element.timesheets[0].status, approved1: element.timesheets[0].approved1, assign_to: element.assign_to, assign_members: element.assign_members, full_name: element.project_name + ' - ' + element.related_name, monday: { hours: 0, note: "", date: _this.startOfWeek }, tuesday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 1), 'yyyy/MM/dd') }, wednesday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 2), 'yyyy/MM/dd') }, thursday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 3), 'yyyy/MM/dd') }, friday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 4), 'yyyy/MM/dd') }, saturday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 5), 'yyyy/MM/dd') }, sunday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 6), 'yyyy/MM/dd') } };
                            element.timesheets.forEach(function (valueTimesheets) {
                                _this.weekdays.forEach(function (day) {
                                    if (dataPush[day].date == _this.datePipe.transform(valueTimesheets.start_time, 'yyyy/MM/dd')) {
                                        dataPush[day].hours += _this.roundDownToHalf(valueTimesheets.decimal_time);
                                        dataPush[day].id = valueTimesheets.id;
                                        dataPush[day].note = valueTimesheets.note;
                                        dataPush[day].status = valueTimesheets.status;
                                    }
                                });
                            });
                            that.timesheets.push(dataPush);
                        });
                        resp.ot.forEach(function (element, index) {
                            var dataPush = { task_id: element.module_related_id, status: element.timesheets[0].status, approved1: element.timesheets[0].approved1, assign_to: element.assign_to, assign_members: element.assign_members, full_name: element.project_name + ' - ' + element.related_name, monday: { hours: 0, note: "", date: _this.startOfWeek }, tuesday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 1), 'yyyy/MM/dd') }, wednesday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 2), 'yyyy/MM/dd') }, thursday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 3), 'yyyy/MM/dd') }, friday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 4), 'yyyy/MM/dd') }, saturday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 5), 'yyyy/MM/dd') }, sunday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 6), 'yyyy/MM/dd') } };
                            element.timesheets.forEach(function (valueTimesheets) {
                                _this.weekdays.forEach(function (day) {
                                    if (dataPush[day].date == _this.datePipe.transform(valueTimesheets.start_time, 'yyyy/MM/dd')) {
                                        dataPush[day].hours += _this.roundDownToHalf(valueTimesheets.decimal_time);
                                        dataPush[day].id = valueTimesheets.id;
                                        dataPush[day].note = valueTimesheets.note;
                                        dataPush[day].status = valueTimesheets.status;
                                    }
                                });
                            });
                            that.timesheets_ot.push(dataPush);
                        });
                        // that.timesheets = resp.data;
                        if (that.timesheets.length < 4 && _this.users_id == 'my') {
                            for (var index = that.timesheets.length; index < 4; index++) {
                                that.timesheets.push({ task_id: null, assign_to: null, assign_members: null, monday: { hours: 0, note: "", date: _this.startOfWeek }, tuesday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 1), 'yyyy/MM/dd') }, wednesday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 2), 'yyyy/MM/dd') }, thursday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 3), 'yyyy/MM/dd') }, friday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 4), 'yyyy/MM/dd') }, saturday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 5), 'yyyy/MM/dd') }, sunday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 6), 'yyyy/MM/dd') } });
                            }
                        }
                        if (that.timesheets_ot.length < 1 && _this.users_id == 'my') {
                            for (var index = that.timesheets_ot.length; index < 1; index++) {
                                that.timesheets_ot.push({ task_id: null, assign_to: null, assign_members: null, monday: { hours: 0, note: "", date: _this.startOfWeek }, tuesday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 1), 'yyyy/MM/dd') }, wednesday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 2), 'yyyy/MM/dd') }, thursday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 3), 'yyyy/MM/dd') }, friday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 4), 'yyyy/MM/dd') }, saturday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 5), 'yyyy/MM/dd') }, sunday: { hours: 0, note: "", date: _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(_this.startOfWeek, 6), 'yyyy/MM/dd') } });
                            }
                        }
                        _this.totalHours = resp;
                        _this.totalHours = _this.totalHours.total;
                        _this.changeTimeSheet();
                        callback({
                            recordsTotal: resp.recordsTotal,
                            recordsFiltered: resp.recordsFiltered,
                            data: [],
                            ot: [],
                        });
                        setTimeout(function () {
                            _this.setMessage();
                        });
                    });
            }
        };
    };
    MyTimesheetComponent.prototype.checkLeavesHolidays = function () {
        var _this = this;
        this.leavesHolidays = this.weekdays.reduce(function (acc, day) {
            acc[day] = { status: 0, data: [] };
            return acc;
        }, {});
        this.holidays.forEach(function (element) {
            var dayIndex = Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["getDay"])(element.date) == 0 ? 6 : Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["getDay"])(element.date) - 1;
            _this.leavesHolidays[_this.weekdays[dayIndex]].data.push(element);
            _this.leavesHolidays[_this.weekdays[dayIndex]].status = 1;
        });
        this.leaves.forEach(function (element) {
            var dayIndex = Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["getDay"])(element.formatted_date) == 0 ? 6 : Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["getDay"])(element.formatted_date) - 1;
            _this.leavesHolidays[_this.weekdays[dayIndex]].data.push(element);
            if (element.duration == 'half') {
                _this.leavesHolidays[_this.weekdays[dayIndex]].status = 3;
                if (_this.leavesHolidays[_this.weekdays[dayIndex]].data[0].duration_type == 'first_half') {
                    _this.leavesHolidays[_this.weekdays[dayIndex]].working_hours = 4;
                }
                else {
                    _this.leavesHolidays[_this.weekdays[dayIndex]].working_hours = 4.5;
                }
            }
            else {
                _this.leavesHolidays[_this.weekdays[dayIndex]].status = 2;
            }
        });
        this.changeTimeSheet();
    };
    MyTimesheetComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    MyTimesheetComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    MyTimesheetComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                _this.setMessage();
            }, 200);
        });
    };
    MyTimesheetComponent.prototype.setMessage = function () {
        if (this.timesheets.length > 0) {
            $('.tfoot_dt').addClass('d-none');
        }
        else {
            $('.tfoot_dt').removeClass('d-none');
        }
    };
    // exportFiles(type) {
    // 	this.exportAsConfig.type = type;
    // 	this.exportAsService.save(this.exportAsConfig, this.translate.instant('timesheet.title')).subscribe(() => {});
    // }
    // openTimesheetCreateModal() {
    // 	let modalConfigs = {
    // 		animated: true,
    // 		keyboard: true,
    // 		backdrop: true,
    // 		ignoreBackdropClick: false,
    // 		class: "inmodal modal-dialog-centered modal-md animated fadeIn",
    // 		initialState: {
    // 			params: {
    // 				module_id: 6,
    // 				module_related_id: null,
    // 				project_id: null
    // 			}
    // 		}
    // 	};
    // 	this.modalRef = this.modalService.show(CreateTimesheetModalComponent, modalConfigs);
    // 	this.modalRef.content.event.subscribe(data => {
    // 		this.rerender();
    // 	});
    // }
    // openTimesheetEditModal(timesheet){
    // 	let modalConfigs = {
    // 		animated: true,
    // 		keyboard: true,
    // 		backdrop: true,
    // 		ignoreBackdropClick: false,
    // 		class: "inmodal modal-dialog-centered modal-md animated fadeIn",
    // 		initialState: {
    // 			timesheet: timesheet
    // 		}
    // 	};
    // 	this.modalRef = this.modalService.show(EditTimesheetModalComponent, modalConfigs);
    // 	this.modalRef.content.event.subscribe(data => {
    // 		this.rerender();
    // 	});
    // }
    // deleteTimesheet(id){
    // 	Swal.fire({
    // 		title: this.translate.instant('common.swal.title'),
    // 		text: this.translate.instant('common.swal.text') + this.translate.instant('timesheet.title').toLowerCase() + '!',
    // 		type: 'warning',
    // 		showCancelButton: true,
    // 		confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
    // 		cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
    // 	}).then((result) => {
    // 		if (result.value) {
    // 			this.timesheetService.delete(id).subscribe(data => {
    // 				this.rerender();
    // 				this.toastr.success(this.translate.instant('timesheet.messages.delete'), this.translate.instant('timesheet.title'));
    // 			});
    // 		}
    // 	});
    // }
    // saveTimesheetDetail(index, name, value){
    // 	this.timesheets[index][name] = value;
    // 	this.timesheetService.update(this.timesheets[index]).subscribe(data => {
    // 		this.toastr.success(this.translate.instant('timesheet.messages.update'), this.translate.instant('timesheet.title'));
    // 		this.rerender();
    // 	});
    // }
    MyTimesheetComponent.prototype.removeRowOT = function (index) {
        this.timesheets_ot.splice(index, 1);
        if (this.timesheets_ot.length == 0) {
            this.timesheets_ot.push({ task_id: null, assign_members: null, monday: { hours: 0, note: "", date: this.startOfWeek }, tuesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 1), 'yyyy/MM/dd') }, wednesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 2), 'yyyy/MM/dd') }, thursday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 3), 'yyyy/MM/dd') }, friday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 4), 'yyyy/MM/dd') }, saturday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 5), 'yyyy/MM/dd') }, sunday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 6), 'yyyy/MM/dd') } });
        }
        this.changeTimeSheet();
    };
    MyTimesheetComponent.prototype.addRowOT = function () {
        this.timesheets_ot.push({ task_id: null, assign_members: null, monday: { hours: 0, note: "", date: this.startOfWeek }, tuesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 1), 'yyyy/MM/dd') }, wednesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 2), 'yyyy/MM/dd') }, thursday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 3), 'yyyy/MM/dd') }, friday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 4), 'yyyy/MM/dd') }, saturday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 5), 'yyyy/MM/dd') }, sunday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 6), 'yyyy/MM/dd') } });
        this.changeTimeSheet();
    };
    MyTimesheetComponent.prototype.removeRow = function (index) {
        this.timesheets.splice(index, 1);
        if (this.timesheets.length == 1) {
            this.timesheets.push({ task_id: null, assign_members: null, monday: { hours: 0, note: "", date: this.startOfWeek }, tuesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 1), 'yyyy/MM/dd') }, wednesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 2), 'yyyy/MM/dd') }, thursday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 3), 'yyyy/MM/dd') }, friday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 4), 'yyyy/MM/dd') }, saturday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 5), 'yyyy/MM/dd') }, sunday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 6), 'yyyy/MM/dd') } });
        }
        this.changeTimeSheet();
    };
    MyTimesheetComponent.prototype.addRow = function () {
        this.timesheets.push({ task_id: null, assign_members: null, monday: { hours: 0, note: "", date: this.startOfWeek }, tuesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 1), 'yyyy/MM/dd') }, wednesday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 2), 'yyyy/MM/dd') }, thursday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 3), 'yyyy/MM/dd') }, friday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 4), 'yyyy/MM/dd') }, saturday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 5), 'yyyy/MM/dd') }, sunday: { hours: 0, note: "", date: this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(this.startOfWeek, 6), 'yyyy/MM/dd') } });
        this.changeTimeSheet();
    };
    MyTimesheetComponent.prototype.changeTimeSheet = function () {
        var _this = this;
        this.timesheet_total.total = 0;
        this.weekdays.forEach(function (day) {
            _this.timesheet_total[day].hours = 0;
        });
        this.timesheet_ot_total.total = 0;
        this.weekdays.forEach(function (day) {
            _this.timesheet_ot_total[day].hours = 0;
        });
        this.timesheets.forEach(function (element, index) {
            element.total = 0;
            _this.weekdays.forEach(function (day) {
                element[day].hours = _this.roundDownToHalf(element[day].hours);
                element.total += element[day].hours;
                _this.timesheet_total[day].hours += element[day].hours;
                _this.timesheet_total.total += element[day].hours;
            });
        });
        this.timesheet_total_viewtable = JSON.parse(JSON.stringify(this.timesheet_total));
        this.weekdays.forEach(function (day) {
            if (_this.leavesHolidays[day].data[0]) {
                if (_this.leavesHolidays[day].data[0].duration == "half") {
                    if (_this.leavesHolidays[day].data[0].duration_type == 'first_half') {
                        _this.timesheet_total_viewtable[day].hours += 4;
                        _this.timesheet_total_viewtable.total += 4;
                    }
                    else {
                        _this.timesheet_total_viewtable[day].hours += 4.5;
                        _this.timesheet_total_viewtable.total += 4.5;
                    }
                }
                else {
                    _this.timesheet_total_viewtable[day].hours += 8.5;
                    _this.timesheet_total_viewtable.total += 8.5;
                }
            }
        });
        this.timesheets_ot.forEach(function (element) {
            element.total = 0;
            _this.weekdays.forEach(function (day) {
                element[day].hours = _this.roundDownToHalf(element[day].hours);
                element.total += element[day].hours;
                _this.timesheet_ot_total[day].hours += element[day].hours;
                _this.timesheet_ot_total.total += element[day].hours;
            });
        });
    };
    MyTimesheetComponent.prototype.roundDownToHalf = function (value) {
        return Math.max(0, Math.floor(Number(value) * 2) / 2);
    };
    MyTimesheetComponent.prototype.saveTimeSheet = function (action) {
        var _this = this;
        var checkSubmit = true;
        var timesheetsSave = [];
        var timesheetsOTSave = [];
        this.timesheets.forEach(function (element, index) {
            if (!element.task_id) {
                var error_1 = false;
                _this.weekdays.forEach(function (day) {
                    if (_this.roundDownToHalf(element[day].hours) > 0) {
                        error_1 = true;
                    }
                });
                if (error_1) {
                    $('.timesheet_task_' + index).addClass('error-input');
                    checkSubmit = false;
                }
                else {
                    $('.timesheet_task_' + index).removeClass('error-input');
                }
            }
            else {
                _this.weekdays.forEach(function (day) {
                    if (element[day].hours > 0) {
                        var data = {};
                        data['task_id'] = element.task_id;
                        data['date'] = element[day].date;
                        data['note'] = element[day].note;
                        data['start_time'] = element[day].date + ' 00:00:00';
                        data['end_time'] = _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addHours"])(data['start_time'], element[day].hours), 'yyyy/MM/dd HH:mm:ss');
                        timesheetsSave.push(data);
                        var working_hours = _this.working_hours;
                        if (_this.leavesHolidays[day].working_hours) {
                            working_hours = _this.working_hours - _this.leavesHolidays[day].working_hours;
                        }
                        if (_this.timesheet_total[day].hours != working_hours) {
                            checkSubmit = false;
                        }
                    }
                });
                $('.timesheet_task_' + index).removeClass('error-input');
            }
        });
        this.timesheets_ot.forEach(function (element, index) {
            if (!element.task_id) {
                var error_2 = false;
                _this.weekdays.forEach(function (day) {
                    if (_this.roundDownToHalf(element[day].hours) > 0) {
                        error_2 = true;
                    }
                });
                if (error_2) {
                    $('.timesheet_ot_task_' + index).addClass('error-input');
                    checkSubmit = false;
                }
                else {
                    $('.timesheet_ot_task_' + index).removeClass('error-input');
                }
            }
            else {
                _this.weekdays.forEach(function (day) {
                    if (element[day].hours > 0) {
                        var data = {};
                        data['task_id'] = element.task_id;
                        data['date'] = element[day].date;
                        data['note'] = element[day].note;
                        data['start_time'] = element[day].date + ' 00:00:00';
                        data['end_time'] = _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addHours"])(data['start_time'], element[day].hours), 'yyyy/MM/dd HH:mm:ss');
                        timesheetsOTSave.push(data);
                    }
                    if ((_this.timesheet_total[day].hours < _this.working_hours && _this.timesheet_ot_total[day].hours > 0) || (_this.timesheet_total[day].hours + _this.timesheet_ot_total[day].hours) > 24) {
                        var isHoliday_1 = false;
                        _this.holidays.forEach(function (element2) {
                            if (_this.datePipe.transform(element2.date, 'yyyy-MM-dd') == _this.datePipe.transform(element[day].date, 'yyyy-MM-dd')) {
                                isHoliday_1 = true;
                            }
                        });
                        if (day != 'sunday' && day != 'saturday' && !isHoliday_1) {
                            checkSubmit = false;
                        }
                    }
                });
                $('.timesheet_ot_task_' + index).removeClass('error-input');
            }
        });
        if (this.timesheet_total.total == 0 && this.timesheet_ot_total.total == 0) {
            this.toastr.error('Timesheet not entered!');
            return;
        }
        if (checkSubmit && timesheetsSave.length > 0) {
            if (action == 'draft') {
                this.timesheetService.saveTimeSheet({ data: timesheetsSave, ot: timesheetsOTSave, rangeDate: { start: this.startOfWeek, end: this.endOfWeek }, action: action }).subscribe(function (data) {
                    _this.rerender();
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                    title: this.translate.instant('common.swal.title'),
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: "Yes",
                    cancelButtonText: "Cancel"
                }).then(function (result) {
                    if (result.value) {
                        _this.timesheetService.saveTimeSheet({ data: timesheetsSave, ot: timesheetsOTSave, rangeDate: { start: _this.startOfWeek, end: _this.endOfWeek }, action: action }).subscribe(function (data) {
                            _this.rerender();
                        });
                    }
                });
            }
        }
    };
    MyTimesheetComponent.prototype.approvedTimeSheet = function (task_id) {
        var _this = this;
        if (task_id === void 0) { task_id = null; }
        var checkSubmit = true;
        var timesheetsSave = [];
        var timesheetsOTSave = [];
        this.timesheets.forEach(function (element, index) {
            if (!element.task_id) {
                var error_3 = false;
                _this.weekdays.forEach(function (day) {
                    if (_this.roundDownToHalf(element[day].hours) > 0) {
                        error_3 = true;
                    }
                });
                if (error_3) {
                    $('.timesheet_task_' + index).addClass('error-input');
                    checkSubmit = false;
                }
                else {
                    $('.timesheet_task_' + index).removeClass('error-input');
                }
            }
            else {
                _this.weekdays.forEach(function (day) {
                    if (element[day].hours > 0) {
                        var data = {};
                        data['task_id'] = element.task_id;
                        data['date'] = element[day].date;
                        data['start_time'] = element[day].date + ' 00:00:00';
                        data['end_time'] = _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addHours"])(data['start_time'], element[day].hours), 'yyyy/MM/dd HH:mm:ss');
                        timesheetsSave.push(data);
                        var working_hours = _this.working_hours;
                        if (_this.leavesHolidays[day].working_hours) {
                            working_hours = _this.working_hours - _this.leavesHolidays[day].working_hours;
                        }
                        if (_this.timesheet_total[day].hours != working_hours) {
                            checkSubmit = false;
                        }
                    }
                });
                $('.timesheet_task_' + index).removeClass('error-input');
            }
        });
        this.timesheets_ot.forEach(function (element, index) {
            if (!element.task_id) {
                var error_4 = false;
                _this.weekdays.forEach(function (day) {
                    if (_this.roundDownToHalf(element[day].hours) > 0) {
                        error_4 = true;
                    }
                });
                if (error_4) {
                    $('.timesheet_ot_task_' + index).addClass('error-input');
                    checkSubmit = false;
                }
                else {
                    $('.timesheet_ot_task_' + index).removeClass('error-input');
                }
            }
            else {
                _this.weekdays.forEach(function (day) {
                    if (element[day].hours > 0) {
                        var data = {};
                        data['task_id'] = element.task_id;
                        data['date'] = element[day].date;
                        data['start_time'] = element[day].date + ' 00:00:00';
                        data['end_time'] = _this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addHours"])(data['start_time'], element[day].hours), 'yyyy/MM/dd HH:mm:ss');
                        timesheetsOTSave.push(data);
                    }
                    if ((_this.timesheet_total[day].hours < _this.working_hours && _this.timesheet_ot_total[day].hours > 0) || (_this.timesheet_total[day].hours + _this.timesheet_ot_total[day].hours) > 24) {
                        var isHoliday_2 = false;
                        _this.holidays.forEach(function (element2) {
                            if (_this.datePipe.transform(element2.date, 'yyyy-MM-dd') == _this.datePipe.transform(element[day].date, 'yyyy-MM-dd')) {
                                isHoliday_2 = true;
                            }
                        });
                        if (day != 'sunday' && day != 'saturday' && !isHoliday_2) {
                            checkSubmit = false;
                        }
                    }
                });
                $('.timesheet_ot_task_' + index).removeClass('error-input');
            }
        });
        if (checkSubmit && timesheetsSave.length > 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                title: this.translate.instant('common.swal.title'),
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: this.translate.instant('common.swal.confirmButtonText1'),
                cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
            }).then(function (result) {
                if (result.value) {
                    _this.timesheetService.approvedTimeSheet({ users_id: _this.users_id, start: _this.startOfWeek, end: _this.endOfWeek, task_id: task_id }).subscribe(function (data) {
                        if (data == 'success') {
                            _this.rerender();
                            _this.getUsers();
                        }
                        else {
                            _this.toastr.error('No contract during timesheet!');
                        }
                    });
                }
            });
        }
    };
    MyTimesheetComponent.prototype.checkPermission = function () {
        // if(this.actionWeek.status == 0){
        //     return true;
        // }
        return false;
    };
    MyTimesheetComponent.prototype.convertTimeToDecimal = function (time) {
        var _a;
        if (!time || time.trim() === '') {
            return 0;
        }
        if (typeof time !== 'string') {
            time = String(time);
        }
        var hours;
        var minutes = 0;
        if (time.includes(':')) {
            _a = time.split(':').map(Number), hours = _a[0], minutes = _a[1];
        }
        else {
            hours = Number(time);
        }
        var decimalMinutes = minutes / 60;
        return hours + decimalMinutes;
    };
    MyTimesheetComponent.prototype.isDisabled = function (data) {
        if (this.datePipe.transform(new Date(), 'yyyy/MM/dd HH:mm') >= this.datePipe.transform(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_12__["addDays"])(data.date, this.time_days), this.time_hours), 'yyyy/MM/dd HH:mm') && data.status != 3) {
            return true;
        }
        return false;
    };
    MyTimesheetComponent.prototype.disApprovedTimeSheet = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText1'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                if (result.value) {
                    _this.timesheetService.disapprovedTimeSheet({ users_id: _this.users_id, start: _this.startOfWeek, end: _this.endOfWeek }).subscribe(function (data) {
                        if (data == 'success') {
                            _this.rerender();
                        }
                        else {
                            _this.toastr.error('Không có hợp đồng!');
                        }
                    });
                }
            }
        });
    };
    MyTimesheetComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_15__["TaskService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_13__["TimesheetService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])
    ], MyTimesheetComponent.prototype, "dtElement", void 0);
    MyTimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-timesheet',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-timesheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-timesheet.component.scss */ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_15__["TaskService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_13__["TimesheetService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]])
    ], MyTimesheetComponent);
    return MyTimesheetComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/timesheet/timesheet.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvdGltZXNoZWV0L3RpbWVzaGVldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy90aW1lc2hlZXQvcGFnZXMvdGltZXNoZWV0L3RpbWVzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0L3BhZ2VzL3RpbWVzaGVldC90aW1lc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts ***!
  \**************************************************************************/
/*! exports provided: TimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetComponent", function() { return TimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_client_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/client.service */ "./src/app/core/services/client.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_17__);


















var TimesheetComponent = /** @class */ (function () {
    function TimesheetComponent(translate, formBuilder, http, exportAsService, toastr, timesheetService, projectService, clientService, userService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.clientService = clientService;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dtOptions = {};
        this.timesheets = [];
        this.clients = [];
        this.users = [];
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.range = [
            { id: "today", label: this.translate.instant('timesheet.range.today') },
            { id: "this_month", label: this.translate.instant('timesheet.range.this_month') },
            { id: "last_month", label: this.translate.instant('timesheet.range.last_month') },
            { id: "this_week", label: this.translate.instant('timesheet.range.this_week') },
            { id: "last_week", label: this.translate.instant('timesheet.range.last_week') },
            { id: "period", label: this.translate.instant('timesheet.range.period') }
        ];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'timesheets_table',
        };
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_14__["datepickerConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getClients();
        this.getUsers();
        this.loadForms();
        this.loadTimesheetDatatable();
    };
    TimesheetComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getAll().subscribe(function (data) {
            _this.projects = data;
        });
    };
    TimesheetComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClientsWithTrashed().subscribe(function (data) {
            _this.clients = data;
        });
    };
    TimesheetComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
        });
    };
    TimesheetComponent.prototype.loadForms = function () {
        this.timesheetFilterForm = this.formBuilder.group({
            range: [this.range[0].id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            period_from: [null],
            period_to: [null],
            user_id: [null],
            project_ids: [null],
            client_id: [null],
        });
    };
    TimesheetComponent.prototype.rangeChange = function (event) {
        var fromControl = this.timesheetFilterForm.get('period_from');
        var toControl = this.timesheetFilterForm.get('period_to');
        if (event.id === 'period') {
            fromControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            toControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            $('.btn_apply').removeClass('d-none');
        }
        else {
            fromControl.clearValidators();
            toControl.clearValidators();
            $('.btn_apply').addClass('d-none');
            this.onSubmit();
        }
        fromControl.updateValueAndValidity();
        toControl.updateValueAndValidity();
    };
    TimesheetComponent.prototype.periodFromDateChange = function (event) {
        this.timesheetFilterForm.patchValue({ period_to: event });
    };
    Object.defineProperty(TimesheetComponent.prototype, "filterControl", {
        get: function () { return this.timesheetFilterForm.controls; },
        enumerable: true,
        configurable: true
    });
    TimesheetComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        if (this.timesheetFilterForm.invalid) {
            return;
        }
        this.rerender();
    };
    TimesheetComponent.prototype.loadTimesheetDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': false,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('timesheet.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('timesheet.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('timesheet.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }
            ],
            language: {
                "sEmptyTable": this.translate.instant('common.datatable.sEmptyTable'),
                "sInfo": this.translate.instant('common.datatable.sInfo'),
                "sInfoEmpty": this.translate.instant('common.datatable.sInfoEmpty'),
                "sSearch": "",
                "sInfoPostFix": this.translate.instant('common.datatable.sInfoPostFix'),
                "sInfoThousands": this.translate.instant('common.datatable.sInfoThousands'),
                "sLengthMenu": this.translate.instant('common.datatable.sLengthMenu'),
                "sLoadingRecords": this.translate.instant('common.datatable.sLoadingRecords'),
                "sProcessing": this.translate.instant('common.datatable.sProcessing'),
                "sZeroRecords": this.translate.instant('common.datatable.sZeroRecords'),
                "sSearchPlaceholder": this.translate.instant('common.datatable.sSearchPlaceholder'),
                "oPaginate": {
                    "sFirst": this.translate.instant('common.datatable.oPaginate.sFirst'),
                    "sLast": this.translate.instant('common.datatable.oPaginate.sLast'),
                    "sNext": this.translate.instant('common.datatable.oPaginate.sNext'),
                    "sPrevious": this.translate.instant('common.datatable.oPaginate.sPrevious')
                },
                "oAria": {
                    "sSortAscending": this.translate.instant('common.datatable.oAria.sSortAscending'),
                    "sSortDescending": this.translate.instant('common.datatable.oAria.sSortDescending')
                }
            },
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters = {
                    columns: dataTablesParameters.columns,
                    draw: dataTablesParameters.draw,
                    length: dataTablesParameters.length,
                    order: dataTablesParameters.order,
                    search: dataTablesParameters.search,
                    start: dataTablesParameters.start,
                    range: _this.timesheetFilterForm.value.range,
                    period_from: _this.timesheetFilterForm.value.period_from,
                    period_to: _this.timesheetFilterForm.value.period_to,
                    user_id: _this.timesheetFilterForm.value.user_id,
                    project_ids: _this.timesheetFilterForm.value.project_ids,
                    client_id: _this.timesheetFilterForm.value.client_id,
                };
                _this.http.post(_this.apiUrl + '/api/timesheets-report', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.isPageLoaded = true;
                    _this.timesheets = resp.data;
                    _this.totalHours = resp;
                    _this.totalHours = _this.totalHours.total;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                    setTimeout(function () {
                        _this.setMessage();
                    });
                });
            }
        };
    };
    TimesheetComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    TimesheetComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TimesheetComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                _this.setMessage();
            }, 200);
        });
    };
    TimesheetComponent.prototype.setMessage = function () {
        if (this.timesheets.length > 0) {
            $('.tfoot_dt').addClass('d-none');
        }
        else {
            $('.tfoot_dt').removeClass('d-none');
        }
    };
    TimesheetComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('timesheet.title')).subscribe(function () { });
    };
    TimesheetComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_9__["TimesheetService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"] },
        { type: _core_services_client_service__WEBPACK_IMPORTED_MODULE_11__["ClientService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], TimesheetComponent.prototype, "dtElement", void 0);
    TimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timesheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheet/pages/timesheet/timesheet.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timesheet.component.scss */ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_9__["TimesheetService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_10__["ProjectService"],
            _core_services_client_service__WEBPACK_IMPORTED_MODULE_11__["ClientService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]])
    ], TimesheetComponent);
    return TimesheetComponent;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/timesheet-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/timesheet/timesheet-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TimesheetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetRoutingModule", function() { return TimesheetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/my-timesheet/my-timesheet.component */ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts");
/* harmony import */ var _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/timesheet/timesheet.component */ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts");






var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_4__["MyTimesheetComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'timesheet_view']
                    }
                }
            },
            {
                path: 'all',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                component: _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__["TimesheetComponent"],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'reports_view']
                    }
                }
            }
        ]
    }
];
var TimesheetRoutingModule = /** @class */ (function () {
    function TimesheetRoutingModule() {
    }
    TimesheetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TimesheetRoutingModule);
    return TimesheetRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/timesheet/timesheet.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/timesheet/timesheet.module.ts ***!
  \*******************************************************/
/*! exports provided: TimesheetModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetModule", function() { return TimesheetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timesheet-routing.module */ "./src/app/modules/timesheet/timesheet-routing.module.ts");
/* harmony import */ var _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/timesheet/timesheet.component */ "./src/app/modules/timesheet/pages/timesheet/timesheet.component.ts");
/* harmony import */ var _components_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/timesheet-list/timesheet-list.component */ "./src/app/modules/timesheet/components/timesheet-list/timesheet-list.component.ts");
/* harmony import */ var _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/create-timesheet-modal/create-timesheet-modal.component */ "./src/app/modules/timesheet/components/create-timesheet-modal/create-timesheet-modal.component.ts");
/* harmony import */ var _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-timesheet-modal/edit-timesheet-modal.component */ "./src/app/modules/timesheet/components/edit-timesheet-modal/edit-timesheet-modal.component.ts");
/* harmony import */ var _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/my-timesheet/my-timesheet.component */ "./src/app/modules/timesheet/pages/my-timesheet/my-timesheet.component.ts");




















var TimesheetModule = /** @class */ (function () {
    function TimesheetModule() {
    }
    TimesheetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_15__["TimesheetComponent"],
                _components_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_16__["TimesheetListComponent"],
                _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateTimesheetModalComponent"],
                _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditTimesheetModalComponent"],
                _pages_my_timesheet_my_timesheet_component__WEBPACK_IMPORTED_MODULE_19__["MyTimesheetComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlNativeDateTimeModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"],
                _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_14__["TimesheetRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_11__["ExportAsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            exports: [
                _components_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_16__["TimesheetListComponent"]
            ],
            entryComponents: [
                _components_create_timesheet_modal_create_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateTimesheetModalComponent"],
                _components_edit_timesheet_modal_edit_timesheet_modal_component__WEBPACK_IMPORTED_MODULE_18__["EditTimesheetModalComponent"]
            ]
        })
    ], TimesheetModule);
    return TimesheetModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=default~modules-pm-defects-defects-module~modules-pm-tasks-tasks-module~modules-timesheet-timesheet-module.js.map