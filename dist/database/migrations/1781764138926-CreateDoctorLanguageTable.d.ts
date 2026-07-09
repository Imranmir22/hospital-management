import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateDoctorLanguageTable1781764138926 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
