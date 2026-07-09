"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmPasswordConstraint = void 0;
exports.ConfirmPassword = ConfirmPassword;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
let ConfirmPasswordConstraint = class ConfirmPasswordConstraint {
    async validate(password, args) {
        const dto = args.object;
        if (!password || !dto.password_confirmation)
            return true;
        return password === dto.password_confirmation;
    }
    defaultMessage(args) {
        return 'Password does not match';
    }
};
exports.ConfirmPasswordConstraint = ConfirmPasswordConstraint;
exports.ConfirmPasswordConstraint = ConfirmPasswordConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'ConfirmPassword', async: true }),
    (0, common_1.Injectable)()
], ConfirmPasswordConstraint);
function ConfirmPassword(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: ConfirmPasswordConstraint,
        });
    };
}
//# sourceMappingURL=confirm-password.validator.js.map