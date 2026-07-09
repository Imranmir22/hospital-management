import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateLanguagesTable1781763337791 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
