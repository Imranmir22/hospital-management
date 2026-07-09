import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
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
