(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 5129)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'stepsstats',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_steps-stats_steps-stats_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/steps-stats/steps-stats.module */ 8983)).then(m => m.StepsStatsPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 9029)).then(m => m.ProfilePageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 5783)).then(m => m.SignupPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 2371)).then(m => m.LoginPageModule)
    },
    {
        path: 'landing-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_landing-page_landing-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/landing-page/landing-page.module */ 2492)).then(m => m.LandingPagePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _awesome_cordova_plugins_health_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/health/ngx */ 4558);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 7897);






let AppComponent = class AppComponent {
    constructor(health, storage) {
        this.health = health;
        this.storage = storage;
        this.health.isAvailable()
            .then((available) => {
            console.log(available);
            this.health.requestAuthorization([
                'distance', 'nutrition',
                {
                    read: ['steps'],
                    write: ['height', 'weight'] //write only permission
                }
            ])
                .then(res => console.log(res))
                .catch(e => console.error(e));
        })
            .catch(e => console.error(e));
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // If using a custom driver:
            // await this.storage.defineDriver(MyCustomDriver)
            yield this.storage.create();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _awesome_cordova_plugins_health_ngx__WEBPACK_IMPORTED_MODULE_2__.Health },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.module */ 6092);
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth/auth.module */ 1142);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _awesome_cordova_plugins_health_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/health/ngx */ 4558);
/* harmony import */ var _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/native-audio/ngx */ 6066);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);







//Custom Modules


//Components





const declarations = [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent];
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations,
        entryComponents: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__.IonicStorageModule.forRoot()
        ],
        providers: [_awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__.NativeAudio, _awesome_cordova_plugins_health_ngx__WEBPACK_IMPORTED_MODULE_4__.Health, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9140:
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer.component.html */ 8214);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_services_layout_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/layout/layout.service */ 9667);






let FooterComponent = class FooterComponent {
    constructor(router, layoutService) {
        this.router = router;
        this.layoutService = layoutService;
    }
    navigate(page) {
        // this.layoutService.sendErrorPopup('success','Ceci est une erreur');
        this.router.navigate([page]);
    }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_layout_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-footer',
        template: _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 8005:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 6349);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 3868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_layout_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/layout/layout.service */ 9667);





let HeaderComponent = class HeaderComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
    }
    openNotificationsModal() {
        this.layoutService.sendOpenModalSignal('notifications');
    }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_layout_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header',
        template: _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 6092:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 8005);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 9140);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup/popup.component */ 119);
/* harmony import */ var _modals_modals_controler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/modals-controler.component */ 7965);
/* harmony import */ var _modals_modals_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/modals.module */ 3852);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);









let LayoutModule = class LayoutModule {
};
LayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _popup_popup_component__WEBPACK_IMPORTED_MODULE_2__.PopupComponent, _modals_modals_controler_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _modals_modals_module__WEBPACK_IMPORTED_MODULE_4__.ModalsModule
        ],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _popup_popup_component__WEBPACK_IMPORTED_MODULE_2__.PopupComponent, _modals_modals_controler_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent]
    })
], LayoutModule);



/***/ }),

/***/ 7965:
/*!*************************************************************!*\
  !*** ./src/app/layout/modals/modals-controler.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modals_controler_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./modals-controler.component.html */ 9228);
/* harmony import */ var _modals_controler_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals-controler.component.scss */ 1805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification/notification.component */ 2506);
/* harmony import */ var src_app_services_layout_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/layout/layout.service */ 9667);







let ModalComponent = class ModalComponent {
    constructor(modalController, layoutService) {
        this.modalController = modalController;
        this.layoutService = layoutService;
        this.isOpen = false;
        this.clickEventsubscription =
            this.layoutService.getOpenModalSignal().subscribe((component) => {
                this.presentModal(component);
            });
    }
    presentModal(componentName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let component;
            let cssClass;
            this.isOpen = false;
            switch (componentName) {
                case 'notifications':
                    component = _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__.NotificationComponent;
                    cssClass = 'notificationModal';
                    break;
                default:
                    break;
            }
            if (component) {
                this.modal = yield this.modalController.create({
                    component,
                    cssClass,
                    swipeToClose: true,
                });
                return yield this.modal.present();
            }
        });
    }
    ngOnInit() {
        // this.presentModal('notifications')
    }
};
ModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_layout_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService }
];
ModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-modal',
        template: _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modals_controler_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_modals_controler_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalComponent);



