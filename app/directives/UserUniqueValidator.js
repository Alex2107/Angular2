"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
/**
 * Created by st13131 on 4/12/2018.
 */
var UserUniqueValidator = /** @class */ (function () {
    function UserUniqueValidator(http) {
        this.http = http;
    }
    UserUniqueValidator_1 = UserUniqueValidator;
    UserUniqueValidator.prototype.validate = function (c) {
        var _this = this;
        var user = c.value;
        return new Promise(function (resolve) {
            return _this.http.get("checkUserUnique", { params: { user: user } })
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                return res ? resolve(null) : resolve({ userUniqueValid: false });
            });
        });
    };
    UserUniqueValidator = UserUniqueValidator_1 = __decorate([
        core_1.Directive({
            selector: '[userUniqueValid][formControlName],[userUniqueValid][ngModel]',
            providers: [{ provide: forms_1.NG_ASYNC_VALIDATORS,
                    useExisting: UserUniqueValidator_1, multi: true }]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserUniqueValidator);
    return UserUniqueValidator;
    var UserUniqueValidator_1;
}());
exports.UserUniqueValidator = UserUniqueValidator;
//# sourceMappingURL=UserUniqueValidator.js.map