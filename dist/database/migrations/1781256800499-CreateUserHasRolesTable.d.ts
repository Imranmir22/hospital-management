import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUserHasRolesTable1781256800499 implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
