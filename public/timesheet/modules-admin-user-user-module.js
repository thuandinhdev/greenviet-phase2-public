(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/assign-user/assign-user.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/assign-user/assign-user.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i>&nbsp;{{'users.title3' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" (ngSubmit)=\"onSubmit()\" class=\"bs4-forms\" *ngIf=\"isModalLoaded\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && checkObjectKeys() }\">\n\t\t\t\t\t\t<label>{{'users.create.fields.select_users' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"form-check i-child-checks m-b-xs\" *ngFor=\"let permission of permissions | keyvalue; let $index=index;\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<label class=\"checkbox-container\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"parent_{{$index}}\" (change)=\"changePermissions($index, permission.key)\" [checked]=\"isPermissionChecked(permission.key, assignPermissions, $index)\" />\n\t\t\t\t\t\t\t\t\t\t{{permissionsUsers[permission.key].name}}\n\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 hide\" [hidden]=\"!hideElements[$index]\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-12 m-xs\" *ngFor=\"let pValue of permission.value\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"child_{{$index}}\" [(checklist)]=\"assignPermissions[permission.key]\" [checklistValue]=\"pValue\" [disabled]=\"pValue === 'view'\" />\n\t\t\t\t\t\t\t\t\t\t\t\t{{pValue | titlecase}}\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && checkObjectKeys()\" class=\"invalid-feedback\">{{'users.create.error_messages.message20' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.cancel' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.assign' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/import-user/import-user.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/import-user/import-user.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-users modal-icon\" aria-hidden=\"true\"></i>&nbsp;{{'users.title6' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" (click)=\"onCancel()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>{{'users.create.fields.csv_file' | translate}}<span class=\"text-danger\">*</span></label><br>\n\t\t\t\t\t\t<input id=\"file\" class=\"mb-3 btn btn-secondary\" type=\"file\" accept=\".csv\" (change)=\"fileUpload($event.target.files)\">\n\t\t\t\t\t\t<div *ngIf=\"!csvFileSelected && isFormSubmitted\" class=\"text-danger\">{{'users.create.error_messages.message21' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button class=\"btn btn-submit mb-0\" (click)=\"onSubmit()\">{{'common.import' | translate}}</button>\n\t</div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-activities/user-activities.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-activities/user-activities.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pb-0 pr-0 border-bottom\">\n\t<h4 class=\"main-title mt-2\"><span>{{'activities.title' | translate}}</span></h4>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"role_table\" width=\"100%\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>{{ 'activities.columns.date' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'activities.columns.module' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'activities.columns.activity' | translate }}</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody *ngIf=\"activities?.length != 0\">\n\t\t\t\t\t\t<tr *ngFor=\"let activity of activities; index as i\">\n\t\t\t\t\t\t\t<td>{{activity.created_at | dateTimeFormatFilter: loginUser.settings.date_time_format}}</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\"><span class=\"open\">{{activity.module}}</span></td>\n\t\t\t\t\t\t\t<td [innerHTML]=\"activity.description\"></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot *ngIf=\"activities?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"3\" class=\"no-data-available\" class=\"text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-defects/user-defects.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-defects/user-defects.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pb-0 pr-0 border-bottom\">\n\t<h4 class=\"main-title mt-2\"><span>{{'defects.title' | translate}}</span></h4>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"defects_table\" width=\"100%\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>{{ 'defects.columns.id' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'defects.columns.defect_name' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'defects.columns.start_date' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'defects.columns.end_date' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'defects.columns.type' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'defects.columns.severity' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'defects.columns.status' | translate }}</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody *ngIf=\"defects?.length != 0\">\n\t\t\t\t\t\t<tr *ngFor=\"let defect of defects\">\n\t\t\t\t\t\t\t<td>{{defect.generated_id}}</td>\n\t\t\t\t\t\t\t<td>{{defect.defect_name}}</td>\n\t\t\t\t\t\t\t<td>{{defect.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n\t\t\t\t\t\t\t<td>{{defect.end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let type of ('defects.defect_types' | translate)\">\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-secondary\" *ngIf=\"type.id == defect.defect_type\">{{type.label}}</span>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let severity of ('defects.severities' | translate)\">\n\t\t\t\t\t\t\t\t\t<span class=\"{{severity.class}}\" *ngIf=\"severity.id == defect.severity\">{{severity.label | translate}}</span>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('defects.status' | translate)\">\n\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == defect.status\">{{status.label | translate}}</span>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot *ngIf=\"defects?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"7\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-incidents/user-incidents.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-incidents/user-incidents.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"card-header pl-0 pb-0 pr-0 border-bottom\">\n\t<h4 class=\"main-title mt-2\"><span>{{'incidents.title' | translate}}</span></h4>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"incidents_table\" width=\"100%\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>{{ 'incidents.columns.id' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'incidents.columns.incident_name' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'incidents.columns.start_date' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'incidents.columns.end_date' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'incidents.columns.type' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'incidents.columns.priority' | translate }}</th>\n\t\t\t\t\t\t\t<th>{{ 'incidents.columns.status' | translate }}</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody *ngIf=\"incidents?.length != 0\">\n\t\t\t\t\t\t<tr *ngFor=\"let incident of incidents\">\n\t\t\t\t\t\t\t<td>{{incident.generated_id}}</td>\n\t\t\t\t\t\t\t<td>{{incident.incident_name}}</td>\n\t\t\t\t\t\t\t<td>{{incident.start_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n\t\t\t\t\t\t\t<td>{{incident.end_date | dateTimeFormatFilter: loginUser.settings.date_format}}</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let type of ('incidents.incident_types' | translate)\">\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-secondary\" *ngIf=\"type.id == incident.incident_type\">{{type.label}}</span>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let priority of ('incidents.priorities' | translate)\">\n\t\t\t\t\t\t\t\t\t<span class=\"{{priority.class}}\" *ngIf=\"priority.id == incident.priority\">{{priority.label | translate}}</span>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let status of ('incidents.status' | translate)\">\n\t\t\t\t\t\t\t\t\t<span class=\"{{status.class}}\" *ngIf=\"status.id == incident.status\">{{status.label | translate}}</span>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot *ngIf=\"incidents?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"7\" class=\"no-data-available\" class=\"text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-create/user-create.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-create/user-create.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\" *ngIf=\"isPageLoaded\">\n\t<form [formGroup]=\"createUserForm\" (ngSubmit)=\"onSubmit()\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'users.title1' | translate}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'users.headings.head1' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"firstname\">{{'users.create.fields.first_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"{{'users.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.firstname.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.firstname.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.firstname.errors.required\">{{'users.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.firstname.errors.maxlength\">{{'users.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"lastname\">{{'users.create.fields.last_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"{{'users.create.placeholders.placeholder2' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.lastname.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.lastname.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.lastname.errors.required\">{{'users.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.lastname.errors.maxlength\">{{'users.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"username\">{{'users.create.fields.username' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"{{'users.create.placeholders.placeholder7' | translate}}\" aria-describedby=\"usernamePrepend\" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.username.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.username.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.username.errors.required\">{{'users.create.error_messages.message16' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.username.errors.minlength || userControl.username.errors.maxlength || userControl.username.errors.pattern\">{{'users.create.error_messages.message17' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"email\">{{'users.create.fields.email' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"{{'users.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.email.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.email.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.email.errors.required\">{{'users.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.email.errors.email\">{{'users.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"employee_id\">{{'users.create.fields.employment_ID' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"employment_id\" id=\"employee_id\" placeholder=\"EMP0001\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.employment_id.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.employment_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.employment_id.errors.required\">{{'users.create.error_messages.message15' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"dependents\">Dependents</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"dependents\" id=\"dependents\" placeholder=\"Dependents\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"init_paid_leave\">Paid leave&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Paid leave\"  formControlName=\"init_paid_leave\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.init_paid_leave.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"init_paid_leave_date\">Paid leave in effect&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" bsDatepicker [bsConfig]=\"datepickerConfigMonth\" placeholder=\"Effective date\" formControlName=\"init_paid_leave_date\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.init_paid_leave_date.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"password\">{{'users.create.fields.password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"password\" placeholder=\"{{'users.create.placeholders.placeholder4' | translate}}\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.password.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.password.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.password.errors.required\">{{'users.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.password.errors.minlength || userControl.password.errors.maxlength\">{{'users.create.error_messages.message8' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"password_confirmation\">{{'users.create.fields.confirm_password' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password_confirmation\" id=\"password_confirmation\" placeholder=\"{{'users.create.placeholders.placeholder5' | translate}}\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.password_confirmation.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.password_confirmation.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.password_confirmation.errors.required\">{{'users.create.error_messages.message9' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.password_confirmation.errors.mustMatch\">{{'users.create.error_messages.message10' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">&nbsp;</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<!-- <h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'users.headings.head3' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"user_generated_id\">{{'users.create.fields.userid' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"user_generated_id\" id=\"user_generated_id\" placeholder=\"USR000\" tabindex=\"-1\" readonly [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.user_generated_id.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.user_generated_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.user_generated_id.errors.required\">{{'users.create.error_messages.message14' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"employee_id\">{{'users.create.fields.employment_ID' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"emp_id\" id=\"employee_id\" placeholder=\"EMP0001\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.emp_id.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.emp_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.emp_id.errors.required\">{{'users.create.error_messages.message15' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"username\">{{'users.create.fields.username' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend no-borders no-paddings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text font-12\" id=\"usernamePrepend\">@</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"{{'users.create.placeholders.placeholder7' | translate}}\" aria-describedby=\"usernamePrepend\" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.username.errors }\" autocomplete=\"nope\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.username.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.username.errors.required\">{{'users.create.error_messages.message16' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.username.errors.minlength || userControl.username.errors.maxlength || userControl.username.errors.pattern\">{{'users.create.error_messages.message17' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"primary_manager\">{{'users.create.fields.primary_manager' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t\t\t\t\t[searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"primary_manager\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'users.create.placeholders.placeholder12' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"primary_manager\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"secondary_manager\">{{'users.create.fields.secondary_manager' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t\t\t\t\t[searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"secondary_manager\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'users.create.placeholders.placeholder13' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"secondary_manager\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"language\">{{'users.create.fields.language' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t\t\t\t\t[searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"languages\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"language\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"language\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'users.create.placeholders.placeholder10' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"language\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-mail\"></i> {{'users.headings.head4' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"mobile\">{{'users.create.fields.mobile' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"mobile\" id=\"mobile\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.mobile.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.mobile.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.mobile.errors.pattern\">{{'users.create.error_messages.message18' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"phone\">{{'users.create.fields.phone' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"phone\" id=\"phone\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.phone.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.phone.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.phone.errors.pattern\">{{'users.create.error_messages.message19' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"skype\">{{'users.create.fields.skype' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'users.create.placeholders.placeholder8' | translate}}\" formControlName=\"skype\" id=\"skype\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"country\">{{'users.create.fields.country' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t\t\t\t\t[searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"countries\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"code\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"country\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'users.create.placeholders.placeholder9' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"country\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"address\">{{'clients.create.fields.address' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"address\" id=\"address\" placeholder=\"{{'users.create.placeholders.placeholder14' | translate}}\"></textarea>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-file-text\"></i> {{'users.headings.head2' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'users.create.fields.profile_photo' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #pdfDropzone>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><strong>{{'users.create.error_messages.message11' | translate}}</strong></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a *ngFor=\"let avatar of avatars;\" (click)=\"setAvatar(avatar)\" [ngClass]=\"{active: isActive(avatar)}\" class=\"btn btn-profile-danger rounded-circle text-dark\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/profile/{{avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.department_roles.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'users.create.fields.departments_roles' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [items]=\"departmentsRoles\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tgroupBy=\"roles\"\n\t\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectableGroup]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"departmentRolesChange($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"department_roles\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'users.create.placeholders.placeholder6' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-optgroup-tmp let-item=\"item\">{{item.name}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.name}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.department_roles.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.department_roles.errors.required\">{{'users.create.error_messages.message12' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-container\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" formControlName=\"is_super_admin\" id=\"is_super_admin\" />{{'users.create.fields.is_departmenthead' | translate}}\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-container\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" formControlName=\"can_view_all_users\" id=\"can_view_all_users\" />{{'users.create.fields.can_view_all_users' | translate}}\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'users.create.fields.assigned_to' | translate}}&nbsp;<span class=\"text-danger\">*</span></label><br />\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" formControlName=\"assign_permission\" type=\"radio\" value=\"all\" id=\"customize_permission1\" (change)=\"changePermission($event)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"customize_permission1\">{{'users.create.fields.everyone' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</label><br />\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" formControlName=\"assign_permission\" type=\"radio\" value=\"cutomize\" id=\"customize_permission2\" (change)=\"changePermission($event)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"customize_permission2\">{{'users.create.fields.customize_permission' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isPermissionRequired\" class=\"invalid-feedback d-block\">{{'users.create.error_messages.message13' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'users.headings.head4' | translate}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\" id=\"estimate_table\" width=\"100%\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.create.fields.start_date' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.create.fields.end_date' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>BASIC(VNĐ)</th>\n\t\t\t\t\t\t\t\t\t\t<th>PERFORMANCE(VNĐ)</th>\n\t\t\t\t\t\t\t\t\t\t<th>LUNCH(VNĐ)</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.create.fields.salary' | translate}}(VNĐ)</th>\n\t\t\t\t\t\t\t\t\t\t<!-- <th>{{'users.create.fields.on_leave' | translate}}</th> -->\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr formArrayName=\"contract\">\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" (bsValueChange)=\"planstartDateChange($event)\" formControlName=\"start_date\" placeholder=\"{{'users.create.fields.start_date' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" (bsValueChange)=\"planstartDateChange($event)\" formControlName=\"end_date\" placeholder=\"{{'users.create.fields.end_date' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input appNumberFormat type=\"text\" class=\"form-control\" formControlName=\"basic\"  placeholder=\"Basic\" (change)=\"changeSalary($event)\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input appNumberFormat type=\"text\" class=\"form-control\" formControlName=\"performance\" (change)=\"changeSalary($event)\" placeholder=\"Performance\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input appNumberFormat type=\"text\" class=\"form-control\" formControlName=\"lunch\"  placeholder=\"Lunch\" (change)=\"changeSalary($event)\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input appNumberFormat type=\"text\" class=\"form-control\" formControlName=\"salary\"  placeholder=\"{{'users.create.fields.salary' | translate}}\" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"form-control\" >{{salary}}</div> -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<!-- <td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input min=\"0\" type=\"number\" class=\"form-control\" formControlName=\"on_leave\"  placeholder=\"{{'users.create.fields.on_leave' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td> -->\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12 text-right\">\n\t\t\t\t<a [routerLink]=\"['/users']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-submit\">{{'common.create' | translate}}</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-edit/user-edit.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-edit/user-edit.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"basic-form-layouts\" *ngIf=\"isPageLoaded\">\n\t<form [formGroup]=\"editUserForm\" (ngSubmit)=\"onSubmit()\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\" id=\"basic-layout-form\">{{'users.title2' | translate}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'users.headings.head1' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"firstname\">{{'users.create.fields.first_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\" placeholder=\"{{'users.create.placeholders.placeholder1' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.firstname.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.firstname.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.firstname.errors.required\">{{'users.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.firstname.errors.maxlength\">{{'users.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"lastname\">{{'users.create.fields.last_name' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\" placeholder=\"{{'users.create.placeholders.placeholder2' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.lastname.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.lastname.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.lastname.errors.required\">{{'users.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.lastname.errors.maxlength\">{{'users.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"username\">{{'users.create.fields.username' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"{{'users.create.placeholders.placeholder7' | translate}}\" aria-describedby=\"usernamePrepend\" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.username.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.username.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.username.errors.required\">{{'users.create.error_messages.message16' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.username.errors.minlength || userControl.username.errors.maxlength || userControl.username.errors.pattern\">{{'users.create.error_messages.message17' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"email\">{{'users.create.fields.email' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"{{'users.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.email.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.email.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.email.errors.required\">{{'users.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.email.errors.email\">{{'users.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"employee_id\">{{'users.create.fields.employment_ID' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"employment_id\" id=\"employee_id\" placeholder=\"EMP0001\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.employment_id.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.employment_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.employment_id.errors.required\">{{'users.create.error_messages.message15' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"dependents\">Dependents</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"dependents\" id=\"dependents\" placeholder=\"Dependents\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"init_paid_leave\">Paid leave&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Paid leave\"  formControlName=\"init_paid_leave\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.init_paid_leave.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"init_paid_leave_date\">Paid leave in effect&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" bsDatepicker [bsConfig]=\"datepickerConfigMonth\" placeholder=\"Effective date\" formControlName=\"init_paid_leave_date\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.init_paid_leave_date.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">&nbsp;</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"px-3\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<!-- <h4 class=\"form-section\"><i class=\"ft-user\"></i> {{'users.headings.head3' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\"> -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"user_generated_id\">{{'users.create.fields.userid' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"user_generated_id\" id=\"user_generated_id\" placeholder=\"USR000\" abindex=\"-1\" readonly [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.user_generated_id.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.user_generated_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.user_generated_id.errors.required\">{{'users.create.error_messages.message14' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"employee_id\">{{'users.create.fields.employment_ID' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"emp_id\" id=\"employee_id\" placeholder=\"EMP0001\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.emp_id.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.emp_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.emp_id.errors.required\">{{'users.create.error_messages.message15' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"username\">{{'users.create.fields.username' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend no-borders no-paddings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text font-12\" id=\"usernamePrepend\">@</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"{{'users.create.placeholders.placeholder7' | translate}}\" aria-describedby=\"usernamePrepend\" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.username.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.username.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.username.errors.required\">{{'users.create.error_messages.message16' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.username.errors.minlength || userControl.username.errors.maxlength || userControl.username.errors.pattern\">{{'users.create.error_messages.message17' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"primary_manager\">{{'users.create.fields.primary_manager' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t\t\t\t\t[searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"primary_manager\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'users.create.placeholders.placeholder12' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"primary_manager\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"secondary_manager\">{{'users.create.fields.secondary_manager' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t\t\t\t\t[searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"users\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"firstname\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"secondary_manager\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'users.create.placeholders.placeholder13' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"secondary_manager\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.firstname}} {{item.lastname}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"language\">{{'users.create.fields.language' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"languages\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"language\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"language\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'users.create.placeholders.placeholder10' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"language\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-mail\"></i> {{'users.headings.head4' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"mobile\">{{'users.create.fields.mobile' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"mobile\" id=\"mobile\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.mobile.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.mobile.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.mobile.errors.pattern\">{{'users.create.error_messages.message18' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"phone\">{{'users.create.fields.phone' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"xxxxxxxxxx\" formControlName=\"phone\" id=\"phone\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.phone.errors }\" />\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.phone.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.phone.errors.pattern\">{{'users.create.error_messages.message19' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"skype\">{{'users.create.fields.skype' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{'users.create.placeholders.placeholder8' | translate}}\" formControlName=\"skype\" id=\"skype\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"country\">{{'users.create.fields.country' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t[items]=\"countries\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectOnTab]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"code\"\n\t\t\t\t\t\t\t\t\t\t\t\tlabelForId=\"country\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'users.create.placeholders.placeholder9' | translate}}\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"country\">\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"address\">{{'users.create.fields.address' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"address\" id=\"address\" placeholder=\"{{'users.create.placeholders.placeholder14' | translate}}\"></textarea>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-file-text\"></i> {{'users.headings.head2' | translate}}</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'users.create.fields.profile_photo' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" formControlName=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropzone dz-clickable\" #pdfDropzone>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-preview dz-image-preview\" *ngIf=\"isProfileLoaded && user.avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/profile/{{user.avatar}}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-default btn-sm btn-block\" (click)=\"removeDropzoneImage()\">{{'common.remove_file' | translate}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"dz-default dz-message\" *ngIf=\"isProfileUploded\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dz-default dz-message\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><strong>{{'users.create.error_messages.message11' | translate}}</strong></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"people-lists text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a *ngFor=\"let avatar of avatars;\" (click)=\"setAvatar(avatar)\" [ngClass]=\"{active: isActive(avatar)}\" class=\"btn btn-profile-danger rounded-circle text-dark\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{apiUrl}}/uploads/profile/{{avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && userControl.department_roles.errors }\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'users.create.fields.departments_roles' | translate}}&nbsp;<span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-select [items]=\"departmentsRoles\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t\t\t\t\t\tgroupBy=\"department_name\"\n\t\t\t\t\t\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t[selectableGroup]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"departmentRolesChange($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"department_roles\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'users.create.placeholders.placeholder6' | translate}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template ng-optgroup-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.department_name || 'Unnamed group'}}\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && userControl.department_roles.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userControl.department_roles.errors.required\">{{'users.create.error_messages.message12' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-container\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" formControlName=\"is_super_admin\" id=\"is_super_admin\" />{{'users.create.fields.is_departmenthead' | translate}}\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-container\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" formControlName=\"can_view_all_users\" id=\"can_view_all_users\" />{{'users.create.fields.can_view_all_users' | translate}}\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>{{'users.create.fields.assigned_to' | translate}}&nbsp;<span class=\"text-danger\">*</span></label><br />\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" formControlName=\"assign_permission\" type=\"radio\" value=\"all\" id=\"customize_permission1\" (change)=\"changePermission($event);isButtonShow = false\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"customize_permission1\">{{'users.create.fields.everyone' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</label><br />\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check radio-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" formControlName=\"assign_permission\" type=\"radio\" value=\"cutomize\" id=\"customize_permission2\" (change)=\"changePermission($event);isButtonShow = true\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"customize_permission2\">{{'users.create.fields.customize_permission' | translate}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"radio-checkmark\"></span><br /><br />\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-raised btn-primary\" (click)=\"openAssignUserModal($event)\" *ngIf=\"isButtonShow\"><span>{{'users.buttons.assign_permission' | translate}}</span></button>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isPermissionRequired\" class=\"invalid-feedback d-block\">{{'users.create.error_messages.message13' | translate}}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<!-- <div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\">{{'users.headings.head4' | translate}}</h4>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\" id=\"estimate_table\" width=\"100%\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.create.fields.start_date' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.create.fields.end_date' | translate}}</th>\n                                        <th>BASIC(VNĐ)</th>\n\t\t\t\t\t\t\t\t\t\t<th>PERFORMANCE(VNĐ)</th>\n\t\t\t\t\t\t\t\t\t\t<th>LUNCH(VNĐ)</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.create.fields.salary' | translate}}(VNĐ)</th>\n\t\t\t\t\t\t\t\t\t\t<!-- <th>{{'users.create.fields.on_leave' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>days of leave used</th> -->\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr formArrayName=\"contract\">\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" bsDatepicker [bsConfig]=\"datepickerConfig\"  formControlName=\"start_date\" placeholder=\"{{'users.create.fields.start_date' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" bsDatepicker [bsConfig]=\"datepickerConfig\"  formControlName=\"end_date\" placeholder=\"{{'users.create.fields.end_date' | translate }}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n                                        <td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input appNumberFormat type=\"text\" class=\"form-control\" formControlName=\"basic\"  placeholder=\"Basic\" (change)=\"changeSalary($event)\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input appNumberFormat type=\"text\" class=\"form-control\" formControlName=\"performance\" (change)=\"changeSalary($event)\" placeholder=\"Performance\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input appNumberFormat type=\"text\" class=\"form-control\" formControlName=\"lunch\"  placeholder=\"Lunch\" (change)=\"changeSalary($event)\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input appNumberFormat type=\"text\" class=\"form-control\" formControlName=\"salary\"  placeholder=\"{{'users.create.fields.salary' | translate}}\" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<!-- <td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input min=\"0\" type=\"number\" class=\"form-control\" formControlName=\"on_leave\"  placeholder=\"{{'users.create.fields.on_leave' | translate}}\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td> -->\n                                        <!-- <td>\n\n                                        </td> -->\n\t\t\t\t\t\t\t\t\t</tr>\n                                    <tr *ngFor=\"let contract of user.contract_list\">\n                                        <td><div class=\"form-group\">{{contract.start_date}}</div></td>\n                                        <td><div class=\"form-group\">{{contract.end_date}}</div></td>\n                                        <td><div class=\"form-group\">{{contract.basic | number:'1.0-0'}}</div></td>\n                                        <td><div class=\"form-group\">{{contract.performance | number:'1.0-0'}}</div></td>\n                                        <td><div class=\"form-group\">{{contract.lunch | number:'1.0-0'}}</div></td>\n                                        <td><div class=\"form-group\">{{contract.salary | number:'1.0-0'}}</div></td>\n                                        <!-- <td><div class=\"form-group\">{{contract.on_leave | number:'1.0-0'}}</div></td>\n                                        <td><div class=\"form-group\">{{contract.used | number:'1.0-0'}}</div></td> -->\n                                    </tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12 text-right\">\n\t\t\t\t<a [routerLink]=\"['/users']\" class=\"btn btn-cancel\">{{'common.cancel' | translate}}</a>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-submit\">{{'common.update' | translate}}</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user/user.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user/user.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"hide_empty_message\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"><span>{{'users.title' | translate}}</span></h4>\n\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t<!-- <a *ngxPermissionsOnly=\"['admin', 'super_admin', 'users_create']\" href=\"{{ apiUrl }}/csv/import_users.csv\" download=\"import_users.csv\" class=\"btn btn-create mb-0\" placement=\"top\" tooltip=\"{{'common.tooltip.user_csv_sample' | translate}}\"><i class=\"fa fa-files-o\"></i></a> -->\n\t\t\t\t\t\t<!-- <button class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'users_create']\" (click)=\"openUserImportModal()\" tooltip=\"{{'common.import' | translate}}\"><i class=\"fa fa-upload\"></i></button> -->\n\t\t\t\t\t\t<a class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'users_create']\" [routerLink]=\"['/users/create']\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"users_table\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.columns.photo' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.columns.first_name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.columns.last_name' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.columns.username' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.columns.email' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remaining leave</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.columns.status' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.columns.departments_roles' | translate}}</th>\n\t\t\t\t\t\t\t\t\t\t<th>{{'users.columns.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody *ngIf=\"users?.length != 0\">\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let user of users; index as i\">\n\t\t\t\t\t\t\t\t\t\t<td class=\"people-lists\">\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/users/profile', user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{user.firstname}} {{user.lastname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"user.department_role_perm.isEditable; else elseBlock1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'firstname'\" [type]=\"'text'\" [elementFor]=\"'users.inline_edit.first_name' | translate\" [fieldValue]=\"user.firstname\" [maxLength]=\"20\" [isRequired]=\"'true'\" (updateValue)=\"saveUserDetail(i, 'firstname', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock1>{{user.firstname}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"user.department_role_perm.isEditable; else elseBlock2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-input [name]=\"'lastname'\" [type]=\"'text'\" [elementFor]=\"'users.inline_edit.last_name' | translate\" [fieldValue]=\"user.lastname\" [maxLength]=\"20\" [isRequired]=\"'true'\" (updateValue)=\"saveUserDetail(i, 'lastname', $event);\"></inline-edit-input>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock2>{{user.lastname}}</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['profile', user.id]\" tooltip=\"{{'common.view' | translate}}\">{{user.username}}</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t{{user.email}}\n\t\t\t\t\t\t\t\t\t\t</td>\n                                        <td>\n\t\t\t\t\t\t\t\t\t\t\t{{user.paid_leave}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"user.department_role_perm.isEditable && user.id != 22; else elseBlock3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ui-switch [checked]=\"user.is_active == '1' ? true : false\" (valueChange)=\"setActiveDeactiveUser($event, user)\"></ui-switch>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock3>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"completed\" *ngIf=\"user.is_active == '1'\">{{'common.status.active' | translate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"cancel\" *ngIf=\"user.is_active == '0'\">{{'common.status.deactive' | translate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template *ngIf=\"user.roles?.length == 0;else elseBlock4\">-</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #elseBlock4>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let role of departments[user.id]\" [ngClass]=\"{'cancel': role.role_id == 1, 'completed': role.role_id != 1}\">{{role.role_name}} ({{role.department_name}})</span>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown *ngIf=\"user.roles[0].name != 'Admin' || loginUser.roles[0] == 'admin'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li role=\"menuitem\" *ngIf=\"user.email_verified == '0' || user.email_verified == 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a *ngxPermissionsOnly=\"['admin', 'super_admin']\" (click)=\"sendInviteUserMail(user.id)\" class=\"dropdown-item btn btn-invite btn-raised\" tooltip=\"{{'common.invite' | translate}}\"><i class=\"fa fa-envelope-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"user.department_role_perm.isEditable\" [routerLink]=\"['edit', user.id]\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"user.department_role_perm.isDeletable\" (click)=\"userDelete(user.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot *ngIf=\"users?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"8\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/core/services/incident.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/incident.service.ts ***!
  \***************************************************/
/*! exports provided: IncidentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentService", function() { return IncidentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var IncidentService = /** @class */ (function () {
    function IncidentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    IncidentService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/incident");
    };
    IncidentService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/incident/" + id);
    };
    IncidentService.prototype.create = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident", incident);
    };
    IncidentService.prototype.update = function (incident) {
        return this.http.put(this.apiUrl + "/api/incident/" + incident.id, incident);
    };
    IncidentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/incident/" + id);
    };
    IncidentService.prototype.updateNotes = function (incident) {
        return this.http.put(this.apiUrl + "/api/incident/notes/" + incident.id, incident);
    };
    IncidentService.prototype.changeStatus = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/" + incident.id + "/change-status", { "status": incident.status });
    };
    IncidentService.prototype.changeSeverity = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/" + incident.id + "/change-severity", { "priority": incident.priority });
    };
    IncidentService.prototype.getIncidentPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/incident/" + id + "/permission/" + type, {});
    };
    IncidentService.prototype.getIncidentForKanban = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/kanban", incident);
    };
    IncidentService.prototype.updateKanbanStatusList = function (incident) {
        return this.http.post(this.apiUrl + "/api/incident/update-kanban", incident);
    };
    IncidentService.prototype.getIncidentForCalendar = function (obj) {
        if (obj === void 0) { obj = {}; }
        return this.http.post(this.apiUrl + "/api/incident/calendar", obj);
    };
    IncidentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IncidentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IncidentService);
    return IncidentService;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/assign-user/assign-user.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/assign-user/assign-user.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL2Fzc2lnbi11c2VyL2Fzc2lnbi11c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/assign-user/assign-user.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/assign-user/assign-user.component.ts ***!
  \************************************************************************************/
/*! exports provided: AssignUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignUserComponent", function() { return AssignUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");






var AssignUserComponent = /** @class */ (function () {
    function AssignUserComponent(bsModalRef, toastr, userService) {
        this.bsModalRef = bsModalRef;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.permissions = [];
        this.permissionsUsers = [];
        this.assignPermissions = [];
        this.hideElements = [];
        this.isModalLoaded = false;
    }
    AssignUserComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.getAssignUserPermissions();
    };
    AssignUserComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    AssignUserComponent.prototype.getAssignUserPermissions = function () {
        var _this = this;
        this.userService.getUserPermissions()
            .subscribe(function (data) {
            _this.assignUserPermissions = data;
            _this.setAssignUserPermissions();
            _this.isModalLoaded = true;
        });
    };
    AssignUserComponent.prototype.setAssignUserPermissions = function () {
        for (var iRow in this.assignUserPermissions) {
            this.permissions[this.assignUserPermissions[iRow].id] = ['view', 'delete', 'edit'];
            this.permissionsUsers[this.assignUserPermissions[iRow].id] = {
                'name': this.assignUserPermissions[iRow].firstname + ' ' + this.assignUserPermissions[iRow].lastname
            };
        }
    };
    AssignUserComponent.prototype.changePermissions = function (index, key) {
        this.hideElements[index] = !this.hideElements[index];
        if (this.hideElements[index]) {
            this.assignPermissions[key] = ['view'];
        }
        else {
            delete this.assignPermissions[key];
        }
    };
    AssignUserComponent.prototype.checkObjectKeys = function () {
        return Object.keys(this.assignPermissions).length == 0;
    };
    AssignUserComponent.prototype.isPermissionChecked = function (key, permission, index) {
        if (permission[key]) {
            this.hideElements[index] = true;
            return true;
        }
        else {
            return false;
        }
    };
    AssignUserComponent.prototype.onSubmit = function () {
        this.isFormSubmitted = true;
        if (this.checkObjectKeys()) {
            return false;
        }
        this.event.emit({ permissions: this.assignPermissions });
        this.onCancel();
    };
    AssignUserComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    AssignUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assign-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/assign-user/assign-user.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-user.component.scss */ "./src/app/modules/admin/user/components/assign-user/assign-user.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AssignUserComponent);
    return AssignUserComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/import-user/import-user.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/import-user/import-user.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL2ltcG9ydC11c2VyL2ltcG9ydC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/import-user/import-user.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/import-user/import-user.component.ts ***!
  \************************************************************************************/
/*! exports provided: ImportUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportUserComponent", function() { return ImportUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");







var ImportUserComponent = /** @class */ (function () {
    function ImportUserComponent(translate, bsImportUserModalRef, toastr, userService) {
        this.translate = translate;
        this.bsImportUserModalRef = bsImportUserModalRef;
        this.toastr = toastr;
        this.userService = userService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileAttached = false;
        this.isPageLoaded = false;
        this.isFormSubmitted = false;
        this.csvFileSelected = false;
    }
    ImportUserComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    };
    ImportUserComponent.prototype.fileUpload = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            var file = files.item(0), reader_1 = new FileReader();
            reader_1.readAsText(file);
            reader_1.onload = function (event) {
                var csvdata = reader_1.result;
                _this.csvData = csvdata;
                _this.fileAttached = true;
                if (_this.csvData != undefined) {
                    _this.csvFileSelected = true;
                }
                else {
                    _this.csvFileSelected = false;
                }
                var filename = files[0].name;
                var ext = filename.substr(filename.lastIndexOf('.') + 1);
                if (ext != 'csv') {
                    _this.toastr.error(_this.translate.instant('users.create.error_messages.message22'), _this.translate.instant('users.title'));
                    _this.csvFileSelected = false;
                    return;
                }
                var newLinebrk = csvdata.split("\n");
                var columnNames = newLinebrk[0].split(",");
                _this.csvFileColumnName = columnNames;
            };
        }
    };
    ImportUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.csvFileSelected) {
            this.userService.import({ csv_file: this.csvData })
                .subscribe(function (data) {
                _this.event.emit({ data: true });
                _this.onCancel();
            });
        }
    };
    ImportUserComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsImportUserModalRef.hide();
    };
    ImportUserComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
    ]; };
    ImportUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./import-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/import-user/import-user.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./import-user.component.scss */ "./src/app/modules/admin/user/components/import-user/import-user.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], ImportUserComponent);
    return ImportUserComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/user-activities/user-activities.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-activities/user-activities.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci1hY3Rpdml0aWVzL3VzZXItYWN0aXZpdGllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci1hY3Rpdml0aWVzL3VzZXItYWN0aXZpdGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItYWN0aXZpdGllcy91c2VyLWFjdGl2aXRpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/user-activities/user-activities.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-activities/user-activities.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UserActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivitiesComponent", function() { return UserActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);











var UserActivitiesComponent = /** @class */ (function () {
    function UserActivitiesComponent(translate, http, exportAsService, toastr) {
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.toastr = toastr;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.activities = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'activities_table',
        };
    }
    UserActivitiesComponent.prototype.ngOnInit = function () {
        this.loadRoleDatatable();
    };
    UserActivitiesComponent.prototype.loadRoleDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [{
                    'sortable': true,
                    'width': "18%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'width': "20%",
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': "62%",
                    'target': [3]
                }
            ],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('activities.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('activities.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('activities.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
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
                dataTablesParameters.userId = _this.user.id;
                _this.http
                    .post(_this.apiUrl + '/api/all-activities', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.activities = resp.data;
                    }
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    UserActivitiesComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('activities.title')).subscribe(function () { });
    };
    UserActivitiesComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserActivitiesComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserActivitiesComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserActivitiesComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserActivitiesComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], UserActivitiesComponent.prototype, "dtElement", void 0);
    UserActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-activities',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-activities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-activities/user-activities.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-activities.component.scss */ "./src/app/modules/admin/user/components/user-activities/user-activities.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], UserActivitiesComponent);
    return UserActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/user-defects/user-defects.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-defects/user-defects.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci1kZWZlY3RzL3VzZXItZGVmZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci1kZWZlY3RzL3VzZXItZGVmZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItZGVmZWN0cy91c2VyLWRlZmVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/user-defects/user-defects.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-defects/user-defects.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserDefectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefectsComponent", function() { return UserDefectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__);












var UserDefectsComponent = /** @class */ (function () {
    function UserDefectsComponent(translate, http, exportAsService, defectService, route) {
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.defectService = defectService;
        this.route = route;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.defects = [];
        this.userId = this.route.snapshot.paramMap.get('id');
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'defects_table',
        };
    }
    UserDefectsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    UserDefectsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            select: true,
            order: [0],
            columns: [{
                    'sortable': true,
                    'width': "7%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': "12%",
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': "12%",
                    'target': [3]
                }, {
                    'sortable': true,
                    'width': "11%",
                    'target': [4]
                }, {
                    'sortable': true,
                    'width': "10%",
                    'target': [5]
                }, {
                    'sortable': true,
                    'width': "10%",
                    'target': [6]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('defects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('defects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('defects.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
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
                    isUserProfile: 1,
                    user_id: _this.userId
                };
                _this.http
                    .post(_this.apiUrl + '/api/all-defects', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.defects = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    UserDefectsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('defects.title')).subscribe(function () { });
    };
    UserDefectsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserDefectsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserDefectsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
            });
        });
    };
    UserDefectsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_8__["DefectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserDefectsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], UserDefectsComponent.prototype, "dtElement", void 0);
    UserDefectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-defects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-defects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-defects/user-defects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-defects.component.scss */ "./src/app/modules/admin/user/components/user-defects/user-defects.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_8__["DefectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserDefectsComponent);
    return UserDefectsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/components/user-incidents/user-incidents.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-incidents/user-incidents.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci1pbmNpZGVudHMvdXNlci1pbmNpZGVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9jb21wb25lbnRzL3VzZXItaW5jaWRlbnRzL3VzZXItaW5jaWRlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL2NvbXBvbmVudHMvdXNlci1pbmNpZGVudHMvdXNlci1pbmNpZGVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin/user/components/user-incidents/user-incidents.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/user/components/user-incidents/user-incidents.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserIncidentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIncidentsComponent", function() { return UserIncidentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);











