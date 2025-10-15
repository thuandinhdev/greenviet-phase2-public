(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-file-browser-file-browser-module~modules-pm-reports-reports-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js ***!
  \***************************************************************/
/*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLikeObject", function() { return FileLikeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function() { return FileSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploader", function() { return FileUploader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = /** @class */ (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        /** @type {?} */
        var isInput = isElement(fileOrInput);
        /** @type {?} */
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */
        var method = '_createFrom' + postfix;
        ((/** @type {?} */ (this)))[method](fakePathOrObject);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    FileLikeObject.prototype._createFromFakePath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    /**
     * @param {?} object
     * @return {?}
     */
    FileLikeObject.prototype._createFromObject = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileItem = /** @class */ (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    /**
     * @return {?}
     */
    FileItem.prototype.upload = /**
     * @return {?}
     */
    function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    /**
     * @return {?}
     */
    FileItem.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.uploader.cancelItem(this);
    };
    /**
     * @return {?}
     */
    FileItem.prototype.remove = /**
     * @return {?}
     */
    function () {
        this.uploader.removeFromQueue(this);
    };
    /**
     * @return {?}
     */
    FileItem.prototype.onBeforeUpload = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FileItem.prototype.onBuildForm = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        return { form: form };
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileItem.prototype.onProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        return { progress: progress };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onSuccess = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onError = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onCancel = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onComplete = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @return {?}
     */
    FileItem.prototype._onBeforeUpload = /**
     * @return {?}
     */
    function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FileItem.prototype._onBuildForm = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        this.onBuildForm(form);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileItem.prototype._onProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onSuccess = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onError = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onCancel = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onComplete = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    FileItem.prototype._prepareToUploading = /**
     * @return {?}
     */
    function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileType = /** @class */ (function () {
    function FileType() {
    }
    /**
     * @param {?} file
     * @return {?}
     */
    FileType.getMimeClass = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    /**
     * @param {?} inputFilename
     * @return {?}
     */
    FileType.fileTypeDetection = /**
     * @param {?} inputFilename
     * @return {?}
     */
    function (inputFilename) {
        /** @type {?} */
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        /** @type {?} */
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        /** @type {?} */
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    /*  MS office  */
    FileType.mime_doc = [
        'application/msword',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        'application/vnd.ms-word.document.macroEnabled.12',
        'application/vnd.ms-word.template.macroEnabled.12'
    ];
    FileType.mime_xsl = [
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        'application/vnd.ms-excel.sheet.macroEnabled.12',
        'application/vnd.ms-excel.template.macroEnabled.12',
        'application/vnd.ms-excel.addin.macroEnabled.12',
        'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
    ];
    FileType.mime_ppt = [
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.presentationml.template',
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        'application/vnd.ms-powerpoint.addin.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
    ];
    /* PSD */
    FileType.mime_psd = [
        'image/photoshop',
        'image/x-photoshop',
        'image/psd',
        'application/photoshop',
        'application/psd',
        'zz-application/zz-winassoc-psd'
    ];
    /* Compressed files */
    FileType.mime_compress = [
        'application/x-gtar',
        'application/x-gcompress',
        'application/compress',
        'application/x-tar',
        'application/x-rar-compressed',
        'application/octet-stream',
        'application/x-zip-compressed',
        'application/zip-compressed',
        'application/x-7z-compressed',
        'application/gzip',
        'application/x-bzip2'
    ];
    return FileType;
}());
if (false) {}

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @param {?} value
 * @return {?}
 */
function isFile(value) {
    return (File && value instanceof File);
}
/**
 * @record
 */
function Headers() { }
if (false) {}
/**
 * @record
 */
function FileUploaderOptions() { }
if (false) {}
var FileUploader = /** @class */ (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item._file; }),
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    FileUploader.prototype.addToQueue = /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    function (files, options, filters) {
        var e_1, _a;
        var _this = this;
        /** @type {?} */
        var list = [];
        try {
            for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                list.push(file);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var arrayOfFilters = this._getFilters(filters);
        /** @type {?} */
        var count = this.queue.length;
        /** @type {?} */
        var addedFileItems = [];
        list.map((/**
         * @param {?} some
         * @return {?}
         */
        function (some) {
            if (!options) {
                options = _this.options;
            }
            /** @type {?} */
            var temp = new FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                var fileItem = new FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                /** @type {?} */
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        }));
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.removeFromQueue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.clearQueue = /**
     * @return {?}
     */
    function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.uploadItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        /** @type {?} */
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        ((/** @type {?} */ (this)))[transport](item);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.cancelItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        /** @type {?} */
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.uploadAll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var items = this.getNotUploadedItems().filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.isUploading; }));
        if (!items.length) {
            return;
        }
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._prepareToUploading(); }));
        items[0].upload();
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.cancelAll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var items = this.getNotUploadedItems();
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.cancel(); }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.isFile = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isFile(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.isFileLikeObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof FileLikeObject;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.getIndexOfItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.getNotUploadedItems = /**
     * @return {?}
     */
    function () {
        return this.queue.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.isUploaded; }));
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.getReadyItems = /**
     * @return {?}
     */
    function () {
        return this.queue
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (item.isReady && !item.isUploading); }))
            .sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        function (item1, item2) { return item1.index - item2.index; }));
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.destroy = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} fileItems
     * @return {?}
     */
    FileUploader.prototype.onAfterAddingAll = /**
     * @param {?} fileItems
     * @return {?}
     */
    function (fileItems) {
        return { fileItems: fileItems };
    };
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    FileUploader.prototype.onBuildItemForm = /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    /**
     * @param {?} fileItem
     * @return {?}
     */
    FileUploader.prototype.onAfterAddingFile = /**
     * @param {?} fileItem
     * @return {?}
     */
    function (fileItem) {
        return { fileItem: fileItem };
    };
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype.onWhenAddingFileFailed = /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    /**
     * @param {?} fileItem
     * @return {?}
     */
    FileUploader.prototype.onBeforeUploadItem = /**
     * @param {?} fileItem
     * @return {?}
     */
    function (fileItem) {
        return { fileItem: fileItem };
    };
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype.onProgressItem = /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype.onProgressAll = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        return { progress: progress };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onSuccessItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onErrorItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onCancelItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onCompleteItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.onCompleteAll = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._mimeTypeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._fileSizeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._fileTypeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onErrorItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onCompleteItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        /** @type {?} */
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    FileUploader.prototype._headersGetter = /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    function (parsedHeaders) {
        return (/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        });
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._xhrTransport = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_2, _a, e_3, _b;
        var _this = this;
        /** @type {?} */
        var that = this;
        /** @type {?} */
        var xhr = item._xhr = new XMLHttpRequest();
        /** @type {?} */
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            /** @type {?} */
            var appendFile = (/**
             * @return {?}
             */
            function () { return sendable.append(item.alias, item._file, item.file.name); });
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                }));
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        });
        xhr.onload = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            /** @type {?} */
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */
            var method = '_on' + gist + 'Item';
            ((/** @type {?} */ (_this)))[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onerror = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onabort = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            try {
                for (var _c = __values(this.options.headers), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var header = _d.value;
                    xhr.setRequestHeader(header.name, header.value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (item.headers.length) {
            try {
                for (var _e = __values(item.headers), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var header = _f.value;
                    xhr.setRequestHeader(header.name, header.value);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = (/**
         * @return {?}
         */
        function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        });
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return xhr.send(JSON.stringify(result)); }));
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    FileUploader.prototype._getTotalProgress = /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        /** @type {?} */
        var notUploaded = this.getNotUploadedItems().length;
        /** @type {?} */
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        /** @type {?} */
        var ratio = 100 / this.queue.length;
        /** @type {?} */
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    FileUploader.prototype._getFilters = /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            /** @type {?} */
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) { return names_1.indexOf(filter.name) !== -1; }));
        }
        return this.options.filters;
    };
    /**
     * @protected
     * @return {?}
     */
    FileUploader.prototype._render = /**
     * @protected
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @protected
     * @return {?}
     */
    FileUploader.prototype._queueLimitFilter = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype._isValidFile = /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        }));
    };
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    FileUploader.prototype._isSuccessCode = /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._transformResponse = /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    function (response, headers) {
        return response;
    };
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._parseHeaders = /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    function (headers) {
        /** @type {?} */
        var parsed = {};
        /** @type {?} */
        var key;
        /** @type {?} */
        var val;
        /** @type {?} */
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }));
        return parsed;
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype._onWhenAddingFileFailed = /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._onAfterAddingFile = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.onAfterAddingFile(item);
    };
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    FileUploader.prototype._onAfterAddingAll = /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.onAfterAddingAll(items);
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._onBeforeUploadItem = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    FileUploader.prototype._onBuildItemForm = /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype._onProgressItem = /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    function (item, progress) {
        /** @type {?} */
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onSuccessItem = /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onCancelItem = /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileSelectDirective = /** @class */ (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.uploader.options;
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.getFilters = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.isEmptyAfterSelection = /**
     * @return {?}
     */
    function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.onChange = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var files = this.element.nativeElement.files;
        /** @type {?} */
        var options = this.getOptions();
        /** @type {?} */
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    FileSelectDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileSelect]' },] }
    ];
    /** @nocollapse */
    FileSelectDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    FileSelectDirective.propDecorators = {
        uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onFileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] }]
    };
    return FileSelectDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileDropDirective = /** @class */ (function () {
    function FileDropDirective(element) {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    FileDropDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.uploader.options;
    };
    /**
     * @return {?}
     */
    FileDropDirective.prototype.getFilters = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        var options = this.getOptions();
        /** @type {?} */
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype._getTransfer = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype._preventAndStop = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    FileDropDirective.prototype._haveFiles = /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    FileDropDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileDrop]' },] }
    ];
    /** @nocollapse */
    FileDropDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    FileDropDirective.propDecorators = {
        uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
        onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }]
    };
    return FileDropDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [FileDropDirective, FileSelectDirective],
                    exports: [FileDropDirective, FileSelectDirective]
                },] }
    ];
    return FileUploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-file-upload.js.map


