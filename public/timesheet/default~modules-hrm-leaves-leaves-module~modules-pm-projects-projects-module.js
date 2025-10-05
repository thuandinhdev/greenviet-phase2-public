(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-hrm-leaves-leaves-module~modules-pm-projects-projects-module"],{

/***/ "./node_modules/angular-calendar/date-adapters/date-fns/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/angular-calendar/date-adapters/date-fns/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var date_fns_1 = __webpack_require__(/*! calendar-utils/date-adapters/date-fns */ "./node_modules/calendar-utils/date-adapters/date-fns/index.js");
var addWeeks = __webpack_require__(/*! date-fns/add_weeks/index */ "./node_modules/date-fns/add_weeks/index.js");
var addMonths = __webpack_require__(/*! date-fns/add_months/index */ "./node_modules/date-fns/add_months/index.js");
var subDays = __webpack_require__(/*! date-fns/sub_days/index */ "./node_modules/date-fns/sub_days/index.js");
var subWeeks = __webpack_require__(/*! date-fns/sub_weeks/index */ "./node_modules/date-fns/sub_weeks/index.js");
var subMonths = __webpack_require__(/*! date-fns/sub_months/index */ "./node_modules/date-fns/sub_months/index.js");
var getISOWeek = __webpack_require__(/*! date-fns/get_iso_week/index */ "./node_modules/date-fns/get_iso_week/index.js");
var setDate = __webpack_require__(/*! date-fns/set_date/index */ "./node_modules/date-fns/set_date/index.js");
var setMonth = __webpack_require__(/*! date-fns/set_month/index */ "./node_modules/date-fns/set_month/index.js");
var setYear = __webpack_require__(/*! date-fns/set_year/index */ "./node_modules/date-fns/set_year/index.js");
var getDate = __webpack_require__(/*! date-fns/get_date/index */ "./node_modules/date-fns/get_date/index.js");
var getYear = __webpack_require__(/*! date-fns/get_year/index */ "./node_modules/date-fns/get_year/index.js");
function adapterFactory() {
    return tslib_1.__assign({}, date_fns_1.adapterFactory(), { addWeeks: addWeeks,
        addMonths: addMonths,
        subDays: subDays,
        subWeeks: subWeeks,
        subMonths: subMonths,
        getISOWeek: getISOWeek,
        setDate: setDate,
        setMonth: setMonth,
        setYear: setYear,
        getDate: getDate,
        getYear: getYear });
}
exports.adapterFactory = adapterFactory;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-calendar/fesm5/angular-calendar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-calendar/fesm5/angular-calendar.js ***!
  \*****************************************************************/
/*! exports provided: DAYS_OF_WEEK, CalendarAngularDateFormatter, CalendarCommonModule, CalendarDateFormatter, CalendarDayModule, CalendarDayViewComponent, CalendarEventTimesChangedEventType, CalendarEventTitleFormatter, CalendarModule, CalendarMomentDateFormatter, CalendarMonthModule, CalendarMonthViewComponent, CalendarNativeDateFormatter, CalendarUtils, CalendarView, CalendarWeekModule, CalendarWeekViewComponent, DateAdapter, MOMENT, collapseAnimation, getWeekViewPeriod, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function() { return CalendarAngularDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function() { return CalendarCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function() { return CalendarDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function() { return CalendarDayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function() { return CalendarDayViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function() { return CalendarEventTimesChangedEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function() { return CalendarEventTitleFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function() { return CalendarMomentDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function() { return CalendarMonthModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function() { return CalendarMonthViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function() { return CalendarNativeDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarUtils", function() { return CalendarUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarView", function() { return CalendarView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function() { return CalendarWeekModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function() { return CalendarWeekViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOMENT", function() { return MOMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return collapseAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function() { return getWeekViewPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CalendarOpenDayEventsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CalendarEventActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CalendarEventTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CalendarTooltipWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CalendarTooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return CalendarPreviousViewDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return CalendarNextViewDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CalendarTodayDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return CalendarDatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return CalendarEventTitlePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return ClickDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return CalendarMonthCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return CalendarMonthViewHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return CalendarWeekViewHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return CalendarWeekViewEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return CalendarWeekViewHourSegmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return CalendarDayViewHourSegmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return CalendarDayViewEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! positioning */ "./node_modules/positioning/dist/entry.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! calendar-utils */ "./node_modules/calendar-utils/calendar-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return calendar_utils__WEBPACK_IMPORTED_MODULE_6__["DAYS_OF_WEEK"]; });

/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");












/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarEventActionsComponent = /** @class */ (function () {
    function CalendarEventActionsComponent() {
        this.trackByActionId = (/**
         * @param {?} index
         * @param {?} action
         * @return {?}
         */
        function (index, action) {
            return action.id ? action.id : action;
        });
    }
    CalendarEventActionsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-event-actions',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event })\"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarEventActionsComponent.propDecorators = {
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CalendarEventActionsComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarEventTitleComponent = /** @class */ (function () {
    function CalendarEventTitleComponent() {
    }
    CalendarEventTitleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-event-title',
                    template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarEventTitleComponent.propDecorators = {
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        view: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CalendarEventTitleComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarTooltipWindowComponent = /** @class */ (function () {
    function CalendarTooltipWindowComponent() {
    }
    CalendarTooltipWindowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-tooltip-window',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarTooltipWindowComponent.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CalendarTooltipWindowComponent;
}());
if (false) {}
var CalendarTooltipDirective = /** @class */ (function () {
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        // tslint:disable-line no-input-rename
        this.placement = 'auto'; // tslint:disable-line no-input-rename
        // tslint:disable-line no-input-rename
        this.delay = null; // tslint:disable-line no-input-rename
        this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarTooltipDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.tooltipRef &&
            (changes.contents || changes.customTemplate || changes.event)) {
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.tooltipRef.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hide();
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.onMouseOver = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var delay$ = this.delay === null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('now') : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay);
        delay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.cancelTooltipDelay$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.show();
        }));
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.onMouseOut = /**
     * @return {?}
     */
    function () {
        this.hide();
    };
    /**
     * @private
     * @return {?}
     */
    CalendarTooltipDirective.prototype.show = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame((/**
             * @return {?}
             */
            function () {
                _this.positionTooltip();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CalendarTooltipDirective.prototype.hide = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
        this.cancelTooltipDelay$.next();
    };
    /**
     * @private
     * @param {?=} previousPositions
     * @return {?}
     */
    CalendarTooltipDirective.prototype.positionTooltip = /**
     * @private
     * @param {?=} previousPositions
     * @return {?}
     */
    function (previousPositions) {
        if (previousPositions === void 0) { previousPositions = []; }
        if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = Object(positioning__WEBPACK_IMPORTED_MODULE_3__["positionElements"])(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            // keep re-positioning the tooltip until the arrow position doesn't make a difference
            if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                this.positionTooltip(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(previousPositions, [
                    this.tooltipRef.instance.placement
                ]));
            }
        }
    };
    CalendarTooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mwlCalendarTooltip]'
                },] }
    ];
    /** @nocollapse */
    CalendarTooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    CalendarTooltipDirective.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mwlCalendarTooltip',] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPlacement',] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipTemplate',] }],
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipEvent',] }],
        appendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipAppendToBody',] }],
        delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipDelay',] }],
        onMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
        onMouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }]
    };
    return CalendarTooltipDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
DateAdapter = /** @class */ (function () {
    function DateAdapter() {
    }
    return DateAdapter;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var CalendarView = {
    Month: 'month',
    Week: 'week',
    Day: 'day',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var validateEvents = (/**
 * @param {?} events
 * @return {?}
 */
function (events) {
    /** @type {?} */
    var warn = (/**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(['angular-calendar'], args));
    });
    return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["validateEvents"])(events, warn);
});
/**
 * @param {?} outer
 * @param {?} inner
 * @return {?}
 */
function isInside(outer, inner) {
    return (Math.floor(outer.left) <= Math.ceil(inner.left) &&
        Math.floor(inner.left) <= Math.ceil(outer.right) &&
        Math.floor(outer.left) <= Math.ceil(inner.right) &&
        Math.floor(inner.right) <= Math.ceil(outer.right) &&
        Math.floor(outer.top) <= Math.ceil(inner.top) &&
        Math.floor(inner.top) <= Math.ceil(outer.bottom) &&
        Math.floor(outer.top) <= Math.ceil(inner.bottom) &&
        Math.floor(inner.bottom) <= Math.ceil(outer.bottom));
}
/**
 * @param {?} amount
 * @param {?} precision
 * @return {?}
 */
function roundToNearest(amount, precision) {
    return Math.round(amount / precision) * precision;
}
/** @type {?} */
var trackByEventId = (/**
 * @param {?} index
 * @param {?} event
 * @return {?}
 */
function (index, event) {
    return event.id ? event.id : event;
});
/** @type {?} */
var trackByWeekDayHeaderDate = (/**
 * @param {?} index
 * @param {?} day
 * @return {?}
 */
function (index, day) {
    return day.date.toISOString();
});
/** @type {?} */
var trackByHourSegment = (/**
 * @param {?} index
 * @param {?} segment
 * @return {?}
 */
function (index, segment) { return segment.date.toISOString(); });
/** @type {?} */
var trackByHour = (/**
 * @param {?} index
 * @param {?} hour
 * @return {?}
 */
function (index, hour) {
    return hour.segments[0].date.toISOString();
});
/** @type {?} */
var trackByDayOrWeekEvent = (/**
 * @param {?} index
 * @param {?} weekEvent
 * @return {?}
 */
function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); });
/** @type {?} */
var MINUTES_IN_HOUR = 60;
/**
 * @param {?} movedY
 * @param {?} hourSegments
 * @param {?} hourSegmentHeight
 * @param {?} eventSnapSize
 * @return {?}
 */
function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
    /** @type {?} */
    var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
    /** @type {?} */
    var pixelAmountInMinutes = MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
    return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
/**
 * @param {?} hourSegments
 * @param {?} hourSegmentHeight
 * @return {?}
 */
function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
    return ((MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight)) * hourSegmentHeight);
}
/**
 * @param {?} dateAdapter
 * @param {?} event
 * @param {?} minimumMinutes
 * @return {?}
 */
function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
    if (event.end) {
        return event.end;
    }
    else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
    }
}
/**
 * @param {?} dateAdapter
 * @param {?} date
 * @param {?} days
 * @param {?} excluded
 * @return {?}
 */
function addDaysWithExclusions(dateAdapter, date, days, excluded) {
    /** @type {?} */
    var daysCounter = 0;
    /** @type {?} */
    var daysToAdd = 0;
    /** @type {?} */
    var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
    /** @type {?} */
    var result = date;
    while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        /** @type {?} */
        var day = dateAdapter.getDay(result);
        if (excluded.indexOf(day) === -1) {
            daysToAdd++;
        }
        daysCounter++;
    }
    return result;
}
/**
 * @param {?} newStart
 * @param {?} newEnd
 * @param {?} period
 * @return {?}
 */
