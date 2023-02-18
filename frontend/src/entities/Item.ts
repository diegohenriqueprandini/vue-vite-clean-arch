export default class Item {
    readonly id: string;
    done: boolean = false;
    constructor(id: string | null, readonly description: string, done: boolean = false) {
        if (id === null) {
            this.id = uuid();
        } else {
            this.id = id;
        }
        
        this.done = done;
    }
}

function uuid(): string {
    return Math.floor(Math.random() * 1000).toString();
}