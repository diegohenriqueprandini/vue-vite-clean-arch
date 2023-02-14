import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

function uuid() {
    return Math.floor(Math.random() * 1000);
}

const todos: any = [
    { id: uuid(), description: "Estudar TypeScript", done: true },
    { id: uuid(), description: "Ler um livro", done: false },
    { id: uuid(), description: "Fazer curriculo", done: false }
];

app.get("/todos", function (req, res) {
    console.log("GET /todos");
    res.json(todos);
});

app.post("/todos", function (req, res) {
    todos.push(req.body);
    res.end();
});

app.delete("/todos/:id", function (req, res) {
    const id = parseInt(req.params.id);
    const todo = todos.find((todo: any) => todo.id === id);
    if (todo) {
        todos.splice(todos.indexOf(todo), 1);
    }    
    res.end();
});

app.put("/todos/:id", function (req, res) {
    const id = parseInt(req.params.id);
    const todo = todos.find((todo: any) => todo.id === id);
    if (todo) {
        todo.done = req.body.done;
    }
    res.end();
});

app.listen(3000);