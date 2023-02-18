import Item from "../entities/Item";
import TodoList from "../entities/TodoList";
import HttpClient from "../infra/HttpClient";
import TodoGateway from "./TodoGateway";

export default class TodoHttpGateway implements TodoGateway {

    constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {}

    async getTodoList(): Promise<TodoList> {
        const todoData = await this.httpClient.get(`${this.baseUrl}/todos`)
        const todoList = new TodoList(todoData);
        return todoList;
    }

    async addItem(item: Item): Promise<void> {
        await this.httpClient.post(`${this.baseUrl}/todos`, item)
    }

    async updateItem(item: Item): Promise<void> {
        await this.httpClient.put(`${this.baseUrl}/todos/${item.id}`, item)
    }
 
    async removeItem(id: string): Promise<void> {
        await this.httpClient.delete(`${this.baseUrl}/todos/${id}`)
    }
}