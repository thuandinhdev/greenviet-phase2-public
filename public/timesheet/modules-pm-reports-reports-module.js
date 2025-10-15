(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-reports-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <div class=\"card-header pl-0 pr-0 border-bottom\">\n        <h4 class=\"main-title mt-2\"><span>Work allowance</span></h4>\n        <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded\">\n            <!-- <a class=\"btn btn-create mb-0\" style=\"background: #34a853 !important; color: #fff !important;\" >Export</a> -->\n            <div class=\"btn calender-day\" (click)=\"preMonth()\">\n                <i class=\"calendar-icon fa fa-chevron-left\"></i>\n            </div>\n            <div class=\"ml-2\">\n                <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeMonth($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n            </div>\n            <div class=\"mr-2\">\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"month\" readonly />\n            </div>\n            <div class=\"btn calender-day\" (click)=\"nextMonth()\"  *ngIf=\"month <= currentMonth\">\n                <i class=\"calendar-icon fa fa-chevron-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>{{'leaves.create.fields.user' | translate}}</th>\n                            <th>{{'leaves.create.fields.reason' | translate}}</th>\n                            <th>{{'leaves.columns.request_date' | translate}}</th>\n                            <th>{{'leaves.columns.leave_date' | translate}}</th>\n                            <th>Value(VNĐ)</th>\n                            <th>Approve1</th>                                        \n                            <th>Approve2</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"leavesData?.length != 0\">\n                        <tr *ngFor=\"let leave of leavesData; index as i\">\n                            <td class=\"text-center\">{{ i + 1 }}</td>\n                            <td>{{leave.firstname}} {{leave.lastname}}</td>\n                            <td><div [innerHTML]=\"leave.reason\"></div></td>\n                            <td>{{ leave.created_at | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                            <td>{{ leave.leave_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                            <td>{{ leave.total | number:'1.0-0'}}</td>\n                            <td class=\"people-lists\">\n                                <a [routerLink]=\"['/users/profile', leave.approved1]\" class=\"btn btn-profile-info rounded-circle\" placement=\"top\" tooltip=\"{{leave.approved1_firstname}} {{leave.approved1_lastname}}\" *ngIf=\"leave.approved1\">\n                                    <img *ngIf=\"leave.approved1_avatar\" src=\"{{apiUrl}}/uploads/profile/{{leave.approved1_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    <img *ngIf=\"!leave.approved1_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                </a>\n                            </td>\n                            <td class=\"people-lists\">\n                                <a [routerLink]=\"['/users/profile', leave.approved2]\" class=\"btn btn-profile-info rounded-circle\" placement=\"top\" tooltip=\"{{leave.approved2_firstname}} {{leave.approved2_lastname}}\" *ngIf=\"leave.approved2\">\n                                    <img *ngIf=\"leave.approved2_avatar\" src=\"{{apiUrl}}/uploads/profile/{{leave.approved2_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    <img *ngIf=\"!leave.approved2_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                </a>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\">Total:</td>\n                            <td colspan=\"3\">{{totalData | number:'1.0-0'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>Full Name</th>\n                            <th>Date</th>\n                            <th>Description</th>\n                            <th>Value(VNĐ)</th>\n                        </tr>\n                    </thead>\n                    <tbody >\n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td> Lê Phương Dũng </td>\n                            <td> 9/5/2025 </td>\n                            <td>Starry, Bến Lức LA,  Xe hơi bao tài xế </td>\n                            <td>250.000</td>\n                        </tr> \n                        <tr>\n                            <td colspan=\"3\"> Total </td>\n                            <td>2.250.000</td>\n                        </tr> \n                    </tbody>\n                </table> -->\n                <!-- <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"export_table\" style=\"display: none;\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>Full Name</th>\n                            <th>Total</th>\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                <div *ngIf=\"day.stt==0\">CN-{{day.day}}</div>\n                                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}-{{day.day}}</div>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td rowspan=\"2\">{{user.firstname}} {{user.lastname}}</td>\n                                <td>{{ getTimesheetTotal(user) }}</td>\n                                <ng-container *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <td [innerHTML]=\"getTimesheetByDay(user, j)\"></td>\n                                </ng-container>\n                            </tr>\n                            <tr style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\">\n                                <td>{{user.timesheet_ot_total}}</td>\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet_ot[j] && user.timesheet_ot[j].value && user.timesheet_ot[j].value > 0\">{{user.timesheet_ot[j].value | number:'1.0-1'}}</div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table> -->\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <div class=\"card-header pl-0 pr-0 border-bottom\">\n        <h4 class=\"main-title mt-2\"><span>Standard working hours per month: {{workingInMonth * 8.5}}h</span></h4>\n        <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded\">\n            <!-- <a class=\"btn btn-create mb-0\" style=\"background: #34a853 !important; color: #fff !important;\" >Export</a> -->\n            <div class=\"btn calender-day\" (click)=\"preMonth()\">\n                <i class=\"calendar-icon fa fa-chevron-left\"></i>\n            </div>\n            <div class=\"ml-2\">\n                <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeMonth($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n            </div>\n            <div class=\"mr-2\">\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"month\" readonly />\n            </div>\n            <div class=\"btn calender-day\" (click)=\"nextMonth()\"  *ngIf=\"month <= currentMonth\">\n                <i class=\"calendar-icon fa fa-chevron-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th style=\"min-width: 250px;\">Full Name</th>\n                            <th>Total</th>\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                <div *ngIf=\"day.stt==0\">CN<br>{{day.day}}</div>\n                                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}<br>{{day.day}}</div>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td rowspan=\"2\">{{user.firstname}} {{user.lastname}}</td>\n\n                                <td><div class=\"cell\">{{ getTimesheetTotal(user) }}</div></td>\n                                <ng-container *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <td [innerHTML]=\"getTimesheetByDay(user, j)\"></td>\n                                </ng-container>\n                            </tr>\n                            <tr style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\">\n                                <td><div class=\"cell\">{{user.timesheet_ot_total}}</div></td>\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet_ot[j] && user.timesheet_ot[j].value && user.timesheet_ot[j].value > 0\">{{user.timesheet_ot[j].value | number:'1.0-1'}}</div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table>\n                <!-- <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"export_table\" style=\"display: none;\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>Full Name</th>\n                            <th>Total</th>\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                <div *ngIf=\"day.stt==0\">CN-{{day.day}}</div>\n                                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}-{{day.day}}</div>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td rowspan=\"2\">{{user.firstname}} {{user.lastname}}</td>\n                                <td>{{ getTimesheetTotal(user) }}</td>\n                                <ng-container *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <td [innerHTML]=\"getTimesheetByDay(user, j)\"></td>\n                                </ng-container>\n                            </tr>\n                            <tr style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\">\n                                <td>{{user.timesheet_ot_total}}</td>\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet_ot[j] && user.timesheet_ot[j].value && user.timesheet_ot[j].value > 0\">{{user.timesheet_ot[j].value | number:'1.0-1'}}</div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table> -->\n            </div>\n        </div>\n    </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <div class=\"card-header pl-0 pr-0 border-bottom\">\n        <h4 class=\"main-title mt-2\"><span>Payment</span></h4>\n        <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded\">\n            <div class=\"btn calender-day\" (click)=\"preMonth()\">\n                <i class=\"calendar-icon fa fa-chevron-left\"></i>\n            </div>\n            <div class=\"ml-2\">\n                <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeMonth($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n            </div>\n            <div class=\"mr-2\">\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"month\" readonly />\n            </div>\n            <div class=\"btn calender-day\" (click)=\"nextMonth()\"  *ngIf=\"month <= currentMonth\">\n                <i class=\"calendar-icon fa fa-chevron-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" >\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Amount</th>\n                            <th>Description</th>\n                            <th>Estimated date</th>\n                            <th>Payment date</th>\n                            <th>Status</th>p\n                            <th>{{'common.actions' | translate}}</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"todos.open?.length > 0 || todos.completed?.length > 0\">\n                        <tr *ngFor=\"let item of todos.open; index as i\">\n                            <td class=\"text-center\">{{ i + 1 }}</td>\n                            <td>{{item.price| number:'1.0-0'}}</td>\n                            <td>{{item.description}}</td>\n                            <td>{{item.due_date}}</td>\n                            <td>{{item.payment_date}}</td>\n                            <td class=\"status-dropdown\">\n                                <div class=\"overdue-td\">\n                                    <div>\n                                        <div class=\"btn-group\" dropdown>\n                                            <button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">Pending&nbsp;<span class=\"caret\"></span></button>\n                                            <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n                                                <li ><a class=\"dropdown-item btn btn-sm open active\">Pending</a></li>\n                                                <li ><a class=\"dropdown-item btn btn-sm completed\" (click)=\"changeStatus(item, 2)\">completed</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <ng-container *ngIf=\"item.is_overdue\">\n                                            <i class=\"fa fa-clock-o overdue-icon\" aria-hidden=\"true\" tooltip=\"{{'common.overdue' | translate}}\"></i>\n                                        </ng-container>\n                                    </div>\n                                    </div>\n                            </td>\n                            <td class=\"actions-dropdown\">\n                                <div class=\"btn-group\" dropdown>\n                                    <button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-2\" aria-controls=\"dropdown-basic-2\"><i class=\"fa fa-ellipsis-v\"></i></button>\n                                    <ul id=\"dropdown-basic-2\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-2\">\n                                        <li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_edit']\">\n                                            <a (click)=\"openTodoEditModal(item)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n                                        </li>\n                                        <li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_delete']\">\n                                            <a (click)=\"deleteTodo(item.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr *ngFor=\"let item of todos.completed; index as i\" style=\"background:#c1ebd3;\">\n                            <td class=\"text-center\">{{ todos.open.length + (i + 1) }}</td>\n                            <td>{{item.price| number:'1.0-0'}}</td>\n                            <td>{{item.description}}</td>\n                            <td>{{item.due_date}}</td>\n                            <td>{{item.payment_date}}</td>\n                            <td class=\"status-dropdown\">\n                                <div class=\"budges-status\">\n                                    <span class=\"completed\">Completed</span>\n                                </div>\n                            </td>\n                            <td class=\"actions-dropdown\">\n                                <div class=\"btn-group\" dropdown>\n                                    <button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-2\" aria-controls=\"dropdown-basic-2\"><i class=\"fa fa-ellipsis-v\"></i></button>\n                                    <ul id=\"dropdown-basic-2\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-2\">\n                                        <li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_edit']\">\n                                            <a (click)=\"openTodoEditModal(item)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>Project</th>\n                            <th>Amount</th>\n                            <th>Description</th>\n                            <th>Estimated date</th>\n                            <th>Payment date</th>\n                            <th>Status</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                          <td>Green Building Renovation</td>\n                          <td>2025-01-15</td>\n                          <td>2025-01-20</td>\n                          <td>120.000.000</td>\n                          <td>First payment for material cost</td>\n                          <td><span class=\"badge bg-success\">Completed</span></td>\n                        </tr>\n                        <tr>\n                          <td>Solar Roof Project</td>\n                          <td>2025-02-01</td>\n                          <td></td>\n                          <td>98.500.000</td>\n                          <td>Down payment for installation</td>\n                          <td><span class=\"badge bg-warning text-dark\">Pending</span></td>\n                        </tr>\n                        <tr>\n                          <td>Office Lighting Upgrade</td>\n                          <td>2025-03-10</td>\n                          <td>2025-03-12</td>\n                          <td>76.300.000</td>\n                          <td>Payment for LED lights</td>\n                          <td><span class=\"badge bg-success\">Completed</span></td>\n                        </tr>\n                        <tr>\n                          <td>Warehouse Expansion</td>\n                          <td>2025-03-25</td>\n                          <td></td>\n                          <td>210.000.000</td>\n                          <td>Site preparation and materials</td>\n                          <td><span class=\"badge bg-danger\">Delayed</span></td>\n                        </tr>\n                        <tr>\n                          <td>Factory HVAC System</td>\n                          <td>2025-04-15</td>\n                          <td></td>\n                          <td>158.800.000</td>\n                          <td>HVAC equipment and labor</td>\n                          <td><span class=\"badge bg-warning text-dark\">Pending</span></td>\n                        </tr>\n                        <tr>\n                          <td>Bridge Maintenance</td>\n                          <td>2025-05-05</td>\n                          <td>2025-05-09</td>\n                          <td>95.000.000</td>\n                          <td>Material and inspection fee</td>\n                          <td><span class=\"badge bg-success\">Completed</span></td>\n                        </tr>\n                        <tr>\n                          <td>Data Center Cooling</td>\n                          <td>2025-06-01</td>\n                          <td></td>\n                          <td>134.200.000</td>\n                          <td>Cooling unit upgrade</td>\n                          <td><span class=\"badge bg-secondary\">In Progress</span></td>\n                        </tr>\n                        <tr>\n                          <td>Tokyo HQ Interior Design</td>\n                          <td>2025-06-20</td>\n                          <td>2025-07-01</td>\n                          <td>178.400.000</td>\n                          <td>Furniture and decoration</td>\n                          <td><span class=\"badge bg-success\">Completed</span></td>\n                        </tr>\n                        <tr>\n                          <td>EV Charging Station Setup</td>\n                          <td>2025-07-10</td>\n                          <td></td>\n                          <td>88.000.000</td>\n                          <td>Installation of 3 charging points</td>\n                          <td><span class=\"badge bg-warning text-dark\">Pending</span></td>\n                        </tr>\n                        <tr>\n                          <td>Renewable Energy Initiative</td>\n                          <td>2025-08-01</td>\n                          <td>2025-08-12</td>\n                          <td>245.600.000</td>\n                          <td>Full project completion payment</td>\n                          <td><span class=\"badge bg-success\">Completed</span></td>\n                        </tr>\n                      </tbody>\n                </table> -->\n                <!-- <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"export_table\" style=\"display: none;\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>Full Name</th>\n                            <th>Total</th>\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                <div *ngIf=\"day.stt==0\">CN-{{day.day}}</div>\n                                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}-{{day.day}}</div>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td rowspan=\"2\">{{user.firstname}} {{user.lastname}}</td>\n                                <td>{{ getTimesheetTotal(user) }}</td>\n                                <ng-container *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <td [innerHTML]=\"getTimesheetByDay(user, j)\"></td>\n                                </ng-container>\n                            </tr>\n                            <tr style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\">\n                                <td>{{user.timesheet_ot_total}}</td>\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet_ot[j] && user.timesheet_ot[j].value && user.timesheet_ot[j].value > 0\">{{user.timesheet_ot[j].value | number:'1.0-1'}}</div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table> -->\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/project-reports/project-reports.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/project-reports/project-reports.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <h4 class=\"main-title mt-2\"><span>{{'reports.headings.project_report' | translate}}</span></h4>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"projects_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>{{'projects.columns.id' | translate}}</th>\n                            <th>{{'projects.columns.project_name' | translate}}</th>\n                            <th>{{'projects.columns.start' | translate}}</th>\n                            <th>{{'projects.columns.end' | translate}}</th>\n                            <th>{{'projects.columns.output_cost' | translate}}/{{'projects.columns.input_cost' | translate}}</th>\n                            <th>Work allowance</th>\n                            <th>Payment</th>\n                            <!-- <th>{{'projects.columns.progress' | translate}}</th> -->\n                            <th>{{'projects.columns.creator' | translate}}</th>\n                            <th>{{'projects.columns.assigned_To' | translate}}</th>\n                            <th>{{'projects.columns.status' | translate}}</th>\n                            <!-- <th>{{'projects.columns.billing' | translate}}</th>\n                            <th>{{'projects.columns.budget' | translate}}</th>\n                            <th>{{'projects.columns.client' | translate}}</th> -->\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"projects?.length != 0\">\n                        <tr *ngFor=\"let project of projects\">\n                            <td>{{project.generated_id}}</td>\n                            <td>{{project.project_name}}</td>\n                            <td>{{project.start_date | date: 'yyyy-MM-dd' }}</td>\n                            <td>{{project.end_date | date: 'yyyy-MM-dd' }}</td>\n                            <!-- <td>\n                                <ng-container *ngIf=\"project.actual_hours else elseBlock4;\">{{project.actual_hours}}</ng-container>\n                                <ng-template #elseBlock4>-</ng-template>\n                            </td> -->\n                            <td class=\"budges-status\">\n                                <div class=\"budges-status\">\n                                    <span class=\"medium\" *ngIf=\"project.price_rate >= project.cost\">{{project.cost | number:'1.0-0'}}/{{project.price_rate | number:'1.0-0'}}</span>\n                                    <span class=\"urgent\" *ngIf=\"project.price_rate < project.cost\">{{project.cost | number:'1.0-0'}}/{{project.price_rate | number:'1.0-0'}}</span>\n                                </div>\n                            </td>\n                            <td>\n                                {{project.workallowance | number:'1.0-0'}}\n                            </td>\n                            <td class=\"budges-status\">\n                                <div class=\"budges-status\">\n                                    <span class=\"medium\" *ngIf=\"project.payment >= project.paymentTotal\">{{project.payment | number:'1.0-0'}}/{{project.paymentTotal | number:'1.0-0'}}</span>\n                                    <span class=\"urgent\" *ngIf=\"project.payment < project.paymentTotal\">{{project.payment | number:'1.0-0'}}/{{project.paymentTotal | number:'1.0-0'}}</span>\n                                </div>\n                            </td>\n                            <!-- <td>{{project.progress}}%</td> -->\n                            <td class=\"people-lists\">\n                                <a [routerLink]=\"['/users/profile', project.created_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{project.created_firstname}} {{project.created_lastname}}\">\n                                    <img *ngIf=\"project.created_avatar\" src=\"{{apiUrl}}/uploads/profile/{{project.created_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    <img *ngIf=\"!project.created_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                </a>\n                            </td>\n                            <td class=\"people-lists\">\n                                <ng-container *ngIf=\"project.assign_members == 'Unassign' || project.assign_members == '' || project.assign_members == null; else elseBlock1;\">\n                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle popover-item text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-container>\n                                <ng-template #elseBlock1>\n                                    <ng-container *ngFor=\"let user_id of project.assign_members | stringToArrayFilter index as i; odd as isOdd; even as isEven\">\n                                        <a *ngIf=\"userLists[user_id]\" [routerLink]=\"['/users/profile', user_id]\" tooltip=\"{{userLists[user_id].firstname}} {{userLists[user_id].lastname}}\" class=\"btn rounded-circle popover-item text-dark\" [ngClass]=\"{'btn-profile-info': isOdd, 'btn-profile-danger': isEven}\">\n                                            <img *ngIf=\"userLists[user_id].avatar\" src=\"{{apiUrl}}/uploads/profile/{{userLists[user_id].avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                            <img *ngIf=\"!userLists[user_id].avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        </a>\n                                    </ng-container>\n                                </ng-template>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let status of ('projects.status' | translate)\">\n                                    <span class=\"badge {{status.class}}\" *ngIf=\"status.id == project.status\">{{status.label}}</span>\n                                </ng-container>\n                            </td>\n                            <!-- <td>\n                                <ng-container *ngIf=\"project.billing_type; else elseBlock2;\">\n                                    <ng-container *ngFor=\"let type of ('projects.billing_types' | translate)\">\n                                        <span class=\"badge badge-secondary\" *ngIf=\"type.id == project.billing_type\">{{type.label}}</span>\n                                    </ng-container>\n                                </ng-container>\n                                <ng-template #elseBlock2>-</ng-template>\n                            </td>\n                            <td>\n                                <ng-container *ngIf=\"project.price_rate else elseBlock3;\">{{project.price_rate}}</ng-container>\n                                <ng-template #elseBlock3>-</ng-template>\n                            </td>\n                            <td class=\"people-lists\">\n                                <ng-container *ngIf=\"project.client_id; else elseBlock5;\">\n                                    <a [routerLink]=\"['/users/profile', project.client_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{project.client_firstname}} {{project.client_lastname}}\">\n                                        <img *ngIf=\"project.client_avatar\" src=\"{{apiUrl}}/uploads/profile/{{project.client_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        <img *ngIf=\"!project.client_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-container>\n                                <ng-template #elseBlock5>-</ng-template>\n                            </td> -->\n                        </tr>\n                    </tbody>\n                    <tfoot *ngIf=\"projects?.length == 0\" class=\"tfoot_dt\">\n                        <tr>\n                            <td colspan=\"10\" class=\"text-center\">\n                                <img src=\"assets/img/norecord-img.png\" width=\"50\">\n                                <p class=\"mt-1\">{{ 'common.empty_message.projects' | translate }}</p>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <div class=\"card-header pl-0 pr-0 border-bottom\">\n        <div class=\"btn-group mr-2 mb-2\">\n            <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': salaryFilterKey === 'salary' }\" (click)=\"filterByStatus('salary')\" btnRadio=\"salary\" tabindex=\"0\" role=\"button\">Salary</label>\n            <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': salaryFilterKey === 'timesheet' }\" (click)=\"filterByStatus('timesheet')\" btnRadio=\"timesheet\" tabindex=\"0\" role=\"button\">Timesheet</label>\n            <label class=\"btn btn-secondary btn-toggle m-0\" [ngClass]=\"{ 'active': salaryFilterKey === 'log' }\" (click)=\"filterByStatus('log')\" btnRadio=\"timesheet\" tabindex=\"0\" role=\"button\">File Log</label>\n        </div>\n        <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded && salaryFilterKey != 'log'\">\n            <!-- <a class=\"btn btn-create mb-0\" style=\"background: #34a853 !important; color: #fff !important;\" >Export</a> -->\n            <div class=\"btn calender-day\" (click)=\"preMonth()\">\n                <i class=\"calendar-icon fa fa-chevron-left\"></i>\n            </div>\n            <div class=\"ml-2\">\n                <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeMonth($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n            </div>\n            <div class=\"mr-2\">\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"month\" readonly />\n            </div>\n            <div class=\"btn calender-day\" (click)=\"nextMonth()\"  *ngIf=\"month <= currentMonth\">\n                <i class=\"calendar-icon fa fa-chevron-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-wrapper\">\n                <table class=\"table table-bordered table-hover b4-datatable scroll-table\" width=\"100%\" id=\"defects_table\" id=\"defects_table\" *ngIf=\"salaryFilterKey == 'salary'\">\n                    <thead>\n                        <tr style=\"background-color: #fff; color: #000;text-align: center; vertical-align: middle;\">\n                          <th rowspan=\"3\" class=\"sticky-col stt-col\">STT</th>\n                          <th rowspan=\"3\" style=\"min-width: 250px;\">Họ và tên</th>\n                          <th rowspan=\"3\">Lương Chính<br>Thực theo thỏa<br>thuận</th>\n                          <th colspan=\"3\"></th>\n                          <th colspan=\"11\" style=\"background-color: #f2dada;\">Tổng thu nhập người lao động</th>\n                          <th colspan=\"7\" style=\"background-color: #ffff66;\">Tổng thu nhập không chịu thuế TNCN</th>\n                          <th colspan=\"2\" style=\"background-color: #35cc9a;\">Khấu trừ thuế TNCN NLĐ</th>\n                          <th colspan=\"5\" style=\"background-color: #c1f2f7;\">Lương thực nhận</th>\n                          <th colspan=\"3\">Chi phí doanh nghiệp</th>\n                        </tr>\n                        <tr style=\"background-color: #fff; color: #000;text-align: center; vertical-align: middle;\">\n                            <th colspan=\"3\">Lương tháng hiện tại (Full)</th>\n                            <th colspan=\"3\" style=\"background-color: #f2dada;\">Lương chi tiết <br>(theo thời gian làm việc)</th>\n                            <th colspan=\"2\" style=\"background-color: #f2dada;\">LươnLương OT</th>\n                            <th rowspan=\"2\" style=\"background-color: #f2dada;\">Các khoản điều<br>chỉnh giảm - / tăng +</th>\n                            <th rowspan=\"2\" style=\"background-color: #f2dada;\">Thưởng đột xuất<br>/ Lễ/ tết </th>\n                            <th colspan=\"3\" style=\"background-color: #f2dada;\">PHỤ CẤP THEO QUY CHẾ CÔNG TY</th>\n                            <th rowspan=\"2\" style=\"background-color: #f2dada;\">Tổng <br>Thu nhập </th>\n                            <th colspan=\"2\" style=\"background-color: #ffff66;\">Người phụ thuộc</th>\n                            <th rowspan=\"2\" style=\"background-color: #ffff66;\">Giảm trừ<br>bản thân</th>\n                            <th rowspan=\"2\" style=\"background-color: #ffff66;\">Ăn/ <br>ĐT/CT/Xăng</th>\n                            <th rowspan=\"2\" style=\"background-color: #ffff66;\">OT</th>\n                            <th style=\"background-color: #ffff66;\">BHBB</th>\n                            <th rowspan=\"2\" style=\"background-color: #ffff66;\">TỔNG</th>\n                            <th rowspan=\"2\" style=\"background-color: #35cc9a;\">Thu nhập chịu<br> thuế TNCN</th>\n                            <th rowspan=\"2\" style=\"background-color: #35cc9a;\">Thuế TNCN</th>\n                            <th style=\"background-color: #c1f2f7;\">BHBB <br>Thực tế</th>\n                            <th style=\"background-color: #c1f2f7;\">Khấu trừ <br>ĐPCĐ</th>\n                            <th rowspan=\"2\" style=\"background-color: #c1f2f7;\">Khác</th>\n                            <th rowspan=\"2\" style=\"background-color: #c1f2f7;\">UNC ngày <br>25/09/2025</th>\n                            <th rowspan=\"2\" style=\"background-color: #c1f2f7;\">Tổng</th>\n                            <th>BHBB</th>\n                            <th>KPCĐ</th>\n                            <th rowspan=\"2\">Tổng</th>\n                          </tr>\n                        <tr style=\"background-color: #fff; color: #000;text-align: center; vertical-align: middle;\">\n                          <th>Lương cơ bản</th>\n                          <th>Hiệu quả công việc</th>\n                          <th>Tổng lương</th>\n                          <th style=\"background-color: #f2dada;\">Thời gian LV<br> (Ngày) </th>\n                          <th style=\"background-color: #f2dada;\">Lương LV</th>\n                          <th style=\"background-color: #f2dada;\">Nghỉ phép<br> được hưởng lương</th>\n                          <th style=\"background-color: #f2dada;\">Ngày</th>\n                          <th style=\"background-color: #f2dada;\">Lương</th>\n                          <th style=\"background-color: #f2dada;\">Ăn trưa</th>\n                          <th style=\"background-color: #f2dada;\">Điện thoại<br> / xăng</th>\n                          <th style=\"background-color: #f2dada;\">Đi công trình</th>\n                          <th style=\"background-color: #ffff66;\">Số NPT</th>\n                          <th style=\"background-color: #ffff66;\">Giảm trừ</th>\n                          <th style=\"background-color: #ffff66; color:red;\">10,5%</th>\n                          <th style=\"background-color: #c1f2f7; color:red;\">10,5%</th>\n                          <th style=\"background-color: #c1f2f7; color:red;\">0,5%</th>\n                          <th style=\"color:red;\">32%/21.0%</th>\n                          <th style=\"color:red;\">2,0%</th>\n                        </tr>\n                      </thead>\n\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td>{{i+1}}</td>\n                                <td>{{user.firstname}} {{user.lastname}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_total| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_basic| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_performance| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_total_real| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_working_day| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_working_salary| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_leave_salary| number:'1.0-0'}}</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td style=\"text-align: right;\">{{user.salary_lunch| number:'1.0-0'}}</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td style=\"text-align: right;color:red;\">{{user.salary_sum_of_sums| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\" >{{user.dependents}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_dependents| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\" >{{settings.personal| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;\">{{user.salary_lunch| number:'1.0-0'}}</td>\n                                <td>-</td>\n                                <td style=\"text-align: right;\">{{user.salary_BHBB| number:'1.0-0'}}</td>\n                                <td style=\"text-align: right;color:red;\">{{user.salary_personal_income_taxt| number:'1.0-0'}}</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td>-</td>\n                                <td>-</td>\n                            </tr>\n                        </ng-container>\n                        <!-- <tr>\n                            <td>2</td>\n                            <td>Đỗ Hữu Nhật Quang</td>\n                            <td>10.652.00</td>\n                            <td>5.952.000</td>\n                            <td>4.700.000</td>\n                            <td>10.652.000</td>\n                            <td>24,0</td>\n                            <td>  10.652.000 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>1.000.00</td>\n                            <td>1.000.00</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.00</td>\n                            <td>2</td>\n                            <td>8.800.000</td>\n                            <td>11.000.000</td>\n                            <td>1.730.000</td>\n                            <td>-</td>\n                            <td>624.960</td>\n                            <td style=\"color:red;\">  22.154.960 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.000</td>\n                            <td>1.904.640</td>\n                            <td>119.040</td>\n                            <td>14.675.680</td>\n                        </tr>\n                        <tr>\n                            <td>3</td>\n                            <td>Đặng Anh Thi</td>\n                            <td>10.652.00</td>\n                            <td>5.952.000</td>\n                            <td>4.700.000</td>\n                            <td>10.652.000</td>\n                            <td>24,0</td>\n                            <td>  10.652.000 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>1.000.00</td>\n                            <td>1.000.00</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.00</td>\n                            <td>2</td>\n                            <td>8.800.000</td>\n                            <td>11.000.000</td>\n                            <td>1.730.000</td>\n                            <td>-</td>\n                            <td>624.960</td>\n                            <td style=\"color:red;\">  22.154.960 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.000</td>\n                            <td>1.904.640</td>\n                            <td>119.040</td>\n                            <td>14.675.680</td>\n                        </tr>\n                        <tr>\n                            <td>4</td>\n                            <td>Phạm Trần Tố Uyên</td>\n                            <td>10.652.00</td>\n                            <td>5.952.000</td>\n                            <td>4.700.000</td>\n                            <td>10.652.000</td>\n                            <td>24,0</td>\n                            <td>  10.652.000 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>1.000.00</td>\n                            <td>1.000.00</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.00</td>\n                            <td>2</td>\n                            <td>8.800.000</td>\n                            <td>11.000.000</td>\n                            <td>1.730.000</td>\n                            <td>-</td>\n                            <td>624.960</td>\n                            <td style=\"color:red;\">  22.154.960 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.000</td>\n                            <td>1.904.640</td>\n                            <td>119.040</td>\n                            <td>14.675.680</td>\n                        </tr>\n                        <tr>\n                            <td>5</td>\n                            <td>Nguyễn Lê Hiền Thảo</td>\n                            <td>10.652.00</td>\n                            <td>5.952.000</td>\n                            <td>4.700.000</td>\n                            <td>10.652.000</td>\n                            <td>24,0</td>\n                            <td>  10.652.000 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>1.000.00</td>\n                            <td>1.000.00</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.00</td>\n                            <td>2</td>\n                            <td>8.800.000</td>\n                            <td>11.000.000</td>\n                            <td>1.730.000</td>\n                            <td>-</td>\n                            <td>624.960</td>\n                            <td style=\"color:red;\">  22.154.960 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.000</td>\n                            <td>1.904.640</td>\n                            <td>119.040</td>\n                            <td>14.675.680</td>\n                        </tr>\n                        <tr>\n                            <td>6</td>\n                            <td>Trương Thị Hồng Nhung</td>\n                            <td>10.652.00</td>\n                            <td>5.952.000</td>\n                            <td>4.700.000</td>\n                            <td>10.652.000</td>\n                            <td>24,0</td>\n                            <td>  10.652.000 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>1.000.00</td>\n                            <td>1.000.00</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.00</td>\n                            <td>2</td>\n                            <td>8.800.000</td>\n                            <td>11.000.000</td>\n                            <td>1.730.000</td>\n                            <td>-</td>\n                            <td>624.960</td>\n                            <td style=\"color:red;\">  22.154.960 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.000</td>\n                            <td>1.904.640</td>\n                            <td>119.040</td>\n                            <td>14.675.680</td>\n                        </tr>\n                        <tr>\n                            <td>7</td>\n                            <td>Lê Thế Thành</td>\n                            <td>10.652.00</td>\n                            <td>5.952.000</td>\n                            <td>4.700.000</td>\n                            <td>10.652.000</td>\n                            <td>24,0</td>\n                            <td>  10.652.000 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>1.000.00</td>\n                            <td>1.000.00</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.00</td>\n                            <td>2</td>\n                            <td>8.800.000</td>\n                            <td>11.000.000</td>\n                            <td>1.730.000</td>\n                            <td>-</td>\n                            <td>624.960</td>\n                            <td style=\"color:red;\">  22.154.960 </td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td>-</td>\n                            <td style=\"color:red;\">12.652.000</td>\n                            <td>1.904.640</td>\n                            <td>119.040</td>\n                            <td>14.675.680</td>\n                        </tr> -->\n                        <tr>\n                            <td colspan=\"2\">Tổng cộng</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                        </tr>\n\n                    </tbody>\n                </table>\n                <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\" *ngIf=\"salaryFilterKey == 'timesheet'\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th rowspan=\"2\">Full Name</th>\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                <div *ngIf=\"day.stt==0\">CN</div>\n                                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}</div>\n                            </th>\n                            <th rowspan=\"2\">Ngày<br>thường</th>\n                            <th rowspan=\"2\">Ngày<br>nghỉ</th>\n                            <th rowspan=\"2\">TỔNG<br>NGÀY<br>CÔNG</th>\n                            <th rowspan=\"2\">NGÀY<br>CÔNG<br>CHUẨN</th>\n                        </tr>\n                        <tr class=\"display_all\">\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                {{day.day}}\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td rowspan=\"2\">{{user.firstname}} {{user.lastname}}</td>\n                                <ng-container *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <td [innerHTML]=\"getTimesheetByDay(user, j)\"></td>\n                                </ng-container>\n                                <td>{{ getTimesheetTotal(user, 'day') }}</td>\n                                <td>{{ getTimesheetTotal(user, 'leave') }}</td>\n                                <td>{{ getTimesheetTotal(user, 'total') }}</td>\n                                <td>{{ workingInMonth }}</td>\n                            </tr>\n                            <tr style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\">\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet_ot[j] && user.timesheet_ot[j].value && user.timesheet_ot[j].value > 0\">{{user.timesheet_ot[j].value | number:'1.0-0'}}</div>\n                                </td>\n                                <td></td>\n                                <td></td>\n                                <td>{{user.timesheet_ot_total}}</td>\n                                <td></td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table>\n                <app-file-browser *ngIf=\"salaryFilterKey == 'log'\"></app-file-browser>\n            </div>\n        </div>\n    </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <div class=\"card-header pl-0 pr-0 border-bottom\">\n        <div class=\"col-sm-3\">\n            <form>\n                <div class=\"form-group\">\n                    <ng-select\n                        [searchable]=\"true\"\n                        [items]=\"users\"\n                        [selectOnTab]=\"true\"\n                        [multiple]=\"false\"\n                        [selectableGroup]=\"false\"\n                        bindLabel=\"username\"\n                        bindValue=\"id\"\n                        labelForId=\"user_id\"\n                        placeholder=\"{{'timesheet.filter.placeholders.placeholder5' | translate }}\">\n                        <ng-template ng-label-tmp let-item=\"item\">\n                            {{item.username}}\n                        </ng-template>\n                        <ng-template ng-option-tmp let-item=\"item\">\n                            {{item.username}}\n                        </ng-template>\n                    </ng-select>\n                </div>\n            </form>\n        </div>\n        <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded\">\n            <!-- <a class=\"btn btn-create mb-0\" style=\"background: #34a853 !important; color: #fff !important;\" (click)=\"exportFiles()\">Export</a> -->\n            <div class=\"btn calender-day\" (click)=\"preMonth()\">\n                <i class=\"calendar-icon fa fa-chevron-left\"></i>\n            </div>\n            <div class=\"ml-2\">\n                <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeMonth($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n            </div>\n            <div class=\"mr-2\">\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"month\" readonly />\n            </div>\n            <div class=\"btn calender-day\" (click)=\"nextMonth()\"  *ngIf=\"month <= currentMonth\">\n                <i class=\"calendar-icon fa fa-chevron-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th></th>\n                            <th>Project: 488-Office Dong Van Cong ATAD<br>Task: Commissioning</th>\n                            <th>Project: 488-Office Dong Van Cong ATAD<br>Task: Construction Coordinate</th>\n                            <th>Project: 488-Office Dong Van Cong ATAD<br>Task: Collect data</th>\n                            <th>Total</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>1-t6</td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>2-t7</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>3-CN</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>4-t2</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>5-t3</td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>6-t4</td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div>Note: eview MRp1, IEQp2, SSc5, slides, checklist, cost</td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>7-t5</td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>8-t6</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell table-cell-indigo\" title=\"Nghỉ có phép (Full)\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>9-t7</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>10-CN</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>11-t2</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell table-cell-green\" title=\"Holiday\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>12-t3</td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>13-t4</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>14-t5</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div>Note: eview MRp1, IEQp2, SSc5, slides, checklist, cost</td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>15-t6</td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>16-t7</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>17-CN</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>18-t2</td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>19-t3</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>20-t4</td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>21-t5</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>22-t6</td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>23-t7</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>24-CN</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>25-t2</td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>26-t3</td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>27-t4</td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>28-t5</td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>29-t6</td>\n                            <td><div class=\"cell\">8.5</div>Note: Build Model IES</td>\n                            <td></td>\n                            <td></td>\n                            <td><div class=\"cell\">8.5</div></td>\n                        </tr>\n                        <tr>\n                            <td>30-t7</td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td><div class=\"cell\">Total</div></td>\n                            <td><div class=\"cell\">85</div></td>\n                            <td><div class=\"cell\">34</div></td>\n                            <td><div class=\"cell\">34</div></td>\n                            <td><div class=\"cell\">153</div></td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"export_table\" style=\"display: none;\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>Full Name</th>\n                            <th>Total</th>\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                <div *ngIf=\"day.stt==0\">CN-{{day.day}}</div>\n                                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}-{{day.day}}</div>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td rowspan=\"2\">{{user.firstname}} {{user.lastname}}</td>\n                                <td>{{ getTimesheetTotal(user) }}</td>\n                                <ng-container *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <td [innerHTML]=\"getTimesheetByDay(user, j)\"></td>\n                                </ng-container>\n                            </tr>\n                            <tr style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\">\n                                <td>{{user.timesheet_ot_total}}</td>\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet_ot[j] && user.timesheet_ot[j].value && user.timesheet_ot[j].value > 0\">{{user.timesheet_ot[j].value | number:'1.0-1'}}</div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table> -->\n            </div>\n        </div>\n    </div>\n</div>\n");

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

