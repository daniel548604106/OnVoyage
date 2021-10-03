import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const PORT = 8000;
const app = express();
app.use(cors());

// graphql
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const Task = require("./models/Task.js");
const tasks = [
  new Task(1, "Learn NodeJs", "Learning is fun"),
  new Task(2, "Learn Express", "Learning is fun"),
  new Task(3, "Learn GraphQL", "Learning is fun"),
];
//// we use backticks because it allows us to write multiple lines of code
const schema = buildSchema(` 
	type User{
		name: String,
		id : ID
	}

  type Task{
    id: ID,
    title: String,
    description: String,
    completed: Boolean,
    date : String
  }

	type Query {
    hello: String,
		msg : String,
		user: User,
    tasks : [Task],
    task(id: ID!) : Task
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "Hello world!";
  },
  msg: () => {
    return "message";
  },
  user: () => ({
    name: "Daniel",
    id: 12312,
  }),
  tasks: () => tasks,
  task({ id }) {
    let task = null;
    for (let i in tasks) {
      if (tasks[i].id === id) {
        task = tasks[i];
        break;
      }
    }
    return task;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
    // this will return text content of our index.html
    // and we need to change the mounting place
  });
});

// serving other static file from our build folder

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`app launched on ${PORT}`);
});