function isDraggedWithinPeriod(newStart, newEnd, period) {
    /** @type {?} */
    var end = newEnd || newStart;
    return ((period.start <= newStart && newStart <= period.end) ||
        (period.start <= end && end <= period.end));
}
/**
 * @param {?} dropEvent
 * @param {?} date
 * @param {?} allDay
 * @param {?} calendarId
 * @return {?}
 */
function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
    return (dropEvent.dropData &&
        dropEvent.dropData.event &&
        (dropEvent.dropData.calendarId !== calendarId ||
            (dropEvent.dropData.event.allDay && !allDay) ||
            (!dropEvent.dropData.event.allDay && allDay)));
}
/**
 * @param {?} dateAdapter
 * @param {?} viewDate
 * @param {?} weekStartsOn
 * @param {?=} excluded
 * @param {?=} daysInWeek
 * @return {?}
 */
function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded, daysInWeek) {
    if (excluded === void 0) { excluded = []; }
    /** @type {?} */
    var viewStart = daysInWeek
        ? dateAdapter.startOfDay(viewDate)
        : dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn });
    /** @type {?} */
    var endOfWeek = dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn });
    while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 &&
        viewStart < endOfWeek) {
        viewStart = dateAdapter.addDays(viewStart, 1);
    }
    if (daysInWeek) {
        /** @type {?} */
        var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
    else {
        /** @type {?} */
        var viewEnd = endOfWeek;
        while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 &&
            viewEnd > viewStart) {
            viewEnd = dateAdapter.subDays(viewEnd, 1);
        }
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinThreshold(_a) {
    var x = _a.x, y = _a.y;
    /** @type {?} */
    var DRAG_THRESHOLD = 1;
    return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = /** @class */ (function () {
    function CalendarPreviousViewDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarPreviousViewDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
        }
    };
    CalendarPreviousViewDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mwlCalendarPreviousView]'
                },] }
    ];
    /** @nocollapse */
    CalendarPreviousViewDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarPreviousViewDirective.propDecorators = {
        view: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        daysInWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return CalendarPreviousViewDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
var CalendarNextViewDirective = /** @class */ (function () {
    function CalendarNextViewDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarNextViewDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
        }
    };
    CalendarNextViewDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mwlCalendarNextView]'
                },] }
    ];
    /** @nocollapse */
    CalendarNextViewDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarNextViewDirective.propDecorators = {
        view: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        daysInWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return CalendarNextViewDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
var CalendarTodayDirective = /** @class */ (function () {
    function CalendarTodayDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarTodayDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    };
    CalendarTodayDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mwlCalendarToday]'
                },] }
    ];
    /** @nocollapse */
    CalendarTodayDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarTodayDirective.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return CalendarTodayDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
var CalendarAngularDateFormatter = /** @class */ (function () {
    function CalendarAngularDateFormatter(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE', locale);
    };
    /**
     * The month view cell day number
     */
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'd', locale);
    };
    /**
     * The month view title
     */
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'LLLL y', locale);
    };
    /**
     * The week view header week day labels
     */
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE', locale);
    };
    /**
     * The week view sub header day and month labels
     */
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'MMM d', locale);
    };
    /**
     * The week view title
     */
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        /** @type {?} */
        var format = (/**
         * @param {?} dateToFormat
         * @param {?} showYear
         * @return {?}
         */
        function (dateToFormat, showYear) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
        });
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewHour = /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'h a', locale);
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'h a', locale);
    };
    /**
     * The day view title
     */
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE, MMMM d, y', locale);
    };
    CalendarAngularDateFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    CalendarAngularDateFormatter.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return CalendarAngularDateFormatter;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { formatDate } from '\@angular/common';
 *
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return formatDate(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
var CalendarDateFormatter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(CalendarDateFormatter, _super);
    function CalendarDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarDateFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return CalendarDateFormatter;
}(CalendarAngularDateFormatter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
var CalendarDatePipe = /** @class */ (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    /**
     * @param {?} date
     * @param {?} method
     * @param {?=} locale
     * @param {?=} weekStartsOn
     * @param {?=} excludeDays
     * @param {?=} daysInWeek
     * @return {?}
     */
    CalendarDatePipe.prototype.transform = /**
     * @param {?} date
     * @param {?} method
     * @param {?=} locale
     * @param {?=} weekStartsOn
     * @param {?=} excludeDays
     * @param {?=} daysInWeek
     * @return {?}
     */
    function (date, method, locale, weekStartsOn, excludeDays, daysInWeek) {
        if (locale === void 0) { locale = this.locale; }
        if (weekStartsOn === void 0) { weekStartsOn = 0; }
        if (excludeDays === void 0) { excludeDays = []; }
        if (typeof this.dateFormatter[method] === 'undefined') {
            /** @type {?} */
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter((/**
             * @param {?} iMethod
             * @return {?}
             */
            function (iMethod) { return iMethod !== 'constructor'; }));
            throw new Error(method + " is not a valid date formatter. Can only be one of " + allowedMethods.join(', '));
        }
        return this.dateFormatter[method]({
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            excludeDays: excludeDays,
            daysInWeek: daysInWeek
        });
    };
    CalendarDatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'calendarDate'
                },] }
    ];
    /** @nocollapse */
    CalendarDatePipe.ctorParameters = function () { return [
        { type: CalendarDateFormatter },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
    ]; };
    return CalendarDatePipe;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
var  /**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
CalendarEventTitleFormatter = /** @class */ (function () {
    function CalendarEventTitleFormatter() {
    }
    /**
     * The month view event title.
     */
    /**
     * The month view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.month = /**
     * The month view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.monthTooltip = /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The week view event title.
     */
    /**
     * The week view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.week = /**
     * The week view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.weekTooltip = /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The day view event title.
     */
    /**
     * The day view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.day = /**
     * The day view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.dayTooltip = /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    return CalendarEventTitleFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarEventTitlePipe = /** @class */ (function () {
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    /**
     * @param {?} title
     * @param {?} titleType
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitlePipe.prototype.transform = /**
     * @param {?} title
     * @param {?} titleType
     * @param {?} event
     * @return {?}
     */
    function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event, title);
    };
    CalendarEventTitlePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'calendarEventTitle'
                },] }
    ];
    /** @nocollapse */
    CalendarEventTitlePipe.ctorParameters = function () { return [
        { type: CalendarEventTitleFormatter }
    ]; };
    return CalendarEventTitlePipe;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClickDirective = /** @class */ (function () {
    function ClickDirective(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.clickListenerDisabled) {
            this.listen()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                event.stopPropagation();
                _this.click.emit(event);
            }));
        }
    };
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
    };
    /**
     * @private
     * @return {?}
     */
    ClickDirective.prototype.listen = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this.renderer.listen(_this.elm.nativeElement, 'click', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                observer.next(event);
            }));
        }));
    };
    ClickDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mwlClick]'
                },] }
    ];
    /** @nocollapse */
    ClickDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    ClickDirective.propDecorators = {
        clickListenerDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['mwlClick',] }]
    };
    return ClickDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarUtils = /** @class */ (function () {
    function CalendarUtils(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getMonthView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getMonthView"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getWeekViewHeader = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getWeekViewHeader"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getWeekView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getWeekView"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getDayView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getDayView"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getDayViewHourGrid = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getDayViewHourGrid"])(this.dateAdapter, args);
    };
    CalendarUtils.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    CalendarUtils.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return CalendarUtils;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
var CalendarMomentDateFormatter = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMomentDateFormatter(moment, dateAdapter) {
        this.moment = moment;
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The month view cell day number
     */
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D');
    };
    /**
     * The month view title
     */
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMMM YYYY');
    };
    /**
     * The week view header week day labels
     */
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The week view sub header day and month labels
     */
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMM D');
    };
    /**
     * The week view title
     */
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        /** @type {?} */
        var format = (/**
         * @param {?} dateToFormat
         * @param {?} showYear
         * @return {?}
         */
        function (dateToFormat, showYear) {
            return _this.moment(dateToFormat)
                .locale(locale)
                .format('MMM D' + (showYear ? ', YYYY' : ''));
        });
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewHour = /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The day view title
     */
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd, D MMMM, YYYY');
    };
    CalendarMomentDateFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    CalendarMomentDateFormatter.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MOMENT,] }] },
        { type: DateAdapter }
    ]; };
    return CalendarMomentDateFormatter;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
var CalendarNativeDateFormatter = /** @class */ (function () {
    function CalendarNativeDateFormatter(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The month view cell day number
     */
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    /**
     * The month view title
     */
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    };
    /**
     * The week view header week day labels
     */
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The week view sub header day and month labels
     */
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    /**
     * The week view title
     */
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        /** @type {?} */
        var format = (/**
         * @param {?} dateToFormat
         * @param {?} showYear
         * @return {?}
         */
        function (dateToFormat, showYear) {
            return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
                year: showYear ? 'numeric' : undefined
            }).format(dateToFormat);
        });
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewHour = /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The day view title
     */
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    CalendarNativeDateFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    CalendarNativeDateFormatter.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return CalendarNativeDateFormatter;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The parameter type passed to the date formatter methods.
 * @record
 */
function DateFormatterParams() { }
if (false) {}
/**
 * If using a completely custom date formatter then it should implement this interface.
 * @record
 */
function CalendarDateFormatterInterface() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var CalendarEventTimesChangedEventType = {
    Drag: 'drag',
    Drop: 'drop',
    Resize: 'resize',
};
/**
 * The output `$event` type when an event is resized or dragged and dropped.
 * @record
 * @template MetaType
 */
function CalendarEventTimesChangedEvent() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CalendarModuleConfig() { }
if (false) {}
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * \@NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarCommonModule = /** @class */ (function () {
    function CalendarCommonModule() {
    }
    /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    CalendarCommonModule.forRoot = /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    function (dateAdapter, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarCommonModule,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    CalendarCommonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe,
                        ClickDirective
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    exports: [
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe,
                        ClickDirective
                    ],
                    entryComponents: [CalendarTooltipWindowComponent]
                },] }
    ];
    return CalendarCommonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CalendarMonthViewBeforeRenderEvent() { }
if (false) {}
/**
 * @record
 * @template EventMetaType, DayMetaType
 */
