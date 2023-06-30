(self["webpackChunkfieldays"] = self["webpackChunkfieldays"] || []).push([["app"],{

/***/ "./assets/web/js/app.js":
/*!******************************!*\
  !*** ./assets/web/js/app.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// Module
if (document.querySelector('.carousel')) {
  Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_bootstrap_js_dist_carousel_js"), __webpack_require__.e("assets_web_js_modules_slider_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/slider */ "./assets/web/js/modules/slider.js")).then(Slider => {
    new Slider.default();
  });
}
Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_photoswipe_dist_photoswipe_css-node_modules_swiper_modules_navigation_na-74ac0e"), __webpack_require__.e("assets_web_js_modules_gallery_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/gallery */ "./assets/web/js/modules/gallery.js")).then(Gallery => {
  new Gallery.default();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/web/js/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFJQSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTtFQUN4QyxvUkFBMEIsQ0FBQ0MsSUFBSSxDQUFFQyxNQUFNLElBQUs7SUFDM0MsSUFBSUEsTUFBTSxDQUFDQyxPQUFPLEVBQUU7RUFDckIsQ0FBQyxDQUFDO0FBQ0g7QUFFQSx5VUFBMkIsQ0FBQ0YsSUFBSSxDQUFFRyxPQUFPLElBQUs7RUFDN0MsSUFBSUEsT0FBTyxDQUFDRCxPQUFPLEVBQUU7QUFDdEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmllbGRheXMvLi9hc3NldHMvd2ViL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKSkge1xuXHRpbXBvcnQoJy4vbW9kdWxlcy9zbGlkZXInKS50aGVuKChTbGlkZXIpID0+IHtcblx0XHRuZXcgU2xpZGVyLmRlZmF1bHQoKTtcblx0fSk7XG59XG5cbmltcG9ydCgnLi9tb2R1bGVzL2dhbGxlcnknKS50aGVuKChHYWxsZXJ5KSA9PiB7XG5cdG5ldyBHYWxsZXJ5LmRlZmF1bHQoKTtcbn0pOyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiU2xpZGVyIiwiZGVmYXVsdCIsIkdhbGxlcnkiXSwic291cmNlUm9vdCI6IiJ9