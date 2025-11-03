(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-reports-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <div class=\"card-header pl-0 pr-0 border-bottom\">\n        <h4 class=\"main-title mt-2\"><span>Work allowance</span></h4>\n        <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded\">\n            <a class=\"btn btn-create mb-0\" style=\"background: #34a853 !important; color: #fff !important;\"  (click)=\"exportFiles()\">Export</a>\n            <div class=\"btn calender-day\" (click)=\"preMonth()\">\n                <i class=\"calendar-icon fa fa-chevron-left\"></i>\n            </div>\n            <div class=\"ml-2\">\n                <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeMonth($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n            </div>\n            <div class=\"mr-2\">\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"month\" readonly />\n            </div>\n            <div class=\"btn calender-day\" (click)=\"nextMonth()\"  *ngIf=\"month <= currentMonth\">\n                <i class=\"calendar-icon fa fa-chevron-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>{{'leaves.create.fields.user' | translate}}</th>\n                            <th>{{'leaves.create.fields.reason' | translate}}</th>\n                            <th>{{'leaves.columns.request_date' | translate}}</th>\n                            <th>{{'leaves.columns.leave_date' | translate}}</th>\n                            <th>Value(VNĐ)</th>\n                            <th>Approve1</th>                                        \n                            <th>Approve2</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"leavesData?.length != 0\">\n                        <tr *ngFor=\"let leave of leavesData; index as i\">\n                            <td class=\"text-center\">{{ i + 1 }}</td>\n                            <td>{{leave.firstname}} {{leave.lastname}}</td>\n                            <td><div [innerHTML]=\"leave.reason\"></div></td>\n                            <td>{{ leave.created_at | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                            <td>{{ leave.leave_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                            <td>{{ leave.total | number:'1.0-0'}}</td>\n                            <td class=\"people-lists\">\n                                <a [routerLink]=\"['/users/profile', leave.approved1]\" class=\"btn btn-profile-info rounded-circle\" placement=\"top\" tooltip=\"{{leave.approved1_firstname}} {{leave.approved1_lastname}}\" *ngIf=\"leave.approved1\">\n                                    <img *ngIf=\"leave.approved1_avatar\" src=\"{{apiUrl}}/uploads/profile/{{leave.approved1_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    <img *ngIf=\"!leave.approved1_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                </a>\n                            </td>\n                            <td class=\"people-lists\">\n                                <a [routerLink]=\"['/users/profile', leave.approved2]\" class=\"btn btn-profile-info rounded-circle\" placement=\"top\" tooltip=\"{{leave.approved2_firstname}} {{leave.approved2_lastname}}\" *ngIf=\"leave.approved2\">\n                                    <img *ngIf=\"leave.approved2_avatar\" src=\"{{apiUrl}}/uploads/profile/{{leave.approved2_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    <img *ngIf=\"!leave.approved2_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                </a>\n                            </td>\n                        </tr>\n                        <tr style=\"background-color: rgba(160, 136, 0, 0.11);\">\n                            <td colspan=\"5\"><b>Total:</b></td>\n                            <td colspan=\"3\"><b>{{totalData | number:'1.0-0'}}</b></td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>Full Name</th>\n                            <th>Date</th>\n                            <th>Description</th>\n                            <th>Value(VNĐ)</th>\n                        </tr>\n                    </thead>\n                    <tbody >\n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td colspan=\"3\"> Total </td>\n                            <td>2.250.000</td>\n                        </tr> \n                    </tbody>\n                </table> -->\n                <!-- <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"export_table\" style=\"display: none;\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>Full Name</th>\n                            <th>Total</th>\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                <div *ngIf=\"day.stt==0\">CN-{{day.day}}</div>\n                                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}-{{day.day}}</div>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td rowspan=\"2\">{{user.firstname}} {{user.lastname}}</td>\n                                <td>{{ getTimesheetTotal(user) }}</td>\n                                <ng-container *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <td [innerHTML]=\"getTimesheetByDay(user, j)\"></td>\n                                </ng-container>\n                            </tr>\n                            <tr style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\">\n                                <td>{{user.timesheet_ot_total}}</td>\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet_ot[j] && user.timesheet_ot[j].value && user.timesheet_ot[j].value > 0\">{{user.timesheet_ot[j].value | number:'1.0-1'}}</div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table> -->\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <div class=\"card-header pl-0 pr-0 border-bottom\">\n        <h4 class=\"main-title mt-2\"><span>Standard working hours per month: {{workingInMonth * 8.5}}h</span></h4>\n        <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded\">\n            <a class=\"btn btn-create mb-0\" style=\"background: #34a853 !important; color: #fff !important;\" (click)=\"exportFiles()\">Export</a>\n            <div class=\"btn calender-day\" (click)=\"preMonth()\">\n                <i class=\"calendar-icon fa fa-chevron-left\"></i>\n            </div>\n            <div class=\"ml-2\">\n                <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeMonth($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n            </div>\n            <div class=\"mr-2\">\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"month\" readonly />\n            </div>\n            <div class=\"btn calender-day\" (click)=\"nextMonth()\"  *ngIf=\"month <= currentMonth\">\n                <i class=\"calendar-icon fa fa-chevron-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th style=\"min-width: 250px;\">Full Name</th>\n                            <th>Total</th>\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                <div *ngIf=\"day.stt==0\">CN<br>{{day.day}}</div>\n                                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}<br>{{day.day}}</div>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td rowspan=\"2\">{{user.lastname}} {{user.firstname}}</td>\n\n                                <td><div class=\"cell\">{{ getTimesheetTotal(user) }}</div></td>\n                                <ng-container *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <td [innerHTML]=\"getTimesheetByDay(user, j)\"></td>\n                                </ng-container>\n                            </tr>\n                            <tr style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\">\n                                <td><div class=\"cell\">{{user.timesheet_ot_total}}</div></td>\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet_ot[j] && user.timesheet_ot[j].value && user.timesheet_ot[j].value > 0\">{{user.timesheet_ot[j].value | number:'1.0-1'}}</div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table>\n                <!-- <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"export_table\" style=\"display: none;\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>Full Name</th>\n                            <th>Total</th>\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                <div *ngIf=\"day.stt==0\">CN-{{day.day}}</div>\n                                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}-{{day.day}}</div>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td rowspan=\"2\">{{user.firstname}} {{user.lastname}}</td>\n                                <td>{{ getTimesheetTotal(user) }}</td>\n                                <ng-container *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <td [innerHTML]=\"getTimesheetByDay(user, j)\"></td>\n                                </ng-container>\n                            </tr>\n                            <tr style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\">\n                                <td>{{user.timesheet_ot_total}}</td>\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet_ot[j] && user.timesheet_ot[j].value && user.timesheet_ot[j].value > 0\">{{user.timesheet_ot[j].value | number:'1.0-1'}}</div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table> -->\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <h4 class=\"main-title mt-2\"><span>{{'reports.headings.incident_report' | translate}}</span></h4>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"incidents_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>{{'incidents.columns.id' | translate}}</th>\n                            <th>{{'incidents.columns.incident_name' | translate}}</th>\n                            <th>{{'incidents.columns.start_date' | translate}}</th>\n                            <th>{{'incidents.columns.end_date' | translate}}</th>\n                            <th>{{'incidents.columns.actual_hours' | translate}}</th>\n                            <th>{{'incidents.columns.creator' | translate}}</th>\n                            <th>{{'incidents.columns.assigned' | translate}}</th>\n                            <th>{{'incidents.columns.type' | translate}}</th>\n                            <th>{{'incidents.columns.priority' | translate}}</th>\n                            <th>{{'incidents.columns.status' | translate}}</th>\n                            <th>{{'incidents.columns.project' | translate}}</th>\n                            <th>{{'incidents.columns.project_version' | translate}}</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"incidents?.length != 0\">\n                        <tr *ngFor=\"let incident of incidents\">\n                            <td>{{incident.generated_id}}</td>\n                            <td>{{incident.incident_name}}</td>\n                            <td>{{incident.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                            <td>{{incident.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                            <td>\n                                <ng-container *ngIf=\"incident.actual_hours else elseBlock2;\">{{incident.actual_hours}}</ng-container>\n                                <ng-template #elseBlock2>-</ng-template>\n                            </td>\n                            <td class=\"people-lists\">\n                                <a [routerLink]=\"['/users/profile', incident.create_user_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{incident.created_firstname}} {{incident.created_lastname}}\">\n                                    <img *ngIf=\"incident.created_avatar\" src=\"{{apiUrl}}/uploads/profile/{{incident.created_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    <img *ngIf=\"!incident.created_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                </a>\n                            </td>\n                            <td class=\"people-lists\">\n                                <ng-container *ngIf=\"incident.assign_to == 'Unassign' || incident.assign_to == '' || incident.assign_to == null; else elseBlock\">\n                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-container>\n                                <ng-template #elseBlock>\n                                    <a [routerLink]=\"['/users/profile', incident.assign_to]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{incident.assigned_firstname}} {{incident.assigned_lastname}}\">\n                                        <img *ngIf=\"incident.assigned_avatar\" src=\"{{apiUrl}}/uploads/profile/{{incident.assigned_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        <img *ngIf=\"!incident.assigned_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-template>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let type of ('incidents.incident_types' | translate)\">\n                                    <span class=\"badge badge-secondary\" *ngIf=\"type.id == incident.incident_type\">{{type.label}}</span>\n                                </ng-container>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let priority of ('incidents.priorities' | translate)\">\n                                    <span class=\"badge {{priority.class}}\" *ngIf=\"priority.id == incident.priority\">{{priority.label}}</span>\n                                </ng-container>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let status of ('incidents.status' | translate)\">\n                                    <span class=\"badge {{status.class}}\" *ngIf=\"status.id == incident.status\">{{status.label}}</span>\n                                </ng-container>\n                            </td>\n                            <td>{{incident.project_name}}</td>\n                            <td><span class=\"badge badge-secondary\">{{incident.project_version}}</span></td>\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.id' | translate}}\" name=\"incident_Id\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.incident_name' | translate}}\" name=\"incident_name\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.start_date' | translate}}\" name=\"start_date\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.end_date' | translate}}\" name=\"end_date\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.actual_hours' | translate}}\" name=\"actual_hours\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.creator' | translate}}\" name=\"created\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.assigned' | translate}}\" name=\"assigned\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.type' | translate}}\" name=\"incident_type\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.priority' | translate}}\" name=\"priority\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.status' | translate}}\" name=\"status\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.project' | translate}}\" name=\"project\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.project_version' | translate}}\" name=\"project_version\" />\n                            </th>\n                        </tr>\n                    </tfoot>\n                    <tfoot *ngIf=\"incidents?.length == 0\" class=\"tfoot_dt\">\n                        <tr>\n                            <td colspan=\"12\" class=\"text-center\">\n                                <img src=\"assets/img/norecord-img.png\" width=\"50\">\n                                <p class=\"mt-1\">{{'common.empty_message.incidents' | translate}}</p>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/payment-reports/payment-reports.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/payment-reports/payment-reports.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <div class=\"card-header pl-0 pr-0 border-bottom\">\n        <div class=\"btn-group mr-2 mb-2\">\n            <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': FilterKey === 'success' }\" (click)=\"filterByStatus('success')\" btnRadio=\"success\" tabindex=\"0\" role=\"button\">Success</label>\n            <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': FilterKey === 'pending' }\" (click)=\"filterByStatus('pending')\" btnRadio=\"pending\" tabindex=\"0\" role=\"button\">Pending</label>\n            <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': FilterKey === 'overdue' }\" (click)=\"filterByStatus('overdue')\" btnRadio=\"overdue\" tabindex=\"0\" role=\"button\">Overdue</label>\n        </div>\n        <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded\">\n            <a class=\"btn btn-create mb-0\" style=\"background: #34a853 !important; color: #fff !important;\" (click)=\"exportFiles()\">Export</a>\n            <div class=\"btn calender-day\" (click)=\"preMonth()\" *ngIf=\"FilterKey != 'overdue'\">\n                <i class=\"calendar-icon fa fa-chevron-left\"></i>\n            </div>\n            <div class=\"ml-2\" *ngIf=\"FilterKey != 'overdue'\">\n                <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeMonth($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n            </div>\n            <div class=\"mr-2\" *ngIf=\"FilterKey != 'overdue'\">\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"month\" readonly />\n            </div>\n            <div class=\"btn calender-day\" (click)=\"nextMonth()\"  *ngIf=\"month <= currentMonth && FilterKey != 'overdue'\">\n                <i class=\"calendar-icon fa fa-chevron-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" >\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Project</th>\n                            <th>Amount</th>\n                            <th>Description</th>\n                            <th>Estimated date</th>\n                            <th>Payment date</th>\n                            <th>Status</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"payments?.length > 0\">\n                        <tr *ngFor=\"let item of payments; index as i\">\n                            <td class=\"text-center\">{{ i + 1 }}</td>\n                            <td>{{item.project_name}}</td>\n                            <td>{{item.price| number:'1.0-0'}}</td>\n                            <td>{{item.description}}</td>\n                            <td>{{item.due_date}}</td>\n                            <td>{{item.payment_date}}</td>\n                            <td class=\"status-dropdown\">\n                                <div class=\"budges-status\">\n                                    <span class=\"open\" *ngIf=\"item.status == 1 && FilterKey != 'overdue'\">Pending</span>\n                                    <span class=\"in_progress\" *ngIf=\"item.status == 1 && FilterKey == 'overdue'\">Overdue</span>\n                                    <span class=\"medium\" *ngIf=\"item.status == 2\">Success</span>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/project-reports/project-reports.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/project-reports/project-reports.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <h4 class=\"main-title mt-2\"><span>{{'reports.headings.project_report' | translate}}</span></h4>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"projects_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>{{'projects.columns.id' | translate}}</th>\n                            <th>{{'projects.columns.project_name' | translate}}</th>\n                            <th>{{'projects.columns.start' | translate}}</th>\n                            <th>{{'projects.columns.end' | translate}}</th>\n                            <th>Actual Hours</th>\n                            <th>{{'projects.columns.output_cost' | translate}}/{{'projects.columns.input_cost' | translate}}</th>\n                            <th>Work allowance</th>\n                            <th>Payment</th>\n                            <th>{{'projects.columns.creator' | translate}}</th>\n                            <th>{{'projects.columns.assigned_To' | translate}}</th>\n                            <th>{{'projects.columns.status' | translate}}</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"projects?.length != 0\">\n                        <ng-container *ngFor=\"let project of projects; index as i\">\n                        <tr>\n                            <td (click)=\"togglePayments(i)\" style=\"cursor:pointer;\">\n                                <ng-container  *ngIf=\"project.payments && project.payments.length > 0\">\n                                    <i class=\"fa\" [ngClass]=\"expandedProjectId === project.id ? 'fa-minus-circle' : 'fa-plus-circle'\"\n                                    style=\"cursor: pointer;\"\n                                    (click)=\"toggleExpand(project.id)\"></i>\n                                </ng-container>\n                                {{project.generated_id}}\n                            </td>\n                            <td>{{project.project_name}}</td>\n                            <td>{{project.start_date | date: 'yyyy-MM-dd' }}</td>\n                            <td>{{project.end_date | date: 'yyyy-MM-dd' }}</td>\n                            <td class=\"budges-status\"><span class=\"medium\">{{project.total_actual_hours | number:'1.0-0'}}</span></td>\n                            <td class=\"budges-status\">\n                                <div class=\"budges-status\">\n                                    <span class=\"medium\" *ngIf=\"project.price_rate >= project.cost\">{{project.cost | number:'1.0-0'}}/{{project.price_rate | number:'1.0-0'}}</span>\n                                    <span class=\"urgent\" *ngIf=\"project.price_rate < project.cost\">{{project.cost | number:'1.0-0'}}/{{project.price_rate | number:'1.0-0'}}</span>\n                                </div>\n                            </td>\n                            <td>\n                                {{project.workallowance | number:'1.0-0'}}\n                            </td>\n                            <td class=\"budges-status\">\n                                <div class=\"budges-status\">\n                                    <span class=\"medium\" *ngIf=\"project.payment >= project.paymentTotal\">{{project.payment | number:'1.0-0'}}/{{project.paymentTotal | number:'1.0-0'}}</span>\n                                    <span class=\"urgent\" *ngIf=\"project.payment < project.paymentTotal\">{{project.payment | number:'1.0-0'}}/{{project.paymentTotal | number:'1.0-0'}}</span>\n                                </div>\n                            </td>\n                            <td class=\"people-lists\">\n                                <a [routerLink]=\"['/users/profile', project.created_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{project.created_firstname}} {{project.created_lastname}}\">\n                                    <img *ngIf=\"project.created_avatar\" src=\"{{apiUrl}}/uploads/profile/{{project.created_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    <img *ngIf=\"!project.created_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                </a>\n                            </td>\n                            <td class=\"people-lists\">\n                                <ng-container *ngIf=\"project.assign_members == 'Unassign' || project.assign_members == '' || project.assign_members == null; else elseBlock1;\">\n                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle popover-item text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-container>\n                                <ng-template #elseBlock1>\n                                    <ng-container *ngFor=\"let user_id of project.assign_members | stringToArrayFilter index as i; odd as isOdd; even as isEven\">\n                                        <a *ngIf=\"userLists[user_id]\" [routerLink]=\"['/users/profile', user_id]\" tooltip=\"{{userLists[user_id].firstname}} {{userLists[user_id].lastname}}\" class=\"btn rounded-circle popover-item text-dark\" [ngClass]=\"{'btn-profile-info': isOdd, 'btn-profile-danger': isEven}\">\n                                            <img *ngIf=\"userLists[user_id].avatar\" src=\"{{apiUrl}}/uploads/profile/{{userLists[user_id].avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                            <img *ngIf=\"!userLists[user_id].avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        </a>\n                                    </ng-container>\n                                </ng-template>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let status of ('projects.status' | translate)\">\n                                    <span class=\"badge {{status.class}}\" *ngIf=\"status.id == project.status\">{{status.label}}</span>\n                                </ng-container>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"expandedRowIndex === i\">\n                            <td colspan=\"11\" style=\"background: #fafafa;\">\n                              <table class=\"table table-sm table-bordered mt-2 mb-2\">\n                                <thead>\n                                  <tr class=\"bg-light\">\n                                    <th style=\"width: 50px;\">#</th>\n                                    <th>Amount</th>\n                                    <th>Description</th>\n                                    <th>Estimated date</th>\n                                    <th>Payment date</th>\n                                    <th>Status</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr *ngFor=\"let payment of project.payments; index as t\">\n                                    <td>{{ t + 1 }}</td>\n                                    <td>{{ payment.description }}</td>\n                                    <td>{{ payment.price | number:'1.0-0'}}</td>\n                                    <td>{{ payment.due_date | date:'yyyy-MM-dd' }}</td>\n                                    <td>{{ payment.payment_date | date:'yyyy-MM-dd' }}</td>\n                                    <td>\n                                        <div class=\"budges-status\">\n                                            <span class=\"open\" *ngIf=\"payment.status == 1\">Pending</span>\n                                            <span class=\"medium\" *ngIf=\"payment.status == 2\">Success</span>\n                                        </div>\n                                    </td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </td>\n                          </tr>\n                    </ng-container>\n                    </tbody>\n                    <tfoot *ngIf=\"projects?.length == 0\" class=\"tfoot_dt\">\n                        <tr>\n                            <td colspan=\"11\" class=\"text-center\">\n                                <img src=\"assets/img/norecord-img.png\" width=\"50\">\n                                <p class=\"mt-1\">{{ 'common.empty_message.projects' | translate }}</p>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <div class=\"card-header pl-0 pr-0 border-bottom\">\n        <div class=\"btn-group mr-2 mb-2\">\n            <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': salaryFilterKey === 'salary' }\" (click)=\"filterByStatus('salary')\" btnRadio=\"salary\" tabindex=\"0\" role=\"button\">Salary</label>\n            <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': salaryFilterKey === 'timesheet' }\" (click)=\"filterByStatus('timesheet')\" btnRadio=\"timesheet\" tabindex=\"0\" role=\"button\">Timesheet</label>\n            <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': salaryFilterKey === 'log' }\" (click)=\"filterByStatus('log')\" btnRadio=\"timesheet\" tabindex=\"0\" role=\"button\">File Log</label>\n        </div>\n        <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded && salaryFilterKey != 'log'\">\n            <a class=\"btn btn-create mb-0\" style=\"background: #34a853 !important; color: #fff !important;\" (click)=\"exportFiles()\">Export</a>\n            <div class=\"btn calender-day\" (click)=\"preMonth()\">\n                <i class=\"calendar-icon fa fa-chevron-left\"></i>\n            </div>\n            <div class=\"ml-2\">\n                <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeMonth($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n            </div>\n            <div class=\"mr-2\">\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"month\" readonly />\n            </div>\n            <div class=\"btn calender-day\" (click)=\"nextMonth()\"  *ngIf=\"month <= currentMonth\">\n                <i class=\"calendar-icon fa fa-chevron-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-wrapper\">\n                <table class=\"table table-bordered table-hover b4-datatable scroll-table\" width=\"100%\" id=\"defects_table\" id=\"defects_table\" *ngIf=\"salaryFilterKey == 'salary'\">\n                    <thead>\n                        <tr style=\"background-color: #fff; color: #000;text-align: center; vertical-align: middle;\">\n                          <th rowspan=\"3\" class=\"sticky-col stt-col\">STT</th>\n                          <th rowspan=\"3\" style=\"min-width: 250px;\">Họ và tên</th>\n                          <th rowspan=\"3\">Lương Chính<br>Thực theo thỏa<br>thuận</th>\n                          <th colspan=\"3\"></th>\n                          <th colspan=\"11\" style=\"background-color: #f2dada;\">Tổng thu nhập người lao động</th>\n                          <th colspan=\"7\" style=\"background-color: #ffff66;\">Tổng thu nhập không chịu thuế TNCN</th>\n                          <th colspan=\"2\" style=\"background-color: #35cc9a;\">Khấu trừ thuế TNCN NLĐ</th>\n                          <th colspan=\"5\" style=\"background-color: #c1f2f7;\">Lương thực nhận</th>\n                          <th colspan=\"3\">Chi phí doanh nghiệp</th>\n                        </tr>\n                        <tr style=\"background-color: #fff; color: #000;text-align: center; vertical-align: middle;\">\n                            <th colspan=\"3\">Lương tháng hiện tại (Full)</th>\n                            <th colspan=\"3\" style=\"background-color: #f2dada;\">Lương chi tiết <br>(theo thời gian làm việc)</th>\n                            <th colspan=\"2\" style=\"background-color: #f2dada;\">LươnLương OT</th>\n                            <th rowspan=\"2\" style=\"background-color: #f2dada;\">Các khoản điều<br>chỉnh giảm - / tăng +</th>\n                            <th rowspan=\"2\" style=\"background-color: #f2dada;\">Thưởng đột xuất<br>/ Lễ/ tết </th>\n                            <th colspan=\"3\" style=\"background-color: #f2dada;\">PHỤ CẤP THEO QUY CHẾ CÔNG TY</th>\n                            <th rowspan=\"2\" style=\"background-color: #f2dada;\">Tổng <br>Thu nhập </th>\n                            <th colspan=\"2\" style=\"background-color: #ffff66;\">Người phụ thuộc</th>\n                            <th rowspan=\"2\" style=\"background-color: #ffff66;\">Giảm trừ<br>bản thân</th>\n                            <th rowspan=\"2\" style=\"background-color: #ffff66;\">Ăn/ <br>ĐT/CT/Xăng</th>\n                            <th rowspan=\"2\" style=\"background-color: #ffff66;\">OT</th>\n                            <th style=\"background-color: #ffff66;\">BHBB</th>\n                            <th rowspan=\"2\" style=\"background-color: #ffff66;\">TỔNG</th>\n                            <th rowspan=\"2\" style=\"background-color: #35cc9a;\">Thu nhập chịu<br> thuế TNCN</th>\n                            <th rowspan=\"2\" style=\"background-color: #35cc9a;\">Thuế TNCN</th>\n                            <th style=\"background-color: #c1f2f7;\">BHBB <br>Thực tế</th>\n                            <th style=\"background-color: #c1f2f7;\">Khấu trừ <br>ĐPCĐ</th>\n                            <th rowspan=\"2\" style=\"background-color: #c1f2f7;\">Khác</th>\n                            <th rowspan=\"2\" style=\"background-color: #c1f2f7;\">UNC ngày <br>25/09/2025</th>\n                            <th rowspan=\"2\" style=\"background-color: #c1f2f7;\">Tổng</th>\n                            <th>BHBB</th>\n                            <th>KPCĐ</th>\n                            <th rowspan=\"2\">Tổng</th>\n                          </tr>\n                        <tr style=\"background-color: #fff; color: #000;text-align: center; vertical-align: middle;\">\n                          <th>Lương cơ bản</th>\n                          <th>Hiệu quả công việc</th>\n                          <th>Tổng lương</th>\n                          <th style=\"background-color: #f2dada;\">Thời gian LV<br> (Ngày) </th>\n                          <th style=\"background-color: #f2dada;\">Lương LV</th>\n                          <th style=\"background-color: #f2dada;\">Nghỉ phép<br> được hưởng lương</th>\n                          <th style=\"background-color: #f2dada;\">Ngày</th>\n                          <th style=\"background-color: #f2dada;\">Lương</th>\n                          <th style=\"background-color: #f2dada;\">Ăn trưa</th>\n                          <th style=\"background-color: #f2dada;\">Điện thoại<br> / xăng</th>\n                          <th style=\"background-color: #f2dada;\">Đi công trình</th>\n                          <th style=\"background-color: #ffff66;\">Số NPT</th>\n                          <th style=\"background-color: #ffff66;\">Giảm trừ</th>\n                          <th style=\"background-color: #ffff66; color:red;\">{{settings.bhbb}}%</th>\n                          <th style=\"background-color: #c1f2f7; color:red;\">{{settings.bhbb}}%</th>\n                          <th style=\"background-color: #c1f2f7; color:red;\">{{settings.dpcd}}%</th>\n                          <th style=\"color:red;\">{{settings.dnbhbb}}%</th>\n                          <th style=\"color:red;\">{{settings.dndpcd}}%</th>\n                        </tr>\n                      </thead>\n\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td>{{i+1}}</td>\n                                <td>{{user.lastname}} {{user.firstname}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_total| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_basic| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_performance| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_total_real| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_working_day| number:'1.0-1'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_working_salary| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_leave_salary| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_ot_working_day| number:'1.0-1'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_ot_working_salary | number:'1.0-0'}}</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td style=\"text-align: right;\">{{user.salary_lunch| number:'1.0-0'}}</td>\n                                <td>-</td>\n                                <td style=\"text-align: right;\">{{user.allowance| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;color:red;\">{{user.salary_sum_of_sums| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\" >{{user.dependents}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_dependents| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\" >{{settings.personal| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_lunch| number:'1.0-0'}}</td>\n                                <td>-</td>\n                                <td style=\"text-align: right;\">{{user.salary_BHBB| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;color:red;\">{{user.salary_personal_income_taxt| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">\n                                    {{ (user.salary_sum_of_sums - user.salary_personal_income_taxt) <= 0  ?  0 : (user.salary_sum_of_sums - user.salary_personal_income_taxt) | number:'1.0-0' }}\n                                </td>\n                                <td style=\"text-align: right;\">{{ getPersonalIncomeTax((user.salary_sum_of_sums - user.salary_personal_income_taxt) <= 0  ?  0 : (user.salary_sum_of_sums - user.salary_personal_income_taxt)) | number:'1.0-0' }}</td>\n                                <td style=\"text-align: right;\">{{user.salary_BHBB| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{ (user.salary_basic * settings.dpcd / 100) > 234000 ? '234,000' : (user.salary_basic * settings.dpcd / 100) | number:'1.0-0' }}</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td style=\"text-align: right;color:red;\">{{user.salary_sum_of_sums - user.salary_BHBB - getPersonalIncomeTax((user.salary_sum_of_sums - user.salary_personal_income_taxt) <= 0  ?  0 : (user.salary_sum_of_sums - user.salary_personal_income_taxt))| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_basic*settings.dnbhbb/100 - user.salary_BHBB| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_basic*settings.dndpcd/100| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_sum_of_sums + (user.salary_basic*settings.dnbhbb/100 - user.salary_BHBB) + (user.salary_basic*settings.dndpcd/100)| number:'1.0-0'}}</td>\n                            </tr>\n                        </ng-container>\n                        <tr style=\"background-color: rgba(160, 136, 0, 0.11);\">\n                            <td colspan=\"2\"><b>Tổng cộng</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total1| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total2| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total3| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total4| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total5| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total6| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total7| number:'1.0-0'}}</b></td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total12| number:'1.0-0'}}</b></td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td style=\"text-align: right;color:red;\"><b>{{totalSalary.total15| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\" ><b>{{totalSalary.total16| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total17| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\" ><b>{{totalSalary.total18| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total19| number:'1.0-0'}}</b></td>\n                            <td>-</td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total21| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;color:red;\"><b>{{totalSalary.total22| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total23| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total24| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total25| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total26| number:'1.0-0'}}</b></td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td style=\"text-align: right;color:red;\"><b>{{totalSalary.total29| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total30| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total31| number:'1.0-0'}}</b></td>\n                            <td style=\"text-align: right;\"><b>{{totalSalary.total32| number:'1.0-0'}}</b></td>\n                        </tr>\n\n                    </tbody>\n                </table>\n                <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\" *ngIf=\"salaryFilterKey == 'timesheet'\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th rowspan=\"2\">Full Name</th>\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                <div *ngIf=\"day.stt==0\">CN</div>\n                                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}</div>\n                            </th>\n                            <th rowspan=\"2\">Ngày<br>thường</th>\n                            <th rowspan=\"2\">Ngày<br>nghỉ</th>\n                            <th rowspan=\"2\">TỔNG<br>NGÀY<br>CÔNG</th>\n                            <th rowspan=\"2\">NGÀY<br>CÔNG<br>CHUẨN</th>\n                        </tr>\n                        <tr class=\"display_all\">\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                {{day.day}}\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td rowspan=\"2\">{{user.lastname}} {{user.firstname}}</td>\n                                <ng-container *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <td [innerHTML]=\"getTimesheetByDay(user, j)\"></td>\n                                </ng-container>\n                                <td>{{ user.total_day }}</td>\n                                <td>{{ user.total_leave }}</td>\n                                <td>{{ user.total_total }}</td>\n                                <td>{{ workingInMonth }}</td>\n                            </tr>\n                            <tr style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\">\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet_ot[j] && user.timesheet_ot[j].value && user.timesheet_ot[j].value > 0\">{{user.timesheet_ot[j].value | number:'1.0-0'}}</div>\n                                </td>\n                                <td></td>\n                                <td></td>\n                                <td>{{user.timesheet_ot_total}}</td>\n                                <td></td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table>\n                <app-file-browser *ngIf=\"salaryFilterKey == 'log'\"></app-file-browser>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/task-reports/task-reports.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/task-reports/task-reports.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <h4 class=\"main-title mt-2\"><span>{{'reports.headings.task_report' | translate}}</span></h4>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"tasks_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>{{'tasks.columns.id' | translate}}</th>\n                            <th>{{'tasks.columns.task_name' | translate}}</th>\n                            <th>{{'tasks.columns.project' | translate}}</th>\n                            <!-- <th>{{'tasks.columns.planned_start' | translate}}</th>\n                            <th>{{'tasks.columns.planned_end' | translate}}</th> -->\n                            <th>{{'tasks.columns.start_date' | translate}}</th>\n                            <th>{{'tasks.columns.end_date' | translate}}</th>\n                            <th>{{'tasks.columns.hours' | translate}}/{{'tasks.create.fields.estimate_hours' | translate}}</th>\n                            <th>{{'projects.columns.output_cost' | translate}}/{{'projects.columns.input_cost' | translate}}</th>\n                            <!-- <th>{{'tasks.columns.progress' | translate}}</th> -->\n                            <th>{{'tasks.columns.creator' | translate}}</th>\n                            <th>{{'tasks.columns.assigned' | translate}}</th>\n                            <th>{{'tasks.columns.priority' | translate}}</th>\n                            <th>{{'tasks.columns.status' | translate}}</th>\n                            <!-- <th>{{'tasks.columns.project_version' | translate}}</th> -->\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"tasks?.length != 0\">\n                        <tr *ngFor=\"let task of tasks\">\n                            <td>{{task.generated_id}}</td>\n                            <td>{{task.name}}</td>\n                            <td>{{task.project_name}}</td>\n                            <!-- <td>{{task.planned_start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                            <td>{{task.planned_end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td> -->\n                            <td>{{task.task_start_date | date: 'yyyy-MM-dd' }}</td>\n                            <td>{{task.task_end_date | date: 'yyyy-MM-dd' }}</td>\n                            <td class=\"budges-status\">\n                                <div class=\"budges-status\">\n                                    <span class=\"medium\" *ngIf=\"convertTimeToDecimal(task.actual_hours) < task.estimated_hours\">{{convertTimeToDecimal(task.actual_hours)}}/{{task.estimated_hours}}</span>\n                                    <span class=\"urgent\" *ngIf=\"convertTimeToDecimal(task.actual_hours) >= task.estimated_hours\">{{convertTimeToDecimal(task.actual_hours)}}/{{task.estimated_hours}}</span>\n                                </div>\n                            </td>\n                            <td class=\"budges-status\">\n                                <div class=\"budges-status\">\n                                    <span class=\"medium\" *ngIf=\"task.price_rate >= task.cost\">{{task.cost | number:'1.0-0'}}/{{task.price_rate | number:'1.0-0'}}</span>\n                                    <span class=\"urgent\" *ngIf=\"task.price_rate < task.cost\">{{task.cost | number:'1.0-0'}}/{{task.price_rate | number:'1.0-0'}}</span>\n                                </div>\n                            </td>\n                            <!-- <td>{{task.progress}}%</td> -->\n                            <td class=\"people-lists\">\n                                <a [routerLink]=\"['/users/profile', task.created_by]\" class=\"btn btn-profile-danger rounded-circle text-dark\" tooltip=\"{{task.created_firstname}} {{task.created_lastname}}\">\n                                    <img *ngIf=\"task.created_avatar\" src=\"{{apiUrl}}/uploads/profile/{{task.created_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    <img *ngIf=\"!task.created_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                </a>\n                            </td>\n                            <td class=\"people-lists\">\n                                <ng-container *ngIf=\"task.assign_to == null; else elseBlock2\">\n                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-container>\n                                <ng-template #elseBlock2>\n                                    <a [routerLink]=\"['/users/profile', task.assign_to]\" class=\"btn btn-profile-danger rounded-circle text-dark\" tooltip=\"{{task.assign_firstname}} {{task.assign_lastname}}\">\n                                        <img *ngIf=\"task.assign_avatar\" src=\"{{apiUrl}}/uploads/profile/{{task.assign_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        <img *ngIf=\"!task.assign_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-template>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let priority of ('tasks.priorities' | translate)\">\n                                    <span class=\"badge {{priority.class}}\" *ngIf=\"priority.id == task.priority\">{{priority.label}}</span>\n                                </ng-container>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let status of ('tasks.status' | translate)\">\n                                    <span class=\"badge {{status.class}}\" *ngIf=\"status.id == task.status\">{{status.label}}</span>\n                                </ng-container>\n                            </td>\n                            <!-- <td><span class=\"badge badge-secondary\">{{task.project_version}}</span></td> -->\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.id' | translate}}\" name=\"task_id\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.task_name' | translate}}\" name=\"name\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.project' | translate}}\" name=\"project\" />\n                            </th>\n                            <!-- <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.planned_start' | translate}}\" name=\"planned_start\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.planned_end' | translate}}\" name=\"planned_end\" />\n                            </th> -->\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.actual_start' | translate}}\" name=\"actual_start_date\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.actual_end' | translate}}\" name=\"actual_end_date\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.hours' | translate}}\" name=\"actual_hours\" /> -->\n                            </th>\n                            <th>\n\n                            </th>\n                            <!-- <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.progress' | translate}}\" name=\"progress\" />\n                            </th> -->\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.creator' | translate}}\" name=\"task_created\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.assigned' | translate}}\" name=\"assigned\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.priority' | translate}}\" name=\"priority\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.status' | translate}}\" name=\"status\" /> -->\n                            </th>\n                            <!-- <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.project_version' | translate}}\" name=\"project_version\" />\n                            </th> -->\n                        </tr>\n                    </tfoot>\n                    <tfoot *ngIf=\"tasks?.length == 0\" class=\"tfoot_dt\">\n                        <tr>\n                            <td colspan=\"11\" class=\"text-center\">\n                                <img src=\"assets/img/norecord-img.png\" width=\"50\">\n                                <p class=\"mt-1\">{{ 'common.empty_message.tasks' | translate }}</p>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/user-reports/user-reports.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/user-reports/user-reports.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <div class=\"card-header pl-0 pr-0 border-bottom\">\n        <div class=\"btn-group mr-2 mb-2\" style=\"height:42px;\">\n          <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': FilterKey === 'user_list' }\" (click)=\"filterByStatus('user_list')\" btnRadio=\"user_list\" tabindex=\"0\" role=\"button\">All Users</label>\n            <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': FilterKey === 'user_detail' }\" (click)=\"filterByStatus('user_detail')\" btnRadio=\"user_detail\" tabindex=\"0\" role=\"button\">User Detail</label>\n            <!-- <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': FilterKey === 'profile' }\" (click)=\"filterByStatus('profile')\" btnRadio=\"profile\" tabindex=\"0\" role=\"button\">Profile</label> -->\n            <!-- <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': FilterKey === 'normal' }\" (click)=\"filterByStatus('normal')\" btnRadio=\"normal\" tabindex=\"0\" role=\"button\">Normal</label>\n            <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': FilterKey === 'ot' }\" (click)=\"filterByStatus('ot')\" btnRadio=\"ot\" tabindex=\"0\" role=\"button\">OT</label> -->\n        </div>\n        <div class=\"col-sm-3\" *ngIf=\"FilterKey === 'user_detail'\">\n            <form>\n                <div class=\"form-group\">\n                    <ng-select\n                        [searchable]=\"true\"\n                        [items]=\"users\"\n                        [selectOnTab]=\"true\"\n                        [multiple]=\"false\"\n                        [selectableGroup]=\"false\"\n                        bindLabel=\"username\"\n                        bindValue=\"id\"\n                        labelForId=\"user_id\"\n                        placeholder=\"{{'timesheet.filter.placeholders.placeholder5' | translate }}\"\n                        (change)=\"changeUser($event)\">\n                        <ng-template ng-label-tmp let-item=\"item\">\n                            {{item.username}}\n                        </ng-template>\n                    </ng-select>\n                </div>\n            </form>\n        </div>\n        <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded && FilterKey === 'user_list'\">\n            <div class=\"btn calender-day\" (click)=\"preMonth()\">\n                <i class=\"calendar-icon fa fa-chevron-left\"></i>\n            </div>\n            <div class=\"ml-2\">\n                <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeMonth($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n            </div>\n            <div class=\"mr-2\">\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"month\" readonly />\n            </div>\n            <div class=\"btn calender-day\" (click)=\"nextMonth()\"  *ngIf=\"month <= currentMonth\">\n                <i class=\"calendar-icon fa fa-chevron-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <app-user-detail [userId]=\"users_id\" *ngIf=\"users_id && FilterKey === 'user_detail'\"></app-user-detail>\n                <span class=\"card-title text-warning\" *ngIf=\"!users_id && FilterKey === 'user_detail'\"><b> Please select a user to view details.\"</b></span>\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"users_table\"  *ngIf=\"FilterKey == 'user_list'\">\n                  <thead>\n                    <tr>\n                      <th>{{'users.columns.photo' | translate}}</th>\n                      <th>{{'users.columns.first_name' | translate}}</th>\n                      <th>{{'users.columns.last_name' | translate}}</th>\n                      <th>{{'users.columns.username' | translate}}</th>\n                      <th>{{'users.columns.email' | translate}}</th>\n                      <th>Remaining leave</th>\n                      <th>{{'users.columns.status' | translate}}</th>\n                      <th>{{'users.columns.departments_roles' | translate}}</th>\n                      <th>Total hour (Standard:{{workingInMonth*8.5| number:'1.0-1'}})</th>\n                      <th>Total Cost(VNĐ)</th>\n                      <th>Projects Billable(VNĐ)</th>\n                      <th>Projects Non-Billable(VNĐ)</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"users?.length != 0\">\n                    <tr *ngFor=\"let user of users; index as i\">\n                      <td class=\"people-lists\">\n                        <a [routerLink]=\"['/users/profile', user.id]\" class=\"btn btn-profile-info rounded-circle text-dark\" placement=\"top\" tooltip=\"{{user.firstname}} {{user.lastname}}\">\n                          <img *ngIf=\"user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                          <img *ngIf=\"!user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                        </a>\n                      </td>\n                      <td>\n                        {{user.firstname}}\n                      </td>\n                      <td>\n                        {{user.lastname}}\n                      </td>\n                      <td>\n                        <a [routerLink]=\"['profile', user.id]\" tooltip=\"{{'common.view' | translate}}\">{{user.username}}</a>\n                      </td>\n                      <td>\n                        {{user.email}}\n                      </td>\n                      <td>\n                        {{user.paid_leave}}\n                      </td>\n                      <td class=\"text-center\">\n                        <div class=\"budges-status\">\n                          <span class=\"completed\" *ngIf=\"user.is_active == '1'\">{{'common.status.active' | translate}}</span>\n                          <span class=\"cancel\" *ngIf=\"user.is_active == '0'\">{{'common.status.deactive' | translate}}</span>\n                        </div>\n                      </td>\n                      <td class=\"budges-status\">\n                        <span class=\"completed\">{{user.department_role.role_name}} ({{user.department_role.department_name}})</span>\n                      </td>\n                      <td>\n                        <span class=\"completed\">{{user.timesheet_billable+user.timesheet_non_billable| number:'1.0-1'}}</span>\n                      </td>\n                      <td>\n                        <div class=\"budges-status\" style=\"display: inline-flex; align-items: center; gap: 4px;justify-content: flex-end; width: 100%;\">\n                          {{(user.timesheet_billable+user.timesheet_non_billable)*user.salarytohour| number:'1.0-0'}}\n                          <span class=\"open\">{{user.project_billable+user.project_non_billable}}</span>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"budges-status\" style=\"display: inline-flex; align-items: center; gap: 4px;justify-content: flex-end; width: 100%;\">\n                          {{(user.timesheet_billable)*user.salarytohour| number:'1.0-0'}}\n                          <span class=\"open\">{{user.project_billable}}</span>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"budges-status\" style=\"display: inline-flex; align-items: center; gap: 4px;justify-content: flex-end; width: 100%;\">\n                          {{(user.timesheet_non_billable)*user.salarytohour| number:'1.0-0'}}\n                          <span class=\"open\">{{user.project_non_billable}}</span>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <!-- <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\" *ngIf=\"users_id && salaryFilterKey != 'profile'\">\n                    <thead>\n                      <tr class=\"display_all\">\n                        <th></th>\n                        <th *ngFor=\"let key of usersTimesheetTable | keyvalue\">\n                          <div class=\"fw-bold\">\n                            PROJECT: {{ key.key.split('__')[0] }}\n                          </div>\n                          <div>TASK: {{ key.key.split('__')[1] }}</div>\n                        </th>\n                        <th>Total</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let day of daysInMonth\">\n                        <td>\n                            <b>{{(day.day < 10 ? '0' + day.day : day.day)}}</b>\n                        </td>\n                  \n                        <td *ngFor=\"let key of usersTimesheetTable | keyvalue\">\n                          <ng-container *ngIf=\"key.value[month +'-' + (day.day < 10 ? '0' + day.day : day.day)] as tasks\">\n                            <div *ngFor=\"let t of tasks\">\n                              <b>{{ t.decimal_time }}</b>\n                              <span *ngIf=\"t.note\"> - Note: {{ t.note }}</span>\n                            </div>\n                          </ng-container>\n                        </td>\n                        <td [innerHTML]=\"getTotalByDay(usersTimesheetTable, day.day)\"></td>\n                      </tr>\n                      <tr style=\"background-color: rgba(160, 136, 0, 0.11);\">\n                        <td>\n                            <b>Total</b>\n                        </td>\n                  \n                        <td *ngFor=\"let element of usersTimesheetTable | keyvalue\">\n                            <div [innerHTML]=\"getTotalByTask(element.value)\"></div>\n                        </td>\n                        <td [innerHTML]=\"getGrandTotal(usersTimesheetTable)\"></td>\n                      </tr>\n                    </tbody>\n                  </table> -->\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/pages/reports/reports.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/pages/reports/reports.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"detail-page\">\n\t<div class=\"card\">\n\t\t<tabset class=\"nav nav-tabs d-flex justify-content-center mb-2\">\n\t\t\t<tab customClass=\"text-left\" id=\"1\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-calendar\"></i><span class=\"mt-1 ml-1\">TimeSheet</span></div></ng-template>\n\t\t\t\t<app-defect-reports *ngIf=\"getActiveReportTab('1')\"></app-defect-reports>\n\t\t\t</tab>\n\t\t\t<tab customClass=\"text-left\" id=\"2\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-money-bill\"></i><span class=\"mt-1 ml-1\">Salary</span></div></ng-template>\n\t\t\t\t<app-salary-reports *ngIf=\"getActiveReportTab('2')\"></app-salary-reports>\n\t\t\t</tab>\n\t\t\t<tab customClass=\"text-left\" id=\"4\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-user\"></i><span class=\"mt-1 ml-1\">Users</span></div></ng-template>\n\t\t\t\t<app-user-reports *ngIf=\"getActiveReportTab('4')\"></app-user-reports>\n\t\t\t</tab>\n\t\t\t<tab customClass=\"text-left\" id=\"5\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-briefcase\"></i><span class=\"mt-1 ml-1\">Work allowance</span></div></ng-template>\n\t\t\t\t<app-allowance-reports *ngIf=\"getActiveReportTab('5')\"></app-allowance-reports>\n\t\t\t</tab>\n\t\t\t<tab customClass=\"text-left active\" id=\"6\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-tasks\"></i><span class=\"mt-1 ml-1\">{{'reports.headings.project_report' | translate}}</span></div></ng-template>\n\t\t\t\t<app-project-reports *ngIf=\"getActiveReportTab('6')\"></app-project-reports>\n\t\t\t</tab>\n\t\t\t<tab customClass=\"text-left\" id=\"3\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-credit-card\"></i><span class=\"mt-1 ml-1\">Payment</span></div></ng-template>\n\t\t\t\t<app-payment-reports *ngIf=\"getActiveReportTab('3')\"></app-payment-reports>\n\t\t\t</tab>\n\t\t\t<!-- <tab customClass=\"text-left\" id=\"2\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-tasks\"></i><span class=\"mt-1 ml-1\">{{'reports.headings.task_report' | translate}}</span></div></ng-template>\n\t\t\t\t<app-task-reports *ngIf=\"getActiveReportTab('2')\"></app-task-reports>\n\t\t\t</tab> -->\n\t\t\t<!-- <tab customClass=\"text-left\" id=\"4\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-ticket\"></i><span class=\"mt-1 ml-1\">{{'reports.headings.incident_report' | translate}}</span></div></ng-template>\n\t\t\t\t<app-incident-reports *ngIf=\"getActiveReportTab('4')\"></app-incident-reports>\n\t\t\t</tab> -->\n\t\t</tabset>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/core/services/timesheet.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/timesheet.service.ts ***!
  \****************************************************/
/*! exports provided: TimesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetService", function() { return TimesheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TimesheetService = /** @class */ (function () {
    function TimesheetService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TimesheetService.prototype.getTimesheetsByModule = function (params) {
        return this.http.post(this.apiUrl + "/api/get-timesheets", params);
    };
    TimesheetService.prototype.getTimesheetsByCalendar = function (params) {
        return this.http.post(this.apiUrl + "/api/get-timesheets-calendar", params);
    };
    TimesheetService.prototype.getUserSelect = function () {
        return this.http.get(this.apiUrl + "/api/get-user-select");
    };
    TimesheetService.prototype.getUserMonthSelect = function (month) {
        return this.http.get(this.apiUrl + "/api/get-user-month-select/" + month);
    };
    TimesheetService.prototype.create = function (params) {
        return this.http.post(this.apiUrl + "/api/timesheets", params);
    };
    TimesheetService.prototype.saveTimeSheet = function (params) {
        return this.http.post(this.apiUrl + "/api/save-timesheet", params);
    };
    TimesheetService.prototype.approvedTimeSheet = function (params) {
        return this.http.post(this.apiUrl + "/api/approved-timesheet", params);
    };
    TimesheetService.prototype.disapprovedTimeSheet = function (params) {
        return this.http.post(this.apiUrl + "/api/disapproved-timesheet", params);
    };
    TimesheetService.prototype.update = function (timesheet) {
        return this.http.put(this.apiUrl + "/api/timesheets/" + timesheet.id, timesheet);
    };
    TimesheetService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/timesheets/" + id);
    };
    TimesheetService.prototype.getTimeLogs = function () {
        return this.http.get(this.apiUrl + "/api/timer-logs");
    };
    TimesheetService.prototype.createTimeLog = function (params) {
        return this.http.post(this.apiUrl + "/api/timer-logs", params);
    };
    TimesheetService.prototype.exportTimeSheet = function (params) {
        return this.http.post(this.apiUrl + "/api/export-timeSheet", params);
    };
    TimesheetService.prototype.deleteTimeLog = function (id) {
        return this.http.delete(this.apiUrl + "/api/timer-logs/" + id);
    };
    TimesheetService.prototype.getHolidaysLeavesForUser = function (params) {
        return this.http.post(this.apiUrl + "/api/getHolidaysLeavesForUser", params);
    };
    TimesheetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TimesheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TimesheetService);
    return TimesheetService;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvYWxsb3dhbmNlLXJlcG9ydHMvYWxsb3dhbmNlLXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL2FsbG93YW5jZS1yZXBvcnRzL2FsbG93YW5jZS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvYWxsb3dhbmNlLXJlcG9ydHMvYWxsb3dhbmNlLXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuIiwiOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AllowanceReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowanceReportsComponent", function() { return AllowanceReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__);














Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('vi', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__["viLocale"]);


var AllowanceReportsComponent = /** @class */ (function () {
    function AllowanceReportsComponent(translate, http, datePipe, authenticationService, sanitizer, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.datePipe = datePipe;
        this.authenticationService = authenticationService;
        this.sanitizer = sanitizer;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.currentMonth = this.datePipe.transform(new Date(), 'yyyy-MM');
        this.month = this.datePipe.transform(new Date(), 'yyyy-MM');
        this.defects = [];
        this.leaves = [];
        this.leavesData = [];
        this.holidays = [];
        this.workingInMonth = 0;
        this.totalData = 0;
        this.exportTableData = [];
        this.daysInMonth = [{}];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'csv',
            elementIdOrContent: 'export_table',
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM',
            containerClass: 'theme-red',
            minMode: 'month',
            maxDate: new Date(),
            locale: 'vi',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    AllowanceReportsComponent.prototype.ngOnInit = function () {
        // this.month = this.datePipe.transform("2025-08", 'yyyy-MM');
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.loadDatatable();
    };
    AllowanceReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        this.getWorkingDays(this.month);
        this.http.post(this.apiUrl + '/api/leaves/leaves-report', { month: this.month }, {})
            .subscribe(function (resp) {
            _this.leavesData = resp.data;
            _this.totalData = 0;
            _this.leavesData.forEach(function (element, index) {
                _this.totalData += element.total;
            });
        });
        this.isPageLoaded = true;
        return;
    };
    AllowanceReportsComponent.prototype.getWorkingDays = function (month) {
        var _a = month.split('/').map(Number), year = _a[0], monthStr = _a[1];
        var daysInMonth = new Date(year, monthStr, 0).getDate();
        var workingDays = 0;
        for (var day = 1; day <= daysInMonth; day++) {
            var current = new Date(year, monthStr - 1, day);
            var dow = current.getDay();
            if (dow !== 0 && dow !== 6) {
                workingDays++;
            }
        }
        this.workingInMonth = workingDays;
    };
    AllowanceReportsComponent.prototype.exportTableDataArray = function (data) {
        var total = 0;
        var dataReturn = Object.keys(data).map(function (key) {
            var value = parseFloat(data[key]);
            if (isNaN(value))
                value = 0;
            total += value;
            return {
                key: key,
                value: value
            };
        });
        return { total: total, data: dataReturn };
    };
    AllowanceReportsComponent.prototype.getTimesheetTotal = function (user) {
        var timesheet_total = user.timesheet_total;
        this.holidays.forEach(function (element, index) {
            timesheet_total = timesheet_total + 8.5;
        });
        this.leaves.forEach(function (element, index) {
            if (user.id == element.user_id && element.leave_type_id == 1) {
                if (element.duration == 'half') {
                    if (element.duration_type == 'first_half') {
                        timesheet_total = timesheet_total + 4;
                    }
                    else {
                        timesheet_total = timesheet_total + 4.5;
                    }
                }
                else {
                    timesheet_total = timesheet_total + 8.5;
                }
            }
        });
        return timesheet_total;
    };
    AllowanceReportsComponent.prototype.getTimesheetByDay = function (user, j) {
        var currentDate = new Date(this.month + "/" + (j + 1));
        var currentDay = currentDate.getDate();
        var holiday = this.holidays.find(function (element) {
            var holidayDate = new Date(element.date);
            return currentDay === holidayDate.getDate();
        });
        if (holiday) {
            return ('<div class="cell table-cell-green" title="Holiday">8.5</div>');
        }
        var timesheet_total = 0;
        for (var _i = 0, _a = this.leaves; _i < _a.length; _i++) {
            var element = _a[_i];
            var leave_date = new Date(element.leave_date);
            if (user.id == element.user_id && currentDay === leave_date.getDate()) {
                if (element.leave_type_id == 2) {
                    if (element.duration == 'half') {
                        return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell table-cell-red\" title=\"Ngh\u1EC9 kh\u00F4ng ph\u00E9p (Half)\">" + Number(user.timesheet[j].value).toFixed(1) + "</div>");
                    }
                    else {
                        return this.sanitizer.bypassSecurityTrustHtml('<div class="cell table-cell-red" title="Nghỉ không phép (Full)">OFF</div>');
                    }
                }
                else {
                    if (element.duration == 'half') {
                        if (element.duration_type == 'first_half') {
                            timesheet_total = timesheet_total + 4;
                        }
                        else {
                            timesheet_total = timesheet_total + 4.5;
                        }
                    }
                    else {
                        return this.sanitizer.bypassSecurityTrustHtml('<div class="cell table-cell-indigo" title="Nghỉ có phép (Full)">8.5</div>');
                    }
                }
            }
        }
        if (timesheet_total > 0) {
            return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell table-cell-yellow\" title=\"Ngh\u1EC9 c\u00F3 ph\u00E9p (Half)\">" + Number(user.timesheet[j].value + timesheet_total).toFixed(1) + "</div>");
        }
        else {
            if (user.timesheet[j] && user.timesheet[j].check) {
                return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell\">" + Number(user.timesheet[j].value).toFixed(1) + "</div>");
            }
        }
        return '';
    };
    AllowanceReportsComponent.prototype.compareValues = function (timesheet, working_hours) {
        var isEqual = Number(timesheet.value) === Number(working_hours);
        var todayCheck = new Date(timesheet.key);
        var isSaturday = todayCheck.getDay() === 6;
        var weekOfMonth = this.getWeekOfMonth(todayCheck);
        // const isSecondOrFourthWeek = (weekOfMonth === 2 || weekOfMonth === 4);
        var newDate = new Date();
        var today = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfDay"])(new Date(newDate.getFullYear(), newDate.getMonth(), 25));
        var currentWeekMonday = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfWeek"])(today, { weekStartsOn: 1 });
        var isWeekdayAndFuture = todayCheck > currentWeekMonday && Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDay"])(todayCheck) >= 1 && Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDay"])(todayCheck) <= 5;
        return isEqual;
        // (isSaturday && isSecondOrFourthWeek) ||
        //  isWeekdayAndFuture;
    };
    AllowanceReportsComponent.prototype.getWeekOfMonth = function (date) {
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var firstDayOfWeek = firstDay.getDay();
        var dayOfMonth = date.getDate();
        return Math.ceil((dayOfMonth + firstDayOfWeek) / 7);
    };
    AllowanceReportsComponent.prototype.nextMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["addMonths"])(this.month, 1));
    };
    AllowanceReportsComponent.prototype.preMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["subMonths"])(this.month, 1));
    };
    AllowanceReportsComponent.prototype.changeMonth = function (selectedDate) {
        this.month = this.datePipe.transform(selectedDate, 'yyyy-MM');
        // this.month = this.datePipe.transform("2025-08", 'yyyy-MM');
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.loadDatatable();
    };
    AllowanceReportsComponent.prototype.getTotalDaysInMonth = function (date) {
        var start = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfMonth"])(date);
        var end = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["endOfMonth"])(date);
        var daysInMonth = [];
        for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
            daysInMonth.push({ date: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(d), 'YYYY-MM-DD'), stt: Number(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(d), 'd')), day: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDate"])(new Date(d)) });
        }
        return daysInMonth;
    };
    AllowanceReportsComponent.prototype.exportFiles = function () {
        var _this = this;
        this.http.post(this.apiUrl + '/api/defect/export-work-allowance', { data: this.leavesData, month: this.month, action: 'work-allowance', totalData: this.totalData }, { responseType: 'blob' })
            .subscribe(function (blob) {
            var link = document.createElement('a');
            var url = window.URL.createObjectURL(blob);
            link.href = url;
            link.download = 'work-allowance_' + _this.month + '.xlsx';
            link.click();
            window.URL.revokeObjectURL(url);
        });
    };
    AllowanceReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    AllowanceReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.exportTableData.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    AllowanceReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], AllowanceReportsComponent.prototype, "dtElement", void 0);
    AllowanceReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allowance-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./allowance-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./allowance-reports.component.scss */ "./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], AllowanceReportsComponent);
    return AllowanceReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n\n.table-bordered {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table-bordered td {\n  border: 1px solid black;\n  padding: 8px;\n  text-align: left;\n}\n\n.b4-datatable > thead > tr > th {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvZGVmZWN0LXJlcG9ydHMvZGVmZWN0LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL2RlZmVjdC1yZXBvcnRzL2RlZmVjdC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENFO0VBQ0UsdUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL2RlZmVjdC1yZXBvcnRzL2RlZmVjdC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAudGFibGUtYm9yZGVyZWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweDsgXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXG4gIH1cbiAgLmI0LWRhdGF0YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH0iLCI6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtYm9yZGVyZWQgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYjQtZGF0YXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DefectReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectReportsComponent", function() { return DefectReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__);














Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('vi', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__["viLocale"]);


var DefectReportsComponent = /** @class */ (function () {
    function DefectReportsComponent(translate, http, datePipe, authenticationService, sanitizer, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.datePipe = datePipe;
        this.authenticationService = authenticationService;
        this.sanitizer = sanitizer;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.currentMonth = this.datePipe.transform(new Date(), 'yyyy-MM');
        this.month = this.datePipe.transform(new Date(), 'yyyy-MM');
        this.defects = [];
        this.leaves = [];
        this.holidays = [];
        this.workingInMonth = 0;
        this.exportTableData = [];
        this.daysInMonth = [{}];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'csv',
            elementIdOrContent: 'export_table',
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM',
            containerClass: 'theme-red',
            minMode: 'month',
            maxDate: new Date(),
            locale: 'vi',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    DefectReportsComponent.prototype.ngOnInit = function () {
        // this.month = this.datePipe.transform("2025-08", 'yyyy-MM');
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.loadDatatable();
    };
    DefectReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        this.getWorkingDays(this.month);
        this.http.post(this.apiUrl + '/api/defect/defect-report', { month: this.month }, {})
            .subscribe(function (resp) {
            _this.exportTableData = resp.data;
            _this.leaves = resp.leaves;
            _this.holidays = resp.holidays;
            _this.exportTableData.forEach(function (element, index) {
                var timesheetconvert = _this.exportTableDataArray(element.timesheet);
                element.timesheet = timesheetconvert.data;
                element.timesheet_total = timesheetconvert.total;
                var timesheetconvertOT = _this.exportTableDataArray(element.timesheet_ot);
                element.timesheet_ot = timesheetconvertOT.data;
                element.timesheet_ot_total = timesheetconvertOT.total;
                element.actual_working_day = 0;
                element.timesheet.forEach(function (element2, index2) {
                    element2.check = _this.compareValues(element2, 8.5);
                    if (element2.check) {
                        element.actual_working_day++;
                    }
                });
                element.total_day = _this.getTimesheetTotalExport(element, 'day');
                element.total_leave = _this.getTimesheetTotalExport(element, 'leave');
                element.total_total = _this.getTimesheetTotalExport(element, 'total');
            });
            // console.log(this.exportTableData);
            // this.defects = resp.data;
            _this.isPageLoaded = true;
            // callback({
            // 	recordsTotal: 0,
            // 	recordsFiltered: 0,
            // 	data: [],
            // });
        });
        return;
    };
    DefectReportsComponent.prototype.getWorkingDays = function (month) {
        var _a = month.split('-').map(Number), year = _a[0], monthStr = _a[1];
        var daysInMonth = new Date(year, monthStr, 0).getDate();
        var workingDays = 0;
        for (var day = 1; day <= daysInMonth; day++) {
            var current = new Date(year, monthStr - 1, day);
            var dow = current.getDay();
            if (dow !== 0 && dow !== 6) {
                workingDays++;
            }
        }
        this.workingInMonth = workingDays;
    };
    DefectReportsComponent.prototype.exportTableDataArray = function (data) {
        var total = 0;
        var dataReturn = Object.keys(data).map(function (key) {
            var value = parseFloat(data[key]);
            if (isNaN(value))
                value = 0;
            total += value;
            return {
                key: key,
                value: value
            };
        });
        return { total: total, data: dataReturn };
    };
    DefectReportsComponent.prototype.getTimesheetTotal = function (user) {
        var timesheet_total = user.timesheet_total;
        this.holidays.forEach(function (element, index) {
            timesheet_total = timesheet_total + 8.5;
        });
        this.leaves.forEach(function (element, index) {
            if (user.id == element.user_id && element.leave_type_id == 1) {
                if (element.duration == 'half') {
                    if (element.duration_type == 'first_half') {
                        timesheet_total = timesheet_total + 4;
                    }
                    else {
                        timesheet_total = timesheet_total + 4.5;
                    }
                }
                else {
                    timesheet_total = timesheet_total + 8.5;
                }
            }
        });
        return timesheet_total;
    };
    DefectReportsComponent.prototype.getTimesheetTotalExport = function (user, type) {
        if (type === void 0) { type = false; }
        // let timesheet_total = user.timesheet_total;
        var timesheet_leave = 0;
        var timesheet_holiday = 0;
        var timesheet_day = 0;
        this.holidays.forEach(function (element, index) {
            timesheet_holiday += 8.5;
        });
        this.leaves.forEach(function (element, index) {
            if (user.id == element.user_id && element.leave_type_id == 1) {
                if (element.duration == 'half') {
                    if (element.duration_type == 'first_half') {
                        timesheet_leave = timesheet_leave + 4;
                    }
                    else {
                        timesheet_leave = timesheet_leave + 4.5;
                    }
                }
                else {
                    timesheet_leave += 8.5;
                }
            }
        });
        user.timesheet.forEach(function (element, index) {
            if (element) {
                switch (element.value) {
                    case 8.5:
                        timesheet_day += 8.5;
                        break;
                    case 4.5:
                        timesheet_day += 4.5;
                        break;
                    case 4:
                        timesheet_day += 4;
                        break;
                    default:
                        break;
                }
            }
        });
        var total = 0;
        switch (type) {
            case 'day':
                total = timesheet_day + timesheet_holiday;
                break;
            case 'leave':
                total = timesheet_leave;
                break;
            case 'total':
                total = timesheet_day + timesheet_holiday + timesheet_leave;
                break;
        }
        return total;
    };
    DefectReportsComponent.prototype.exportFiles = function () {
        var _this = this;
        this.http.post(this.apiUrl + '/api/defect/export-timesheet', { data: this.exportTableData, daysInMonth: this.daysInMonth, workingInMonth: this.workingInMonth, month: this.month, holidays: this.holidays, leaves: this.leaves, action: 'time' }, { responseType: 'blob' })
            .subscribe(function (blob) {
            var link = document.createElement('a');
            var url = window.URL.createObjectURL(blob);
            link.href = url;
            link.download = 'timesheet_' + _this.month + '.xlsx';
            link.click();
            window.URL.revokeObjectURL(url);
        });
    };
    DefectReportsComponent.prototype.getTimesheetByDay = function (user, j) {
        var currentDate = new Date(this.month + "/" + (j + 1));
        var currentDay = currentDate.getDate();
        var holiday = this.holidays.find(function (element) {
            var holidayDate = new Date(element.date);
            return currentDay === holidayDate.getDate();
        });
        if (holiday) {
            return ('<div class="cell table-cell-green" title="Holiday">8.5</div>');
        }
        var timesheet_total = 0;
        for (var _i = 0, _a = this.leaves; _i < _a.length; _i++) {
            var element = _a[_i];
            var leave_date = new Date(element.leave_date);
            if (user.id == element.user_id && currentDay === leave_date.getDate()) {
                if (element.leave_type_id == 2) {
                    if (element.duration == 'half') {
                        return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell table-cell-red\" title=\"Ngh\u1EC9 kh\u00F4ng ph\u00E9p (Half)\">" + Number(user.timesheet[j].value).toFixed(1) + "</div>");
                    }
                    else {
                        return this.sanitizer.bypassSecurityTrustHtml('<div class="cell table-cell-red" title="Nghỉ không phép (Full)">OFF</div>');
                    }
                }
                else {
                    if (element.duration == 'half') {
                        if (element.duration_type == 'first_half') {
                            timesheet_total = timesheet_total + 4;
                        }
                        else {
                            timesheet_total = timesheet_total + 4.5;
                        }
                    }
                    else {
                        return this.sanitizer.bypassSecurityTrustHtml('<div class="cell table-cell-indigo" title="Nghỉ có phép (Full)">8.5</div>');
                    }
                }
            }
        }
        if (timesheet_total > 0) {
            return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell table-cell-yellow\" title=\"Ngh\u1EC9 c\u00F3 ph\u00E9p (Half)\">" + Number(user.timesheet[j].value + timesheet_total).toFixed(1) + "</div>");
        }
        else {
            if (user.timesheet[j] && user.timesheet[j].check) {
                return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell\">" + Number(user.timesheet[j].value).toFixed(1) + "</div>");
            }
        }
        return '';
    };
    DefectReportsComponent.prototype.compareValues = function (timesheet, working_hours) {
        var isEqual = Number(timesheet.value) === Number(working_hours);
        var todayCheck = new Date(timesheet.key);
        var isSaturday = todayCheck.getDay() === 6;
        var weekOfMonth = this.getWeekOfMonth(todayCheck);
        // const isSecondOrFourthWeek = (weekOfMonth === 2 || weekOfMonth === 4);
        var newDate = new Date();
        var today = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfDay"])(new Date(newDate.getFullYear(), newDate.getMonth(), 25));
        var currentWeekMonday = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfWeek"])(today, { weekStartsOn: 1 });
        var isWeekdayAndFuture = todayCheck > currentWeekMonday && Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDay"])(todayCheck) >= 1 && Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDay"])(todayCheck) <= 5;
        return isEqual;
        // (isSaturday && isSecondOrFourthWeek) ||
        //  isWeekdayAndFuture;
    };
    DefectReportsComponent.prototype.getWeekOfMonth = function (date) {
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var firstDayOfWeek = firstDay.getDay();
        var dayOfMonth = date.getDate();
        return Math.ceil((dayOfMonth + firstDayOfWeek) / 7);
    };
    DefectReportsComponent.prototype.nextMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["addMonths"])(this.month, 1));
    };
    DefectReportsComponent.prototype.preMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["subMonths"])(this.month, 1));
    };
    DefectReportsComponent.prototype.changeMonth = function (selectedDate) {
        this.month = this.datePipe.transform(selectedDate, 'yyyy-MM');
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.loadDatatable();
    };
    DefectReportsComponent.prototype.getTotalDaysInMonth = function (date) {
        var start = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfMonth"])(date);
        var end = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["endOfMonth"])(date);
        var daysInMonth = [];
        for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
            daysInMonth.push({ date: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(d), 'YYYY-MM-DD'), stt: Number(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(d), 'd')), day: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDate"])(new Date(d)) });
        }
        return daysInMonth;
    };
    // exportFiles(type) {
    //     this.exportAsService.save(this.exportAsConfig, 'Timesheet').subscribe(() => {
    //     });
    // }
    DefectReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    DefectReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.exportTableData.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    DefectReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], DefectReportsComponent.prototype, "dtElement", void 0);
    DefectReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-reports.component.scss */ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], DefectReportsComponent);
    return DefectReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvaW5jaWRlbnQtcmVwb3J0cy9pbmNpZGVudC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BtL3JlcG9ydHMvY29tcG9uZW50cy9pbmNpZGVudC1yZXBvcnRzL2luY2lkZW50LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL3JlcG9ydHMvY29tcG9uZW50cy9pbmNpZGVudC1yZXBvcnRzL2luY2lkZW50LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufSIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: IncidentReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentReportsComponent", function() { return IncidentReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);











