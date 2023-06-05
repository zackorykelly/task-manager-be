import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connection from './db/config';
import Task, {TaskInit} from './models/task';
import bodyParser from 'body-parser';
import cors from 'cors'

//Retrieve port variable from env
dotenv.config();
const port = process.env.PORT;

//App initialization
const app: Express = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//Will enable cors on all requests regardless of origin.
//Should be changed before production release.
app.use(cors())

//Add an initialize task model(creates table if necessary using sync)
connection.addModels([Task])
TaskInit(connection);



//Retrieve the list of tasks
app.get('/tasks', async (req: Request, res: Response) => {
  const result = await Task.findAll();
  res.send(result);
});

//Create a new task
app.post('/tasks', async (req: Request, res: Response) => {
  const newTask = req.body;
  const result = await Task.create(newTask);
  res.send(result);
});

//Update the status of a task (completed or incomplete)
app.patch('/tasks/:id', async (req: Request, res: Response) => {
  const taskUpdate = req.body
  const result = await Task.update(
    taskUpdate,
    {where: {
      id: req.params.id
    }}
  )
  res.json("Success");
});

//Delete a task
app.delete('/tasks/:id', async (req: Request, res: Response) => {
  const result = await Task.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json("Success")
});

//Run server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});