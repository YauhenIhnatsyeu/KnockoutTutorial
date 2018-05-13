export default class {
    constructor() {
        this.subscribers = [];
    }

    subscribe = (callback) => {
        if (typeof callback === "function") {
            this.subscribers.push(callback);
        }
    }

    invoke = () => {
        for (let callback of this.subscribers) {
            callback();
        }
    }
}