function CalendarMonthViewEventTimesChangedEvent() { }
if (false) {}
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var CalendarMonthViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
        var _this = this;
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when a header week day is clicked. Returns ISO day number.
         */
        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */
        this.trackByRowOffset = (/**
         * @param {?} index
         * @param {?} offset
         * @return {?}
         */
        function (index, offset) {
            return _this.view.days
                .slice(offset, _this.view.totalDaysVisibleInWeek)
                .map((/**
             * @param {?} day
             * @return {?}
             */
            function (day) { return day.date.toISOString(); }))
                .join('-');
        });
        /**
         * @hidden
         */
        this.trackByDate = (/**
         * @param {?} index
         * @param {?} day
         * @return {?}
         */
        function (index, day) { return day.date.toISOString(); });
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe((/**
             * @return {?}
             */
            function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
        /** @type {?} */
        var refreshBody = changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays;
        if (refreshHeader) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (refreshBody) {
            this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.activeDay) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} isHighlighted
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = /**
     * @hidden
     * @param {?} event
     * @param {?} isHighlighted
     * @return {?}
     */
    function (event, isHighlighted) {
        this.view.days.forEach((/**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor =
                    (event.color && event.color.secondary) || '#D1E8FF';
            }
            else {
                delete day.backgroundColor;
            }
        }));
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} droppedOn
     * @param {?} event
     * @param {?=} draggedFrom
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.eventDropped = /**
     * @hidden
     * @param {?} droppedOn
     * @param {?} event
     * @param {?=} draggedFrom
     * @return {?}
     */
    function (droppedOn, event, draggedFrom) {
        if (droppedOn !== draggedFrom) {
            /** @type {?} */
            var year = this.dateAdapter.getYear(droppedOn.date);
            /** @type {?} */
            var month = this.dateAdapter.getMonth(droppedOn.date);
            /** @type {?} */
            var date = this.dateAdapter.getDate(droppedOn.date);
            /** @type {?} */
            var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            /** @type {?} */
            var newEnd = void 0;
            if (event.end) {
                /** @type {?} */
                var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }
            this.eventTimesChanged.emit({
                event: event,
                newStart: newStart,
                newEnd: newEnd,
                day: droppedOn,
                type: CalendarEventTimesChangedEventType.Drop
            });
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshHeader = /**
     * @protected
     * @return {?}
     */
    function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshBody = /**
     * @protected
     * @return {?}
     */
    function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            /** @type {?} */
            var activeDay_1 = this.activeDay || this.viewDate;
            this.openDay = this.view.days.find((/**
             * @param {?} day
             * @return {?}
             */
            function (day) {
                return _this.dateAdapter.isSameDay(day.date, activeDay_1);
            }));
            /** @type {?} */
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshAll = /**
     * @protected
     * @return {?}
     */
    function () {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
        this.checkActiveDayIsOpen();
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
            });
        }
    };
    CalendarMonthViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-month-view',
                    template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n        >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"eventClicked.emit({ event: $event.event })\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"eventClicked.emit({ event: $event.event })\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    CalendarMonthViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: CalendarUtils },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] },
        { type: DateAdapter }
    ]; };
    CalendarMonthViewComponent.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        activeDayIsOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        activeDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        weekStartsOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cellTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        openDayEventsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        weekendDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        beforeViewRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dayClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        columnHeaderClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventTimesChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarMonthViewComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarMonthViewHeaderComponent = /** @class */ (function () {
    function CalendarMonthViewHeaderComponent() {
        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    CalendarMonthViewHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-month-view-header',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"columnHeaderClicked.emit(day.day)\"\n          [ngClass]=\"day.cssClass\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarMonthViewHeaderComponent.propDecorators = {
        days: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columnHeaderClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarMonthViewHeaderComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarMonthCellComponent = /** @class */ (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
    CalendarMonthCellComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-month-cell',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n          day.badgeTotal\n        }}</span>\n        <span class=\"cal-day-number\">{{\n          day.date | calendarDate: 'monthViewDayNumber':locale\n        }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          (mwlClick)=\"eventClicked.emit({ event: event })\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
                    host: {
                        class: 'cal-cell cal-day-cell',
                        '[class.cal-past]': 'day.isPast',
                        '[class.cal-today]': 'day.isToday',
                        '[class.cal-future]': 'day.isFuture',
                        '[class.cal-weekend]': 'day.isWeekend',
                        '[class.cal-in-month]': 'day.inMonth',
                        '[class.cal-out-month]': '!day.inMonth',
                        '[class.cal-has-events]': 'day.events.length > 0',
                        '[class.cal-open]': 'day === openDay',
                        '[class.cal-event-highlight]': '!!day.backgroundColor'
                    }
                }] }
    ];
    CalendarMonthCellComponent.propDecorators = {
        day: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        openDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        highlightDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        unhighlightDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarMonthCellComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var collapseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('collapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        height: 0,
        overflow: 'hidden',
        'padding-top': 0,
        'padding-bottom': 0
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        height: '*',
        overflow: 'hidden',
        'padding-top': '*',
        'padding-bottom': '*'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms ease-out')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms ease-in'))
]);
var CalendarOpenDayEventsComponent = /** @class */ (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
    CalendarOpenDayEventsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-open-day-events',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"eventClicked.emit({ event: event })\"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
                    animations: [collapseAnimation]
                }] }
    ];
    CalendarOpenDayEventsComponent.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarOpenDayEventsComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarMonthModule = /** @class */ (function () {
    function CalendarMonthModule() {
    }
    CalendarMonthModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule],
                    declarations: [
                        CalendarMonthViewComponent,
                        CalendarMonthCellComponent,
                        CalendarOpenDayEventsComponent,
                        CalendarMonthViewHeaderComponent
                    ],
                    exports: [
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarMonthViewComponent,
                        CalendarMonthCellComponent,
                        CalendarOpenDayEventsComponent,
                        CalendarMonthViewHeaderComponent
                    ]
                },] }
    ];
    return CalendarMonthModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarDragHelper = /** @class */ (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarDragHelper.prototype.validateDrag = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var x = _a.x, y = _a.y, snapDraggedEvents = _a.snapDraggedEvents, dragAlreadyMoved = _a.dragAlreadyMoved, transform = _a.transform;
        if (snapDraggedEvents) {
            /** @type {?} */
            var newRect = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + transform.x,
                right: this.startPosition.right + transform.x,
                top: this.startPosition.top + transform.y,
                bottom: this.startPosition.bottom + transform.y
            });
            return ((isWithinThreshold({ x: x, y: y }) || dragAlreadyMoved) &&
                isInside(this.dragContainerElement.getBoundingClientRect(), newRect));
        }
        else {
            return isWithinThreshold({ x: x, y: y }) || dragAlreadyMoved;
        }
    };
    return CalendarDragHelper;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarResizeHelper = /** @class */ (function () {
    function CalendarResizeHelper(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarResizeHelper.prototype.validateResize = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var rectangle = _a.rectangle;
        if (this.minWidth &&
            Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
        }
        return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    };
    return CalendarResizeHelper;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function WeekViewAllDayEventResize() { }
if (false) {}
/**
 * @record
 */
function CalendarWeekViewBeforeRenderEvent() { }
if (false) {}
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
var CalendarWeekViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */
        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */
        this.timeEventResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnterByType = {
            allDay: 0,
            time: 0
        };
        /**
         * @hidden
         */
        this.dragActive = false;
        /**
         * @hidden
         */
        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        /**
         * @hidden
         */
        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */
        this.trackByHour = trackByHour;
        /**
         * @hidden
         */
        this.trackByDayOrWeekEvent = trackByDayOrWeekEvent;
        /**
         * @hidden
         */
        this.trackByHourColumn = (/**
         * @param {?} index
         * @param {?} column
         * @return {?}
         */
        function (index, column) {
            return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        });
        /**
         * @hidden
         */
        this.trackById = (/**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
        function (index, row) { return row.id; });
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe((/**
             * @return {?}
             */
            function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var refreshHeader = changes.viewDate ||
            changes.excludeDays ||
            changes.weekendDays ||
            changes.daysInWeek ||
            changes.weekStartsOn;
        /** @type {?} */
        var refreshBody = changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments ||
            changes.weekStartsOn ||
            changes.weekendDays ||
            changes.excludeDays ||
            changes.hourSegmentHeight ||
            changes.events ||
            changes.daysInWeek;
        if (refreshHeader) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (refreshBody) {
            this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @protected
     * @param {?} eventsContainer
     * @param {?=} minWidth
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.resizeStarted = /**
     * @protected
     * @param {?} eventsContainer
     * @param {?=} minWidth
     * @return {?}
     */
    function (eventsContainer, minWidth) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        /** @type {?} */
        var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);
        this.validateResize = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        });
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.timeEventResizeStarted = /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (eventsContainer, timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        this.resizeStarted(eventsContainer);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.timeEventResizing = /**
     * @hidden
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (timeEvent, resizeEvent) {
        var _this = this;
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        /** @type {?} */
        var adjustedEvents = new Map();
        /** @type {?} */
        var tempEvents = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this.events);
        this.timeEventResizes.forEach((/**
         * @param {?} lastResizeEvent
         * @param {?} event
         * @return {?}
         */
        function (lastResizeEvent, event) {
            /** @type {?} */
            var newEventDates = _this.getTimeEventResizedDates(event, lastResizeEvent);
            /** @type {?} */
            var adjustedEvent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, event, newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            /** @type {?} */
            var eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
        }));
        this.restoreOriginalEvents(tempEvents, adjustedEvents);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} timeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.timeEventResizeEnded = /**
     * @hidden
     * @param {?} timeEvent
     * @return {?}
     */
    function (timeEvent) {
        this.view = this.getWeekView(this.events);
        /** @type {?} */
        var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
        if (lastResizeEvent) {
            this.timeEventResizes.delete(timeEvent.event);
            /** @type {?} */
            var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
            this.eventTimesChanged.emit({
                newStart: newEventDates.start,
                newEnd: newEventDates.end,
                event: timeEvent.event,
                type: CalendarEventTimesChangedEventType.Resize
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} allDayEventsContainer
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.allDayEventResizeStarted = /**
     * @hidden
     * @param {?} allDayEventsContainer
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (allDayEventsContainer, allDayEvent, resizeEvent) {
        this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @param {?} dayWidth
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.allDayEventResizing = /**
     * @hidden
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @param {?} dayWidth
     * @return {?}
     */
    function (allDayEvent, resizeEvent, dayWidth) {
        /** @type {?} */
        var currentResize = this.allDayEventResizes.get(allDayEvent);
        if (typeof resizeEvent.edges.left !== 'undefined') {
            /** @type {?} */
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
        }
        else if (typeof resizeEvent.edges.right !== 'undefined') {
            /** @type {?} */
            var diff = Math.round(+resizeEvent.edges.right / dayWidth);
            allDayEvent.span = currentResize.originalSpan + diff;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} allDayEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.allDayEventResizeEnded = /**
     * @hidden
     * @param {?} allDayEvent
     * @return {?}
     */
    function (allDayEvent) {
        /** @type {?} */
        var currentResize = this.allDayEventResizes.get(allDayEvent);
        if (currentResize) {
            /** @type {?} */
            var allDayEventResizingBeforeStart = currentResize.edge === 'left';
            /** @type {?} */
            var daysDiff = void 0;
            if (allDayEventResizingBeforeStart) {
                daysDiff = allDayEvent.offset - currentResize.originalOffset;
            }
            else {
                daysDiff = allDayEvent.span - currentResize.originalSpan;
            }
            allDayEvent.offset = currentResize.originalOffset;
            allDayEvent.span = currentResize.originalSpan;
            /** @type {?} */
            var newStart = allDayEvent.event.start;
            /** @type {?} */
            var newEnd = allDayEvent.event.end || allDayEvent.event.start;
            if (allDayEventResizingBeforeStart) {
                newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
            }
            else {
                newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
            }
            this.eventTimesChanged.emit({
                newStart: newStart,
                newEnd: newEnd,
                event: allDayEvent.event,
                type: CalendarEventTimesChangedEventType.Resize
            });
            this.allDayEventResizes.delete(allDayEvent);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} eventRowContainer
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getDayColumnWidth = /**
     * @hidden
     * @param {?} eventRowContainer
     * @return {?}
     */
    function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.eventDropped = /**
     * @hidden
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    function (dropEvent, date, allDay) {
        if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} type
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragEnter = /**
     * @hidden
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.eventDragEnterByType[type]++;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} type
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragLeave = /**
     * @hidden
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.eventDragEnterByType[type]--;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} event
     * @param {?=} dayEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragStarted = /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} event
     * @param {?=} dayEvent
     * @return {?}
     */
    function (eventsContainer, event, dayEvent) {
        var _this = this;
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        /** @type {?} */
        var dragHelper = new CalendarDragHelper(eventsContainer, event);
        this.validateDrag = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var x = _a.x, y = _a.y, transform = _a.transform;
            return _this.allDayEventResizes.size === 0 &&
                _this.timeEventResizes.size === 0 &&
                dragHelper.validateDrag({
                    x: x,
                    y: y,
                    snapDraggedEvents: _this.snapDraggedEvents,
                    dragAlreadyMoved: _this.dragAlreadyMoved,
                    transform: transform
                });
        });
        this.dragActive = true;
        this.dragAlreadyMoved = false;
        this.eventDragEnterByType = {
            allDay: 0,
            time: 0
        };
        if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                /** @type {?} */
                var linkedEvent = column.events.find((/**
                 * @param {?} columnEvent
                 * @return {?}
                 */
                function (columnEvent) {
                    return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
                }));
                // hide any linked events while dragging
                if (linkedEvent) {
                    linkedEvent.width = 0;
                    linkedEvent.height = 0;
                }
            }));
        }
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} dayEvent
     * @param {?} dragEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragMove = /**
     * @hidden
     * @param {?} dayEvent
     * @param {?} dragEvent
     * @return {?}
     */
    function (dayEvent, dragEvent) {
        if (this.snapDraggedEvents) {
            /** @type {?} */
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            /** @type {?} */
            var originalEvent_1 = dayEvent.event;
            /** @type {?} */
            var adjustedEvent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, originalEvent_1, newEventTimes);
            /** @type {?} */
            var tempEvents = this.events.map((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event === originalEvent_1) {
                    return adjustedEvent_1;
                }
                return event;
            }));
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent_1, originalEvent_1]]));
        }
        this.dragAlreadyMoved = true;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.allDayEventDragMove = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.dragAlreadyMoved = true;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?=} useY
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragEnded = /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?=} useY
     * @return {?}
     */
    function (weekEvent, dragEndEvent, dayWidth, useY) {
        if (useY === void 0) { useY = false; }
        this.view = this.getWeekView(this.events);
        this.dragActive = false;
        var _a = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY), start = _a.start, end = _a.end;
        if (this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0 &&
            isDraggedWithinPeriod(start, end, this.view.period)) {
            this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: CalendarEventTimesChangedEventType.Drag,
                allDay: !useY
            });
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshHeader = /**
     * @protected
     * @return {?}
     */
    function () {
        this.days = this.utils.getWeekViewHeader(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshBody = /**
     * @protected
     * @return {?}
     */
    function () {
        this.view = this.getWeekView(this.events);
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshAll = /**
     * @protected
     * @return {?}
     */
    function () {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.emitBeforeViewRender = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.days && this.view) {
            this.beforeViewRender.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ header: this.days }, this.view));
        }
    };
    /**
     * @protected
     * @param {?} events
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getWeekView = /**
     * @protected
     * @param {?} events
     * @return {?}
     */
    function (events) {
        return this.utils.getWeekView(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ events: events, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            }, dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    };
    /**
     * @protected
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?} useY
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getDragMovedEventTimes = /**
     * @protected
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?} useY
     * @return {?}
     */
    function (weekEvent, dragEndEvent, dayWidth, useY) {
        /** @type {?} */
        var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
        /** @type {?} */
        var minutesMoved = useY
            ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize)
            : 0;
        /** @type {?} */
        var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
        /** @type {?} */
        var end;
        if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
        }
        return { start: start, end: end };
    };
    /**
     * @protected
     * @param {?} tempEvents
     * @param {?} adjustedEvents
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.restoreOriginalEvents = /**
     * @protected
     * @param {?} tempEvents
     * @param {?} adjustedEvents
     * @return {?}
     */
    function (tempEvents, adjustedEvents) {
        /** @type {?} */
        var previousView = this.view;
        this.view = this.getWeekView(tempEvents);
        /** @type {?} */
        var adjustedEventsArray = tempEvents.filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return adjustedEvents.has(event);
        }));
        this.view.hourColumns.forEach((/**
         * @param {?} column
         * @param {?} columnIndex
         * @return {?}
         */
        function (column, columnIndex) {
            previousView.hourColumns[columnIndex].hours.forEach((/**
             * @param {?} hour
             * @param {?} hourIndex
             * @return {?}
             */
            function (hour, hourIndex) {
                hour.segments.forEach((/**
                 * @param {?} segment
                 * @param {?} segmentIndex
                 * @return {?}
                 */
                function (segment, segmentIndex) {
                    column.hours[hourIndex].segments[segmentIndex].cssClass =
                        segment.cssClass;
                }));
            }));
            adjustedEventsArray.forEach((/**
             * @param {?} adjustedEvent
             * @return {?}
             */
            function (adjustedEvent) {
                /** @type {?} */
                var originalEvent = adjustedEvents.get(adjustedEvent);
                /** @type {?} */
                var existingColumnEvent = column.events.find((/**
                 * @param {?} columnEvent
                 * @return {?}
                 */
                function (columnEvent) { return columnEvent.event === adjustedEvent; }));
                if (existingColumnEvent) {
                    // restore the original event so trackBy kicks in and the dom isn't changed
                    existingColumnEvent.event = originalEvent;
                }
                else {
                    // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                    column.events.push({
                        event: originalEvent,
                        left: 0,
                        top: 0,
                        height: 0,
                        width: 0,
                        startsBeforeDay: false,
                        endsAfterDay: false
                    });
                }
            }));
        }));
        adjustedEvents.clear();
    };
    /**
     * @protected
     * @param {?} calendarEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getTimeEventResizedDates = /**
     * @protected
     * @param {?} calendarEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (calendarEvent, resizeEvent) {
        /** @type {?} */
        var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
        /** @type {?} */
        var newEventDates = {
            start: calendarEvent.start,
            end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
        };
        var end = calendarEvent.end, eventWithoutEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__rest"])(calendarEvent, ["end"]);
        /** @type {?} */
        var smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
        };
        if (typeof resizeEvent.edges.left !== 'undefined') {
            /** @type {?} */
            var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            /** @type {?} */
            var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (typeof resizeEvent.edges.right !== 'undefined') {
            /** @type {?} */
            var daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);
            /** @type {?} */
            var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        if (typeof resizeEvent.edges.top !== 'undefined') {
            /** @type {?} */
            var minutesMoved = getMinutesMoved((/** @type {?} */ (resizeEvent.edges.top)), this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */
            var newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            /** @type {?} */
            var minutesMoved = getMinutesMoved((/** @type {?} */ (resizeEvent.edges.bottom)), this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */
            var newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        return newEventDates;
    };
    CalendarWeekViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-week-view',
                    template: "\n    <div class=\"cal-week-view\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByDayOrWeekEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({ event: allDayEvent.event })\"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div class=\"cal-time-label-column\" *ngIf=\"view.hourColumns.length > 0\">\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <div\n              *ngFor=\"\n                let timeEvent of column.events;\n                trackBy: trackByDayOrWeekEvent\n              \"\n              #event\n              class=\"cal-event-container\"\n              [class.cal-draggable]=\"\n                timeEvent.event.draggable && timeEventResizes.size === 0\n              \"\n              [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n              [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n              [ngClass]=\"timeEvent.event.cssClass\"\n              [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n              [style.top.px]=\"timeEvent.top\"\n              [style.height.px]=\"timeEvent.height\"\n              [style.left.%]=\"timeEvent.left\"\n              [style.width.%]=\"timeEvent.width\"\n              mwlResizable\n              [resizeSnapGrid]=\"{\n                left: dayColumnWidth,\n                right: dayColumnWidth,\n                top: eventSnapSize || hourSegmentHeight,\n                bottom: eventSnapSize || hourSegmentHeight\n              }\"\n              [validateResize]=\"validateResize\"\n              [allowNegativeResizes]=\"true\"\n              (resizeStart)=\"\n                timeEventResizeStarted(dayColumns, timeEvent, $event)\n              \"\n              (resizing)=\"timeEventResizing(timeEvent, $event)\"\n              (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n              mwlDraggable\n              dragActiveClass=\"cal-drag-active\"\n              [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n              [dragAxis]=\"{\n                x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                y: timeEvent.event.draggable && timeEventResizes.size === 0\n              }\"\n              [dragSnapGrid]=\"\n                snapDraggedEvents\n                  ? { x: dayColumnWidth, y: eventSnapSize || hourSegmentHeight }\n                  : {}\n              \"\n              [ghostDragEnabled]=\"!snapDraggedEvents\"\n              [validateDrag]=\"validateDrag\"\n              (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n              (dragging)=\"dragMove(timeEvent, $event)\"\n              (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n            >\n              <div\n                class=\"cal-resize-handle cal-resize-handle-before-start\"\n                *ngIf=\"\n                  timeEvent.event?.resizable?.beforeStart &&\n                  !timeEvent.startsBeforeDay\n                \"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  left: true,\n                  top: true\n                }\"\n              ></div>\n              <mwl-calendar-week-view-event\n                [weekEvent]=\"timeEvent\"\n                [tooltipPlacement]=\"tooltipPlacement\"\n                [tooltipTemplate]=\"tooltipTemplate\"\n                [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                [tooltipDelay]=\"tooltipDelay\"\n                [customTemplate]=\"eventTemplate\"\n                [eventTitleTemplate]=\"eventTitleTemplate\"\n                [eventActionsTemplate]=\"eventActionsTemplate\"\n                [column]=\"column\"\n                (eventClicked)=\"eventClicked.emit({ event: timeEvent.event })\"\n              >\n              </mwl-calendar-week-view-event>\n              <div\n                class=\"cal-resize-handle cal-resize-handle-after-end\"\n                *ngIf=\"\n                  timeEvent.event?.resizable?.afterEnd &&\n                  !timeEvent.endsAfterDay\n                \"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  right: true,\n                  bottom: true\n                }\"\n              ></div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                (mwlClick)=\"hourSegmentClicked.emit({ date: segment.date })\"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    CalendarWeekViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: CalendarUtils },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] },
        { type: DateAdapter }
    ]; };
    CalendarWeekViewComponent.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        weekStartsOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        precision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        weekendDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        snapDraggedEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayStartHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayStartMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayEndHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayEndMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegmentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventSnapSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        allDayEventsLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        daysInWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayHeaderClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventTimesChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        beforeViewRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        hourSegmentClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarWeekViewComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarWeekViewHeaderComponent = /** @class */ (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    CalendarWeekViewHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-header',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarWeekViewHeaderComponent.propDecorators = {
        days: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayHeaderClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventDropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarWeekViewHeaderComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarWeekViewEventComponent = /** @class */ (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CalendarWeekViewEventComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle: 'weekTooltip':weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit()\"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarWeekViewEventComponent.propDecorators = {
        weekEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarWeekViewEventComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarWeekViewHourSegmentComponent = /** @class */ (function () {
    function CalendarWeekViewHourSegmentComponent() {
    }
    CalendarWeekViewHourSegmentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-hour-segment',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n    >\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{ segment.displayDate | calendarDate: 'weekViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarWeekViewHourSegmentComponent.propDecorators = {
        segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        segmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isTimeLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CalendarWeekViewHourSegmentComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarWeekModule = /** @class */ (function () {
    function CalendarWeekModule() {
    }
    CalendarWeekModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarCommonModule
                    ],
                    declarations: [
                        CalendarWeekViewComponent,
                        CalendarWeekViewHeaderComponent,
                        CalendarWeekViewEventComponent,
                        CalendarWeekViewHourSegmentComponent
                    ],
                    exports: [
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarWeekViewComponent,
                        CalendarWeekViewHeaderComponent,
                        CalendarWeekViewEventComponent,
                        CalendarWeekViewHourSegmentComponent
                    ]
                },] }
    ];
    return CalendarWeekModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CalendarDayViewBeforeRenderEvent() { }
if (false) {}
/**
 * @hidden
 * @record
 */
function DayViewEventResize() { }
if (false) {}
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
var CalendarDayViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarDayViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnter = 0;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar day view id');
        /**
         * @hidden
         */
        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */
        this.trackByEventId = trackByEventId;
        /**
         * @hidden
         */
        this.trackByHour = trackByHour;
        /**
         * @hidden
         */
        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */
        this.trackByDayEvent = trackByDayOrWeekEvent;
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe((/**
             * @return {?}
             */
            function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var refreshHourGrid = changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments;
        /** @type {?} */
        var refreshView = changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth ||
            changes.hourSegments;
        if (refreshHourGrid) {
            this.refreshHourGrid();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (refreshView) {
            this.refreshView();
        }
        if (refreshHourGrid || refreshView) {
            this.emitBeforeViewRender();
        }
    };
    /**
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    CalendarDayViewComponent.prototype.eventDropped = /**
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    function (dropEvent, date, allDay) {
        if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
            });
        }
    };
    /**
     * @param {?} event
     * @param {?} resizeEvent
     * @param {?} dayEventsContainer
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizeStarted = /**
     * @param {?} event
     * @param {?} resizeEvent
     * @param {?} dayEventsContainer
     * @return {?}
     */
    function (event, resizeEvent, dayEventsContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        /** @type {?} */
        var resizeHelper = new CalendarResizeHelper(dayEventsContainer);
        this.validateResize = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        });
        this.cdr.markForCheck();
    };
    /**
     * @param {?} event
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizing = /**
     * @param {?} event
     * @param {?} resizeEvent
     * @return {?}
     */
    function (event, resizeEvent) {
        /** @type {?} */
        var currentResize = this.currentResizes.get(event);
        if (typeof resizeEvent.edges.top !== 'undefined') {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    /**
     * @param {?} dayEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizeEnded = /**
     * @param {?} dayEvent
     * @return {?}
     */
    function (dayEvent) {
        /** @type {?} */
        var currentResize = this.currentResizes.get(dayEvent);
        /** @type {?} */
        var resizingBeforeStart = currentResize.edge === 'top';
        /** @type {?} */
        var pixelsMoved;
        if (resizingBeforeStart) {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
        }
        else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        /** @type {?} */
        var minutesMoved = getMinutesMoved(pixelsMoved, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
        /** @type {?} */
        var newStart = dayEvent.event.start;
        /** @type {?} */
        var newEnd = getDefaultEventEnd(this.dateAdapter, dayEvent.event, getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight));
        if (resizingBeforeStart) {
            newStart = this.dateAdapter.addMinutes(newStart, minutesMoved);
        }
        else {
            newEnd = this.dateAdapter.addMinutes(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({
            newStart: newStart,
            newEnd: newEnd,
            event: dayEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
        });
        this.currentResizes.delete(dayEvent);
    };
    /**
     * @param {?} event
     * @param {?} dayEventsContainer
     * @param {?} dayEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.dragStarted = /**
     * @param {?} event
     * @param {?} dayEventsContainer
     * @param {?} dayEvent
     * @return {?}
     */
    function (event, dayEventsContainer, dayEvent) {
        var _this = this;
        /** @type {?} */
        var dragHelper = new CalendarDragHelper(dayEventsContainer, event);
        this.validateDrag = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var x = _a.x, y = _a.y, transform = _a.transform;
            return _this.currentResizes.size === 0 &&
                dragHelper.validateDrag({
                    x: x,
                    y: y,
                    snapDraggedEvents: _this.snapDraggedEvents,
                    dragAlreadyMoved: _this.dragAlreadyMoved,
                    transform: transform
                });
        });
        this.eventDragEnter = 0;
        this.dragAlreadyMoved = false;
        this.currentDrag = {
            dayEvent: dayEvent,
            originalTop: dayEvent.top,
            originalLeft: dayEvent.left
        };
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} coords
     * @return {?}
     */
    CalendarDayViewComponent.prototype.dragMove = /**
     * @hidden
     * @param {?} coords
     * @return {?}
     */
    function (coords) {
        this.dragAlreadyMoved = true;
        if (this.snapDraggedEvents) {
            this.currentDrag.dayEvent.top = this.currentDrag.originalTop + coords.y;
            this.currentDrag.dayEvent.left = this.currentDrag.originalLeft + coords.x;
        }
    };
    /**
     * @param {?} dayEvent
     * @param {?} dragEndEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.dragEnded = /**
     * @param {?} dayEvent
     * @param {?} dragEndEvent
     * @return {?}
     */
    function (dayEvent, dragEndEvent) {
        this.currentDrag.dayEvent.top = this.currentDrag.originalTop;
        this.currentDrag.dayEvent.left = this.currentDrag.originalLeft;
        this.currentDrag = null;
        if (this.eventDragEnter > 0) {
            /** @type {?} */
            var minutesMoved = getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */
            var newStart = this.dateAdapter.addMinutes(dayEvent.event.start, minutesMoved);
            if (dragEndEvent.y < 0 && newStart < this.view.period.start) {
                minutesMoved += this.dateAdapter.differenceInMinutes(this.view.period.start, newStart);
                newStart = this.view.period.start;
            }
            /** @type {?} */
            var newEnd = void 0;
            if (dayEvent.event.end) {
                newEnd = this.dateAdapter.addMinutes(dayEvent.event.end, minutesMoved);
            }
            if (isDraggedWithinPeriod(newStart, newEnd, this.view.period)) {
                this.eventTimesChanged.emit({
                    newStart: newStart,
                    newEnd: newEnd,
                    event: dayEvent.event,
                    type: CalendarEventTimesChangedEventType.Drag,
                    allDay: false
                });
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshHourGrid = /**
     * @protected
     * @return {?}
     */
    function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshView = /**
     * @protected
     * @return {?}
     */
    function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: this.hourSegmentHeight
        });
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshAll = /**
     * @protected
     * @return {?}
     */
    function () {
        this.refreshHourGrid();
        this.refreshView();
        this.emitBeforeViewRender();
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarDayViewComponent.prototype.emitBeforeViewRender = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.hours && this.view) {
            this.beforeViewRender.emit({
                body: {
                    hourGrid: this.hours,
                    allDayEvents: this.view.allDayEvents
                },
                period: this.view.period
            });
        }
    };
    CalendarDayViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-day-view',
                    template: "\n    <div class=\"cal-day-view\">\n      <div\n        class=\"cal-all-day-events\"\n        mwlDroppable\n        dragOverClass=\"cal-drag-over\"\n        dragActiveClass=\"cal-drag-active\"\n        (drop)=\"eventDropped($event, view.period.start, true)\"\n      >\n        <mwl-calendar-day-view-event\n          *ngFor=\"let event of view.allDayEvents; trackBy: trackByEventId\"\n          [ngClass]=\"event.cssClass\"\n          [dayEvent]=\"{ event: event }\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          [customTemplate]=\"eventTemplate\"\n          [eventTitleTemplate]=\"eventTitleTemplate\"\n          [eventActionsTemplate]=\"eventActionsTemplate\"\n          (eventClicked)=\"eventClicked.emit({ event: event })\"\n          [class.cal-draggable]=\"!snapDraggedEvents && event.draggable\"\n          mwlDraggable\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, calendarId: calendarId }\"\n          [dragAxis]=\"{\n            x: !snapDraggedEvents && event.draggable,\n            y: !snapDraggedEvents && event.draggable\n          }\"\n        >\n        </mwl-calendar-day-view-event>\n      </div>\n      <div\n        class=\"cal-hour-rows\"\n        #dayEventsContainer\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\"\n      >\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events; trackBy: trackByDayEvent\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeSnapGrid]=\"{\n              top: eventSnapSize || hourSegmentHeight,\n              bottom: eventSnapSize || hourSegmentHeight\n            }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayEventsContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: dayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x:\n                !snapDraggedEvents &&\n                dayEvent.event.draggable &&\n                currentResizes.size === 0,\n              y: dayEvent.event.draggable && currentResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"\n              snapDraggedEvents ? { y: eventSnapSize || hourSegmentHeight } : {}\n            \"\n            [validateDrag]=\"validateDrag\"\n            [ghostDragEnabled]=\"!snapDraggedEvents\"\n            (dragStart)=\"dragStarted(event, dayEventsContainer, dayEvent)\"\n            (dragging)=\"dragMove($event)\"\n            (dragEnd)=\"dragEnded(dayEvent, $event)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                dayEvent.event?.resizable?.beforeStart &&\n                !dayEvent.startsBeforeDay\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ top: true }\"\n            ></div>\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({ event: dayEvent.event })\"\n            >\n            </mwl-calendar-day-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                dayEvent.event?.resizable?.afterEnd && !dayEvent.endsAfterDay\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ bottom: true }\"\n            ></div>\n          </div>\n        </div>\n        <div\n          class=\"cal-hour\"\n          *ngFor=\"let hour of hours; trackBy: trackByHour\"\n          [style.minWidth.px]=\"view?.width + 70\"\n        >\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n            [style.height.px]=\"hourSegmentHeight\"\n            [segment]=\"segment\"\n            [segmentHeight]=\"hourSegmentHeight\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({ date: segment.date })\"\n            [clickListenerDisabled]=\"hourSegmentClicked.observers.length === 0\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            dragActiveClass=\"cal-drag-active\"\n            (drop)=\"eventDropped($event, segment.date, false)\"\n          >\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    CalendarDayViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: CalendarUtils },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] },
        { type: DateAdapter }
    ]; };
    CalendarDayViewComponent.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayStartHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayStartMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayEndHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayEndMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventSnapSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegmentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        snapDraggedEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        hourSegmentClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventTimesChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        beforeViewRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarDayViewComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarDayViewHourSegmentComponent = /** @class */ (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    CalendarDayViewHourSegmentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-hour-segment',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n    >\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\">\n          {{ segment.displayDate | calendarDate: 'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarDayViewHourSegmentComponent.propDecorators = {
        segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        segmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CalendarDayViewHourSegmentComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarDayViewEventComponent = /** @class */ (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CalendarDayViewEventComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: dayEvent.event.color?.secondary,\n          borderColor: dayEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          dayEvent.event.title | calendarEventTitle: 'dayTooltip':dayEvent.event\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit()\"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarDayViewEventComponent.propDecorators = {
        dayEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarDayViewEventComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarDayModule = /** @class */ (function () {
    function CalendarDayModule() {
    }
    CalendarDayModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarCommonModule
                    ],
                    declarations: [
                        CalendarDayViewComponent,
                        CalendarDayViewHourSegmentComponent,
                        CalendarDayViewEventComponent
                    ],
                    exports: [
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarDayViewComponent,
                        CalendarDayViewHourSegmentComponent,
                        CalendarDayViewEventComponent
                    ]
                },] }
    ];
    return CalendarDayModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * \@NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    CalendarModule.forRoot = /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    function (dateAdapter, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    CalendarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        CalendarCommonModule,
                        CalendarMonthModule,
                        CalendarWeekModule,
                        CalendarDayModule
                    ],
                    exports: [
                        CalendarCommonModule,
                        CalendarMonthModule,
                        CalendarWeekModule,
                        CalendarDayModule
                    ]
                },] }
    ];
    return CalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-calendar.js.map