var IncidentReportsComponent = /** @class */ (function () {
    function IncidentReportsComponent(translate, http, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtOptions = {};
        this.incidents = [];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'incidents_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    IncidentReportsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    IncidentReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            responsive: true,
            searching: true,
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
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                },
                {
                    'sortable': true,
                    'target': [7]
                },
                {
                    'sortable': true,
                    'target': [8]
                },
                {
                    'sortable': true,
                    'target': [9]
                },
                {
                    'sortable': true,
                    'target': [10]
                },
                {
                    'sortable': true,
                    'target': [11]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('reports.headings.incident_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('reports.headings.incident_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('reports.headings.incident_report'),
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
                _this.http
                    .post(_this.apiUrl + '/api/incident/incident-report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.incidents = resp.data;
                    _this.isPageLoaded = true;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    IncidentReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.incident_report')).subscribe(function () { });
    };
    IncidentReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    IncidentReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.incidents.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    IncidentReportsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                        that.search(this['value']).draw();
                    }
                });
            });
        });
    };
    IncidentReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], IncidentReportsComponent.prototype, "dtElement", void 0);
    IncidentReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-reports.component.scss */ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], IncidentReportsComponent);
    return IncidentReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/payment-reports/payment-reports.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/payment-reports/payment-reports.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcGF5bWVudC1yZXBvcnRzL3BheW1lbnQtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcGF5bWVudC1yZXBvcnRzL3BheW1lbnQtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL3BheW1lbnQtcmVwb3J0cy9wYXltZW50LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuIiwiOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/payment-reports/payment-reports.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/payment-reports/payment-reports.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PaymentReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentReportsComponent", function() { return PaymentReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__);














Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('vi', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__["viLocale"]);


