"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppValidation = void 0;
const common_1 = require("@nestjs/common");
class AppValidation extends common_1.ValidationPipe {
    constructor() {
        super({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            enableDebugMessages: true,
        });
    }
}
exports.AppValidation = AppValidation;
//# sourceMappingURL=validation.pipe.js.map