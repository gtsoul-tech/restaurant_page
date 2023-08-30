/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialLoad)
/* harmony export */ });
function initialLoad() {
    const element = document.createElement('div');
    element.classList.add('home');
    const title = document.createElement('div');
    title.textContent= "SavorRamen Restaurant";
    title.classList.add('subtitle');
    title.classList.add('homeDiv');
    element.appendChild(title);
    const description = document.createElement('div');
    description.textContent = "Nestled on a corner street, this ramen haven exudes a cozy yet contemporary vibe, drawing ramen enthusiasts into its culinary embrace. The air is alive with the fragrant harmony of slow-simmered broths and the clinks of chopsticks. Inside, minimalist decor with traditional accents sets the stage for a delightful experience. From the first steamy slurp, it's evident that every bowl is a masterpiece – a synthesis of toothsome noodles, melt-in-your-mouth chashu, impeccably seasoned broth, and an array of toppings that transform each bite into a journey of taste and texture. Beyond ramen, the menu surprises with small plates that pay homage to Japanese flavors, making it a haven for those seeking both comfort and culinary exploration.";
    element.appendChild(description);
    description.classList.add('homeDiv');
    const hours = document.createElement('div');
    hours.textContent= "Everyday: 8am - 10pm";
    hours.classList.add('homeDiv');
    element.appendChild(hours);
    const location = document.createElement('div');
    location.textContent = "Location : 42 Larkspur Lane, Dublin 10, County Cork, Ireland"
    location.classList.add('homeDiv');
    element.appendChild(location);
    return element;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbExvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5pdGlhbExvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsTG9hZCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudD0gXCJTYXZvclJhbWVuIFJlc3RhdXJhbnRcIjtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hvbWVEaXYnKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJOZXN0bGVkIG9uIGEgY29ybmVyIHN0cmVldCwgdGhpcyByYW1lbiBoYXZlbiBleHVkZXMgYSBjb3p5IHlldCBjb250ZW1wb3JhcnkgdmliZSwgZHJhd2luZyByYW1lbiBlbnRodXNpYXN0cyBpbnRvIGl0cyBjdWxpbmFyeSBlbWJyYWNlLiBUaGUgYWlyIGlzIGFsaXZlIHdpdGggdGhlIGZyYWdyYW50IGhhcm1vbnkgb2Ygc2xvdy1zaW1tZXJlZCBicm90aHMgYW5kIHRoZSBjbGlua3Mgb2YgY2hvcHN0aWNrcy4gSW5zaWRlLCBtaW5pbWFsaXN0IGRlY29yIHdpdGggdHJhZGl0aW9uYWwgYWNjZW50cyBzZXRzIHRoZSBzdGFnZSBmb3IgYSBkZWxpZ2h0ZnVsIGV4cGVyaWVuY2UuIEZyb20gdGhlIGZpcnN0IHN0ZWFteSBzbHVycCwgaXQncyBldmlkZW50IHRoYXQgZXZlcnkgYm93bCBpcyBhIG1hc3RlcnBpZWNlIOKAkyBhIHN5bnRoZXNpcyBvZiB0b290aHNvbWUgbm9vZGxlcywgbWVsdC1pbi15b3VyLW1vdXRoIGNoYXNodSwgaW1wZWNjYWJseSBzZWFzb25lZCBicm90aCwgYW5kIGFuIGFycmF5IG9mIHRvcHBpbmdzIHRoYXQgdHJhbnNmb3JtIGVhY2ggYml0ZSBpbnRvIGEgam91cm5leSBvZiB0YXN0ZSBhbmQgdGV4dHVyZS4gQmV5b25kIHJhbWVuLCB0aGUgbWVudSBzdXJwcmlzZXMgd2l0aCBzbWFsbCBwbGF0ZXMgdGhhdCBwYXkgaG9tYWdlIHRvIEphcGFuZXNlIGZsYXZvcnMsIG1ha2luZyBpdCBhIGhhdmVuIGZvciB0aG9zZSBzZWVraW5nIGJvdGggY29tZm9ydCBhbmQgY3VsaW5hcnkgZXhwbG9yYXRpb24uXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaG9tZURpdicpO1xuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnMudGV4dENvbnRlbnQ9IFwiRXZlcnlkYXk6IDhhbSAtIDEwcG1cIjtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob21lRGl2Jyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChob3Vycyk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gOiA0MiBMYXJrc3B1ciBMYW5lLCBEdWJsaW4gMTAsIENvdW50eSBDb3JrLCBJcmVsYW5kXCJcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdob21lRGl2Jyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=