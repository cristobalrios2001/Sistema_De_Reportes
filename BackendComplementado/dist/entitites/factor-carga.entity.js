"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorCarga = void 0;
const typeorm_1 = require("typeorm");
const rajo_entity_1 = require("./rajo.entity");
let factorCarga = exports.factorCarga = class factorCarga {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'date' }),
    __metadata("design:type", Date)
], factorCarga.prototype, "fecha_inicio", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'date' }),
    __metadata("design:type", Date)
], factorCarga.prototype, "fecha_termino", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rajo_entity_1.Rajo),
    (0, typeorm_1.JoinColumn)({ name: 'rajo', referencedColumnName: 'nombre_rajo' }),
    __metadata("design:type", rajo_entity_1.Rajo)
], factorCarga.prototype, "rajo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], factorCarga.prototype, "tonelaje", void 0);
exports.factorCarga = factorCarga = __decorate([
    (0, typeorm_1.Entity)({
        name: 'factor_carga'
    })
], factorCarga);
//# sourceMappingURL=factor-carga.entity.js.map