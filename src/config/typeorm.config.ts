import { DataSource } from 'typeorm';
import * as path from 'path';
import 'dotenv/config';

export default new DataSource({
  type: (process.env.DB_CONNECTION || 'mysql') as any,
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