var UserIncidentsComponent = /** @class */ (function () {
    function UserIncidentsComponent(translate, http, exportAsService, incidentService, route) {
        this.translate = translate;
        this.http = http;
        this.exportAsService = exportAsService;
        this.incidentService = incidentService;
        this.route = route;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.incidents = [];
        this.userId = this.route.snapshot.paramMap.get('id');
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'incidents_table',
        };
    }
    UserIncidentsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    UserIncidentsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            select: true,
            order: [0],
            columns: [{
                    'sortable': true,
                    'width': "7%",
                    'target': [0]
                }, {
                    'sortable': true,
                    'target': [1]
                }, {
                    'sortable': true,
                    'width': "12%",
                    'target': [2]
                }, {
                    'sortable': true,
                    'width': "12%",
                    'target': [3]
                }, {
                    'sortable': true,
                    'width': "11%",
                    'target': [4]
                }, {
                    'sortable': true,
                    'width': "10%",
                    'target': [5]
                }, {
                    'sortable': true,
                    'width': "10%",
                    'target': [6]
                }],
            buttons: [{
                    extend: 'csv',
                    title: this.translate.instant('incidents.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('incidents.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('incidents.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }],
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
                    isUserProfile: 1,
                    user_id: _this.userId
                };
                _this.http.post(_this.apiUrl + '/api/all-incident', dataTablesParameters, {}).subscribe(function (resp) {
                    _this.incidents = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    UserIncidentsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('incidents.title')).subscribe(function () { });
    };
    UserIncidentsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserIncidentsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserIncidentsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
            });
        });
    };
    UserIncidentsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_8__["IncidentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserIncidentsComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserIncidentsComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], UserIncidentsComponent.prototype, "dtElement", void 0);
    UserIncidentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-incidents',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-incidents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/components/user-incidents/user-incidents.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-incidents.component.scss */ "./src/app/modules/admin/user/components/user-incidents/user-incidents.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_8__["IncidentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserIncidentsComponent);
    return UserIncidentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/pages/user-create/user-create.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user-create/user-create.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9wYWdlcy91c2VyLWNyZWF0ZS91c2VyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/user/pages/user-create/user-create.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user-create/user-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/assign-user/assign-user.component */ "./src/app/modules/admin/user/components/assign-user/assign-user.component.ts");
