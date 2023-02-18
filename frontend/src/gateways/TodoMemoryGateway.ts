import Item from "../entities/Item";
import TodoList from "../entities/TodoList";
import TodoGateway from "./TodoGateway";

export default class TodoMemoryGateway implements TodoGateway {

    private todos: any

    constructor() {
        this.todos = [
            { id: null, description: "Estudar TypeScript", done: true },
            { id: null, description: "Ler um livro", done: false },
            { id: null, description: "Fazer curriculo", done: false }
        ]
    }

    async getTodoList(): Promise<TodoList> {
        const todoList = new TodoList(this.todos);
        return todoList;
    }

    async addItem(item: Item): Promise<void> {
        this.todos.push(item);
    }

    async updateItem(item: Item): Promise<void> {
        const todo = this.todos.find((todo: any) => todo.id === item.id);
        if (todo) {
            todo.done = item.done;
        }
    }

    async removeItem(id: string): Promise<void> {
        const todo = this.todos.find((todo: any) => todo.id === id);
        if (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        }
    }
}