import Item from "./Item";
import Observable from "./Observable";

export default class TodoList extends Observable {
 
    items: Item[];

    constructor(items?: any) {
        super();
        this.items = []
        if (items) {
            items.forEach((item: any) => {
                this.items.push(new Item(item.id, item.description, item.done));
            });
        }        
    }

    addItem(description: string) {
        if (!description) return;
        if (this.items.some((item: Item) => item.description === description)) return;
        if (this.items.filter((item: Item) => !item.done).length > 4) return;
        const item = new Item(null, description);
        this.items.push(item);
        super.notify("addItem", item);
    }

    removeItem(item: Item) {
        this.items.splice(this.items.indexOf(item), 1);
        super.notify("removeItem", item);
    }

    toggleDone(item: Item) {
        item.done = !item.done
        super.notify("toggleDone", item);
    }

    getItem(description: string): Item {
        const todo = this.items.find((todo: Item) => todo.description === description);
        if (!todo)
            throw new Error("Todo item not found");        
        return todo;
    }

    getCompleted(): number {
        const total = this.items.length;
        if (total === 0) return 0;
        const done = this.items.filter((todo: Item) => todo.done).length;
        return Math.round((done/total) * 100);
    }
}