/* harmony import */ var _core_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/helpers/must-match.validator */ "./src/app/core/helpers/must-match.validator.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _core_helpers_app_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/helpers/app.helper */ "./src/app/core/helpers/app.helper.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");


















var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(translate, router, formBuilder, modalService, toastr, departmentService, userService, helperService, datepipe, translationService) {
        this.translate = translate;
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toastr = toastr;
        this.departmentService = departmentService;
        this.userService = userService;
        this.helperService = helperService;
        this.datepipe = datepipe;
        this.translationService = translationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].apiUrl;
        this.users = [];
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_16__["UserAvatars"];
        this.isFormSubmitted = false;
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_16__["datepickerConfig"];
        this.isPageLoaded = false;
        this.isPermissionRequired = false;
        this.isProfileLoaded = true;
        this.isProfileUploded = false;
        this.datepickerConfigMonth = {
            dateInputFormat: 'YYYY-MM',
            containerClass: 'theme-red',
            minMode: 'month'
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        this.getDepartments();
        this.getCountries();
        this.getLanguages();
        this.getUserGeneratedId();
        this.getUsers();
        this.loadForms();
    };
    UserCreateComponent.prototype.loadForms = function () {
        var that = this;
        this.createUserForm = this.formBuilder.group({
            user_generated_id: ['USR0001', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emp_id: [''],
            employment_id: [''],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            dependents: [0,],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [''],
            password_confirmation: [''],
            skype: [''],
            country: [null],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_core_helpers_app_helper__WEBPACK_IMPORTED_MODULE_15__["RegExpEnum"].phone_regular_expression)],
            language: ['en'],
            primary_manager: [null],
            secondary_manager: [null],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_core_helpers_app_helper__WEBPACK_IMPORTED_MODULE_15__["RegExpEnum"].phone_regular_expression)],
            address: [''],
            is_super_admin: [false],
            can_view_all_users: [false],
            init_paid_leave: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            init_paid_leave_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            avatar: [null],
            assign_permission: ['all'],
            department_roles: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            permission: [''],
            contract: this.formBuilder.group({
                start_date: [null],
                end_date: [null],
                salary: [null],
                basic: [null],
                performance: [null],
                lunch: [null],
                on_leave: [null]
            }),
        }, {
            validator: Object(_core_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_13__["MustMatch"])('password', 'password_confirmation')
        });
        this.isPageLoaded = true;
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    Object.defineProperty(UserCreateComponent.prototype, "userControl", {
        get: function () { return this.createUserForm.controls; },
        enumerable: true,
        configurable: true
    });
    UserCreateComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_14__(this.pdfDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_14__["createElement"]("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.createUserForm.patchValue({ avatar: reader_1.result });
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.createUserForm.patchValue({ avatar: null });
                    that.isProfileLoaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    UserCreateComponent.prototype.planstartDateChange = function (event) {
        this.createUserForm.patchValue({ planned_end_date: event });
    };
    UserCreateComponent.prototype.removeDropzoneImage = function () {
        this.isProfileUploded = true;
        this.isProfileLoaded = false;
        this.createUserForm.patchValue({ avatar: null });
    };
    UserCreateComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.createUserForm.patchValue({ avatar: this.selected });
    };
    UserCreateComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    UserCreateComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getDepartmentRoles()
            .subscribe(function (data) {
            _this_1.departmentsRoles = data;
        });
    };
    UserCreateComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    UserCreateComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    UserCreateComponent.prototype.getUserGeneratedId = function () {
        var _this_1 = this;
        this.userService.getUserGeneratedId().subscribe(function (data) {
            _this_1.createUserForm.patchValue({ user_generated_id: data });
        });
    };
    UserCreateComponent.prototype.getUsers = function () {
        var _this_1 = this;
        this.userService.getAll().subscribe(function (data) {
            _this_1.users = data;
        });
    };
    UserCreateComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    UserCreateComponent.prototype.changePermission = function (event) {
        var _this_1 = this;
        this.isPermissionRequired = false;
        if (event.target.value == 'cutomize') {
            this.modalRef = this.modalService.show(_components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_12__["AssignUserComponent"], this.modalConfigs);
            this.modalRef.content.event.subscribe(function (data) {
                _this_1.createUserForm.patchValue({ permission: data.permissions });
            });
        }
    };
    UserCreateComponent.prototype.changeSalary = function (event) {
        var totalSalary = 0;
        if (typeof this.createUserForm.value.contract.basic === 'string') {
            this.createUserForm.value.contract.basic = this.createUserForm.value.contract.basic.replace(/,/g, '');
        }
        totalSalary += Number(this.createUserForm.value.contract.basic);
        if (typeof this.createUserForm.value.contract.performance === 'string') {
            this.createUserForm.value.contract.performance = this.createUserForm.value.contract.performance.replace(/,/g, '');
        }
        totalSalary += Number(this.createUserForm.value.contract.performance);
        if (typeof this.createUserForm.value.contract.lunch === 'string') {
            this.createUserForm.value.contract.lunch = this.createUserForm.value.contract.lunch.replace(/,/g, '');
        }
        totalSalary += Number(this.createUserForm.value.contract.lunch);
        this.createUserForm.get('contract').get('salary').setValue(this.formatNumber(String(totalSalary)));
    };
    UserCreateComponent.prototype.formatNumber = function (value) {
        value = value.replace(/[^0-9]/g, '');
        value = value.replace(/^0+/, '');
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    UserCreateComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.createUserForm.value.contract.start_date = this.datepipe.transform(this.createUserForm.value.contract.start_date, 'yyyy-MM-dd');
        this.createUserForm.value.contract.end_date = this.datepipe.transform(this.createUserForm.value.contract.end_date, 'yyyy-MM-dd');
        this.createUserForm.value.department_roles = [];
        this.isFormSubmitted = true;
        if (this.userControl.assign_permission.value == "cutomize" && this.createUserForm.value.permission.length == 0) {
            this.isPermissionRequired = true;
            return false;
        }
        if (this.createUserForm.invalid) {
            return;
        }
        if (this.createUserForm.value.init_paid_leave_date) {
            this.createUserForm.value.init_paid_leave_date = this.datepipe.transform(this.createUserForm.value.init_paid_leave_date, 'yyyy-MM-dd');
        }
        if (this.selectedDepartmentRoles) {
            // for(let iRow in this.selectedDepartmentRoles) {
            // 	if(this.selectedDepartmentRoles[iRow].pivot) {
            // 		this.createUserForm.value.department_roles.push(this.selectedDepartmentRoles[iRow].pivot);
            // 	}
            // }
            this.createUserForm.value.department_roles.push(this.selectedDepartmentRoles.pivot);
        }
        if (this.createUserForm.value.contract.start_date != '' && this.createUserForm.value.contract.start_date != null && this.createUserForm.value.contract.end_date != '' && this.createUserForm.value.contract.end_date != null) {
            if (this.createUserForm.value.contract.start_date >= this.createUserForm.value.contract.end_date || this.createUserForm.value.contract.salary == "") {
                this.toastr.error(this.translate.instant('users.messages.contract_invalid'));
                return;
            }
            else {
                if (typeof this.createUserForm.value.contract.salary === 'string') {
                    this.createUserForm.value.contract.salary = this.createUserForm.value.contract.salary.replace(/,/g, '');
                }
                if (typeof this.createUserForm.value.contract.lunch === 'string') {
                    this.createUserForm.value.contract.lunch = this.createUserForm.value.contract.lunch.replace(/,/g, '');
                }
                if (typeof this.createUserForm.value.contract.performance === 'string') {
                    this.createUserForm.value.contract.performance = this.createUserForm.value.contract.performance.replace(/,/g, '');
                }
                if (typeof this.createUserForm.value.contract.basic === 'string') {
                    this.createUserForm.value.contract.basic = this.createUserForm.value.contract.basic.replace(/,/g, '');
                }
            }
        }
        this.createUserForm.value.emp_id = this.createUserForm.value.user_generated_id;
        // this.createUserForm.value.username = this.createUserForm.value.firstname + this.createUserForm.value.lastname;
        this.userService.create(this.createUserForm.value)
            .subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('users.messages.create'), _this_1.translate.instant('users.title'));
            _this_1.router.navigate(['users']);
        });
    };
    UserCreateComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_8__["DepartmentService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_11__["TranslationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfDropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserCreateComponent.prototype, "pdfDropzone", void 0);
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-create/user-create.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-create.component.scss */ "./src/app/modules/admin/user/pages/user-create/user-create.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_8__["DepartmentService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_11__["TranslationService"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/pages/user-edit/user-edit.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user-edit/user-edit.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9wYWdlcy91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/user/pages/user-edit/user-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user-edit/user-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_department_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/department.service */ "./src/app/core/services/department.service.ts");
/* harmony import */ var _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/helper.service */ "./src/app/core/services/helper.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
/* harmony import */ var _components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/assign-user/assign-user.component */ "./src/app/modules/admin/user/components/assign-user/assign-user.component.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_17__);


