var PaymentReportsComponent = /** @class */ (function () {
    function PaymentReportsComponent(translate, http, datePipe, authenticationService, sanitizer, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.datePipe = datePipe;
        this.authenticationService = authenticationService;
        this.sanitizer = sanitizer;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.currentMonth = this.datePipe.transform(new Date(), 'yyyy-MM');
        this.month = this.datePipe.transform(new Date(), 'yyyy-MM');
        this.defects = [];
        this.leaves = [];
        this.payments = [];
        this.holidays = [];
        this.workingInMonth = 0;
        this.exportTableData = [];
        this.daysInMonth = [{}];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'csv',
            elementIdOrContent: 'export_table',
        };
        this.FilterKey = 'success';
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM',
            containerClass: 'theme-red',
            minMode: 'month',
            maxDate: new Date(),
            locale: 'vi',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    PaymentReportsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    PaymentReportsComponent.prototype.filterByStatus = function (key) {
        this.FilterKey = key;
        this.loadDatatable();
    };
    PaymentReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        this.http.post(this.apiUrl + '/api/todos/list-report', { month: this.month, module_id: 'all', 'filterKey': this.FilterKey }, {})
            .subscribe(function (resp) {
            _this.payments = resp.data;
            _this.isPageLoaded = true;
        });
        return;
    };
    PaymentReportsComponent.prototype.nextMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["addMonths"])(this.month, 1));
    };
    PaymentReportsComponent.prototype.preMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["subMonths"])(this.month, 1));
    };
    PaymentReportsComponent.prototype.changeMonth = function (selectedDate) {
        this.month = this.datePipe.transform(selectedDate, 'yyyy-MM');
        this.loadDatatable();
    };
    PaymentReportsComponent.prototype.exportFiles = function () {
        var _this = this;
        this.http.post(this.apiUrl + '/api/defect/export-payment', { data: this.payments, month: this.month, action: 'payment', filterKey: this.FilterKey }, { responseType: 'blob' })
            .subscribe(function (blob) {
            var link = document.createElement('a');
            var url = window.URL.createObjectURL(blob);
            link.href = url;
            link.download = 'payment_' + _this.month + '.xlsx';
            link.click();
            window.URL.revokeObjectURL(url);
        });
    };
    PaymentReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    PaymentReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.exportTableData.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    PaymentReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], PaymentReportsComponent.prototype, "dtElement", void 0);
    PaymentReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/payment-reports/payment-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-reports.component.scss */ "./src/app/modules/pm/reports/components/payment-reports/payment-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], PaymentReportsComponent);
    return PaymentReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/project-reports/project-reports.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n\ntr.expanded-row td {\n  background-color: #f9f9f9;\n  border-top: none;\n}\n\n.fa {\n  color: #007bff;\n  font-size: 18px;\n}\n\n.fa:hover {\n  color: #0056b3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcHJvamVjdC1yZXBvcnRzL3Byb2plY3QtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcHJvamVjdC1yZXBvcnRzL3Byb2plY3QtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0E7O0FERUE7RUFDQSxjQUFBO0FDQ0EiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL3JlcG9ydHMvY29tcG9uZW50cy9wcm9qZWN0LXJlcG9ydHMvcHJvamVjdC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuXG50ci5leHBhbmRlZC1yb3cgdGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5mYSB7XG5jb2xvcjogIzAwN2JmZjtcbmZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZhOmhvdmVyIHtcbmNvbG9yOiAjMDA1NmIzO1xufVxuIiwiOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG50ci5leHBhbmRlZC1yb3cgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uZmEge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZmE6aG92ZXIge1xuICBjb2xvcjogIzAwNTZiMztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/project-reports/project-reports.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProjectReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectReportsComponent", function() { return ProjectReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__);












var ProjectReportsComponent = /** @class */ (function () {
    function ProjectReportsComponent(translate, http, userService, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isPageLoaded = false;
        this.dtOptions = {};
        this.projects = [];
        this.userLists = [];
        this.expandedProjectId = null;
        this.expandedRowIndex = null;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'projects_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ProjectReportsComponent.prototype.ngOnInit = function () {
        this.getUserkeyBy();
        this.loadProjectDatatable();
    };
    ProjectReportsComponent.prototype.getUserkeyBy = function () {
        var _this = this;
        this.userService.getUserkeyBy().subscribe(function (data) {
            _this.userLists = data;
        });
    };
    ProjectReportsComponent.prototype.togglePayments = function (index) {
        this.expandedRowIndex = this.expandedRowIndex === index ? null : index;
    };
    ProjectReportsComponent.prototype.toggleExpand = function (projectId) {
        if (this.expandedProjectId === projectId) {
            this.expandedProjectId = null; // đóng nếu click lại
        }
        else {
            this.expandedProjectId = projectId; // mở project mới
        }
    };
    ProjectReportsComponent.prototype.loadProjectDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            searching: true,
            processing: true,
            responsive: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'width': "5%",
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
                    'sortable': false,
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
                }, {
                    'sortable': false,
                    'target': [8]
                }, {
                    'sortable': false,
                    'target': [9]
                }, {
                    'sortable': false,
                    'target': [10]
                },
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('reports.headings.project_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('reports.headings.project_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('reports.headings.project_report'),
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
                _this.http
                    .post(_this.apiUrl + '/api/projects/project-report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.projects = resp.data;
                    _this.projects.forEach(function (element) {
                        element.payments = JSON.parse(element.payments);
                    });
                    _this.isPageLoaded = true;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ProjectReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.project_report')).subscribe(function () { });
    };
    ProjectReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProjectReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.projects.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ProjectReportsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                        that.search(this['value']).draw();
                    }
                });
            });
        });
    };
    ProjectReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], ProjectReportsComponent.prototype, "dtElement", void 0);
    ProjectReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/project-reports/project-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-reports.component.scss */ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], ProjectReportsComponent);
    return ProjectReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n\n.table-bordered {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table-bordered td {\n  border: 1px solid black;\n  padding: 8px;\n  text-align: left;\n}\n\n.b4-datatable > thead > tr > th {\n  border: 1px solid black;\n}\n\n.table-wrapper {\n  width: 100%;\n  height: calc(100vh - 486px);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.fixed-col-table {\n  border-collapse: collapse;\n  width: 100%;\n  min-width: 900px;\n  background: #fff;\n}\n\n.fixed-col-table th, .fixed-col-table td {\n  padding: 8px 10px;\n  border: 1px solid #e0e0e0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.fixed-col-table thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  background: #fafafa;\n}\n\n.fixed-col-table th.col-col1, .fixed-col-table td.col-col1 {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  background: #fff;\n  z-index: 10;\n}\n\n.fixed-col-table th.col-col2, .fixed-col-table td.col-col2 {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 80px;\n  background: #fff;\n  z-index: 9;\n}\n\n.fixed-col-table thead th.col-col1,\n.fixed-col-table thead th.col-col2 {\n  z-index: 20;\n}\n\n.overflow-x-scroll {\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvc2FsYXJ5LXJlcG9ydHMvc2FsYXJ5LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL3NhbGFyeS1yZXBvcnRzL3NhbGFyeS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENFO0VBQ0UsdUJBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQ0dKOztBREFFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERJO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNHTjs7QURBSTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDRU47O0FERUk7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0FOOztBRElJO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNGTjs7QURLSTs7RUFFRSxXQUFBO0FDSE47O0FETUU7RUFDRSxrQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvc2FsYXJ5LXJlcG9ydHMvc2FsYXJ5LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4udGFibGUtYm9yZGVyZWQge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC50YWJsZS1ib3JkZXJlZCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogOHB4OyBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcbiAgfVxuICAuYjQtZGF0YXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICAudGFibGUtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDg2cHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgfVxuICBcbiAgLmZpeGVkLWNvbC10YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIFxuICAgIHRoLCB0ZCB7XG4gICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gIFxuICAgIHRoZWFkIHRoIHtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB0b3A6IDA7XG4gICAgICB6LWluZGV4OiA1O1xuICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICB9XG4gIFxuICAgIC8vIEPhu5l0IDFcbiAgICB0aC5jb2wtY29sMSwgdGQuY29sLWNvbDEge1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuICBcbiAgICAvLyBD4buZdCAyXG4gICAgdGguY29sLWNvbDIsIHRkLmNvbC1jb2wyIHtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICBsZWZ0OiA4MHB4OyAvLyBi4bqxbmcgd2lkdGggY+G7mXQgMVxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIHotaW5kZXg6IDk7XG4gICAgfVxuICBcbiAgICB0aGVhZCB0aC5jb2wtY29sMSxcbiAgICB0aGVhZCB0aC5jb2wtY29sMiB7XG4gICAgICB6LWluZGV4OiAyMDtcbiAgICB9XG4gIH1cbiAgLm92ZXJmbG93LXgtc2Nyb2xsIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH0iLCI6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtYm9yZGVyZWQgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYjQtZGF0YXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4NnB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuLmZpeGVkLWNvbC10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDkwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmZpeGVkLWNvbC10YWJsZSB0aCwgLmZpeGVkLWNvbC10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZpeGVkLWNvbC10YWJsZSB0aGVhZCB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogNTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cbi5maXhlZC1jb2wtdGFibGUgdGguY29sLWNvbDEsIC5maXhlZC1jb2wtdGFibGUgdGQuY29sLWNvbDEge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiAxMDtcbn1cbi5maXhlZC1jb2wtdGFibGUgdGguY29sLWNvbDIsIC5maXhlZC1jb2wtdGFibGUgdGQuY29sLWNvbDIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5O1xufVxuLmZpeGVkLWNvbC10YWJsZSB0aGVhZCB0aC5jb2wtY29sMSxcbi5maXhlZC1jb2wtdGFibGUgdGhlYWQgdGguY29sLWNvbDIge1xuICB6LWluZGV4OiAyMDtcbn1cblxuLm92ZXJmbG93LXgtc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SalaryReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryReportsComponent", function() { return SalaryReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__);














Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('vi', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__["viLocale"]);


var SalaryReportsComponent = /** @class */ (function () {
    function SalaryReportsComponent(translate, http, datePipe, authenticationService, sanitizer, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.datePipe = datePipe;
        this.authenticationService = authenticationService;
        this.sanitizer = sanitizer;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.currentMonth = this.datePipe.transform(new Date(), 'yyyy-MM');
        this.month = this.datePipe.transform(new Date(), 'yyyy-MM');
        this.defects = [];
        this.leaves = [];
        this.totalSalary = {};
        this.settings = { personal: 0, dependent: 0 };
        this.holidays = [];
        this.workingInMonth = 0;
        this.salaryFilterKey = 'salary';
        this.exportTableData = [];
        this.daysInMonth = [{}];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'csv',
            elementIdOrContent: 'export_table',
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM',
            containerClass: 'theme-red',
            minMode: 'month',
            maxDate: new Date(),
            locale: 'vi',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    SalaryReportsComponent.prototype.ngOnInit = function () {
        // this.month = this.datePipe.transform("2025-08", 'yyyy-MM');
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.loadDatatable();
    };
    SalaryReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        this.getWorkingDays(this.month);
        this.http.post(this.apiUrl + '/api/defect/defect-report', { month: this.month, action: 'salary' }, {})
            .subscribe(function (resp) {
            _this.exportTableData = resp.data;
            _this.leaves = resp.leaves;
            _this.holidays = resp.holidays;
            _this.settings = resp.settings;
            _this.exportTableData.forEach(function (element, index) {
                var timesheetconvert = _this.exportTableDataArray(element.timesheet);
                element.timesheet = timesheetconvert.data;
                element.timesheet_total = timesheetconvert.total;
                var timesheetconvertOT = _this.exportTableDataArray(element.timesheet_ot);
                element.timesheet_ot = timesheetconvertOT.data;
                element.timesheet_ot_total = timesheetconvertOT.total;
                element.actual_working_day = 0;
                element.timesheet.forEach(function (element2, index2) {
                    element2.check = _this.compareValues(element2, 8.5);
                    if (element2.check) {
                        element.actual_working_day++;
                    }
                });
                element.allowance = 0;
                _this.leaves.forEach(function (leave) {
                    if (element.id == leave.user_id && leave.leave_type_id == 3) {
                        element.allowance += leave.total;
                    }
                });
                element.total_day = _this.getTimesheetTotal(element, 'day');
                element.total_leave = _this.getTimesheetTotal(element, 'leave');
                element.total_total = _this.getTimesheetTotal(element, 'total');
            });
            _this.getSalaryByUser();
            _this.isPageLoaded = true;
        });
        return;
    };
    SalaryReportsComponent.prototype.getWorkingDays = function (month) {
        var _a = month.split('-').map(Number), year = _a[0], monthStr = _a[1];
        var daysInMonth = new Date(year, monthStr, 0).getDate();
        var workingDays = 0;
        for (var day = 1; day <= daysInMonth; day++) {
            var current = new Date(year, monthStr - 1, day);
            var dow = current.getDay();
            if (dow !== 0 && dow !== 6) {
                workingDays++;
            }
        }
        this.workingInMonth = workingDays;
    };
    SalaryReportsComponent.prototype.filterByStatus = function (key) {
        this.salaryFilterKey = key;
    };
    SalaryReportsComponent.prototype.exportTableDataArray = function (data) {
        var total = 0;
        var dataReturn = Object.keys(data).map(function (key) {
            var value = parseFloat(data[key]);
            if (isNaN(value))
                value = 0;
            total += value;
            return {
                key: key,
                value: value
            };
        });
        return { total: total, data: dataReturn };
    };
    SalaryReportsComponent.prototype.getTimesheetTotal = function (user, type) {
        if (type === void 0) { type = false; }
        // let timesheet_total = user.timesheet_total;
        var timesheet_leave = 0;
        var timesheet_holiday = 0;
        var timesheet_day = 0;
        this.holidays.forEach(function (element, index) {
            timesheet_holiday += 1;
        });
        this.leaves.forEach(function (element, index) {
            if (user.id == element.user_id && element.leave_type_id == 1) {
                if (element.duration == 'half') {
                    timesheet_leave += 0.5;
                }
                else {
                    timesheet_leave += 1;
                }
            }
        });
        // console.log(user.timesheet);
        user.timesheet.forEach(function (element, index) {
            if (element) {
                switch (element.value) {
                    case 8.5:
                    case "8.5":
                        timesheet_day += 1;
                        break;
                    case 4.5:
                    case "4.5":
                        timesheet_day += 0.5;
                        break;
                    case 4:
                    case "4":
                        timesheet_day += 0.5;
                        break;
                    default:
                        break;
                }
            }
        });
        var total = 0;
        switch (type) {
            case 'day':
                total = timesheet_day + timesheet_holiday;
                break;
            case 'leave':
                total = timesheet_leave;
                break;
            case 'total':
                total = timesheet_day + timesheet_holiday + timesheet_leave;
                break;
        }
        return total;
    };
    SalaryReportsComponent.prototype.getTimesheetByDay = function (user, j) {
        var currentDate = new Date(this.month + "/" + (j + 1));
        var currentDay = currentDate.getDate();
        var holiday = this.holidays.find(function (element) {
            var holidayDate = new Date(element.date);
            return currentDay === holidayDate.getDate();
        });
        if (holiday) {
            return ('<div class="cell table-cell-green" title="Holiday">L</div>');
        }
        var timesheet_total = 0;
        for (var _i = 0, _a = this.leaves; _i < _a.length; _i++) {
            var element = _a[_i];
            var leave_date = new Date(element.leave_date);
            if (user.id == element.user_id && currentDay === leave_date.getDate()) {
                if (element.leave_type_id == 2) {
                    if (element.duration == 'half') {
                        return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell table-cell-red\" title=\"Ngh\u1EC9 kh\u00F4ng ph\u00E9p (Half)\">/</div>");
                    }
                    else {
                        return this.sanitizer.bypassSecurityTrustHtml('<div class="cell table-cell-red" title="Nghỉ không phép (Full)"></div>');
                    }
                }
                else {
                    if (element.duration == 'half') {
                        if (element.duration_type == 'first_half') {
                            timesheet_total = timesheet_total + 4;
                        }
                        else {
                            timesheet_total = timesheet_total + 4.5;
                        }
                    }
                    else {
                        return this.sanitizer.bypassSecurityTrustHtml('<div class="cell table-cell-indigo" title="Nghỉ có phép (Full)">P</div>');
                    }
                }
            }
        }
        if (timesheet_total > 0) {
            return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell table-cell-yellow\" title=\"Ngh\u1EC9 c\u00F3 ph\u00E9p (Half)\">/</div>");
        }
        else {
            if (user.timesheet[j] && user.timesheet[j].check) {
                if (user.timesheet[j].value == 8.5) {
                    return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell\">x</div>");
                }
                else {
                    return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell\"></div>");
                }
            }
        }
        return '';
    };
    // getSalaryByUser(user: any, j: any, action: any) {
    SalaryReportsComponent.prototype.getSalaryByUser = function () {
        var _this = this;
        this.totalSalary.total1 = 0;
        this.totalSalary.total2 = 0;
        this.totalSalary.total3 = 0;
        this.totalSalary.total4 = 0;
        this.totalSalary.total5 = 0;
        this.totalSalary.total6 = 0;
        this.totalSalary.total7 = 0;
        this.totalSalary.total8 = 0;
        this.totalSalary.total9 = 0;
        this.totalSalary.total10 = 0;
        this.totalSalary.total11 = 0;
        this.totalSalary.total12 = 0;
        this.totalSalary.total13 = 0;
        this.totalSalary.total14 = 0;
        this.totalSalary.total15 = 0;
        this.totalSalary.total16 = 0;
        this.totalSalary.total17 = 0;
        this.totalSalary.total18 = 0;
        this.totalSalary.total19 = 0;
        this.totalSalary.total20 = 0;
        this.totalSalary.total21 = 0;
        this.totalSalary.total22 = 0;
        this.totalSalary.total23 = 0;
        this.totalSalary.total24 = 0;
        this.totalSalary.total25 = 0;
        this.totalSalary.total26 = 0;
        this.totalSalary.total27 = 0;
        this.totalSalary.total28 = 0;
        this.totalSalary.total29 = 0;
        this.totalSalary.total30 = 0;
        this.totalSalary.total31 = 0;
        this.totalSalary.total32 = 0;
        this.exportTableData.forEach(function (user, index) {
            var res = '0';
            var timesheet_day = 0;
            var timesheet_ot_day = 0;
            var salary1day = (user.contract.basic + user.contract.performance) / (_this.workingInMonth);
            user.salary_basic = 0;
            user.salary_performance = 0;
            user.salary_lunch = 0;
            user.salary_total = 0;
            user.salary_working_day = 0;
            user.salary_working_salary = 0;
            user.salary_leave_salary = 0;
            user.salary_sum_of_sums = 0;
            user.salary_dependents = 0;
            user.salary_BHBB = 0;
            user.salary_personal_income_taxt = 0;
            user.salary_ot_working_day = 0;
            user.salary_ot_working_salary = 0;
            if (user.contract && user.contract.id) {
                user.salary_basic = user.contract.basic;
                user.salary_performance = user.contract.performance;
                user.salary_total_real = user.contract.basic + user.contract.performance;
                user.salary_lunch = user.contract.lunch;
                user.salary_total = user.contract.basic + user.contract.performance;
                user.timesheet.forEach(function (element, index) {
                    if (element) {
                        switch (element.value) {
                            case 8.5:
                                timesheet_day += 1;
                                break;
                            case 4.5:
                                timesheet_day += 0.5;
                                break;
                            case 4:
                                timesheet_day += 0.5;
                                break;
                            default:
                                break;
                        }
                    }
                });
                user.timesheet_ot.forEach(function (element, index) {
                    if (element) {
                        timesheet_ot_day += element.value;
                    }
                });
                user.salary_working_day = timesheet_day;
                user.salary_working_salary = user.salary_working_day * salary1day;
                user.salary_ot_working_day = timesheet_ot_day;
                user.salary_ot_working_salary = timesheet_ot_day * salary1day / 8.5 * 1.5;
                var leave_day_1 = 0;
                _this.holidays.forEach(function (element, index) {
                    leave_day_1 += 1;
                });
                _this.leaves.forEach(function (element, index) {
                    if (user.id == element.user_id && element.leave_type_id == 1) {
                        if (element.duration == 'half') {
                            leave_day_1 += 0.5;
                        }
                        else {
                            leave_day_1 += 1;
                        }
                    }
                });
                user.salary_leave_salary = leave_day_1 * salary1day;
                user.salary_sum_of_sums = user.contract.lunch + user.salary_leave_salary + user.salary_working_salary + user.allowance + user.salary_ot_working_salary;
                user.salary_dependents = user.dependents * _this.settings.dependent;
                user.salary_BHBB = user.salary_basic * _this.settings.bhbb / 100;
                user.salary_personal_income_taxt = user.salary_dependents + _this.settings.personal + user.salary_lunch + user.salary_BHBB;
                _this.totalSalary.total1 += user.salary_total;
                _this.totalSalary.total2 += user.salary_basic;
                _this.totalSalary.total3 += user.salary_performance;
                _this.totalSalary.total4 += user.salary_total_real;
                _this.totalSalary.total5 += user.salary_working_day;
                _this.totalSalary.total6 += user.salary_working_salary;
                _this.totalSalary.total7 += user.salary_leave_salary;
                _this.totalSalary.total8 += 0;
                _this.totalSalary.total9 += 0;
                _this.totalSalary.total10 += 0;
                _this.totalSalary.total11 += 0;
                _this.totalSalary.total12 += user.salary_lunch;
                _this.totalSalary.total13 += 0;
                _this.totalSalary.total14 += 0;
                _this.totalSalary.total15 += user.salary_sum_of_sums;
                _this.totalSalary.total16 += user.dependents;
                _this.totalSalary.total17 += user.salary_dependents;
                _this.totalSalary.total18 += _this.settings.personal;
                _this.totalSalary.total19 += user.salary_lunch;
                _this.totalSalary.total20 += 0;
                _this.totalSalary.total21 += user.salary_BHBB;
                _this.totalSalary.total22 += user.salary_personal_income_taxt;
                _this.totalSalary.total23 += ((user.salary_sum_of_sums - user.salary_personal_income_taxt) <= 0 ? 0 : (user.salary_sum_of_sums - user.salary_personal_income_taxt));
                _this.totalSalary.total24 += (_this.getPersonalIncomeTax((user.salary_sum_of_sums - user.salary_personal_income_taxt) <= 0 ? 0 : (user.salary_sum_of_sums - user.salary_personal_income_taxt)));
                _this.totalSalary.total25 += user.salary_BHBB;
                _this.totalSalary.total26 += (user.salary_basic * _this.settings.dpcd / 100) > 234000 ? 234000 : (user.salary_basic * _this.settings.dpcd / 100);
                _this.totalSalary.total27 += 0;
                _this.totalSalary.total28 += 0;
                _this.totalSalary.total29 += user.salary_sum_of_sums - user.salary_BHBB - _this.getPersonalIncomeTax((user.salary_sum_of_sums - user.salary_personal_income_taxt) <= 0 ? 0 : (user.salary_sum_of_sums - user.salary_personal_income_taxt));
                _this.totalSalary.total30 += user.salary_basic * _this.settings.dnbhbb / 100 - user.salary_BHBB;
                _this.totalSalary.total31 += user.salary_basic * _this.settings.dndpcd / 100;
                _this.totalSalary.total32 += user.salary_sum_of_sums + (user.salary_basic * _this.settings.dnbhbb / 100 - user.salary_BHBB) + (user.salary_basic * _this.settings.dndpcd / 100);
            }
        });
    };
    SalaryReportsComponent.prototype.formatNumber = function (res) {
        return new Intl.NumberFormat('vi-VN').format(Number(res));
    };
    SalaryReportsComponent.prototype.getPersonalIncomeTax = function (AA39) {
        if (AA39 <= 0)
            return 0;
        var tax = 0;
        if (AA39 <= 5000000) {
            tax = AA39 * 0.05;
        }
        else if (AA39 <= 10000000) {
            tax = 250000 + (AA39 - 5000000) * 0.10;
        }
        else if (AA39 <= 18000000) {
            tax = 750000 + (AA39 - 10000000) * 0.15;
        }
        else if (AA39 <= 32000000) {
            tax = 1950000 + (AA39 - 18000000) * 0.20;
        }
        else if (AA39 <= 52000000) {
            tax = 4750000 + (AA39 - 32000000) * 0.25;
        }
        else if (AA39 <= 80000000) {
            tax = 9750000 + (AA39 - 52000000) * 0.30;
        }
        else {
            tax = 18150000 + (AA39 - 80000000) * 0.35;
        }
        return Math.round(tax);
    };
    SalaryReportsComponent.prototype.compareValues = function (timesheet, working_hours) {
        var isEqual = Number(timesheet.value) === Number(working_hours);
        var todayCheck = new Date(timesheet.key);
        var isSaturday = todayCheck.getDay() === 6;
        var weekOfMonth = this.getWeekOfMonth(todayCheck);
        // const isSecondOrFourthWeek = (weekOfMonth === 2 || weekOfMonth === 4);
        var newDate = new Date();
        var today = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfDay"])(new Date(newDate.getFullYear(), newDate.getMonth(), 25));
        var currentWeekMonday = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfWeek"])(today, { weekStartsOn: 1 });
        var isWeekdayAndFuture = todayCheck > currentWeekMonday && Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDay"])(todayCheck) >= 1 && Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDay"])(todayCheck) <= 5;
        return isEqual;
        // (isSaturday && isSecondOrFourthWeek) ||
        //  isWeekdayAndFuture;
    };
    SalaryReportsComponent.prototype.getWeekOfMonth = function (date) {
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var firstDayOfWeek = firstDay.getDay();
        var dayOfMonth = date.getDate();
        return Math.ceil((dayOfMonth + firstDayOfWeek) / 7);
    };
    SalaryReportsComponent.prototype.nextMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["addMonths"])(this.month, 1));
    };
    SalaryReportsComponent.prototype.preMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["subMonths"])(this.month, 1));
    };
    SalaryReportsComponent.prototype.changeMonth = function (selectedDate) {
        this.month = this.datePipe.transform(selectedDate, 'yyyy-MM');
        // this.month = this.datePipe.transform("2025-08", 'yyyy-MM');
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.loadDatatable();
    };
    SalaryReportsComponent.prototype.getTotalDaysInMonth = function (date) {
        var start = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfMonth"])(date);
        var end = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["endOfMonth"])(date);
        var daysInMonth = [];
        for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
            daysInMonth.push({ date: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(d), 'YYYY-MM-DD'), stt: Number(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(d), 'd')), day: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDate"])(new Date(d)) });
        }
        return daysInMonth;
    };
    SalaryReportsComponent.prototype.exportFiles = function () {
        if (this.salaryFilterKey === 'salary') {
            this.exportFilesSalary();
        }
        if (this.salaryFilterKey === 'timesheet') {
            this.exportFilesTimeSheet();
        }
    };
    SalaryReportsComponent.prototype.exportFilesSalary = function () {
        var _this = this;
        this.http.post(this.apiUrl + '/api/defect/export-salary', { month: this.month, data: this.exportTableData, workingInMonth: this.workingInMonth, settings: this.settings, daysInMonth: this.daysInMonth, holidays: this.holidays, leaves: this.leaves }, { responseType: 'blob' })
            .subscribe(function (blob) {
            var link = document.createElement('a');
            var url = window.URL.createObjectURL(blob);
            link.href = url;
            link.download = 'salary_' + _this.month + '.xlsx';
            link.click();
            window.URL.revokeObjectURL(url);
        });
    };
    SalaryReportsComponent.prototype.exportFilesTimeSheet = function () {
        var _this = this;
        this.http.post(this.apiUrl + '/api/defect/export-timesheet', { data: this.exportTableData, daysInMonth: this.daysInMonth, workingInMonth: this.workingInMonth, month: this.month, holidays: this.holidays, leaves: this.leaves, action: 'day' }, { responseType: 'blob' })
            .subscribe(function (blob) {
            var link = document.createElement('a');
            var url = window.URL.createObjectURL(blob);
            link.href = url;
            link.download = 'timesheet_' + _this.month + '.xlsx';
            link.click();
            window.URL.revokeObjectURL(url);
        });
    };
    SalaryReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    SalaryReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.exportTableData.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    SalaryReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], SalaryReportsComponent.prototype, "dtElement", void 0);
    SalaryReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./salary-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./salary-reports.component.scss */ "./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], SalaryReportsComponent);
    return SalaryReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/task-reports/task-reports.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvdGFzay1yZXBvcnRzL3Rhc2stcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvdGFzay1yZXBvcnRzL3Rhc2stcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL3Rhc2stcmVwb3J0cy90YXNrLXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufSIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/task-reports/task-reports.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TaskReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskReportsComponent", function() { return TaskReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);