/***/ }),

/***/ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js ***!
  \***********************************************************/
/*! exports provided: FileSaverService, FileSaverDirective, FileSaverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSaverService", function() { return FileSaverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSaverDirective", function() { return FileSaverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSaverModule", function() { return FileSaverModule; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var FileSaverService = /** @class */ (function () {
    function FileSaverService() {
    }
    FileSaverService.prototype.genType = function (fileName) {
        if (!fileName || fileName.lastIndexOf('.') === -1)
            return 'text/plain';
        var type = fileName.substr(fileName.lastIndexOf('.') + 1);
        switch (type) {
            case 'txt':
                return 'text/plain';
            case 'xml':
            case 'html':
                return "text/" + type;
            case 'json':
                return 'octet/stream';
            default:
                return "application/" + type;
        }
    };
    FileSaverService.prototype.save = function (blob, fileName, filtType) {
        if (!blob) {
            throw new Error('Muse spcify blod argument');
        }
        Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(new Blob([blob], { type: filtType || blob.type || this.genType(fileName) }), decodeURI(fileName || 'download'));
    };
    FileSaverService.prototype.saveText = function (txt, fileName) {
        var blob = new Blob([txt]);
        this.save(blob, fileName);
    };
    FileSaverService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    FileSaverService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function FileSaverService_Factory() { return new FileSaverService(); }, token: FileSaverService, providedIn: "root" });
    return FileSaverService;
}());