var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(translate, ngxRolesService, route, router, formBuilder, modalService, toastr, authenticationService, departmentService, userService, helperService, datepipe, translationService) {
        var _this_1 = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.departmentService = departmentService;
        this.userService = userService;
        this.helperService = helperService;
        this.datepipe = datepipe;
        this.translationService = translationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__["datepickerConfig"];
        this.datepickerConfigMonth = {
            dateInputFormat: 'YYYY-MM',
            containerClass: 'theme-red',
            minMode: 'month'
        };
        this.users = [];
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__["UserAvatars"];
        this.isFormSubmitted = false;
        this.isPermissionRequired = false;
        this.departmentsRoles = [];
        this.departmentsObj = [];
        this.isPageLoaded = false;
        this.isProfileLoaded = true;
        this.isButtonShow = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this_1.loginUser = x; });
        this.route.paramMap.subscribe(function (params) {
            _this_1.getUserById(params.get('id'));
        });
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.getCountries();
        this.getLanguages();
        this.getUsers();
    };
    UserEditComponent.prototype.checkUserHavePermission = function (user) {
        var roleName = this.ngxRolesService.getRole('admin'), isEditable = false;
        if (roleName && roleName.name == 'admin' || this.loginUser.is_super_admin) {
            isEditable = true;
        }
        else if (!user.permission) {
            isEditable = false;
        }
        else {
            if (user.permission == 'all') {
                for (var iRow in this.assignUserPermissions) {
                    if (this.assignUserPermissions[iRow].id == this.loginUser.id) {
                        isEditable = true;
                    }
                }
            }
            else {
                if (typeof user.permission == "string") {
                    var loginUserPermissions = JSON.parse(user.permission);
                    if (loginUserPermissions[this.loginUser.id]) {
                        for (var iRow in loginUserPermissions[this.loginUser.id]) {
                            if (loginUserPermissions[this.loginUser.id][iRow] == "edit") {
                                isEditable = true;
                            }
                        }
                    }
                }
                else {
                    isEditable = false;
                }
            }
        }
        if (!isEditable) {
            this.router.navigate(['users']);
        }
    };
    UserEditComponent.prototype.getAssignUserPermissions = function () {
        var _this_1 = this;
        this.userService.getUserPermissions()
            .subscribe(function (data) {
            _this_1.assignUserPermissions = data;
            _this_1.checkUserHavePermission(_this_1.user);
        });
    };
    UserEditComponent.prototype.getUserById = function (userId) {
        var _this_1 = this;
        this.userService.getById(userId)
            .subscribe(function (data) {
            _this_1.user = data;
            _this_1.getAssignUserPermissions();
            _this_1.getDepartments();
        });
    };
    UserEditComponent.prototype.getDepartments = function () {
        var _this_1 = this;
        this.departmentService.getDepartmentRoles()
            .subscribe(function (data) {
            _this_1.getDepartmentsRoles(data);
        });
    };
    UserEditComponent.prototype.getLanguages = function () {
        var _this_1 = this;
        this.translationService.getAllActiveTranslations()
            .subscribe(function (data) {
            _this_1.languages = data;
        });
    };
    UserEditComponent.prototype.getUsers = function () {
        var _this_1 = this;
        this.userService.getAll().subscribe(function (data) {
            _this_1.users = data;
            // this.contract_list = data.contract_list;
        });
    };
    UserEditComponent.prototype.getCountries = function () {
        var _this_1 = this;
        this.helperService.getCountries()
            .subscribe(function (data) {
            _this_1.countries = data;
        });
    };
    UserEditComponent.prototype.getDepartmentsRoles = function (departments) {
        var that = this;
        for (var iRow in departments) {
            for (var jRow in departments[iRow].roles) {
                this.departmentsRoles.push({
                    id: departments[iRow].id + '_' + departments[iRow].roles[jRow].id,
                    role_id: departments[iRow].roles[jRow].id,
                    name: departments[iRow].roles[jRow].name,
                    department_id: departments[iRow].id,
                    department_name: departments[iRow].name
                });
            }
        }
        for (var iRow in this.user.departments) {
            for (var jRow in this.user.departments[iRow].roles) {
                this.departmentsObj.push(this.user.departments[iRow].id + '_' + this.user.departments[iRow].roles[jRow].id);
            }
        }
        this.loadUserForm();
        setTimeout(function () {
            that.loadDropzone();
        });
    };
    UserEditComponent.prototype.loadUserForm = function () {
        this.editUserForm = this.formBuilder.group({
            id: [this.user.id],
            user_generated_id: [this.user.user_generated_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emp_id: [this.user.emp_id],
            employment_id: [this.user.employment_id],
            username: [this.user.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]],
            firstname: [this.user.firstname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastname: [this.user.lastname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            dependents: [this.user.dependents],
            email: [this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            skype: [this.user.skype],
            country: [this.user.country],
            mobile: [this.user.mobile, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            language: [this.user.language],
            primary_manager: [this.user.primary_manager],
            secondary_manager: [this.user.secondary_manager],
            phone: [this.user.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:[+])?(\d[ -]?){1,15}$/)],
            address: [this.user.address],
            is_super_admin: [this.user.is_super_admin],
            init_paid_leave: [this.user.init_paid_leave, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            init_paid_leave_date: [this.user.init_paid_leave_date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            can_view_all_users: [this.user.can_view_all_users],
            avatar: [this.user.avatar],
            assign_permission: ['all'],
            department_roles: [this.departmentsObj[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            permission: [''],
            contract: this.formBuilder.group({
                start_date: [this.user.contract.start_date],
                end_date: [this.user.contract.end_date],
                salary: [this.user.contract.salary],
                basic: [this.user.contract.basic],
                performance: [this.user.contract.performance],
                lunch: [this.user.contract.lunch],
                // on_leave: [this.user.contract.on_leave],
                id: [this.user.contract.id]
            }),
        });
        if (this.user.permission !== 'all') {
            this.isButtonShow = true;
            this.editUserForm.patchValue({ assign_permission: 'cutomize' });
            this.user.permission = JSON.parse(this.user.permission);
            this.editUserForm.patchValue({ permission: this.user.permission });
        }
        this.setAvatar(this.user.avatar);
        this.selectedDepartmentRoles = this.removeUnderscoreIds(this.departmentsObj);
        this.isPageLoaded = true;
    };
    Object.defineProperty(UserEditComponent.prototype, "userControl", {
        get: function () { return this.editUserForm.controls; },
        enumerable: true,
        configurable: true
    });
    UserEditComponent.prototype.openAssignUserModal = function ($event) {
        var _this_1 = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                assignPermissions: this.user.permission
            }
        };
        this.modalRef = this.modalService.show(_components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_14__["AssignUserComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this_1.editUserForm.patchValue({ permission: data.permissions });
        });
        return false;
    };
    UserEditComponent.prototype.loadDropzone = function () {
        var that = this;
        new dropzone__WEBPACK_IMPORTED_MODULE_17__(this.pdfDropzone.nativeElement, {
            url: 'https://httpbin.org/post',
            maxFiles: 1,
            clickable: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            init: function () {
                this.on('addedfile', function (file) {
                    var removeButton = dropzone__WEBPACK_IMPORTED_MODULE_17__["createElement"]("<button class=\'btn btn-sm btn-block\'>" + that.translate.instant('common.remove_file') + "</button>");
                    var _this = this;
                    removeButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        _this.removeFile(file);
                    });
                    file.previewElement.appendChild(removeButton);
                    if (file) {
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            that.editUserForm.patchValue({ avatar: reader_1.result });
                            that.isProfileLoaded = false;
                        };
                        reader_1.readAsDataURL(file);
                    }
                });
                this.on('removedfile', function (file) {
                    that.editUserForm.patchValue({ avatar: null });
                    that.isProfileLoaded = false;
                });
                this.on('error', function (file, message) {
                    if (file) {
                        that.toastr.error(message);
                    }
                });
            }
        });
    };
    UserEditComponent.prototype.removeDropzoneImage = function () {
        this.isProfileLoaded = false;
        this.editUserForm.patchValue({ avatar: null });
    };
    UserEditComponent.prototype.setAvatar = function (avatar) {
        if (avatar === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = avatar;
        }
        this.editUserForm.patchValue({ avatar: this.selected });
    };
    UserEditComponent.prototype.isActive = function (avatar) {
        return this.selected === avatar;
    };
    ;
    UserEditComponent.prototype.changePermission = function (event) {
        this.isPermissionRequired = false;
        if (event.target.value == 'cutomize') {
            this.user.permission = [];
        }
    };
    UserEditComponent.prototype.departmentRolesChange = function (event) {
        this.selectedDepartmentRoles = event;
    };
    UserEditComponent.prototype.removeUnderscoreIds = function (ids) {
        var idsObj = [];
        for (var iRow in ids) {
            var splitIds = ids[iRow].split("_");
            idsObj.push({
                department_id: splitIds[0],
                role_id: splitIds[1],
            });
        }
        return idsObj;
    };
    UserEditComponent.prototype.changeSalary = function (event) {
        var totalSalary = 0;
        if (typeof this.editUserForm.value.contract.basic === 'string') {
            this.editUserForm.value.contract.basic = this.editUserForm.value.contract.basic.replace(/,/g, '');
        }
        totalSalary += Number(this.editUserForm.value.contract.basic);
        if (typeof this.editUserForm.value.contract.performance === 'string') {
            this.editUserForm.value.contract.performance = this.editUserForm.value.contract.performance.replace(/,/g, '');
        }
        totalSalary += Number(this.editUserForm.value.contract.performance);
        if (typeof this.editUserForm.value.contract.lunch === 'string') {
            this.editUserForm.value.contract.lunch = this.editUserForm.value.contract.lunch.replace(/,/g, '');
        }
        totalSalary += Number(this.editUserForm.value.contract.lunch);
        this.editUserForm.get('contract').get('salary').setValue(this.formatNumber(String(totalSalary)));
    };
    UserEditComponent.prototype.formatNumber = function (value) {
        value = value.replace(/[^0-9]/g, '');
        value = value.replace(/^0+/, '');
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this_1 = this;
        this.isFormSubmitted = true;
        if (this.editUserForm.invalid) {
            return;
        }
        if (this.userControl.assign_permission.value == "cutomize" && this.editUserForm.value.permission.length == 0) {
            this.isPermissionRequired = true;
            return false;
        }
        if (this.editUserForm.value.init_paid_leave_date) {
            this.editUserForm.value.init_paid_leave_date = this.datepipe.transform(this.editUserForm.value.init_paid_leave_date, 'yyyy-MM-dd');
        }
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // this.router.navigate(['users']);
        // return;
        // this.editUserForm.value.department_roles.push(this.selectedDepartmentRoles.pivot);
        if (this.selectedDepartmentRoles) {
            if (this.selectedDepartmentRoles.department_id) {
                this.editUserForm.value.department_roles = [{ department_id: this.selectedDepartmentRoles.department_id, role_id: this.selectedDepartmentRoles.role_id }];
            }
            else {
                this.editUserForm.value.department_roles = this.selectedDepartmentRoles;
            }
        }
        else {
            this.editUserForm.value.department_roles = undefined;
        }
        if (this.editUserForm.value.contract.start_date != '' && this.editUserForm.value.contract.start_date != null && this.editUserForm.value.contract.end_date != '' && this.editUserForm.value.contract.end_date != null) {
            this.editUserForm.value.contract.start_date = this.datepipe.transform(this.editUserForm.value.contract.start_date, 'yyyy-MM-dd');
            this.editUserForm.value.contract.end_date = this.datepipe.transform(this.editUserForm.value.contract.end_date, 'yyyy-MM-dd');
            if (this.editUserForm.value.contract.start_date >= this.editUserForm.value.contract.end_date || this.editUserForm.value.contract.salary == "") {
                this.toastr.error(this.translate.instant('users.messages.contract_invalid'));
                return;
            }
            else {
                if (typeof this.editUserForm.value.contract.salary === 'string') {
                    this.editUserForm.value.contract.salary = this.editUserForm.value.contract.salary.replace(/,/g, '');
                }
                if (typeof this.editUserForm.value.contract.lunch === 'string') {
                    this.editUserForm.value.contract.lunch = this.editUserForm.value.contract.lunch.replace(/,/g, '');
                }
                if (typeof this.editUserForm.value.contract.performance === 'string') {
                    this.editUserForm.value.contract.performance = this.editUserForm.value.contract.performance.replace(/,/g, '');
                }
                if (typeof this.editUserForm.value.contract.basic === 'string') {
                    this.editUserForm.value.contract.basic = this.editUserForm.value.contract.basic.replace(/,/g, '');
                }
            }
        }
        this.editUserForm.value.UserAvatars = this.avatars;
        this.userService.update(this.editUserForm.value).subscribe(function (data) {
            _this_1.toastr.success(_this_1.translate.instant('users.messages.update'), _this_1.translate.instant('users.title'));
            _this_1.router.navigate(['users']);
        });
    };
    UserEditComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_department_service__WEBPACK_IMPORTED_MODULE_10__["DepartmentService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_services_translation_service__WEBPACK_IMPORTED_MODULE_13__["TranslationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfDropzone', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserEditComponent.prototype, "pdfDropzone", void 0);
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user-edit/user-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/modules/admin/user/pages/user-edit/user-edit.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_department_service__WEBPACK_IMPORTED_MODULE_10__["DepartmentService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _core_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_13__["TranslationService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/pages/user/user.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user/user.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hide_empty_message ::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL3BhZ2VzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi91c2VyL3BhZ2VzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXNlci9wYWdlcy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZV9lbXB0eV9tZXNzYWdlIDo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59IiwiLmhpZGVfZW1wdHlfbWVzc2FnZSA6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin/user/pages/user/user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/user/pages/user/user.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_import_user_import_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/import-user/import-user.component */ "./src/app/modules/admin/user/components/import-user/import-user.component.ts");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_18__);



















var UserComponent = /** @class */ (function () {
    function UserComponent(translate, ngxPermissionsService, ngxRolesService, router, route, http, exportAsService, modalService, toastr, authenticationService, userService) {
        var _this = this;
        this.translate = translate;
        this.ngxPermissionsService = ngxPermissionsService;
        this.ngxRolesService = ngxRolesService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.exportAsService = exportAsService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.dtOptions = {};
        this.users = [];
        this.departments = [];
        this.departments_roles = [];
        this.avatars = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_15__["UserAvatars"];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'users_table',
        };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.ngxPermissionsService.permissions$.subscribe(function (permissions) {
            _this.permissions = permissions;
        });
        this.getAssignUserPermissions();
    }
    UserComponent.prototype.ngOnInit = function () {
        this.loadUserDatatable();
    };
    UserComponent.prototype.loadUserDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            processing: true,
            order: [1, 'asc'],
            dom: '<"html5buttons"B>ltfrtip',
            columns: [
                {
                    'sortable': false,
                    'width': "1%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
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
                    'sortable': false,
                    'target': [5]
                },
                {
                    'sortable': false,
                    'target': [6]
                },
                {
                    'sortable': false,
                    'target': [7]
                },
                {
                    'sortable': false,
                    'width': "5%",
                    'target': [8]
                }
            ],
            buttons: [
                // {
                // 	extend: 'csv',
                // 	title: this.translate.instant('users.title'),
                // 	className: "btn btn-datatable-gredient",
                // 	action: function (e, dt, node, config) {
                // 		that.exportFiles('csv')
                // 	},
                //     init: function(api, node, config) {
                //         $(node).attr('title', 'Export CSV');
                //     }
                // },
                {
                    extend: 'excel',
                    title: this.translate.instant('users.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    },
                    init: function (api, node, config) {
                        $(node).attr('title', 'Export Excel');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('users.title'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    },
                    init: function (api, node, config) {
                        $(node).attr('title', 'Export PDF');
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
                _this.http
                    .post(_this.apiUrl + '/api/all-users', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    if (resp) {
                        _this.users = resp.data;
                        _this.loadUserDepartments();
                    }
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    UserComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.users.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    UserComponent.prototype.exportTableWithoutLastRow = function (type) {
        var originalTable = document.getElementById('users_table');
        if (originalTable) {
            // Tạo bản sao của bảng mà không có hàng cuối
            var clonedTable_1 = originalTable.cloneNode(true);
            var rows = clonedTable_1.getElementsByTagName('tr');
            if (rows.length > 1) {
                rows[rows.length - 1].remove(); // Xóa hàng cuối của bản sao
            }
            // Thêm bản sao vào DOM tạm thời
            document.body.appendChild(clonedTable_1);
            clonedTable_1.id = 'clonedTableForExport';
            // Cấu hình export cho bản sao
            var exportAsConfig = {
                type: type,
                elementIdOrContent: 'clonedTableForExport',
            };
            // Thực hiện export
            this.exportAsService.save(exportAsConfig, this.translate.instant('users.title')).subscribe(function () {
                // Xóa bản sao khỏi DOM sau khi export
                document.body.removeChild(clonedTable_1);
            });
        }
    };
    UserComponent.prototype.exportFiles = function (type) {
        this.exportTableWithoutLastRow(type);
        // this.exportAsConfig.type = type;
        // this.exportAsService.save(this.exportAsConfig, this.translate.instant('users.title')).subscribe(() => {});
    };
    UserComponent.prototype.loadUserDepartments = function () {
        for (var iRow in this.users) {
            this.checkUserHavePermission(iRow, this.users[iRow].permission);
            for (var jRow in this.users[iRow].roles) {
                for (var kRow in this.users[iRow].roles[jRow].user_departments) {
                    if ((this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id == this.users[iRow].roles[jRow].id) && (this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id == this.users[iRow].id)) {
                        if (!this.departments_roles[this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.department_id]) {
                            this.departments_roles[this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id + '_' + this.users[iRow].roles[jRow].user_departments[kRow].pivot.department_id] = [];
                            if (!this.departments[this.users[iRow].id]) {
                                this.departments[this.users[iRow].id] = [];
                            }
                            this.departments[this.users[iRow].id].push({
                                user_id: this.users[iRow].roles[jRow].user_departments[kRow].pivot.user_id,
                                role_id: this.users[iRow].roles[jRow].user_departments[kRow].pivot.role_id,
                                department_id: this.users[iRow].roles[jRow].user_departments[kRow].pivot.department_id,
                                role_name: this.users[iRow].roles[jRow].name,
                                department_name: this.users[iRow].roles[jRow].user_departments[kRow].name
                            });
                        }
                    }
                }
            }
        }
    };
    UserComponent.prototype.getAssignUserPermissions = function () {
        var _this = this;
        this.userService.getUserPermissions()
            .subscribe(function (data) {
            _this.assignUserPermissions = data;
        });
    };
    UserComponent.prototype.setActiveDeactiveUser = function (value, user) {
        // --
        // this.toastr.error(this.translate.instant('common.not_allowed'));
        // return;
        var _this = this;
        user.is_active = value;
        this.userService.setActiveDeactiveUser(user)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.status'), _this.translate.instant('users.title'));
            _this.rerender();
        }, function (error) {
            _this.rerender();
        });
    };
    UserComponent.prototype.sendInviteUserMail = function (id) {
        var _this = this;
        this.userService.sendInviteUserMail(id)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.invite'), _this.translate.instant('users.title'));
            _this.rerender();
        });
    };
    UserComponent.prototype.checkUserHavePermission = function (iRow, userPermissions) {
        var roleName = this.ngxRolesService.getRole('admin');
        var allowedPermission = {
            isEditable: false,
            isDeletable: false
        };
        if (roleName && roleName.name == 'admin' || this.loginUser.is_super_admin) {
            allowedPermission = {
                isEditable: true,
                isDeletable: true
            };
        }
        if (!userPermissions) {
            allowedPermission = {
                isEditable: false,
                isDeletable: false
            };
        }
        else {
            if (userPermissions == 'all') {
                for (var iRow_1 in this.assignUserPermissions) {
                    if (this.assignUserPermissions[iRow_1].id == this.loginUser.id) {
                        allowedPermission = {
                            isEditable: true,
                            isDeletable: true
                        };
                    }
                }
            }
            else {
                var loginUserPermissions = JSON.parse(userPermissions);
                if (loginUserPermissions[this.loginUser.id]) {
                    for (var iRow_2 in loginUserPermissions[this.loginUser.id]) {
                        if (loginUserPermissions[this.loginUser.id][iRow_2] == "edit") {
                            allowedPermission.isEditable = true;
                        }
                        if (loginUserPermissions[this.loginUser.id][iRow_2] == "delete") {
                            allowedPermission.isDeletable = true;
                        }
                    }
                }
            }
        }
        if (!this.permissions.users_edit) {
            allowedPermission.isEditable = false;
        }
        if (!this.permissions.users_delete) {
            allowedPermission.isDeletable = false;
        }
        this.users[iRow].department_role_perm = allowedPermission;
    };
    UserComponent.prototype.openUserImportModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_components_import_user_import_user_component__WEBPACK_IMPORTED_MODULE_14__["ImportUserComponent"], this.modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.import'), _this.translate.instant('users.title'));
            _this.rerender();
        });
    };
    UserComponent.prototype.userDelete = function (userId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text2'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                // --
                // this.toastr.error(this.translate.instant('common.not_allowed'));
                // return;
                _this.userService.delete(userId, { 'UserAvatars': _this.avatars }).subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('users.messages.delete'), _this.translate.instant('users.title'));
                    _this.rerender();
                });
            }
        });
    };
    UserComponent.prototype.saveUserDetail = function (index, name, value) {
        var _this = this;
        this.users[index][name] = value;
        this.users[index]["type"] = "list";
        this.userService.update(this.users[index])
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('users.messages.update'), _this.translate.instant('users.title'));
            _this.rerender();
        });
    };
    UserComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxRolesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], UserComponent.prototype, "dtElement", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/user/pages/user/user.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/modules/admin/user/pages/user/user.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxRolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/user-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/admin/user/user-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/modules/admin/user/pages/user/user.component.ts");