/***/ }),

/***/ "./node_modules/calendar-utils/calendar-utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/calendar-utils/calendar-utils.js ***!
  \*******************************************************/
/*! exports provided: DAYS_OF_WEEK, SECONDS_IN_DAY, getWeekViewEventOffset, getEventsInPeriod, getWeekViewHeader, getDifferenceInDaysWithExclusions, getWeekView, getMonthView, getDayView, getDayViewHourGrid, EventValidationErrorMessage, validateEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return DAYS_OF_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDS_IN_DAY", function() { return SECONDS_IN_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewEventOffset", function() { return getWeekViewEventOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventsInPeriod", function() { return getEventsInPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewHeader", function() { return getWeekViewHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDifferenceInDaysWithExclusions", function() { return getDifferenceInDaysWithExclusions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekView", function() { return getWeekView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthView", function() { return getMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayView", function() { return getDayView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayViewHourGrid", function() { return getDayViewHourGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventValidationErrorMessage", function() { return EventValidationErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEvents", function() { return validateEvents; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var DAYS_OF_WEEK;
(function (DAYS_OF_WEEK) {
    DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));
var DEFAULT_WEEKEND_DAYS = [
    DAYS_OF_WEEK.SUNDAY,
    DAYS_OF_WEEK.SATURDAY
];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;
function getExcludedSeconds(dateAdapter, _a) {
    var startDate = _a.startDate, seconds = _a.seconds, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    if (excluded.length < 1) {
        return 0;
    }
    var addSeconds = dateAdapter.addSeconds, getDay = dateAdapter.getDay, addDays = dateAdapter.addDays;
    var endDate = addSeconds(startDate, seconds - 1);
    var dayStart = getDay(startDate);
    var dayEnd = getDay(endDate);
    var result = 0; // Calculated in seconds
    var current = startDate;
    var _loop_1 = function () {
        var day = getDay(current);
        if (excluded.some(function (excludedDay) { return excludedDay === day; })) {
            result += calculateExcludedSeconds(dateAdapter, {
                dayStart: dayStart,
                dayEnd: dayEnd,
                day: day,
                precision: precision,
                startDate: startDate,
                endDate: endDate
            });
        }
        current = addDays(current, 1);
    };
    while (current < endDate) {
        _loop_1();
    }
    return result;
}
function calculateExcludedSeconds(dateAdapter, _a) {
    var precision = _a.precision, day = _a.day, dayStart = _a.dayStart, dayEnd = _a.dayEnd, startDate = _a.startDate, endDate = _a.endDate;
    var differenceInSeconds = dateAdapter.differenceInSeconds, endOfDay = dateAdapter.endOfDay, startOfDay = dateAdapter.startOfDay;
    if (precision === 'minutes') {
        if (day === dayStart) {
            return differenceInSeconds(endOfDay(startDate), startDate) + 1;
        }
        else if (day === dayEnd) {
            return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
        }
    }
    return SECONDS_IN_DAY;
}
function getWeekViewEventSpan(dateAdapter, _a) {
    var event = _a.event, offset = _a.offset, startOfWeekDate = _a.startOfWeekDate, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b, totalDaysInView = _a.totalDaysInView;
    var max = dateAdapter.max, differenceInSeconds = dateAdapter.differenceInSeconds, addDays = dateAdapter.addDays, endOfDay = dateAdapter.endOfDay, differenceInDays = dateAdapter.differenceInDays;
    var span = SECONDS_IN_DAY;
    var begin = max(event.start, startOfWeekDate);
    if (event.end) {
        switch (precision) {
            case 'minutes':
                span = differenceInSeconds(event.end, begin);
                break;
            default:
                span =
                    differenceInDays(addDays(endOfDay(event.end), 1), begin) *
                        SECONDS_IN_DAY;
                break;
        }
    }
    var offsetSeconds = offset * SECONDS_IN_DAY;
    var totalLength = offsetSeconds + span;
    // the best way to detect if an event is outside the week-view
    // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view
    var secondsInView = totalDaysInView * SECONDS_IN_DAY;
    if (totalLength > secondsInView) {
        span = secondsInView - offsetSeconds;
    }
    span -= getExcludedSeconds(dateAdapter, {
        startDate: begin,
        seconds: span,
        excluded: excluded,
        precision: precision
    });
    return span / SECONDS_IN_DAY;
}
function getWeekViewEventOffset(dateAdapter, _a) {
    var event = _a.event, startOfWeekDate = _a.startOfWeek, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, _c = _a.precision, precision = _c === void 0 ? 'days' : _c;
    var differenceInDays = dateAdapter.differenceInDays, startOfDay = dateAdapter.startOfDay, differenceInSeconds = dateAdapter.differenceInSeconds;
    if (event.start < startOfWeekDate) {
        return 0;
    }
    var offset = 0;
    switch (precision) {
        case 'days':
            offset =
                differenceInDays(startOfDay(event.start), startOfWeekDate) *
                    SECONDS_IN_DAY;
            break;
        case 'minutes':
            offset = differenceInSeconds(event.start, startOfWeekDate);
            break;
    }
    offset -= getExcludedSeconds(dateAdapter, {
        startDate: startOfWeekDate,
        seconds: offset,
        excluded: excluded,
        precision: precision
    });
    return Math.abs(offset / SECONDS_IN_DAY);
}
function isEventIsPeriod(dateAdapter, _a) {
    var event = _a.event, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    var isSameSecond = dateAdapter.isSameSecond;
    var eventStart = event.start;
    var eventEnd = event.end || event.start;
    if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
    }
    if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
    }
    if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
    }
    if (isSameSecond(eventStart, periodStart) ||
        isSameSecond(eventStart, periodEnd)) {
        return true;
    }
    if (isSameSecond(eventEnd, periodStart) ||
        isSameSecond(eventEnd, periodEnd)) {
        return true;
    }
    return false;
}
function getEventsInPeriod(dateAdapter, _a) {
    var events = _a.events, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    return events.filter(function (event) {
        return isEventIsPeriod(dateAdapter, { event: event, periodStart: periodStart, periodEnd: periodEnd });
    });
}
function getWeekDay(dateAdapter, _a) {
    var date = _a.date, _b = _a.weekendDays, weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
    var startOfDay = dateAdapter.startOfDay, isSameDay = dateAdapter.isSameDay, getDay = dateAdapter.getDay;
    var today = startOfDay(new Date());
    var day = getDay(date);
    return {
        date: date,
        day: day,
        isPast: date < today,
        isToday: isSameDay(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(day) > -1
    };
}
function getWeekViewHeader(dateAdapter, _a) {
    var viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, weekendDays = _a.weekendDays, _c = _a.viewStart, viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _c, _d = _a.viewEnd, viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
    var addDays = dateAdapter.addDays, getDay = dateAdapter.getDay;
    var days = [];
    var date = viewStart;
    while (date < viewEnd) {
        if (!excluded.some(function (e) { return getDay(date) === e; })) {
            days.push(getWeekDay(dateAdapter, { date: date, weekendDays: weekendDays }));
        }
        date = addDays(date, 1);
    }
    return days;
}
function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
    var date1 = _a.date1, date2 = _a.date2, excluded = _a.excluded;
    var date = date1;
    var diff = 0;
    while (date < date2) {
        if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
            diff++;
        }
        date = dateAdapter.addDays(date, 1);
    }
    return diff;
}
function getAllDayWeekEvents(dateAdapter, _a) {
    var events = _a.events, excluded = _a.excluded, precision = _a.precision, absolutePositionedEvents = _a.absolutePositionedEvents, viewStart = _a.viewStart, viewEnd = _a.viewEnd, eventsInPeriod = _a.eventsInPeriod;
    var differenceInSeconds = dateAdapter.differenceInSeconds, differenceInDays = dateAdapter.differenceInDays;
    var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
        date1: viewStart,
        date2: viewEnd,
        excluded: excluded
    });
    var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
    var eventsMapped = eventsInPeriod
        .filter(function (event) { return event.allDay; })
        .map(function (event) {
        var offset = getWeekViewEventOffset(dateAdapter, {
            event: event,
            startOfWeek: viewStart,
            excluded: excluded,
            precision: precision
        });
        var span = getWeekViewEventSpan(dateAdapter, {
            event: event,
            offset: offset,
            startOfWeekDate: viewStart,
            excluded: excluded,
            precision: precision,
            totalDaysInView: totalDaysInView
        });
        return { event: event, offset: offset, span: span };
    })
        .filter(function (e) { return e.offset < maxRange; })
        .filter(function (e) { return e.span > 0; })
        .map(function (entry) { return ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < viewStart,
        endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
    }); })
        .sort(function (itemA, itemB) {
        var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    });
    var allDayEventRows = [];
    var allocatedEvents = [];
    eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            var rowSpan_1 = event.span + event.offset;
            var otherRowEvents = eventsMapped
                .slice(index + 1)
                .filter(function (nextEvent) {
                if (nextEvent.offset >= rowSpan_1 &&
                    rowSpan_1 + nextEvent.span <= totalDaysInView &&
                    allocatedEvents.indexOf(nextEvent) === -1) {
                    var nextEventOffset = nextEvent.offset - rowSpan_1;
                    if (!absolutePositionedEvents) {
                        nextEvent.offset = nextEventOffset;
                    }
                    rowSpan_1 += nextEvent.span + nextEventOffset;
                    allocatedEvents.push(nextEvent);
                    return true;
                }
            });
            var weekEvents = [event].concat(otherRowEvents);
            var id = weekEvents
                .filter(function (weekEvent) { return weekEvent.event.id; })
                .map(function (weekEvent) { return weekEvent.event.id; })
                .join('-');
            allDayEventRows.push(__assign({ row: weekEvents }, (id ? { id: id } : {})));
        }
    });
    return allDayEventRows;
}
function getWeekViewHourGrid(dateAdapter, _a) {
    var events = _a.events, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, weekStartsOn = _a.weekStartsOn, excluded = _a.excluded, weekendDays = _a.weekendDays, segmentHeight = _a.segmentHeight, viewStart = _a.viewStart, viewEnd = _a.viewEnd;
    var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
        viewDate: viewDate,
        hourSegments: hourSegments,
        dayStart: dayStart,
        dayEnd: dayEnd
    });
    var weekDays = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
    });
    var setHours = dateAdapter.setHours, setMinutes = dateAdapter.setMinutes, getHours = dateAdapter.getHours, getMinutes = dateAdapter.getMinutes;
    return weekDays.map(function (day) {
        var dayView = getDayView(dateAdapter, {
            events: events,
            viewDate: day.date,
            hourSegments: hourSegments,
            dayStart: dayStart,
            dayEnd: dayEnd,
            segmentHeight: segmentHeight,
            eventWidth: 1
        });
        var hours = dayViewHourGrid.map(function (hour) {
            var segments = hour.segments.map(function (segment) {
                var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
                return __assign({}, segment, { date: date });
            });
            return __assign({}, hour, { segments: segments });
        });
        function getColumnCount(allEvents, prevOverlappingEvents) {
            var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function (iEvent) { return iEvent.left + 1; }));
            var nextOverlappingEvents = allEvents
                .filter(function (iEvent) { return iEvent.left >= columnCount; })
                .filter(function (iEvent) {
                return (getOverLappingDayViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0);
            });
            if (nextOverlappingEvents.length > 0) {
                return getColumnCount(allEvents, nextOverlappingEvents);
            }
            else {
                return columnCount;
            }
        }
        var mappedEvents = dayView.events.map(function (event) {
            var columnCount = getColumnCount(dayView.events, getOverLappingDayViewEvents(dayView.events, event.top, event.top + event.height));
            var width = 100 / columnCount;
            return __assign({}, event, { left: event.left * width, width: width });
        });
        return {
            hours: hours,
            date: day.date,
            events: mappedEvents.map(function (event) {
                var overLappingEvents = getOverLappingDayViewEvents(mappedEvents.filter(function (otherEvent) { return otherEvent.left > event.left; }), event.top, event.top + event.height);
                if (overLappingEvents.length > 0) {
                    return __assign({}, event, { width: Math.min.apply(Math, overLappingEvents.map(function (otherEvent) { return otherEvent.left; })) - event.left });
                }
                return event;
            })
        };
    });
}
function getWeekView(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? 'days' : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, weekendDays = _a.weekendDays, segmentHeight = _a.segmentHeight, _f = _a.viewStart, viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _f, _g = _a.viewEnd, viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _g;
    if (!events) {
        events = [];
    }
    var startOfDay = dateAdapter.startOfDay, endOfDay = dateAdapter.endOfDay;
    viewStart = startOfDay(viewStart);
    viewEnd = endOfDay(viewEnd);
    var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: viewStart,
        periodEnd: viewEnd
    });
    var header = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
    });
    return {
        allDayEventRows: getAllDayWeekEvents(dateAdapter, {
            events: events,
            excluded: excluded,
            precision: precision,
            absolutePositionedEvents: absolutePositionedEvents,
            viewStart: viewStart,
            viewEnd: viewEnd,
            eventsInPeriod: eventsInPeriod
        }),
        period: {
            events: eventsInPeriod,
            start: header[0].date,
            end: endOfDay(header[header.length - 1].date)
        },
        hourColumns: getWeekViewHourGrid(dateAdapter, {
            events: events,
            viewDate: viewDate,
            hourSegments: hourSegments,
            dayStart: dayStart,
            dayEnd: dayEnd,
            weekStartsOn: weekStartsOn,
            excluded: excluded,
            weekendDays: weekendDays,
            segmentHeight: segmentHeight,
            viewStart: viewStart,
            viewEnd: viewEnd
        })
    };
}
function getMonthView(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.viewStart, viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d, _e = _a.viewEnd, viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e, weekendDays = _a.weekendDays;
    if (!events) {
        events = [];
    }
    var startOfWeek = dateAdapter.startOfWeek, endOfWeek = dateAdapter.endOfWeek, differenceInDays = dateAdapter.differenceInDays, startOfDay = dateAdapter.startOfDay, addHours = dateAdapter.addHours, endOfDay = dateAdapter.endOfDay, isSameMonth = dateAdapter.isSameMonth, getDay = dateAdapter.getDay, getMonth = dateAdapter.getMonth;
    var start = startOfWeek(viewStart, { weekStartsOn: weekStartsOn });
    var end = endOfWeek(viewEnd, { weekStartsOn: weekStartsOn });
    var eventsInMonth = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: start,
        periodEnd: end
    });
    var initialViewDays = [];
    var previousDate;
    var _loop_2 = function (i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;
        if (previousDate) {
            date = startOfDay(addHours(previousDate, HOURS_IN_DAY));
            if (previousDate.getTime() === date.getTime()) {
                // DST change, so need to add 25 hours
                /* istanbul ignore next */
                date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
            }
            previousDate = date;
        }
        else {
            date = previousDate = start;
        }
        if (!excluded.some(function (e) { return getDay(date) === e; })) {
            var day = getWeekDay(dateAdapter, {
                date: date,
                weekendDays: weekendDays
            });
            var eventsInPeriod = getEventsInPeriod(dateAdapter, {
                events: eventsInMonth,
                periodStart: startOfDay(date),
                periodEnd: endOfDay(date)
            });
            day.inMonth = isSameMonth(date, viewDate);
            day.events = eventsInPeriod;
            day.badgeTotal = eventsInPeriod.length;
            initialViewDays.push(day);
        }
    };
    for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
        _loop_2(i);
    }
    var days = [];
    var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
    if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
        for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
            var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
            var isRowInMonth = row.some(function (day) { return getMonth(day.date) === getMonth(viewDate); });
            if (isRowInMonth) {
                days = days.concat(row);
            }
        }
    }
    else {
        days = initialViewDays;
    }
    var rows = Math.floor(days.length / totalDaysVisibleInWeek);
    var rowOffsets = [];
    for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
    }
    return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days,
        period: {
            start: days[0].date,
            end: endOfDay(days[days.length - 1].date),
            events: eventsInMonth
        }
    };
}
function getOverLappingDayViewEvents(events, top, bottom) {
    return events.filter(function (previousEvent) {
        var previousEventTop = previousEvent.top;
        var previousEventBottom = previousEvent.top + previousEvent.height;
        if (top < previousEventBottom && previousEventBottom < bottom) {
            return true;
        }
        else if (top < previousEventTop && previousEventTop < bottom) {
            return true;
        }
        else if (previousEventTop <= top && bottom <= previousEventBottom) {
            return true;
        }
        return false;
    });
}
function getDayView(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, eventWidth = _a.eventWidth, segmentHeight = _a.segmentHeight;
    if (!events) {
        events = [];
    }
    var setMinutes = dateAdapter.setMinutes, setHours = dateAdapter.setHours, startOfDay = dateAdapter.startOfDay, startOfMinute = dateAdapter.startOfMinute, endOfDay = dateAdapter.endOfDay, differenceInMinutes = dateAdapter.differenceInMinutes;
    var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
    var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
    var previousDayEvents = [];
    var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) { return !event.allDay; }),
        periodStart: startOfView,
        periodEnd: endOfView
    });
    var dayViewEvents = eventsInPeriod
        .sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
    })
        .map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = (hourSegments * segmentHeight) / MINUTES_IN_HOUR;
        var top = 0;
        if (eventStart > startOfView) {
            // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
            var eventOffset = eventStart.getTimezoneOffset();
            var startOffset = startOfView.getTimezoneOffset();
            var diff = startOffset - eventOffset;
            top += differenceInMinutes(eventStart, startOfView) + diff;
        }
        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = differenceInMinutes(endDate, startDate);
        if (!event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        var bottom = top + height;
        var overlappingPreviousEvents = getOverLappingDayViewEvents(previousDayEvents, top, bottom);
        var left = 0;
        while (overlappingPreviousEvents.some(function (previousEvent) { return previousEvent.left === left; })) {
            left += eventWidth;
        }
        var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay
        };
        previousDayEvents.push(dayEvent);
        return dayEvent;
    });
    var width = Math.max.apply(Math, dayViewEvents.map(function (event) { return event.left + event.width; }));
    var allDayEvents = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) { return event.allDay; }),
        periodStart: startOfDay(startOfView),
        periodEnd: endOfDay(endOfView)
    });
    return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents,
        period: {
            events: eventsInPeriod,
            start: startOfView,
            end: endOfView
        }
    };
}
function sanitiseHours(hours) {
    return Math.max(Math.min(23, hours), 0);
}
function sanitiseMinutes(minutes) {
    return Math.max(Math.min(59, minutes), 0);
}
function getDayViewHourGrid(dateAdapter, _a) {
    var viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
    var setMinutes = dateAdapter.setMinutes, setHours = dateAdapter.setHours, startOfDay = dateAdapter.startOfDay, startOfMinute = dateAdapter.startOfMinute, endOfDay = dateAdapter.endOfDay, addMinutes = dateAdapter.addMinutes, addHours = dateAdapter.addHours, addDays = dateAdapter.addDays;
    var hours = [];
    var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
    var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
    var segmentDuration = MINUTES_IN_HOUR / hourSegments;
    var startOfViewDay = startOfDay(viewDate);
    var endOfViewDay = endOfDay(viewDate);
    var dateAdjustment = function (d) { return d; };
    // this means that we change from or to DST on this day and that's going to cause problems so we bump the date
    if (startOfViewDay.getTimezoneOffset() !== endOfViewDay.getTimezoneOffset()) {
        startOfViewDay = addDays(startOfViewDay, 1);
        startOfView = addDays(startOfView, 1);
        endOfView = addDays(endOfView, 1);
        dateAdjustment = function (d) { return addDays(d, -1); };
    }
    for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];
        for (var j = 0; j < hourSegments; j++) {
            var date = addMinutes(addHours(startOfViewDay, i), j * segmentDuration);
            if (date >= startOfView && date < endOfView) {
                segments.push({
                    date: dateAdjustment(date),
                    displayDate: date,
                    isStart: j === 0
                });
            }
        }
        if (segments.length > 0) {
            hours.push({ segments: segments });
        }
    }
    return hours;
}
var EventValidationErrorMessage;
(function (EventValidationErrorMessage) {
    EventValidationErrorMessage["NotArray"] = "Events must be an array";
    EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
    EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
    EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
    EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
})(EventValidationErrorMessage || (EventValidationErrorMessage = {}));
function validateEvents(events, log) {
    var isValid = true;
    function isError(msg, event) {
        log(msg, event);
        isValid = false;
    }
    if (!Array.isArray(events)) {
        log(EventValidationErrorMessage.NotArray, events);
        return false;
    }
    events.forEach(function (event) {
        if (!event.start) {
            isError(EventValidationErrorMessage.StartPropertyMissing, event);
        }
        else if (!(event.start instanceof Date)) {
            isError(EventValidationErrorMessage.StartPropertyNotDate, event);
        }
        if (event.end) {
            if (!(event.end instanceof Date)) {
                isError(EventValidationErrorMessage.EndPropertyNotDate, event);
            }
            if (event.start > event.end) {
                isError(EventValidationErrorMessage.EndsBeforeStart, event);
            }
        }
    });
    return isValid;
}
//# sourceMappingURL=calendar-utils.js.map