var FileSaverDirective = /** @class */ (function () {
    function FileSaverDirective(el, _FileSaverService, _httpClient) {
        this.el = el;
        this._FileSaverService = _FileSaverService;
        this._httpClient = _httpClient;
        this.method = 'GET';
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    FileSaverDirective.prototype.getName = function (res) {
        return decodeURI(this.fileName ||
            res.headers.get('filename') ||
            res.headers.get('x-filename'));
    };
    FileSaverDirective.prototype._click = function () {
        var _this = this;
        var _http = this.http;
        if (!_http) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), _data = this.query || {};
            // tslint:disable-next-line:forin
            for (var item in _data) {
                params.set(item, _data[item]);
            }
            _http = this._httpClient.request(this.method, this.url, {
                observe: 'response',
                responseType: 'blob',
                headers: this.header,
                params: params
            });
        }
        this.el.nativeElement.disabled = true;
        _http.subscribe(function (res) {
            if (res.status !== 200 || res.body.size <= 0) {
                _this.error.emit(res);
                return;
            }
            _this._FileSaverService.save(res.body, _this.getName(res));
            _this.success.emit(res);
        }, function (err) {
            _this.error.emit(err);
        }, function () {
            _this.el.nativeElement.disabled = false;
        });
    };
    FileSaverDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[fileSaver]',
                    exportAs: 'fileSaver'
                },] }
    ];
    /** @nocollapse */
    FileSaverDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: FileSaverService },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    FileSaverDirective.propDecorators = {
        method: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        http: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        query: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fileName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        _click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click',] }]
    };
    return FileSaverDirective;
}());