/* harmony import */ var _pages_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user-create/user-create.component */ "./src/app/modules/admin/user/pages/user-create/user-create.component.ts");
/* harmony import */ var _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user-edit/user-edit.component */ "./src/app/modules/admin/user/pages/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user-detail/user-detail.component */ "./src/app/modules/admin/user/pages/user-detail/user-detail.component.ts");








var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'users_view']
                    }
                },
                component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
            },
            {
                path: 'create',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: "common.create",
                        icon: "fa fa-user-circle",
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'users_create']
                    }
                },
                component: _pages_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
            },
            {
                path: 'edit/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: "common.edit",
                        icon: "fa fa-user-circle",
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'users_edit']
                    }
                },
                component: _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"]
            },
            {
                path: 'profile/:id',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
                data: {
                    breadcrumbs: {
                        text: "common.profile",
                        icon: "fa fa-user-circle",
                        hasParams: true,
                        show: true,
                        isHome: true
                    }
                },
                component: _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailComponent"]
            },
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/user/user.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/admin/user/user.module.ts ***!
  \***************************************************/
/*! exports provided: UserModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/dist/index.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular_checklist__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/modules/admin/user/user-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/modules/admin/user/pages/user/user.component.ts");
/* harmony import */ var _pages_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/user-create/user-create.component */ "./src/app/modules/admin/user/pages/user-create/user-create.component.ts");
/* harmony import */ var _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/user-edit/user-edit.component */ "./src/app/modules/admin/user/pages/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/user-detail/user-detail.component */ "./src/app/modules/admin/user/pages/user-detail/user-detail.component.ts");
/* harmony import */ var _components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/assign-user/assign-user.component */ "./src/app/modules/admin/user/components/assign-user/assign-user.component.ts");
/* harmony import */ var _components_user_activities_user_activities_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user-activities/user-activities.component */ "./src/app/modules/admin/user/components/user-activities/user-activities.component.ts");
/* harmony import */ var _components_user_avatar_modal_user_avatar_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/user-avatar-modal/user-avatar-modal.component */ "./src/app/modules/admin/user/components/user-avatar-modal/user-avatar-modal.component.ts");
/* harmony import */ var _components_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/change-email-modal/change-email-modal.component */ "./src/app/modules/admin/user/components/change-email-modal/change-email-modal.component.ts");
/* harmony import */ var _components_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/change-password-modal/change-password-modal.component */ "./src/app/modules/admin/user/components/change-password-modal/change-password-modal.component.ts");
/* harmony import */ var _components_user_detail_update_user_detail_update_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/user-detail-update/user-detail-update.component */ "./src/app/modules/admin/user/components/user-detail-update/user-detail-update.component.ts");
/* harmony import */ var _components_user_defects_user_defects_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/user-defects/user-defects.component */ "./src/app/modules/admin/user/components/user-defects/user-defects.component.ts");
/* harmony import */ var _components_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/user-projects/user-projects.component */ "./src/app/modules/admin/user/components/user-projects/user-projects.component.ts");
/* harmony import */ var _components_user_tasks_user_tasks_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/user-tasks/user-tasks.component */ "./src/app/modules/admin/user/components/user-tasks/user-tasks.component.ts");
/* harmony import */ var _components_import_user_import_user_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/import-user/import-user.component */ "./src/app/modules/admin/user/components/import-user/import-user.component.ts");
/* harmony import */ var _components_user_incidents_user_incidents_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/user-incidents/user-incidents.component */ "./src/app/modules/admin/user/components/user-incidents/user-incidents.component.ts");











