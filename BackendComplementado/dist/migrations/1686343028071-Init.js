"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1686343028071 = void 0;
class Init1686343028071 {
    constructor() {
        this.name = 'Init1686343028071';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "users_pkey"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "correo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_d3cf8c651c0e94ea522b61ca3ac" PRIMARY KEY ("correo")`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_d3cf8c651c0e94ea522b61ca3ac"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "correo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("correo")`);
    }
}
exports.Init1686343028071 = Init1686343028071;
//# sourceMappingURL=1686343028071-Init.js.map