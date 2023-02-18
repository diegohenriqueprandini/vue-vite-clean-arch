export default class Item {
    done: boolean = false;
    constructor(readonly id: string | null, readonly description: string, done: boolean = false) {
        if (id === null) {
            this.id = uuid();
        }
        this.done = done;
    }
}

function uuid(): string {
    return Math.floor(Math.random() * 1000).toString();
}