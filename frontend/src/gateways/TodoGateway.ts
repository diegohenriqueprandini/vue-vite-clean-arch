import Item from "../entities/Item"
import TodoList from "../entities/TodoList"

export default interface TodoGateway {
    getTodoList(): Promise<TodoList>
    addItem(item: Item): Promise<void>
    updateItem(item: Item): Promise<void>
    removeItem(id: string): Promise<void>
}