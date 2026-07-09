"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => ({
    default: {
        type: process.env.DB_CONNECTION,
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '3306', 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE || 'expense_splitter',
        synchronize: process.env.DB_SYNCHRONIZE === 'true',
        autoLoadEntities: true,
        extra: {
            max: parseInt(process.env.DB_POOL_SIZE || '10', 10),
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 10000,
        },
    },
}));
//# sourceMappingURL=database.config.js.map