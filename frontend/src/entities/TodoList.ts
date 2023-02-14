export default class TodoList {
 
    itens: any;

    constructor() {
        this.itens = []
    }

    addItem(description: string) {
        if (!description) return;
        if (this.itens.some((item: any) => item.description === description)) return;
        if (this.itens.filter((item: any) => !item.done).length > 4) return;
        const item = { id: uuid(), description, done: false };
        this.itens.push(item);
    }
    
    removeItem(item: any) {
        this.itens.splice(this.itens.indexOf(item), 1);
    }
    
    toggleDone(item: any) {
        item.done = !item.done
    }

    getItem(description: string) {
        const todo = this.itens.find((todo: any) => todo.description === description);
        if (!todo)
            throw new Error("Todo item not found");        
        return todo;
    }
   
    getCompleted() {
        const total = this.itens.length;
        if (total === 0) return 0;
        const done = this.itens.filter((todo: any) => todo.done).length;
        return Math.round((done/total) * 100);
    }
}

function uuid() {
    return Math.floor(Math.random() * 1000);
}