var TaskReportsComponent = /** @class */ (function () {
    function TaskReportsComponent(translate, http, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtOptions = {};
        this.tasks = [];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'tasks_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TaskReportsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    TaskReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            searching: true,
            processing: true,
            responsive: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'width': "5%",
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
                    'target': [8]
                },
                {
                    'sortable': false,
                    'target': [9]
                }, {
                    'sortable': false,
                    'target': [10]
                },
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('reports.headings.task_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('reports.headings.task_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('reports.headings.task_report'),
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
                _this.http
                    .post(_this.apiUrl + '/api/tasks/task-report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.tasks = resp.data;
                    _this.isPageLoaded = true;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    TaskReportsComponent.prototype.convertTimeToDecimal = function (time) {
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
    TaskReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.task_report')).subscribe(function () { });
    };
    TaskReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TaskReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.tasks.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    TaskReportsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                        that.search(this['value']).draw();
                    }
                });
            });
        });
    };
    TaskReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], TaskReportsComponent.prototype, "dtElement", void 0);
    TaskReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/task-reports/task-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-reports.component.scss */ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], TaskReportsComponent);
    return TaskReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/user-reports/user-reports.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/user-reports/user-reports.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvdXNlci1yZXBvcnRzL3VzZXItcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvdXNlci1yZXBvcnRzL3VzZXItcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL3VzZXItcmVwb3J0cy91c2VyLXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuIiwiOjpuZy1kZWVwIC5vZGQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/user-reports/user-reports.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/user-reports/user-reports.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportsComponent", function() { return UserReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_16__);















Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('vi', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__["viLocale"]);


