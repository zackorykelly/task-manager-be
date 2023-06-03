"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
// const connection = new Sequelize({
//     dialect: "postgres",
//     host: "localhost",
//     username: "root",
//     password: "anku@1234",
//     database: "todos",
//     logging: false,
//     models: [Task],
// });
const connection = new sequelize_typescript_1.Sequelize('postgres://postgres:1234@localhost:5432/postgres');
exports.default = connection;
