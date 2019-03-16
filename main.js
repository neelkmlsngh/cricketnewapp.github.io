(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.carousel-inner {\r\n            position: relative;\r\n            }*/\r\n\r\n        /*.img-responsive {\r\n            width: 100%;\r\n            height: auto;\r\n            }*/\r\n\r\n        .shiftNavContent {\r\n                text-align: center;\r\n            }\r\n\r\n        .imagebutton {\r\n                position: absolute;\r\n                top: 0;\r\n                bottom: 0;\r\n                left: 0;\r\n                right: 0;\r\n                text-align: center;\r\n            }\r\n\r\n        .imagebutton:before {\r\n                content: ' ';\r\n                display: block;\r\n                /*adjust 'height' to position overlay content vertically */\r\n                height: 50%;\r\n            }\r\n\r\n        .imagebutton .btn:hover {\r\n                background-color: black;\r\n            }\r\n\r\n        .listinline {\r\n                display: inline;\r\n            }\r\n\r\n        .card {\r\n\r\n                width: 26%;\r\n                display:inline-block;\r\n                /* display: inline; */\r\n            }\r\n\r\n        .cardList {\r\n             display: flex;\r\n             flex-direction: row;\r\n             flex-wrap: wrap;\r\n             justify-content: flex-start;\r\n         }\r\n\r\n        /* Column Gap */\r\n\r\n        .cardList > * {\r\n             box-sizing: border-box;\r\n         }\r\n\r\n        .cardList > *:not(:last-child) {\r\n             margin-right: 32px;\r\n         }\r\n\r\n        /* Item sizing */\r\n\r\n        .cardListItem {\r\n             flex: 0 1 calc(33.3% - 32px);\r\n         }\r\n\r\n        .cardStyle {\r\n          right: -2.3%;\r\n      }\r\n\r\n        .paginationalign {\r\n        right: -2.3%;\r\n    }\r\n\r\n        .coureselstyle {\r\n        margin-top: 4.5%\r\n    }\r\n\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2NBRWM7O1FBRU47OztjQUdNOztRQUVGO2dCQUNJLGtCQUFrQjtZQUN0Qjs7UUFFQTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLE1BQU07Z0JBQ04sU0FBUztnQkFDVCxPQUFPO2dCQUNQLFFBQVE7Z0JBQ1Isa0JBQWtCO1lBQ3RCOztRQUVBO2dCQUNJLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCwwREFBMEQ7Z0JBQzFELFdBQVc7WUFDZjs7UUFFQTtnQkFDSSx1QkFBdUI7WUFDM0I7O1FBRUE7Z0JBQ0ksZUFBZTtZQUNuQjs7UUFDQTs7Z0JBRUksVUFBVTtnQkFDVixvQkFBb0I7Z0JBQ3BCLHFCQUFxQjtZQUN6Qjs7UUFFQTthQUNDLGFBQWE7YUFDYixtQkFBbUI7YUFDbkIsZUFBZTthQUNmLDJCQUEyQjtTQUMvQjs7UUFDQSxlQUFlOztRQUNmO2FBQ0ksc0JBQXNCO1NBQzFCOztRQUNBO2FBQ0ksa0JBQWtCO1NBQ3RCOztRQUNBLGdCQUFnQjs7UUFDaEI7YUFDSSw0QkFBNEI7U0FDaEM7O1FBRUE7VUFDQyxZQUFZO01BQ2hCOztRQUVBO1FBQ0UsWUFBWTtJQUNoQjs7UUFFQTtRQUNJO0lBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLyouaW1nLXJlc3BvbnNpdmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgICAgIC5zaGlmdE5hdkNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2VidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2VidXR0b246YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLyphZGp1c3QgJ2hlaWdodCcgdG8gcG9zaXRpb24gb3ZlcmxheSBjb250ZW50IHZlcnRpY2FsbHkgKi9cclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2VidXR0b24gLmJ0bjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpc3RpbmxpbmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvKiBkaXNwbGF5OiBpbmxpbmU7ICovXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJkTGlzdCB7XHJcbiAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAvKiBDb2x1bW4gR2FwICovXHJcbiAgICAgICAgIC5jYXJkTGlzdCA+ICoge1xyXG4gICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuY2FyZExpc3QgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8qIEl0ZW0gc2l6aW5nICovXHJcbiAgICAgICAgIC5jYXJkTGlzdEl0ZW0ge1xyXG4gICAgICAgICAgICAgZmxleDogMCAxIGNhbGMoMzMuMyUgLSAzMnB4KTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLmNhcmRTdHlsZSB7XHJcbiAgICAgICAgICByaWdodDogLTIuMyU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYWdpbmF0aW9uYWxpZ24ge1xyXG4gICAgICAgIHJpZ2h0OiAtMi4zJTtcclxuICAgIH1cclxuXHJcbiAgICAuY291cmVzZWxzdHlsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNC41JVxyXG4gICAgfVxyXG5cclxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`\n</head>\n\n<body>\n  <div class=\"container-fluid\">\n    <nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-info\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <h4>Home Of Cricket</h4>\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">\n            <h5>Home </h5><span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"liveScore()\">\n            <h5>Live Score</h5>\n          </a>\n        </li>\n          <!-- <li class=\"nav-item dropdown\">\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Dropdown\n                  </a>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                  </div>\n                </li> -->\n                <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#\">&nbsp;&nbsp;&nbsp;&nbsp;</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#\" (click)=\"getSchedule()\">\n                    <h5>Calender</h5>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#\" (click)=\"getAllMatches()\">\n                    <h5>Matches</h5>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#\" (click)=\"getOldMatches()\">\n                    <h5>Recent</h5>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#\">\n                    <h5>Schedule</h5>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>\n                </li>\n              </ul>\n              <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\n              </form>\n            </div>\n            <!-- </div> -->\n\n          </nav>\n          <!-- </div> -->\n          <!--    </div> -->\n          <div class=\"row justify-content-md-center coureselstyle\">\n            <div class=\"col-md-2\">\n              1 of 3\n            </div>\n            <div class=\"col-md-8\">\n              <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n                <ol class=\"carousel-indicators\">\n                  <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                  <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                </ol>\n                <div class=\"carousel-inner\">\n                  <div class=\"carousel-item active\">\n                    <img class=\"d-block w-100\" src=\"../assets/slider.jpg\" alt=\"First slide\">\n                    <div class=\"imagebutton\">\n                      <button class=\"btn btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Get\n                        Started</button>\n                      </div>\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img class=\"d-block w-100\" src=\"../assets/slider1.jpg\" alt=\"Second slide\">\n                      <div class=\"imagebutton\">\n                        <button class=\"btn btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Get\n                          Started</button>\n                        </div>\n                      </div>\n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                      <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                      <span class=\"sr-only\">Next</span>\n                    </a>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <nav class=\"navbar  navbar-expand-lg navbar-light bg-info\">\n                    <a class=\"navbar-brand\" href=\"#\" (click)=\"getCommentoryData()\">Get Commentory</a>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                      <span class=\"navbar-toggler-icon\"></span>\n                    </button>\n                  </nav>\n                </div>\n              </div>\n            </div>\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n            aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Upload Your Audio File</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <input type=\"file\" name=\"\">\n                  ...\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- calender-->\n          <div class=\"row justify-content-md-center\" *ngIf=\"showDataCalender\">\n            <div class=\"col-md-2\">\n              1st of 3\n            </div>\n            <div class=\"col-md-8 cardStyle\">\n              <div class=\"row\">\n                <div class=\"col-sm-1\"></div>\n                <div class=\"col-sm-10\">\n                  <div fxLayout=\"row wrap\" fxLayoutGap=\"32px\" fxLayoutAlign=\"flex-start\">\n                    <ng-container *ngFor=\"let item of allDataCalender  | paginate: { itemsPerPage: 6, currentPage: p }\">\n                      <!-- <app-card fxFlex=\"0 1 calc(33.3% - 32px)\"></app-card> -->\n                      <div class=\"card\">\n                        <img class=\"card-img-top\" src=\"../assets/pic1.jpg\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                          <h5 class=\"card-title\">{{ item.name }} -- {{item.date}}</h5>\n                        </div>\n                      </div>\n                    </ng-container>\n                  </div>\n                </div>\n                <div class=\"col-sm-1\"></div>\n              </div>\n\n              \n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-sm-2\"></div>\n                  <div class=\"col-sm-8\">\n                    <pagination-controls class=\"align-self-center\" (pageChange)=\"p = $event\"></pagination-controls>\n                  </div>\n                  <div class=\"col-sm-2\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              3rd of 3\n            </div>\n          </div>\n          <!-- Matches-->\n          <div class=\"row justify-content-md-center\"  *ngIf=\"showDataMatches\">\n            <div class=\"col-md-2\">\n              1st of 3\n            </div>\n            <div class=\"col-md-8 cardStyle\">\n              <div class=\"row\">\n                <div class=\"col-sm-1\"></div>\n                <div class=\"col-sm-10\">\n                  <div fxLayout=\"row wrap\" fxLayoutGap=\"32px\" fxLayoutAlign=\"flex-start\">\n                    <ng-container *ngFor=\"let item of allDataMatches | paginate: { itemsPerPage: 6, currentPage: p }\">\n                      <!-- <app-card fxFlex=\"0 1 calc(33.3% - 32px)\"></app-card> -->\n                      <div class=\"card\">\n                        <img class=\"card-img-top\" src=\"../assets/img2.jpg\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                          <h5 class=\"card-title\">{{ item.firstTeam }} -V/S- {{item.secondTeam}}</h5>\n                          <h5 class=\"card-title\">{{item.type}}--{{item.dateTimeGMT}}</h5>\n                        </div>\n                      </div>\n                    </ng-container>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-1\"></div>\n\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-sm-2\"></div>\n                  <div class=\"col-sm-8\">\n                    <pagination-controls class=\"align-self-center\" (pageChange)=\"p = $event\"></pagination-controls>\n                  </div>\n                  <div class=\"col-sm-2\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              3rd of 3\n            </div>\n          </div>\n          <div class=\"row justify-content-md-center\"  *ngIf=\"showDataRecentMatches\">\n            <div class=\"col-md-2\">\n              1st of 3\n            </div>\n            <div class=\"col-md-8 cardStyle\">\n              <div fxLayout=\"row wrap\" fxLayoutGap=\"32px\" fxLayoutAlign=\"flex-start\">\n                <ng-container *ngFor=\"let item of allDataRecentMatches | paginate: { itemsPerPage: 6, currentPage: p }\">\n                  <!-- <app-card fxFlex=\"0 1 calc(33.3% - 32px)\"></app-card> -->\n                  <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"../assets/img3.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">{{ item.description }}</h5>\n                    </div>\n                  </div>\n                </ng-container>\n              </div>\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-sm-2\"></div>\n                  <div class=\"col-sm-8\">\n                    <pagination-controls class=\"align-self-center\" (pageChange)=\"p = $event\"></pagination-controls>\n                  </div>\n                  <div class=\"col-sm-2\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              3rd of 3\n            </div>\n          </div>\n  <!-- <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-4\">\n      <div class=\"container d-flex h-100\">\n        <ul>\n          <li *ngFor=\"let hero of allDataCalender\">\n            {{ hero.name }} -- {{hero.date}}\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"container d-flex h-100\">\n          <ul>\n            <li *ngFor=\"let hero of allDataMatches\">\n              {{ hero.type }} VS {{hero.team-2}}\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"container d-flex h-100\">\n          <ul>\n            <li *ngFor=\"let hero of allDataRecentMatches\">\n              {{ hero.title }}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <script src=\"https://js.pusher.com/4.4/pusher.min.js\"></script>\n</body>\n\n</html>\n\n<!-- <router-outlet></router-outlet> -->\n\n\n\n\n<!-- <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search...\">\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n            </form>\n -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'hackathon';
        this.showDataCalender = false;
        this.showDataMatches = false;
        this.showDataRecentMatches = false;
        this.p = 1;
    }
    AppComponent.prototype.getSchedule = function () {
        var _this = this;
        this.http.get('http://cricapi.com/api/matchCalendar/O7KRyV9KnKXScWhtr7srCpOuOOy1').subscribe(function (res) {
            _this.p = 1;
            _this.showDataCalender = true;
            _this.showDataMatches = false;
            _this.showDataRecentMatches = false;
            var wholeResponse = res;
            var jsonResponse = JSON.parse(wholeResponse._body);
            _this.allDataCalender = jsonResponse.data;
            //console.log(this.allData.data);
        });
    };
    AppComponent.prototype.getAllMatches = function () {
        var _this = this;
        this.http.get('http://cricapi.com/api/matches/O7KRyV9KnKXScWhtr7srCpOuOOy1').subscribe(function (res) {
            _this.showDataMatches = true;
            _this.showDataCalender = false;
            _this.showDataRecentMatches = false;
            var wholeResponse = res;
            var jsonResponse = JSON.parse(wholeResponse._body);
            _this.allDataMatches = jsonResponse.matches.slice(0, 8);
            _this.allDataMatches.map(function (element) {
                element.firstTeam = Object.values(element)[3];
                element.secondTeam = Object.values(element)[4];
                // element.dateTimeForMatch = 
            });
            console.log(_this.allDataMatches);
        });
    };
    AppComponent.prototype.getOldMatches = function () {
        var _this = this;
        this.http.get('http://cricapi.com/api/cricket/O7KRyV9KnKXScWhtr7srCpOuOOy1').subscribe(function (res) {
            _this.showDataCalender = false;
            _this.showDataMatches = false;
            _this.showDataRecentMatches = true;
            var wholeResponse = res;
            var jsonResponse = JSON.parse(wholeResponse._body);
            _this.allDataRecentMatches = jsonResponse.data;
            _this.allDataRecentMatches.forEach(function (element) {
                element.description.replace("&amp;", "");
            });
            console.log(_this.allDataRecentMatches);
        });
    };
    AppComponent.prototype.getCommentoryData = function () {
    };
    AppComponent.prototype.liveScore = function () {
        this.http.get('http://mapps.cricbuzz.com/cbzios/match/livematches').subscribe(function (res) {
            console.log(res);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NiitHackaThon\hackathon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map