var UserReportsComponent = /** @class */ (function () {
    function UserReportsComponent(translate, http, datePipe, authenticationService, timesheetService, sanitizer, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.datePipe = datePipe;
        this.authenticationService = authenticationService;
        this.timesheetService = timesheetService;
        this.sanitizer = sanitizer;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtOptions = {};
        this.currentMonth = this.datePipe.transform(new Date(), 'yyyy-MM');
        this.month = this.datePipe.transform(new Date(), 'yyyy-MM');
        this.defects = [];
        this.leaves = [];
        this.users = [];
        this.usersTimesheet = [];
        this.usersTimesheetTable = [];
        this.holidays = [];
        this.department = [];
        this.workingInMonth = 0;
        this.FilterKey = 'user_list';
        this.exportTableData = [];
        this.daysInMonth = [{}];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'csv',
            elementIdOrContent: 'export_table',
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM',
            containerClass: 'theme-red',
            minMode: 'month',
            maxDate: new Date(),
            locale: 'vi',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    UserReportsComponent.prototype.ngOnInit = function () {
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.getUsers();
        this.loadDatatable();
    };
    UserReportsComponent.prototype.getUsers = function () {
        var _this = this;
        this.timesheetService.getUserMonthSelect(this.month).subscribe(function (data) {
            // if(data['role']['department_name'] != 'Administration' && data['role']['department_name'] != 'BOD'){
            //     const allUsers = data['data'] || [];
            //     this.users = allUsers.filter(user => {
            //         return this.loginUser && user.id !== this.loginUser.id;
            //     });
            // } else {
            //     this.users = data['data'];
            // }
            _this.getWorkingDays(_this.month);
            _this.users = data['data'];
            _this.users.forEach(function (element, index) {
                element.salarytohour = 0;
                element.timesheet_billable = Number(element.timesheet_billable);
                element.timesheet_non_billable = Number(element.timesheet_non_billable);
                element.timesheet_non_billable = Number(element.timesheet_non_billable);
                if (element.contract && element.contract.salary) {
                    element.salarytohour = Number(element.contract.salary) / _this.workingInMonth / 8.5;
                }
            });
            _this.department = data['role'];
        });
    };
    UserReportsComponent.prototype.getTotalByDay = function (usersTimesheetTable, day) {
        var dayStr = day < 10 ? '0' + day : day.toString();
        var dateKey = this.month + "-" + dayStr;
        var total = 0;
        for (var userKey in usersTimesheetTable) {
            var userDays = usersTimesheetTable[userKey];
            var tasks = userDays[dateKey];
            if (tasks && tasks.length) {
                total += tasks.reduce(function (sum, t) { return sum + (parseFloat(t.decimal_time) || 0); }, 0);
            }
        }
        if (this.FilterKey == 'normal') {
            var currentDate = new Date(dateKey);
            var currentDay_1 = currentDate.getDate();
            var holiday = this.holidays.find(function (element) {
                var holidayDate = new Date(element.date);
                return currentDay_1 === holidayDate.getDate();
            });
            if (holiday) {
                return ('<div class="cell table-cell-green" title="Holiday">8.5</div>');
            }
            var timesheet_total = 0;
            for (var _i = 0, _a = this.leaves; _i < _a.length; _i++) {
                var element = _a[_i];
                var leave_date = new Date(element.leave_date);
                if (this.users_id == element.user_id && currentDay_1 === leave_date.getDate()) {
                    if (element.leave_type_id == 2) {
                        if (element.duration == 'half') {
                            return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell table-cell-red\" title=\"Ngh\u1EC9 kh\u00F4ng ph\u00E9p (Half)\">" + Number(total).toFixed(1) + "</div>");
                        }
                        else {
                            return this.sanitizer.bypassSecurityTrustHtml('<div class="cell table-cell-red" title="Nghỉ không phép (Full)">OFF</div>');
                        }
                    }
                    else {
                        if (element.duration == 'half') {
                            if (element.duration_type == 'first_half') {
                                timesheet_total = timesheet_total + 4;
                            }
                            else {
                                timesheet_total = timesheet_total + 4.5;
                            }
                        }
                        else {
                            return this.sanitizer.bypassSecurityTrustHtml('<div class="cell table-cell-indigo" title="Nghỉ có phép (Full)">8.5</div>');
                        }
                    }
                }
            }
            if (timesheet_total > 0) {
                return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell table-cell-yellow\" title=\"Ngh\u1EC9 c\u00F3 ph\u00E9p (Half)\">" + Number(total + timesheet_total).toFixed(1) + "</div>");
            }
            else {
                if (total > 0) {
                    return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell\">" + Number(total).toFixed(1) + "</div>");
                }
            }
            return '';
        }
        else {
            return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell\">" + Number(total).toFixed(1) + "</div>");
        }
    };
    UserReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        this.getWorkingDays(this.month);
        this.http.post(this.apiUrl + '/api/defect/defect-report', { month: this.month, action: 'user' }, {})
            .subscribe(function (resp) {
            _this.usersTimesheet = resp.data;
            _this.leaves = resp.leaves;
            _this.holidays = resp.holidays;
            if (_this.users_id && _this.users_id != '' && _this.users_id != 'my') {
                _this.usersTimesheetTable = [];
                _this.usersTimesheet.forEach(function (element, index) {
                    if (_this.users_id == element.id) {
                        _this.usersTimesheetTable = _this.groupTimesheetByProject(element);
                    }
                });
            }
            _this.isPageLoaded = true;
        });
        return;
    };
    UserReportsComponent.prototype.getWorkingDays = function (month) {
        var _a = month.split('-').map(Number), year = _a[0], monthStr = _a[1];
        var daysInMonth = new Date(year, monthStr, 0).getDate();
        var workingDays = 0;
        for (var day = 1; day <= daysInMonth; day++) {
            var current = new Date(year, monthStr - 1, day);
            var dow = current.getDay();
            if (dow !== 0 && dow !== 6) {
                workingDays++;
            }
        }
        this.workingInMonth = workingDays;
    };
    UserReportsComponent.prototype.exportTableDataArray = function (data) {
        var total = 0;
        var dataReturn = Object.keys(data).map(function (key) {
            var value = parseFloat(data[key]);
            if (isNaN(value))
                value = 0;
            total += value;
            return {
                key: key,
                value: value
            };
        });
        return { total: total, data: dataReturn };
    };
    UserReportsComponent.prototype.getTimesheetTotal = function (user) {
        var timesheet_total = user.timesheet_total;
        this.holidays.forEach(function (element, index) {
            timesheet_total = timesheet_total + 8.5;
        });
        this.leaves.forEach(function (element, index) {
            if (user.id == element.user_id && element.leave_type_id == 1) {
                if (element.duration == 'half') {
                    if (element.duration_type == 'first_half') {
                        timesheet_total = timesheet_total + 4;
                    }
                    else {
                        timesheet_total = timesheet_total + 4.5;
                    }
                }
                else {
                    timesheet_total = timesheet_total + 8.5;
                }
            }
        });
        return timesheet_total;
    };
    UserReportsComponent.prototype.getTimesheetByDay = function (user, j) {
        var currentDate = new Date(this.month + "-" + (j + 1));
        var currentDay = currentDate.getDate();
        var holiday = this.holidays.find(function (element) {
            var holidayDate = new Date(element.date);
            return currentDay === holidayDate.getDate();
        });
        if (holiday) {
            return ('<div class="cell table-cell-green" title="Holiday">8.5</div>');
        }
        var timesheet_total = 0;
        for (var _i = 0, _a = this.leaves; _i < _a.length; _i++) {
            var element = _a[_i];
            var leave_date = new Date(element.leave_date);
            if (user.id == element.user_id && currentDay === leave_date.getDate()) {
                if (element.leave_type_id == 2) {
                    if (element.duration == 'half') {
                        return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell table-cell-red\" title=\"Ngh\u1EC9 kh\u00F4ng ph\u00E9p (Half)\">" + Number(user.timesheet[j].value).toFixed(1) + "</div>");
                    }
                    else {
                        return this.sanitizer.bypassSecurityTrustHtml('<div class="cell table-cell-red" title="Nghỉ không phép (Full)">OFF</div>');
                    }
                }
                else {
                    if (element.duration == 'half') {
                        if (element.duration_type == 'first_half') {
                            timesheet_total = timesheet_total + 4;
                        }
                        else {
                            timesheet_total = timesheet_total + 4.5;
                        }
                    }
                    else {
                        return this.sanitizer.bypassSecurityTrustHtml('<div class="cell table-cell-indigo" title="Nghỉ có phép (Full)">8.5</div>');
                    }
                }
            }
        }
        if (timesheet_total > 0) {
            return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell table-cell-yellow\" title=\"Ngh\u1EC9 c\u00F3 ph\u00E9p (Half)\">" + Number(user.timesheet[j].value + timesheet_total).toFixed(1) + "</div>");
        }
        else {
            if (user.timesheet[j] && user.timesheet[j].check) {
                return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell\">" + Number(user.timesheet[j].value).toFixed(1) + "</div>");
            }
        }
        return '';
    };
    UserReportsComponent.prototype.compareValues = function (timesheet, working_hours) {
        var isEqual = Number(timesheet.value) === Number(working_hours);
        var todayCheck = new Date(timesheet.key);
        var isSaturday = todayCheck.getDay() === 6;
        var weekOfMonth = this.getWeekOfMonth(todayCheck);
        // const isSecondOrFourthWeek = (weekOfMonth === 2 || weekOfMonth === 4);
        var newDate = new Date();
        var today = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfDay"])(new Date(newDate.getFullYear(), newDate.getMonth(), 25));
        var currentWeekMonday = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfWeek"])(today, { weekStartsOn: 1 });
        var isWeekdayAndFuture = todayCheck > currentWeekMonday && Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDay"])(todayCheck) >= 1 && Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDay"])(todayCheck) <= 5;
        return isEqual;
        // (isSaturday && isSecondOrFourthWeek) ||
        //  isWeekdayAndFuture;
    };
    UserReportsComponent.prototype.getWeekOfMonth = function (date) {
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var firstDayOfWeek = firstDay.getDay();
        var dayOfMonth = date.getDate();
        return Math.ceil((dayOfMonth + firstDayOfWeek) / 7);
    };
    UserReportsComponent.prototype.nextMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["addMonths"])(this.month, 1));
    };
    UserReportsComponent.prototype.preMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["subMonths"])(this.month, 1));
    };
    UserReportsComponent.prototype.filterByStatus = function (key) {
        var _this = this;
        this.FilterKey = key;
        this.usersTimesheetTable = [];
        this.usersTimesheet.forEach(function (element, index) {
            if (_this.users_id == element.id) {
                _this.usersTimesheetTable = _this.groupTimesheetByProject(element);
            }
        });
    };
    UserReportsComponent.prototype.changeMonth = function (selectedDate) {
        this.month = this.datePipe.transform(selectedDate, 'yyyy-MM');
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        // this.loadDatatable();
        this.getUsers();
    };
    UserReportsComponent.prototype.getTotalDaysInMonth = function (date) {
        var start = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfMonth"])(date);
        var end = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["endOfMonth"])(date);
        var daysInMonth = [];
        for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
            daysInMonth.push({ date: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(d), 'YYYY-MM-DD'), stt: Number(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(d), 'd')), day: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDate"])(new Date(d)) });
        }
        return daysInMonth;
    };
    UserReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsService.save(this.exportAsConfig, 'Timesheet').subscribe(function () {
        });
    };
    UserReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.exportTableData.forEach(function (element, index) {
            if (element.id == _this.users_id) {
                // console.log(element);
            }
        });
        // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // 	dtInstance.destroy();
        // 	setTimeout(() => {
        // 		this.dtTrigger.next();
        // 		if(this.exportTableData.length > 0) {
        // 			$('.tfoot_dt').addClass('d-none');
        // 		} else {
        // 			$('.tfoot_dt').removeClass('d-none');
        // 		}
        // 	});
        // });
    };
    UserReportsComponent.prototype.changeUser = function (event) {
        var _this = this;
        if (event) {
            this.users_id = event.id;
        }
        else {
            this.users_id = '';
        }
        this.usersTimesheetTable = [];
        this.usersTimesheet.forEach(function (element, index) {
            if (_this.users_id == element.id) {
                _this.usersTimesheetTable = _this.groupTimesheetByProject(element);
            }
        });
        this.rerender();
    };
    UserReportsComponent.prototype.groupTimesheetByProject = function (user) {
        var grouped = {};
        if (this.FilterKey == 'normal') {
            user.timesheet.forEach(function (t) {
                var key = t.project_name + "__" + t.task_name;
                if (!grouped[key])
                    grouped[key] = {};
                if (!grouped[key][t.date])
                    grouped[key][t.date] = [];
                grouped[key][t.date].push(t);
            });
        }
        else {
            // OT
            user.timesheet_ot.forEach(function (t) {
                var key = t.project_name + "__" + t.task_name;
                if (!grouped[key])
                    grouped[key] = {};
                if (!grouped[key][t.date])
                    grouped[key][t.date] = [];
                grouped[key][t.date].push(t);
            });
        }
        return grouped;
    };
    UserReportsComponent.prototype.getTotalByTask = function (value) {
        var total = 0;
        for (var dateKey in value) {
            var tasks = value[dateKey];
            if (Array.isArray(tasks)) {
                total += tasks.reduce(function (sum, t) {
                    return sum + (parseFloat(t.decimal_time) || 0);
                }, 0);
            }
        }
        return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell\">" + total + "</div>");
        // const totalByTask: any = {};
        // for (const userKey in data) {
        //   const userDays = data[userKey];
        //   for (const dateKey in userDays) {
        //     const tasks = userDays[dateKey];
        //     tasks.forEach((t: any) => {
        //       const taskKey = `${t.project_name}__${t.task_name}`;
        //       if (!totalByTask[taskKey]) totalByTask[taskKey] = 0;
        //       totalByTask[taskKey] += parseFloat(t.decimal_time) || 0;
        //     });
        //   }
        // }
        // return this.sanitizer.bypassSecurityTrustHtml(  `<div class="cell">${Number(totalByTask).toFixed(1)}</div>`);
    };
    UserReportsComponent.prototype.getGrandTotal = function (usersTimesheetTable) {
        // console.log(usersTimesheetTable);
        var total = 0;
        for (var userKey in usersTimesheetTable) {
            var userDays = usersTimesheetTable[userKey];
            for (var dateKey in userDays) {
                var tasks = userDays[dateKey];
                total += tasks.reduce(function (sum, t) { return sum + (parseFloat(t.decimal_time) || 0); }, 0);
            }
        }
        return this.sanitizer.bypassSecurityTrustHtml("<div class=\"cell\">" + Number(total).toFixed(1) + "</div>");
    };
    UserReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_14__["TimesheetService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], UserReportsComponent.prototype, "dtElement", void 0);
    UserReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/user-reports/user-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-reports.component.scss */ "./src/app/modules/pm/reports/components/user-reports/user-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_14__["TimesheetService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], UserReportsComponent);
    return UserReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/pages/reports/reports.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pm/reports/pages/reports/reports.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9wYWdlcy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/reports/pages/reports/reports.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/pm/reports/pages/reports/reports.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
        this.activeActiveReportTab = '1';
    }
    ReportsComponent.prototype.ngOnInit = function () { };
    ReportsComponent.prototype.setActiveReportTab = function ($event) {
        this.activeActiveReportTab = $event.id;
    };
    ReportsComponent.prototype.getActiveReportTab = function (tab) {
        return this.activeActiveReportTab === tab;
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/pages/reports/reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.scss */ "./src/app/modules/pm/reports/pages/reports/reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/reports-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/pm/reports/reports-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/modules/pm/reports/pages/reports/reports.component.ts");





