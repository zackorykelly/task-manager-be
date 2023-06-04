import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connection from './db/config';
import Task, {TaskInit} from './models/task';
import bodyParser from 'body-parser';
connection.addModels([Task])
dotenv.config();
const app: Express = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const port = process.env.PORT;
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
  const result = await Task.update(
    {title: 'yoyo'},
    {where: {
      id: req.params.id
    }}
  )
  res.sendStatus(200);
});

//Delete a task
app.delete('/tasks/:id', async (req: Request, res: Response) => {
  const result = await Task.destroy({
    where: {
      id: req.params.id
    }
  });
  res.sendStatus(200)
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