var FileSaverModule = /** @class */ (function () {
    function FileSaverModule() {
    }
    FileSaverModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [FileSaverDirective],
                    exports: [FileSaverDirective],
                },] }
    ];
    return FileSaverModule;
}());

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-filesaver.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-folder\" aria-hidden=\"true\"></i>&nbsp;{{'file_browser.title1' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsCreateFolderModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form [formGroup]=\"createFolderForm\" (ngSubmit)=\"onSubmit()\" class=\"bs4-forms\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"folder_name\">{{'file_browser.create.fields.folder_name' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"{{'file_browser.create.placeholders.placeholder1' | translate}}\" class=\"form-control\" formControlName=\"folder_name\" [ngClass]=\"{ 'is-invalid': isSubmitted && folderControl.folder_name.errors }\" id=\"folder_name\" />\n\t\t\t\t\t<div *ngIf=\"isSubmitted && folderControl.folder_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"folderControl.folder_name.errors.required\">{{'file_browser.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\"><span>{{'common.create' | translate}}</span></button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i>&nbsp;{{'file_browser.title4' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsEditFileModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form [formGroup]=\"editFileForm\" (ngSubmit)=\"onSubmit()\" class=\"bs4-forms\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"name\">{{'file_browser.create.fields.file_name' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"{{'file_browser.create.placeholders.placeholder3' | translate}}\" class=\"form-control\" formControlName=\"file_name\" [ngClass]=\"{ 'is-invalid': isSubmitted && fileControl.file_name.errors }\" id=\"file_name\" />\n\t\t\t\t\t<div *ngIf=\"isSubmitted && fileControl.file_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"fileControl.file_name.errors.required\">{{'file_browser.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\"><span>{{'common.update' | translate}}</span></button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-folder\" aria-hidden=\"true\"></i>&nbsp;{{'file_browser.title2' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsEditFolderModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form [formGroup]=\"editFolderForm\" (ngSubmit)=\"onSubmit()\" class=\"bs4-forms\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"name\">{{'file_browser.create.fields.folder_name' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t<input type=\"text\" placeholder=\"{{'file_browser.create.placeholders.placeholder1' | translate}}\" class=\"form-control\" formControlName=\"folder_name\" [ngClass]=\"{ 'is-invalid': isSubmitted && folderControl.folder_name.errors }\" id=\"folder_name\" />\n\t\t\t\t\t<div *ngIf=\"isSubmitted && folderControl.folder_name.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"folderControl.folder_name.errors.required\">{{'file_browser.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel\" data-dismiss=\"modal\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit\"><span>{{'common.update' | translate}}</span></button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i>&nbsp;{{'file_browser.title3' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsCreateFileModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<div class=\"modal-body\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\" class=\"well dropzone text-center\">\n\t\t\t\t<i class=\"fa fa-upload fa-4x\"></i>\n\t\t\t\t<br />\n\t\t\t\t<h4 class=\"dz-message\">{{'file_browser.create.error_messages.message2' | translate}}</h4>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-12 mt-2\">\n\t\t\t<label class=\"btn btn-raised btn-info round btn-file\">\n\t\t\t\t<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple class=\"d-none\" />\n\t\t\t\t<span><i class=\"fa fa-upload\"></i> {{'file_browser.title3' | translate}}</span>\n\t\t\t</label>\n\t\t</div>\n\t\t<div class=\"col-md-12\" *ngIf=\"uploader.queue.length != 0\">\n\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t<table class=\"table table-bordered table-hover b4-datatable\" id=\"upload_files_table\" width=\"100%\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th width=\"50%\">{{'file_browser.columns.name' | translate}}</th>\n\t\t\t\t\t\t\t<th>{{'file_browser.columns.size' | translate}}</th>\n\t\t\t\t\t\t\t<th>{{'file_browser.columns.progress' | translate}}</th>\n\t\t\t\t\t\t\t<th>{{'file_browser.columns.status' | translate}}</th>\n\t\t\t\t\t\t\t<th>{{'file_browser.columns.actions' | translate}}</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let item of uploader.queue; index as i\">\n\t\t\t\t\t\t\t<td><strong>{{ item?.file?.name }}</strong></td>\n\t\t\t\t\t\t\t<td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n\t\t\t\t\t\t\t<td *ngIf=\"uploader.options.isHTML5\">\n\t\t\t\t\t\t\t\t<progressbar max=\"100\" [value]=\"item.progress\" [animate]=\"true\" [striped]=\"true\"></progressbar>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"budges-status\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"item.isSuccess\" class=\"completed\">{{'common.status.success' | translate}}</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"item.isCancel\" class=\"cancel\">{{'common.status.cancel' | translate}}</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"item.isError\" class=\"closed\">{{'common.status.error' | translate}}</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t                            <div class=\"btn-group\" dropdown>\n\t                                <button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t                                <ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t                                    <li role=\"menuitem\">\n\t                                        <a (click)=\"item.remove();uploaderRemove(attachmentsArr[i])\" class=\"dropdown-item btn btn-danger btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t                                    </li>\n\t                                </ul>\n\t                            </div>\n\t                        </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"modal-footer\">\n\t<button type=\"button\" class=\"btn btn-cancel mb-0\" data-dismiss=\"modal\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/pages/file-browser/file-browser.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/pages/file-browser/file-browser.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mt-2\"></h4>\n\t\t\t\t\t<div class=\"card-buttons\">\n\t\t\t\t\t\t<button class=\"btn btn-create\" *ngxPermissionsOnly=\"['filemanager_create']\" (click)=\"uploadFileModal();\" tooltip=\"{{'common.upload' | translate}}\"><i class=\"fa fa-upload\"></i></button>\n\t\t\t\t\t\t<button class=\"btn btn-create\" *ngxPermissionsOnly=\"['filemanager_create']\" (click)=\"openFolderCreateModal();\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-3 mt-2\">\n\t\t\t\t\t\t\t\t<div class=\"folder-list p-2\" *ngIf=\"breadcrumbs?.length != 0\">\n\t\t\t\t\t\t\t\t\t<h4>Folders</h4>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let breadcrumb of breadcrumbs;\"><a (click)=\"getFileFolders(breadcrumb.parent_folder)\"><i class=\"fa fa-folder\"></i>&nbsp;{{breadcrumb.folder_name}}</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-9 mt-2\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<!-- Folders -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngFor=\"let folder of folders;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"file-browser\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"actions-dropdown text-right m-1 pr-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" dropdownToggle class=\"dropdown-toggle\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['filemanager_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a tooltip=\"{{'common.edit' | translate}}\" (click)=\"openFolderEditModal(folder)\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['filemanager_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a tooltip=\"{{'common.delete' | translate}}\" (click)=\"deleteFolder(folder.id)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"file-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"files\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"getFileFolders(folder.id)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon docx\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-folder-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"file-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>{{ (folder.folder_name.length>20)? (folder.folder_name | slice:0:20)+'..':(folder.folder_name) }}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{'file_browser.title7' | translate}}: {{ folder.updated_at | dateTimeFormatFilter: loginUser.settings.date_time_format }}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"corner\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- Files -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngFor=\"let file of files; index as i\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"file-browser\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"actions-dropdown text-right m-1 pr-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" dropdownToggle class=\"dropdown-toggle\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a tooltip=\"{{'common.download' | translate}}\" class=\"dropdown-item btn btn-download btn-raised\" target=\"_blank\" download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/filebrowser/{{file.file_hash}}\"><i class=\"fa fa-download\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['filemanager_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a tooltip=\"{{'common.edit' | translate}}\" (click)=\"opneFileEditModal(file)\" class=\"dropdown-item btn btn-edit btn-raised\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['filemanager_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a tooltip=\"{{'common.delete' | translate}}\" (click)=\"deleteFile(file.id)\" class=\"dropdown-item btn btn-delete btn-raised\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"file-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"files\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"file.icon\" class=\"icon docx\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i [ngClass]=\"file.icon\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"file.isImageFile\" class=\"image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"image\" class=\"img-fluid height-100\" src=\"{{ apiUrl }}/uploads/filebrowser/{{file.file_hash}}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"file-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a target=\"_blank\" tooltip=\"{{file.file_name}}\" download=\"{{file.file_name}}\" href=\"{{apiUrl}}/uploads/filebrowser/{{file.file_hash}}\"><h4>{{ (file.file_name.length>20)? (file.file_name | slice:0:20)+'..':(file.file_name) }}</h4></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{'file_browser.title7' | translate}}: {{ file.updated_at | dateTimeFormatFilter:loginUser.settings.date_time_format }}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"corner\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"isEmptyObject(folders) && isEmptyObject(files)\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/norecord-img.png\" width=\"50\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"mt-1\">{{'common.empty_message.file_browser' | translate}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/core/services/file-browser.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/file-browser.service.ts ***!
  \*******************************************************/