/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/layout/modals/modals.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalsModule": () => (/* binding */ ModalsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification/notification.component */ 2506);




let ModalsModule = class ModalsModule {
};
ModalsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent]
    })
], ModalsModule);



/***/ }),

/***/ 2506:
/*!**********************************************************************!*\
  !*** ./src/app/layout/modals/notification/notification.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notification.component.html */ 9007);
/* harmony import */ var _notification_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.scss */ 6408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);





const notifications = [
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
    { title: 'test', content: 'contenu' },
];
let NotificationComponent = class NotificationComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.notifications = notifications;
    }
    closeNotificationsModal() {
        this.modalController.dismiss();
    }
    ngOnInit() { }
};
NotificationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
NotificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notification',
        template: _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notification_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notification_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationComponent);



/***/ }),

/***/ 119:
/*!*************************************************!*\
  !*** ./src/app/layout/popup/popup.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComponent": () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_popup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./popup.component.html */ 1332);
/* harmony import */ var _popup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.component.scss */ 5236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_layout_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/layout/layout.service */ 9667);






let PopupComponent = class PopupComponent {
    constructor(layoutService, animationCtrl) {
        this.layoutService = layoutService;
        this.animationCtrl = animationCtrl;
        this.status = 'idle';
        this.clickEventsubscription =
            this.layoutService.getErrorPopup().subscribe((data) => {
                this.message = data.message;
                const el = this.errorPopup.nativeElement;
                switch (data.type) {
                    case 'info':
                        el.style.background = '#5260ff';
                        break;
                    case 'error':
                        el.style.background = '#eb445a';
                        break;
                    case 'success':
                        el.style.background = '#2fdf75';
                        break;
                    default:
                        break;
                }
                const openpopup = this.animationCtrl
                    .create()
                    .addElement(this.errorPopup.nativeElement)
                    .duration(600)
                    .iterations(1)
                    .fromTo('transform', 'translateY(-100px)', 'translateY(-0px)')
                    .onFinish(() => {
                    setTimeout(() => {
                        closepopup.play();
                    }, 5000);
                });
                const closepopup = this.animationCtrl
                    .create()
                    .addElement(this.errorPopup.nativeElement)
                    .duration(800)
                    .iterations(1)
                    .fromTo('transform', 'translateY(0px)', 'translateY(-100px)')
                    .onFinish(() => {
                    this.status = 'idle';
                });
                if (this.status === 'idle') {
                    this.status = 'working';
                    openpopup.play();
                }
            });
    }
    ngOnInit() { }
};
PopupComponent.ctorParameters = () => [
    { type: src_app_services_layout_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AnimationController }
];
PopupComponent.propDecorators = {
    errorPopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['errorPopup', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef, static: true },] }]
};
PopupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-popup',
        template: _home_legilmalas_Documents_portfolio_Projet_Nfactory_SaveYourLungs_SaveYourLungsAPP_node_modules_ngtools_webpack_src_loaders_direct_resource_js_popup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_popup_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PopupComponent);



/***/ }),

/***/ 1142:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);






let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.IonicStorageModule.forRoot()
        ]
    })
], AuthModule);



/***/ }),

/***/ 9667:
/*!***************************************************!*\
  !*** ./src/app/services/layout/layout.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4008);



let LayoutService = class LayoutService {
    constructor() {
        this.errorPopupMessage = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.notificationModal = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    sendErrorPopup(type, message) {
        const data = {
            type,
            message
        };
        this.errorPopupMessage.next(data);
    }
    getErrorPopup() {
        return this.errorPopupMessage.asObservable();
    }
    sendOpenModalSignal(componentName) {
        if (componentName) {
            this.notificationModal.next(componentName);
        }
    }
    getOpenModalSignal() {
        return this.notificationModal.asObservable();
    }
};
LayoutService.ctorParameters = () => [];
LayoutService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LayoutService);



/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://192.168.0.171:8000/api/'
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

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <app-modal></app-modal>\n  <ion-header>\n    <app-header></app-header>\n  </ion-header>\n  <ion-content>\n    <app-popup></app-popup>\n    <ion-router-outlet></ion-router-outlet>\n  </ion-content>\n  <ion-footer>\n    <app-footer></app-footer>\n  </ion-footer>\n</ion-app>\n");

/***/ }),

