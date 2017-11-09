webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: "<app-slider></app-slider><app-slider></app-slider>",
        styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slider_slider_component__ = __webpack_require__("../../../../../src/app/slider/slider.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__slider_slider_component__["a" /* SliderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sliderContainer\">\n  <div class=\"imageSlider\">\n    <div class=\"leftButton\" (click)=\"left()\"></div>\n    <div class=\"rightButton\" (click)=\"right()\"></div>\n  </div>\n</div>\n<div class=\"timer\">{{countDown}}</div>\n"

/***/ }),

/***/ "../../../../../src/app/slider/slider.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes left {\n  to {\n    left: -100%; } }\n\n@keyframes left {\n  to {\n    left: -100%; } }\n\n@-webkit-keyframes right {\n  to {\n    left: 0; } }\n\n@keyframes right {\n  to {\n    left: 0; } }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n.timer {\n  width: 50%;\n  font-size: 3vw;\n  color: red;\n  margin: auto;\n  text-align: center; }\n\n.sliderContainer {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 75vh; }\n  .sliderContainer .imageSlider {\n    position: relative;\n    width: 100vh;\n    height: 75vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    background-size: 100% 100%; }\n    .sliderContainer .imageSlider [data-slide] {\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n    .sliderContainer .imageSlider [data-slide='left'] {\n      -webkit-animation-name: left;\n              animation-name: left; }\n    .sliderContainer .imageSlider [data-slide=''] {\n      -webkit-animation-name: none;\n              animation-name: none; }\n    .sliderContainer .imageSlider [data-slide='right'] {\n      left: -100% !important;\n      -webkit-animation-name: right !important;\n              animation-name: right !important; }\n    .sliderContainer .imageSlider .slide, .sliderContainer .imageSlider .leftButton, .sliderContainer .imageSlider .rightButton {\n      position: absolute;\n      top: 0;\n      height: 100%; }\n    .sliderContainer .imageSlider .slide {\n      width: 100%;\n      left: 0;\n      background-size: cover;\n      background-position: center; }\n    .sliderContainer .imageSlider .leftButton, .sliderContainer .imageSlider .rightButton {\n      width: 10%;\n      z-index: 11;\n      background-size: 100% 25%;\n      background-repeat: no-repeat;\n      background-position-y: center; }\n    .sliderContainer .imageSlider .leftButton:hover, .sliderContainer .imageSlider .rightButton:hover {\n      background-color: rgba(128, 128, 128, 0.5); }\n    .sliderContainer .imageSlider .leftButton {\n      left: 0;\n      background-image: url(\"http://s1.iconbird.com/ico/0912/ToolbarIcons/w256h2561346685452ArrowRight.png\"); }\n    .sliderContainer .imageSlider .rightButton {\n      right: 0;\n      background-image: url(\"http://studia-nsi.ru/img/strelkaRight.png\"); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_IntervalObservable__ = __webpack_require__("../../../../rxjs/observable/IntervalObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeWhile__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SliderComponent = (function () {
    function SliderComponent(element) {
        this.element = element;
        this.loopInfo = {
            countImgs: 0,
            domImgArr: [],
            currentCount: 0,
            obsSubscriber: 0
        };
        this.countDown = 10;
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loopInfo.countImgs = this.createImgElems(this.getImageArr(), this.element.nativeElement.getElementsByClassName('imageSlider')[0]);
        this.loopInfo.domImgArr = this.element.nativeElement.querySelectorAll('.imageSlider .slide');
        this.loopInfo.currentCount = this.loopInfo.countImgs - 1;
        this.loopInfo.obsSubscriber = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_IntervalObservable__["IntervalObservable"].create(2500)
            .subscribe(function () { return _this.loopRoutine(); });
        __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_IntervalObservable__["IntervalObservable"].create(1000)
            .takeWhile(function () { return _this.countDown > 0; })
            .subscribe(function () { return _this.countDown--; }, function (err) { return console.log(err); }, function () { return window.location.href = 'http://google.com'; });
    };
    SliderComponent.prototype.left = function () {
        var _this = this;
        this.loopInfo.obsSubscriber._complete();
        this.loopInfo.obsSubscriber = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_IntervalObservable__["IntervalObservable"].create(2500)
            .subscribe(function () { return _this.loopRoutine(); });
        this.loopRoutine();
    };
    SliderComponent.prototype.right = function () {
        var _this = this;
        this.loopInfo.obsSubscriber._complete();
        this.loopInfo.obsSubscriber = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_IntervalObservable__["IntervalObservable"].create(2500)
            .subscribe(function () { return _this.loopRoutine(); });
        if (this.loopInfo.currentCount + 1 > this.loopInfo.countImgs - 1) {
            for (var i = 0; i < this.loopInfo.countImgs; i++) {
                this.loopInfo.domImgArr[i].setAttribute('data-slide', 'left');
            }
            this.loopInfo.currentCount = -1;
        }
        this.loopInfo.domImgArr[this.loopInfo.currentCount + 1].setAttribute('data-slide', 'right');
        this.loopInfo.currentCount++;
    };
    SliderComponent.prototype.getImageArr = function () {
        return [
            'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
            'http://legacy.semantic-ui.com/images/demo/photo.jpg',
            'http://3milliondogs.com/blog-assets-two/2015/03/goldenlab.jpg',
            'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/crop1.JPG'
        ];
    };
    SliderComponent.prototype.createImgElems = function (imgArr, parentElem) {
        imgArr.forEach(function (value) {
            var tempDiv = document.createElement('div');
            tempDiv.style.backgroundImage = 'url("' + value + '")';
            tempDiv.setAttribute('data-slide', '');
            tempDiv.className = 'slide';
            parentElem.appendChild(tempDiv);
        });
        return imgArr.length;
    };
    SliderComponent.prototype.loopRoutine = function () {
        this.loopInfo.domImgArr[this.loopInfo.countImgs - 1].style.zIndex = 'auto';
        if (this.loopInfo.currentCount < 0) {
            for (var i = 0; i < this.loopInfo.countImgs; i++) {
                this.loopInfo.domImgArr[i].setAttribute('data-slide', '');
            }
            this.loopInfo.currentCount = this.loopInfo.countImgs - 1;
        }
        this.loopInfo.domImgArr[this.loopInfo.currentCount].setAttribute('data-slide', 'left');
        this.loopInfo.currentCount--;
        if (this.loopInfo.currentCount < 0) {
            this.loopInfo.domImgArr[this.loopInfo.countImgs - 1].style.zIndex = -1;
            this.loopInfo.domImgArr[this.loopInfo.countImgs - 1].setAttribute('data-slide', '');
        }
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-slider',
        template: __webpack_require__("../../../../../src/app/slider/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slider/slider.component.sass")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], SliderComponent);

var _a;
//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map