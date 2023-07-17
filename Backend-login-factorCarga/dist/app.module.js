"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/config/dist");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const orm_config_1 = require("./config/orm.config");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./modules/users/users.module");
const auth_module_1 = require("./modules/auth/auth.module");
const factor_carga_module_1 = require("./modules/factor-carga/factor-carga.module");
const rajo_module_1 = require("./modules/rajo/rajo.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            dist_1.ConfigModule.forRoot({
                envFilePath: ['.env', '.env.db'],
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot(orm_config_1.DatabaseConfig),
            typeorm_1.TypeOrmModule.forRoot(Object.assign({ name: 'DBExtracciones' }, orm_config_1.DatabaseConfigDB)),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            factor_carga_module_1.FactorCargaModule,
            rajo_module_1.RajoModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map