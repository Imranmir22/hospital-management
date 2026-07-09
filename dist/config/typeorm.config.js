"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const path = require("path");
require("dotenv/config");
exports.default = new typeorm_1.DataSource({
    type: (process.env.DB_CONNECTION || 'mysql'),
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: 'root',
    password: 'password',
    database: process.env.DB_DATABASE || 'expense_splitter',
    entities: [
        path.join(__dirname, '..', '**', '*.entity.{ts,js}'),
    ],
    migrations: [
        path.join(__dirname, '..', 'database', 'migrations', '*.{ts,js}'),
    ],
});
//# sourceMappingURL=typeorm.config.js.map