/***/ }),

/***/ "./node_modules/calendar-utils/date-adapters/date-fns/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/calendar-utils/date-adapters/date-fns/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var addDays = __webpack_require__(/*! date-fns/add_days/index */ "./node_modules/date-fns/add_days/index.js");
var addHours = __webpack_require__(/*! date-fns/add_hours/index */ "./node_modules/date-fns/add_hours/index.js");
var addMinutes = __webpack_require__(/*! date-fns/add_minutes/index */ "./node_modules/date-fns/add_minutes/index.js");
var addSeconds = __webpack_require__(/*! date-fns/add_seconds/index */ "./node_modules/date-fns/add_seconds/index.js");
var differenceInDays = __webpack_require__(/*! date-fns/difference_in_days/index */ "./node_modules/date-fns/difference_in_days/index.js");
var differenceInMinutes = __webpack_require__(/*! date-fns/difference_in_minutes/index */ "./node_modules/date-fns/difference_in_minutes/index.js");
var differenceInSeconds = __webpack_require__(/*! date-fns/difference_in_seconds/index */ "./node_modules/date-fns/difference_in_seconds/index.js");
var endOfDay = __webpack_require__(/*! date-fns/end_of_day/index */ "./node_modules/date-fns/end_of_day/index.js");
var endOfMonth = __webpack_require__(/*! date-fns/end_of_month/index */ "./node_modules/date-fns/end_of_month/index.js");
var endOfWeek = __webpack_require__(/*! date-fns/end_of_week/index */ "./node_modules/date-fns/end_of_week/index.js");
var getDay = __webpack_require__(/*! date-fns/get_day/index */ "./node_modules/date-fns/get_day/index.js");
var getMonth = __webpack_require__(/*! date-fns/get_month/index */ "./node_modules/date-fns/get_month/index.js");
var isSameDay = __webpack_require__(/*! date-fns/is_same_day/index */ "./node_modules/date-fns/is_same_day/index.js");
var isSameMonth = __webpack_require__(/*! date-fns/is_same_month/index */ "./node_modules/date-fns/is_same_month/index.js");
var isSameSecond = __webpack_require__(/*! date-fns/is_same_second/index */ "./node_modules/date-fns/is_same_second/index.js");
var max = __webpack_require__(/*! date-fns/max/index */ "./node_modules/date-fns/max/index.js");
var setHours = __webpack_require__(/*! date-fns/set_hours/index */ "./node_modules/date-fns/set_hours/index.js");
var setMinutes = __webpack_require__(/*! date-fns/set_minutes/index */ "./node_modules/date-fns/set_minutes/index.js");
var startOfDay = __webpack_require__(/*! date-fns/start_of_day/index */ "./node_modules/date-fns/start_of_day/index.js");
var startOfMinute = __webpack_require__(/*! date-fns/start_of_minute/index */ "./node_modules/date-fns/start_of_minute/index.js");
var startOfMonth = __webpack_require__(/*! date-fns/start_of_month/index */ "./node_modules/date-fns/start_of_month/index.js");
var startOfWeek = __webpack_require__(/*! date-fns/start_of_week/index */ "./node_modules/date-fns/start_of_week/index.js");
var getHours = __webpack_require__(/*! date-fns/get_hours/index */ "./node_modules/date-fns/get_hours/index.js");
var getMinutes = __webpack_require__(/*! date-fns/get_minutes/index */ "./node_modules/date-fns/get_minutes/index.js");
function adapterFactory() {
    return {
        addDays: addDays,
        addHours: addHours,
        addMinutes: addMinutes,
        addSeconds: addSeconds,
        differenceInDays: differenceInDays,
        differenceInMinutes: differenceInMinutes,
        differenceInSeconds: differenceInSeconds,
        endOfDay: endOfDay,
        endOfMonth: endOfMonth,
        endOfWeek: endOfWeek,
        getDay: getDay,
        getMonth: getMonth,
        isSameDay: isSameDay,
        isSameMonth: isSameMonth,
        isSameSecond: isSameSecond,
        max: max,
        setHours: setHours,
        setMinutes: setMinutes,
        startOfDay: startOfDay,
        startOfMinute: startOfMinute,
        startOfMonth: startOfMonth,
        startOfWeek: startOfWeek,
        getHours: getHours,
        getMinutes: getMinutes
    };
}
exports.adapterFactory = adapterFactory;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/positioning/dist/entry.js":
/*!************************************************!*\
  !*** ./node_modules/positioning/dist/entry.js ***!
  \************************************************/
