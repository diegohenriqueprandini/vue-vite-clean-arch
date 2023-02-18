import Observer from "./Observer";

export default class Observable {
    
    private observers: Observer[];

    constructor() {
        this.observers = [];
    }

    register(event: string, callback: Function): void {
        const observer = new Observer(event, callback);
        this.observers.push(observer);
    }

    notify(event: string, data: any) {
        for (const observer of this.observers) {
            if (observer.event === event) {
                observer.callback(data);
            }
        }
    }
}