/***/ 8214:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/footer/footer.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-footer>\n  <ion-toolbar>\n    <ion-nav-link>\n      <ion-icon name=\"home-outline\" (click)=\"navigate('/home')\"></ion-icon>\n      <img (click)=\"navigate('/profile')\" src=\"https://robohash.org/azeertytyukcgcc\" alt=\"\" slot=\"end\">\n    </ion-nav-link>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 6349:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/header/header.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"\">\n  <ion-toolbar>\n    <ion-icon name=\"menu-outline\" slot=\"start\"></ion-icon>\n    <ion-title size=\"large\" class=\"logo\">\n      SaveYourLungs\n    </ion-title>\n    <ion-icon name=\"notifications-outline\" (click)=\"openNotificationsModal()\" slot=\"end\">\n    </ion-icon>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ 9228:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/modals/modals-controler.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-modal>\n\n</ion-modal>");

/***/ }),

/***/ 9007:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/modals/notification/notification.component.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n  <ion-list-header lines=\"full\">\n\n    <ion-label>Notifications</ion-label>\n\n    <div class=\"closeBtn\" (click)=\"closeNotificationsModal()\">\n      <ion-icon name=\"close\">\n\n      </ion-icon>\n    </div>\n  </ion-list-header>\n\n  <ion-content>\n    <ion-list>\n\n      <ion-item-sliding *ngFor=\"let notif of notifications\">\n\n        <ion-item >\n          <ion-label>{{notif.title}}</ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option (click)=\"console.log('test')\" color=\"danger\"><ion-icon name=\"trash\"></ion-icon></ion-item-option>\n        </ion-item-options>\n        <ion-item-options side=\"start\">\n          <ion-item-option (click)=\"console.log('test')\" color=\"success\"><ion-icon name=\"trash\"></ion-icon></ion-item-option>\n        </ion-item-options>\n        \n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>\n\n\n");

/***/ }),

/***/ 1332:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/popup/popup.component.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"errorPopup\" id=\"errorPopup\" #errorPopup>\n  <p>\n    {{message}}\n  </p>\n</div>\n");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 651:
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-footer ion-nav-link {\n  display: flex;\n  justify-content: space-around;\n}\nion-footer ion-nav-link ion-icon {\n  font-size: 32px;\n}\nion-footer ion-nav-link img {\n  background-color: var(--ion-text-color);\n  border-radius: 100px;\n  max-width: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFDUTtFQUNJLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBQ1oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XG4gICAgaW9uLW5hdi1saW5rIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMycHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";

/***/ }),

/***/ 3868:
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-header ion-icon {\n  font-size: 24px;\n}\nion-header ion-toolbar {\n  padding: 0 5%;\n}\nion-header ion-toolbar ion-title {\n  font-size: 25px;\n  text-align: center;\n  line-height: 20px;\n}\nion-header ion-toolbar .div ion-badge {\n  position: absolute;\n  width: 10%;\n  bottom: 0;\n}\nion-header ion-toolbar img {\n  max-width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7QUFBUjtBQUVJO0VBQ0ksYUFBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNaO0FBRVk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxTQUFBO0FBRGhCO0FBSVE7RUFDSSxlQUFBO0FBRloiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgICAgaW9uLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYge1xuICAgICAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcblxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";

/***/ }),

/***/ 1805:
/*!***************************************************************!*\
  !*** ./src/app/layout/modals/modals-controler.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbHMtY29udHJvbGVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6408:
/*!************************************************************************!*\
  !*** ./src/app/layout/modals/notification/notification.component.scss ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".NotificationsModal {\n  height: 100%;\n  margin: 0 5%;\n}\n.NotificationsModal ion-list-header ion-label {\n  font-size: 2em;\n}\n.NotificationsModal ion-list-header .closeBtn {\n  font-size: 1.3em;\n}\n.NotificationsModal ion-content {\n  padding: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDUTtFQUNJLGNBQUE7QUFDWjtBQUNRO0VBQ0ksZ0JBQUE7QUFDWjtBQUVJO0VBQ0ksV0FBQTtBQUFSIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Ob3RpZmljYXRpb25zTW9kYWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgNSU7XG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZUJ0biB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgIGlvbi1saXN0IHtcblxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgaDMge1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";

/***/ }),

/***/ 5236:
/*!***************************************************!*\
  !*** ./src/app/layout/popup/popup.component.scss ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".errorPopup {\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  transform: translateY(-100px);\n  width: 100%;\n  padding: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoicG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5lcnJvclBvcHVwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbn0iXX0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1111), __webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map