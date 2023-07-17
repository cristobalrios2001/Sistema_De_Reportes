//Las migraciones es guardan en la base de datos
import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1686343028071 implements MigrationInterface {
    name = 'Init1686343028071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "users_pkey"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "correo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_d3cf8c651c0e94ea522b61ca3ac" PRIMARY KEY ("correo")`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_d3cf8c651c0e94ea522b61ca3ac"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "correo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("correo")`);
    }

}
