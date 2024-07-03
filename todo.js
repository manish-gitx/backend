const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
let todos = [];

app.use(express.json());

app.get("/todos", function(req, res) {
  res.json(todos);
});

app.post("/todos", function(req, res) {
  let todo = (req.body);
  todo.id = Math.floor(Math.random() * 10);
  todos.push(todo);
  res.status(201).json(todo);
});
//asdufbasdf

app.get("/todos/:id", function(req, res) {
  let getid = parseInt(req.params.id);
  getid = todos.findIndex(item => item.id === getid);
  if (getid === -1) {
    res.status(404).send("not found");
  } else {
    res.status(200).json(todos[getid]);
  }
});

app.delete("/todos/:id", function(req, res) {
  let getid = parseInt(req.params.id);
  getid = todos.findIndex(item => item.id === getid);
  if (getid === -1) {
    res.status(404).send("not exist");
  } else {
    todos.splice(getid, 1);
    res.status(200).send("done!");
  }
});

app.put("/todos/:id", function(req, res) {
  let getid = parseInt(req.params.id);
  getid = todos.findIndex(item => item.id === getid);
  let obj = req.body;
  if (getid === -1) {
    res.status(404).send("not exist");
  } else {
    todos[getid].title = obj.title;
    todos[getid].description = obj.description;
    res.status(200).send("done");
  }
});

app.listen(303);
