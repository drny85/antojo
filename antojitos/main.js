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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-order-details/admin-order-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/admin-order-details/admin-order-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-inline {\r\n    padding-left: 0;\r\n    list-style: none;\r\n    display: inline-flex;\r\n    margin-right: 10px;\r\n    font-style: italic;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/admin-order-details/admin-order-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-order-details/admin-order-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" #pdfcontent *ngIf=\"order\"> \r\n  <div class=\"row\">\r\n    <div col>\r\n        <h2 class=\"text-center mb-4 animated pulse text-capitalize\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i> {{ order.shipping.name }} {{ order.shipping.last_name }}`  Order Details</h2>\r\n        <p>Order Placed on {{ order.datePlaced }}  </p>\r\n       \r\n    </div>\r\n    <div *ngIf=\"order.status === 'delivered'\" class=\"col\">\r\n      <a [routerLink]=\"['/delivered/', order.id]\" class=\"btn btn-secondary float-right\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i> Print Invoice</a>\r\n    </div>\r\n    <div class=\"col\">\r\n      <button (click)=\"goBack()\" class=\"float-right btn btn-dark\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Go Back</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h2>Status: <span class=\"badge badge-secondary text-uppercase\">{{ order.status }}</span></h2>\r\n    </div>\r\n    <div class=\"col\">\r\n      <button (click)=\"showDetailsClicked($event)\" class=\"btn btn-outline-primary mb-2 mr-2 btn-block\">{{ buttonDetailsText }}</button>\r\n    </div>\r\n    <div class=\"col\">\r\n      <ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Change Order Status</h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n           <form #statusForm=\"ngForm\" (ngSubmit)=\"changeStatus(statusForm.value)\">\r\n             <h3 class=\"text-center\">Please Select a status</h3>\r\n             <div class=\"form-group\">\r\n               <label for=\"Status\">Status</label>\r\n               <select name=\"status\" [(ngModel)]=\"status\" id=\"status\" class=\"form-control\">\r\n                 <option disabled value=\"\">Select a status</option>\r\n                 <option value=\"in-progress\">In Progress</option>\r\n                 <option value=\"new\">New</option>\r\n                 <option value=\"almost-ready\">Praparing for Delivery</option>\r\n                 <option value=\"delivered\">Delivered</option>\r\n                 <option value=\"delayed\">Delayed</option>\r\n                 <option value=\"canceled\">Canceled</option>\r\n               </select>\r\n             </div>\r\n\r\n             <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-warning\" (click)=\"modal.close('Close click')\">Close</button>\r\n                <button type=\"submit\" class=\"btn btn-success\">Change Status</button>\r\n              </div>\r\n\r\n           </form>\r\n        </div>\r\n       \r\n      </ng-template>\r\n    </div>\r\n    <div class=\"col\">\r\n      <button class=\"btn btn-outline-primary mb-2 mr-2 float-right btn-block\" (click)=\"openVerticallyCentered(content)\">Change Status</button>\r\n    </div>\r\n  </div>\r\n<!-- order Details -->\r\n  <div *ngIf=\"!showDetails\"  class=\"table-responsive-sm table-responsive-md\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>Item/Items</th>\r\n          <th>Quantity</th>\r\n          <th>Price</th>\r\n          <th>Total</th>\r\n        </tr>\r\n  \r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of order.items\">\r\n          <td><img  *ngIf=\"item.product.picture\" width=\"50\" height=\"50\" class=\"img\" src=\"{{ item.product.picture }}\" alt=\"\"></td>\r\n          <td class=\"text-capitalize\"><p class=\"font-weight-bold\">{{ item.product.name}}</p> <p><i>{{ item.product.flavors }}</i></p></td>\r\n          <td>{{ item.quantity }}</td>\r\n          \r\n          <td>{{ item.product.price | currency:'USD': 'symbol-narrow'  }}</td>\r\n          <td>{{ item.totalPrice | currency:'USD': 'symbol-narrow'  }}</td> \r\n        </tr>\r\n        <tr>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th>Grand Total</th>\r\n          <th>{{ order.grandTotal | currency:'USD': 'symbol-narrow' }}</th>\r\n        </tr>\r\n        <br>\r\n        <tr>\r\n          <th colspan=\"5\"> <h3 class=\"text-center alert alert-light\">Address Information <i class=\"fa fa-address-card\" aria-hidden=\"true\"></i></h3></th>\r\n        </tr>\r\n        <tr>\r\n          <th>Adress/Street</th>\r\n          <th>Apt</th>\r\n          <th>City</th>\r\n          <th>Phone</th>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"text-capitalize\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> {{ order.shipping.address }}</td>\r\n          <td class=\"text-uppercase\">{{ order.shipping.apt }}</td>\r\n          <td class=\"text-capitalize\">{{ order.shipping.city }}</td>\r\n          <td><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> {{ order.shipping.phone }}</td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"5\">\r\n            <div *ngIf=\"order.shipping.message != ''; else noMessage\" class=\"card\">\r\n                <div class=\"card-header\">\r\n                  Delivery Instruction\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <blockquote class=\"blockquote mb-0\">\r\n                    <p>{{ order.shipping.message }}</p>\r\n                    \r\n                  </blockquote>\r\n                </div>\r\n              </div>\r\n              \r\n              <ng-template #noMessage>\r\n                  <div class=\"card\">\r\n                      <div class=\"card-body\">\r\n                          <h4 class=\"text-center\">No Instructuion submitted for delivery</h4>\r\n                      </div>\r\n                    </div>\r\n              </ng-template>\r\n            </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n  \r\n      </tfoot>\r\n  \r\n    </table>\r\n  </div>\r\n<!-- order instruction with ingridients -->\r\n<div *ngIf=\"showDetails && order\" class=\"table-responsive-sm table-responsive-md\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>Item/Items</th>\r\n          <th>Quantity</th>\r\n          <th>Instructions/Addons</th>\r\n          <th>Special Instruction</th>\r\n          \r\n        </tr>\r\n  \r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of order.items; let i = index\">\r\n          <td><img  *ngIf=\"item.product.picture\" width=\"50\" height=\"50\" class=\"img\" src=\"{{ item.product.picture }}\" alt=\"\"></td>\r\n          <td class=\"text-capitalize\">{{ item.product.name }}</td>\r\n          <td>{{ item.quantity }}</td>\r\n          <td >\r\n              <ul class=\"list-inline\">\r\n                <li class=\"list-inline-item\"><p class=\"mr-5 text-capitalize\">{{ item.product.addons }}</p></li>\r\n              </ul>\r\n          </td>\r\n          <td>\r\n            <p class=\"font-weight-bold text-left font-italic\">{{ item.product.instruction }}</p>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n  \r\n      </tfoot>\r\n  \r\n    </table>\r\n  </div>\r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/admin/admin-order-details/admin-order-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-order-details/admin-order-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminOrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrderDetailsComponent", function() { return AdminOrderDetailsComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_admin_order_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/admin-order-service.service */ "./src/app/services/admin-order-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AdminOrderDetailsComponent = /** @class */ (function () {
    function AdminOrderDetailsComponent(adminOrders, route, router, location, message, modalService) {
        this.adminOrders = adminOrders;
        this.route = route;
        this.router = router;
        this.location = location;
        this.message = message;
        this.modalService = modalService;
        this.status = '';
        this.showDetails = false;
        this.buttonDetailsText = 'Show Order Instructions';
    }
    AdminOrderDetailsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.route.snapshot.params['id']];
                    case 1:
                        id = _a.sent();
                        this.subscription = this.adminOrders.getOrder(id).subscribe(function (order) {
                            _this.order = order;
                            console.log(_this.order);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminOrderDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    AdminOrderDetailsComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    // check delivered status
    AdminOrderDetailsComponent.prototype.changeStatus = function (e) {
        var _this = this;
        if (e) {
            if (e.status === 'delivered') {
                this.order.delivered = true;
                this.router.navigate(['delivered/' + this.order.id]);
            }
            else {
                this.order.delivered = false;
            }
            this.order.status = this.status;
            this.adminOrders.updateOrder(this.order).then(function () { return _this.message.success("UPDATED!", "Order has been updated"); });
        }
        this.modalService.dismissAll();
    };
    // change butto text
    AdminOrderDetailsComponent.prototype.showDetailsClicked = function (e) {
        this.showDetails = !this.showDetails;
        var text = e.target.innerText;
        if (text.toLowerCase() === 'show order instructions') {
            this.buttonDetailsText = 'Show Order Details';
        }
        else if (text.toLowerCase() === 'show order details') {
            this.buttonDetailsText = 'Show Order Instructions';
        }
    };
    AdminOrderDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminOrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-order-details',
            template: __webpack_require__(/*! ./admin-order-details.component.html */ "./src/app/admin/admin-order-details/admin-order-details.component.html"),
            styles: [__webpack_require__(/*! ./admin-order-details.component.css */ "./src/app/admin/admin-order-details/admin-order-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_order_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminOrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], AdminOrderDetailsComponent);
    return AdminOrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: auto;\r\n    height: 400px;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div>\r\n  <a class=\"pull-right\" routerLink=\"/admin/products/new\" class=\"btn btn-dark mb-5\">Add New Product</a>\r\n  \r\n  <input #query (keyup)=filter(query.value) type=\"text\" class=\"form-control\" name=\"search\" id=\"search\" placeholder=\"Search.....\">\r\n</div>\r\n<br>\r\n\r\n\r\n<div>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr class=\"text-white bg-dark\">\r\n        <th>Name</th>\r\n        <th>Price</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let prod of filtered\">\r\n        <td class=\"text-capitalize\">{{ prod.name }}</td>\r\n        <td> {{ prod.price | currency:\"USD\":\"symbol-narrow\" }}</td>\r\n        <td><a class=\"btn btn-block btn-secondary\" [routerLink]=\"['/admin/products/', prod.id]\" ><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</a></td>\r\n      </tr>\r\n    </tbody>\r\n    <tfoot>\r\n      \r\n    </tfoot>\r\n\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productServ) {
        var _this = this;
        this.productServ = productServ;
        // tableResource: DataTableResource<Product>;
        this.items = [];
        this.subscription = this.productServ.getProducts()
            .subscribe(function (products) {
            _this.filtered = _this.products = products;
        });
    }
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent.prototype.filter = function (query) {
        this.filtered = (query) ?
            this.products.filter(function (p) { return p.name.toLowerCase().includes(query.toLowerCase()); }) :
            this.products;
    };
    AdminProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! ./admin-products.component.html */ "./src/app/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit/edit.component.css":
/*!***********************************************!*\
  !*** ./src/app/admin/edit/edit.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: auto;\r\n    height: 400px;\r\n}\r\n\r\n.list-inline {\r\n    padding-left: 0;\r\n    list-style: none;\r\n    display: inline-flex;\r\n    margin-right: 10px;\r\n    font-style: italic;\r\n}"

/***/ }),

/***/ "./src/app/admin/edit/edit.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/edit/edit.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product\">\r\n    <div>\r\n        <h3 class=\"text-center\">Update A Product</h3>\r\n      </div>\r\n      <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-7 col-xs-12\">\r\n      <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit(myForm)\">\r\n          <div class=\"form-group\">\r\n              <label for=\"item_name\">Product Name</label>\r\n              <input [(ngModel)]=\"product.name\" id=\"item_name\" type=\"text\" #prod_name=\"ngModel\" name=\"name\"  class=\"form-control\"\r\n              [ngClass]=\"{'is-invalid': prod_name.touched && prod_name.errors, 'is-valid': prod_name.valid}\"\r\n              required>\r\n              <div class=\"invalid-feedback\" *ngIf=\"prod_name.errors?.required\">\r\n                  Name is required..\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"item_price\">Price</label>\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">$</span>\r\n                <input [(ngModel)]=\"product.price\" id=\"item_price\" type=\"number\" #prod_price=\"ngModel\" name=\"price\" [min]=\"0\" class=\"form-control\" \r\n                [ngClass]=\"{'is-invalid': prod_price.touched && prod_name.errors, 'is-valid': prod_price.valid}\"\r\n                required>\r\n              </div>\r\n              <div class=\"invalid-feedback\" *ngIf=\"prod_price.errors?.min\">\r\n                  Price should be 0 or higher\r\n              </div>\r\n              \r\n              \r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"item_category\">Category</label>\r\n              <select [(ngModel)]=\"product.category\" class=\"form-control text-capitalize\" #prod_category=\"ngModel\" name=\"category\" id=\"item_category\" \r\n              [ngClass]=\"{'is-invalid': prod_category.touched && prod_category.errors, 'is-valid': prod_category.valid}\"\r\n              required>\r\n                <option disabled value=\"\">Select a category</option>\r\n                <option class=\"text-capitalize\" *ngFor=\"let c of categories$ | async\" [value]=\"c.id\">{{ c.name }}</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\" *ngIf=\"prod_category.errors?.required\">\r\n                Category is required\r\n              </div>\r\n          </div>\r\n          <div *ngIf=\"flavorsList\" class=\"form-group\">\r\n              <mat-form-field>\r\n                <mat-select name=\"flavors\" [(ngModel)]=\"flavorsItem\" placeholder=\"Flavor\" [formControl]=\"flavors\" multiple>\r\n                  <mat-option class=\"text-capitalize\" *ngFor=\"let flavor of flavorsList;\" [value]=\"flavor.name\">{{\r\n                    flavor.name }}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div *ngIf=\"product.flavors; else noFlavors\">\r\n                  <p class=\"font-weight-bold\"> Flavors Already Included</p>\r\n                  <ul class=\"list-inline\" *ngFor=\"let item of product.flavors\">\r\n                    <li class=\"list-inline-item text-capitalize\">{{ item }}</li>\r\n                  </ul>\r\n                </div>\r\n           <hr>\r\n           <ng-template #noFlavors>\r\n              <p class=\"font-weight-bold\">No Flavors for this product</p>\r\n          </ng-template>\r\n        </div>\r\n\r\n          <div class=\"form-group\">\r\n       \r\n            <mat-form-field>\r\n              <mat-select name=\"addons\" (change)=\"onChange($event)\" [(ngModel)]=\"addons\" placeholder=\"Addons\" [formControl]=\"toppings\" multiple>\r\n                <mat-option class=\"text-capitalize\" *ngFor=\"let topping of toppingList\" [value]=\"topping.name\">{{ topping.name }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div *ngIf=\"product.addons; else noAddons\">\r\n              <p class=\"font-weight-bold\"> Addons Already Included</p>\r\n              <ul class=\"list-inline\" *ngFor=\"let item of product.addons\">\r\n                <li class=\"list-inline-item text-capitalize\">{{ item }}</li>\r\n              </ul>\r\n            </div>\r\n            <hr>\r\n            <ng-template #noAddons>\r\n                <p class=\"font-weight-bold\">No Addons for this product</p>\r\n            </ng-template>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"pic\">Update Image</label>\r\n            <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"item_pic.click()\">Select Image</button>\r\n          </div>\r\n          <div hidden class=\"form-group col\">\r\n            <input class=\"form-control\" type=\"file\" (change)=\"onUpload($event)\" name=\"pic\" id=\"pic\" accept=\".png,.jpg, .jpeg\"  ngModel #item_pic>\r\n        </div>\r\n        <br>\r\n        <div class=\"row form-group\">\r\n          <div class=\"col-md-6 col-xs-6\">\r\n              <button [disabled]=\"!myForm.form.valid\" type=\"submit\" class=\"btn btn-dark btn-block mr-5\">UpdateProduct</button>\r\n          </div>\r\n          <div class=\"col-md-6 col-xs-6\">    \r\n          <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger btn-block\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete Product</button>\r\n          </div>\r\n        </div>\r\n          \r\n        </form>\r\n\r\n    </div>\r\n    <div class=\"col-md-5 d-none d-sm-block\">\r\n        <!-- <div class=\"card\" style=\"width: 30rem;\">\r\n        <img class=\"card-img-top\" [src]=\"product.picture\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title text-capitalize\">{{ product.name}}</h5>\r\n          <p class=\"card-text\">{{ product.price | currency:\"USD\":\"symbol-narrow\" }} </p>\r\n        </div>\r\n      </div>\r\n       -->\r\n       <product-card [product]=\"product\" [show-actions]=\"false\"></product-card>\r\n    </div>\r\n  </div>\r\n  \r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/edit/edit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/edit/edit.component.ts ***!
  \**********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _services_flavors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/flavors.service */ "./src/app/services/flavors.service.ts");
/* harmony import */ var _services_addons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/addons.service */ "./src/app/services/addons.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditComponent = /** @class */ (function () {
    function EditComponent(category, activeRoute, message, prodServ, afStorage, router, flavorServ, addonsServ) {
        var _this = this;
        this.category = category;
        this.activeRoute = activeRoute;
        this.message = message;
        this.prodServ = prodServ;
        this.afStorage = afStorage;
        this.router = router;
        this.flavorServ = flavorServ;
        this.addonsServ = addonsServ;
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.flavors = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.product = {
            name: '',
            price: 0,
            category: '',
            picture: '',
            updated: '',
            quantity: 0,
            addons: [''],
            instruction: ''
        };
        this.categories$ = this.category.getCategories();
        this.id = this.activeRoute.snapshot.params['id'];
        if (this.id) {
            this.subscription = this.prodServ.getProduct(this.id).subscribe(function (prod) { return _this.product = prod; });
        }
        this.addonSubscription = this.addonsServ.getAddons().subscribe(function (addons) {
            _this.toppingList = addons;
        });
        this.flavorSubscription = this.flavorServ.getFlavors().subscribe(function (flavors) {
            _this.flavorsList = flavors;
        });
    }
    EditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.addonSubscription.unsubscribe();
    };
    EditComponent.prototype.onUpload = function (event) {
        var _this = this;
        var id = Math.random().toString(36).substring(2);
        var file = event.target.files[0];
        var imagSize = file.size;
        var fileType = file.type;
        var name = file.name;
        var ext = fileType.split('/', 1);
        if (imagSize > 3000000) {
            this.message.error('File is too large', 'Error Uploading');
            return;
        }
        if (ext[0] !== 'image') {
            this.message.error('Invalid File', 'Error Uploading');
            return;
        }
        // let reference = this.afStorage.ref('img/' + id + '-' + name);
        var reference = this.afStorage.ref('img/' + id + '-' + name);
        this.task = reference.put(file);
        this.uploadProgress = this.task.percentageChanges();
        this.task.then(function (snap) { return snap.ref.getDownloadURL().then(function (urlPic) { _this.downloadURL = urlPic; _this.product.picture = urlPic; }); });
        this.message.success('Image succesfully uploaded', 'Great');
    };
    EditComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            // add error
            console.log('error');
            console.log(this.product);
            return;
        }
        else {
            // Update product
            this.product.updated = new Date().toLocaleString();
            this.product.addons = this.addons || this.product.addons || [];
            this.product.flavors = this.flavorsItem || this.product.flavors || [];
            this.prodServ.updateProduct(this.product).then(function () { return _this.message.success('Product Updated', 'Success!'); })
                .catch(function (err) {
                _this.message.error('Something went wrong', 'Error!');
                console.log(err);
            });
            this.router.navigate(['admin/products']);
        }
    };
    EditComponent.prototype.delete = function () {
        if (confirm('Are you sure you want to delete this procuct?')) {
            this.prodServ.deleteProduct(this.id);
            this.message.info('Product has been deleted', 'Deleted!');
            this.router.navigate(['/admin/products']);
        }
        else {
            this.message.info('No changes were made', 'Canceled');
            return;
        }
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/admin/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/admin/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _services_flavors_service__WEBPACK_IMPORTED_MODULE_0__["FlavorsService"],
            _services_addons_service__WEBPACK_IMPORTED_MODULE_1__["AddonsService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/admin/manage-addons/manage-addons.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/manage-addons/manage-addons.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/manage-addons/manage-addons.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/manage-addons/manage-addons.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"addons\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <div>\r\n          <h3 class=\"text-center\">Adding New Addon</h3>\r\n            <form #myForm=\"ngForm\" (ngSubmit)=\"addAddon(myForm)\">\r\n              <div class=\"form-group\">\r\n                <label for=\"addon\">Addon Name</label>\r\n                <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"addon.name\" name=\"addon\" id=\"addon\">\r\n                <br>\r\n                <button type=\"submit\" class=\"btn btn-dark\" [disabled]=\"!myForm.form.valid\">Save Addon</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n            <h3>Addons Already Included</h3>\r\n        </div>\r\n        <div class=\"col\">\r\n          <a class=\"btn btn-dark float-right\" routerLink=\"/admin/products\">Manage Products</a>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"card-body\">\r\n        <ul class=\"list-group\">\r\n            <li *ngFor=\"let addon of addons; let i = index\" class=\"list-group-item text-capitalize\">{{ addon.name }} <span><button (click)=\"deleteAddon(addon.id)\" class=\"btn btn-danger float-right\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Remove</button></span></li>\r\n          </ul>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n     \r\n    </div>\r\n  </div>\r\n\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/manage-addons/manage-addons.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/manage-addons/manage-addons.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageAddonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAddonsComponent", function() { return ManageAddonsComponent; });
/* harmony import */ var _services_addons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/addons.service */ "./src/app/services/addons.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageAddonsComponent = /** @class */ (function () {
    function ManageAddonsComponent(addonsServ) {
        var _this = this;
        this.addonsServ = addonsServ;
        this.addon = {
            name: ''
        };
        this.addonSubscription = this.addonsServ.getAddons().subscribe(function (addons) {
            _this.addons = addons;
        });
    }
    ManageAddonsComponent.prototype.ngOnDestroy = function () {
        this.addonSubscription.unsubscribe();
    };
    ManageAddonsComponent.prototype.deleteAddon = function (id) {
        this.addonsServ.deleteAddon(id).then(function () { return console.log('Addon deleted'); });
    };
    ManageAddonsComponent.prototype.addAddon = function () {
        this.addonsServ.addAddon(this.addon).then(function () { return console.log('Addon Added'); });
        this.addon.name = '';
    };
    ManageAddonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-addons',
            template: __webpack_require__(/*! ./manage-addons.component.html */ "./src/app/admin/manage-addons/manage-addons.component.html"),
            styles: [__webpack_require__(/*! ./manage-addons.component.css */ "./src/app/admin/manage-addons/manage-addons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_addons_service__WEBPACK_IMPORTED_MODULE_0__["AddonsService"]])
    ], ManageAddonsComponent);
    return ManageAddonsComponent;
}());