var routes = [
    {
        path: '',
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
        component: _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"],
        data: {
            permissions: {
                only: ['reports_view']
            }
        }
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/reports.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/pm/reports/reports.module.ts ***!
  \******************************************************/
/*! exports provided: ReportsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/modules/pm/reports/reports-routing.module.ts");
/* harmony import */ var _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../admin/todo/todo.module */ "./src/app/modules/admin/todo/todo.module.ts");
/* harmony import */ var _components_project_reports_project_reports_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/project-reports/project-reports.component */ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.ts");
/* harmony import */ var _components_task_reports_task_reports_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/task-reports/task-reports.component */ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.ts");
/* harmony import */ var _components_defect_reports_defect_reports_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/defect-reports/defect-reports.component */ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.ts");
/* harmony import */ var _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user-reports/user-reports.component */ "./src/app/modules/pm/reports/components/user-reports/user-reports.component.ts");
/* harmony import */ var _components_allowance_reports_allowance_reports_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/allowance-reports/allowance-reports.component */ "./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.ts");
/* harmony import */ var _components_payment_reports_payment_reports_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/payment-reports/payment-reports.component */ "./src/app/modules/pm/reports/components/payment-reports/payment-reports.component.ts");
/* harmony import */ var _components_salary_reports_salary_reports_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/salary-reports/salary-reports.component */ "./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.ts");
/* harmony import */ var _components_incident_reports_incident_reports_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/incident-reports/incident-reports.component */ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.ts");
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/modules/pm/reports/pages/reports/reports.component.ts");
/* harmony import */ var _file_browser_pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./../../file-browser/pages/file-browser/file-browser.component */ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.ts");
/* harmony import */ var _file_browser_components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./../../file-browser/components/upload-files-model/upload-files-model.component */ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.ts");
/* harmony import */ var _file_browser_components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./../../file-browser/components/create-folder-model/create-folder-model.component */ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.ts");
/* harmony import */ var _file_browser_components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./../../file-browser/components/edit-folder-modal/edit-folder-modal.component */ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.ts");
/* harmony import */ var _file_browser_components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./../../file-browser/components/edit-file-modal/edit-file-modal.component */ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.ts");
/* harmony import */ var _admin_user_user_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./../../admin/user/user.module */ "./src/app/modules/admin/user/user.module.ts");



























