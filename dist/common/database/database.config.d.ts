declare const _default: (() => {
    default: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        synchronize: boolean;
        autoLoadEntities: boolean;
        extra: {
            max: number;
            idleTimeoutMillis: number;
            connectionTimeoutMillis: number;
        };
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    default: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        synchronize: boolean;
        autoLoadEntities: boolean;
        extra: {
            max: number;
            idleTimeoutMillis: number;
            connectionTimeoutMillis: number;
        };
    };
}>;
export default _default;
