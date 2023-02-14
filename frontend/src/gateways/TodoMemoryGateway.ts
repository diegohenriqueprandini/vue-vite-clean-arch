import TodoGateway from "./TodoGateway";

export default class TodoMemoryGateway implements TodoGateway {

    private todos: any

    constructor() {
        this.todos = [
            { id: uuid(), description: "Estudar TypeScript", done: true },
            { id: uuid(), description: "Ler um livro", done: false },
            { id: uuid(), description: "Fazer curriculo", done: false }
        ]
    }

    async getItens(): Promise<any> {
        return this.todos;
    }

    async addItem(item: any): Promise<any> {
        this.todos.push(item);
    }

    async updateItem(item: any): Promise<any> {
        const todo = this.todos.find((todo: any) => todo.id === item.id);
        if (todo) {
            todo.done = item.done;
        }
    }

    async removeItem(id: string): Promise<any> {
        const todo = this.todos.find((todo: any) => todo.id === id);
        if (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        }
    }
}

function uuid() {
    return Math.floor(Math.random() * 1000);
}