;





















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
                _pages_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_18__["UserCreateComponent"],
                _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_19__["UserEditComponent"],
                _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_20__["UserDetailComponent"],
                _components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_21__["AssignUserComponent"],
                _components_user_activities_user_activities_component__WEBPACK_IMPORTED_MODULE_22__["UserActivitiesComponent"],
                _components_user_avatar_modal_user_avatar_modal_component__WEBPACK_IMPORTED_MODULE_23__["UserAvatarModalComponent"],
                _components_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_24__["ChangeEmailModalComponent"],
                _components_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_25__["ChangePasswordModalComponent"],
                _components_user_detail_update_user_detail_update_component__WEBPACK_IMPORTED_MODULE_26__["UserDetailUpdateComponent"],
                _components_user_defects_user_defects_component__WEBPACK_IMPORTED_MODULE_27__["UserDefectsComponent"],
                _components_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_28__["UserProjectsComponent"],
                _components_user_tasks_user_tasks_component__WEBPACK_IMPORTED_MODULE_29__["UserTasksComponent"],
                _components_import_user_import_user_component__WEBPACK_IMPORTED_MODULE_30__["ImportUserComponent"],
                _components_user_incidents_user_incidents_component__WEBPACK_IMPORTED_MODULE_31__["UserIncidentsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                angular_checklist__WEBPACK_IMPORTED_MODULE_13__["ChecklistModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_15__["UserRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarModule"].forRoot(),
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_8__["UiSwitchModule"].forRoot({
                    checkedLabel: 'Active',
                    uncheckedLabel: 'Inactive',
                    color: 'rgb(0, 189, 99)',
                    switchColor: '#FFFFFF',
                    defaultBgColor: '#c6c6c6',
                    defaultBoColor: '#c39ef8'
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]
            ],
            entryComponents: [
                _components_assign_user_assign_user_component__WEBPACK_IMPORTED_MODULE_21__["AssignUserComponent"],
                _components_user_avatar_modal_user_avatar_modal_component__WEBPACK_IMPORTED_MODULE_23__["UserAvatarModalComponent"],
                _components_change_email_modal_change_email_modal_component__WEBPACK_IMPORTED_MODULE_24__["ChangeEmailModalComponent"],
                _components_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_25__["ChangePasswordModalComponent"],
                _components_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_28__["UserProjectsComponent"],
                _components_import_user_import_user_component__WEBPACK_IMPORTED_MODULE_30__["ImportUserComponent"]
            ],
        })
    ], UserModule);
    return UserModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-admin-user-user-module.js.map