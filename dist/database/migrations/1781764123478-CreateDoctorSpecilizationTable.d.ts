import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateDoctorSpecilizationTable1781764123478 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
