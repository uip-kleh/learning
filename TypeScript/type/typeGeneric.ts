class Queue<T> {
    private array: T[] = [];

    push(item: T) {
        this.array.push(item);
    }

    pop(): T | undefined {
        return this.array.shift();
    }

    display(): void {
        console.log(this.array.join(', '));
    }
}

const queue = new Queue<number>();
queue.push(111);
queue.push(112);
// queue.push(`hoge`);  // error

queue.display();
