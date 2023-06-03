import { Sequelize } from "sequelize-typescript";
import Task from "../models/task";

// const connection = new Sequelize({
//     dialect: "postgres",
//     host: "localhost",
//     username: "root",
//     password: "anku@1234",
//     database: "todos",
//     logging: false,
//     models: [Task],
// });

const connection = new Sequelize('postgres://postgres:1234@localhost:5432/postgres');

export default connection;