/*! exports provided: FileBrowserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserService", function() { return FileBrowserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
var FileBrowserService = /** @class */ (function () {
    function FileBrowserService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    FileBrowserService.prototype.getFolders = function (reqObj) {
        return this.http.get(this.apiUrl + "/api/file-browser", { params: reqObj });
    };
    FileBrowserService.prototype.createFolder = function (reqObj) {
        return this.http.post(this.apiUrl + "/api/file-browser", reqObj, options);
    };
    FileBrowserService.prototype.getById = function (current_folder_id) {
        return this.http.get(this.apiUrl + "/api/file-browser/" + current_folder_id);
    };
    FileBrowserService.prototype.updateFolder = function (folder) {
        return this.http.put(this.apiUrl + "/api/file-browser/" + folder.id, folder);
    };
    FileBrowserService.prototype.deleteFolder = function (id) {
        return this.http.delete(this.apiUrl + "/api/file-browser/" + id);
    };
    FileBrowserService.prototype.getFolderBreadcrumb = function (reqObj) {
        return this.http.get(this.apiUrl + "/api/file-browser/breadcrumb", { params: reqObj });
    };
    FileBrowserService.prototype.getFiles = function (reqObj) {
        return this.http.get(this.apiUrl + "/api/files", { params: reqObj });
    };
    FileBrowserService.prototype.updateFile = function (file) {
        return this.http.put(this.apiUrl + "/api/files/" + file.id, file);
    };
    FileBrowserService.prototype.deleteFile = function (id) {
        return this.http.delete(this.apiUrl + "/api/files/" + id);
    };
    FileBrowserService.prototype.removeAttachments = function (dataObj) {
        return this.http.post(this.apiUrl + "/api/files/attachment/remove", dataObj);
    };
    FileBrowserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FileBrowserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileBrowserService);
    return FileBrowserService;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlsZS1icm93c2VyL2NvbXBvbmVudHMvY3JlYXRlLWZvbGRlci1tb2RlbC9jcmVhdGUtZm9sZGVyLW1vZGVsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CreateFolderModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFolderModelComponent", function() { return CreateFolderModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/file-browser.service */ "./src/app/core/services/file-browser.service.ts");








var CreateFolderModelComponent = /** @class */ (function () {
    function CreateFolderModelComponent(translate, bsCreateFolderModalRef, formBuilder, fbService, toastr) {
        this.translate = translate;
        this.bsCreateFolderModalRef = bsCreateFolderModalRef;
        this.formBuilder = formBuilder;
        this.fbService = fbService;
        this.toastr = toastr;
        this.isSubmitted = false;
    }
    CreateFolderModelComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    CreateFolderModelComponent.prototype.loadForm = function () {
        this.createFolderForm = this.formBuilder.group({
            parent_folder: [this.current_folder, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            folder_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(CreateFolderModelComponent.prototype, "folderControl", {
        get: function () { return this.createFolderForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateFolderModelComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.createFolderForm.invalid) {
            return;
        }
        this.fbService.createFolder(this.createFolderForm.value).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('file_browser.messages.create_folder'), _this.translate.instant('file_browser.title'));
            _this.onCancel();
        });
    };
    CreateFolderModelComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateFolderModalRef.hide();
    };
    CreateFolderModelComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    CreateFolderModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-folder-model',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-folder-model.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-folder-model.component.scss */ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], CreateFolderModelComponent);
    return CreateFolderModelComponent;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlsZS1icm93c2VyL2NvbXBvbmVudHMvZWRpdC1maWxlLW1vZGFsL2VkaXQtZmlsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EditFileModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFileModalComponent", function() { return EditFileModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/file-browser.service */ "./src/app/core/services/file-browser.service.ts");








var EditFileModalComponent = /** @class */ (function () {
    function EditFileModalComponent(translate, bsEditFileModalRef, formBuilder, fbService, toastr) {
        this.translate = translate;
        this.bsEditFileModalRef = bsEditFileModalRef;
        this.formBuilder = formBuilder;
        this.fbService = fbService;
        this.toastr = toastr;
        this.isSubmitted = false;
        this.renameFileFailederrors = [];
    }
    EditFileModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    EditFileModalComponent.prototype.loadForm = function () {
        this.editFileForm = this.formBuilder.group({
            id: [this.file.id],
            file_name: [this.file.file_name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(EditFileModalComponent.prototype, "fileControl", {
        get: function () { return this.editFileForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditFileModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editFileForm.invalid) {
            return;
        }
        this.fbService.updateFile(this.editFileForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('file_browser.messages.update_file'), _this.translate.instant('file_browser.title'));
            _this.onCancel();
        });
    };
    EditFileModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditFileModalRef.hide();
    };
    EditFileModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    EditFileModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-file-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-file-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-file-modal.component.scss */ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], EditFileModalComponent);
    return EditFileModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlsZS1icm93c2VyL2NvbXBvbmVudHMvZWRpdC1mb2xkZXItbW9kYWwvZWRpdC1mb2xkZXItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditFolderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFolderModalComponent", function() { return EditFolderModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/file-browser.service */ "./src/app/core/services/file-browser.service.ts");








var EditFolderModalComponent = /** @class */ (function () {
    function EditFolderModalComponent(translate, bsEditFolderModalRef, formBuilder, fbService, toastr) {
        this.translate = translate;
        this.bsEditFolderModalRef = bsEditFolderModalRef;
        this.formBuilder = formBuilder;
        this.fbService = fbService;
        this.toastr = toastr;
        this.isSubmitted = false;
    }
    EditFolderModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForm();
    };
    EditFolderModalComponent.prototype.loadForm = function () {
        this.editFolderForm = this.formBuilder.group({
            id: [this.folder.id],
            folder_name: [this.folder.folder_name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(EditFolderModalComponent.prototype, "folderControl", {
        get: function () { return this.editFolderForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditFolderModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.editFolderForm.invalid) {
            return;
        }
        this.fbService.updateFolder(this.editFolderForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('file_browser.messages.update_folder'), _this.translate.instant('file_browser.title'));
            _this.onCancel();
        });
    };
    EditFolderModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsEditFolderModalRef.hide();
    };
    EditFolderModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    EditFolderModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-folder-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-folder-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-folder-modal.component.scss */ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_7__["FileBrowserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], EditFolderModalComponent);
    return EditFolderModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlsZS1icm93c2VyL2NvbXBvbmVudHMvdXBsb2FkLWZpbGVzLW1vZGVsL3VwbG9hZC1maWxlcy1tb2RlbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: UploadFilesModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFilesModelComponent", function() { return UploadFilesModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/file-browser.service */ "./src/app/core/services/file-browser.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");










var UploadFilesModelComponent = /** @class */ (function () {
    function UploadFilesModelComponent(translate, bsCreateFileModalRef, toastr, fbService, authenticationService) {
        this.translate = translate;
        this.bsCreateFileModalRef = bsCreateFileModalRef;
        this.toastr = toastr;
        this.fbService = fbService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.attachmentsArr = [];
        this.loginToken = this.authenticationService.currentTokenValue;
    }
    UploadFilesModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({
            url: this.apiUrl + '/api/files/upload',
            authToken: this.loginToken.token_type + ' ' + this.loginToken.token,
            additionalParameter: { folder: this.current_folder },
            method: 'post',
            removeAfterUpload: false,
            autoUpload: true,
            isHTML5: true,
        });
        this.hasBaseDropZoneOver = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var obj = JSON.parse(response);
            if (obj.success) {
                _this.attachmentsArr.push(obj.id);
                _this.toastr.success(_this.translate.instant('file_browser.messages.upload_file'), _this.translate.instant('file_browser.title'));
            }
        };
    };
    UploadFilesModelComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadFilesModelComponent.prototype.uploaderRemove = function (id) {
        var _this = this;
        var index = this.attachmentsArr.indexOf(id);
        if (index > -1) {
            var dataObj = {
                id: id,
            };
            this.fbService.removeAttachments(dataObj).subscribe(function (data) {
                _this.toastr.success(_this.translate.instant('file_browser.messages.delete_file'), _this.translate.instant('file_browser.title'));
            });
            this.attachmentsArr.splice(index, 1);
        }
    };
    UploadFilesModelComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateFileModalRef.hide();
    };
    UploadFilesModelComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__["FileBrowserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
    ]; };
    UploadFilesModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-files-model',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-files-model.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-files-model.component.scss */ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__["FileBrowserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], UploadFilesModelComponent);
    return UploadFilesModelComponent;
}());



/***/ }),

/***/ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/file-browser/pages/file-browser/file-browser.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlsZS1icm93c2VyL3BhZ2VzL2ZpbGUtYnJvd3Nlci9maWxlLWJyb3dzZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/file-browser/pages/file-browser/file-browser.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FileBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserComponent", function() { return FileBrowserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/file-browser.service */ "./src/app/core/services/file-browser.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/upload-files-model/upload-files-model.component */ "./src/app/modules/file-browser/components/upload-files-model/upload-files-model.component.ts");
/* harmony import */ var _components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/edit-file-modal/edit-file-modal.component */ "./src/app/modules/file-browser/components/edit-file-modal/edit-file-modal.component.ts");
/* harmony import */ var _components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/create-folder-model/create-folder-model.component */ "./src/app/modules/file-browser/components/create-folder-model/create-folder-model.component.ts");
/* harmony import */ var _components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/edit-folder-modal/edit-folder-modal.component */ "./src/app/modules/file-browser/components/edit-folder-modal/edit-folder-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");