/***/ "./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n\n.table-bordered {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table-bordered td {\n  border: 1px solid black;\n  padding: 8px;\n  text-align: left;\n}\n\n.b4-datatable > thead > tr > th {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvYWxsb3dhbmNlLXJlcG9ydHMvYWxsb3dhbmNlLXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL2FsbG93YW5jZS1yZXBvcnRzL2FsbG93YW5jZS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENFO0VBQ0UsdUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL2FsbG93YW5jZS1yZXBvcnRzL2FsbG93YW5jZS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAudGFibGUtYm9yZGVyZWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweDsgXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXG4gIH1cbiAgLmI0LWRhdGF0YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH0iLCI6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtYm9yZGVyZWQgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYjQtZGF0YXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */");

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
    AllowanceReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsService.save(this.exportAsConfig, 'Timesheet').subscribe(function () {
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
    DefectReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsService.save(this.exportAsConfig, 'Timesheet').subscribe(function () {
        });
    };
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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n::ng-deep .odd {\n  display: none;\n}\n.table-bordered {\n  border-collapse: collapse;\n  width: 100%;\n}\n.table-bordered td {\n  border: 1px solid black;\n  padding: 8px;\n  text-align: left;\n}\n.table-wrapper {\n  width: 100%;\n  overflow-x: auto;\n  position: relative;\n  border: 1px solid #ddd;\n  max-height: 500px;\n  /* nếu muốn scroll dọc */\n  overflow-y: auto;\n}\n.scroll-table {\n  border-collapse: collapse;\n  min-width: 1200px;\n}\n.scroll-table th,\n.scroll-table td {\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  white-space: nowrap;\n  background: #fff;\n}\n/* Cố định 3 cột đầu */\n.sticky-col {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  background: #fff;\n  z-index: 2;\n}\n.col-stt {\n  left: 0;\n  z-index: 3;\n}\n.col-name {\n  left: 60px;\n  /* = width của cột STT */\n  z-index: 3;\n}\n.col-role {\n  left: 260px;\n  /* = width STT + Name */\n  z-index: 3;\n}\n/* Header cũng sticky */\n.scroll-table thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background: #f5f5f5;\n  z-index: 4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcGF5bWVudC1yZXBvcnRzL3BheW1lbnQtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcGF5bWVudC1yZXBvcnRzL3BheW1lbnQtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxhQUFBO0FERUo7QUNDQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBREVKO0FDQ0U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBREVKO0FDQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFBbUIsd0JBQUE7RUFDbkIsZ0JBQUE7QURHSjtBQ0FFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBREdKO0FDQUU7O0VBRUUsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURHSjtBQ0FFLHNCQUFBO0FBQ0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBREdKO0FDQUU7RUFDRSxPQUFBO0VBQ0EsVUFBQTtBREdKO0FDQUU7RUFDRSxVQUFBO0VBQVksd0JBQUE7RUFDWixVQUFBO0FESUo7QUNERTtFQUNFLFdBQUE7RUFBYSx1QkFBQTtFQUNiLFVBQUE7QURLSjtBQ0ZFLHVCQUFBO0FBQ0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBREtKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcGF5bWVudC1yZXBvcnRzL3BheW1lbnQtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIC8qIG7hur91IG114buRbiBzY3JvbGwgZOG7jWMgKi9cbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNjcm9sbC10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1pbi13aWR0aDogMTIwMHB4O1xufVxuXG4uc2Nyb2xsLXRhYmxlIHRoLFxuLnNjcm9sbC10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4vKiBD4buRIMSR4buLbmggMyBj4buZdCDEkeG6p3UgKi9cbi5zdGlja3ktY29sIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogMjtcbn1cblxuLmNvbC1zdHQge1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAzO1xufVxuXG4uY29sLW5hbWUge1xuICBsZWZ0OiA2MHB4O1xuICAvKiA9IHdpZHRoIGPhu6dhIGPhu5l0IFNUVCAqL1xuICB6LWluZGV4OiAzO1xufVxuXG4uY29sLXJvbGUge1xuICBsZWZ0OiAyNjBweDtcbiAgLyogPSB3aWR0aCBTVFQgKyBOYW1lICovXG4gIHotaW5kZXg6IDM7XG59XG5cbi8qIEhlYWRlciBjxaluZyBzdGlja3kgKi9cbi5zY3JvbGwtdGFibGUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIHotaW5kZXg6IDQ7XG59IiwiOjpuZy1kZWVwIC5vZGQge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAudGFibGUtYm9yZGVyZWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweDsgXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXG4gIH1cbiAgXG4gIC50YWJsZS13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4OyAvKiBu4bq/dSBtdeG7kW4gc2Nyb2xsIGThu41jICovXG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICBcbiAgLnNjcm9sbC10YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtaW4td2lkdGg6IDEyMDBweDtcbiAgfVxuICBcbiAgLnNjcm9sbC10YWJsZSB0aCxcbiAgLnNjcm9sbC10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbiAgXG4gIC8qIEPhu5EgxJHhu4tuaCAzIGPhu5l0IMSR4bqndSAqL1xuICAuc3RpY2t5LWNvbCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICBcbiAgLmNvbC1zdHQge1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMztcbiAgfVxuICBcbiAgLmNvbC1uYW1lIHtcbiAgICBsZWZ0OiA2MHB4OyAvKiA9IHdpZHRoIGPhu6dhIGPhu5l0IFNUVCAqL1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbiAgXG4gIC5jb2wtcm9sZSB7XG4gICAgbGVmdDogMjYwcHg7IC8qID0gd2lkdGggU1RUICsgTmFtZSAqL1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbiAgXG4gIC8qIEhlYWRlciBjxaluZyBzdGlja3kgKi9cbiAgLnNjcm9sbC10YWJsZSB0aGVhZCB0aCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICB6LWluZGV4OiA0O1xuICB9XG4gICJdfQ== */");

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
    PaymentReportsComponent.prototype.ngOnInit = function () {
        this.month = this.datePipe.transform("2025-08", 'yyyy-MM');
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.loadDatatable();
    };
    PaymentReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        this.getWorkingDays(this.month);
        this.http.post(this.apiUrl + '/api/todos/list', { month: this.month, module_id: 'all' }, {})
            .subscribe(function (resp) {
            _this.exportTableData = resp.data;
            _this.leaves = resp.leaves;
            _this.holidays = resp.holidays;
            _this.exportTableData.forEach(function (element, index) {
                var timesheetconvert = _this.exportTableDataArray(element.timesheet);
                // console.log(timesheetconvert);
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
    PaymentReportsComponent.prototype.getWorkingDays = function (month) {
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
    PaymentReportsComponent.prototype.exportTableDataArray = function (data) {
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
    PaymentReportsComponent.prototype.getTimesheetTotal = function (user) {
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
    PaymentReportsComponent.prototype.getTimesheetByDay = function (user, j) {
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
    PaymentReportsComponent.prototype.compareValues = function (timesheet, working_hours) {
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
    PaymentReportsComponent.prototype.getWeekOfMonth = function (date) {
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var firstDayOfWeek = firstDay.getDay();
        var dayOfMonth = date.getDate();
        return Math.ceil((dayOfMonth + firstDayOfWeek) / 7);
    };
    PaymentReportsComponent.prototype.nextMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["addMonths"])(this.month, 1));
    };
    PaymentReportsComponent.prototype.preMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["subMonths"])(this.month, 1));
    };
    PaymentReportsComponent.prototype.changeMonth = function (selectedDate) {
        // this.month = this.datePipe.transform(selectedDate, 'yyyy/MM');
        this.month = this.datePipe.transform("2025-08", 'yyyy-MM');
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.loadDatatable();
    };
    PaymentReportsComponent.prototype.getTotalDaysInMonth = function (date) {
        var start = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["startOfMonth"])(date);
        var end = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["endOfMonth"])(date);
        var daysInMonth = [];
        for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
            daysInMonth.push({ date: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(d), 'YYYY-MM-DD'), stt: Number(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(new Date(d), 'd')), day: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["getDate"])(new Date(d)) });
        }
        return daysInMonth;
    };
    PaymentReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsService.save(this.exportAsConfig, 'Timesheet').subscribe(function () {
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
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcHJvamVjdC1yZXBvcnRzL3Byb2plY3QtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcHJvamVjdC1yZXBvcnRzL3Byb2plY3QtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL3Byb2plY3QtcmVwb3J0cy9wcm9qZWN0LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufSIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n\n.table-bordered {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table-bordered td {\n  border: 1px solid black;\n  padding: 8px;\n  text-align: left;\n}\n\n.b4-datatable > thead > tr > th {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvc2FsYXJ5LXJlcG9ydHMvc2FsYXJ5LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL3NhbGFyeS1yZXBvcnRzL3NhbGFyeS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENFO0VBQ0UsdUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL3NhbGFyeS1yZXBvcnRzL3NhbGFyeS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAudGFibGUtYm9yZGVyZWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweDsgXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXG4gIH1cbiAgLmI0LWRhdGF0YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH0iLCI6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtYm9yZGVyZWQgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYjQtZGF0YXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */");

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
        user.timesheet.forEach(function (element, index) {
            if (element && element.check) {
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
        this.exportTableData.forEach(function (user, index) {
            var res = '0';
            var timesheet_day = 0;
            var salary1day = (user.contract.basic + user.contract.performance) / (_this.workingInMonth + 2);
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
            if (user.contract && user.contract.id) {
                user.salary_basic = user.contract.basic;
                user.salary_performance = user.contract.performance;
                user.salary_total_real = user.contract.basic + user.contract.performance;
                user.salary_lunch = user.contract.lunch;
                user.salary_total = user.contract.basic + user.contract.performance;
                user.timesheet.forEach(function (element, index) {
                    if (element && element.check) {
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
                user.salary_working_day = timesheet_day;
                user.salary_working_salary = user.salary_working_day * salary1day;
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
                user.salary_sum_of_sums = user.contract.lunch + user.salary_leave_salary + user.salary_working_salary;
                user.salary_dependents = user.dependents * _this.settings.dependent;
                user.salary_BHBB = user.salary_sum_of_sums * 10.5 / 100;
                user.salary_personal_income_taxt = user.salary_dependents + _this.settings.personal + user.salary_lunch + user.salary_BHBB;
            }
            // switch (action) {
            //     case 'basic':
            //         if(user.contract && user.contract.id){
            //             res = user.contract.basic;
            //         }
            //         break;
            //     case 'performance':
            //         if(user.contract && user.contract.id){
            //             res = user.contract.performance;
            //         }
            //         break;
            //     case 'lunch':
            //         if(user.contract && user.contract.id){
            //             res = user.contract.lunch;
            //         }
            //         break;
            //     case 'total':
            //         if(user.contract && user.contract.id){
            //             res = user.contract.basic + user.contract.performance;
            //         }
            //     case 'working_day':
            //         user.timesheet.forEach((element, index) => {
            //             if (element && element.check) {
            //                 switch (element.value) {
            //                     case 8.5:
            //                         timesheet_day += 1;
            //                         break;
            //                     case 4.5:
            //                         timesheet_day += 0.5;
            //                         break;
            //                     case 4:
            //                         timesheet_day += 0.5;
            //                         break;
            //                     default:
            //                         break;
            //                 }
            //             }
            //         });
            //         res = String(timesheet_day);
            //         break;
            //     case 'working_salary':
            //         if(user.contract && user.contract.id){
            //             user.timesheet.forEach((element, index) => {
            //                 if (element && element.check) {
            //                     switch (element.value) {
            //                         case 8.5:
            //                             timesheet_day += 1;
            //                             break;
            //                         case 4.5:
            //                             timesheet_day += 0.5;
            //                             break;
            //                         case 4:
            //                             timesheet_day += 0.5;
            //                             break;
            //                         default:
            //                             break;
            //                     }
            //                 }
            //             });
            //             res = String(timesheet_day * salary1day);
            //         }
            //         break;
            //     case 'leave_salary':
            //         if(user.contract && user.contract.id){
            //             let leave_day = 0;
            //             this.holidays.forEach((element, index) => {
            //                 leave_day += 1;
            //             });
            //             this.leaves.forEach((element, index) => {
            //                 if(user.id == element.user_id && element.leave_type_id == 1){
            //                     if(element.duration == 'half'){
            //                         leave_day += 0.5;
            //                     } else {
            //                         leave_day += 1;
            //                     }
            //                 }
            //             });
            //             res = String(leave_day * salary1day);
            //         }
            //         break;
            //     case 'sum_of_sums':
            //         if(user.contract && user.contract.id){
            //             res = user.contract.lunch;
            //             let leave_day = 0;
            //             this.holidays.forEach((element, index) => {
            //                 leave_day += 1;
            //             });
            //             this.leaves.forEach((element, index) => {
            //                 if(user.id == element.user_id && element.leave_type_id == 1){
            //                     if(element.duration == 'half'){
            //                         leave_day += 0.5;
            //                     } else {
            //                         leave_day += 1;
            //                     }
            //                 }
            //             });
            //             res += (leave_day * salary1day);
            //             let timesheet_day = 0;
            //             user.timesheet.forEach((element, index) => {
            //                 if (element && element.check) {
            //                     switch (element.value) {
            //                         case 8.5:
            //                             timesheet_day += 1;
            //                             break;
            //                         case 4.5:
            //                             timesheet_day += 0.5;
            //                             break;
            //                         case 4:
            //                             timesheet_day += 0.5;
            //                             break;
            //                         default:
            //                             break;
            //                     }
            //                 }
            //             });
            //             res += (timesheet_day * salary1day);
            //             res = String(res);
            //         }
            //         break;
            //         case 'dependents':
            //             if(user.dependents > 0 && this.settings && this.settings.dependent && this.settings.dependent > 0){
            //                 res = String(user.dependents * this.settings.dependent);
            //             } else {
            //                 res = "0";
            //             }
            //             break;
            //         case 'BHBB':
            //             if(user.contract && user.contract.id){
            //                 let total = 0;
            //                 let leave_day = 0;
            //                 this.holidays.forEach((element, index) => {
            //                     leave_day += 1;
            //                 });
            //                 this.leaves.forEach((element, index) => {
            //                     if(user.id == element.user_id && element.leave_type_id == 1){
            //                         if(element.duration == 'half'){
            //                             leave_day += 0.5;
            //                         } else {
            //                             leave_day += 1;
            //                         }
            //                     }
            //                 });
            //                 total += (leave_day * salary1day);
            //                 let timesheet_day = 0;
            //                 user.timesheet.forEach((element, index) => {
            //                     if (element && element.check) {
            //                         switch (element.value) {
            //                             case 8.5:
            //                                 timesheet_day += 1;
            //                                 break;
            //                             case 4.5:
            //                                 timesheet_day += 0.5;
            //                                 break;
            //                             case 4:
            //                                 timesheet_day += 0.5;
            //                                 break;
            //                             default:
            //                                 break;
            //                         }
            //                     }
            //                 });
            //                 total += (timesheet_day * salary1day);
            //                 let BHBB = total*10.5/100;
            //                 res = String(Number(BHBB).toFixed(0));
            //             }
            //         break;
            //         case 'personal_income_taxt':
            //             if(user.contract && user.contract.id){
            //                 let total = 0;
            //                 let leave_day = 0;
            //                 this.holidays.forEach((element, index) => {
            //                     leave_day += 1;
            //                 });
            //                 this.leaves.forEach((element, index) => {
            //                     if(user.id == element.user_id && element.leave_type_id == 1){
            //                         if(element.duration == 'half'){
            //                             leave_day += 0.5;
            //                         } else {
            //                             leave_day += 1;
            //                         }
            //                     }
            //                 });
            //                 total += (leave_day * salary1day);
            //                 let timesheet_day = 0;
            //                 user.timesheet.forEach((element, index) => {
            //                     if (element && element.check) {
            //                         switch (element.value) {
            //                             case 8.5:
            //                                 timesheet_day += 1;
            //                                 break;
            //                             case 4.5:
            //                                 timesheet_day += 0.5;
            //                                 break;
            //                             case 4:
            //                                 timesheet_day += 0.5;
            //                                 break;
            //                             default:
            //                                 break;
            //                         }
            //                     }
            //                 });
            //                 total += (timesheet_day * salary1day);
            //                 let BHBB = total*10.5/100;
            //                 res = String(Number(BHBB).toFixed(0));
            //             }
            //         break;
            //     default:
            //         break;
            // }
            // return this.sanitizer.bypassSecurityTrustHtml(`${this.formatNumber(res)}`);
        });
    };
    SalaryReportsComponent.prototype.formatNumber = function (res) {
        return new Intl.NumberFormat('vi-VN').format(Number(res));
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
        // this.month = this.datePipe.transform(selectedDate, 'yyyy/MM');
        this.month = this.datePipe.transform("2025-08", 'yyyy-MM');
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
    SalaryReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsService.save(this.exportAsConfig, 'Timesheet').subscribe(function () {
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
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n\n.table-bordered {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table-bordered td {\n  border: 1px solid black;\n  padding: 8px;\n  text-align: left;\n}\n\n.b4-datatable > thead > tr > th {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZ3JlZW52aWV0LXBoYXNlMi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvdXNlci1yZXBvcnRzL3VzZXItcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvdXNlci1yZXBvcnRzL3VzZXItcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLHVCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL3JlcG9ydHMvY29tcG9uZW50cy91c2VyLXJlcG9ydHMvdXNlci1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAudGFibGUtYm9yZGVyZWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweDsgXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXG4gIH1cbiAgLmI0LWRhdGF0YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH0iLCI6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtYm9yZGVyZWQgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYjQtZGF0YXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */");

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
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_15__);














Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('vi', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__["viLocale"]);


var UserReportsComponent = /** @class */ (function () {
    function UserReportsComponent(translate, http, datePipe, authenticationService, sanitizer, exportAsService) {
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
        this.users = [
            {
                "id": 71,
                "user_generated_id": "USR0071",
                "firstname": "An",
                "lastname": "Nguyen Binh",
                "username": "an.nguyen",
                "email": "an.nguyen@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "IibZfmP6qf2VIDB8pBsliOvHk4ZGi3m1EYkeKie2",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "1.53.235.238",
                "last_login": "2025-09-21 06:32:17",
                "emp_id": "USR0071",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-21T06:32:17.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "2.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV067",
                "timesheets_status": {
                    "id": 16984,
                    "project_id": 202,
                    "module_id": 2,
                    "module_related_id": 1247,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 05:30:00",
                    "decimal_time": "5.50",
                    "hour_time": "05:30",
                    "note": "- Xref for PJ",
                    "approved1": 21,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 356176,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 1,
                    "created_user_id": 71,
                    "created_at": "2025-09-19 23:34:58",
                    "updated_at": "2025-09-20 00:43:29",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "An Nguyen Binh",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 71,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 71,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 61,
                "user_generated_id": "USR0061",
                "firstname": "Bao",
                "lastname": "Nguyen Duong Gia",
                "username": "bao.nguyen",
                "email": "bao.nguyen@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "kwmOVMNpnYa7tsyi7ns4OF9qYCgmqfPDSxBO9jEQ",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:09:55",
                "emp_id": "USR0061",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:09:55.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV068",
                "timesheets_status": {
                    "id": 17178,
                    "project_id": 197,
                    "module_id": 2,
                    "module_related_id": 1213,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 03:00:00",
                    "decimal_time": "3.00",
                    "hour_time": "03:00",
                    "note": "SSc2, landscape plan, INc4",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 160428,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 61,
                    "created_at": "2025-09-20 00:15:23",
                    "updated_at": "2025-09-20 00:15:23",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Bao Nguyen Duong Gia",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 61,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 61,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 13,
                "user_generated_id": "USR0013",
                "firstname": "\u0110\u1ea1t",
                "lastname": "Nguy\u1ec5n T\u1ea5n",
                "username": "Dat.nguyen",
                "email": "dat.nguyen@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "IWInisuHKIakduoqEfGVN8HPNd2ARBZOq8mxzRJp",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:03:12",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:03:12.000000Z",
                "deleted_at": null,
                "dependents": 2,
                "init_paid_leave": "11.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV009",
                "timesheets_status": {
                    "id": 16872,
                    "project_id": 176,
                    "module_id": 2,
                    "module_related_id": 1105,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 02:00:00",
                    "decimal_time": "2.00",
                    "hour_time": "02:00",
                    "note": "EDGE Apps",
                    "approved1": 27,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 259251,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 1,
                    "created_user_id": 13,
                    "created_at": "2025-09-19 20:37:59",
                    "updated_at": "2025-09-20 00:13:50",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "\u0110\u1ea1t Nguy\u1ec5n T\u1ea5n",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 13,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 13,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 3,
                "user_generated_id": "USR0003",
                "firstname": "Duc",
                "lastname": "Le Minh",
                "username": "Ducle",
                "email": "ducle@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "5Kjxguh71oNgGIpqc8wtpjeyOaDv1L4CVzEamZxx",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "118.71.49.196",
                "last_login": "2025-09-16 16:44:55",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-16T16:44:55.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "1.5",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV019",
                "timesheets_status": {
                    "id": 16595,
                    "project_id": 29,
                    "module_id": 2,
                    "module_related_id": 200,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 08:30:00",
                    "decimal_time": "8.50",
                    "hour_time": "08:30",
                    "note": "submission",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 1685455,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 3,
                    "created_at": "2025-09-16 23:45:42",
                    "updated_at": "2025-09-16 23:45:42",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Duc Le Minh",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 3,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 3,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 4,
                "user_generated_id": "USR0004",
                "firstname": "Dung",
                "lastname": "Bui Anh",
                "username": "Dung.bui",
                "email": "dung.bui@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "TQbIxA3kVtuC4Np47MpPxiTvPOskZyOMUL9g6pxr",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 16:48:46",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T16:48:46.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "10.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV045",
                "timesheets_status": {
                    "id": 17210,
                    "project_id": 200,
                    "module_id": 2,
                    "module_related_id": 1230,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 02:30:00",
                    "decimal_time": "2.50",
                    "hour_time": "02:30",
                    "note": "Cost impact & Environmental impacts",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 382353,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 4,
                    "created_at": "2025-09-20 00:18:14",
                    "updated_at": "2025-09-20 00:18:14",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Dung Bui Anh",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 4,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 4,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 8,
                "user_generated_id": "USR0008",
                "firstname": "D\u0169ng",
                "lastname": "L\u00ea Ph\u01b0\u01a1ng",
                "username": "Dung.le",
                "email": "dung.le@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "KeRQmjS3QtZym1opjp3uY1wtZjqj1NJcRfuSOIR7",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "27.2.139.50",
                "last_login": "2025-09-19 17:01:14",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:01:14.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "6.5",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV006",
                "timesheets_status": {
                    "id": 17010,
                    "project_id": 152,
                    "module_id": 2,
                    "module_related_id": 971,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 03:00:00",
                    "decimal_time": "3.00",
                    "hour_time": "03:00",
                    "note": "Reports review",
                    "approved1": 21,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 490588,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 1,
                    "created_user_id": 8,
                    "created_at": "2025-09-20 00:02:56",
                    "updated_at": "2025-09-20 00:45:41",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "D\u0169ng L\u00ea Ph\u01b0\u01a1ng",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 8,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 8,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 5,
                "user_generated_id": "USR0005",
                "firstname": "Hi\u1ec1n",
                "lastname": "Nguy\u1ec5n H\u1eefu",
                "username": "Hien.nguyenhuu",
                "email": "hien.nguyenhuu@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "PEn8YJMahyp8KFFFvh80Pap7KnQTXqiTbPQOD5iL",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:09:22",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:09:22.000000Z",
                "deleted_at": null,
                "dependents": 1,
                "init_paid_leave": "15.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV008",
                "timesheets_status": {
                    "id": 17114,
                    "project_id": 195,
                    "module_id": 2,
                    "module_related_id": 1202,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 02:00:00",
                    "decimal_time": "2.00",
                    "hour_time": "02:00",
                    "note": "",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 458717,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 5,
                    "created_at": "2025-09-20 00:11:12",
                    "updated_at": "2025-09-20 00:11:12",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Manager"
                },
                "full_name": "Hi\u1ec1n Nguy\u1ec5n H\u1eefu",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 5,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 5,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 30,
                "user_generated_id": "USR0030",
                "firstname": "H\u01b0\u01a1ng",
                "lastname": "V\u00f5 Th\u1ecb Xu\u00e2n",
                "username": "Huong.vo",
                "email": "huong.vo@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "HBMnepxnEZtQ2d9fN5wNVaqYTgupTfwGQDeoX38G",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:52:11",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:52:11.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "7.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV041",
                "timesheets_status": {
                    "id": 17411,
                    "project_id": 172,
                    "module_id": 2,
                    "module_related_id": 1091,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 02:00:00",
                    "decimal_time": "2.00",
                    "hour_time": "02:00",
                    "note": "- T\u1ed5ng h\u1ee3p c\u00f4ng \u0111o\u00e0n 2025: Check s\u1ed1 ti\u1ec1n \u0111\u00f3ng t\u1eeb 2019 - 2025",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 160749,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 30,
                    "created_at": "2025-09-20 01:31:50",
                    "updated_at": "2025-09-20 01:31:50",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "HR",
                    "role_name": "Manager"
                },
                "full_name": "H\u01b0\u01a1ng V\u00f5 Th\u1ecb Xu\u00e2n",
                "departments": [
                    {
                        "id": 3,
                        "name": "HR",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 30,
                            "department_id": 3
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 30,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 72,
                "user_generated_id": "USR0072",
                "firstname": "Khoa",
                "lastname": "Tran Nguyen Anh",
                "username": "khoa.tran",
                "email": "khoa.tran@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "mVbRatctDthYTbHRWuhlPjzGSIqzqNx50jqM5MsS",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:05:54",
                "emp_id": "USR0072",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:05:54.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": null,
                "timesheets_status": {
                    "id": 17099,
                    "project_id": 183,
                    "module_id": 2,
                    "module_related_id": 1138,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 06:30:00",
                    "decimal_time": "6.50",
                    "hour_time": "06:30",
                    "note": "Research WELL + Create a space classification EDGE form excel from LEED",
                    "approved1": 27,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 104278,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 1,
                    "created_user_id": 72,
                    "created_at": "2025-09-20 00:10:54",
                    "updated_at": "2025-09-20 00:17:44",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Khoa Tran Nguyen Anh",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 72,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 72,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 21,
                "user_generated_id": "USR0021",
                "firstname": "Long",
                "lastname": "Tran Thanh",
                "username": "longtran",
                "email": "longtran@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "cg6GGEDz6SYnpr2KroI4NhpWdZGPMkQwloQe3lR3",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 15:19:01",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T15:19:01.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "4.5",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV011",
                "timesheets_status": {
                    "id": 17269,
                    "project_id": 202,
                    "module_id": 2,
                    "module_related_id": 1243,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 02:30:00",
                    "decimal_time": "2.50",
                    "hour_time": "02:30",
                    "note": "H\u1ecdp online",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 475802,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 21,
                    "created_at": "2025-09-20 00:38:52",
                    "updated_at": "2025-09-20 00:38:53",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Manager"
                },
                "full_name": "Long Tran Thanh",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 21,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 21,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 16,
                "user_generated_id": "USR0016",
                "firstname": "Nga",
                "lastname": "Nguyen",
                "username": "Nga.nguyen",
                "email": "nga.nguyen@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "zXPvSWs4xwK1Tp0XzXY9XcPhbFjhaTYgkrWzmTPM",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:09:00",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:09:00.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "4.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV066",
                "timesheets_status": {
                    "id": 17155,
                    "project_id": 180,
                    "module_id": 2,
                    "module_related_id": 1119,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 01:00:00",
                    "decimal_time": "1.00",
                    "hour_time": "01:00",
                    "note": "Th\u01b0 x\u00e1c nh\u1eadn",
                    "approved1": 27,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 65241,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 1,
                    "created_user_id": 16,
                    "created_at": "2025-09-20 00:13:32",
                    "updated_at": "2025-09-20 00:18:01",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Nga Nguyen",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 16,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 16,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 79,
                "user_generated_id": "USR0079",
                "firstname": "Nhung",
                "lastname": "Truong Thi Hong",
                "username": "nhung.truong",
                "email": "nhung.truong@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "U1ofTSxQmlqjrx82HsPi8jnNcqTRnbFqq4YUdhGm",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 18:01:40",
                "emp_id": "USR0079",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T18:01:40.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-10-01 07:00:00",
                "employment_id": null,
                "timesheets_status": {
                    "id": 17376,
                    "project_id": 172,
                    "module_id": 2,
                    "module_related_id": 1134,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 01:30:00",
                    "decimal_time": "1.50",
                    "hour_time": "01:30",
                    "note": "- Scan, in, g\u1eedi th\u01b0 LOA, Leed Volume Sembcorp",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 106684,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 79,
                    "created_at": "2025-09-20 01:12:58",
                    "updated_at": "2025-09-20 01:12:58",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Nhung Truong Thi Hong",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 79,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 79,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 78,
                "user_generated_id": "USR0078",
                "firstname": "Oanh",
                "lastname": "Tran Hoang",
                "username": "Oanh.Tran",
                "email": "oanh.tran@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "7pEIls6elVTr81o0SA6sYFl9U3M4LmQEvReCnm02",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 07:58:47",
                "emp_id": "USR0078",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T07:58:47.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-07-01 07:00:00",
                "employment_id": null,
                "timesheets_status": null,
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Oanh Tran Hoang",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 78,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 78,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 74,
                "user_generated_id": "USR0074",
                "firstname": "Phuong",
                "lastname": "Le Huu Nhat",
                "username": "phuongle",
                "email": "phuong.le@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "EvfIpdjPGBDQu0bcfLRVEicY33tuc9QngdpAvKzL",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:43:45",
                "emp_id": "USR0074",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:43:45.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": null,
                "timesheets_status": {
                    "id": 17302,
                    "project_id": 135,
                    "module_id": 2,
                    "module_related_id": 870,
                    "start_time": "2025-09-16 00:00:00",
                    "end_time": "2025-09-16 06:30:00",
                    "decimal_time": "6.50",
                    "hour_time": "06:30",
                    "note": "Podium\nBlock A,B,C\n-MEM01,02,06",
                    "approved1": 21,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 104278,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 1,
                    "created_user_id": 74,
                    "created_at": "2025-09-20 00:44:19",
                    "updated_at": "2025-09-20 00:47:26",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Phuong Le Huu Nhat",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 74,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 74,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 14,
                "user_generated_id": "USR0014",
                "firstname": "Quang",
                "lastname": "Nguy\u1ec5n Thanh",
                "username": "Quang.nguyen",
                "email": "quang.nguyen@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "iMykOmSOkFYt6JVu5pWzmxQFSURmjFmytITujnUt",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 15:07:00",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T15:07:00.000000Z",
                "deleted_at": null,
                "dependents": 1,
                "init_paid_leave": "10.5",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV010",
                "timesheets_status": {
                    "id": 15891,
                    "project_id": 24,
                    "module_id": 2,
                    "module_related_id": 164,
                    "start_time": "2025-09-08 00:00:00",
                    "end_time": "2025-09-08 02:00:00",
                    "decimal_time": "2.00",
                    "hour_time": "02:00",
                    "note": "Review Assessment_R1 (Construction)",
                    "approved1": 27,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 298396,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 1,
                    "created_user_id": 14,
                    "created_at": "2025-09-11 20:51:45",
                    "updated_at": "2025-09-17 00:29:15",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Quang Nguy\u1ec5n Thanh",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 14,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 14,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 20,
                "user_generated_id": "USR0020",
                "firstname": "Quang",
                "lastname": "Do",
                "username": "Quangdo",
                "email": "quangdo@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "PHk3T73pnPthBuiLl5XIkXcF9cwi2GGunemd0YLH",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.191.216.113",
                "last_login": "2025-08-23 21:42:11",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-08-23T21:42:11.000000Z",
                "deleted_at": null,
                "dependents": 3,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-02-28 07:00:00",
                "employment_id": "BOD02",
                "timesheets_status": null,
                "department_role": {
                    "department_name": "BOD",
                    "role_name": "Manager"
                },
                "full_name": "Quang Do",
                "departments": [
                    {
                        "id": 6,
                        "name": "BOD",
                        "created_at": "2025-06-08T21:53:56.000000Z",
                        "updated_at": "2025-06-08T21:53:56.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 20,
                            "department_id": 6
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 20,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 80,
                "user_generated_id": "USR0080",
                "firstname": "Russell",
                "lastname": "",
                "username": "Russell",
                "email": "russell@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "0Vz2HHMC3AN46tkwaxfZl1RQBsU3N1ZBN7re6sFJ",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:17:22",
                "emp_id": "USR0080",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:17:22.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": null,
                "employment_id": null,
                "timesheets_status": {
                    "id": 17227,
                    "project_id": 185,
                    "module_id": 2,
                    "module_related_id": 1156,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 08:30:00",
                    "decimal_time": "8.50",
                    "hour_time": "08:30",
                    "note": "Not here yet",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 0,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 80,
                    "created_at": "2025-09-20 00:18:43",
                    "updated_at": "2025-09-20 00:18:43",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Russell ",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 80,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 80,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 9,
                "user_generated_id": "USR0009",
                "firstname": "Th\u00e0nh",
                "lastname": "L\u00ea Th\u1ebf",
                "username": "Thanh.le",
                "email": "thanh.le@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "1Ks03MRkx3eIwkFrfvpRxK9sWcsxGqAAN5TVL83L",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "104.28.205.70",
                "last_login": "2025-09-19 17:00:30",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:00:30.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "12.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV003",
                "timesheets_status": {
                    "id": 17168,
                    "project_id": 90,
                    "module_id": 2,
                    "module_related_id": 605,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 04:00:00",
                    "decimal_time": "4.00",
                    "hour_time": "04:00",
                    "note": "Review submittal",
                    "approved1": 27,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 544171,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 1,
                    "created_user_id": 9,
                    "created_at": "2025-09-20 00:13:49",
                    "updated_at": "2025-09-20 00:18:37",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Th\u00e0nh L\u00ea Th\u1ebf",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 9,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 9,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 10,
                "user_generated_id": "USR0010",
                "firstname": "Thao",
                "lastname": "Nguyen Le Hien",
                "username": "Thao.nguyen",
                "email": "thao.nguyen@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "YjLETHltlfqZnn3wY3uyXq7QhgyTcNi4Xi5AF3sr",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-20 15:29:25",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-20T15:29:25.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "4.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV062",
                "timesheets_status": {
                    "id": 17359,
                    "project_id": 172,
                    "module_id": 2,
                    "module_related_id": 1134,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 00:30:00",
                    "decimal_time": "0.50",
                    "hour_time": "00:30",
                    "note": "- Ki\u1ec3m tra h\u1ed3 s\u01a1 di chuy\u1ec3n Grab cty\n- \u0110\u1eb7t h\u00e0ng decal d\u00e1n k\u00ednh t\u1eb7ng d\u1ef1 \u00e1n\n- L\u01b0u h\u00f3a \u0111\u01a1n ti\u1ebfp kh\u00e1ch",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 40909,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 10,
                    "created_at": "2025-09-20 00:55:06",
                    "updated_at": "2025-09-20 00:55:06",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Accountant",
                    "role_name": "Staff"
                },
                "full_name": "Thao Nguyen Le Hien",
                "departments": [
                    {
                        "id": 5,
                        "name": "Accountant",
                        "created_at": "2024-10-17T04:00:47.000000Z",
                        "updated_at": "2024-10-17T04:00:47.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 10,
                            "department_id": 5
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 10,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 22,
                "user_generated_id": "USR0022",
                "firstname": "Thi",
                "lastname": "Dang",
                "username": "Thidang",
                "email": "thidang@greenviet.net",
                "is_super_admin": 1,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "NZSBNyUJkkdg79TdYs0ben20eeRbJxlEpRFjdoPc",
                "online_status": 1,
                "avatar": "6849041d12f40.jpeg",
                "last_ip": "::1",
                "last_login": "2025-10-05 20:39:08",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-10-05T13:39:08.000000Z",
                "deleted_at": null,
                "dependents": 1,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-02-28 07:00:00",
                "employment_id": "BOD03",
                "timesheets_status": null,
                "department_role": {
                    "department_name": "Administration",
                    "role_name": "Admin"
                },
                "full_name": "Thi Dang",
                "departments": [
                    {
                        "id": 1,
                        "name": "Administration",
                        "created_at": "2022-06-06T13:26:43.000000Z",
                        "updated_at": "2022-06-06T13:26:43.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 22,
                            "department_id": 1
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 1,
                        "name": "Admin",
                        "slug": "admin",
                        "description": "User has access to all system functionality.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 22,
                            "role_id": 1
                        }
                    }
                ]
            },
            {
                "id": 1,
                "user_generated_id": "USR0001",
                "firstname": "Thi\u1ec7n",
                "lastname": "B\u00f9i Minh",
                "username": "Thien.bui",
                "email": "thien.bui@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "FAXLP0vMFJxbNpZez11X6yyHhfeCZuNnQKe4yPZ1",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 16:50:51",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T16:50:51.000000Z",
                "deleted_at": null,
                "dependents": 1,
                "init_paid_leave": "4.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV024",
                "timesheets_status": {
                    "id": 17196,
                    "project_id": 189,
                    "module_id": 2,
                    "module_related_id": 1174,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 01:00:00",
                    "decimal_time": "1.00",
                    "hour_time": "01:00",
                    "note": "slide",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 127968,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 1,
                    "created_at": "2025-09-20 00:17:30",
                    "updated_at": "2025-09-20 00:17:30",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Thi\u1ec7n B\u00f9i Minh",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 1,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 1,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 17,
                "user_generated_id": "USR0017",
                "firstname": "Th\u1ecd",
                "lastname": "Nguy\u1ec5n Tr\u01b0\u1eddng",
                "username": "Tho.nguyen",
                "email": "tho.nguyen@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "vY4SFVQEkgzTO7772O0JxRsuCKlCDwp0wMwJxfDE",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:01:23",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:01:23.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "5.5",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV064",
                "timesheets_status": {
                    "id": 17041,
                    "project_id": 191,
                    "module_id": 2,
                    "module_related_id": 1184,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 05:00:00",
                    "decimal_time": "5.00",
                    "hour_time": "05:00",
                    "note": "L\u00e0m form h\u01b0\u1edbng d\u1eabn theo t\u1eebng h\u1ea1ng m\u1ee5c. (plan, policy,...)",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 350802,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 17,
                    "created_at": "2025-09-20 00:03:13",
                    "updated_at": "2025-09-20 00:03:13",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Th\u1ecd Nguy\u1ec5n Tr\u01b0\u1eddng",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 17,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 17,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 12,
                "user_generated_id": "USR0012",
                "firstname": "Th\u1ecd",
                "lastname": "Nguy\u1ec5n Ph\u01b0\u1edbc",
                "username": "Tho.nguyenphuoc",
                "email": "tho.nguyenphuoc@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "g1KFByxe8BjkfzKDiqCZ8SawSTNQUrH0FLDvOdj7",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-20 07:55:24",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-20T07:55:24.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "6.5",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV013",
                "timesheets_status": {
                    "id": 17427,
                    "project_id": 159,
                    "module_id": 2,
                    "module_related_id": 1017,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 02:00:00",
                    "decimal_time": "2.00",
                    "hour_time": "02:00",
                    "note": "L\u00e0m b\u1ea3n v\u1ebd landscape",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 162353,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 12,
                    "created_at": "2025-09-20 15:32:45",
                    "updated_at": "2025-09-20 15:32:45",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Th\u1ecd Nguy\u1ec5n Ph\u01b0\u1edbc",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 12,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 12,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 32,
                "user_generated_id": "USR0032",
                "firstname": "Thu\u1eadn",
                "lastname": "Dinh",
                "username": "Thu\u1eadnDinh",
                "email": "thuan.dinh@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "Di6DUlQgDie1JkYWSWdRgxw2cCHK0HZ19YhJGtph",
                "online_status": 0,
                "avatar": "684903299864c.png",
                "last_ip": "27.65.238.196",
                "last_login": "2025-06-15 17:01:48",
                "emp_id": "USR0032",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-08-25T13:17:10.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-01-01 07:00:00",
                "employment_id": null,
                "timesheets_status": null,
                "department_role": {
                    "department_name": "BOD",
                    "role_name": "Manager"
                },
                "full_name": "Thu\u1eadn Dinh",
                "departments": [
                    {
                        "id": 6,
                        "name": "BOD",
                        "created_at": "2025-06-08T21:53:56.000000Z",
                        "updated_at": "2025-06-08T21:53:56.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 32,
                            "department_id": 6
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 32,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 23,
                "user_generated_id": "USR0023",
                "firstname": "Thu",
                "lastname": "Nguyen",
                "username": "Thunguyen",
                "email": "thunguyen@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "Ou6HsbW87u18NwEPcTos7JUOSnMOsQd5xYqNgr5b",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-18 16:46:31",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-18T16:46:31.000000Z",
                "deleted_at": null,
                "dependents": 2,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-02-28 07:00:00",
                "employment_id": "BOD01",
                "timesheets_status": null,
                "department_role": {
                    "department_name": "BOD",
                    "role_name": "Manager"
                },
                "full_name": "Thu Nguyen",
                "departments": [
                    {
                        "id": 6,
                        "name": "BOD",
                        "created_at": "2025-06-08T21:53:56.000000Z",
                        "updated_at": "2025-06-08T21:53:56.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 23,
                            "department_id": 6
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 23,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 34,
                "user_generated_id": "USR0034",
                "firstname": "Timesheet",
                "lastname": "Manager",
                "username": "timesheet.leader",
                "email": "timesheet.leader@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "wzJyAdpYq1WSGyrBOFND3XDME5rLQPDubS6zxIUe",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-06-16 10:40:31",
                "emp_id": "USR0034",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-06-17T11:02:59.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-01-01 07:00:00",
                "employment_id": null,
                "timesheets_status": {
                    "id": 49,
                    "project_id": 169,
                    "module_id": 2,
                    "module_related_id": 1075,
                    "start_time": "2025-05-26 00:00:00",
                    "end_time": "2025-05-26 08:30:00",
                    "decimal_time": "8.50",
                    "hour_time": "08:30",
                    "note": "",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 5909091,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 34,
                    "created_at": "2025-06-02 16:42:59",
                    "updated_at": "2025-06-02 16:42:59",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Manager"
                },
                "full_name": "Timesheet Manager",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 34,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 34,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 63,
                "user_generated_id": "USR0063",
                "firstname": "Timesheet",
                "lastname": "Leader1",
                "username": "timesheet.leader1",
                "email": "timesheet.leader1@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "5DgvamHTC1WoDYcMiUMKDNvBdCOpvIiG3PIM7gwv",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-06-12 15:03:51",
                "emp_id": "USR0063",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-06-12T15:03:51.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": null,
                "timesheets_status": {
                    "id": 743,
                    "project_id": 169,
                    "module_id": 2,
                    "module_related_id": 1075,
                    "start_time": "2025-05-26 00:00:00",
                    "end_time": "2025-05-26 04:30:00",
                    "decimal_time": "4.50",
                    "hour_time": "04:30",
                    "note": "",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 3609626,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 63,
                    "created_at": "2025-06-05 23:19:13",
                    "updated_at": "2025-06-05 23:19:13",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Manager"
                },
                "full_name": "Timesheet Leader1",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 63,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 63,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 75,
                "user_generated_id": "USR0075",
                "firstname": "Timesheet",
                "lastname": "Accountant",
                "username": "TimesheetAccountant",
                "email": "timesheet.acc@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "FOx8llrDvdX9kjg9KehKxZRIzZkajCyaKeKYbiBX",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-06-25 13:20:13",
                "emp_id": "USR0075",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-06-25T13:20:13.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-05-01 07:00:00",
                "employment_id": null,
                "timesheets_status": null,
                "department_role": {
                    "department_name": "Accountant",
                    "role_name": "Staff"
                },
                "full_name": "Timesheet Accountant",
                "departments": [
                    {
                        "id": 5,
                        "name": "Accountant",
                        "created_at": "2024-10-17T04:00:47.000000Z",
                        "updated_at": "2024-10-17T04:00:47.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 75,
                            "department_id": 5
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 75,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 76,
                "user_generated_id": "USR0076",
                "firstname": "Timesheet",
                "lastname": "BOD",
                "username": "TimesheetBOD",
                "email": "timesheet.bod@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "lTjC2KNrQvttMDN6tR0uldnvFl7bf93dR3EOClyq",
                "online_status": 1,
                "avatar": "685a29a1502dd.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-18 14:32:40",
                "emp_id": "USR0076",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-18T14:32:40.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "50.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": null,
                "timesheets_status": null,
                "department_role": {
                    "department_name": "BOD",
                    "role_name": "Manager"
                },
                "full_name": "Timesheet BOD",
                "departments": [
                    {
                        "id": 6,
                        "name": "BOD",
                        "created_at": "2025-06-08T21:53:56.000000Z",
                        "updated_at": "2025-06-08T21:53:56.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 76,
                            "department_id": 6
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 76,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 35,
                "user_generated_id": "USR0035",
                "firstname": "Timesheet",
                "lastname": "HR",
                "username": "TimesheetHR",
                "email": "timesheet.hr@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "nJwpv6n0TjS1zCEyc1dLBajdjh1fw07b6Efrputy",
                "online_status": 0,
                "avatar": "5-man.png",
                "last_ip": "103.199.54.103",
                "last_login": "2025-08-29 13:15:51",
                "emp_id": "USR0035",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-08-29T13:15:59.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2030-12-01 07:00:00",
                "employment_id": null,
                "timesheets_status": {
                    "id": 1899,
                    "project_id": 174,
                    "module_id": 2,
                    "module_related_id": 1094,
                    "start_time": "2025-06-02 00:00:00",
                    "end_time": "2025-06-02 08:30:00",
                    "decimal_time": "8.50",
                    "hour_time": "08:30",
                    "note": "",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 0,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 35,
                    "created_at": "2025-06-10 20:40:18",
                    "updated_at": "2025-06-10 20:40:18",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "HR",
                    "role_name": "Manager"
                },
                "full_name": "Timesheet HR",
                "departments": [
                    {
                        "id": 3,
                        "name": "HR",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 35,
                            "department_id": 3
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 35,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 33,
                "user_generated_id": "USR0033",
                "firstname": "Timesheet",
                "lastname": "User",
                "username": "TimesheetUser",
                "email": "timesheet.user@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "dHPEi57MOTX26QRtlTYzEd7r8z2UbRZQ0CCXrXM1",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "171.249.237.20",
                "last_login": "2025-06-17 15:37:20",
                "emp_id": "USR0033",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-06-17T15:37:20.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2030-12-01 07:00:00",
                "employment_id": null,
                "timesheets_status": {
                    "id": 3695,
                    "project_id": 169,
                    "module_id": 2,
                    "module_related_id": 1075,
                    "start_time": "2025-06-09 00:00:00",
                    "end_time": "2025-06-09 04:00:00",
                    "decimal_time": "4.00",
                    "hour_time": "04:00",
                    "note": "",
                    "approved1": 34,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 224090,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 1,
                    "created_user_id": 33,
                    "created_at": "2025-06-16 17:47:03",
                    "updated_at": "2025-06-16 17:47:15",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Timesheet User",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 33,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 33,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 62,
                "user_generated_id": "USR0062",
                "firstname": "Timesheet",
                "lastname": "User1",
                "username": "TimesheetUser1",
                "email": "timesheet.user1@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "dFcjBWGGm8PKDRMsphdU6t9eC7trkCV2cONudxvl",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "171.249.237.20",
                "last_login": "2025-06-06 13:12:03",
                "emp_id": "USR0062",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-06-06T13:12:03.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "0.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": null,
                "timesheets_status": {
                    "id": 753,
                    "project_id": 169,
                    "module_id": 2,
                    "module_related_id": 1075,
                    "start_time": "2025-05-26 00:00:00",
                    "end_time": "2025-05-26 04:00:00",
                    "decimal_time": "4.00",
                    "hour_time": "04:00",
                    "note": "",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 1069519,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 62,
                    "created_at": "2025-06-05 23:20:00",
                    "updated_at": "2025-06-05 23:20:00",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Timesheet User1",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 62,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 62,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 26,
                "user_generated_id": "USR0026",
                "firstname": "T\u00ecnh",
                "lastname": "Tr\u01b0\u01a1ng Th\u1ecb Tr\u1ea7n",
                "username": "Tinh.truong",
                "email": "tinh.truong@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "RDNdzF3X8tZqomVAH6n5djt4LnRgUvCvcyMpisY4",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:47:00",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:47:00.000000Z",
                "deleted_at": null,
                "dependents": 2,
                "init_paid_leave": "9.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV049",
                "timesheets_status": {
                    "id": 16302,
                    "project_id": 54,
                    "module_id": 2,
                    "module_related_id": 374,
                    "start_time": "2025-09-08 00:00:00",
                    "end_time": "2025-09-08 05:30:00",
                    "decimal_time": "5.50",
                    "hour_time": "05:30",
                    "note": "H\u1ed3 s\u01a1 submit X\u00e2y d\u1ef1ng. Input LCA",
                    "approved1": 25,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 514706,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 1,
                    "created_user_id": 26,
                    "created_at": "2025-09-13 00:44:20",
                    "updated_at": "2025-09-15 16:01:44",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "T\u00ecnh Tr\u01b0\u01a1ng Th\u1ecb Tr\u1ea7n",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 26,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 26,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 6,
                "user_generated_id": "USR0006",
                "firstname": "Tr\u00e2m",
                "lastname": "H\u1ed3 B\u1ea3o",
                "username": "Tram.ho",
                "email": "tram.ho@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "SdxusAVGznTKBB2cfig1Tpl99YhAA17Tp3Wc1cKn",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 16:29:59",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T16:29:59.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "5.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV012",
                "timesheets_status": {
                    "id": 17203,
                    "project_id": 172,
                    "module_id": 2,
                    "module_related_id": 1149,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 08:30:00",
                    "decimal_time": "8.50",
                    "hour_time": "08:30",
                    "note": "KCN LEED Volume, One Saigon Central, One World, c\u1eadp nh\u1eadt company profile th\u1ef1c ph\u1ea9m, d\u1ec7t may, da gi\u00e0y, slide thau Estiva",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 959091,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 6,
                    "created_at": "2025-09-20 00:17:50",
                    "updated_at": "2025-09-20 00:17:50",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Marketing",
                    "role_name": "Manager"
                },
                "full_name": "Tr\u00e2m H\u1ed3 B\u1ea3o",
                "departments": [
                    {
                        "id": 4,
                        "name": "Marketing",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2024-04-10T03:40:39.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 6,
                            "department_id": 4
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 6,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 24,
                "user_generated_id": "USR0024",
                "firstname": "Trung",
                "lastname": "T\u00f4 Ki\u00ean",
                "username": "Trung.to",
                "email": "trung.to@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "CMF9SAWj5fJXwKjGLIlgUjczLX5gZbOldATRVU2g",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:44:17",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:44:17.000000Z",
                "deleted_at": null,
                "dependents": 0,
                "init_paid_leave": "9.5",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV054",
                "timesheets_status": {
                    "id": 17318,
                    "project_id": 202,
                    "module_id": 2,
                    "module_related_id": 1243,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 02:30:00",
                    "decimal_time": "2.50",
                    "hour_time": "02:30",
                    "note": "Checklist Requirement",
                    "approved1": 21,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 220989,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 1,
                    "created_user_id": 24,
                    "created_at": "2025-09-20 00:45:45",
                    "updated_at": "2025-09-20 00:46:02",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Staff"
                },
                "full_name": "Trung T\u00f4 Ki\u00ean",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 24,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 2,
                        "name": "Staff",
                        "slug": "staff",
                        "description": "Staff role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": null,
                        "pivot": {
                            "user_id": 24,
                            "role_id": 2
                        }
                    }
                ]
            },
            {
                "id": 19,
                "user_generated_id": "USR0019",
                "firstname": "Uy\u00ean",
                "lastname": "Ph\u1ea1m Tr\u1ea7n T\u1ed1",
                "username": "Uyen.pham",
                "email": "uyen.pham@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "Gr0CddQ7NuBRe9Yj6ZUs2JDaEXn9pZiUZ7C6zvZV",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:41:28",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:41:28.000000Z",
                "deleted_at": null,
                "dependents": 1,
                "init_paid_leave": "7.0",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV048",
                "timesheets_status": {
                    "id": 17282,
                    "project_id": 172,
                    "module_id": 2,
                    "module_related_id": 1149,
                    "start_time": "2025-09-15 00:00:00",
                    "end_time": "2025-09-15 05:00:00",
                    "decimal_time": "5.00",
                    "hour_time": "05:00",
                    "note": "Note\n-C\u1eadp nh\u1eadt BG Nh\u00e0 m\u00e1y d\u1eeba B\u1ebfn tre\n- Trao \u0111\u1ed5i l\u00e0m r\u00f5 GFA One Central SG\n- X\u00e1c nh\u1eadn v\u00e0 g\u1eedi mail ti\u1ebfn \u0111\u1ed9 TT HH1 Khai S\u01a1n\n- Tr\u1ea3 l\u1eddi v\u00e0 c\u1eadp nh\u1eadt BG One World Thu\u1eadn Giao\n- L\u00ean BG LEED Volume KCN",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 743583,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 19,
                    "created_at": "2025-09-20 00:42:43",
                    "updated_at": "2025-09-20 00:42:43",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Accountant",
                    "role_name": "Manager"
                },
                "full_name": "Uy\u00ean Ph\u1ea1m Tr\u1ea7n T\u1ed1",
                "departments": [
                    {
                        "id": 5,
                        "name": "Accountant",
                        "created_at": "2024-10-17T04:00:47.000000Z",
                        "updated_at": "2024-10-17T04:00:47.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 19,
                            "department_id": 5
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 19,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 27,
                "user_generated_id": "USR0027",
                "firstname": "Uy\u00ean",
                "lastname": "\u0110\u1ed7 Th\u1ecb \u00c1i",
                "username": "Uyendo",
                "email": "uyendo@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "vCRvVhtkEYf2xvdKoYCjkvxEmkozXOZCYlEE2c5H",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "14.224.144.106",
                "last_login": "2025-09-19 17:06:29",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-19T17:06:29.000000Z",
                "deleted_at": null,
                "dependents": 1,
                "init_paid_leave": "11.5",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV005",
                "timesheets_status": {
                    "id": 16047,
                    "project_id": 24,
                    "module_id": 2,
                    "module_related_id": 164,
                    "start_time": "2025-09-08 00:00:00",
                    "end_time": "2025-09-08 02:00:00",
                    "decimal_time": "2.00",
                    "hour_time": "02:00",
                    "note": "LEED- round 2",
                    "approved1": 0,
                    "approved2": 0,
                    "dis_approved": 0,
                    "cost": 378930,
                    "ot": 0,
                    "ot_rate": "1.00",
                    "status": 0,
                    "created_user_id": 27,
                    "created_at": "2025-09-12 20:41:36",
                    "updated_at": "2025-09-12 20:41:36",
                    "deleted_at": null
                },
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Manager"
                },
                "full_name": "Uy\u00ean \u0110\u1ed7 Th\u1ecb \u00c1i",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 27,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 27,
                            "role_id": 4
                        }
                    }
                ]
            },
            {
                "id": 25,
                "user_generated_id": "USR0025",
                "firstname": "V\u0169",
                "lastname": "Tr\u1ea7n Duy",
                "username": "Vu.tran",
                "email": "vu.tran@greenviet.net",
                "is_super_admin": 0,
                "is_client": 0,
                "is_active": 1,
                "email_verified": "1",
                "email_verification_code": "O95MbmevkGiMvZoeUN0ZcWJd3MwhdqBVavvRAfxf",
                "online_status": 1,
                "avatar": "5-man.png",
                "last_ip": "113.190.197.54",
                "last_login": "2025-09-18 14:15:33",
                "emp_id": "",
                "city": null,
                "state": null,
                "country": null,
                "postal_code": null,
                "language": "en",
                "address": null,
                "phone": null,
                "mobile": null,
                "skype": null,
                "joining_date": null,
                "gender": null,
                "dob": null,
                "maritial_status": null,
                "father_name": null,
                "mother_name": null,
                "permission": "all",
                "can_view_all_users": 0,
                "primary_manager": null,
                "secondary_manager": null,
                "created_at": null,
                "updated_at": "2025-09-18T14:15:33.000000Z",
                "deleted_at": null,
                "dependents": 1,
                "init_paid_leave": "6.5",
                "init_paid_leave_date": "2025-06-01 07:00:00",
                "employment_id": "NV014",
                "timesheets_status": null,
                "department_role": {
                    "department_name": "Project",
                    "role_name": "Manager"
                },
                "full_name": "V\u0169 Tr\u1ea7n Duy",
                "departments": [
                    {
                        "id": 2,
                        "name": "Project",
                        "created_at": "2022-06-06T13:26:44.000000Z",
                        "updated_at": "2022-06-06T13:26:44.000000Z",
                        "deleted_at": null,
                        "pivot": {
                            "user_id": 25,
                            "department_id": 2
                        }
                    }
                ],
                "roles": [
                    {
                        "id": 4,
                        "name": "Manager",
                        "slug": "manager",
                        "description": "Manager role.",
                        "status": "1",
                        "created_at": null,
                        "updated_at": "2024-04-11T04:48:01.000000Z",
                        "pivot": {
                            "user_id": 25,
                            "role_id": 4
                        }
                    }
                ]
            }
        ];
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
        this.loadDatatable();
    };
    UserReportsComponent.prototype.loadDatatable = function () {
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
            });
            _this.isPageLoaded = true;
        });
        return;
    };
    UserReportsComponent.prototype.getWorkingDays = function (month) {
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
    UserReportsComponent.prototype.changeMonth = function (selectedDate) {
        this.month = this.datePipe.transform(selectedDate, 'yyyy-MM');
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.loadDatatable();
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
    UserReportsComponent.ctorParameters = function () { return [
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
/* harmony import */ var _components_project_reports_project_reports_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/project-reports/project-reports.component */ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.ts");
/* harmony import */ var _components_task_reports_task_reports_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/task-reports/task-reports.component */ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.ts");
/* harmony import */ var _components_defect_reports_defect_reports_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/defect-reports/defect-reports.component */ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.ts");
/* harmony import */ var _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user-reports/user-reports.component */ "./src/app/modules/pm/reports/components/user-reports/user-reports.component.ts");
/* harmony import */ var _components_allowance_reports_allowance_reports_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/allowance-reports/allowance-reports.component */ "./src/app/modules/pm/reports/components/allowance-reports/allowance-reports.component.ts");
/* harmony import */ var _components_payment_reports_payment_reports_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/payment-reports/payment-reports.component */ "./src/app/modules/pm/reports/components/payment-reports/payment-reports.component.ts");
/* harmony import */ var _components_salary_reports_salary_reports_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/salary-reports/salary-reports.component */ "./src/app/modules/pm/reports/components/salary-reports/salary-reports.component.ts");
/* harmony import */ var _components_incident_reports_incident_reports_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/incident-reports/incident-reports.component */ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.ts");
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/modules/pm/reports/pages/reports/reports.component.ts");
/* harmony import */ var _file_browser_pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./../../file-browser/pages/file-browser/file-browser.component */ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.ts");
/* harmony import */ var _file_browser_components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./../../file-browser/components/upload-files-model/upload-files-model.component */ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.ts");
/* harmony import */ var _file_browser_components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./../../file-browser/components/create-folder-model/create-folder-model.component */ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.ts");
/* harmony import */ var _file_browser_components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./../../file-browser/components/edit-folder-modal/edit-folder-modal.component */ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.ts");
/* harmony import */ var _file_browser_components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./../../file-browser/components/edit-file-modal/edit-file-modal.component */ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.ts");


























;






var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_project_reports_project_reports_component__WEBPACK_IMPORTED_MODULE_18__["ProjectReportsComponent"],
                _components_task_reports_task_reports_component__WEBPACK_IMPORTED_MODULE_19__["TaskReportsComponent"],
                _components_defect_reports_defect_reports_component__WEBPACK_IMPORTED_MODULE_20__["DefectReportsComponent"],
                _components_user_reports_user_reports_component__WEBPACK_IMPORTED_MODULE_21__["UserReportsComponent"],
                _components_allowance_reports_allowance_reports_component__WEBPACK_IMPORTED_MODULE_22__["AllowanceReportsComponent"],
                _components_payment_reports_payment_reports_component__WEBPACK_IMPORTED_MODULE_23__["PaymentReportsComponent"],
                _components_salary_reports_salary_reports_component__WEBPACK_IMPORTED_MODULE_24__["SalaryReportsComponent"],
                _components_incident_reports_incident_reports_component__WEBPACK_IMPORTED_MODULE_25__["IncidentReportsComponent"],
                _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_26__["ReportsComponent"],
                _file_browser_pages_file_browser_file_browser_component__WEBPACK_IMPORTED_MODULE_27__["FileBrowserComponent"],
                _file_browser_components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_28__["UploadFilesModelComponent"],
                _file_browser_components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_29__["CreateFolderModelComponent"],
                _file_browser_components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_30__["EditFolderModalComponent"],
                _file_browser_components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_30__["EditFolderModalComponent"],
                _file_browser_components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_31__["EditFileModalComponent"]
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
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]
            ],
            entryComponents: [
                _file_browser_components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_28__["UploadFilesModelComponent"],
                _file_browser_components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_31__["EditFileModalComponent"],
                _file_browser_components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_29__["CreateFolderModelComponent"],
                _file_browser_components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_30__["EditFolderModalComponent"]
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