/***/ }),

/***/ "./src/app/admin/manage-category/manage-category.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/manage-category/manage-category.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/manage-category/manage-category.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/manage-category/manage-category.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\">Adding Categories</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form #categoryForm=\"ngForm\" (ngSubmit)=\"addCategory()\">\r\n      <div class=\"form-group\">\r\n          <label for=\"name\">Category Name</label>\r\n          <input #catName required name=\"name\" [(ngModel)]=\"category.name\" type=\"text\" class=\"form-control\" id=\"id\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-dark\" [disabled]=\"!categoryForm.form.valid\" type=\"submit\">Add Category</button>\r\n        </div>\r\n\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n<div *ngIf=\"categories$\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"text-center\">Categories List</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <ul class=\"list-group\" *ngFor=\"let  category of categories$ | async \">\r\n        <li (click)=\"fillName($event)\" class=\"list-group-item text-capitalize\">{{ category.name }} <span><button (click)=\"deleteCategory(category.id)\" class=\"btn btn-danger float-right\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Remove</button></span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/manage-category/manage-category.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/manage-category/manage-category.component.ts ***!
  \********************************************************************/
/*! exports provided: ManageCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCategoryComponent", function() { return ManageCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageCategoryComponent = /** @class */ (function () {
    function ManageCategoryComponent(categoryServ) {
        this.categoryServ = categoryServ;
        this.category = {
            name: ''
        };
        this.categories$ = this.categoryServ.getCategories();
    }
    ManageCategoryComponent.prototype.ngOnInit = function () {
    };
    ManageCategoryComponent.prototype.addCategory = function () {
        var _this = this;
        this.categoryServ.addCategory(this.category).then(function () { return console.log(_this.category); });
        this.category.id = '';
        this.category.name = '';
    };
    ManageCategoryComponent.prototype.deleteCategory = function (id) {
        if (!confirm('Do you want to delete it?'))
            return;
        this.categoryServ.deleteCategory(id).then(function () { return console.log('Category Deleted'); });
    };
    ManageCategoryComponent.prototype.fillName = function (e) {
        console.log(e.target.innerText);
    };
    ManageCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-category',
            template: __webpack_require__(/*! ./manage-category.component.html */ "./src/app/admin/manage-category/manage-category.component.html"),
            styles: [__webpack_require__(/*! ./manage-category.component.css */ "./src/app/admin/manage-category/manage-category.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], ManageCategoryComponent);
    return ManageCategoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/manage-flavor/manage-flavor.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/manage-flavor/manage-flavor.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/manage-flavor/manage-flavor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/manage-flavor/manage-flavor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\">Adding Flavor</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form #flavorForm=\"ngForm\" (ngSubmit)=\"addFlavor()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Flavor's Name</label>\r\n            <input #catName required name=\"name\" [(ngModel)]=\"flavor.name\" type=\"text\" class=\"form-control\" id=\"id\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button class=\"btn btn-dark\" [disabled]=\"!flavorForm.form.valid\" type=\"submit\">Add Flavor</button>\r\n          </div>\r\n  \r\n      </form>\r\n    </div>\r\n  \r\n  </div>\r\n  <div *ngIf=\"flavors$\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h3 class=\"text-center\">Flavors List</h3>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <ul class=\"list-group\" *ngFor=\"let  flavor of flavors$ | async \">\r\n          <li class=\"list-group-item text-capitalize\">{{ flavor.name }} <span><button (click)=\"deleteFlavor(flavor.id)\" class=\"btn btn-danger float-right\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Remove</button></span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/manage-flavor/manage-flavor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/manage-flavor/manage-flavor.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageFlavorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageFlavorComponent", function() { return ManageFlavorComponent; });
/* harmony import */ var _services_flavors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/flavors.service */ "./src/app/services/flavors.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageFlavorComponent = /** @class */ (function () {
    function ManageFlavorComponent(flavorServ) {
        this.flavorServ = flavorServ;
        this.flavor = {
            name: ''
        };
        this.flavors$ = this.flavorServ.getFlavors();
    }
    ManageFlavorComponent.prototype.ngOnInit = function () {
    };
    ManageFlavorComponent.prototype.addFlavor = function () {
        var _this = this;
        this.flavorServ.addFlavor(this.flavor).then(function () { return console.log(_this.flavor); });
        this.flavor.name = '';
    };
    ManageFlavorComponent.prototype.deleteFlavor = function (id) {
        if (!confirm('Do you want to delete it?'))
            return;
        this.flavorServ.deleteFlavor(id).then(function () { return console.log('Flavor Deleted'); });
    };
    ManageFlavorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-flavor',
            template: __webpack_require__(/*! ./manage-flavor.component.html */ "./src/app/admin/manage-flavor/manage-flavor.component.html"),
            styles: [__webpack_require__(/*! ./manage-flavor.component.css */ "./src/app/admin/manage-flavor/manage-flavor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_flavors_service__WEBPACK_IMPORTED_MODULE_0__["FlavorsService"]])
    ], ManageFlavorComponent);
    return ManageFlavorComponent;
}());



/***/ }),

/***/ "./src/app/admin/orders/orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/orders/orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-tabs .nav-link.active {\r\n    background-color: #96194b;\r\n    color: beige;\r\n}"

/***/ }),