;






// import { UserDetailComponent } from './../../admin/user/pages/user-detail/user-detail.component';
// import { UserDetailUpdateComponent } from './../../admin/user/components/user-detail-update/user-detail-update.component';
// import { UserProjectsComponent } from './../../admin/user/components/user-projects/user-projects.component';
// import { UserTasksComponent } from './../../admin/user/components/user-tasks/user-tasks.component';

var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_project_reports_project_reports_component__WEBPACK_IMPORTED_MODULE_19__["ProjectReportsComponent"],
                _components_task_reports_task_reports_component__WEBPACK_IMPORTED_MODULE_20__["TaskReportsComponent"],
                _components_defect_reports_defect_reports_component__WEBPACK_IMPORTED_MODULE_21__["DefectReportsComponent"],
                _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_22__["UserReportsComponent"],
                _components_allowance_reports_allowance_reports_component__WEBPACK_IMPORTED_MODULE_23__["AllowanceReportsComponent"],
                _components_payment_reports_payment_reports_component__WEBPACK_IMPORTED_MODULE_24__["PaymentReportsComponent"],
                _components_salary_reports_salary_reports_component__WEBPACK_IMPORTED_MODULE_25__["SalaryReportsComponent"],
                _components_incident_reports_incident_reports_component__WEBPACK_IMPORTED_MODULE_26__["IncidentReportsComponent"],
                _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_27__["ReportsComponent"],
                _file_browser_pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_28__["FileBrowserComponent"],
                _file_browser_components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_29__["UploadFilesModelComponent"],
                _file_browser_components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_30__["CreateFolderModelComponent"],
                _file_browser_components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_31__["EditFolderModalComponent"],
                _file_browser_components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_31__["EditFolderModalComponent"],
                // UserDetailComponent,
                // UserDetailUpdateComponent,
                // UserProjectsComponent,
                // UserTasksComponent,
                _file_browser_components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_32__["EditFileModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_17__["ReportsRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"],
                ngx_filesaver__WEBPACK_IMPORTED_MODULE_12__["FileSaverModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot(),
                ngx_editor__WEBPACK_IMPORTED_MODULE_14__["NgxEditorModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_13__["NgxPermissionsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                _admin_todo_todo_module__WEBPACK_IMPORTED_MODULE_18__["TodoModule"],
                _admin_user_user_module__WEBPACK_IMPORTED_MODULE_33__["UserModule"],
            ],
            entryComponents: [
                _file_browser_components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_29__["UploadFilesModelComponent"],
                _file_browser_components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_32__["EditFileModalComponent"],
                _file_browser_components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_30__["CreateFolderModelComponent"],
                _file_browser_components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_31__["EditFolderModalComponent"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-pm-reports-reports-module.js.map