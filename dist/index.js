"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("./db/config"));
const task_1 = __importStar(require("./models/task"));
config_1.default.addModels([task_1.default]);
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
(0, task_1.TaskInit)(config_1.default);
//Retrieve the list of tasks
app.get('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_1.default.findAll();
    res.send('GET Express + TypeScript Server weee');
}));
//Create a new task
app.post('/tasks', (req, res) => {
    res.send('POST Express + TypeScript Server weee');
});
//Update the status of a task (completed or incomplete)
app.patch('/tasks/:id', (req, res) => {
    res.send('PATCH Express + TypeScript Server weee');
});
//Delete a task
app.delete('/tasks/:id', (req, res) => {
    res.send('DELETE Express + TypeScript Server weee');
});
// connection
// .sync()
// .then(() => {
//   console.log("Database connection successful");
// })
// .catch((err) => {
//   console.log("Error: ", err)
// })
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
