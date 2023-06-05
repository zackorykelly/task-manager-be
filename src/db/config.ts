import { Sequelize } from "sequelize-typescript";
import Task from "../models/task";

//TODO: use .env to define db variables
// const connection = new Sequelize({
//     dialect: "postgres",
//     host: "localhost",
//     username: "",
//     password: "",
//     database: "",
//     logging: false,
//     models: [Task],
// });

const connection = new Sequelize('postgres://postgres:1234@localhost:5432/postgres');

export default connection;