;










var FileBrowserComponent = /** @class */ (function () {
    function FileBrowserComponent(translate, modalService, toastr, fbService, _http, _FileSaverService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.modalService = modalService;
        this.toastr = toastr;
        this.fbService = fbService;
        this._http = _http;
        this._FileSaverService = _FileSaverService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl;
        this.current_folder = 0;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    FileBrowserComponent.prototype.ngOnInit = function () {
        this.getFolderBreadcrumb();
        this.getFolders();
        this.getFiles();
    };
    FileBrowserComponent.prototype.getFileFolders = function (id) {
        this.current_folder = id;
        this.getFolderBreadcrumb();
        this.getFolders();
        this.getFiles();
    };
    FileBrowserComponent.prototype.getFolderBreadcrumb = function () {
        var _this = this;
        var reqObj = { folder: this.current_folder };
        this.fbService.getFolderBreadcrumb(reqObj).subscribe(function (resp) {
            _this.breadcrumbs = resp;
        });
    };
    FileBrowserComponent.prototype.getFolders = function () {
        var _this = this;
        var reqObj = { folder: this.current_folder };
        this.fbService.getFolders(reqObj).subscribe(function (resp) {
            _this.folders = resp;
        });
    };
    FileBrowserComponent.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    FileBrowserComponent.prototype.getFiles = function () {
        var _this = this;
        var reqObj = { folder: this.current_folder };
        this.fbService.getFiles(reqObj).subscribe(function (resp) {
            _this.files = resp;
            if (_this.files) {
                // --
                // Render files based on file type
                for (var iRow in _this.files) {
                    switch (_this.files[iRow].file_extension) {
                        case 'txt':
                            _this.files[iRow].icon = 'fa fa-file-text';
                            break;
                        case 'mp3':
                        case 'wav':
                        case 'raw':
                        case 'tta':
                            _this.files[iRow].icon = 'fa fa-music';
                            break;
                        case 'webm':
                        case 'flv':
                        case 'ogg':
                        case 'mov':
                        case 'mp4':
                        case 'm4p':
                        case 'mpeg':
                        case 'f4v':
                        case '3gp':
                            _this.files[iRow].icon = 'fa fa-film';
                            break;
                        case 'pdf':
                            _this.files[iRow].icon = 'fa fa-file-pdf-o';
                            break;
                        case 'jpeg':
                        case 'jpg':
                        case 'png':
                        case 'gif':
                        case 'bmp':
                        case 'svg':
                            _this.files[iRow].isImageFile = true;
                            break;
                        default:
                            _this.files[iRow].isImageFile = false;
                            _this.files[iRow].icon = 'fa fa-file';
                            break;
                    }
                }
            }
        });
    };
    FileBrowserComponent.prototype.getParentFolderId = function () {
        var _this = this;
        this.fbService.getById(this.current_folder).subscribe(function (resp) {
            _this.current_folder = resp;
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.uploadFileModal = function () {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                current_folder: this.current_folder
            }
        };
        this.modalRef = this.modalService.show(_components_upload_files_model_upload_files_model_component__WEBPACK_IMPORTED_MODULE_10__["UploadFilesModelComponent"], modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.opneFileEditModal = function (file) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                file: file
            }
        };
        this.modalRef = this.modalService.show(_components_edit_file_modal_edit_file_modal_component__WEBPACK_IMPORTED_MODULE_11__["EditFileModalComponent"], modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.openFolderCreateModal = function () {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                current_folder: this.current_folder
            }
        };
        this.modalRef = this.modalService.show(_components_create_folder_model_create_folder_model_component__WEBPACK_IMPORTED_MODULE_12__["CreateFolderModelComponent"], modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.openFolderEditModal = function (folder) {
        var _this = this;
        var modalConfig = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                folder: folder
            }
        };
        this.modalRef = this.modalService.show(_components_edit_folder_modal_edit_folder_modal_component__WEBPACK_IMPORTED_MODULE_13__["EditFolderModalComponent"], modalConfig);
        this.modalRef.content.onClose.subscribe(function (result) {
            _this.getFileFolders(_this.current_folder);
        });
    };
    FileBrowserComponent.prototype.deleteFolder = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('file_browser.title6'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.fbService.deleteFolder(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('file_browser.messages.delete_folder'), _this.translate.instant('file_browser.title'));
                    _this.getFileFolders(_this.current_folder);
                });
            }
        });
    };
    FileBrowserComponent.prototype.deleteFile = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text') + ' ' + this.translate.instant('file_browser.title5'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.fbService.deleteFile(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('file_browser.messages.delete_file'), _this.translate.instant('file_browser.title'));
                    _this.getFileFolders(_this.current_folder);
                });
            }
        });
    };
    FileBrowserComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__["FileBrowserService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__["FileSaverService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }
    ]; };
    FileBrowserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-browser',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-browser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-browser/pages/file-browser/file-browser.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-browser.component.scss */ "./src/app/modules/file-browser/pages/file-browser/file-browser.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_file_browser_service__WEBPACK_IMPORTED_MODULE_8__["FileBrowserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__["FileSaverService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]])
    ], FileBrowserComponent);
    return FileBrowserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~modules-file-browser-file-browser-module~modules-pm-reports-reports-module.js.map