"use strict";
(self["webpackChunkfieldays"] = self["webpackChunkfieldays"] || []).push([["assets_web_js_modules_slider_js"],{

/***/ "./assets/web/js/modules/slider.js":
/*!*****************************************!*\
  !*** ./assets/web/js/modules/slider.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
/* harmony import */ var bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/carousel */ "./node_modules/bootstrap/js/dist/carousel.js");
/* harmony import */ var bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0__);

class Slider {
  constructor() {
    this.carouselAll = document.querySelectorAll('.carousel');
    this.init();
  }
  init() {
    for (let i = 0; i < this.carouselAll.length; i++) {
      let items = this.carouselAll[i].querySelectorAll('.carousel-item');
      if (items.length > 1) {
        new (bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_0___default())(this.carouselAll[i], {});
      }
    }
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX3dlYl9qc19tb2R1bGVzX3NsaWRlcl9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFFbEMsTUFBTUMsTUFBTSxDQUFDO0VBQ3hCQyxXQUFXLEdBQ1g7SUFDSSxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFFekQsSUFBSSxDQUFDQyxJQUFJLEVBQUU7RUFDZjtFQUVBQSxJQUFJLEdBQ0o7SUFDSSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNKLFdBQVcsQ0FBQ0ssTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUM5QyxJQUFJRSxLQUFLLEdBQUcsSUFBSSxDQUFDTixXQUFXLENBQUNJLENBQUMsQ0FBQyxDQUFDRixnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNsRSxJQUFHSSxLQUFLLENBQUNELE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDakIsSUFBSVIsbUVBQVEsQ0FBQyxJQUFJLENBQUNHLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDekM7SUFDSjtFQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWVsZGF5cy8uL2Fzc2V0cy93ZWIvanMvbW9kdWxlcy9zbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcm91c2VsIGZyb20gJ2Jvb3RzdHJhcC9qcy9kaXN0L2Nhcm91c2VsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHRoaXMuY2Fyb3VzZWxBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwnKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KClcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJvdXNlbEFsbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5jYXJvdXNlbEFsbFtpXS5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtaXRlbScpXG4gICAgICAgICAgICBpZihpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgbmV3IENhcm91c2VsKHRoaXMuY2Fyb3VzZWxBbGxbaV0sIHt9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiU2xpZGVyIiwiY29uc3RydWN0b3IiLCJjYXJvdXNlbEFsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluaXQiLCJpIiwibGVuZ3RoIiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9