/*! exports provided: positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ "./node_modules/positioning/dist/positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionElements"]; });


//# sourceMappingURL=entry.js.map

/***/ }),

/***/ "./node_modules/positioning/dist/positioning.js":
/*!******************************************************!*\
  !*** ./node_modules/positioning/dist/positioning.js ***!
  \******************************************************/
/*! exports provided: Positioning, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
            elPosition = {
                top: elPosition.top,
                bottom: elPosition.bottom,
                left: elPosition.left,
                right: elPosition.right,
                height: elPosition.height,
                width: elPosition.width
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    /*
      Return false if the element to position is outside the viewport
    */
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var _a = placement.split('-'), _b = _a[0], placementPrimary = _b === void 0 ? 'top' : _b, _c = _a[1], placementSecondary = _c === void 0 ? 'center' : _c;
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var marginTop = parseFloat(targetElStyles.marginTop);
        var marginBottom = parseFloat(targetElStyles.marginBottom);
        var marginLeft = parseFloat(targetElStyles.marginLeft);
        var marginRight = parseFloat(targetElStyles.marginRight);
        var topPosition = 0;
        var leftPosition = 0;
        switch (placementPrimary) {
            case 'top':
                topPosition = (hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom));
                break;
            case 'bottom':
                topPosition = (hostElPosition.top + hostElPosition.height);
                break;
            case 'left':
                leftPosition = (hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight));
                break;
            case 'right':
                leftPosition = (hostElPosition.left + hostElPosition.width);
                break;
        }
        switch (placementSecondary) {
            case 'top':
                topPosition = hostElPosition.top;
                break;
            case 'bottom':
                topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                leftPosition = hostElPosition.left;
                break;
            case 'right':
                leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    leftPosition = (hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2);
                }
                else {
                    topPosition = (hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2);
                }
                break;
        }
        /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;
        targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)";
        // Check if the targetElement is inside the viewport
        var targetElBCR = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        var windowHeight = window.innerHeight || html.clientHeight;
        var windowWidth = window.innerWidth || html.clientWidth;
        return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth &&
            targetElBCR.bottom <= windowHeight;
    };
    return Positioning;
}());