/***/ "./src/app/admin/orders/orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/orders/orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: none\">\r\n    Audio\r\n    <audio #audioFile>\r\n      <source src=\"../../../assets/audio/neworder.wav\" type=\"audio/wav\">\r\n    </audio>\r\n  </div>\r\n<div *ngIf=\"orders$ | async as order\">\r\n \r\n  <ul class=\"nav nav-tabs\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [class.active]=\"!status\" routerLink=\"/admin/orders/\">All Orders</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [class.active]=\"status === 'new'\" routerLink=\"/admin/orders/\" [queryParams]=\"{ status: 'new' }\">New</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [class.active]=\"status === 'delivered'\" routerLink=\"/admin/orders/\" [queryParams]=\"{ status: 'delivered' }\">Delivered</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [class.active]=\"status === 'almost-ready'\" routerLink=\"/admin/orders/\" [queryParams]=\"{ status: 'almost-ready' }\">In Progress</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [class.active]=\"status === 'delayed'\" routerLink=\"/admin/orders/\" [queryParams]=\"{ status: 'delayed' }\">Delayed</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [class.active]=\"status === 'canceled'\" routerLink=\"/admin/orders/\" [queryParams]=\"{ status: 'canceled' }\">Canceled</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<div *ngIf=\"orders$\">\r\n    <h2 class=\"text-center mb-3 text-capitalize\"> {{ status }}</h2>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Date/Time</th>\r\n            <th>Amount</th>\r\n            <th>Status</th>\r\n            <th>Details</th>\r\n        </tr>\r\n        \r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of filteredStatus\">\r\n          <td class=\"text-capitalize\">{{ item.shipping.name }} {{ item.shipping.last_name }}</td>\r\n          <td>{{ item.datePlaced }}</td>\r\n          <td>{{ item.grandTotal | currency:'USD': 'symbol-narrow' }}</td>\r\n          <td [ngClass]=\"{'bg-success': item.status === 'delivered', 'bg-danger': item.status === 'canceled', 'bg-secondary': item.status === 'almost-ready', 'bg-info': item.status === 'new', 'bg-warning': item.status === 'in-progress'}\" \r\n              class=\"text-capitalize font-weight-bold text-center\">{{ item.status }} </td>\r\n          <td><a [routerLink]=\"['/admin/orders/details', item.id]\" class=\"btn btn-secondary\">View Order</a>\r\n          </td>\r\n        \r\n       \r\n        </tr>\r\n       \r\n  \r\n      </tbody>\r\n      <tfoot>\r\n  \r\n      </tfoot>\r\n  \r\n    </table>\r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/admin/orders/orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(orderServ, activeRoute, msg) {
        this.orderServ = orderServ;
        this.activeRoute = activeRoute;
        this.msg = msg;
        this.orders = [];
        this.status = 'All Orders';
        this.filteredStatus = [];
        this.count = 0;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.orderServ.getAllOrders()];
                    case 1:
                        _a.orders$ = (_b.sent());
                        this.populateOrders();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersComponent.prototype.populateOrders = function () {
        var _this = this;
        this.subscription = this.orderServ.getAllOrders().subscribe(function (orders) {
            _this.orders = orders;
            _this.activeRoute.queryParamMap.subscribe(function (params) {
                _this.status = params.get('status');
                _this.filteredStatus = (_this.status) ?
                    _this.orders.filter(function (p) { return p.status === _this.status; }) :
                    _this.orders;
            });
            _this.count = 0;
            orders.filter(function (order) {
                if (order.status === 'new') {
                    _this.count += 1;
                }
            });
            if (_this.count > 0) {
                _this.msg.show('You have ' + _this.count + ' new orders', 'NEW ORDER');
                _this.audioFile.nativeElement.play();
                setTimeout(function () { return _this.audioFile.nativeElement.play(); }, 2100);
                if (_this.count < 1) {
                    _this.msg.show('There is no New Orders', 'NO ORDERS');
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('audioFile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], OrdersComponent.prototype, "audioFile", void 0);
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/admin/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/admin/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline {\r\n    display: inline;\r\n}\r\n\r\n.example-radio-group {\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n.example-radio-button {\r\n    margin: 5px;\r\n  }\r\n\r\n.example-selected-value {\r\n    margin: 15px 0;\r\n  }"

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h3 class=\"text-center\">Adding New Product</h3>\r\n    </div>\r\n    <div class=\"col\">\r\n      <a routerLink=\"/admin/addons\" class=\"btn btn-dark float-right\">Manage Addons</a>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col-md-7': product.name, 'col-md-12': !product.name}\">\r\n      <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit(myForm)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"item_name\" class=\"font-weight-bold\">Product Name</label>\r\n          <input [(ngModel)]=\"product.name\" id=\"item_name\" type=\"text\" #prod_name=\"ngModel\" name=\"name\" class=\"form-control\"\r\n            [ngClass]=\"{'is-invalid': prod_name.touched && prod_name.errors, 'is-valid': prod_name.valid}\" required>\r\n          <div class=\"invalid-feedback\" *ngIf=\"prod_name.errors?.required\">\r\n            Name is required..\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"item_price\">Price</label>\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">$</span>\r\n            <input [(ngModel)]=\"product.price\" id=\"item_price\" type=\"number\" #prod_price=\"ngModel\" name=\"price\" [min]=\"0\"\r\n              class=\"form-control\" [ngClass]=\"{'is-invalid': prod_price.touched && prod_name.errors, 'is-valid': prod_price.valid}\"\r\n              required>\r\n          </div>\r\n          <div class=\"invalid-feedback\" *ngIf=\"prod_price.errors?.min\">\r\n            Price should be 0 or higher\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"item_category\">Category</label>\r\n          <select [(ngModel)]=\"product.category\" class=\"form-control\" #prod_category=\"ngModel\" name=\"category\" id=\"item_category\"\r\n            [ngClass]=\"{'is-invalid': prod_category.touched && prod_category.errors, 'is-valid': prod_category.valid}\"\r\n            required>\r\n            <option disabled value=\"\">Select a category</option>\r\n            <option class=\"text-capitalize\" *ngFor=\"let c of categories$ | async\" [value]=\"c.id\">{{ c.name }}</option>\r\n          </select>\r\n          <div class=\"invalid-feedback\" *ngIf=\"prod_category.errors?.required\">\r\n            Category is required\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"flavorsList\" class=\"form-group\">\r\n              <mat-form-field>\r\n                <mat-select name=\"flavors\" [(ngModel)]=\"flavorsItem\" placeholder=\"Flavor\" [formControl]=\"flavors\" multiple>\r\n                  <mat-option class=\"text-capitalize\" *ngFor=\"let flavor of flavorsList;\" [value]=\"flavor.name\">{{\r\n                    flavor.name }}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n           \r\n        </div>\r\n          <div *ngIf=\"toppingList\" class=\"form-group\">\r\n            <mat-form-field>\r\n              <mat-select name=\"addons\" [(ngModel)]=\"addons\" placeholder=\"Addons\" [formControl]=\"toppings\" multiple>\r\n                <mat-option class=\"text-capitalize\" *ngFor=\"let topping of toppingList;\" [value]=\"topping.name\">{{\r\n                  topping.name }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"pic\">Upload Image</label>\r\n          <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"item_pic.click()\">Select Image</button>\r\n        </div>\r\n        <div hidden class=\"form-control col\">\r\n          <input required class=\"form-control\" type=\"file\" (change)=\"onUpload($event)\" name=\"pic\" id=\"pic\" accept=\".png,.jpg, .jpeg\"\r\n            ngModel #item_pic>\r\n        </div>\r\n        <br>\r\n        <div>\r\n          <button [disabled]=\"!myForm.form.valid\" type=\"submit\" class=\"btn btn-dark btn-block\">Add Product</button>\r\n        </div>\r\n\r\n      </form>\r\n\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"product.name\" [ngClass]=\"{'col-md-5': product.name}\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" [src]=\"product.picture\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title text-capitalize\">{{ product.name}}</h5>\r\n          <p class=\"card-text\">{{ product.price | currency:\"USD\":\"symbol-narrow\" }} </p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _services_flavors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/flavors.service */ "./src/app/services/flavors.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_addons_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/addons.service */ "./src/app/services/addons.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(catServ, afStorage, message, addonsServ, prodServ, flavorServ, router) {
        this.catServ = catServ;
        this.afStorage = afStorage;
        this.message = message;
        this.addonsServ = addonsServ;
        this.prodServ = prodServ;
        this.flavorServ = flavorServ;
        this.router = router;
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.flavors = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.product = {
            name: '',
            price: 0,
            category: '',
            picture: '',
            updated: '',
            quantity: 0,
            addons: [''],
            flavors: ['']
        };
        this.categories$ = this.catServ.getCategories();
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.addonsServ.getAddons().subscribe(function (addons) {
            _this.toppingList = addons;
        });
        this.flavorSubscription = this.flavorServ.getFlavors().subscribe(function (flavors) {
            _this.flavorsList = flavors;
            console.log(_this.flavorsList);
        });
    };
    ProductFormComponent.prototype.onUpload = function (event) {
        var _this = this;
        var id = Math.random().toString(36).substring(2);
        var file = event.target.files[0];
        var imagSize = file.size;
        var fileType = file.type;
        var name = file.name;
        var ext = fileType.split('/', 1);
        if (imagSize > 10000000) {
            this.message.error('File is too large', 'Error Uploading');
            return;
        }
        if (ext[0] !== 'image') {
            this.message.error('Invalid File', 'Error Uploading');
            return;
        }
        // let reference = this.afStorage.ref('img/' + id + '-' + name);
        var reference = this.afStorage.ref('img/' + id + '-' + name);
        this.task = reference.put(file);
        this.uploadProgress = this.task.percentageChanges();
        this.task.then(function (snap) { return snap.ref.getDownloadURL().then(function (urlPic) { _this.downloadURL = urlPic; _this.product.picture = urlPic; }); });
        this.message.success('Image succesfully uploaded', 'Great');
    };
    ProductFormComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            // add error
            console.log('error');
            console.log(this.product);
            return;
        }
        else {
            // add product
            this.product.updated = new Date().toLocaleString();
            this.product.addons = this.addons || [];
            this.product.flavors = this.flavorsItem || [];
            this.prodServ.saveProduct(this.product).then(function () { return _this.message.success('New Product Added', 'Success!'); })
                .catch(function (err) {
                _this.message.error('Something went wrong', 'Error!');
                console.log(err);
            });
            this.router.navigate(['admin/products']);
            this.message.success('Product Added...', 'Added!');
        }
    };
    ProductFormComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.flavorSubscription.unsubscribe();
    };
    ProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/admin/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/admin/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _services_addons_service__WEBPACK_IMPORTED_MODULE_8__["AddonsService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _services_flavors_service__WEBPACK_IMPORTED_MODULE_0__["FlavorsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<br>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<!-- <app-footer></app-footer>  -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/admin-auth.guard */ "./src/app/guards/admin-auth.guard.ts");
/* harmony import */ var _services_addons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/addons.service */ "./src/app/services/addons.service.ts");
/* harmony import */ var _services_admin_order_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/admin-order-service.service */ "./src/app/services/admin-order-service.service.ts");
/* harmony import */ var _components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-filter/product-filter.component */ "./src/app/components/product-filter/product-filter.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _services_logins_logins_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/logins/logins.service */ "./src/app/services/logins/logins.service.ts");
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _routing_app_routes_app_routes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing/app-routes/app-routes.module */ "./src/app/routing/app-routes/app-routes.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/check-out/check-out.component */ "./src/app/components/check-out/check-out.component.ts");
/* harmony import */ var _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/order-success/order-success.component */ "./src/app/components/order-success/order-success.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/orders/orders.component */ "./src/app/admin/orders/orders.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_myorders_myorders_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/myorders/myorders.component */ "./src/app/components/myorders/myorders.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/product-form/product-form.component */ "./src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _admin_edit_edit_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/edit/edit.component */ "./src/app/admin/edit/edit.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/product-card/product-card.component */ "./src/app/components/product-card/product-card.component.ts");
/* harmony import */ var _components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/product-quantity/product-quantity.component */ "./src/app/components/product-quantity/product-quantity.component.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _components_shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/shopping-cart-summary/shopping-cart-summary.component */ "./src/app/components/shopping-cart-summary/shopping-cart-summary.component.ts");
/* harmony import */ var _components_shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/shipping-form/shipping-form.component */ "./src/app/components/shipping-form/shipping-form.component.ts");
/* harmony import */ var _components_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/orders/order-details/order-details.component */ "./src/app/components/orders/order-details/order-details.component.ts");
/* harmony import */ var _admin_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./admin/admin-order-details/admin-order-details.component */ "./src/app/admin/admin-order-details/admin-order-details.component.ts");
/* harmony import */ var _components_delivery_confirmation_delivery_confirmation_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/delivery-confirmation/delivery-confirmation.component */ "./src/app/components/delivery-confirmation/delivery-confirmation.component.ts");
/* harmony import */ var _components_shopping_cart_summary_order_review_order_review_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/shopping-cart-summary/order-review/order-review.component */ "./src/app/components/shopping-cart-summary/order-review/order-review.component.ts");
/* harmony import */ var _admin_manage_addons_manage_addons_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./admin/manage-addons/manage-addons.component */ "./src/app/admin/manage-addons/manage-addons.component.ts");
/* harmony import */ var _admin_manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./admin/manage-category/manage-category.component */ "./src/app/admin/manage-category/manage-category.component.ts");
/* harmony import */ var _components_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/myprofile/myprofile.component */ "./src/app/components/myprofile/myprofile.component.ts");
/* harmony import */ var _admin_manage_flavor_manage_flavor_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./admin/manage-flavor/manage-flavor.component */ "./src/app/admin/manage-flavor/manage-flavor.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
                _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_22__["ShoppingCartComponent"],
                _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_23__["CheckOutComponent"],
                _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_24__["OrderSuccessComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_26__["ProductsComponent"],
                _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_27__["AdminProductsComponent"],
                _admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_28__["OrdersComponent"],
                _components_myorders_myorders_component__WEBPACK_IMPORTED_MODULE_30__["MyordersComponent"],
                _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_32__["NotfoundComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_33__["RegisterComponent"],
                _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_34__["ProductFormComponent"],
                _admin_edit_edit_component__WEBPACK_IMPORTED_MODULE_37__["EditComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_38__["FooterComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_39__["DataTableComponent"],
                _components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_3__["ProductFilterComponent"],
                _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_42__["ProductCardComponent"],
                _components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_43__["ProductQuantityComponent"],
                _components_shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_45__["ShoppingCartSummaryComponent"],
                _components_shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_46__["ShippingFormComponent"],
                _components_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_47__["OrderDetailsComponent"],
                _admin_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_48__["AdminOrderDetailsComponent"],
                _components_delivery_confirmation_delivery_confirmation_component__WEBPACK_IMPORTED_MODULE_49__["DeliveryConfirmationComponent"],
                _components_shopping_cart_summary_order_review_order_review_component__WEBPACK_IMPORTED_MODULE_50__["OrderReviewComponent"],
                _admin_manage_addons_manage_addons_component__WEBPACK_IMPORTED_MODULE_51__["ManageAddonsComponent"],
                _admin_manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_52__["ManageCategoryComponent"],
                _components_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_53__["MyprofileComponent"],
                _admin_manage_flavor_manage_flavor_component__WEBPACK_IMPORTED_MODULE_54__["ManageFlavorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
                _routing_app_routes_app_routes_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                ng2_validation__WEBPACK_IMPORTED_MODULE_35__["CustomFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase, 'antojitos-chef'),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_36__["AngularFireStorageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatBadgeModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"], _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatSortModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_55__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_55__["HashLocationStrategy"] }, _services_logins_logins_service__WEBPACK_IMPORTED_MODULE_7__["LoginsService"], _services_users_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"], _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AdminAuthGuard"], _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"], _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_41__["ShoppingCartService"], _services_order_service__WEBPACK_IMPORTED_MODULE_44__["OrderService"], _services_admin_order_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminOrderService"], _services_addons_service__WEBPACK_IMPORTED_MODULE_1__["AddonsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/check-out/check-out.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/check-out/check-out.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/check-out/check-out.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/check-out/check-out.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"cart$ | async as cart\">\r\n  <div class=\"col\">\r\n    <div>\r\n      <h2 class=\"text-center mb-2\">Shipping or Delivery Information</h2>\r\n      <shipping-form [cart]=\"cart\" *ngIf=\"!reviewOrder\"></shipping-form>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <shopping-cart-summary [cart]=\"cart\" *ngIf=\"!reviewOrder\"></shopping-cart-summary>\r\n\r\n  </div>\r\n  <div>\r\n    <order-review [cart]=\"cart\" *ngIf=\"reviewOrder\"></order-review>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/check-out/check-out.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/check-out/check-out.component.ts ***!
  \*************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(shoppingCartServ) {
        this.shoppingCartServ = shoppingCartServ;
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartServ.getCart()];
                    case 1:
                        _a.cart$ = (_b.sent());
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__(/*! ./check-out.component.html */ "./src/app/components/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.css */ "./src/app/components/check-out/check-out.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/components/delivery-confirmation/delivery-confirmation.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/delivery-confirmation/delivery-confirmation.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* font-family: 'Lobster', cursive;\r\nfont-family: 'Yanone Kaffeesatz', sans-serif;\r\nfont-family: 'Srisakdi', cursive;\r\nfont-family: 'Cairo', sans-serif;\r\nfont-family: 'Maven Pro', sans-serif;\r\nfont-family: 'Orbitron', sans-serif;\r\nfont-family: 'Cookie', cursive; */\r\n\r\n.card-footer p {\r\n    font-family: 'Cairo', sans-serif;\r\n}\r\n\r\n.thank {\r\n    font-family: 'Orbitron', sans-serif;\r\n    font-size: 18px;\r\n}\r\n\r\n.logo {\r\n    font-family: 'Srisakdi', cursive;\r\n    font-size: 1.1rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/delivery-confirmation/delivery-confirmation.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/delivery-confirmation/delivery-confirmation.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"order\">\r\n  <div class=\"card\" #pdfcontent>\r\n    <div class=\"card-header\">\r\n      <h2 class= \"mb-4\">Order Delivery Report</h2>\r\n      <p class=\"font-weight-bold\">Order Placed On: {{ order.datePlaced }}</p>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <h3 class=\"text-capitalize\"> Customer: {{ order.shipping.name }} {{ order.shipping.last_name}}</h3>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Items</th>\r\n              <th>Quantity</th>\r\n              <th>Price</th>\r\n              <th>Total</th>\r\n            </tr>\r\n            \r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of order.items\">\r\n              <td class=\"text-capitalize\"><p class=\"font-weight-bold\">{{ item.product.name}}</p> <p><i>{{ item.product.flavors }}</i></p></td>\r\n              <td>{{ item.quantity }} </td>\r\n              <td>{{ item.product.price | currency:'USD': 'symbol-narrow' }}</td>\r\n              <td>{{ item.totalPrice | currency:'USD': 'symbol-narrow' }}</td> \r\n            </tr>\r\n            <tr>\r\n              <th></th>\r\n              <th></th>\r\n              <th>Grand Total</th>\r\n              <th>{{ order.grandTotal }}</th>\r\n            </tr>\r\n            <tr>\r\n              <!-- <th *ngIf=\"order.items.product.instruction\"><b>Special Instruction:</b>  {{ order.items.product.instruction }}</th> -->\r\n            </tr>\r\n            <tr><th colspan=\"4\" class=\"text-center alert alert-dark\">Delivery Information</th></tr>\r\n\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td class=\"text-capitalize\" colspan=\"2\"><b>Delivery Address: </b> {{ order.shipping.address }} </td>\r\n              <td *ngIf=\"order.shipping.apt\"><b>Apt: </b> {{ order.shipping.apt }}</td>\r\n              <td><b>City: </b> {{ order.shipping.city }}</td>\r\n              \r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"4\"><b>Phone: </b>{{ order.shipping.phone }}</td>\r\n              \r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"4\"><p *ngIf=\"order.shipping.message\"><b>Delivery Instruction:</b>  {{ order.shipping.message }}</p></td>\r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <p class=\"thank font-italic mb-5\">Thanks <span class=\"text-capitalize\">{{ order.shipping.name}}</span> for your business.</p>\r\n    <p class=\"logo text-center blockquote-footer\"> Somos Antojitos Chef, <span class=\"font-italic\">Donde tu antojito es un arte.</span> </p>\r\n    <img class=\"img float-right\" width=\"60\" height=\"60\" src=\"../../../assets/footer_logo.png\" alt=\"logo\">\r\n    <div>\r\n     \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/delivery-confirmation/delivery-confirmation.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/delivery-confirmation/delivery-confirmation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DeliveryConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryConfirmationComponent", function() { return DeliveryConfirmationComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_order_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin-order-service.service */ "./src/app/services/admin-order-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DeliveryConfirmationComponent = /** @class */ (function () {
    function DeliveryConfirmationComponent(route, adminOrders) {
        this.route = route;
        this.adminOrders = adminOrders;
    }
    DeliveryConfirmationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.route.snapshot.params['id']];
                    case 1:
                        id = _a.sent();
                        this.subscription = this.adminOrders.getOrder(id).subscribe(function (order) {
                            _this.order = order;
                            console.log(_this.order);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DeliveryConfirmationComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DeliveryConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delivery-confirmation',
            template: __webpack_require__(/*! ./delivery-confirmation.component.html */ "./src/app/components/delivery-confirmation/delivery-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./delivery-confirmation.component.css */ "./src/app/components/delivery-confirmation/delivery-confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_admin_order_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminOrderService"]])
    ], DeliveryConfirmationComponent);
    return DeliveryConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-distributed{\r\n\tbackground-color: #292c2f;\r\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n\theight: auto;\r\n\ttext-align: left;\r\n\tposition: relative;\r\n    font: bold 16px sans-serif;\r\n    \r\n\tpadding: 55px 50px;\r\n    margin-top: 30px;\r\n    }\r\n\r\n.footer-distributed .footer-left,\r\n.footer-distributed .footer-center,\r\n.footer-distributed .footer-right{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n\r\n/* Footer left */\r\n\r\n.footer-distributed .footer-left{\r\n\twidth: 40%;\r\n}\r\n\r\n.footer-company-about {\r\n\tfont-family: 'Srisakdi', cursive;\r\n    font-size: 18px;\r\n}\r\n\r\n/* The company logo */\r\n\r\n.footer-distributed h3{\r\n\tcolor:  #ffffff;\r\n\tfont: normal 26px 'Cookie', cursive;\r\n\tmargin: 0;\r\n}\r\n\r\n.footer-distributed h3 span{\r\n\tcolor:  #5383d3;\r\n}\r\n\r\n/* Footer links */\r\n\r\n.footer-distributed .footer-links{\r\n\tcolor:  #ffffff;\r\n\tmargin: 20px 0 12px;\r\n\tpadding: 0;\r\n}\r\n\r\n.footer-distributed .footer-links a{\r\n\tdisplay:inline-block;\r\n\tline-height: 1.8;\r\n\ttext-decoration: none;\r\n\tcolor:  inherit;\r\n}\r\n\r\n.footer-distributed .footer-company-name{\r\n\tcolor:  #8f9296;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n\r\n/* Footer Center */\r\n\r\n.footer-distributed .footer-center{\r\n\twidth: 35%;\r\n}\r\n\r\n.footer-distributed .footer-center i{\r\n\tbackground-color:  #33383b;\r\n\tcolor: #ffffff;\r\n\tfont-size: 25px;\r\n\twidth: 38px;\r\n\theight: 38px;\r\n\tborder-radius: 50%;\r\n\ttext-align: center;\r\n\tline-height: 42px;\r\n\tmargin: 10px 15px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.footer-distributed .footer-center i.fa-envelope{\r\n\tfont-size: 17px;\r\n\tline-height: 38px;\r\n}\r\n\r\n.footer-distributed .footer-center p{\r\n\tdisplay: inline-block;\r\n\tcolor: #ffffff;\r\n\tvertical-align: middle;\r\n\tmargin:0;\r\n}\r\n\r\n.footer-distributed .footer-center p span{\r\n\tdisplay:block;\r\n\tfont-weight: normal;\r\n\tfont-size:14px;\r\n\tline-height:2;\r\n}\r\n\r\n.footer-distributed .footer-center p a{\r\n\tcolor:  #5383d3;\r\n\ttext-decoration: none;;\r\n}\r\n\r\n/* Footer Right */\r\n\r\n.footer-distributed .footer-right{\r\n\twidth: 20%;\r\n}\r\n\r\n.footer-distributed .footer-company-about{\r\n\tline-height: 20px;\r\n\tcolor:  #92999f;\r\n\tfont-size: 13px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n\r\n.footer-distributed .footer-company-about span{\r\n\tdisplay: block;\r\n\tcolor:  #ffffff;\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.footer-distributed .footer-icons{\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.footer-distributed .footer-icons a{\r\n\tdisplay: inline-block;\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tcursor: pointer;\r\n\tbackground-color:  #33383b;\r\n\tborder-radius: 2px;\r\n\r\n\tfont-size: 20px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\tline-height: 35px;\r\n\r\n\tmargin-right: 3px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n/* If you don't want the footer to be responsive, remove these media queries */\r\n\r\n@media (max-width: 880px) {\r\n\r\n\t.footer-distributed{\r\n\t\tfont: bold 14px sans-serif;\r\n\t}\r\n\r\n\t.footer-distributed .footer-left,\r\n\t.footer-distributed .footer-center,\r\n\t.footer-distributed .footer-right{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 40px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.footer-distributed .footer-center i{\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content of your page would go here. -->\r\n\r\n<footer class=\"footer-distributed\">\r\n\r\n  <div class=\"footer-left\">\r\n\r\n    <h3>Company<span>logo</span></h3>\r\n\r\n    <p class=\"footer-company-name\">Antojitos Chef &copy; 2018</p>\r\n  </div>\r\n\r\n  <div class=\"footer-center\">\r\n\r\n    <div>\r\n      <i class=\"fa fa-map-marker\"></i>\r\n      <p><span>1266 Grand Concourse</span> Bronx, NY</p>\r\n    </div>\r\n\r\n    <div>\r\n      <i class=\"fa fa-phone\"></i>\r\n      <p>718-588-0744</p>\r\n    </div>\r\n\r\n    <div>\r\n      <i class=\"fa fa-envelope\"></i>\r\n      <p><a href=\"mailto:antojitoschef168@gmail.com\">antojitoschef168@gmail.com</a></p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"footer-right\">\r\n\r\n    <p class=\"footer-company-about\">\r\n      <span>Donde tu antojitos es un arte</span>\r\n      \r\n    </p>\r\n\r\n    <div class=\"footer-icons\">\r\n\r\n      <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n      \r\n      <a  href=\"https://www.instagram.com/antojitoschef/\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\r\n      \r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    max-width: 800px;\r\n    height: 500px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n   \r\n<div class=\"row2\" *ngIf=\"products\">\r\n<a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" >\r\n<ngb-carousel >\r\n        <ng-template *ngFor=\"let product of products\" ngbSlide>\r\n          <img [src]=\"product.picture\" alt=\"Random first slide\">\r\n          <div class=\"carousel-caption\">\r\n            <h3 style=\"color:black\" class=\"text-capitalize\">{{ product.name }}</h3>\r\n            <p style=\"color:black\">Price: {{ product.price | currency:'USD': 'symbol-narrow' }}</p>\r\n          </div>\r\n        </ng-template>\r\n        \r\n      </ngb-carousel>\r\n    </a>\r\n\r\n</div>\r\n<div class=\"row3\">\r\n    <app-footer></app-footer>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(productServ, config) {
        this.productServ = productServ;
        this.config = config;
        this.showFiller = false;
        this.products = [];
        this.config.interval = 3000;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodSub = this.productServ.getProducts().subscribe(function (products) {
            if (products) {
                _this.products = products;
            }
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.prodSub.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#error {\r\n    transition: ease-in-out 1s;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  \r\n  <div class=\"col-md-6 mx-auto\">\r\n      <div id=\"error\" *ngIf=\"errorMsg\">\r\n          <p class=\"alert alert-warning\">{{ errorMsg }}</p>\r\n        </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"text-center pb-4 pt-3\">\r\n          <span class=\"text-primary\"><i class=\"fa fa-lock\"></i> Sign In /</span> Login\r\n        </h1>\r\n        <form (submit)=\"login()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" required>\r\n          </div>\r\n          \r\n          <input type=\"submit\" value=\"Login\" class=\"btn btn-primary btn-block\">\r\n        </form>\r\n        <div class=\"mt-5\">\r\n          <p>Do not have an account? <a class=\"badge badge-primary\" routerLink=\"/register\"><h5>Sign Up!</h5></a></p>\r\n        </div>\r\n      </div>\r\n     \r\n    </div>\r\n   \r\n  </div>\r\n \r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_logins_logins_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/logins/logins.service */ "./src/app/services/logins/logins.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authServ) {
        this.authServ = authServ;
        this.errorMsg = '';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var login = this.authServ.login(this.email.toLowerCase(), this.password);
        console.log(login.then(function (res) { return console.log('Res:', res); }).catch(function (err) {
            console.log('Error:', err);
            if (err.code === 'auth/argument-error') {
                _this.errorMsg = 'Password and Email required';
                _this.timeOut5sec();
            }
            else if (err.code === 'auth/wrong-password') {
                _this.errorMsg = 'Invalid password or email does not exist';
                _this.timeOut5sec();
            }
            else if (err.code === 'auth/too-many-requests') {
                _this.errorMsg = 'Too many unsuccelfull tries. Please try again later.';
                _this.timeOut5sec();
            }
            else {
                _this.errorMsg = 'User not found.';
                _this.timeOut5sec();
            }
        }));
    };
    LoginComponent.prototype.timeOut5sec = function () {
        var _this = this;
        setTimeout(function () { _this.errorMsg = ''; }, 5000);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_logins_logins_service__WEBPACK_IMPORTED_MODULE_1__["LoginsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/myorders/myorders.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/myorders/myorders.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .data-table {\r\n    width: 80%;\r\n    margin: 20px auto;\r\n} */\r\n\r\ntable {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/components/myorders/myorders.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/myorders/myorders.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <h2 class=\"text-center mb-4 animated pulse\">My Orders History</h2>\r\n  <div class=\"table-responsive-md table-responsive-sm\">\r\n\r\n \r\n  <table *ngIf=\"orders\" class=\"table animated fadeInRight\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Date/Time</th>\r\n        <th>Status</th>\r\n        <th>Amount</th>\r\n        <th>Details</th>\r\n      </tr>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of orders\">\r\n        <td class=\"text-capitalize\">{{ item.shipping.name }} {{ item.shipping.last_name }}</td>\r\n        <td>{{ item.datePlaced }}</td>\r\n        <td [ngClass]=\"{'bg-success': item.status === 'delivered', 'bg-info': item.status === 'new', 'bg-danger': item.status === 'canceled', 'bg-warning': item.status === 'in-progress'}\"  class=\"text-capitalize\">{{ item.status }}</td>\r\n        <td>{{ item.grandTotal | currency:'USD': 'symbol-narrow' }}</td>\r\n        <td><a [routerLink]=\"['/myorders/detail/', item.items[0].product.id]\" class=\"btn btn-secondary\">View Order</a></td>\r\n       \r\n\r\n      </tr>\r\n\r\n\r\n    </tbody>\r\n    <tfoot>\r\n\r\n    </tfoot>\r\n\r\n  </table>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/myorders/myorders.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/myorders/myorders.component.ts ***!
  \***********************************************************/
/*! exports provided: MyordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyordersComponent", function() { return MyordersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MyordersComponent = /** @class */ (function () {
    function MyordersComponent(orderServ, modalService) {
        this.orderServ = orderServ;
        this.modalService = modalService;
        this.orders = [];
    }
    MyordersComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem('userId')];
                    case 1:
                        userId = _a.sent();
                        this.subscription = this.orderServ.getUserId(userId).subscribe(function (order) { return _this.orders = order; });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyordersComponent.prototype.openLg = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    MyordersComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MyordersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myorders',
            template: __webpack_require__(/*! ./myorders.component.html */ "./src/app/components/myorders/myorders.component.html"),
            styles: [__webpack_require__(/*! ./myorders.component.css */ "./src/app/components/myorders/myorders.component.css")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], MyordersComponent);
    return MyordersComponent;
}());



/***/ }),

/***/ "./src/app/components/myprofile/myprofile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/myprofile/myprofile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n\r\n  .example-header-image {\r\n    background-size: cover;\r\n  }\r\n\r\n  .grid-2 {\r\n      display: -ms-grid;\r\n      display: grid;\r\n      -ms-grid-columns: 1fr;\r\n          grid-template-columns: 1fr;\r\n      /* grid-column-gap: 10px; */\r\n  }\r\n\r\n  .example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n\r\n  b {\r\n      margin-right: 5px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/myprofile/myprofile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/myprofile/myprofile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-2\" *ngIf=\"user\">\n    <audio src=\"\"></audio>\n  <div>\n    <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title class=\"text-capitalize\"><h3>{{ user.name }} {{ user.last_name }}</h3></mat-card-title>\n          <mat-card-subtitle>Member since: {{ user.joined }}</mat-card-subtitle>\n        </mat-card-header>\n        <img (click)=changePicture($event) *ngIf=\"user.picture; else noPicture\" mat-card-image src=\"{{ user.picture }}\" alt=\"user.name\">\n        <ng-template #noPicture>\n            <img (click)=changePicture($event) mat-card-image src=\"http://pngimages.net/sites/default/files/user-png-image-15189.png\" alt=\"{{ user.name }}\">\n        </ng-template>\n        <mat-card-content>\n            <mat-list role=\"list\">\n                <mat-list-item role=\"listitem\"><b>Address:</b>  {{ user.address.address }}</mat-list-item>\n                <mat-list-item *ngIf=\"user.address.apt\" role=\"listitem\"><b>Apt:</b>  {{ user.address.apt }}</mat-list-item>\n                <mat-list-item role=\"listitem\"><b>City/State: </b>  {{ user.address.city }} {{ user.address.state }}</mat-list-item>\n                <mat-list-item role=\"listitem\"><b>Phone: </b>  {{ user.phone }} </mat-list-item>\n                <mat-list-item role=\"listitem\"><b>Email: </b>  {{ user.email }} </mat-list-item>\n               \n             \n            </mat-list>\n        </mat-card-content>\n        <mat-card-actions>\n        <button color=\"primary\"  (click)=\"openLg(content)\" mat-raised-button>Edit Info.</button>\n          <!-- modal template -->\n          <ng-template #content let-modal>\n            <div class=\"modal-header animated fadeInUp\">\n              <h4 class=\"modal-title text-capitalize\">Update My Profile</h4>\n              <button #closeModal type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form #profile=\"ngForm\"  (ngSubmit)=\"updateUser(profile, closeModal)\">\n                  <div class=\"example-container\">\n                      <mat-form-field>\n                        <input name=\"name\" [(ngModel)]=\"user.name\" matInput placeholder=\"Name\">\n                      </mat-form-field>\n                      <mat-form-field>\n                          <input name=\"last_name\" [(ngModel)]=\"user.last_name\" matInput placeholder=\"Last Name\">\n                      </mat-form-field>\n                      <mat-form-field>\n                          <input type=\"phone\" name=\"phone\" [(ngModel)]=\"user.phone\" matInput placeholder=\"Phone\">\n                      </mat-form-field>\n                      <mat-form-field>\n                          <input name=\"email\" [(ngModel)]=\"user.email\" matInput placeholder=\"Email\">\n                      </mat-form-field>\n                      <mat-form-field>\n                          <input name=\"address\" [(ngModel)]=\"user.address.address\" matInput placeholder=\"Address\">\n                      </mat-form-field>\n                      <mat-form-field *ngIf=\"user.address.apt\">\n                          <input name=\"apt\" [(ngModel)]=\"user.address.apt\" matInput placeholder=\"Apt\">\n                      </mat-form-field>\n                      <mat-form-field>\n                          <input name=\"city\" [(ngModel)]=\"user.address.city\" matInput placeholder=\"City\">\n                      </mat-form-field>\n                      <mat-form-field *ngIf=\"user.address.zipcode\">\n                          <input name=\"zipcode\" [(ngModel)]=\"user.address.zipcode\" matInput placeholder=\"Zip Code\">\n                      </mat-form-field>\n                  \n                     <button hidden #update type=\"submit\"></button>\n                    </div>\n              </form>\n              \n        \n            </div>\n\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-warning\" (click)=\"modal.close('Close click')\">Close</button>\n              <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"update.click()\" > Update </button>\n            </div>\n          </ng-template>\n         \n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div>\n      <h2>Other Information</h2>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/myprofile/myprofile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/myprofile/myprofile.component.ts ***!
  \*************************************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MyprofileComponent = /** @class */ (function () {
    function MyprofileComponent(userServ, modalService, msg) {
        this.userServ = userServ;
        this.modalService = modalService;
        this.msg = msg;
    }
    MyprofileComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = localStorage.getItem('userId');
                        if (!id) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.userServ.getUser(id).subscribe(function (user) { return _this.user = user; })];
                    case 1:
                        _a.subscription = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MyprofileComponent.prototype.updateUser = function (e, closeModal) {
        var _this = this;
        this.userServ.updateUser(this.user).then(function () { return _this.msg.success('Profile Updated', 'Success'); });
        closeModal.click();
    };
    MyprofileComponent.prototype.changePicture = function (e) {
        console.log(e);
    };
    MyprofileComponent.prototype.openLg = function (content) {
        // await this.addToCart();
        this.modalService.open(content, { size: 'lg' });
    };
    MyprofileComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MyprofileComponent.prototype, "closeModal", void 0);
    MyprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! ./myprofile.component.html */ "./src/app/components/myprofile/myprofile.component.html"),
            styles: [__webpack_require__(/*! ./myprofile.component.css */ "./src/app/components/myprofile/myprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], MyprofileComponent);
    return MyprofileComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle {\n    cursor: pointer;\n}\n.nav-item {\n    padding-right: 30px;\n   \n}\nul>li>a {\n    color: aliceblue;\n    font-weight: bold;\n}\nul>li>a:hover {\n    background-color: dimgray;\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-expand-sm navbar-light fixed-top \" style=\"background-color: #96194b;\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">\r\n    <img style=\"border-radius: 100%\" src=\"../../../assets/antojo.jpg\" width=\"60\" height=\"60\" alt=\"logo\">\r\n  </a>\r\n  <div class=\"navbar-brand d-block d-sm-none\">\r\n      <a class=\"shoppingCart\" style=\"color:rgb(241, 233, 223); font-size: 1.5rem;\" class=\"btn btn-outline\" routerLink=\"/shopping-cart\">Cart  <span *ngIf=\"cart$ | async as cart\"> <mat-icon matBadge=\" {{ cart.totalItemsCount }}\" matBadgeColor=\"primary\">local_grocery_store</mat-icon></span></a>\r\n   </div>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/\"> <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li *ngIf=\"cart$ | async as cart\" class=\"nav-item d-none d-sm-block shoppingCart\">\r\n        <a class=\"nav-link\" routerLink=\"/shopping-cart\"> <mat-icon matBadge=\" {{ cart.totalItemsCount }}\" matBadgeColor=\"primary\">local_grocery_store</mat-icon></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a routerLink=\"/home\" class=\"nav-link\" >Home</a>\r\n        </li>\r\n        <li *ngIf=\"user\" class=\"nav-item\">\r\n          <a *ngIf=\"user.isAdmin\" routerLink=\"/admin/orders\" class=\"nav-link\" >Manage Orders</a>\r\n        </li>\r\n      \r\n      <li *ngIf=\"loggedIn\" ngbDropdown class=\"nav-item dropdown\">\r\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle text-capitalize\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <span *ngIf=\"user && loggedIn\">{{ user.name }} {{ user.last_name }}</span>\r\n          <ng-template #noUser>\r\n            <span>{{ guest }}</span>\r\n          </ng-template>\r\n        </a>\r\n        <div *ngIf=\"user\" ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <li *ngIf=\"loggedIn\" class=\"nav-item pull-right\">\r\n                <a routerLink=\"/myprofile\" class=\"nav-link\" >My Profile</a>\r\n              </li>\r\n             \r\n          <ng-container *ngIf=\"user.isAdmin\">\r\n            <a class=\"dropdown-item\" routerLink=\"admin/products\">Manage Products</a>\r\n            <a class=\"dropdown-item\" routerLink=\"admin/orders\">Manage Orders</a>\r\n            <a class=\"dropdown-item\" routerLink=\"admin/addons\">Manage Addons</a>\r\n            <a class=\"dropdown-item\" routerLink=\"admin/categories\">Manage Categories</a>\r\n            <a class=\"dropdown-item\" routerLink=\"admin/flavors\">Manage Flavors</a>\r\n          </ng-container>\r\n        </div>\r\n        \r\n      </li>\r\n      <li *ngIf=\"loggedIn\" class=\"nav-item\">\r\n          <a routerLinkActive=\"active current\" class=\"nav-link\" routerLink=\"myorders\">My Orders</a>\r\n        </li>\r\n      <li *ngIf=\"!loggedIn\" class=\"nav-item float-right\">\r\n          <a routerLinkActive=\"active current\" class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n        <li *ngIf=\"loggedIn\" class=\"nav-item pull-right\">\r\n          <a routerLinkActive=\"active current\" class=\"nav-link\" (click)=logout()>Log Out</a>\r\n        </li>\r\n        <li *ngIf=\"!loggedIn\"  class=\"nav-item pull-right\">\r\n            <a routerLinkActive=\"active current\" class=\"nav-link\" routerLink=\"register\">Register</a>\r\n          </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_logins_logins_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/logins/logins.service */ "./src/app/services/logins/logins.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, msg, route, orderServ, shoppingCartService, userServ) {
        var _this = this;
        this.auth = auth;
        this.msg = msg;
        this.route = route;
        this.orderServ = orderServ;
        this.shoppingCartService = shoppingCartService;
        this.userServ = userServ;
        this.orders = [];
        this.newOrder = false;
        this.orderCount = 0;
        this.subscription = this.auth.getState().subscribe(function (user) {
            if (user) {
                _this.loggedIn = true;
                _this.userServ.getUser(user.uid).subscribe(function (res) {
                    _this.user = res;
                    if (_this.user.isAdmin && _this.orderCount > 0) {
                        _this.msg.info("You have " + _this.orderCount + " new orders", 'New Order');
                    }
                });
                _this.userEmail = user.email;
            }
            else {
                _this.loggedIn = false;
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = (_b.sent());
                        this.orderSubscription = this.orderServ.getAllOrders().subscribe(function (order) {
                            _this.orders = order;
                            var filtered = _this.orders.filter(function (neworder) { return neworder.status === 'new'; });
                            filtered.forEach(function (order) {
                                if (order.status === 'new') {
                                    _this.orderCount += 1;
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.orderSubscription.unsubscribe();
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
        this.route.navigate(['/']);
        this.msg.info('You are now logged Out', 'Logged Out');
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_logins_logins_service__WEBPACK_IMPORTED_MODULE_4__["LoginsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"],
            _services_users_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/components/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/order-success/order-success.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/order-success/order-success.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/order-success/order-success.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/order-success/order-success.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" *ngIf=\"order\"> \r\n  <div class=\"row\">\r\n    <div col>\r\n        <h2 class=\"text-center mb-4 animated slideInUp\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i> Thank you for submitting your order!</h2>\r\n        <p>Order Placed on {{ order.datePlaced }}  </p>\r\n       \r\n    </div>\r\n    <div class=\"col\">\r\n      <a routerLink=\"/\" class=\" btn btn-dark\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Order More/ Go Back</a>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-sm-12\">\r\n      <h2>Status: <span class=\"badge badge-secondary text-uppercase\">{{ order.status }}</span></h2>\r\n    </div>\r\n    <div class=\"col-5\">\r\n      <ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Your Order Status Is:</h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          \r\n           <div [ngClass]=\"{'bg-success': order.status === 'delivered', 'bg-info': order.status === 'new', 'bg-warning': order.status === 'in-progress'}\" class=\"text-center font-weight-bold\"><h1>{{ order.status | uppercase }}</h1></div>\r\n         </div>\r\n\r\n             <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-warning\" (click)=\"modal.close('Close click')\">Close</button>\r\n              \r\n        </div>\r\n       \r\n      </ng-template>\r\n    </div>\r\n    <div class=\"col\">\r\n      <button class=\"btn btn-outline-primary mb-2 mr-2 float-right\" (click)=\"openVerticallyCentered(content)\">Check Order Status</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"table-responsive-sm table-responsive-md\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>Item/Items</th>\r\n          <th>Quantity</th>\r\n          <th>Price</th>\r\n          <th>Total</th>\r\n        </tr>\r\n  \r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of order.items\">\r\n          <td><img  *ngIf=\"item.product.picture\" width=\"50\" height=\"50\" class=\"img\" src=\"{{ item.product.picture }}\" alt=\"\"></td>\r\n          <td class=\"text-capitalize\">{{ item.product.name }}</td>\r\n          <td>{{ item.quantity }}</td>\r\n          \r\n          <td>{{ item.product.price | currency:'USD': 'symbol-narrow'  }}</td>\r\n          <td>{{ item.totalPrice | currency:'USD': 'symbol-narrow'  }}</td> \r\n        </tr>\r\n        <tr>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th>Grand Total</th>\r\n          <th>{{ order.grandTotal | currency:'USD': 'symbol-narrow' }}</th>\r\n        </tr>\r\n        <br>\r\n        <tr>\r\n          <th colspan=\"5\"> <h3 class=\"text-center alert alert-light\">Address Information <i class=\"fa fa-address-card\" aria-hidden=\"true\"></i></h3></th>\r\n        </tr>\r\n        <tr>\r\n          <th>Adress/Street</th>\r\n          <th>Apt</th>\r\n          <th>City</th>\r\n          <th>Phone</th>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fa fa-home\" aria-hidden=\"true\"></i> {{ order.shipping.address }}</td>\r\n          <td>{{ order.shipping.apt }}</td>\r\n          <td>{{ order.shipping.city }}</td>\r\n          <td><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> {{ order.shipping.phone }}</td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"5\">\r\n            <div *ngIf=\"order.shipping.message != ''; else noMessage\" class=\"card\">\r\n                <div class=\"card-header\">\r\n                  Delivery Instruction\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <blockquote class=\"blockquote mb-0\">\r\n                    <p>{{ order.shipping.message }}</p>\r\n                    \r\n                  </blockquote>\r\n                </div>\r\n              </div>\r\n              \r\n              <ng-template #noMessage>\r\n                  <div class=\"card\">\r\n                      <div class=\"card-body\">\r\n                          <h4 class=\"text-center\">No Instructuion submitted for delivery</h4>\r\n                      </div>\r\n                    </div>\r\n              </ng-template>\r\n            </td>\r\n        </tr>\r\n       \r\n  \r\n  \r\n      </tbody>\r\n      <tfoot>\r\n  \r\n      </tfoot>\r\n  \r\n    </table>\r\n  </div>\r\n  \r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <p class=\"alert alert-info font-weight-light\" >Note: If your order status is <b>NEW. </b>  Your order has been received but not being prepared.</p>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components/order-success/order-success.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/order-success/order-success.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_order_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin-order-service.service */ "./src/app/services/admin-order-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent(adminOrder, activatedRoute, modalService) {
        this.adminOrder = adminOrder;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.activatedRoute.snapshot.params['id']];
                    case 1:
                        id = _a.sent();
                        this.subscription = this.adminOrder.getOrder(id).subscribe(function (order) { return _this.order = order; });
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderSuccessComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    OrderSuccessComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OrderSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! ./order-success.component.html */ "./src/app/components/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.css */ "./src/app/components/order-success/order-success.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_order_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminOrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/components/orders/order-details/order-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/orders/order-details/order-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/orders/order-details/order-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/orders/order-details/order-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container animated slideInUp\" #pdfcontent *ngIf=\"product && orders[0]; else noOrders\"> \r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n        <h2 class=\"text-center mb-4 animated pulse\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i> Order Details</h2>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div>\r\n          <button class=\"btn btn-outline-primary mb-2 mr-2 float-right btn-block\" (click)=\"openVerticallyCentered(content)\">Check Order Status</button>\r\n      </div>\r\n        <ng-template #content let-modal>\r\n            <div *ngIf=\"orders[0]\" class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Your Order Status Is:</h4>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              \r\n               <div [ngClass]=\"{'bg-success':orders[0].status === 'delivered', 'bg-info':orders[0].status === 'new', 'bg-warning': orders[0].status === 'in-progress'}\" class=\"text-center font-weight-bold\"><h1>{{ orders[0].status | uppercase }}</h1></div>\r\n             </div>\r\n    \r\n                 <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-warning\" (click)=\"modal.close('Close click')\">Close</button>\r\n                  \r\n            </div>\r\n           \r\n          </ng-template>\r\n    </div>\r\n    \r\n    <div class=\"col\">\r\n      <button (click)=\"goBack()\" class=\"float-right btn btn-dark\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Go Back</button>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"table-responsive-sm table-responsive-xs table-responsive-md\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"d-none d-sm-block\"></th>\r\n          <th>Item/Items</th>\r\n          <th>Quantity</th>\r\n          <th>Price</th>\r\n          <th>Total</th>\r\n          <th></th>\r\n        </tr>\r\n  \r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of product\">\r\n          <td class=\"d-none d-sm-block\"><img  *ngIf=\"item.picture\" width=\"50\" height=\"50\" class=\"img\" src=\"{{ item.picture }}\" alt=\"\"></td>\r\n          <td class=\"text-capitalize\"><p class=\"font-weight-bold\">{{ item.name }}</p><p class=\"text-italic\">{{ item.flavors }}</p></td>\r\n          <td>{{ item.quantity }}</td>\r\n          \r\n          <td>{{ item.price | currency:'USD': 'symbol-narrow'  }}</td>\r\n          <td>{{ item.totalPrice | currency:'USD': 'symbol-narrow'  }}</td> \r\n          <td><button class=\"btn btn-outline-dark\" (click)=\"openBackDropCustomClass(content)\">View Addons</button></td>\r\n          <!-- ng template modal with addons -->\r\n          <ng-template #content let-modal>\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Addons Included</h4>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div *ngIf=\"orders\" class=\"modal-body animated slideInUp\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"text-center card-title\">Ingridients/Addons Requested.</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <ul class=\"list-inline\">\r\n                        <li class=\"list-inline-item text-center\"><p class=\"mr-5 text-capitalize\">{{ item.addons }}</li>\r\n                      </ul>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\"> \r\n                <div class=\"card-header\">\r\n                  <h3 class=\"text-center card-title\">Special Request</h3></div>\r\n                <div class=\"card-body\">\r\n                 <p>{{ item.instruction }}</p> \r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-warning\" (click)=\"modal.close('Close click')\">Close</button>\r\n            </div>\r\n          </ng-template>\r\n        </tr>\r\n        <tr>\r\n          <th class=\"d-none d-sm-block\"></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th>Grand Total</th>\r\n          <th>{{ orders[0].grandTotal | currency:'USD': 'symbol-narrow' }}</th>\r\n          <th></th>\r\n        </tr>\r\n        <br>\r\n        <tr>\r\n          <th colspan=\"5\"> <h3 class=\"text-center alert alert-light\">Address Information <i class=\"fa fa-address-card\" aria-hidden=\"true\"></i></h3></th>\r\n        </tr>\r\n        <tr>\r\n          <th colspan=\"2\">Adress/Street</th>\r\n          <th>Apt</th>\r\n          <th>City</th>\r\n          <th colspan=\"2\">Phone</th>\r\n        </tr>\r\n        <tr>\r\n          \r\n          <td colspan=\"2\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> {{ orders[0].shipping.address }}</td>\r\n          <td class=\"text-uppercase\">{{ orders[0].shipping.apt }}</td>\r\n          <td>{{ orders[0].shipping.city }}</td>\r\n          <td colspan=\"2\"> <p><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> {{ orders[0].shipping.phone }}</p></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  Delivery Instruction\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <blockquote class=\"blockquote mb-0\">\r\n                    <p>{{ orders[0].shipping.message }}</p>\r\n                    \r\n                  </blockquote>\r\n                </div>\r\n              </div>\r\n              \r\n              <ng-template #noMessage>\r\n                  <div class=\"card\">\r\n                      <div class=\"card-body\">\r\n                          <h4 class=\"text-center\">No Instructuion submitted for delivery</h4>\r\n                      </div>\r\n                    </div>\r\n              </ng-template>\r\n            </td>\r\n        </tr>\r\n       \r\n      </tbody>\r\n      <tfoot>\r\n  \r\n      </tfoot>\r\n  \r\n    </table>\r\n  </div>\r\n  \r\n  \r\n  \r\n  </div>\r\n  <div>\r\n    <ng-template #noOrders>\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h3>No Orders to Display...</h3>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components/orders/order-details/order-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/orders/order-details/order-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(activedRoute, location, modalService, orderServ) {
        this.activedRoute = activedRoute;
        this.location = location;
        this.modalService = modalService;
        this.orderServ = orderServ;
        this.orders = [];
        this.product = [];
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id, userId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.activedRoute.snapshot.params['id'];
                        return [4 /*yield*/, localStorage.getItem('userId')];
                    case 1:
                        userId = _a.sent();
                        this.subscription = this.orderServ.getOrderByUser(userId).subscribe(function (orders) {
                            _this.orders = orders.filter(function (res) { return res.items[0].product.id === id; });
                            console.log(_this.orders);
                            _this.orders.forEach(function (res) { return res.items.forEach(function (order) {
                                _this.product.push({ name: order.product.name,
                                    picture: order.product.picture,
                                    quantity: order.quantity,
                                    price: order.product.price,
                                    totalPrice: order.totalPrice,
                                    addons: order.product.addons,
                                    flavors: order.product.flavors,
                                    instruction: order.product.instruction
                                });
                            }); });
                            console.log(_this.product);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderDetailsComponent.prototype.openBackDropCustomClass = function (content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    };
    OrderDetailsComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    OrderDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OrderDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/components/orders/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.css */ "./src/app/components/orders/order-details/order-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _services_order_service__WEBPACK_IMPORTED_MODULE_0__["OrderService"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/product-card/product-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/product-card/product-card.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-footer {\r\n    padding: 0;\r\n}\r\n\r\n.example-radio-group {\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n.example-radio-button {\r\n    margin: 5px;\r\n  }\r\n\r\n.example-selected-value {\r\n    margin: 15px 0;\r\n  }\r\n\r\n.list-inline {\r\n    padding-left: 0;\r\n    list-style: none;\r\n    display: inline-flex;\r\n    margin-right: 10px;\r\n    font-style: italic;\r\n}\r\n\r\n.dark-modal .modal-content {\r\n  background-color: #84ad79;\r\n  color: white;\r\n}\r\n\r\n.dark-modal .close {\r\n  color: white;\r\n}\r\n\r\n.light-blue-backdrop {\r\n  background-color: #5cb3fd;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/product-card/product-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-card/product-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"product.name\" class=\"card top\">\r\n  <img width=\"400\" height=\"300\" *ngIf=\"product.picture\" class=\"card-img-top\" [src]=\"product.picture\" alt=\"{{ product.name }}\">\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title text-capitalize\">{{ product.name }}</h4>\r\n    <p class=\"card-text\">{{ product.price | currency:'USD': 'symbol-narrow' }}</p>\r\n    <ul class=\"list-inline\" *ngFor=\"let flavor of product.flavors\">\r\n      <li class=\"list-inline-item text-capitalize\">{{ flavor }}</li>\r\n    </ul>\r\n  </div>\r\n  <div #child *ngIf=\"showActions && shoppingCart && flavors?.length > 0 || addons.length > 0; else noAddons\" class=\"card-footer\">\r\n    <button *ngIf=\"!itemCount; else updateQuantity\" (click)=\"openLg(content)\" class=\"btn btn-dark btn-block\">Add to\r\n      Cart</button>\r\n\r\n    <!-- modal template -->\r\n    <ng-template #content let-modal>\r\n      <div class=\"modal-header animated fadeInUp\">\r\n        <h4 class=\"modal-title text-capitalize\">Adding {{ product.name}} to cart</h4>\r\n        <button #closeModal type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body animated fadeInRight\">\r\n        <div class=\"row\">\r\n          <div *ngIf=\"flavors.length > 0\" class=\"col\">\r\n            <p class=\"font-weight-bold\">Select Type/Flavor</p>\r\n            <p class=\"text-capitalize\">\r\n\r\n              <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"flavorSelected\">\r\n                <mat-radio-button (change)=\"onCheckedBox($event)\" class=\"example-radio-button\" *ngFor=\"let flavor of flavors\"\r\n                  [value]=\"flavor\">\r\n                  {{ flavor }}\r\n                </mat-radio-button>\r\n              </mat-radio-group>\r\n            </p>\r\n            <p *ngIf=\"!enableAddBtn\"><i class=\"alert  alert-warning\">Pick one</i></p>\r\n\r\n          </div>\r\n          <div *ngIf=\"product.addons.length > 0\" class=\"col\">\r\n            <p class=\"font-weight-bold\">Select Addons/Items</p>\r\n            <p *ngFor=\"let item of addons\" class=\"text-capitalize\">\r\n              <mat-checkbox value=\"{{item}}\" name=\"{{ item }}\" (change)=\"onSelect($event)\">{{ item }}</mat-checkbox>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <label class=\"font-weight-bold\" for=\"message\">Special intructions</label>\r\n          <textarea [(ngModel)]=\"message\" class=\"form-control\" name=\"message\" id=\"message\" placeholder=\"Dressing on the side? No Mayonnaise?. If you want an item not listed, ask for it here. We will add it. Let us know!\"\r\n            cols=\"30\" rows=\"5\"></textarea>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"modal.close('Close click')\">Close</button>\r\n        <button [disabled]=\"!enableAddBtn && product.addons.length === 0\" type=\"button\" class=\"btn btn-success\" (click)=\"updateCart(closeModal)\">Add\r\n          to Cart</button>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template #updateQuantity>\r\n      <product-quantity [itemCount]=\"itemCount\" [product]=\"product\" [shopping-cart]=\"shoppingCart\">\r\n\r\n      </product-quantity>\r\n    </ng-template>\r\n  </div>\r\n\r\n  <!-- if item has no addons -->\r\n  <ng-template #noAddons>\r\n    <div class=\"card-footer\">\r\n\r\n      <button *ngIf=\"!itemCount; else updateQuantity2\" class=\"btn btn-dark btn-block\" (click)=\"updateCart()\"> Add to\r\n        Cart</button>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #updateQuantity2>\r\n    <product-quantity [itemCount]=\"itemCount\" [product]=\"product\" [shopping-cart]=\"shoppingCart\">\r\n\r\n    </product-quantity>\r\n  </ng-template>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/product-card/product-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-card/product-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _models_shoppingCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/shoppingCart */ "./src/app/models/shoppingCart.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(shoppingCartServ, modalService) {
        this.shoppingCartServ = shoppingCartServ;
        this.modalService = modalService;
        this.showActions = true;
        this.addons = [];
        this.flavorsSelected = [];
        this.itemSelected = [];
        this.message = '';
        this.enableAddBtn = false;
        this.noFlavorsAdded = false;
    }
    ProductCardComponent.prototype.addToCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shoppingCartServ.addToCart(this.product)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductCardComponent.prototype.onSelect = function (e) {
        if (e.checked) {
            //add item if not in array
            if (this.itemSelected.indexOf(e.source.value) === -1)
                this.itemSelected.push(e.source.value);
        }
        else {
            //revome item of already in.
            this.itemSelected.pop();
        }
    };
    ProductCardComponent.prototype.onCheckedBox = function (e) {
        if (e.value) {
            this.enableAddBtn = true;
            this.flavorsSelected[0] = e.value;
        }
        else {
            this.enableAddBtn = false;
        }
    };
    ProductCardComponent.prototype.updateCart = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            if (this.flavorsSelected.length < 1) {
                                alert('Please Make a Selection.');
                                //this.flavorSelected = '';
                                return [2 /*return*/];
                            }
                        }
                        this.product.addons = this.itemSelected || [];
                        this.product.instruction = this.message;
                        this.product.flavors = this.flavorsSelected;
                        if (!this.flavorsSelected) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.shoppingCartServ.addToCart(this.product)];
                    case 1:
                        _a.sent();
                        if (event) {
                            event.click();
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ProductCardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.addons = this.product.addons;
                        this.flavors = this.product.flavors;
                        return [4 /*yield*/, this.shoppingCartServ.getOneCart(this.product.id)];
                    case 1:
                        (_a.sent()).subscribe(function (item) {
                            if (item) {
                                _this.itemCount = item.quantity;
                            }
                            else {
                                return null;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductCardComponent.prototype.openLg = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.modalService.open(content, { centered: true });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('show-actions'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "showActions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('shopping-cart'),
        __metadata("design:type", _models_shoppingCart__WEBPACK_IMPORTED_MODULE_0__["ShoppingCart"])
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('itemCount'),
        __metadata("design:type", Number)
    ], ProductCardComponent.prototype, "itemCount", void 0);
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/components/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/components/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/components/product-filter/product-filter.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/product-filter/product-filter.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category {\r\n    padding-top: 80px;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .category {\r\n        padding-top: 0px;\r\n    }\r\n    \r\n }"

/***/ }),

/***/ "./src/app/components/product-filter/product-filter.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-filter/product-filter.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top category clear-fix mt-2\">\r\n  <div class=\"list-group\">\r\n    <a routerLink=\"/\" class=\"list-group-item list-group-item-action\" [class.active]=\"!category\">All Categories</a>\r\n    <a *ngFor=\"let c of categories$ | async\" class=\"list-group-item list-group-item-action text-capitalize\" routerLink=\"/\"\r\n      [queryParams]=\"{ category: c.id }\" [class.active]=\"category === c.id\">{{ c.name }}</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/product-filter/product-filter.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/product-filter/product-filter.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryServ) {
        this.categoryServ = categoryServ;
        this.categories$ = this.categoryServ.getCategories();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('category'),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-filter',
            template: __webpack_require__(/*! ./product-filter.component.html */ "./src/app/components/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.css */ "./src/app/components/product-filter/product-filter.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/product-quantity/product-quantity.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/product-quantity/product-quantity.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-3 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (1fr)[3];\r\n        grid-template-columns: repeat(3, 1fr);\r\n    grid-gap: 10px;\r\n}"

/***/ }),

/***/ "./src/app/components/product-quantity/product-quantity.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/product-quantity/product-quantity.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-3\">\r\n  <div  class=\"\">\r\n    <button\r\n      (click)=\"removeFromCart()\"\r\n      class=\"btn btn-secondary float-left\"><mat-icon><i class=\"material-icons md-18\">remove</i></mat-icon></button> \r\n  </div>\r\n  <div *ngIf=\"itemCount > 0\" class=\"text-center text-justify\">\r\n     <!-- {{ shoppingCart.getQuantity(product) }} in cart -->\r\n     {{ itemCount }} in cart\r\n  </div>\r\n  <div *ngIf=\"itemCount === 0\" class=\"col text-center\">\r\n    <!-- {{ shoppingCart.getQuantity(product) }} in cart -->\r\n    Nothing\r\n </div>\r\n  <div *ngIf=\"!itemCount\" class=\"text-center text-justify\">\r\n   <p class=\"text-center\">{{ shoppingCart.getQuantity(product) }} </p> \r\n    \r\n </div>\r\n  <div class=\"\">\r\n    <button \r\n      (click)=\"addToCart()\"\r\n      class=\"btn btn-secondary float-right\"><mat-icon><i class=\"material-icons md-18\">add</i></mat-icon></button> \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/product-quantity/product-quantity.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/product-quantity/product-quantity.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQuantityComponent", function() { return ProductQuantityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _models_shoppingCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/shoppingCart */ "./src/app/models/shoppingCart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductQuantityComponent = /** @class */ (function () {
    function ProductQuantityComponent(cartService) {
        this.cartService = cartService;
    }
    ProductQuantityComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product).then(function (res) { return console.log('ADDED'); }).catch(function (err) { return console.log(err); });
    };
    ProductQuantityComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.product).then(function () { return console.log("Deleted"); }).catch(function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductQuantityComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('shopping-cart'),
        __metadata("design:type", _models_shoppingCart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"])
    ], ProductQuantityComponent.prototype, "shoppingCart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('itemCount'),
        __metadata("design:type", Number)
    ], ProductQuantityComponent.prototype, "itemCount", void 0);
    ProductQuantityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-quantity',
            template: __webpack_require__(/*! ./product-quantity.component.html */ "./src/app/components/product-quantity/product-quantity.component.html"),
            styles: [__webpack_require__(/*! ./product-quantity.component.css */ "./src/app/components/product-quantity/product-quantity.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ProductQuantityComponent);
    return ProductQuantityComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/products/products.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: auto;\r\n    height: 400px;\r\n}\r\n\r\n.spanCat {\r\n    font-family: 'Cookie', cursive;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.grid-2 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-column-gap: 50px;\r\n    grid-row-gap: 30px;\r\n\r\n    -ms-grid-columns: (1fr)[2];\r\n\r\n        grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n@media (max-width: 576px) { \r\n    .grid-2 {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        padding: 20px;\r\n        grid-column-gap: 20px;\r\n        grid-row-gap: 20px;\r\n        -ms-grid-columns: 1fr;\r\n            grid-template-columns: 1fr;\r\n    }\r\n    img {\r\n        width: auto !important;\r\n        height: auto !important;\r\n    }\r\n\r\n    \r\n }"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%\" class=\"row\">\r\n  <div class=\"col-md-3 mx-auto d-none d-sm-block\">\r\n    <product-filter [category]=\"category\"></product-filter>\r\n</div>\r\n<div class=\"col mx-auto d-block d-sm-none\">\r\n    <div ngbDropdown class=\"d-inline-block\">\r\n      <button class=\"btn btn-outline-secondary btn-block mb-2\" id=\"dropdownBasic1\" ngbDropdownToggle>Filter Products</button><span *ngIf=\"category; else noCategory\" \r\n      class=\"text-center text-capitalize spanCat\">Viewing: {{ category }}</span>\r\n      <ng-template #noCategory>\r\n          <span\r\n          class=\"text-center text-capitalize spanCat\">Viewing: All Products</span>\r\n      </ng-template>\r\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n          <product-filter [category]=\"category\"></product-filter>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"col mx-auto\">\r\n \r\n<div class=\"grid-2\" *ngIf=\"cart$ | async as cart\">\r\n    <ng-container *ngFor=\"let product of filteredProducts\">\r\n      <product-card [product]=\"product\" [shopping-cart]=\"cart\"></product-card>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n \r\n  \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productServ, activeRoute, shoppingCartServ) {
        this.productServ = productServ;
        this.activeRoute = activeRoute;
        this.shoppingCartServ = shoppingCartServ;
        this.products = [];
        this.filteredProducts = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartServ.getCart()];
                    case 1:
                        _a.cart$ = (_b.sent());
                        this.populateProducts();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.populateProducts = function () {
        var _this = this;
        this.productServ.getProducts().subscribe(function (products) {
            _this.products = products;
            _this.activeRoute.queryParamMap.subscribe(function (params) {
                _this.category = params.get('category');
                _this.filteredProducts = (_this.category) ?
                    _this.products.filter(function (p) { return p.category === _this.category; }) :
                    _this.products;
            });
        });
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"row\">\r\n  <div class=\"col-md-10 mx-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"text-center pb-4 pt-3\">\r\n          <span class=\"text-primary\"><i class=\"fa fa-lock\"></i> Sign Up /</span> Register\r\n        </h1>\r\n        <div *ngIf=\"error\" class=\"panel panel-danger\">\r\n              {{ error }}\r\n        </div>\r\n        <form #myForm=\"ngForm\" (submit)=\"onSubmit(myForm)\">\r\n          <div class=\"row\">\r\n              <div class=\"form-group col\">\r\n                  <label for=\"name\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Name</label>\r\n                  <input type=\"text\" name=\"name\" #username=\"ngModel\" [(ngModel)]=\"user.name\" \r\n                  class=\"form-control\" \r\n                  [ngClass]=\"{'is-invalid': username.touched && username.errors, 'is-valid': username.valid}\"\r\n                  required>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"username.errors?.required\">\r\n                    Name is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col\">\r\n                    <label for=\"last_name\">Last Name</label>\r\n                    <input type=\"text\" name=\"lname\" #userlname=\"ngModel\" [(ngModel)]=\"user.last_name\"\r\n                     class=\"form-control\" \r\n                     [ngClass]=\"{'is-invalid': userlname.touched && userlname.errors, 'is-valid': userlname.valid}\"\r\n                     required>\r\n                     <div class=\"invalid-feedback\" *ngIf=\"userlname.errors?.required\">\r\n                       Name is required..\r\n                     </div>\r\n                  </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"form-group col\">\r\n                  <label for=\"phone\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> Phone</label>\r\n                  <input type=\"phone\" name=\"phone\" phone=\"CN\" #userphone=\"ngModel\" minlength=\"10\" [(ngModel)]=\"user.phone\"\r\n                  [ngClass]=\"{'is-invalid': userphone.touched && userphone.errors, 'is-valid': userphone.valid}\"\r\n                   class=\"form-control\" required>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"userphone.errors?.required\">\r\n                    Phone is required\r\n                  </div>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"userphone.errors?.phone || userphone.errors?.minlength\">\r\n                      Phone is invalid...\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col\">\r\n                    <label for=\"email\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> Email</label>\r\n                    <input type=\"email\" name=\"email\" email required #useremail=\"ngModel\" [(ngModel)]=\"user.email\" \r\n                    class=\"form-control\" \r\n                    [ngClass]=\"{'is-invalid': useremail.touched && useremail.errors, 'is-valid': useremail.valid}\"\r\n                    required>\r\n                    <div class=\"invalid-feedback\" *ngIf=\"useremail.errors?.required\">\r\n                      Email is required\r\n                    </div>\r\n                    <div class=\"invalid-feedback\" *ngIf=\"useremail.errors?.email\">\r\n                        Email is invalid...\r\n                      </div>\r\n                    \r\n                  </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"form-group col\">\r\n                  <label for=\"password\">Password</label>\r\n                  <input type=\"password\" required name=\"password\" #userpsw [(ngModel)]=\"user.password\" class=\"form-control\" required>\r\n               \r\n              </div>\r\n              <div class=\"form-group col\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" id=\"psw2\" required name=\"password2\" #userpsw2 [(ngModel)]=\"psw\" \r\n                class=\"form-control\" \r\n                (change)=checkPassword($event)\r\n                [ngClass]=\"{'is-invalid': userpsw2.touched && userpsw2.errors, 'is-valid': pswMatching}\"\r\n                required>\r\n                <div class=\"invalid-feedback\" [hidden]=\"user.pasword === psw\">\r\n                    Passwords do not match...\r\n                </div>\r\n            </div>\r\n              \r\n          </div>\r\n          <br>\r\n          <h3 class=\"text-center\"><i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i> Address Information</h3>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"address\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Address</label>\r\n              <input type=\"text\" #useraddress=\"ngModel\" name=\"address\" class=\"form-control\" \r\n              [ngClass]=\"{'is-invalid': useraddress.touched && useraddress.errors, 'is-valid': useraddress.valid}\"\r\n              required [(ngModel)]=\"user.address.address\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"useraddress.errors?.required\">\r\n                Address is required\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col\">\r\n                <label for=\"apt\">Apt</label>\r\n                <input type=\"text\" name=\"apt\" class=\"form-control\" [(ngModel)]=\"user.address.apt\">\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"city\">City</label>\r\n              <input type=\"text\" name=\"city\" id=\"city\" required [(ngModel)]=\"user.address.city\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label for=\"state\">State</label>\r\n              <input type=\"text\" name=\"state\" required id=\"state\" [(ngModel)]=\"user.address.state\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group col\">\r\n                <label for=\"zipcode\">Zip Code</label>\r\n                <input type=\"text\" name=\"zipcode\" required id=\"zipcode\" [(ngModel)]=\"user.address.zipcode\" class=\"form-control\">\r\n              </div>\r\n          </div>\r\n          \r\n            \r\n         \r\n          \r\n          <button [disabled]=\"!myForm.form.valid\" type=\"submit\" class=\"btn btn-dark btn-block\">Register</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_logins_logins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/logins/logins.service */ "./src/app/services/logins/logins.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(logServ, msg, router, userServ) {
        this.logServ = logServ;
        this.msg = msg;
        this.router = router;
        this.userServ = userServ;
        this.user = {
            name: '',
            last_name: '',
            phone: '',
            email: '',
            password: '',
            joined: new Date().toLocaleString(),
            address: {
                address: '',
                apt: '',
                city: '',
                state: 'New York',
                zipcode: ''
            },
            isAdmin: false
        };
        this.pswMatching = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            // add error
            console.log('error');
        }
        if (this.psw === this.user.password) {
            //register the user
            this.logServ.register(this.user.email.toLowerCase(), this.user.password).then(function (res) {
                //set id in localstorage
                localStorage.setItem('userId', res.user.uid);
                //notify the user about success
                _this.msg.success('Registration Succefull', 'Registered');
                //adding the user
                _this.userServ.addUser(_this.user, res.user.uid);
                _this.router.navigate(['/']);
            })
                .catch(function (err) { return _this.msg.error(err.message, 'Error'); });
        }
        else {
            this.error = 'Passwords do not match';
            this.msg.error('Passwords do not match', 'Please Try Again');
            return;
        }
    };
    RegisterComponent.prototype.checkPassword = function (event) {
        var psw2_field = document.getElementById('psw2');
        if (this.user.password !== this.psw) {
            psw2_field.classList.add('is-invalid');
            this.pswMatching = false;
        }
        if (this.user.password === this.psw && !this.pswMatching) {
            psw2_field.classList.remove('is-invalid');
            this.pswMatching = true;
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_logins_logins_service__WEBPACK_IMPORTED_MODULE_2__["LoginsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_users_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/shipping-form/shipping-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/shipping-form/shipping-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shipping-form/shipping-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shipping-form/shipping-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <form #shippingForm=\"ngForm\" (ngSubmit)=\"saveOrder(shippingForm)\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" required  name=\"name\" placeholder=\"First name\">\r\n      </div>\r\n      <div class=\"col\">\r\n        <label for=\"lname\">Last Name</label>\r\n        <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.last_name\"  name=\"last_name\" placeholder=\"Last name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n    <div class=\"col\">\r\n      <label for=\"adresss\">Address</label>\r\n      <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.address.address\" name=\"address\" placeholder=\"Address\">\r\n    </div>\r\n    <div class=\"col\">\r\n      <label for=\"apt\">Apt /Suite / Floor</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.address.apt\" name=\"apt\" placeholder=\"Apt / Suite / Floor\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n  <div class=\"col\">\r\n      <label for=\"adresss\">City</label>\r\n      <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.address.city\" name=\"city\" placeholder=\"City\">\r\n    </div>\r\n    <div class=\"col\">\r\n      <label for=\"state\">State</label>\r\n      <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.address.state\" name=\"state\" placeholder=\"State\">\r\n    </div>\r\n    <div class=\"col\">\r\n        <label for=\"zipcode\">Zip Code</label>\r\n        <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.address.zipcode\" minlength=\"5\" name=\"zipcode\" placeholder=\"Zip Code\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n  <div class=\"col\">\r\n      <label for=\"phone\">Phone</label>\r\n      <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.phone\" name=\"phone\" placeholder=\"Phone\">\r\n    </div>\r\n    <div class=\"col\">\r\n      <label for=\"apt\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" required  [(ngModel)]=\"user.email\"  name=\"email\" placeholder=\"Email Address\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n       <label for=\"message\">Instructions for Delivery</label>\r\n       <textarea name=\"message\" id=\"\" class=\"form-control\" [(ngModel)]=\"message\" cols=\"30\" rows=\"5\" placeholder=\"Type any helpful information for the delivery guy.\"></textarea>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n        <button   class=\"btn btn-danger btn-block\" type=\"reset\">Clear Form</button>\r\n    </div>\r\n    <div class=\"col\">\r\n        <button [disabled]=\"!shippingForm.valid\" class=\"btn btn-success btn-block\" type=\"submit\">Place Order</button>\r\n    </div>\r\n\r\n  </div>\r\n  </form>\r\n  <br>\r\n  <blockquote style=\"font-style:italic\">Note: Address is already populated with your default information, feel free to change it</blockquote>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shipping-form/shipping-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shipping-form/shipping-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShippingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormComponent", function() { return ShippingFormComponent; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_shoppingCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/shoppingCart */ "./src/app/models/shoppingCart.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/order */ "./src/app/models/order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ShippingFormComponent = /** @class */ (function () {
    function ShippingFormComponent(userService, router, notification, orderServ) {
        this.userService = userService;
        this.router = router;
        this.notification = notification;
        this.orderServ = orderServ;
        this.message = '';
        this.user = {
            name: '',
            last_name: '',
            email: '',
            phone: '',
            isAdmin: false,
            address: {
                address: '',
                apt: '',
                city: '',
                state: '',
                zipcode: ''
            }
        };
    }
    ShippingFormComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem('userId')];
                    case 1:
                        id = _a.sent();
                        if (id) {
                            //user subcription 
                            this.subscription = this.userService.getUser(id).subscribe(function (user) { _this.user = user; _this.userId = user.id; });
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ShippingFormComponent.prototype.saveOrder = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var shipping, order, orderToSubmmit, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shipping = e.value;
                        order = new _models_order__WEBPACK_IMPORTED_MODULE_6__["Order"](this.userId, shipping, this.cart);
                        orderToSubmmit = {
                            datePlaced: order.datePlaced,
                            grandTotal: order.grandTotal,
                            items: order.items,
                            quantity: this.cart.totalItemsCount,
                            shipping: order.shipping,
                            message: this.message,
                            userId: order.userId,
                            status: order.status,
                            delivered: false,
                            numberSold: this.cart.totalItemsCount + this.cart.numberSold
                        };
                        return [4 /*yield*/, this.orderServ.placeOrder(orderToSubmmit)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.notification.success("Thank You " + order.shipping.name.toUpperCase() + "!", 'You order has been proccesed.');
                            this.orderServ.checkForNewOrder(true);
                        }
                        else {
                            this.orderServ.checkForNewOrder(false);
                        }
                        this.router.navigate(['/order-success', result.id]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShippingFormComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('cart'),
        __metadata("design:type", _models_shoppingCart__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"])
    ], ShippingFormComponent.prototype, "cart", void 0);
    ShippingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'shipping-form',
            template: __webpack_require__(/*! ./shipping-form.component.html */ "./src/app/components/shipping-form/shipping-form.component.html"),
            styles: [__webpack_require__(/*! ./shipping-form.component.css */ "./src/app/components/shipping-form/shipping-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], ShippingFormComponent);
    return ShippingFormComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart-summary/order-review/order-review.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shopping-cart-summary/order-review/order-review.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shopping-cart-summary/order-review/order-review.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/shopping-cart-summary/order-review/order-review.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shopping-cart-summary/order-review/order-review.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/shopping-cart-summary/order-review/order-review.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrderReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderReviewComponent", function() { return OrderReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_shoppingCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/shoppingCart */ "./src/app/models/shoppingCart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderReviewComponent = /** @class */ (function () {
    function OrderReviewComponent() {
    }
    OrderReviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('cart'),
        __metadata("design:type", _models_shoppingCart__WEBPACK_IMPORTED_MODULE_1__["ShoppingCart"])
    ], OrderReviewComponent.prototype, "cart", void 0);
    OrderReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'order-review',
            template: __webpack_require__(/*! ./order-review.component.html */ "./src/app/components/shopping-cart-summary/order-review/order-review.component.html"),
            styles: [__webpack_require__(/*! ./order-review.component.css */ "./src/app/components/shopping-cart-summary/order-review/order-review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderReviewComponent);
    return OrderReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart-summary/shopping-cart-summary.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shopping-cart-summary/shopping-cart-summary.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shopping-cart-summary/shopping-cart-summary.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/shopping-cart-summary/shopping-cart-summary.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"cart\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title text-center\">Order Summary</h5>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <p class=\"card-text\">{{ cart.totalItemsCount}} Items in Cart</p>\r\n      </div>\r\n      <div class=\"col\">\r\n        <a routerLink=\"/shopping-cart\" class=\"btn btn-dark float-right mb-2\">Add/Edit Cart</a>\r\n      </div>\r\n    </div>\r\n   \r\n    <div class=\"table-responsive-sm table-responsive-md\" >\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr class=\"text-center\">\r\n            <th>Qty</th>\r\n            <th>Items</th>\r\n            <th>Price</th>\r\n          </tr>\r\n\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of cart.items\">\r\n            <td class=\"text-center\">\r\n                <ul class=\"list-group list-group-flush\">\r\n                    <li class=\"list-group-item\" >\r\n                      {{ item.quantity}}\r\n                     \r\n                    </li>\r\n                  </ul>\r\n                \r\n            </td>\r\n            <td  class=\"text-center\">\r\n                <ul class=\"list-group list-group-flush\">\r\n                    <li class=\"list-group-item text-capitalize\" >\r\n                      {{ item.name }}\r\n                     \r\n                    </li>\r\n                  </ul>\r\n                \r\n            </td>\r\n            <td class=\"text-center\">\r\n                <ul class=\"list-group list-group-flush\">\r\n                    <li  class=\"list-group-item \" >\r\n                      {{ item.totalPrice | currency:'USD':'symbol-narrow' }}\r\n                     \r\n                    </li>\r\n                  </ul>\r\n            </td>\r\n          </tr>\r\n         \r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <th></th>\r\n            <th></th>\r\n            <th>\r\n                <ul class=\"list-group list-group-flush\">\r\n                    <li class=\"list-group-item font-weight-bold\">\r\n                      Total\r\n                      <div class=\"float-right\">\r\n                        {{ cart.totalPrice | currency:'USD':'symbol-narrow' }}\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n            </th>\r\n          </tr>\r\n        \r\n\r\n        </tfoot>\r\n\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shopping-cart-summary/shopping-cart-summary.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/shopping-cart-summary/shopping-cart-summary.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ShoppingCartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartSummaryComponent", function() { return ShoppingCartSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_shoppingCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/shoppingCart */ "./src/app/models/shoppingCart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartSummaryComponent = /** @class */ (function () {
    function ShoppingCartSummaryComponent() {
    }
    ShoppingCartSummaryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('cart'),
        __metadata("design:type", _models_shoppingCart__WEBPACK_IMPORTED_MODULE_1__["ShoppingCart"])
    ], ShoppingCartSummaryComponent.prototype, "cart", void 0);
    ShoppingCartSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shopping-cart-summary',
            template: __webpack_require__(/*! ./shopping-cart-summary.component.html */ "./src/app/components/shopping-cart-summary/shopping-cart-summary.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-summary.component.css */ "./src/app/components/shopping-cart-summary/shopping-cart-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartSummaryComponent);
    return ShoppingCartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 576px) {\r\n    img {\r\n        display: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mb-3\">Shopping Cart</h3>\r\n<div class=\"mb-5 animated fadeIn\" *ngIf=\"cart$ | async as cart\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n        <p> {{ cart.totalItemsCount }} Items in Cart. </p>\r\n       \r\n    </div>\r\n    <div class=\"col\">\r\n        <button \r\n        *ngIf=\"cart.totalItemsCount > 0\"\r\n        (click)=\"clearCart()\"\r\n        class=\"btn btn-warning float-right\">Empty Cart</button>\r\n    </div>\r\n     \r\n  </div>\r\n \r\n  <br>\r\n  <div *ngIf=\"cart.totalItemsCount > 0\" class=\"table-responsive-sm table-responsive-xs table-responsive-md\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th></th>\r\n        <th>Product</th>\r\n        <th class=\"text-center\" >Qty</th>\r\n        <th class=\"text-right\" >Price</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of cart.items\">\r\n        <td>\r\n          <div *ngIf=\"item.picture\" class=\"thumbnail\">\r\n            <img width=\"60\" height=\"60\" class=\"img-circled\" [src]=\"item.picture\" alt=\"\">\r\n          </div>\r\n        </td>\r\n        <td class=\"text-capitalize\">\r\n         <p class=\"font-weight-bold\">{{ item.name }}</p> \r\n          <p> <i>{{ item.flavors[0]}}</i></p>\r\n        </td>\r\n        <td>\r\n\r\n          <product-quantity [product]=\"item\" [shopping-cart]=\"cart\">\r\n          </product-quantity>\r\n        </td>\r\n        <td class=\"text-right\">\r\n          {{ item.totalPrice | currency:'USD':'symbol-narrow' }}\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n    <tfoot>\r\n      <tr>\r\n        <th></th>\r\n        <th></th>\r\n        <th></th>\r\n        <th class=\"text-right\">Grand Total: {{ cart.totalPrice | currency:'USD':'symbol-narrow' }}</th>\r\n      </tr>\r\n    </tfoot> \r\n  \r\n  </table>\r\n</div>\r\n<div *ngIf=\"cart.totalItemsCount > 0\">\r\n    <a [routerLink]=\"['/']\" class=\"btn btn-info btn-lg mr-2\" >More Antojitos</a>\r\n    <button \r\n      (click)=\"checkOut(cart)\"\r\n      class=\"btn btn-dark btn-lg\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Check Out</button>\r\n      \r\n</div>\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ShoppingCartComponent = /** @class */ (function () {
    //totalPrice: number;
    function ShoppingCartComponent(shoppingCartService, router) {
        this.shoppingCartService = shoppingCartService;
        this.router = router;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = (_b.sent());
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartComponent.prototype.clearCart = function () {
        if (!confirm('Are you sure you want to clear the cart?'))
            return;
        this.shoppingCartService.clearCart().then(function () { return console.log("Cart Deleted"); }).catch(function (err) { return console.log(err); });
    };
    ShoppingCartComponent.prototype.checkOut = function (cart) {
        var price = cart.totalPrice;
        var diff = (10 - cart.totalPrice).toFixed(2);
        if (price < 10) {
            alert("$10.00 Minimum for Delivery. Please just add $" + diff + " or more");
            return;
        }
        else {
            this.router.navigate(['/check-out']);
        }
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/components/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/data-table/data-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data-table {\r\n    width: 90%;\r\n    margin: 20px auto;\r\n}"

/***/ }),

/***/ "./src/app/data-table/data-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"mat-elevation-z8 data-table\">\r\n  <table class=\"data-table\" mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\r\n    \r\n    <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> <p class=\"text-capitalize\">{{     element.shipping.name}} {{element.shipping.last_name}} </p> </td>\r\n        </ng-container>\r\n      \r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Date/Time </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.datePlaced}} </td>\r\n        </ng-container>\r\n      \r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n          <td class=\"text-uppercase\" mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\r\n        </ng-container>\r\n      \r\n        <!-- Amount Column -->\r\n        <ng-container matColumnDef=\"amount\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.items[0].totalPrice | currency:'USD': 'symbol-narrow' }} </td>\r\n        </ng-container>\r\n    \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator #paginator\r\n    [length]=\"dataSource.data.length\"\r\n    [pageIndex]=\"0\"\r\n    [pageSize]=\"50\"\r\n    [pageSizeOptions]=\"['5', 25, 50, 100, 250]\">\r\n  </mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(orderServ) {
        var _this = this;
        this.orderServ = orderServ;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        // displayedColumns = ['name', 'price'];
        this.displayedColumns = ['name', 'date', 'status', 'amount'];
        var id = localStorage.getItem('userId');
        if (id) {
            this.orderServ.getUserId(id).subscribe(function (data) {
                if (data) {
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
                    _this.dataSource.sort = _this.sort;
                    _this.dataSource.paginator = _this.paginator;
                }
                else {
                    return null;
                }
            });
        }
    }
    DataTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DataTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DataTableComponent.prototype, "sort", void 0);
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.css */ "./src/app/data-table/data-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_0__["OrderService"]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin-auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/admin-auth.guard.ts ***!
  \********************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(userServ) {
        this.userServ = userServ;
    }
    AdminAuthGuard.prototype.canActivate = function (next, state) {
        return this.userServ.isAdmin;
    };
    AdminAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_users_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_logins_logins_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/logins/logins.service */ "./src/app/services/logins/logins.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (user) {
            if (user) {
                return true;
            }
            _this.router.navigate(['/login'], { queryParams: { returnURL: state.url } });
            return false;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_logins_logins_service__WEBPACK_IMPORTED_MODULE_1__["LoginsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/order.ts":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(userId, shipping, shoppingCart) {
        this.userId = userId;
        this.shipping = shipping;
        this.datePlaced = new Date().toLocaleString();
        this.grandTotal = shoppingCart.cartTotalPrice;
        this.status = 'new';
        this.items = shoppingCart.items.map(function (i) {
            return {
                product: {
                    id: shoppingCart.randomId,
                    name: i.name,
                    price: i.price,
                    picture: i.picture,
                    addons: i.addons,
                    flavors: i.flavors,
                    instruction: i.instruction
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            };
        });
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/models/shopping-cart-item.ts":
/*!**********************************************!*\
  !*** ./src/app/models/shopping-cart-item.ts ***!
  \**********************************************/
/*! exports provided: ShoppingCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItem", function() { return ShoppingCartItem; });
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(ShoppingCartItem.prototype, "totalPrice", {
        get: function () { return this.price * this.quantity; },
        enumerable: true,
        configurable: true
    });
    return ShoppingCartItem;
}());



/***/ }),

/***/ "./src/app/models/shoppingCart.ts":
/*!****************************************!*\
  !*** ./src/app/models/shoppingCart.ts ***!
  \****************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var _shopping_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart-item */ "./src/app/models/shopping-cart-item.ts");

var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(itemsMap) {
        this.itemsMap = itemsMap;
        this.items = [];
        this.itemsMap = itemsMap || [];
        for (var productId in itemsMap) {
            var item = itemsMap[productId];
            this.items.push(new _shopping_cart_item__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartItem"](item));
        }
    }
    ShoppingCart.prototype.getQuantity = function (product) {
        return product.quantity;
    };
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            var sum = 0;
            for (var productId in this.items)
                sum += this.items[productId].totalPrice;
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "cartTotalPrice", {
        get: function () {
            var sum = 0;
            var total = 0;
            for (var productId in this.items)
                sum += this.items[productId].totalPrice;
            total += sum;
            return total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalItemsCount", {
        get: function () {
            var count = 0;
            for (var productId in this.items)
                count += this.items[productId].quantity;
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "numberSold", {
        get: function () {
            var count = 0;
            for (var i in this.items) {
                count += this.items[i].quantity;
                return count;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "randomId", {
        get: function () {
            return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 20);
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/routing/app-routes/app-routes.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/routing/app-routes/app-routes.module.ts ***!
  \*********************************************************/
/*! exports provided: AppRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutesModule", function() { return AppRoutesModule; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../guards/admin-auth.guard */ "./src/app/guards/admin-auth.guard.ts");
/* harmony import */ var _admin_manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../admin/manage-category/manage-category.component */ "./src/app/admin/manage-category/manage-category.component.ts");
/* harmony import */ var _admin_manage_addons_manage_addons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../admin/manage-addons/manage-addons.component */ "./src/app/admin/manage-addons/manage-addons.component.ts");
/* harmony import */ var _components_delivery_confirmation_delivery_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/delivery-confirmation/delivery-confirmation.component */ "./src/app/components/delivery-confirmation/delivery-confirmation.component.ts");
/* harmony import */ var _admin_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../admin/admin-order-details/admin-order-details.component */ "./src/app/admin/admin-order-details/admin-order-details.component.ts");
/* harmony import */ var _components_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/orders/order-details/order-details.component */ "./src/app/components/orders/order-details/order-details.component.ts");
/* harmony import */ var _admin_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../admin/edit/edit.component */ "./src/app/admin/edit/edit.component.ts");
/* harmony import */ var _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../admin/product-form/product-form.component */ "./src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../components/check-out/check-out.component */ "./src/app/components/check-out/check-out.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_myorders_myorders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../components/myorders/myorders.component */ "./src/app/components/myorders/myorders.component.ts");
/* harmony import */ var _admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../admin/orders/orders.component */ "./src/app/admin/orders/orders.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../components/order-success/order-success.component */ "./src/app/components/order-success/order-success.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/myprofile/myprofile.component */ "./src/app/components/myprofile/myprofile.component.ts");
/* harmony import */ var _admin_manage_flavor_manage_flavor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../admin/manage-flavor/manage-flavor.component */ "./src/app/admin/manage-flavor/manage-flavor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_20__["ProductsComponent"] },
    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_20__["ProductsComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'products/:prodId', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_20__["ProductsComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'shopping-cart', component: _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartComponent"] },
    { path: 'order-success/:id', component: _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_16__["OrderSuccessComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'admin/products', component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_15__["AdminProductsComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AdminAuthGuard"]] },
    { path: 'admin/products', component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_15__["AdminProductsComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AdminAuthGuard"]] },
    { path: 'admin/categories', component: _admin_manage_category_manage_category_component__WEBPACK_IMPORTED_MODULE_2__["ManageCategoryComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AdminAuthGuard"]] },
    { path: 'admin/addons', component: _admin_manage_addons_manage_addons_component__WEBPACK_IMPORTED_MODULE_3__["ManageAddonsComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AdminAuthGuard"]] },
    { path: 'admin/flavors', component: _admin_manage_flavor_manage_flavor_component__WEBPACK_IMPORTED_MODULE_22__["ManageFlavorComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'myprofile', component: _components_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_21__["MyprofileComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'delivered/:id', component: _components_delivery_confirmation_delivery_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["DeliveryConfirmationComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'admin/products/new', component: _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_8__["ProductFormComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AdminAuthGuard"]] },
    { path: 'admin/products/:id', component: _admin_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AdminAuthGuard"]] },
    { path: 'admin/orders', component: _admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_14__["OrdersComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AdminAuthGuard"]] },
    { path: 'admin/orders/details/:id', component: _admin_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_5__["AdminOrderDetailsComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AdminAuthGuard"]] },
    { path: 'check-out', component: _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_9__["CheckOutComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'myorders', component: _components_myorders_myorders_component__WEBPACK_IMPORTED_MODULE_13__["MyordersComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'myorders/detail/:id', component: _components_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: '**', redirectTo: '/' }
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_18__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(appRoutes)
            ],
            providers: []
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./src/app/services/addons.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/addons.service.ts ***!
  \********************************************/
/*! exports provided: AddonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonsService", function() { return AddonsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddonsService = /** @class */ (function () {
    function AddonsService(db) {
        this.db = db;
    }
    AddonsService.prototype.getAddons = function () {
        this.addonsColl = this.db.collection('addons', function (ref) { return ref.orderBy('name'); });
        this.addons = this.addonsColl.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }); }));
        return this.addons;
    };
    AddonsService.prototype.addAddon = function (addon) {
        this.addonsColl = this.db.collection('addons');
        return this.addonsColl.add(addon);
    };
    AddonsService.prototype.deleteAddon = function (id) {
        return this.db.doc("addons/" + id).delete();
    };
    AddonsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], AddonsService);
    return AddonsService;
}());



/***/ }),

/***/ "./src/app/services/admin-order-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/admin-order-service.service.ts ***!
  \*********************************************************/
/*! exports provided: AdminOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrderService", function() { return AdminOrderService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminOrderService = /** @class */ (function () {
    function AdminOrderService(db, shoppingCartServ) {
        this.db = db;
        this.shoppingCartServ = shoppingCartServ;
    }
    AdminOrderService.prototype.getAdminOrders = function () {
        this.orderCollection = this.db.collection('orders', function (ref) { return ref.orderBy('datePlaced', 'desc'); });
        this.orders = this.orderCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            console.log(data);
            return data;
        }); }));
        return this.orders;
    };
    AdminOrderService.prototype.updateOrder = function (order) {
        this.orderDoc = this.db.doc("orders/" + order.id);
        return this.orderDoc.update(order);
    };
    AdminOrderService.prototype.deleteOrder = function (id) {
        this.orderDoc = this.db.doc("orders/" + id);
        return this.orderDoc.delete();
    };
    // get just a particular referral
    AdminOrderService.prototype.getOrder = function (id) {
        this.orderDoc = this.db.doc("orders/" + id);
        this.order = this.orderDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.order;
    };
    AdminOrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], AdminOrderService);
    return AdminOrderService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getCategories = function () {
        this.categoriesColl = this.db.collection('categories', function (ref) { return ref.orderBy('name'); });
        this.categories = this.categoriesColl.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }); }));
        return this.categories;
    };
    CategoryService.prototype.addCategory = function (category) {
        return this.db.collection("categories").doc("" + category.name).set(category);
    };
    CategoryService.prototype.deleteCategory = function (id) {
        return this.db.doc("categories/" + id).delete();
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/flavors.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/flavors.service.ts ***!
  \*********************************************/
/*! exports provided: FlavorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlavorsService", function() { return FlavorsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlavorsService = /** @class */ (function () {
    function FlavorsService(db) {
        this.db = db;
    }
    FlavorsService.prototype.getFlavors = function () {
        this.flavorsColl = this.db.collection('flavors', function (ref) { return ref.orderBy('name'); });
        this.flavors = this.flavorsColl.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }); }));
        return this.flavors;
    };
    FlavorsService.prototype.addFlavor = function (addon) {
        this.flavorsColl = this.db.collection('flavors');
        return this.flavorsColl.add(addon);
    };
    FlavorsService.prototype.deleteFlavor = function (id) {
        return this.db.doc("flavors/" + id).delete();
    };
    FlavorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FlavorsService);
    return FlavorsService;
}());



