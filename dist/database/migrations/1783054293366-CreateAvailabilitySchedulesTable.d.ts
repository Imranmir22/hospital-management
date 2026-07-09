import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateAvailabilitySchedulesTable1783054293366 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
