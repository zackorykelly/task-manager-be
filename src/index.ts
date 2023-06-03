import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connection from './db/config';
import Task, {TaskInit} from './models/task';
connection.addModels([Task])

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
TaskInit(connection);


//Retrieve the list of tasks
app.get('/tasks', async (req: Request, res: Response) => {
  const result = await Task.findAll();
  res.send('GET Express + TypeScript Server weee');
});

//Create a new task
app.post('/tasks', (req: Request, res: Response) => {
  res.send('POST Express + TypeScript Server weee');
});

//Update the status of a task (completed or incomplete)
app.patch('/tasks/:id', (req: Request, res: Response) => {
  res.send('PATCH Express + TypeScript Server weee');
});

//Delete a task
app.delete('/tasks/:id', (req: Request, res: Response) => {
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