/***/ }),

/***/ "./src/app/services/logins/logins.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/logins/logins.service.ts ***!
  \***************************************************/
/*! exports provided: LoginsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginsService", function() { return LoginsService; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginsService = /** @class */ (function () {
    function LoginsService(authServ, msg, router, route) {
        this.authServ = authServ;
        this.msg = msg;
        this.router = router;
        this.route = route;
        this.user$ = authServ.authState;
    }
    LoginsService.prototype.register = function (email, password) {
        return this.authServ.auth.createUserWithEmailAndPassword(email, password);
    };
    //return a promise of the logim state
    LoginsService.prototype.getState = function () {
        return this.authServ.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    //return a login promise
    LoginsService.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var returnURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        returnURL = this.router.snapshot.queryParamMap.get('returnURL') || '/';
                        return [4 /*yield*/, this.authServ.auth.signInWithEmailAndPassword(email, password).then(function (res) { return localStorage.setItem('userId', res.user.uid); })];
                    case 1:
                        _a.sent();
                        this.route.navigateByUrl(returnURL);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginsService.prototype.logout = function () {
        var userId = localStorage.getItem('userId');
        if (userId)
            localStorage.removeItem('userId');
        return this.authServ.auth.signOut();
    };
    LoginsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginsService);
    return LoginsService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var OrderService = /** @class */ (function () {
    function OrderService(db, shoppingCartServ) {
        this.db = db;
        this.shoppingCartServ = shoppingCartServ;
        this.newOrder = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.newOrderSubmitted = this.newOrder.asObservable();
    }
    OrderService.prototype.checkForNewOrder = function (value) {
        this.newOrder.next(value);
    };
    OrderService.prototype.placeOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.collection('orders', function (ref) { return ref.orderBy('datePlaced'); })];
                    case 1:
                        result = _a.sent();
                        if (result)
                            this.shoppingCartServ.clearCart();
                        return [2 /*return*/, result.add(order)];
                }
            });
        });
    };
    OrderService.prototype.getOrderByUser = function (id) {
        return this.db.collection('orders', function (ref) { return ref.where('userId', '==', id); }).valueChanges();
    };
    OrderService.prototype.getUserId = function (id) {
        this.orderCollection = this.db.collection('orders', function (ref) { return ref.where('userId', '==', id).orderBy('datePlaced', 'desc'); });
        this.orders = this.orderCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }); }));
        return this.orders;
    };
    OrderService.prototype.getOrders = function () {
        this.orderCollection = this.db.collection('orders');
        return this.orderCollection;
    };
    OrderService.prototype.getAllOrders = function () {
        this.orderCollection = this.db.collection('orders', function (ref) { return ref.orderBy('datePlaced', 'desc'); });
        this.orders = this.orderCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }); }));
        return this.orders;
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartService"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.saveProduct = function (product) {
        return this.db.collection('products').add(product);
    };
    ProductService.prototype.getProducts = function () {
        this.productsColl = this.db.collection('products', function (ref) { return ref.orderBy('updated', 'desc'); });
        this.products = this.productsColl.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }); }));
        return this.products;
    };
    // get a player
    ProductService.prototype.getProduct = function (id) {
        this.productDoc = this.db.doc("products/" + id);
        this.product = this.productDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.product;
    };
    ProductService.prototype.updateProduct = function (product) {
        this.productDoc = this.db.doc("products/" + product.id);
        return this.productDoc.update(product);
    };
    ProductService.prototype.deleteProduct = function (id) {
        this.productDoc = this.db.doc("products/" + id);
        return this.productDoc.delete();
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/shopping-cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shopping-cart.service.ts ***!
  \***************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_shoppingCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/shoppingCart */ "./src/app/models/shoppingCart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    ShoppingCartService.prototype.createCart = function () {
        return this.db.collection('shopping-carts').add({ dateCreated: new Date().toLocaleString() });
    };
    ShoppingCartService.prototype.getItem = function (cartId, productId) {
        return this.db.doc("shopping-carts/" + cartId + "/items/" + productId);
    };
    ShoppingCartService.prototype.getOrCreateCartId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartId = localStorage.getItem('cartId');
                        if (!!cartId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createCart()];
                    case 1:
                        result = _a.sent();
                        localStorage.setItem('cartId', result.id);
                        return [2 /*return*/, result.id];
                    case 2: 
                    // if cartId in local storage, return it.
                    return [2 /*return*/, cartId];
                }
            });
        });
    };
    // get a cart 
    ShoppingCartService.prototype.getCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        return [2 /*return*/, this.db.collection("shopping-carts/" + cartId + "/items").valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return new _models_shoppingCart__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"](x); }))];
                }
            });
        });
    };
    // add to cart
    ShoppingCartService.prototype.addToCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.productDoc = this.getItem(cartId, product.id);
                        this.productDoc.get().subscribe(function (doc) {
                            if (doc.exists) {
                                var q = doc.data();
                                _this.productDoc.update({ quantity: q.quantity + 1, addons: q.addons, flavors: q.flavors });
                            }
                            else {
                                _this.productDoc.set({
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    picture: product.picture,
                                    addons: product.addons,
                                    flavors: product.flavors,
                                    instruction: product.instruction,
                                    quantity: 1
                                });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.updateCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.productDoc = this.getItem(cartId, product.id);
                        return [2 /*return*/, this.productDoc.update(product)];
                }
            });
        });
    };
    // remove from cart 
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.productDoc = this.getItem(cartId, product.id);
                        this.productDoc.get().subscribe(function (doc) {
                            if (doc.exists) {
                                var q = doc.data();
                                var remainin = q.quantity;
                                //if(remainin <= 1) this.productDoc.delete();
                                _this.productDoc.update({ quantity: q.quantity - 1 });
                                if (q.quantity === 1) {
                                    _this.productDoc.delete();
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.getOneCart = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        if (cartId) {
                            this.cartDoc = this.db.doc("shopping-carts/" + cartId + "/items/" + id);
                            this.cart = this.cartDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
                                if (actions.payload.exists) {
                                    var data = actions.payload.data();
                                    // data.id = actions.payload.id; 
                                    data.id = actions.payload.id;
                                    return data;
                                }
                                else
                                    return null;
                            }));
                            return [2 /*return*/, this.cart];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.clearCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cartId, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        items = this.db.collection('shopping-carts/' + cartId + '/items');
                        items.get().forEach(function (i) { return i.forEach(function (res) {
                            return _this.db.doc("shopping-carts/" + cartId + "/items/" + res.id).delete();
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.getItemsCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        if (cartId)
                            return [2 /*return*/, this.db.collection('shopping-carts/' + cartId + '/items')];
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/services/users/users.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/users/users.service.ts ***!
  \*************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = /** @class */ (function () {
    function UsersService(fb, auth) {
        var _this = this;
        this.fb = fb;
        this.auth = auth;
        this.user = this.auth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (user) {
            if (user) {
                return _this.fb.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }
        }));
    }
    Object.defineProperty(UsersService.prototype, "isAdmin", {
        get: function () {
            var userId = localStorage.getItem('userId');
            if (userId) {
                return this.getUser(userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (user) { return user.isAdmin; }));
            }
            else {
                return false || null;
            }
        },
        enumerable: true,
        configurable: true
    });
    //get all users
    UsersService.prototype.getUsers = function () {
        this.usersCollection = this.fb.collection('users', function (ref) { return ref.orderBy('name'); });
        this.users = this.usersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }); }));
        return this.users;
    };
    //add user
    UsersService.prototype.addUser = function (user, id) {
        this.fb.collection('users').doc(id).set(user).then(function () { return console.log("Success"); }).catch(function (err) { return console.log(err); });
    };
    UsersService.prototype.deleteUser = function (id) {
        this.userDoc = this.fb.doc("users/" + id);
        this.userDoc.delete();
    };
    UsersService.prototype.updateUser = function (user) {
        this.userDoc = this.fb.doc("users/" + user.id);
        return this.userDoc.update(user);
    };
    UsersService.prototype.getUser = function (id) {
        this.userDoc = this.fb.doc("users/" + id);
        this.user = this.userDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.user;
    };
    UsersService.prototype.getUserByEmail = function (email) {
        return this.fb.doc("users/" + email);
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], UsersService);
    return UsersService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDgKIjthz1nDb6cMuqs6qdIGHlB85mTH88',
        authDomain: 'antojitoschef-9cb63.firebaseapp.com',
        databaseURL: 'https://antojitoschef-9cb63.firebaseio.com',
        projectId: 'antojitoschef-9cb63',
        storageBucket: 'antojitoschef-9cb63.appspot.com',
        messagingSenderId: '10453201072'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Robert Melendez\Desktop\antojo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map