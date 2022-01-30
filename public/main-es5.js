function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Users");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nutritions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My diet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sign in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " My profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_10_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.auth.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var tmp_0_0 = null;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r4.auth.getUserDetails()) == null ? null : tmp_0_0.name, " ");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(auth) {
        _classCallCheck(this, AppComponent);

        this.auth = auth;
        this.title = 'Dietary habits';
      }

      _createClass(AppComponent, [{
        key: "myFunction",
        value: function myFunction() {
          var x = document.getElementById('myTopnav');
          var navSignIn = document.getElementById('navSignIn');
          var userDropdown = document.getElementById('userDropdown');

          if (x.className === 'topnav') {
            x.className += ' responsive';

            if (navSignIn !== null) {
              navSignIn.className = '';
            }

            if (userDropdown !== null) {
              userDropdown.className = 'dropdown';
            }
          } else {
            x.className = 'topnav';

            if (navSignIn !== null) {
              navSignIn.className = 'w3-right';
            }

            if (userDropdown !== null) {
              userDropdown.className = 'dropdown w3-right';
            }
          }
        }
      }, {
        key: "toTop",
        value: function toTop() {
          document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 44,
      vars: 5,
      consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], ["id", "myTopnav", 1, "topnav"], ["routerLink", "/home"], [1, "fa", "fa-home"], ["style", "cursor: pointer;", "routerLink", "/users", 4, "ngIf"], ["style", "cursor: pointer;", "routerLink", "/nutrition", 4, "ngIf"], ["style", "cursor: pointer;", "routerLink", "/my-diet", 4, "ngIf"], ["class", "w3-right", "id", "navSignIn", "routerLink", "/sign-in", 4, "ngIf"], ["class", "dropdown w3-right", "id", "userDropdown", 4, "ngIf"], [1, "icon", 3, "click"], [1, "fa", "fa-bars"], [1, "w3-container", "w3-padding-32", "w3-dark-grey", "w3-center"], [1, "w3-padding-16"], [1, "w3-xlarge", "w3-border-blue", "w3-bottombar"], [1, "fa", "fa-map-marker", "w3-text-blue", "w3-xlarge"], [1, "fa", "fa-clock-o", "w3-text-blue", "w3-xlarge"], [1, "fa", "fa-phone", "w3-text-blue", "w3-xlarge"], [1, "fa", "fa-envelope-o", "w3-text-blue", "w3-xlarge"], [1, "w3-button", "w3-black", "w3-margin", 3, "click"], [1, "fa", "fa-arrow-up", "w3-margin-right"], [1, "w3-xlarge", "w3-section"], [1, "fa", "fa-facebook-official", "w3-hover-opacity", 2, "padding", "5pt"], [1, "fa", "fa-instagram", "w3-hover-opacity", 2, "padding", "5pt"], [1, "fa", "fa-snapchat", "w3-hover-opacity", 2, "padding", "5pt"], [1, "fa", "fa-pinterest-p", "w3-hover-opacity", 2, "padding", "5pt"], [1, "fa", "fa-twitter", "w3-hover-opacity", 2, "padding", "5pt"], [1, "fa", "fa-linkedin", "w3-hover-opacity", 2, "padding", "5pt"], [1, "w3-hover-text-green"], ["routerLink", "/users", 2, "cursor", "pointer"], [1, "fa", "fa-users"], ["routerLink", "/nutrition", 2, "cursor", "pointer"], [1, "fa", "fa-cutlery"], ["routerLink", "/my-diet", 2, "cursor", "pointer"], ["id", "navSignIn", "routerLink", "/sign-in", 1, "w3-right"], [1, "fa", "fa-sign-in"], ["id", "userDropdown", 1, "dropdown", "w3-right"], [1, "dropbtn"], [1, "fa", "fa-user"], [1, "fa", "fa-caret-down"], [1, "dropdown-content"], ["routerLink", "/profile", 2, "cursor", "pointer"], [2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-sign-out"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_a_6_Template, 3, 0, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_a_7_Template, 3, 0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_a_8_Template, 3, 0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_a_9_Template, 3, 0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_10_Template, 12, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_11_listener() {
            return ctx.myFunction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "footer", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " John Kennedy 36, New Belgrade, Serbia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Mon-Fri : 09-17h");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " +38165515524");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " contact@dietaryhabits.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_30_listener() {
            return ctx.toTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "To top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Powered by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "someone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isAdmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isLoggedIn());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  background-color: #333;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  font-family: Verdana,sans-serif;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\r\n  background-color: #555;\r\n  color: white;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  border: none;\r\n  outline: none;\r\n  color: white;\r\n  padding: 14px 16px;\r\n  background-color: inherit;\r\n  font-family: inherit;\r\n  margin: 0;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #555;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: none;\r\n  color: white;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child), .dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .topnav[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%] {\r\n    float: right;\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav.responsive[_ngcontent-%COMP%] {position: relative;}\r\n  .topnav.responsive[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n\r\n  .topnav.responsive[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {float: none;}\r\n  .topnav.responsive[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {position: relative;}\r\n  .topnav.responsive[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0Isa0JBQWtCLENBQUM7RUFDdkM7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07RUFDUjtFQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUEsOEJBQThCLFdBQVcsQ0FBQztFQUMxQyxzQ0FBc0Msa0JBQWtCLENBQUM7RUFDekQ7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5cclxuLnRvcG5hdiBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRvcG5hdiBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi50b3BuYXYgLmljb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAudG9wbmF2IGE6bm90KDpmaXJzdC1jaGlsZCkgLCAuZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnRvcG5hdiBhLmljb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSB7cG9zaXRpb246IHJlbGF0aXZlO31cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93biB7ZmxvYXQ6IG5vbmU7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24tY29udGVudCB7cG9zaXRpb246IHJlbGF0aXZlO31cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/sign-in/sign-in.component */
    "./src/app/components/sign-in/sign-in.component.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/users/users.component */
    "./src/app/components/users/users.component.ts");
    /* harmony import */


    var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/admin-auth-guard.service */
    "./src/app/services/admin-auth-guard.service.ts");
    /* harmony import */


    var _components_nutrition_nutrition_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/nutrition/nutrition.component */
    "./src/app/components/nutrition/nutrition.component.ts");
    /* harmony import */


    var _components_search_and_add_nutrition_search_and_add_nutrition_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/search-and-add-nutrition/search-and-add-nutrition.component */
    "./src/app/components/search-and-add-nutrition/search-and-add-nutrition.component.ts");
    /* harmony import */


    var _components_my_diet_my_diet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/my-diet/my-diet.component */
    "./src/app/components/my-diet/my-diet.component.ts");

    var routes = [{
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    }, {
      path: 'sign-in',
      component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"]
    }, {
      path: 'register',
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]
    }, {
      path: 'users',
      component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
      canActivate: [_services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminAuthGuardService"]]
    }, {
      path: 'profile',
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]]
    }, {
      path: 'nutrition',
      component: _components_nutrition_nutrition_component__WEBPACK_IMPORTED_MODULE_15__["NutritionComponent"],
      canActivate: [_services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminAuthGuardService"]]
    }, {
      path: 'search-add',
      component: _components_search_and_add_nutrition_search_and_add_nutrition_component__WEBPACK_IMPORTED_MODULE_16__["SearchAndAddNutritionComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]]
    }, {
      path: 'my-diet',
      component: _components_my_diet_my_diet_component__WEBPACK_IMPORTED_MODULE_17__["MyDietComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]]
    }, {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
        positionClass: 'toast-bottom-center',
        closeButton: true,
        preventDuplicates: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], _components_users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"], _components_nutrition_nutrition_component__WEBPACK_IMPORTED_MODULE_15__["NutritionComponent"], _components_search_and_add_nutrition_search_and_add_nutrition_component__WEBPACK_IMPORTED_MODULE_16__["SearchAndAddNutritionComponent"], _components_my_diet_my_diet_component__WEBPACK_IMPORTED_MODULE_17__["MyDietComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], _components_users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"], _components_nutrition_nutrition_component__WEBPACK_IMPORTED_MODULE_15__["NutritionComponent"], _components_search_and_add_nutrition_search_and_add_nutrition_component__WEBPACK_IMPORTED_MODULE_16__["SearchAndAddNutritionComponent"], _components_my_diet_my_diet_component__WEBPACK_IMPORTED_MODULE_17__["MyDietComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
            positionClass: 'toast-bottom-center',
            closeButton: true,
            preventDuplicates: true
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 29,
      vars: 0,
      consts: [[1, "siva"], ["id", "home", 1, "w3-display-container", "w3-content", "w3-wide", 2, "max-width", "1500px"], ["src", "../../../assets/bg.jpg", "alt", "Food table", "width", "1500", "height", "800", 1, "w3-image"], [1, "w3-display-middle", "w3-center", 2, "background-color", "white", "opacity", "0.8"], [2, "font-size", "8vw"], [1, "w3-row-padding", "w3-padding-64", "w3-container"], [1, "w3-content"], [1, "w3-twothird"], [1, "w3-padding-32"], [1, "w3-text-grey"], [1, "w3-third", "w3-center"], [1, "fa", "fa-heartbeat", "w3-padding-64", "w3-text-red", 2, "font-size", "200px"], [1, "w3-row-padding", "w3-light-grey", "w3-padding-64", "w3-container"], [1, "fa", "fa-cutlery", "w3-padding-64", "w3-text-black", "w3-margin-right", 2, "font-size", "200px"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dietary habits");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nutrition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nutrition is the biochemical and physiological process by which an organism uses food to support its life. It includes ingestion, absorption, assimilation, biosynthesis, catabolism and excretion. The science that studies the physiological process of nutrition is called nutritional science (also nutrition science).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nutrients are substances used by an organism to survive, grow, and reproduce. The seven major classes of relevant nutrients for animals (including humans) are carbohydrates, dietary fiber, fats, proteins, minerals, vitamins, and water. Nutrients can be grouped as either macronutrients (carbohydrates, dietary fiber, fats, proteins, and water needed in gram quantities) or micronutrients (vitamins and minerals needed in milligram or microgram quantities).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Nutrition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Nutrition is the biochemical and physiological process by which an organism uses food to support its life. It includes ingestion, absorption, assimilation, biosynthesis, catabolism and excretion. The science that studies the physiological process of nutrition is called nutritional science.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nutrients are substances used by an organism to survive, grow, and reproduce. The seven major classes of relevant nutrients for animals (including humans) are carbohydrates, dietary fiber, fats, proteins, minerals, vitamins, and water. Nutrients can be grouped as either macronutrients (carbohydrates, dietary fiber, fats, proteins, and water needed in gram quantities) or micronutrients (vitamins and minerals needed in milligram or microgram quantities).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url('https://fonts.googleapis.com/css?family=Merienda');\r\nbody[_ngcontent-%COMP%] {\r\n  background: lightgray;\r\n}\r\n.prijava[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    margin-top: 100px;\r\n    background-color: #ffbc35;\r\n    border: 1px solid red;\r\n    padding: 10px;\r\n}\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    top: 40%;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    font-family: 'Merienda', sans-serif;\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n    line-height: 1.2;\r\n}\r\n.slider-img[_ngcontent-%COMP%] {\r\n    width: 100%!important;\r\n    height: auto;\r\n    min-height: 320px;\r\n    display: block!important;\r\n    border-style: none;\r\n}\r\nngb-carousel[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\napp-articles[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.siva[_ngcontent-%COMP%] {\r\n  background-color: lightgray\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7QUFDL0Q7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksUUFBUTtBQUNaO0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1lcmllbmRhJyk7XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxufVxyXG4ucHJpamF2YSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmMzNTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgIHRvcDogNDAlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LWZhbWlseTogJ01lcmllbmRhJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4uc2xpZGVyLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAzMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxubmdiLWNhcm91c2VsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuYXBwLWFydGljbGVzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNpdmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/my-diet/my-diet.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/my-diet/my-diet.component.ts ***!
    \*********************************************************/

  /*! exports provided: MyDietComponent */

  /***/
  function srcAppComponentsMyDietMyDietComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyDietComponent", function () {
      return MyDietComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user_nutrition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/user-nutrition.service */
    "./src/app/services/user-nutrition.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_dri_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/dri.service */
    "./src/app/services/dri.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MyDietComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
      }
    }

    function MyDietComponent_div_12_tr_156_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyDietComponent_div_12_tr_156_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var nutrition_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.updateUserNutrition(nutrition_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyDietComponent_div_12_tr_156_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var nutrition_r3 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.deleteUserNutrition(nutrition_r3._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nutrition_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nutrition_r3.nutrition.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", nutrition_r3.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", nutrition_r3._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.calories, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.calories / ctx_r2.dri.calories_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.total_fat_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.total_fat_g / ctx_r2.dri.total_fat_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.saturated_fat_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.saturated_fat_g / ctx_r2.dri.saturated_fat_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.cholesterol_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.cholesterol_mg / ctx_r2.dri.cholesterol_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.sodium_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.sodium_mg / ctx_r2.dri.sodium_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.choline_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.choline_mg / ctx_r2.dri.choline_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.folate_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.folate_mcg / ctx_r2.dri.folate_mcg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.folic_acid_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.folic_acid_mcg / ctx_r2.dri.folic_acid_mcg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.niacin_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.niacin_mg / ctx_r2.dri.niacin_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.pantothenic_acid_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.pantothenic_acid_mg / ctx_r2.dri.pantothenic_acid_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.riboflavin_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.riboflavin_mg / ctx_r2.dri.riboflavin_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.thiamin_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.thiamin_mg / ctx_r2.dri.thiamin_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_a_IU, " IU ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_a_IU / ctx_r2.dri.vitamin_a_IU_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_a_rae_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_a_rae_mcg / ctx_r2.dri.vitamin_a_rae_mcg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.carotene_alpha_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.carotene_alpha_mcg / ctx_r2.dri.carotene_alpha_mcg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.carotene_beta_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.carotene_beta_mcg / ctx_r2.dri.carotene_beta_mcg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.cryptoxanthin_beta_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.cryptoxanthin_beta_mcg / ctx_r2.dri.cryptoxanthin_beta_mcg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.lutein_zeaxanthin_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.lutein_zeaxanthin_mcg / ctx_r2.dri.lutein_zeaxanthin_mcg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_b12_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_b12_mcg / ctx_r2.dri.vitamin_b12_mcg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_b6_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_b6_mg / ctx_r2.dri.vitamin_b6_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_c_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_c_mg / ctx_r2.dri.vitamin_c_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_d_IU, " IU ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_d_IU / ctx_r2.dri.vitamin_d_IU_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_e_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_e_mg / ctx_r2.dri.vitamin_e_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.tocopherol_alpha_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.tocopherol_alpha_mg / ctx_r2.dri.tocopherol_alpha_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_k_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.vitamin_k_mcg / ctx_r2.dri.vitamin_k_mcg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.calcium_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.calcium_mg / ctx_r2.dri.calcium_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.copper_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.copper_mg / ctx_r2.dri.copper_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.irom_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.irom_mg / ctx_r2.dri.irom_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.magnesium_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.magnesium_mg / ctx_r2.dri.magnesium_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.manganese_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.manganese_mg / ctx_r2.dri.manganese_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.phosphorous_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.phosphorous_mg / ctx_r2.dri.phosphorous_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.potassium_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.potassium_mg / ctx_r2.dri.potassium_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.selenium_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.selenium_mcg / ctx_r2.dri.selenium_mcg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.zink_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.zink_mg / ctx_r2.dri.zink_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.protein_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.protein_g / ctx_r2.dri.protein_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.alanine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.alanine_g / ctx_r2.dri.alanine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.arginine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.arginine_g / ctx_r2.dri.arginine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.aspartic_acid_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.aspartic_acid_g / ctx_r2.dri.aspartic_acid_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.cystine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.cystine_g / ctx_r2.dri.cystine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.glutamic_acid_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.glutamic_acid_g / ctx_r2.dri.glutamic_acid_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.glycine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.glycine_g / ctx_r2.dri.glycine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.histidine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.histidine_g / ctx_r2.dri.histidine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.hydroxyproline_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.hydroxyproline_g / ctx_r2.dri.hydroxyproline_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.isoleucine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.isoleucine_g / ctx_r2.dri.isoleucine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.leucine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.leucine_g / ctx_r2.dri.leucine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.lysine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.lysine_g / ctx_r2.dri.lysine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.methionine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.methionine_g / ctx_r2.dri.methionine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.phenylalanine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.phenylalanine_g / ctx_r2.dri.phenylalanine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.proline_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.proline_g / ctx_r2.dri.proline_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.serine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.serine_g / ctx_r2.dri.serine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.threonine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.threonine_g / ctx_r2.dri.threonine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.tryptophan_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.tryptophan_g / ctx_r2.dri.tryptophan_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.tyrosine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.tyrosine_g / ctx_r2.dri.tyrosine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.valine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.valine_g / ctx_r2.dri.valine_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.carbohydrate_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.carbohydrate_g / ctx_r2.dri.carbohydrate_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.fiber_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.fiber_g / ctx_r2.dri.fiber_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.sugars_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.sugars_g / ctx_r2.dri.sugars_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.fructose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.fructose_g / ctx_r2.dri.fructose_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.galactose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.galactose_g / ctx_r2.dri.galactose_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.glucose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.glucose_g / ctx_r2.dri.glucose_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.lactose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.lactose_g / ctx_r2.dri.lactose_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.maltose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.maltose_g / ctx_r2.dri.maltose_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.sucrose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.sucrose_g / ctx_r2.dri.sucrose_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.fat_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.fat_g / ctx_r2.dri.fat_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.saturated_fatty_acids_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.saturated_fatty_acids_g / ctx_r2.dri.saturated_fatty_acids_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.monounsaturated_fatty_acids_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.monounsaturated_fatty_acids_g / ctx_r2.dri.monounsaturated_fatty_acids_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.polyunsaturated_fatty_acids_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.polyunsaturated_fatty_acids_g / ctx_r2.dri.polyunsaturated_fatty_acids_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.fatty_acids_total_trans_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.fatty_acids_total_trans_g / ctx_r2.dri.fatty_acids_total_trans_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.alcohol_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.alcohol_g / ctx_r2.dri.alcohol_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.ash_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.ash_g / ctx_r2.dri.ash_g_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.caffeine_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.caffeine_mg / ctx_r2.dri.caffeine_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.theobromine_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.theobromine_mg / ctx_r2.dri.theobromine_mg_min * 100).toFixed(2), " %) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nutrition_r3.quantity / 100 * nutrition_r3.nutrition.water_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (nutrition_r3.quantity / 100 * nutrition_r3.nutrition.water_g / ctx_r2.dri.water_g_min * 100).toFixed(2), " %) ");
      }
    }

    function MyDietComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Food");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quantity (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Calories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total fat (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Saturated fat (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cholesterol (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sodium (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Choline (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Folate (mcg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Folic acid (mcg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Niacin (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pantothenic acid (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Riboflavin (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Thiamin (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Vitamin a (IU)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Vitamin a rae (mcg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Carotene alpha (mcg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Carotene beta (mcg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cryptoxanthin beta (mcg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lutein zeaxanthin (mcg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Vitamin b12 (mcg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Vitamin b6 (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Vitamin c (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Vitamin d (IU)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Vitamin e (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Tocopherol alpha (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Vitamin k (mcg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Calcium (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Copper (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Irom (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Magnesium (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Manganese (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Phosphorous (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Potassium (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Selenium (mcg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Zink (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Protein (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Alanine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Arginine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Aspartic acid (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Cystine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Glutamic acid (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Glycine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Histidine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Hydroxyproline (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Isoleucine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Leucine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Lysine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Methionine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Phenylalanine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Proline (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Serine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Threonine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Tryptophan (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Tyrosine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Valine (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Carbohydrate (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Fiber (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Sugars (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Fructose (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Galactose (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Glucose (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Lactose (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Maltose (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Sucrose (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Fat (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Saturated fatty acids (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Monounsaturated fatty acids (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Polyunsaturated fatty acids (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Fatty acids total trans (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Alcohol (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Ash (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Caffeine (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Theobromine (mg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Water (g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, MyDietComponent_div_12_tr_156_Template, 309, 149, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](156);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.nutritions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumquantity, " g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumcalories, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumcalories / ctx_r1.dri.calories_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumtotal_fat_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumtotal_fat_g / ctx_r1.dri.total_fat_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumsaturated_fat_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumsaturated_fat_g / ctx_r1.dri.saturated_fat_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumcholesterol_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumcholesterol_mg / ctx_r1.dri.cholesterol_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumsodium_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumsodium_mg / ctx_r1.dri.sodium_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumcholine_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumcholine_mg / ctx_r1.dri.choline_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumfolate_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumfolate_mcg / ctx_r1.dri.folate_mcg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumfolic_acid_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumfolic_acid_mcg / ctx_r1.dri.folic_acid_mcg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumniacin_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumniacin_mg / ctx_r1.dri.niacin_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumpantothenic_acid_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumpantothenic_acid_mg / ctx_r1.dri.pantothenic_acid_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumriboflavin_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumriboflavin_mg / ctx_r1.dri.riboflavin_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumthiamin_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumthiamin_mg / ctx_r1.dri.thiamin_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumvitamin_a_IU, " IU ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumvitamin_a_IU / ctx_r1.dri.vitamin_a_IU_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumvitamin_a_rae_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumvitamin_a_rae_mcg / ctx_r1.dri.vitamin_a_rae_mcg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumcarotene_alpha_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumcarotene_alpha_mcg / ctx_r1.dri.carotene_alpha_mcg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumcarotene_beta_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumcarotene_beta_mcg / ctx_r1.dri.carotene_beta_mcg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumcryptoxanthin_beta_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumcryptoxanthin_beta_mcg / ctx_r1.dri.cryptoxanthin_beta_mcg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumlutein_zeaxanthin_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumlutein_zeaxanthin_mcg / ctx_r1.dri.lutein_zeaxanthin_mcg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumvitamin_b12_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumvitamin_b12_mcg / ctx_r1.dri.vitamin_b12_mcg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumvitamin_b6_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumvitamin_b6_mg / ctx_r1.dri.vitamin_b6_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumvitamin_c_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumvitamin_c_mg / ctx_r1.dri.vitamin_c_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumvitamin_d_IU, " IU ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumvitamin_d_IU / ctx_r1.dri.vitamin_d_IU_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumvitamin_e_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumvitamin_e_mg / ctx_r1.dri.vitamin_e_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumtocopherol_alpha_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumtocopherol_alpha_mg / ctx_r1.dri.tocopherol_alpha_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumvitamin_k_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumvitamin_k_mcg / ctx_r1.dri.vitamin_k_mcg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumcalcium_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumcalcium_mg / ctx_r1.dri.calcium_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumcopper_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumcopper_mg / ctx_r1.dri.copper_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumirom_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumirom_mg / ctx_r1.dri.irom_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.summagnesium_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.summagnesium_mg / ctx_r1.dri.magnesium_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.summanganese_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.summanganese_mg / ctx_r1.dri.manganese_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumphosphorous_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumphosphorous_mg / ctx_r1.dri.phosphorous_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumpotassium_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumpotassium_mg / ctx_r1.dri.potassium_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumselenium_mcg, " mcg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumselenium_mcg / ctx_r1.dri.selenium_mcg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumzink_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumzink_mg / ctx_r1.dri.zink_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumprotein_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumprotein_g / ctx_r1.dri.protein_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumalanine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumalanine_g / ctx_r1.dri.alanine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumarginine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumarginine_g / ctx_r1.dri.arginine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumaspartic_acid_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumaspartic_acid_g / ctx_r1.dri.aspartic_acid_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumcystine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumcystine_g / ctx_r1.dri.cystine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumglutamic_acid_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumglutamic_acid_g / ctx_r1.dri.glutamic_acid_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumglycine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumglycine_g / ctx_r1.dri.glycine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumhistidine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumhistidine_g / ctx_r1.dri.histidine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumhydroxyproline_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumhydroxyproline_g / ctx_r1.dri.hydroxyproline_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumisoleucine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumisoleucine_g / ctx_r1.dri.isoleucine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumleucine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumleucine_g / ctx_r1.dri.leucine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumlysine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumlysine_g / ctx_r1.dri.lysine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.summethionine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.summethionine_g / ctx_r1.dri.methionine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumphenylalanine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumphenylalanine_g / ctx_r1.dri.phenylalanine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumproline_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumproline_g / ctx_r1.dri.proline_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumserine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumserine_g / ctx_r1.dri.serine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumthreonine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumthreonine_g / ctx_r1.dri.threonine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumtryptophan_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumtryptophan_g / ctx_r1.dri.tryptophan_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumtyrosine_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumtyrosine_g / ctx_r1.dri.tyrosine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumvaline_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumvaline_g / ctx_r1.dri.valine_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumcarbohydrate_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumcarbohydrate_g / ctx_r1.dri.carbohydrate_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumfiber_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumfiber_g / ctx_r1.dri.fiber_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumsugars_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumsugars_g / ctx_r1.dri.sugars_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumfructose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumfructose_g / ctx_r1.dri.fructose_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumgalactose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumgalactose_g / ctx_r1.dri.galactose_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumglucose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumglucose_g / ctx_r1.dri.glucose_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumlactose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumlactose_g / ctx_r1.dri.lactose_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.summaltose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.summaltose_g / ctx_r1.dri.maltose_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumsucrose_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumsucrose_g / ctx_r1.dri.sucrose_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumfat_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumfat_g / ctx_r1.dri.fat_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumsaturated_fatty_acids_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumsaturated_fatty_acids_g / ctx_r1.dri.saturated_fatty_acids_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.summonounsaturated_fatty_acids_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.summonounsaturated_fatty_acids_g / ctx_r1.dri.monounsaturated_fatty_acids_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumpolyunsaturated_fatty_acids_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumpolyunsaturated_fatty_acids_g / ctx_r1.dri.polyunsaturated_fatty_acids_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumfatty_acids_total_trans_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumfatty_acids_total_trans_g / ctx_r1.dri.fatty_acids_total_trans_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumalcohol_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumalcohol_g / ctx_r1.dri.alcohol_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumash_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumash_g / ctx_r1.dri.ash_g_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumcaffeine_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumcaffeine_mg / ctx_r1.dri.caffeine_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumtheobromine_mg, " mg ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumtheobromine_mg / ctx_r1.dri.theobromine_mg_min * 100).toFixed(2), " %)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.sumwater_g, " g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", (ctx_r1.sumwater_g / ctx_r1.dri.water_g_min * 100).toFixed(2), " %)");
      }
    }

    var MyDietComponent = /*#__PURE__*/function () {
      function MyDietComponent(userNutritionService, auth, driService, toastr) {
        _classCallCheck(this, MyDietComponent);

        this.userNutritionService = userNutritionService;
        this.auth = auth;
        this.driService = driService;
        this.toastr = toastr;
        this.dri = {};
        this.isLoaded = false;
        this.dateOfConsumption = new Date();
        this.nutritions = [];
        this.sumquantity = 0;
        this.sumcalories = 0;
        this.sumtotal_fat_g = 0;
        this.sumsaturated_fat_g = 0;
        this.sumcholesterol_mg = 0;
        this.sumsodium_mg = 0;
        this.sumcholine_mg = 0;
        this.sumfolate_mcg = 0;
        this.sumfolic_acid_mcg = 0;
        this.sumniacin_mg = 0;
        this.sumpantothenic_acid_mg = 0;
        this.sumriboflavin_mg = 0;
        this.sumthiamin_mg = 0;
        this.sumvitamin_a_IU = 0;
        this.sumvitamin_a_rae_mcg = 0;
        this.sumcarotene_alpha_mcg = 0;
        this.sumcarotene_beta_mcg = 0;
        this.sumcryptoxanthin_beta_mcg = 0;
        this.sumlutein_zeaxanthin_mcg = 0;
        this.sumvitamin_b12_mcg = 0;
        this.sumvitamin_b6_mg = 0;
        this.sumvitamin_c_mg = 0;
        this.sumvitamin_d_IU = 0;
        this.sumvitamin_e_mg = 0;
        this.sumtocopherol_alpha_mg = 0;
        this.sumvitamin_k_mcg = 0;
        this.sumcalcium_mg = 0;
        this.sumcopper_mg = 0;
        this.sumirom_mg = 0;
        this.summagnesium_mg = 0;
        this.summanganese_mg = 0;
        this.sumphosphorous_mg = 0;
        this.sumpotassium_mg = 0;
        this.sumselenium_mcg = 0;
        this.sumzink_mg = 0;
        this.sumprotein_g = 0;
        this.sumalanine_g = 0;
        this.sumarginine_g = 0;
        this.sumaspartic_acid_g = 0;
        this.sumcystine_g = 0;
        this.sumglutamic_acid_g = 0;
        this.sumglycine_g = 0;
        this.sumhistidine_g = 0;
        this.sumhydroxyproline_g = 0;
        this.sumisoleucine_g = 0;
        this.sumleucine_g = 0;
        this.sumlysine_g = 0;
        this.summethionine_g = 0;
        this.sumphenylalanine_g = 0;
        this.sumproline_g = 0;
        this.sumserine_g = 0;
        this.sumthreonine_g = 0;
        this.sumtryptophan_g = 0;
        this.sumtyrosine_g = 0;
        this.sumvaline_g = 0;
        this.sumcarbohydrate_g = 0;
        this.sumfiber_g = 0;
        this.sumsugars_g = 0;
        this.sumfructose_g = 0;
        this.sumgalactose_g = 0;
        this.sumglucose_g = 0;
        this.sumlactose_g = 0;
        this.summaltose_g = 0;
        this.sumsucrose_g = 0;
        this.sumfat_g = 0;
        this.sumsaturated_fatty_acids_g = 0;
        this.summonounsaturated_fatty_acids_g = 0;
        this.sumpolyunsaturated_fatty_acids_g = 0;
        this.sumfatty_acids_total_trans_g = 0;
        this.sumalcohol_g = 0;
        this.sumash_g = 0;
        this.sumcaffeine_mg = 0;
        this.sumtheobromine_mg = 0;
        this.sumwater_g = 0;
      }

      _createClass(MyDietComponent, [{
        key: "onDateChange",
        value: function onDateChange(date) {
          var _this = this;

          this.dateOfConsumption = new Date(date);
          this.isLoaded = false;
          var body = {
            id: this.auth.getUserDetails()._id,
            date_of_consumption: date
          };
          this.userNutritionService.getUserNutritions(body).subscribe(function (nutritions) {
            _this.nutritions = nutritions;

            _this.calculateSum(nutritions);

            _this.isLoaded = true;

            _this.toastr.success('Found ' + nutritions.length + ' nutrition/s', 'Success');
          });
        }
      }, {
        key: "calculateSum",
        value: function calculateSum(nutritions) {
          this.setAllToZero();

          for (var i = 0; i < nutritions.length; i++) {
            this.sumquantity += nutritions[i].quantity;
            this.sumcalories += nutritions[i].nutrition.calories * nutritions[i].quantity / 100;
            this.sumtotal_fat_g += nutritions[i].nutrition.total_fat_g * nutritions[i].quantity / 100;
            this.sumsaturated_fat_g += nutritions[i].nutrition.saturated_fat_g * nutritions[i].quantity / 100;
            this.sumcholesterol_mg += nutritions[i].nutrition.cholesterol_mg * nutritions[i].quantity / 100;
            this.sumsodium_mg += nutritions[i].nutrition.sodium_mg * nutritions[i].quantity / 100;
            this.sumcholine_mg += nutritions[i].nutrition.choline_mg * nutritions[i].quantity / 100;
            this.sumfolate_mcg += nutritions[i].nutrition.folate_mcg * nutritions[i].quantity / 100;
            this.sumfolic_acid_mcg += nutritions[i].nutrition.folic_acid_mcg * nutritions[i].quantity / 100;
            this.sumniacin_mg += nutritions[i].nutrition.niacin_mg * nutritions[i].quantity / 100;
            this.sumpantothenic_acid_mg += nutritions[i].nutrition.pantothenic_acid_mg * nutritions[i].quantity / 100;
            this.sumriboflavin_mg += nutritions[i].nutrition.riboflavin_mg * nutritions[i].quantity / 100;
            this.sumthiamin_mg += nutritions[i].nutrition.thiamin_mg * nutritions[i].quantity / 100;
            this.sumvitamin_a_IU += nutritions[i].nutrition.vitamin_a_IU * nutritions[i].quantity / 100;
            this.sumvitamin_a_rae_mcg += nutritions[i].nutrition.vitamin_a_rae_mcg * nutritions[i].quantity / 100;
            this.sumcarotene_alpha_mcg += nutritions[i].nutrition.carotene_alpha_mcg * nutritions[i].quantity / 100;
            this.sumcarotene_beta_mcg += nutritions[i].nutrition.carotene_beta_mcg * nutritions[i].quantity / 100;
            this.sumcryptoxanthin_beta_mcg += nutritions[i].nutrition.cryptoxanthin_beta_mcg * nutritions[i].quantity / 100;
            this.sumlutein_zeaxanthin_mcg += nutritions[i].nutrition.lutein_zeaxanthin_mcg * nutritions[i].quantity / 100;
            this.sumvitamin_b12_mcg += nutritions[i].nutrition.vitamin_b12_mcg * nutritions[i].quantity / 100;
            this.sumvitamin_b6_mg += nutritions[i].nutrition.vitamin_b6_mg * nutritions[i].quantity / 100;
            this.sumvitamin_c_mg += nutritions[i].nutrition.vitamin_c_mg * nutritions[i].quantity / 100;
            this.sumvitamin_d_IU += nutritions[i].nutrition.vitamin_d_IU * nutritions[i].quantity / 100;
            this.sumvitamin_e_mg += nutritions[i].nutrition.vitamin_e_mg * nutritions[i].quantity / 100;
            this.sumtocopherol_alpha_mg += nutritions[i].nutrition.tocopherol_alpha_mg * nutritions[i].quantity / 100;
            this.sumvitamin_k_mcg += nutritions[i].nutrition.vitamin_k_mcg * nutritions[i].quantity / 100;
            this.sumcalcium_mg += nutritions[i].nutrition.calcium_mg * nutritions[i].quantity / 100;
            this.sumcopper_mg += nutritions[i].nutrition.copper_mg * nutritions[i].quantity / 100;
            this.sumirom_mg += nutritions[i].nutrition.irom_mg * nutritions[i].quantity / 100;
            this.summagnesium_mg += nutritions[i].nutrition.magnesium_mg * nutritions[i].quantity / 100;
            this.summanganese_mg += nutritions[i].nutrition.manganese_mg * nutritions[i].quantity / 100;
            this.sumphosphorous_mg += nutritions[i].nutrition.phosphorous_mg * nutritions[i].quantity / 100;
            this.sumpotassium_mg += nutritions[i].nutrition.potassium_mg * nutritions[i].quantity / 100;
            this.sumselenium_mcg += nutritions[i].nutrition.selenium_mcg * nutritions[i].quantity / 100;
            this.sumzink_mg += nutritions[i].nutrition.zink_mg * nutritions[i].quantity / 100;
            this.sumprotein_g += nutritions[i].nutrition.protein_g * nutritions[i].quantity / 100;
            this.sumalanine_g += nutritions[i].nutrition.alanine_g * nutritions[i].quantity / 100;
            this.sumarginine_g += nutritions[i].nutrition.arginine_g * nutritions[i].quantity / 100;
            this.sumaspartic_acid_g += nutritions[i].nutrition.aspartic_acid_g * nutritions[i].quantity / 100;
            this.sumcystine_g += nutritions[i].nutrition.cystine_g * nutritions[i].quantity / 100;
            this.sumglutamic_acid_g += nutritions[i].nutrition.glutamic_acid_g * nutritions[i].quantity / 100;
            this.sumglycine_g += nutritions[i].nutrition.glycine_g * nutritions[i].quantity / 100;
            this.sumhistidine_g += nutritions[i].nutrition.histidine_g * nutritions[i].quantity / 100;
            this.sumhydroxyproline_g += nutritions[i].nutrition.hydroxyproline_g * nutritions[i].quantity / 100;
            this.sumisoleucine_g += nutritions[i].nutrition.isoleucine_g * nutritions[i].quantity / 100;
            this.sumleucine_g += nutritions[i].nutrition.leucine_g * nutritions[i].quantity / 100;
            this.sumlysine_g += nutritions[i].nutrition.lysine_g * nutritions[i].quantity / 100;
            this.summethionine_g += nutritions[i].nutrition.methionine_g * nutritions[i].quantity / 100;
            this.sumphenylalanine_g += nutritions[i].nutrition.phenylalanine_g * nutritions[i].quantity / 100;
            this.sumproline_g += nutritions[i].nutrition.proline_g * nutritions[i].quantity / 100;
            this.sumserine_g += nutritions[i].nutrition.serine_g * nutritions[i].quantity / 100;
            this.sumthreonine_g += nutritions[i].nutrition.threonine_g * nutritions[i].quantity / 100;
            this.sumtryptophan_g += nutritions[i].nutrition.tryptophan_g * nutritions[i].quantity / 100;
            this.sumtyrosine_g += nutritions[i].nutrition.tyrosine_g * nutritions[i].quantity / 100;
            this.sumvaline_g += nutritions[i].nutrition.valine_g * nutritions[i].quantity / 100;
            this.sumcarbohydrate_g += nutritions[i].nutrition.carbohydrate_g * nutritions[i].quantity / 100;
            this.sumfiber_g += nutritions[i].nutrition.fiber_g * nutritions[i].quantity / 100;
            this.sumsugars_g += nutritions[i].nutrition.sugars_g * nutritions[i].quantity / 100;
            this.sumfructose_g += nutritions[i].nutrition.fructose_g * nutritions[i].quantity / 100;
            this.sumgalactose_g += nutritions[i].nutrition.galactose_g * nutritions[i].quantity / 100;
            this.sumglucose_g += nutritions[i].nutrition.glucose_g * nutritions[i].quantity / 100;
            this.sumlactose_g += nutritions[i].nutrition.lactose_g * nutritions[i].quantity / 100;
            this.summaltose_g += nutritions[i].nutrition.maltose_g * nutritions[i].quantity / 100;
            this.sumsucrose_g += nutritions[i].nutrition.sucrose_g * nutritions[i].quantity / 100;
            this.sumfat_g += nutritions[i].nutrition.fat_g * nutritions[i].quantity / 100;
            this.sumsaturated_fatty_acids_g += nutritions[i].nutrition.saturated_fatty_acids_g * nutritions[i].quantity / 100;
            this.summonounsaturated_fatty_acids_g += nutritions[i].nutrition.monounsaturated_fatty_acids_g * nutritions[i].quantity / 100;
            this.sumpolyunsaturated_fatty_acids_g += nutritions[i].nutrition.polyunsaturated_fatty_acids_g * nutritions[i].quantity / 100;
            this.sumfatty_acids_total_trans_g += nutritions[i].nutrition.fatty_acids_total_trans_g * nutritions[i].quantity / 100;
            this.sumalcohol_g += nutritions[i].nutrition.alcohol_g * nutritions[i].quantity / 100;
            this.sumash_g += nutritions[i].nutrition.ash_g * nutritions[i].quantity / 100;
            this.sumcaffeine_mg += nutritions[i].nutrition.caffeine_mg * nutritions[i].quantity / 100;
            this.sumtheobromine_mg += nutritions[i].nutrition.theobromine_mg * nutritions[i].quantity / 100;
            this.sumwater_g += nutritions[i].nutrition.water_g * nutritions[i].quantity / 100;
          }
        }
      }, {
        key: "setAllToZero",
        value: function setAllToZero() {
          this.sumquantity = 0;
          this.sumcalories = 0;
          this.sumtotal_fat_g = 0;
          this.sumsaturated_fat_g = 0;
          this.sumcholesterol_mg = 0;
          this.sumsodium_mg = 0;
          this.sumcholine_mg = 0;
          this.sumfolate_mcg = 0;
          this.sumfolic_acid_mcg = 0;
          this.sumniacin_mg = 0;
          this.sumpantothenic_acid_mg = 0;
          this.sumriboflavin_mg = 0;
          this.sumthiamin_mg = 0;
          this.sumvitamin_a_IU = 0;
          this.sumvitamin_a_rae_mcg = 0;
          this.sumcarotene_alpha_mcg = 0;
          this.sumcarotene_beta_mcg = 0;
          this.sumcryptoxanthin_beta_mcg = 0;
          this.sumlutein_zeaxanthin_mcg = 0;
          this.sumvitamin_b12_mcg = 0;
          this.sumvitamin_b6_mg = 0;
          this.sumvitamin_c_mg = 0;
          this.sumvitamin_d_IU = 0;
          this.sumvitamin_e_mg = 0;
          this.sumtocopherol_alpha_mg = 0;
          this.sumvitamin_k_mcg = 0;
          this.sumcalcium_mg = 0;
          this.sumcopper_mg = 0;
          this.sumirom_mg = 0;
          this.summagnesium_mg = 0;
          this.summanganese_mg = 0;
          this.sumphosphorous_mg = 0;
          this.sumpotassium_mg = 0;
          this.sumselenium_mcg = 0;
          this.sumzink_mg = 0;
          this.sumprotein_g = 0;
          this.sumalanine_g = 0;
          this.sumarginine_g = 0;
          this.sumaspartic_acid_g = 0;
          this.sumcystine_g = 0;
          this.sumglutamic_acid_g = 0;
          this.sumglycine_g = 0;
          this.sumhistidine_g = 0;
          this.sumhydroxyproline_g = 0;
          this.sumisoleucine_g = 0;
          this.sumleucine_g = 0;
          this.sumlysine_g = 0;
          this.summethionine_g = 0;
          this.sumphenylalanine_g = 0;
          this.sumproline_g = 0;
          this.sumserine_g = 0;
          this.sumthreonine_g = 0;
          this.sumtryptophan_g = 0;
          this.sumtyrosine_g = 0;
          this.sumvaline_g = 0;
          this.sumcarbohydrate_g = 0;
          this.sumfiber_g = 0;
          this.sumsugars_g = 0;
          this.sumfructose_g = 0;
          this.sumgalactose_g = 0;
          this.sumglucose_g = 0;
          this.sumlactose_g = 0;
          this.summaltose_g = 0;
          this.sumsucrose_g = 0;
          this.sumfat_g = 0;
          this.sumsaturated_fatty_acids_g = 0;
          this.summonounsaturated_fatty_acids_g = 0;
          this.sumpolyunsaturated_fatty_acids_g = 0;
          this.sumfatty_acids_total_trans_g = 0;
          this.sumalcohol_g = 0;
          this.sumash_g = 0;
          this.sumcaffeine_mg = 0;
          this.sumtheobromine_mg = 0;
          this.sumwater_g = 0;
        }
      }, {
        key: "updateUserNutrition",
        value: function updateUserNutrition(nutrition) {
          var _this2 = this;

          var req = JSON.parse(JSON.stringify(nutrition));
          var x = document.getElementById(req._id.toString());

          if (Number(x.value) === 0) {
            this.toastr.error('Enter valid quantity of food.', 'Error');
          } else {
            delete req.nutrition;
            req.quantity = Number(x.value);
            this.userNutritionService.updateNutrition(req).subscribe(function () {
              _this2.onDateChange(_this2.dateOfConsumption.toISOString().split('T')[0]);

              _this2.toastr.success('You successfully updated the quantity!', 'Success');
            }, function (err) {
              _this2.toastr.error(err.error.message, 'Error');
            });
          }
        }
      }, {
        key: "deleteUserNutrition",
        value: function deleteUserNutrition(id) {
          var _this3 = this;

          this.userNutritionService.deleteNutrition(id).subscribe(function () {
            _this3.onDateChange(_this3.dateOfConsumption.toISOString().split('T')[0]);

            _this3.toastr.success('You successfully deleted the food!', 'Success');
          }, function (err) {
            _this3.toastr.error(err.error.message, 'Error');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.onDateChange(this.dateOfConsumption.toISOString().split('T')[0]);
          this.driService.getUserActiveDris().subscribe(function (dris) {
            Object.assign(_this4.dri, dris[0]);
          });
          console.log(this.dri);
        }
      }]);

      return MyDietComponent;
    }();

    MyDietComponent.ɵfac = function MyDietComponent_Factory(t) {
      return new (t || MyDietComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["UserNutritionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dri_service__WEBPACK_IMPORTED_MODULE_3__["DriService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    MyDietComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyDietComponent,
      selectors: [["app-my-diet"]],
      decls: 13,
      vars: 6,
      consts: [[1, "w3-center", 2, "padding-top", "10px"], ["routerLink", "/search-add", 2, "cursor", "pointer"], [1, "w3-btn", "w3-green"], [1, "fa", "fa-cutlery"], [2, "display", "table", "margin-top", "10px", "margin-left", "auto", "margin-right", "auto", "margin-bottom", "10px"], ["id", "date_label", 1, "w3-center", "w3-padding", 2, "font-size", "20px", "display", "table-cell"], ["type", "date", 3, "ngModel", "ngModelChange"], ["class", "loader", 4, "ngIf"], ["id", "divForTable", "class", "w3-padding w3-container w3-responsive", 4, "ngIf"], [1, "loader"], ["id", "divForTable", 1, "w3-padding", "w3-container", "w3-responsive"], ["id", "user-nutritions"], [1, "w3-blue"], [1, "w3-center"], [2, "width", "200px"], [4, "ngFor", "ngForOf"], [2, "background-color", "#d9d9d0"], [1, "w3-center", 2, "white-space", "nowrap"], [1, "w3-text-green"], ["type", "number", 2, "width", "50pt", 3, "value"], [1, "w3-blue", 2, "font-family", "inherit", "width", "100px", "height", "40px", 3, "click"], [1, "fa", "fa-edit"], [2, "padding-top", "4px"], [1, "w3-red", 2, "font-family", "inherit", "width", "100px", "height", "40px", 3, "click"], [1, "fa", "fa-trash"]],
      template: function MyDietComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add food");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyDietComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.onDateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyDietComponent_div_11_Template, 1, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyDietComponent_div_12_Template, 457, 148, "div", 8);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 3, ctx.dateOfConsumption, "yyyy-MM-dd"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      styles: [".loader[_ngcontent-%COMP%] {\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid rgb(46, 143, 235);\r\n  border-bottom: 16px solid blue;\r\n  width: 120px;\r\n  height: 120px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 20%;\r\n  margin-bottom: 20%;\r\n  -webkit-animation: spin 1s linear infinite;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n#divForTable[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 4vw;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  border: 1px solid #9e9e9e;\r\n  border-collapse: separate;\r\n  border-spacing: 0;\r\n  overflow: hidden;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  border: 1px solid #9e9e9e; \r\n  padding: 8px;\r\n  position: relative;\r\n  outline: 0;\r\n}\r\n\r\n#user-nutritions[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: lightblue;}\r\n\r\nbody[_ngcontent-%COMP%]:not(.nohover)   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(207, 207, 196);\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:hover::after, thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:empty):hover::after, td[_ngcontent-%COMP%]:focus::after, thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:empty):focus::after {\r\n  content: '';\r\n  height: 10000px;\r\n  left: 0;\r\n  position: absolute;\r\n  top: -5000px;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:hover::after, th[_ngcontent-%COMP%]:hover::after {\r\n  background-color: lightblue;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]:focus::after, th[_ngcontent-%COMP%]:focus::after {\r\n  background-color: lightblue;\r\n}\r\n\r\n\r\n\r\ntd[_ngcontent-%COMP%]:focus::before, tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:focus::before {\r\n  background-color: lightblue;\r\n  content: '';\r\n  height: 100%;\r\n  top: 0;\r\n  left: -5000px;\r\n  position: absolute;\r\n  width: 10000px;\r\n  z-index: -1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1kaWV0L215LWRpZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsS0FBSywrQkFBK0IsRUFBRTtFQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0FBQzVDOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQSwyQkFBMkIsMkJBQTJCLENBQUM7O0FBRXZEO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOzs7O0VBSUUsV0FBVztFQUNYLGVBQWU7RUFDZixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUEsMkJBQTJCOztBQUMzQjs7RUFFRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS1kaWV0L215LWRpZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHJnYig0NiwgMTQzLCAyMzUpO1xyXG4gIGJvcmRlci1ib3R0b206IDE2cHggc29saWQgYmx1ZTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwJTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuI2RpdkZvclRhYmxlIHtcclxuXHRtYXJnaW4tYm90dG9tOiA0dnc7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxudGQsIHRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllOyBcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbiN1c2VyLW51dHJpdGlvbnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTt9XHJcblxyXG5ib2R5Om5vdCgubm9ob3ZlcikgdGJvZHkgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDIwNywgMTk2KTtcclxufVxyXG5cclxudGQ6aG92ZXI6OmFmdGVyLFxyXG50aGVhZCB0aDpub3QoOmVtcHR5KTpob3Zlcjo6YWZ0ZXIsXHJcbnRkOmZvY3VzOjphZnRlcixcclxudGhlYWQgdGg6bm90KDplbXB0eSk6Zm9jdXM6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBoZWlnaHQ6IDEwMDAwcHg7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNTAwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG50ZDpob3Zlcjo6YWZ0ZXIsXHJcbnRoOmhvdmVyOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG50ZDpmb2N1czo6YWZ0ZXIsXHJcbnRoOmZvY3VzOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4vKiBGb2N1cyBzdHVmZiBmb3IgbW9iaWxlICovXHJcbnRkOmZvY3VzOjpiZWZvcmUsXHJcbnRib2R5IHRoOmZvY3VzOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICBjb250ZW50OiAnJztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC01MDAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAwMHB4O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyDietComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-diet',
          templateUrl: './my-diet.component.html',
          styleUrls: ['./my-diet.component.css']
        }]
      }], function () {
        return [{
          type: _services_user_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["UserNutritionService"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _services_dri_service__WEBPACK_IMPORTED_MODULE_3__["DriService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/nutrition/nutrition.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/nutrition/nutrition.component.ts ***!
    \*************************************************************/

  /*! exports provided: NutritionComponent */

  /***/
  function srcAppComponentsNutritionNutritionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionComponent", function () {
      return NutritionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/nutrition.service */
    "./src/app/services/nutrition.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NutritionComponent_div_798_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NutritionComponent_div_798_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var nutrition_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.selectNutrition(2, nutrition_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NutritionComponent_div_798_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var nutrition_r4 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.selectNutrition(3, nutrition_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nutrition_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nutrition_r4.name);
      }
    }

    function NutritionComponent_div_799_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NutritionComponent_div_799_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.previousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NutritionComponent_div_799_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.nextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Jump to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function NutritionComponent_div_799_Template_input_keyup_enter_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.jumpToPage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Per page ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_div_799_Template_select_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.currnetLimit = $event;
        })("ngModelChange", function NutritionComponent_div_799_Template_select_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onLimitChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "12");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.currentPage <= 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Page ", ctx_r3.currentPage + 1, " of ", ctx_r3.numberOfPages, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.currentPage >= ctx_r3.numberOfPages - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.currnetLimit);
      }
    }

    var NutritionComponent = /*#__PURE__*/function () {
      function NutritionComponent(nutritionService, toastr) {
        _classCallCheck(this, NutritionComponent);

        this.nutritionService = nutritionService;
        this.toastr = toastr;
        this.selectedNutrition = {
          name: "",
          calories: 0,
          total_fat_g: 0,
          saturated_fat_g: 0,
          cholesterol_mg: 0,
          sodium_mg: 0,
          choline_mg: 0,
          folate_mcg: 0,
          folic_acid_mcg: 0,
          niacin_mg: 0,
          pantothenic_acid_mg: 0,
          riboflavin_mg: 0,
          thiamin_mg: 0,
          vitamin_a_IU: 0,
          vitamin_a_rae_mcg: 0,
          carotene_alpha_mcg: 0,
          carotene_beta_mcg: 0,
          cryptoxanthin_beta_mcg: 0,
          lutein_zeaxanthin_mcg: 0,
          vitamin_b12_mcg: 0,
          vitamin_b6_mg: 0,
          vitamin_c_mg: 0,
          vitamin_d_IU: 0,
          vitamin_e_mg: 0,
          tocopherol_alpha_mg: 0,
          vitamin_k_mcg: 0,
          calcium_mg: 0,
          copper_mg: 0,
          irom_mg: 0,
          magnesium_mg: 0,
          manganese_mg: 0,
          phosphorous_mg: 0,
          potassium_mg: 0,
          selenium_mcg: 0,
          zink_mg: 0,
          protein_g: 0,
          alanine_g: 0,
          arginine_g: 0,
          aspartic_acid_g: 0,
          cystine_g: 0,
          glutamic_acid_g: 0,
          glycine_g: 0,
          histidine_g: 0,
          hydroxyproline_g: 0,
          isoleucine_g: 0,
          leucine_g: 0,
          lysine_g: 0,
          methionine_g: 0,
          phenylalanine_g: 0,
          proline_g: 0,
          serine_g: 0,
          threonine_g: 0,
          tryptophan_g: 0,
          tyrosine_g: 0,
          valine_g: 0,
          carbohydrate_g: 0,
          fiber_g: 0,
          sugars_g: 0,
          fructose_g: 0,
          galactose_g: 0,
          glucose_g: 0,
          lactose_g: 0,
          maltose_g: 0,
          sucrose_g: 0,
          fat_g: 0,
          saturated_fatty_acids_g: 0,
          monounsaturated_fatty_acids_g: 0,
          polyunsaturated_fatty_acids_g: 0,
          fatty_acids_total_trans_g: 0,
          alcohol_g: 0,
          ash_g: 0,
          caffeine_mg: 0,
          theobromine_mg: 0,
          water_g: 0
        };
        this.nutritions = [];
        this.nutrition = {
          name: "",
          calories: 0,
          total_fat_g: 0,
          saturated_fat_g: 0,
          cholesterol_mg: 0,
          sodium_mg: 0,
          choline_mg: 0,
          folate_mcg: 0,
          folic_acid_mcg: 0,
          niacin_mg: 0,
          pantothenic_acid_mg: 0,
          riboflavin_mg: 0,
          thiamin_mg: 0,
          vitamin_a_IU: 0,
          vitamin_a_rae_mcg: 0,
          carotene_alpha_mcg: 0,
          carotene_beta_mcg: 0,
          cryptoxanthin_beta_mcg: 0,
          lutein_zeaxanthin_mcg: 0,
          vitamin_b12_mcg: 0,
          vitamin_b6_mg: 0,
          vitamin_c_mg: 0,
          vitamin_d_IU: 0,
          vitamin_e_mg: 0,
          tocopherol_alpha_mg: 0,
          vitamin_k_mcg: 0,
          calcium_mg: 0,
          copper_mg: 0,
          irom_mg: 0,
          magnesium_mg: 0,
          manganese_mg: 0,
          phosphorous_mg: 0,
          potassium_mg: 0,
          selenium_mcg: 0,
          zink_mg: 0,
          protein_g: 0,
          alanine_g: 0,
          arginine_g: 0,
          aspartic_acid_g: 0,
          cystine_g: 0,
          glutamic_acid_g: 0,
          glycine_g: 0,
          histidine_g: 0,
          hydroxyproline_g: 0,
          isoleucine_g: 0,
          leucine_g: 0,
          lysine_g: 0,
          methionine_g: 0,
          phenylalanine_g: 0,
          proline_g: 0,
          serine_g: 0,
          threonine_g: 0,
          tryptophan_g: 0,
          tyrosine_g: 0,
          valine_g: 0,
          carbohydrate_g: 0,
          fiber_g: 0,
          sugars_g: 0,
          fructose_g: 0,
          galactose_g: 0,
          glucose_g: 0,
          lactose_g: 0,
          maltose_g: 0,
          sucrose_g: 0,
          fat_g: 0,
          saturated_fatty_acids_g: 0,
          monounsaturated_fatty_acids_g: 0,
          polyunsaturated_fatty_acids_g: 0,
          fatty_acids_total_trans_g: 0,
          alcohol_g: 0,
          ash_g: 0,
          caffeine_mg: 0,
          theobromine_mg: 0,
          water_g: 0
        };
        this.search = '';
        this.currentPage = 0;
        this.currnetLimit = 8;
        this.numberOfPages = 0;
      }

      _createClass(NutritionComponent, [{
        key: "getNutritions",
        value: function getNutritions() {
          var _this5 = this;

          if (this.search === '') {
            this.nutritionService.getNutritionsWithPagination(this.currentPage, this.currnetLimit).subscribe(function (nutritions) {
              _this5.nutritions = nutritions;
            });
            this.nutritionService.getNutritionsCount().subscribe(function (res) {
              _this5.numberOfPages = Math.ceil(res.numberOfNutritions / _this5.currnetLimit);
            });
          } else {
            this.nutritionService.getNutritions(this.search).subscribe(function (nutritions) {
              _this5.nutritions = nutritions;

              _this5.toastr.success('Found ' + nutritions.length + ' nutrition/s', 'Success');
            });
          }
        }
      }, {
        key: "addNutrition",
        value: function addNutrition() {
          var _this6 = this;

          this.nutritionService.addNutrition(this.nutrition).subscribe(function () {
            _this6.toastr.success('You successfully added a nutrition!', 'Success');

            document.getElementById('id01').style.display = 'none';

            _this6.clearDialog();

            _this6.getNutritions();
          }, function (err) {
            _this6.toastr.error(err.error.message, 'Error');
          });
        }
      }, {
        key: "updateNutrition",
        value: function updateNutrition() {
          var _this7 = this;

          this.nutritionService.updateNutrition(this.selectedNutrition).subscribe(function (data) {
            document.getElementById('id02').style.display = 'none';

            _this7.toastr.success('You successfully updated this nutrition!', 'Success');

            _this7.getNutritions();
          }, function (err) {
            _this7.toastr.error(err.error.message, 'Error');
          });
        }
      }, {
        key: "deleteNutrition",
        value: function deleteNutrition() {
          var _this8 = this;

          this.nutritionService.deleteNutrition(this.selectedNutrition._id).subscribe(function (data) {
            document.getElementById('id03').style.display = 'none';

            _this8.toastr.success('You successfully deleted this nutrition!', 'Success');

            if (data.n == 1) {
              for (var i = 0; i < _this8.nutritions.length; i++) {
                if (_this8.selectedNutrition._id == _this8.nutritions[i]._id) {
                  _this8.nutritions.splice(i, 1);
                }
              }
            }
          }, function (err) {
            _this8.toastr.error(err.error.message, 'Error');
          });
        }
      }, {
        key: "selectNutrition",
        value: function selectNutrition(option, nutrition) {
          if (nutrition != null && option != null) {
            this.selectedNutrition = nutrition;

            if (option === 2) {
              document.getElementById('id02').style.display = 'block';
            } else if (option === 3) {
              document.getElementById('id03').style.display = 'block';
            } else {
              console.log("Something unexpected hapend!");
            }
          }
        }
      }, {
        key: "clearDialog",
        value: function clearDialog() {
          this.nutrition.name = '';
          this.nutrition.calories = 0;
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          if (this.currentPage >= this.numberOfPages - 1) {
            this.toastr.error('No next page!', 'Error');
            return;
          }

          ++this.currentPage;
          this.getNutritions();
        }
      }, {
        key: "previousPage",
        value: function previousPage() {
          if (this.currentPage <= 0) {
            this.toastr.error('No previous page!', 'Error');
            return;
          }

          --this.currentPage;
          this.getNutritions();
        }
      }, {
        key: "jumpToPage",
        value: function jumpToPage(event) {
          if (event.target.value >= 1 && event.target.value <= this.numberOfPages) {
            this.currentPage = event.target.value - 1;
            this.getNutritions();
          } else {
            this.toastr.error('This page does not exist!', 'Error');
          }
        }
      }, {
        key: "onLimitChange",
        value: function onLimitChange(value) {
          this.currentPage = 0;
          this.getNutritions();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getNutritions();
        }
      }]);

      return NutritionComponent;
    }();

    NutritionComponent.ɵfac = function NutritionComponent_Factory(t) {
      return new (t || NutritionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["NutritionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    NutritionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NutritionComponent,
      selectors: [["app-nutrition"]],
      decls: 800,
      vars: 154,
      consts: [[1, "w3-container", "w3-center"], ["id", "id01", 1, "w3-modal"], [1, "w3-modal-content", "w3-animate-top", "w3-card-4"], [1, "w3-container", "w3-blue"], [1, "w3-button", "w3-display-topleft", 3, "click"], [1, "fa", "fa-eraser"], ["onclick", "document.getElementById('id01').style.display='none'", 1, "w3-button", "w3-display-topright"], [1, "w3-container"], ["formControl", "ngForm"], [1, "w3-text-blue"], ["required", "", "minlength", "2", "name", "name", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "calories", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "total_fat_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "saturated_fat_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "cholesterol_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "sodium_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "choline_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "folate_mcg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "folic_acid_mcg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "niacin_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "pantothenic_acid_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "riboflavin_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "thiamin_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "vitamin_a_IU", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "vitamin_a_rae_mcg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "carotene_alpha_mcg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "carotene_beta_mcg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "cryptoxanthin_beta_mcg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "lutein_zeaxanthin_mcg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "vitamin_b12_mcg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "vitamin_b6_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "vitamin_c_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "vitamin_d_IU", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "vitamin_e_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "tocopherol_alpha_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "vitamin_k_mcg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "calcium_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "copper_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "irom_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "magnesium_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "manganese_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "phosphorous_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "potassium_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "selenium_mcg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "zink_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "protein_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "alanine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "arginine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "aspartic_acid_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "cystine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "glutamic_acid_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "glycine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "histidine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "hydroxyproline_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "isoleucine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "leucine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "lysine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "methionine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "phenylalanine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "proline_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "serine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "threonine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "tryptophan_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "tyrosine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "valine_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "carbohydrate_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "fiber_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "sugars_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "fructose_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "galactose_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "glucose_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "lactose_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "maltose_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "sucrose_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "fat_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "saturated_fatty_acids_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "monounsaturated_fatty_acids_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "polyunsaturated_fatty_acids_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "fatty_acids_total_trans_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "alcohol_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "ash_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "caffeine_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "theobromine_mg", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["name", "water_g", "required", "", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-center"], [1, "w3-btn", "w3-green", 3, "disabled", "click"], [1, "fa", "fa-check"], ["id", "id02", 1, "w3-modal"], ["onclick", "document.getElementById('id02').style.display='none'", 1, "w3-button", "w3-display-topright"], ["formControlEdit", "ngForm"], ["required", "", "name", "calories", "onkeypress", "return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-btn", "w3-blue", 3, "disabled", "click"], ["id", "id03", 1, "modal"], ["onclick", "document.getElementById('id03').style.display='none'", "title", "Close Modal", 1, "close"], [1, "modal-content"], [1, "container"], [1, "clearfix"], ["type", "button", "onclick", "document.getElementById('id03').style.display='none'", 1, "cancelbtn"], ["type", "button", 1, "deletebtn", 3, "click"], [1, "search-container", "w3-center", "w3-padding"], ["type", "text", "placeholder", "Search by name", "name", "search", 3, "ngModel", "ngModelChange"], [1, "w3-button", 2, "margin-right", "15pt", 3, "click"], [1, "fa", "fa-search"], ["onclick", "document.getElementById('id01').style.display='block'", 1, "w3-button", "w3-green"], [1, "fa", "fa-cutlery", "fa-fw"], [1, "fa", "fa-plus"], [1, "row"], ["class", "column w3-card w3-hover-blue", 4, "ngFor", "ngForOf"], ["class", "w3-center w3-padding", 4, "ngIf"], [1, "column", "w3-card", "w3-hover-blue"], [2, "text-align", "center"], [1, "w3-center", "w3-padding"], [1, "w3-button", "w3-black", 2, "margin-right", "5pt", 3, "click"], [1, "fa", "fa-edit"], [1, "w3-button", "w3-red", 3, "click"], [1, "fa", "fa-trash-o"], [1, "w3-bar", "w3-border", "w3-round"], [1, "w3-button", 3, "disabled", "click"], [2, "display", "inline", "margin-left", "1vw", "margin-right", "1vw"], [2, "margin-left", "0.5vw"], ["type", "number", 2, "width", "6vw", "margin-right", "1vw", 3, "keyup.enter"], ["name", "option", 2, "margin-right", "1vw", 3, "ngModel", "ngModelChange"], ["value", "4"], ["value", "8"], ["value", "12"]],
      template: function NutritionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NutritionComponent_Template_span_click_4_listener() {
            return ctx.clearDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Clear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New nutrition form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.nutrition.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Calories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.nutrition.calories = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "total_fat_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.nutrition.total_fat_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "saturated_fat_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.nutrition.saturated_fat_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "cholesterol_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_38_listener($event) {
            return ctx.nutrition.cholesterol_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "sodium_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_43_listener($event) {
            return ctx.nutrition.sodium_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "choline_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_48_listener($event) {
            return ctx.nutrition.choline_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "folate_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_53_listener($event) {
            return ctx.nutrition.folate_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "folic_acid_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_58_listener($event) {
            return ctx.nutrition.folic_acid_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "niacin_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_63_listener($event) {
            return ctx.nutrition.niacin_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "pantothenic_acid_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_68_listener($event) {
            return ctx.nutrition.pantothenic_acid_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "riboflavin_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_73_listener($event) {
            return ctx.nutrition.riboflavin_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "thiamin_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_78_listener($event) {
            return ctx.nutrition.thiamin_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "vitamin_a_IU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_83_listener($event) {
            return ctx.nutrition.vitamin_a_IU = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "vitamin_a_rae_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_88_listener($event) {
            return ctx.nutrition.vitamin_a_rae_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "carotene_alpha_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_93_listener($event) {
            return ctx.nutrition.carotene_alpha_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "carotene_beta_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_98_listener($event) {
            return ctx.nutrition.carotene_beta_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "cryptoxanthin_beta_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_103_listener($event) {
            return ctx.nutrition.cryptoxanthin_beta_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "lutein_zeaxanthin_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_108_listener($event) {
            return ctx.nutrition.lutein_zeaxanthin_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "vitamin_b12_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_113_listener($event) {
            return ctx.nutrition.vitamin_b12_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "vitamin_b6_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_118_listener($event) {
            return ctx.nutrition.vitamin_b6_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "vitamin_c_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_123_listener($event) {
            return ctx.nutrition.vitamin_c_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "vitamin_d_IU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_128_listener($event) {
            return ctx.nutrition.vitamin_d_IU = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "vitamin_e_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_133_listener($event) {
            return ctx.nutrition.vitamin_e_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "tocopherol_alpha_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_138_listener($event) {
            return ctx.nutrition.tocopherol_alpha_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "vitamin_k_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_143_listener($event) {
            return ctx.nutrition.vitamin_k_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "calcium_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_148_listener($event) {
            return ctx.nutrition.calcium_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "copper_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_153_listener($event) {
            return ctx.nutrition.copper_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "irom_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_158_listener($event) {
            return ctx.nutrition.irom_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "magnesium_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_163_listener($event) {
            return ctx.nutrition.magnesium_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "manganese_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_168_listener($event) {
            return ctx.nutrition.manganese_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "phosphorous_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_173_listener($event) {
            return ctx.nutrition.phosphorous_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "potassium_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_178_listener($event) {
            return ctx.nutrition.potassium_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "selenium_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_183_listener($event) {
            return ctx.nutrition.selenium_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "zink_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_188_listener($event) {
            return ctx.nutrition.zink_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "protein_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_193_listener($event) {
            return ctx.nutrition.protein_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "alanine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_198_listener($event) {
            return ctx.nutrition.alanine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "arginine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_203_listener($event) {
            return ctx.nutrition.arginine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "aspartic_acid_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_208_listener($event) {
            return ctx.nutrition.aspartic_acid_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "cystine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_213_listener($event) {
            return ctx.nutrition.cystine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "glutamic_acid_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_218_listener($event) {
            return ctx.nutrition.glutamic_acid_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "glycine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_223_listener($event) {
            return ctx.nutrition.glycine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "histidine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_228_listener($event) {
            return ctx.nutrition.histidine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "hydroxyproline_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_233_listener($event) {
            return ctx.nutrition.hydroxyproline_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "isoleucine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_238_listener($event) {
            return ctx.nutrition.isoleucine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "leucine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_243_listener($event) {
            return ctx.nutrition.leucine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "lysine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_248_listener($event) {
            return ctx.nutrition.lysine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "methionine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_253_listener($event) {
            return ctx.nutrition.methionine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "phenylalanine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_258_listener($event) {
            return ctx.nutrition.phenylalanine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "proline_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_263_listener($event) {
            return ctx.nutrition.proline_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "serine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_268_listener($event) {
            return ctx.nutrition.serine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "threonine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_273_listener($event) {
            return ctx.nutrition.threonine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "tryptophan_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_278_listener($event) {
            return ctx.nutrition.tryptophan_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "tyrosine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_283_listener($event) {
            return ctx.nutrition.tyrosine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "valine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_288_listener($event) {
            return ctx.nutrition.valine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "carbohydrate_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_293_listener($event) {
            return ctx.nutrition.carbohydrate_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "fiber_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_298_listener($event) {
            return ctx.nutrition.fiber_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "sugars_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_303_listener($event) {
            return ctx.nutrition.sugars_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "fructose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_308_listener($event) {
            return ctx.nutrition.fructose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "galactose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_313_listener($event) {
            return ctx.nutrition.galactose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "glucose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_318_listener($event) {
            return ctx.nutrition.glucose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "lactose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_323_listener($event) {
            return ctx.nutrition.lactose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "maltose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_328_listener($event) {
            return ctx.nutrition.maltose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "sucrose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_333_listener($event) {
            return ctx.nutrition.sucrose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "fat_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_338_listener($event) {
            return ctx.nutrition.fat_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "saturated_fatty_acids_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_343_listener($event) {
            return ctx.nutrition.saturated_fatty_acids_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "monounsaturated_fatty_acids_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_348_listener($event) {
            return ctx.nutrition.monounsaturated_fatty_acids_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "polyunsaturated_fatty_acids_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_353_listener($event) {
            return ctx.nutrition.polyunsaturated_fatty_acids_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "fatty_acids_total_trans_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_358_listener($event) {
            return ctx.nutrition.fatty_acids_total_trans_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "alcohol_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_363_listener($event) {
            return ctx.nutrition.alcohol_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "ash_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "input", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_368_listener($event) {
            return ctx.nutrition.ash_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "caffeine_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_373_listener($event) {
            return ctx.nutrition.caffeine_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "theobromine_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_378_listener($event) {
            return ctx.nutrition.theobromine_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "water_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "input", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_383_listener($event) {
            return ctx.nutrition.water_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "button", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NutritionComponent_Template_button_click_385_listener() {
            return ctx.addNutrition();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Update nutrition form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "form", 7, 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_403_listener($event) {
            return ctx.selectedNutrition.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Calories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_408_listener($event) {
            return ctx.selectedNutrition.calories = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "total_fat_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_413_listener($event) {
            return ctx.selectedNutrition.total_fat_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "saturated_fat_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_418_listener($event) {
            return ctx.selectedNutrition.saturated_fat_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "cholesterol_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_423_listener($event) {
            return ctx.selectedNutrition.cholesterol_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "sodium_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_428_listener($event) {
            return ctx.selectedNutrition.sodium_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "choline_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_433_listener($event) {
            return ctx.selectedNutrition.choline_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "folate_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_438_listener($event) {
            return ctx.selectedNutrition.folate_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "folic_acid_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_443_listener($event) {
            return ctx.selectedNutrition.folic_acid_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "niacin_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_448_listener($event) {
            return ctx.selectedNutrition.niacin_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "pantothenic_acid_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_453_listener($event) {
            return ctx.selectedNutrition.pantothenic_acid_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "riboflavin_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_458_listener($event) {
            return ctx.selectedNutrition.riboflavin_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "thiamin_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_463_listener($event) {
            return ctx.selectedNutrition.thiamin_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "vitamin_a_IU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_468_listener($event) {
            return ctx.selectedNutrition.vitamin_a_IU = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "vitamin_a_rae_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_473_listener($event) {
            return ctx.selectedNutrition.vitamin_a_rae_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "carotene_alpha_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_478_listener($event) {
            return ctx.selectedNutrition.carotene_alpha_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "carotene_beta_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_483_listener($event) {
            return ctx.selectedNutrition.carotene_beta_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "cryptoxanthin_beta_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_488_listener($event) {
            return ctx.selectedNutrition.cryptoxanthin_beta_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "lutein_zeaxanthin_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_493_listener($event) {
            return ctx.selectedNutrition.lutein_zeaxanthin_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "vitamin_b12_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_498_listener($event) {
            return ctx.selectedNutrition.vitamin_b12_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "vitamin_b6_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_503_listener($event) {
            return ctx.selectedNutrition.vitamin_b6_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "vitamin_c_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_508_listener($event) {
            return ctx.selectedNutrition.vitamin_c_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "vitamin_d_IU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_513_listener($event) {
            return ctx.selectedNutrition.vitamin_d_IU = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "vitamin_e_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_518_listener($event) {
            return ctx.selectedNutrition.vitamin_e_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "tocopherol_alpha_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_523_listener($event) {
            return ctx.selectedNutrition.tocopherol_alpha_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "vitamin_k_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_528_listener($event) {
            return ctx.selectedNutrition.vitamin_k_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "calcium_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_533_listener($event) {
            return ctx.selectedNutrition.calcium_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "copper_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_538_listener($event) {
            return ctx.selectedNutrition.copper_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "irom_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_543_listener($event) {
            return ctx.selectedNutrition.irom_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "magnesium_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_548_listener($event) {
            return ctx.selectedNutrition.magnesium_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "manganese_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_553_listener($event) {
            return ctx.selectedNutrition.manganese_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "phosphorous_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_558_listener($event) {
            return ctx.selectedNutrition.phosphorous_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "potassium_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_563_listener($event) {
            return ctx.selectedNutrition.potassium_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "selenium_mcg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_568_listener($event) {
            return ctx.selectedNutrition.selenium_mcg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "zink_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_573_listener($event) {
            return ctx.selectedNutrition.zink_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "protein_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_578_listener($event) {
            return ctx.selectedNutrition.protein_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "alanine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_583_listener($event) {
            return ctx.selectedNutrition.alanine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "arginine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_588_listener($event) {
            return ctx.selectedNutrition.arginine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "aspartic_acid_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_593_listener($event) {
            return ctx.selectedNutrition.aspartic_acid_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "cystine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_598_listener($event) {
            return ctx.selectedNutrition.cystine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "glutamic_acid_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_603_listener($event) {
            return ctx.selectedNutrition.glutamic_acid_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "glycine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_608_listener($event) {
            return ctx.selectedNutrition.glycine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "histidine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_613_listener($event) {
            return ctx.selectedNutrition.histidine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, "hydroxyproline_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_618_listener($event) {
            return ctx.selectedNutrition.hydroxyproline_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, "isoleucine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_623_listener($event) {
            return ctx.selectedNutrition.isoleucine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "leucine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_628_listener($event) {
            return ctx.selectedNutrition.leucine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "lysine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_633_listener($event) {
            return ctx.selectedNutrition.lysine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "methionine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_638_listener($event) {
            return ctx.selectedNutrition.methionine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "phenylalanine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_643_listener($event) {
            return ctx.selectedNutrition.phenylalanine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, "proline_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_648_listener($event) {
            return ctx.selectedNutrition.proline_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "serine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_653_listener($event) {
            return ctx.selectedNutrition.serine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, "threonine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_658_listener($event) {
            return ctx.selectedNutrition.threonine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](662, "tryptophan_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_663_listener($event) {
            return ctx.selectedNutrition.tryptophan_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, "tyrosine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_668_listener($event) {
            return ctx.selectedNutrition.tyrosine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "valine_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_673_listener($event) {
            return ctx.selectedNutrition.valine_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "carbohydrate_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_678_listener($event) {
            return ctx.selectedNutrition.carbohydrate_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, "fiber_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_683_listener($event) {
            return ctx.selectedNutrition.fiber_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687, "sugars_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_688_listener($event) {
            return ctx.selectedNutrition.sugars_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "fructose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_693_listener($event) {
            return ctx.selectedNutrition.fructose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, "galactose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_698_listener($event) {
            return ctx.selectedNutrition.galactose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "glucose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_703_listener($event) {
            return ctx.selectedNutrition.glucose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, "lactose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_708_listener($event) {
            return ctx.selectedNutrition.lactose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, "maltose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_713_listener($event) {
            return ctx.selectedNutrition.maltose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](717, "sucrose_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_718_listener($event) {
            return ctx.selectedNutrition.sucrose_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "fat_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_723_listener($event) {
            return ctx.selectedNutrition.fat_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "saturated_fatty_acids_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_728_listener($event) {
            return ctx.selectedNutrition.saturated_fatty_acids_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "monounsaturated_fatty_acids_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_733_listener($event) {
            return ctx.selectedNutrition.monounsaturated_fatty_acids_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](737, "polyunsaturated_fatty_acids_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_738_listener($event) {
            return ctx.selectedNutrition.polyunsaturated_fatty_acids_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, "fatty_acids_total_trans_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_743_listener($event) {
            return ctx.selectedNutrition.fatty_acids_total_trans_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, "alcohol_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_748_listener($event) {
            return ctx.selectedNutrition.alcohol_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "ash_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "input", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_753_listener($event) {
            return ctx.selectedNutrition.ash_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, "caffeine_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_758_listener($event) {
            return ctx.selectedNutrition.caffeine_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "theobromine_mg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_763_listener($event) {
            return ctx.selectedNutrition.theobromine_mg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "water_g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "input", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_768_listener($event) {
            return ctx.selectedNutrition.water_g = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "button", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NutritionComponent_Template_button_click_770_listener() {
            return ctx.updateNutrition();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](772, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "span", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "form", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, "Delete nutrition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, "Are you sure you want to delete this nutrition?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "button", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NutritionComponent_Template_button_click_787_listener() {
            return ctx.deleteNutrition();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "input", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NutritionComponent_Template_input_ngModelChange_790_listener($event) {
            return ctx.search = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NutritionComponent_Template_button_click_791_listener() {
            return ctx.getNutritions();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](792, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](794, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](795, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](798, NutritionComponent_div_798_Template, 8, 1, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](799, NutritionComponent_div_799_Template, 20, 5, "div", 108);
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](398);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.calories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.total_fat_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.saturated_fat_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.cholesterol_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.sodium_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.choline_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.folate_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.folic_acid_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.niacin_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.pantothenic_acid_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.riboflavin_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.thiamin_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.vitamin_a_IU);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.vitamin_a_rae_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.carotene_alpha_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.carotene_beta_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.cryptoxanthin_beta_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.lutein_zeaxanthin_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.vitamin_b12_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.vitamin_b6_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.vitamin_c_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.vitamin_d_IU);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.vitamin_e_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.tocopherol_alpha_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.vitamin_k_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.calcium_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.copper_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.irom_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.magnesium_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.manganese_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.phosphorous_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.potassium_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.selenium_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.zink_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.protein_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.alanine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.arginine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.aspartic_acid_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.cystine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.glutamic_acid_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.glycine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.histidine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.hydroxyproline_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.isoleucine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.leucine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.lysine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.methionine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.phenylalanine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.proline_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.serine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.threonine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.tryptophan_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.tyrosine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.valine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.carbohydrate_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.fiber_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.sugars_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.fructose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.galactose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.glucose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.lactose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.maltose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.sucrose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.fat_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.saturated_fatty_acids_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.monounsaturated_fatty_acids_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.polyunsaturated_fatty_acids_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.fatty_acids_total_trans_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.alcohol_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.ash_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.caffeine_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.theobromine_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nutrition.water_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.calories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.total_fat_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.saturated_fat_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.cholesterol_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.sodium_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.choline_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.folate_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.folic_acid_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.niacin_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.pantothenic_acid_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.riboflavin_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.thiamin_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.vitamin_a_IU);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.vitamin_a_rae_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.carotene_alpha_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.carotene_beta_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.cryptoxanthin_beta_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.lutein_zeaxanthin_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.vitamin_b12_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.vitamin_b6_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.vitamin_c_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.vitamin_d_IU);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.vitamin_e_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.tocopherol_alpha_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.vitamin_k_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.calcium_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.copper_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.irom_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.magnesium_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.manganese_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.phosphorous_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.potassium_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.selenium_mcg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.zink_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.protein_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.alanine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.arginine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.aspartic_acid_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.cystine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.glutamic_acid_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.glycine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.histidine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.hydroxyproline_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.isoleucine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.leucine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.lysine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.methionine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.phenylalanine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.proline_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.serine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.threonine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.tryptophan_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.tyrosine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.valine_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.carbohydrate_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.fiber_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.sugars_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.fructose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.galactose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.glucose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.lactose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.maltose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.sucrose_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.fat_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.saturated_fatty_acids_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.monounsaturated_fatty_acids_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.polyunsaturated_fatty_acids_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.fatty_acids_total_trans_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.alcohol_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.ash_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.caffeine_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.theobromine_mg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedNutrition.water_g);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", ctx.selectedNutrition == null ? null : ctx.selectedNutrition.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nutritions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search === "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: [".column[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 24%;\r\n  margin: 3pt;\r\n}\r\n\r\n\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.search-containter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  float: right;\r\n  padding: 6px 10px;\r\n  margin-top: 8px;\r\n  margin-right: 16px;\r\n  background: #ddd;\r\n  font-size: 17px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.cancelbtn[_ngcontent-%COMP%], .deletebtn[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n\r\n\r\n.cancelbtn[_ngcontent-%COMP%] {\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  opacity: 0.9;\r\n  background-color: #ccc;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n.cancelbtn[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n\r\n\r\n\r\n.deletebtn[_ngcontent-%COMP%] {\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  opacity: 0.9;\r\n  background-color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n.deletebtn[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: #ddd;\r\n  padding-top: 50px;\r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: #fefefe;\r\n  margin: 5% auto 15% auto; \r\n  border: 1px solid #888;\r\n  width: 80%; \r\n}\r\n\r\n\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 35px;\r\n  top: 15px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  color: #f1f1f1;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn[_ngcontent-%COMP%], .deletebtn[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .column[_ngcontent-%COMP%] {\r\n    width: 97%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vbnV0cml0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBR0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFPQSwyREFBMkQ7O0FBQzNEO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSx1REFBdUQ7O0FBQ3ZEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQSwyQkFBMkI7O0FBQzNCO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0IsRUFBRSxzREFBc0Q7RUFDaEYsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDbEU7O0FBRUEsK0JBQStCOztBQUMvQjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUEsK0JBQStCOztBQUMvQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRTtLQUNHLFdBQVc7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9udXRyaXRpb24vbnV0cml0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjQlO1xyXG4gIG1hcmdpbjogM3B0O1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtY29udGFpbnRlciBidXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogRmxvYXQgY2FuY2VsIGFuZCBkZWxldGUgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXHJcbi5jYW5jZWxidG4sIC5kZWxldGVidG4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGNvbG9yIHRvIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FuY2VsYnRuOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBBZGQgYSBjb2xvciB0byB0aGUgZGVsZXRlIGJ1dHRvbiAqL1xyXG4uZGVsZXRlYnRuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRlbGV0ZWJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogQWRkIHBhZGRpbmcgYW5kIGNlbnRlci1hbGlnbiB0ZXh0IHRvIHRoZSBjb250YWluZXIgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBob3Jpem9udGFsIHJ1bGVyICovXHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogI2Y0NDMzNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBjYW5jZWwgYnV0dG9uIGFuZCBkZWxldGUgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuY2FuY2VsYnRuLCAuZGVsZXRlYnRuIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NutritionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nutrition',
          templateUrl: './nutrition.component.html',
          styleUrls: ['./nutrition.component.css']
        }]
      }], function () {
        return [{
          type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["NutritionService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(auth, toastr) {
        _classCallCheck(this, ProfileComponent);

        this.auth = auth;
        this.toastr = toastr;
        this.currentPassword = '';
        this.newPassword = '';
        this.confirmationPassword = '';
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserDetails();
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var _this9 = this;

          this.auth.profile().subscribe(function (user) {
            _this9.details = user;
          }, function (err) {
            console.error(err);
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this10 = this;

          if (this.newPassword !== this.confirmationPassword) {
            this.toastr.error('New password and Confirmation password do not match!', 'Error');
            return;
          }

          var req = {
            currentPassword: this.currentPassword,
            salt: this.details.salt
          };
          this.auth.getHash(req).subscribe({
            next: function next(data) {
              if (_this10.details.hash === data.hash) {
                _this10.details.newPassword = _this10.newPassword;

                _this10.auth.updateUser(_this10.details).subscribe({
                  next: function next(data) {
                    if (_this10.newPassword !== '') {
                      _this10.details.password = _this10.newPassword;
                    } else {
                      _this10.details.password = _this10.currentPassword;
                    }

                    _this10.auth.login(_this10.details).subscribe(function () {
                      _this10.toastr.success('Changes saved successfully!', 'Success');
                    }, function (err) {
                      _this10.toastr.error('Could not update your profile!', 'Error');
                    });

                    _this10.getUserDetails();

                    _this10.currentPassword = '';
                    _this10.newPassword = '';
                    _this10.confirmationPassword = '';
                  },
                  error: function error(_error) {
                    _this10.toastr.error('Could not update your profile!', 'Error');
                  }
                });
              } else {
                _this10.toastr.error('Current password is not correct!', 'Error');
              }
            },
            error: function error(_error2) {
              console.log(_error2);
            }
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 51,
      vars: 6,
      consts: [[1, "w3-center", "w3-padding", 2, "margin", "0 auto", "max-width", "600px"], [1, "w3-card-4"], [1, "w3-container", "w3-blue"], [1, "w3-container"], ["formControl", "ngForm"], [1, "w3-text-blue"], ["required", "", "name", "name", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "name", "email", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-text-grey", 2, "font-style", "italic"], ["name", "newpassword", "minlength", "8", "maxlength", "20", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$", "type", "password", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [2, "font-size", "9pt"], [2, "color", "red"], ["name", "confirmationpassword", "minlength", "8", "maxlength", "20", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$", "type", "password", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "minlength", "1", "maxlength", "40", "name", "oldpassword", "type", "password", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-center"], [1, "w3-btn", "w3-blue", 3, "disabled", "click"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.details.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.details.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "someone@domain.domain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "New password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Minimum 8 and maximum 20 characters. It must contain at least one lowercase and uppercase letter, a number as well as a special character. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " (Only if you want to change the current password)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Confirmation password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.confirmationPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Enter the new password again to confirm it. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " (Only if you want to change the current password)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Current password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.currentPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_49_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.details.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.details.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmationPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(auth, router, toastr) {
        _classCallCheck(this, RegisterComponent);

        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.credentials = {
          name: '',
          email: '',
          password: '',
          role: ''
        };
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this11 = this;

          if (this.credentials.password === this.confirmationPassword) {
            this.credentials.name = this.firstName + ' ' + this.lastName;
            this.auth.register(this.credentials).subscribe(function () {
              _this11.toastr.success('You successfully made an account!', 'Welcome ' + _this11.auth.getUserDetails().name);

              _this11.router.navigateByUrl('/my-diet');
            }, function (err) {
              _this11.toastr.error(err.error.message, 'Error');
            });
          } else {
            this.toastr.error('Password and Confirmation password do not match!', 'Error');
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 43,
      vars: 6,
      consts: [[1, "w3-center", "w3-padding", 2, "margin", "0 auto", "max-width", "600px"], [1, "w3-card-4"], [1, "w3-container", "w3-blue"], [1, "w3-container"], ["formControl", "ngForm"], [1, "w3-text-blue"], ["required", "", "minlength", "2", "maxlength", "40", "name", "first", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "minlength", "2", "maxlength", "40", "name", "last", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "minlength", "1", "maxlength", "40", "name", "email", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-text-grey", 2, "font-style", "italic"], ["required", "", "minlength", "8", "maxlength", "20", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$", "name", "password", "type", "password", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [2, "font-size", "9pt"], [1, "w3-center"], [1, "w3-btn", "w3-blue", 3, "disabled", "click"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.credentials.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.credentials.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Minimum 8 and maximum 20 characters. It must contain at least one lowercase and uppercase letter, a number as well as a special character. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Confirmation password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.confirmationPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Enter the new password again to confirm it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_41_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmationPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/search-and-add-nutrition/search-and-add-nutrition.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/search-and-add-nutrition/search-and-add-nutrition.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: SearchAndAddNutritionComponent */

  /***/
  function srcAppComponentsSearchAndAddNutritionSearchAndAddNutritionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchAndAddNutritionComponent", function () {
      return SearchAndAddNutritionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_nutrition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/nutrition.service */
    "./src/app/services/nutrition.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_user_nutrition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/user-nutrition.service */
    "./src/app/services/user-nutrition.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SearchAndAddNutritionComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
      }
    }

    function SearchAndAddNutritionComponent_div_11_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "(g)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchAndAddNutritionComponent_div_11_div_2_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var nutrition_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.addNutrition(nutrition_r3._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Add ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nutrition_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nutrition_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", nutrition_r3._id);
      }
    }

    function SearchAndAddNutritionComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchAndAddNutritionComponent_div_11_div_2_Template, 13, 2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.nutritions);
      }
    }

    var SearchAndAddNutritionComponent = /*#__PURE__*/function () {
      function SearchAndAddNutritionComponent(nutritionService, auth, userNutritionService, toastr) {
        _classCallCheck(this, SearchAndAddNutritionComponent);

        this.nutritionService = nutritionService;
        this.auth = auth;
        this.userNutritionService = userNutritionService;
        this.toastr = toastr;
        this.search = '';
        this.nutritions = [];
        this.isLoaded = true;
        this.dateOfConsumption = new Date();
      }

      _createClass(SearchAndAddNutritionComponent, [{
        key: "getNutritions",
        value: function getNutritions() {
          var _this12 = this;

          this.isLoaded = false;
          this.nutritionService.getNutritionNamesAndIds(this.search).subscribe(function (nutritions) {
            _this12.nutritions = nutritions;
            _this12.isLoaded = true;

            _this12.toastr.success('Found ' + nutritions.length + ' nutrition/s', 'Success');
          });
        }
      }, {
        key: "addNutrition",
        value: function addNutrition(id) {
          var _this13 = this;

          var x = document.getElementById(id.toString());
          console.log(x);
          console.log(Number(x.value));

          if (Number(x.value) === 0) {
            this.toastr.error('You must enter a proper value for quantity.', 'Error');
          } else {
            var d = new Date(this.dateOfConsumption);
            d.setHours(12, 0, 0, 0);
            var nutrition = {
              quantity: Number(x.value),
              date_of_consumption: d.toISOString(),
              user_id: this.auth.getUserDetails()._id,
              nutrition_id: id
            };
            this.userNutritionService.addNutrition(nutrition).subscribe(function () {
              _this13.nutritions = [];

              _this13.toastr.success('You successfully added the food!', 'Success');

              window.scrollTo(0, 0);
            }, function (err) {
              _this13.toastr.error(err.error.message, 'Error');
            });
          }
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(date) {
          this.dateOfConsumption = date;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchAndAddNutritionComponent;
    }();

    SearchAndAddNutritionComponent.ɵfac = function SearchAndAddNutritionComponent_Factory(t) {
      return new (t || SearchAndAddNutritionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["NutritionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_nutrition_service__WEBPACK_IMPORTED_MODULE_3__["UserNutritionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    SearchAndAddNutritionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchAndAddNutritionComponent,
      selectors: [["app-search-and-add-nutrition"]],
      decls: 12,
      vars: 7,
      consts: [[2, "display", "table", "margin-top", "10px", "margin-left", "auto", "margin-right", "auto", "margin-bottom", "10px"], ["id", "date_label", 1, "w3-center", "w3-padding", 2, "font-size", "20px", "display", "table-cell"], ["type", "date", 3, "ngModel", "ngModelChange"], [1, "search-container", "w3-center", "w3-padding"], ["type", "text", "placeholder", "Search by name", "name", "search", 3, "ngModel", "ngModelChange"], [1, "w3-button", 2, "margin-right", "15pt", 3, "click"], [1, "fa", "fa-search"], ["class", "loader", 4, "ngIf"], [4, "ngIf"], [1, "loader"], [1, "row"], ["class", "column w3-card w3-hover-blue", 4, "ngFor", "ngForOf"], [1, "column", "w3-card", "w3-hover-blue"], [2, "text-align", "center"], [1, "w3-center"], [2, "margin-right", "5px"], ["type", "number", 2, "width", "50pt"], [2, "margin-left", "5px"], [1, "w3-center", "w3-padding"], [1, "w3-button", "w3-green", 2, "margin-right", "5pt", 3, "click"], [1, "fa", "fa-check"]],
      template: function SearchAndAddNutritionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchAndAddNutritionComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.onDateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchAndAddNutritionComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.search = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchAndAddNutritionComponent_Template_button_click_8_listener() {
            return ctx.getNutritions();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchAndAddNutritionComponent_div_10_Template, 1, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchAndAddNutritionComponent_div_11_Template, 3, 1, "div", 8);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, ctx.dateOfConsumption, "yyyy-MM-dd"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".loader[_ngcontent-%COMP%] {\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid rgb(46, 143, 235);\r\n  border-bottom: 16px solid blue;\r\n  width: 120px;\r\n  height: 120px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 20%;\r\n  margin-bottom: 20%;\r\n  -webkit-animation: spin 1s linear infinite;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 24%;\r\n  margin: 3pt;\r\n}\r\n\r\n\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.search-containter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  float: right;\r\n  padding: 6px 10px;\r\n  margin-top: 8px;\r\n  margin-right: 16px;\r\n  background: #ddd;\r\n  font-size: 17px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.cancelbtn[_ngcontent-%COMP%], .deletebtn[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n\r\n\r\n.cancelbtn[_ngcontent-%COMP%] {\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  opacity: 0.9;\r\n  background-color: #ccc;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n.cancelbtn[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n\r\n\r\n\r\n.deletebtn[_ngcontent-%COMP%] {\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  opacity: 0.9;\r\n  background-color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n.deletebtn[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: #ddd;\r\n  padding-top: 50px;\r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: #fefefe;\r\n  margin: 5% auto 15% auto; \r\n  border: 1px solid #888;\r\n  width: 80%; \r\n}\r\n\r\n\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 35px;\r\n  top: 15px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  color: #f1f1f1;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn[_ngcontent-%COMP%], .deletebtn[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .column[_ngcontent-%COMP%] {\r\n    width: 97%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYW5kLWFkZC1udXRyaXRpb24vc2VhcmNoLWFuZC1hZGQtbnV0cml0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4Qyw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLEtBQUssK0JBQStCLEVBQUU7RUFDdEMsT0FBTyxpQ0FBaUMsRUFBRTtBQUM1Qzs7QUFFQTtFQUNFLEtBQUssdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUNwQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFHQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQU9BLDJEQUEyRDs7QUFDM0Q7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBLHFDQUFxQzs7QUFDckM7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLHFDQUFxQzs7QUFDckM7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLHVEQUF1RDs7QUFDdkQ7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QixFQUFFLHNEQUFzRDtFQUNoRixzQkFBc0I7RUFDdEIsVUFBVSxFQUFFLG9EQUFvRDtBQUNsRTs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUEsNkVBQTZFOztBQUM3RTtFQUNFO0tBQ0csV0FBVztFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1hbmQtYWRkLW51dHJpdGlvbi9zZWFyY2gtYW5kLWFkZC1udXRyaXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHJnYig0NiwgMTQzLCAyMzUpO1xyXG4gIGJvcmRlci1ib3R0b206IDE2cHggc29saWQgYmx1ZTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwJTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI0JTtcclxuICBtYXJnaW46IDNwdDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWNvbnRhaW50ZXIgYnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIEZsb2F0IGNhbmNlbCBhbmQgZGVsZXRlIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xyXG4uY2FuY2VsYnRuLCAuZGVsZXRlYnRuIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4vKiBBZGQgYSBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhbmNlbGJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogQWRkIGEgY29sb3IgdG8gdGhlIGRlbGV0ZSBidXR0b24gKi9cclxuLmRlbGV0ZWJ0biB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZWxldGVidG46aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIGFuZCBjZW50ZXItYWxpZ24gdGV4dCB0byB0aGUgY29udGFpbmVyICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaG9yaXpvbnRhbCBydWxlciAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMzVweDtcclxuICB0b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKi9cclxuLmNsZWFyZml4OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3IgY2FuY2VsIGJ1dHRvbiBhbmQgZGVsZXRlIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgLmNhbmNlbGJ0biwgLmRlbGV0ZWJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchAndAddNutritionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-and-add-nutrition',
          templateUrl: './search-and-add-nutrition.component.html',
          styleUrls: ['./search-and-add-nutrition.component.css']
        }]
      }], function () {
        return [{
          type: _services_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["NutritionService"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _services_user_nutrition_service__WEBPACK_IMPORTED_MODULE_3__["UserNutritionService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sign-in/sign-in.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/sign-in/sign-in.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppComponentsSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignInComponent = /*#__PURE__*/function () {
      function SignInComponent(auth, router, toastr) {
        _classCallCheck(this, SignInComponent);

        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.credentials = {
          email: '',
          password: '',
          role: ''
        };
      }

      _createClass(SignInComponent, [{
        key: "login",
        value: function login() {
          var _this14 = this;

          this.auth.login(this.credentials).subscribe(function () {
            _this14.router.navigateByUrl('/my-diet');

            _this14.toastr.success('You successfully signed-in!', 'Welcome ' + _this14.auth.getUserDetails().name);
          }, function (err) {
            _this14.toastr.error('Check email and password fields!', 'Error');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignInComponent;
    }();

    SignInComponent.ɵfac = function SignInComponent_Factory(t) {
      return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["app-sign-in"]],
      decls: 27,
      vars: 3,
      consts: [[1, "w3-center", "w3-padding", 2, "margin", "0 auto", "max-width", "600px"], [1, "w3-card-4"], [1, "w3-container", "w3-blue"], [1, "w3-container"], ["formControl", "ngForm"], [1, "w3-text-blue"], ["required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "minlength", "1", "maxlength", "40", "name", "email", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-text-grey", 2, "font-style", "italic"], ["required", "", "minlength", "1", "maxlength", "40", "name", "password", "type", "password", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-center"], [1, "w3-btn", "w3-blue", 3, "disabled", "click"], [1, "w3-padding-32"], ["routerLink", "/register", 2, "cursor", "pointer"], [1, "w3-btn", "w3-blue"], [1, "fa", "fa-user"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign-in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.credentials.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.credentials.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_19_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign-in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "If you don't have an account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-in',
          templateUrl: './sign-in.component.html',
          styleUrls: ['./sign-in.component.css']
        }]
      }], function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/users/users.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/users/users.component.ts ***!
    \*****************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppComponentsUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UsersComponent_div_121_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_121_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var user_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.selectUser(2, user_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_121_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var user_r4 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.selectUser(3, user_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r4.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Role: ", user_r4.role, "");
      }
    }

    function UsersComponent_div_122_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_122_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.previousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_122_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.nextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Jump to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function UsersComponent_div_122_Template_input_keyup_enter_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.jumpToPage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Per page ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_122_Template_select_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.currnetLimit = $event;
        })("ngModelChange", function UsersComponent_div_122_Template_select_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onLimitChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "12");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.currentPage <= 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Page ", ctx_r3.currentPage + 1, " of ", ctx_r3.numberOfPages, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.currentPage >= ctx_r3.numberOfPages - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.currnetLimit);
      }
    }

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(userService, toastr) {
        _classCallCheck(this, UsersComponent);

        this.userService = userService;
        this.toastr = toastr;
        this.selectedUser = {
          email: '',
          name: '',
          hash: '',
          role: '',
          salt: ''
        };
        this.users = [];
        this.credentials = {
          name: '',
          email: '',
          password: '',
          role: ''
        };
        this.search = '';
        this.currentPage = 0;
        this.currnetLimit = 8;
        this.numberOfPages = 0;
      }

      _createClass(UsersComponent, [{
        key: "getUsers",
        value: function getUsers() {
          var _this15 = this;

          if (this.search === '') {
            this.userService.getUsersWithPagination(this.currentPage, this.currnetLimit).subscribe(function (users) {
              _this15.users = users;
            });
            this.userService.getUsersCount().subscribe(function (res) {
              _this15.numberOfPages = Math.ceil(res.numberOfUsers / _this15.currnetLimit);
            });
          } else {
            this.userService.getUsers(this.search).subscribe(function (users) {
              _this15.users = users;

              _this15.toastr.success('Found ' + users.length + ' user/s', 'Success');
            });
          }
        }
      }, {
        key: "addUser",
        value: function addUser() {
          var _this16 = this;

          if (this.credentials.password === this.confirmationPassword) {
            this.credentials.name = this.firstName + ' ' + this.lastName;
            this.userService.addUser(this.credentials).subscribe(function () {
              _this16.toastr.success('You successfully added a user!', 'Success');

              document.getElementById('id01').style.display = 'none';

              _this16.clearDialog();

              _this16.getUsers();
            }, function (err) {
              _this16.toastr.error(err.error.message, 'Error');
            });
          } else {
            this.toastr.error('Password and Confirmation password do not match!', 'Error');
          }
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this17 = this;

          this.userService.updateUser(this.selectedUser).subscribe(function (data) {
            document.getElementById('id02').style.display = 'none';

            _this17.toastr.success('You successfully updated this user!', 'Success');

            _this17.getUsers();
          }, function (err) {
            _this17.toastr.error(err.error.message, 'Error');
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser() {
          var _this18 = this;

          this.userService.deleteUser(this.selectedUser._id).subscribe(function (data) {
            document.getElementById('id03').style.display = 'none';

            _this18.toastr.success('You successfully deleted this user!', 'Success');

            if (data.n == 1) {
              for (var i = 0; i < _this18.users.length; i++) {
                if (_this18.selectedUser._id == _this18.users[i]._id) {
                  _this18.users.splice(i, 1);
                }
              }
            }
          }, function (err) {
            _this18.toastr.error(err.error.message, 'Error');
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this19 = this;

          this.userService.resetPassword(this.selectedUser).subscribe(function () {
            _this19.toastr.success('You successfully reset the password for user!', 'Success');

            document.getElementById('id02').style.display = 'none';
          }, function (err) {
            _this19.toastr.error(err.error.message, 'Error');
          });
        }
      }, {
        key: "selectUser",
        value: function selectUser(option, user) {
          if (user != null && option != null) {
            this.selectedUser = user;

            if (option === 2) {
              document.getElementById('id02').style.display = 'block';
            } else if (option === 3) {
              document.getElementById('id03').style.display = 'block';
            } else {
              console.log("Something unexpected hapend!");
            }
          }
        }
      }, {
        key: "clearDialog",
        value: function clearDialog() {
          this.firstName = '';
          this.lastName = '';
          this.confirmationPassword = '';
          this.credentials.email = '';
          this.credentials.name = '';
          this.credentials.password = '';
          this.credentials.role = '';
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          if (this.currentPage >= this.numberOfPages - 1) {
            this.toastr.error('No next page!', 'Error');
            return;
          }

          ++this.currentPage;
          this.getUsers();
        }
      }, {
        key: "previousPage",
        value: function previousPage() {
          if (this.currentPage <= 0) {
            this.toastr.error('No previous page!', 'Error');
            return;
          }

          --this.currentPage;
          this.getUsers();
        }
      }, {
        key: "jumpToPage",
        value: function jumpToPage(event) {
          if (event.target.value >= 1 && event.target.value <= this.numberOfPages) {
            this.currentPage = event.target.value - 1;
            this.getUsers();
          } else {
            this.toastr.error('This page does not exist!', 'Error');
          }
        }
      }, {
        key: "onLimitChange",
        value: function onLimitChange(value) {
          this.currentPage = 0;
          this.getUsers();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 123,
      vars: 16,
      consts: [[1, "w3-container", "w3-center"], ["id", "id01", 1, "w3-modal"], [1, "w3-modal-content", "w3-animate-top", "w3-card-4"], [1, "w3-container", "w3-blue"], [1, "w3-button", "w3-display-topleft", 3, "click"], [1, "fa", "fa-eraser"], ["onclick", "document.getElementById('id01').style.display='none'", 1, "w3-button", "w3-display-topright"], [1, "w3-container"], ["formControl", "ngForm"], [1, "w3-text-blue"], ["required", "", "minlength", "2", "maxlength", "40", "name", "first", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "minlength", "2", "maxlength", "40", "name", "last", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "minlength", "1", "maxlength", "40", "name", "email", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "w3-text-grey", 2, "font-style", "italic"], ["required", "", "minlength", "8", "maxlength", "20", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$", "name", "password", "type", "password", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], [2, "font-size", "9pt"], [1, "w3-center"], [1, "w3-btn", "w3-green", 3, "disabled", "click"], [1, "fa", "fa-check"], ["id", "id02", 1, "w3-modal"], ["onclick", "document.getElementById('id02').style.display='none'", 1, "w3-button", "w3-display-topright"], ["formControlEdit", "ngForm"], ["required", "", "name", "name", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "name", "email", "type", "text", 1, "w3-input", "w3-border", "w3-light-grey", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["required", "", "name", "option", 1, "w3-center", "w3-input", "w3-border", "w3-light-grey", "w3-select", "w3-border", 2, "text-align", "center", 3, "ngModel", "ngModelChange"], ["value", "admin"], ["value", "user"], [1, "w3-btn", "w3-blue", 3, "disabled", "click"], [1, "w3-btn", "w3-black", 3, "click"], [1, "fa", "fa-key"], ["id", "id03", 1, "modal"], ["onclick", "document.getElementById('id03').style.display='none'", "title", "Close Modal", 1, "close"], [1, "modal-content"], [1, "container"], [1, "clearfix"], ["type", "button", "onclick", "document.getElementById('id03').style.display='none'", 1, "cancelbtn"], ["type", "button", 1, "deletebtn", 3, "click"], [1, "search-container", "w3-center", "w3-padding"], ["type", "text", "placeholder", "Search..", "name", "search", 3, "ngModel", "ngModelChange"], [1, "w3-button", 2, "margin-right", "15pt", 3, "click"], [1, "fa", "fa-search"], ["onclick", "document.getElementById('id01').style.display='block'", 1, "w3-button", "w3-green"], [1, "fa", "fa-user", "fa-fw"], [1, "fa", "fa-plus"], [1, "row"], ["class", "column w3-card w3-hover-blue", 4, "ngFor", "ngForOf"], ["class", "w3-center w3-padding", 4, "ngIf"], [1, "column", "w3-card", "w3-hover-blue"], [2, "text-align", "center"], [1, "w3-center", "w3-padding"], [1, "w3-button", "w3-black", 2, "margin-right", "5pt", 3, "click"], [1, "fa", "fa-edit"], [1, "w3-button", "w3-red", 3, "click"], [1, "fa", "fa-trash-o"], [1, "w3-bar", "w3-border", "w3-round"], [1, "w3-button", 3, "disabled", "click"], [2, "display", "inline", "margin-left", "1vw", "margin-right", "1vw"], [2, "margin-left", "0.5vw"], ["type", "number", 2, "width", "6vw", "margin-right", "1vw", 3, "keyup.enter"], ["name", "option", 2, "margin-right", "1vw", 3, "ngModel", "ngModelChange"], ["value", "4"], ["value", "8"], ["value", "12"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_span_click_4_listener() {
            return ctx.clearDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Clear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New user form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.credentials.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.credentials.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Minimum 8 and maximum 20 characters. It must contain at least one lowercase and uppercase letter, a number as well as a special character. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Confirmation password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_43_listener($event) {
            return ctx.confirmationPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Enter the new password again to confirm it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_48_listener() {
            return ctx.addUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Update user form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "form", 7, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_66_listener($event) {
            return ctx.selectedUser.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_71_listener($event) {
            return ctx.selectedUser.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "someone@domain.domain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_select_ngModelChange_79_listener($event) {
            return ctx.selectedUser.role = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_85_listener() {
            return ctx.updateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_89_listener() {
            return ctx.resetPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Reset Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "form", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Delete Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Are you sure you want to delete this account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_110_listener() {
            return ctx.deleteUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_113_listener($event) {
            return ctx.search = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_114_listener() {
            return ctx.getUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, UsersComponent_div_121_Template, 12, 3, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, UsersComponent_div_122_Template, 20, 5, "div", 46);
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmationPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUser.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUser.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUser.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", ctx.selectedUser == null ? null : ctx.selectedUser.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx.selectedUser == null ? null : ctx.selectedUser.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Role: ", ctx.selectedUser == null ? null : ctx.selectedUser.role, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search === "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".column[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 24%;\r\n  margin: 3pt;\r\n}\r\n\r\n\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.search-containter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  float: right;\r\n  padding: 6px 10px;\r\n  margin-top: 8px;\r\n  margin-right: 16px;\r\n  background: #ddd;\r\n  font-size: 17px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.cancelbtn[_ngcontent-%COMP%], .deletebtn[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n\r\n\r\n.cancelbtn[_ngcontent-%COMP%] {\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  opacity: 0.9;\r\n  background-color: #ccc;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n.cancelbtn[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n\r\n\r\n\r\n.deletebtn[_ngcontent-%COMP%] {\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  opacity: 0.9;\r\n  background-color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n.deletebtn[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: #ddd;\r\n  padding-top: 50px;\r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: #fefefe;\r\n  margin: 5% auto 15% auto; \r\n  border: 1px solid #888;\r\n  width: 80%; \r\n}\r\n\r\n\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 35px;\r\n  top: 15px;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  color: #f1f1f1;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #f44336;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn[_ngcontent-%COMP%], .deletebtn[_ngcontent-%COMP%] {\r\n     width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .column[_ngcontent-%COMP%] {\r\n    width: 97%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUEsbUNBQW1DOztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUEsMkRBQTJEOztBQUMzRDtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsdURBQXVEOztBQUN2RDtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUEsMkJBQTJCOztBQUMzQjtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM1QyxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCLEVBQUUsc0RBQXNEO0VBQ2hGLHNCQUFzQjtFQUN0QixVQUFVLEVBQUUsb0RBQW9EO0FBQ2xFOztBQUVBLCtCQUErQjs7QUFDL0I7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBLCtCQUErQjs7QUFDL0I7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQSw2RUFBNkU7O0FBQzdFO0VBQ0U7S0FDRyxXQUFXO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyNCU7XHJcbiAgbWFyZ2luOiAzcHQ7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW50ZXIgYnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBGbG9hdCBjYW5jZWwgYW5kIGRlbGV0ZSBidXR0b25zIGFuZCBhZGQgYW4gZXF1YWwgd2lkdGggKi9cclxuLmNhbmNlbGJ0biwgLmRlbGV0ZWJ0biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIGEgY29sb3IgdG8gdGhlIGNhbmNlbCBidXR0b24gKi9cclxuLmNhbmNlbGJ0biB7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYW5jZWxidG46aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGNvbG9yIHRvIHRoZSBkZWxldGUgYnV0dG9uICovXHJcbi5kZWxldGVidG4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGVsZXRlYnRuOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyBhbmQgY2VudGVyLWFsaWduIHRleHQgdG8gdGhlIGNvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogNSUgYXV0byAxNSUgYXV0bzsgLyogNSUgZnJvbSB0aGUgdG9wLCAxNSUgZnJvbSB0aGUgYm90dG9tIGFuZCBjZW50ZXJlZCAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGhvcml6b250YWwgcnVsZXIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDM1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIGRlbGV0ZSBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5jYW5jZWxidG4sIC5kZWxldGVidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAuY29sdW1uIHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html',
          styleUrls: ['./users.component.css']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/admin-auth-guard.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/admin-auth-guard.service.ts ***!
    \******************************************************/

  /*! exports provided: AdminAuthGuardService */

  /***/
  function srcAppServicesAdminAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function () {
      return AdminAuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdminAuthGuardService = /*#__PURE__*/function () {
      function AdminAuthGuardService(auth, router) {
        _classCallCheck(this, AdminAuthGuardService);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AdminAuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.auth.isAdmin()) {
            this.router.navigateByUrl('/');
            return false;
          }

          return true;
        }
      }]);

      return AdminAuthGuardService;
    }();

    AdminAuthGuardService.ɵfac = function AdminAuthGuardService_Factory(t) {
      return new (t || AdminAuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AdminAuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminAuthGuardService,
      factory: AdminAuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(auth, router) {
        _classCallCheck(this, AuthGuardService);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
          }

          return true;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http, router) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.router = router;
        this.BACKEND_URL_USERS = 'https://dietary-habits.herokuapp.com/users';
      }

      _createClass(AuthenticationService, [{
        key: "saveToken",
        value: function saveToken(token) {
          localStorage.setItem('mean-token', token);
          this.token = token;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          if (!this.token) {
            this.token = localStorage.getItem('mean-token');
          }

          return this.token;
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var token = this.getToken();
          var payload;

          if (token) {
            payload = token.split('.')[1];
            payload = this.b64DecodeUnicode(payload);
            return JSON.parse(payload);
          } else {
            return null;
          }
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var user = this.getUserDetails();

          if (user) {
            return user.exp > Date.now() / 1000;
          } else {
            return false;
          }
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          var user = this.getUserDetails();

          if (user) {
            if (user.role === 'admin') {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }, {
        key: "request",
        value: function request(method, type, user) {
          var _this20 = this;

          var base;

          if (method === 'post') {
            base = this.http.post(this.BACKEND_URL_USERS + "/".concat(type), user);
          } else {
            base = this.http.get(this.BACKEND_URL_USERS + "/".concat(type), {
              headers: {
                Authorization: "Bearer ".concat(this.getToken())
              }
            });
          }

          var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            if (data.token) {
              _this20.saveToken(data.token);
            }

            return data;
          }));
          return request;
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.request('post', 'register', user);
        }
      }, {
        key: "login",
        value: function login(user) {
          return this.request('post', 'login', user);
        }
      }, {
        key: "profile",
        value: function profile() {
          return this.request('get', 'profile');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = '';
          window.localStorage.removeItem('mean-token');
          this.router.navigateByUrl('/');
        }
      }, {
        key: "getHash",
        value: function getHash(body) {
          return this.http.post(this.BACKEND_URL_USERS + '/hash', body, httpOptions);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.http.put(this.BACKEND_URL_USERS + '/update/' + user._id, user, httpOptions);
        }
      }, {
        key: "b64DecodeUnicode",
        value: function b64DecodeUnicode(str) {
          return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/dri.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/dri.service.ts ***!
    \*****************************************/

  /*! exports provided: DriService */

  /***/
  function srcAppServicesDriServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriService", function () {
      return DriService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");

    var DriService = /*#__PURE__*/function () {
      function DriService(httpClient, auth) {
        _classCallCheck(this, DriService);

        this.httpClient = httpClient;
        this.auth = auth;
        this.API_URL = 'https://dietary-habits.herokuapp.com/dri';
      }

      _createClass(DriService, [{
        key: "getUserActiveDris",
        value: function getUserActiveDris() {
          return this.httpClient.get(this.API_URL + '/user-active-dri/' + this.auth.getUserDetails()._id);
        }
      }]);

      return DriService;
    }();

    DriService.ɵfac = function DriService_Factory(t) {
      return new (t || DriService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    DriService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DriService,
      factory: DriService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/nutrition.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/nutrition.service.ts ***!
    \***********************************************/

  /*! exports provided: NutritionService */

  /***/
  function srcAppServicesNutritionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionService", function () {
      return NutritionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var NutritionService = /*#__PURE__*/function () {
      function NutritionService(httpClient) {
        _classCallCheck(this, NutritionService);

        this.httpClient = httpClient;
        this.API_URL = 'https://dietary-habits.herokuapp.com/nutritions';
      }

      _createClass(NutritionService, [{
        key: "getNutritions",
        value: function getNutritions(search) {
          return this.httpClient.get(this.API_URL + '/all?search=' + search);
        }
      }, {
        key: "getNutritionNamesAndIds",
        value: function getNutritionNamesAndIds(search) {
          return this.httpClient.get(this.API_URL + '/getNutritionsNameAndId?search=' + search);
        }
      }, {
        key: "getNutritionsWithPagination",
        value: function getNutritionsWithPagination(page, limit) {
          return this.httpClient.get(this.API_URL + '/withPagination?page=' + page + '&limit=' + limit);
        }
      }, {
        key: "getNutritionsCount",
        value: function getNutritionsCount() {
          return this.httpClient.get(this.API_URL + '/numberOfNutritions');
        }
      }, {
        key: "addNutrition",
        value: function addNutrition(nutrition) {
          return this.httpClient.post(this.API_URL + '/add', nutrition);
        }
      }, {
        key: "updateNutrition",
        value: function updateNutrition(nutrition) {
          return this.httpClient.put(this.API_URL + '/update/' + nutrition._id, nutrition);
        }
      }, {
        key: "deleteNutrition",
        value: function deleteNutrition(id) {
          return this.httpClient["delete"](this.API_URL + '/delete/' + id);
        }
      }]);

      return NutritionService;
    }();

    NutritionService.ɵfac = function NutritionService_Factory(t) {
      return new (t || NutritionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    NutritionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NutritionService,
      factory: NutritionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NutritionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user-nutrition.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/user-nutrition.service.ts ***!
    \****************************************************/

  /*! exports provided: UserNutritionService */

  /***/
  function srcAppServicesUserNutritionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserNutritionService", function () {
      return UserNutritionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserNutritionService = /*#__PURE__*/function () {
      function UserNutritionService(httpClient) {
        _classCallCheck(this, UserNutritionService);

        this.httpClient = httpClient;
        this.API_URL = 'https://dietary-habits.herokuapp.com/user-nutrition';
      }

      _createClass(UserNutritionService, [{
        key: "getUserNutritions",
        value: function getUserNutritions(body) {
          return this.httpClient.get(this.API_URL + '/get-user-nutritions?id=' + body.id + '&date_of_consumption=' + body.date_of_consumption);
        }
      }, {
        key: "addNutrition",
        value: function addNutrition(nutrition) {
          return this.httpClient.post(this.API_URL + '/add', nutrition);
        }
      }, {
        key: "updateNutrition",
        value: function updateNutrition(nutrition) {
          return this.httpClient.put(this.API_URL + '/update/' + nutrition._id, nutrition);
        }
      }, {
        key: "deleteNutrition",
        value: function deleteNutrition(id) {
          return this.httpClient["delete"](this.API_URL + '/delete/' + id);
        }
      }]);

      return UserNutritionService;
    }();

    UserNutritionService.ɵfac = function UserNutritionService_Factory(t) {
      return new (t || UserNutritionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserNutritionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserNutritionService,
      factory: UserNutritionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserNutritionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(httpClient) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
        this.API_URL = 'https://dietary-habits.herokuapp.com/users';
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers(search) {
          return this.httpClient.get(this.API_URL + '/all?search=' + search);
        }
      }, {
        key: "getUsersWithPagination",
        value: function getUsersWithPagination(page, limit) {
          return this.httpClient.get(this.API_URL + '/withPagination?page=' + page + '&limit=' + limit);
        }
      }, {
        key: "getUsersCount",
        value: function getUsersCount() {
          return this.httpClient.get(this.API_URL + '/numberOfUsers');
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          return this.httpClient.post(this.API_URL + '/add', user);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.httpClient.put(this.API_URL + '/admin/update/' + user._id, user);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.httpClient["delete"](this.API_URL + '/delete/' + id);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(user) {
          return this.httpClient.put(this.API_URL + '/resetPassword', user);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Dietary_habits_project\Dietary-habits-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map