var placementSeparator = /\s+/;
var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
    var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
    var allowedPlacements = [
        'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom',
        'right-top', 'right-bottom'
    ];
    var classList = targetElement.classList;
    var addClassesToTarget = function (targetPlacement) {
        var _a = targetPlacement.split('-'), primary = _a[0], secondary = _a[1];
        var classes = [];
        if (baseClass) {
            classes.push(baseClass + "-" + primary);
            if (secondary) {
                classes.push(baseClass + "-" + primary + "-" + secondary);
            }
            classes.forEach(function (classname) { classList.add(classname); });
        }
        return classes;
    };
    // Remove old placement classes to avoid issues
    if (baseClass) {
        allowedPlacements.forEach(function (placementToRemove) { classList.remove(baseClass + "-" + placementToRemove); });
    }
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        allowedPlacements.forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj) !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    // Required for transform:
    var style = targetElement.style;
    style.position = 'absolute';
    style.top = '0';
    style.left = '0';
    style['will-change'] = 'transform';
    var testPlacement;
    var isInViewport = false;
    for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
        testPlacement = placementVals_1[_i];
        var addedClasses = addClassesToTarget(testPlacement);
        if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
            isInViewport = true;
            break;
        }
        // Remove the baseClasses for further calculation
        if (baseClass) {
            addedClasses.forEach(function (classname) { classList.remove(classname); });
        }
    }
    if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
    }
    return testPlacement;
}
//# sourceMappingURL=positioning.js.map

/***/ })

}]);
//# sourceMappingURL=default~modules-hrm-leaves-leaves-module~modules-pm-projects-projects-module.js.map