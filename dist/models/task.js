"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskInit = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Task = class Task extends sequelize_typescript_1.Model {
};
Task = __decorate([
    sequelize_typescript_1.Table
], Task);
exports.default = Task;
const TaskInit = (sequelize) => {
    Task.init({
        id: {
            type: sequelize_typescript_1.DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: sequelize_typescript_1.DataType.STRING(255)
        },
        description: {
            type: sequelize_typescript_1.DataType.STRING(255)
        },
        completed: {
            type: sequelize_typescript_1.DataType.BOOLEAN,
            defaultValue: false,
        }
    }, {
        sequelize,
        modelName: 'task',
        tableName: 'task',
        timestamps: false
    });
    Task.sync();
};
exports.TaskInit = TaskInit;
