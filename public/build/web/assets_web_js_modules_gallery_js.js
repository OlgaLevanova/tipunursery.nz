"use strict";
(self["webpackChunkfieldays"] = self["webpackChunkfieldays"] || []).push([["assets_web_js_modules_gallery_js"],{

/***/ "./assets/web/js/modules/gallery.js":
/*!******************************************!*\
  !*** ./assets/web/js/modules/gallery.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Gallery; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/lightbox */ "./node_modules/photoswipe/dist/photoswipe-lightbox.esm.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/bundle */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var photoswipe_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! photoswipe/style.css */ "./node_modules/photoswipe/dist/photoswipe.css");








class Gallery {
  constructor() {
    this.swiper = null;
    this.lightbox = null;
    this.photo_swipe_options = {
      gallery: '#my-gallery',
      pswpModule: photoswipe__WEBPACK_IMPORTED_MODULE_2__["default"],
      // set background opacity
      bgOpacity: 1,
      showHideOpacity: true,
      children: 'a',
      loop: true,
      showHideAnimationType: 'zoom',
      /* options: fade, zoom, none */

      /* Click on image moves to the next slide */
      imageClickAction: 'next',
      tapAction: 'next',
      /* ## Hiding a specific UI element ## */
      zoom: false,
      close: true,
      counter: true,
      arrowKeys: true,
      wheelToZoom: true /* deafult: undefined */
    };

    this.initSwiper();
    this.initLightbox();
  }
  initSwiper() {
    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".mySwiper", {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      grabCursor: true,
      // If we need pagination
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + '"><span class="visually-hidden">' + (index + 1) + "</span></div>";
        }
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      // keyboard control
      keyboard: {
        enabled: true
      }
    });
  }
  initLightbox() {
    this.lightbox = new photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"](this.photo_swipe_options);
    this.lightbox.init();
    this.lightbox.on('change', () => {
      const {
        pswp
      } = this.lightbox;
      this.swiper.slideTo(pswp.currIndex, 0, false);
    });
    this.lightbox.on('afterInit', () => {
      const {
        pswp
      } = this.lightbox;
    });
    this.lightbox.on('closingAnimationStart', () => {
      const {
        pswp
      } = this.lightbox;
      this.swiper.slideTo(pswp.currIndex, 0, false);
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNzQyxPQUFPLENBQUNELElBQUksQ0FBQ0UsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0VBQ0g7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZWxkYXlzLy4vYXNzZXRzL3dlYi9qcy9tb2R1bGVzL2dhbGxlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN3aXBlciwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCBQaG90b1N3aXBlTGlnaHRib3ggZnJvbSAncGhvdG9zd2lwZS9saWdodGJveCc7XG5pbXBvcnQgUGhvdG9Td2lwZSBmcm9tICdwaG90b3N3aXBlJztcblxuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9uYXZpZ2F0aW9uJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9idW5kbGUnO1xuaW1wb3J0ICdwaG90b3N3aXBlL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR0aGlzLnN3aXBlciA9IG51bGw7XG5cdFx0dGhpcy5saWdodGJveCA9IG51bGw7XG5cblx0XHR0aGlzLnBob3RvX3N3aXBlX29wdGlvbnMgPSB7XG5cdFx0XHRnYWxsZXJ5OiAnI215LWdhbGxlcnknLFxuXHRcdFx0cHN3cE1vZHVsZTogUGhvdG9Td2lwZSxcblx0XHRcdC8vIHNldCBiYWNrZ3JvdW5kIG9wYWNpdHlcblx0XHRcdGJnT3BhY2l0eTogMSxcblx0XHRcdHNob3dIaWRlT3BhY2l0eTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiAnYScsXG5cdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0c2hvd0hpZGVBbmltYXRpb25UeXBlOiAnem9vbScsIC8qIG9wdGlvbnM6IGZhZGUsIHpvb20sIG5vbmUgKi9cblxuXHRcdFx0LyogQ2xpY2sgb24gaW1hZ2UgbW92ZXMgdG8gdGhlIG5leHQgc2xpZGUgKi9cblx0XHRcdGltYWdlQ2xpY2tBY3Rpb246ICduZXh0Jyxcblx0XHRcdHRhcEFjdGlvbjogJ25leHQnLFxuXG5cdFx0XHQvKiAjIyBIaWRpbmcgYSBzcGVjaWZpYyBVSSBlbGVtZW50ICMjICovXG5cdFx0XHR6b29tOiBmYWxzZSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0Y291bnRlcjogdHJ1ZSxcblx0XHRcdGFycm93S2V5czogdHJ1ZSxcblx0XHRcdHdoZWVsVG9ab29tOiB0cnVlLCAvKiBkZWFmdWx0OiB1bmRlZmluZWQgKi9cblx0XHR9O1xuXG5cdFx0dGhpcy5pbml0U3dpcGVyKCk7XG5cdFx0dGhpcy5pbml0TGlnaHRib3goKTtcblx0fVxuXG5cdGluaXRTd2lwZXIoKVxuXHR7XG5cdFx0dGhpcy5zd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyXCIsIHtcblx0XHRcdG1vZHVsZXM6IFsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiBdLFxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcblx0XHRcdHNwYWNlQmV0d2VlbjogMTAsXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogdHJ1ZSxcblx0XHRcdGdyYWJDdXJzb3I6IHRydWUsXG5cdFx0XHQvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cblx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRwYWdpbmF0aW9uOiB7XG5cdFx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxuXHRcdFx0XHRyZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uKGluZGV4LCBjbGFzc05hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gJzxkaXYgY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPjxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+JyArIChpbmRleCArIDEpICsgXCI8L3NwYW4+PC9kaXY+XCI7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvLyBOYXZpZ2F0aW9uIGFycm93c1xuXHRcdFx0bmF2aWdhdGlvbjoge1xuXHRcdFx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0Jyxcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG5cdFx0XHR9LFxuXHRcdFx0Ly8ga2V5Ym9hcmQgY29udHJvbFxuXHRcdFx0a2V5Ym9hcmQ6IHtcblx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdH1cblx0XHR9KTtcblxuXG5cblx0fVxuXG5cdGluaXRMaWdodGJveCgpIHtcblx0XHR0aGlzLmxpZ2h0Ym94ID0gbmV3IFBob3RvU3dpcGVMaWdodGJveCh0aGlzLnBob3RvX3N3aXBlX29wdGlvbnMpO1xuXG5cdFx0dGhpcy5saWdodGJveC5pbml0KCk7XG5cblx0XHR0aGlzLmxpZ2h0Ym94Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCB7IHBzd3AgfSA9IHRoaXMubGlnaHRib3g7XG5cdFx0XHR0aGlzLnN3aXBlci5zbGlkZVRvKHBzd3AuY3VyckluZGV4LCAwLCBmYWxzZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmxpZ2h0Ym94Lm9uKCdhZnRlckluaXQnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCB7IHBzd3AgfSA9IHRoaXMubGlnaHRib3g7XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMubGlnaHRib3gub24oJ2Nsb3NpbmdBbmltYXRpb25TdGFydCcsICgpID0+IHtcblx0XHRcdGNvbnN0IHsgcHN3cCB9ID0gdGhpcy5saWdodGJveDtcblx0XHRcdHRoaXMuc3dpcGVyLnNsaWRlVG8ocHN3cC5jdXJySW5kZXgsIDAsIGZhbHNlKTtcblx0XHR9KTtcblx0fVxufVxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJTd2lwZXIiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIlBob3RvU3dpcGVMaWdodGJveCIsIlBob3RvU3dpcGUiLCJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJzd2lwZXIiLCJsaWdodGJveCIsInBob3RvX3N3aXBlX29wdGlvbnMiLCJnYWxsZXJ5IiwicHN3cE1vZHVsZSIsImJnT3BhY2l0eSIsInNob3dIaWRlT3BhY2l0eSIsImNoaWxkcmVuIiwibG9vcCIsInNob3dIaWRlQW5pbWF0aW9uVHlwZSIsImltYWdlQ2xpY2tBY3Rpb24iLCJ0YXBBY3Rpb24iLCJ6b29tIiwiY2xvc2UiLCJjb3VudGVyIiwiYXJyb3dLZXlzIiwid2hlZWxUb1pvb20iLCJpbml0U3dpcGVyIiwiaW5pdExpZ2h0Ym94IiwibW9kdWxlcyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJjZW50ZXJlZFNsaWRlcyIsImdyYWJDdXJzb3IiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJyZW5kZXJCdWxsZXQiLCJpbmRleCIsImNsYXNzTmFtZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJrZXlib2FyZCIsImVuYWJsZWQiLCJpbml0Iiwib24iLCJwc3dwIiwic2xpZGVUbyIsImN1cnJJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=