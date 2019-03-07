import { ArrayCl } from "../Array/Array";

export interface Queue<E> {
    enqueue(e :E): void
    dequeue(): E
    isEmpty(): boolean
    getSize(): number
    getfront(): E
}

export class ArrayQueue<E> implements Queue<E> {
    private data: ArrayCl<E>
    constructor() {
        this.data = new ArrayCl<E>(10)
    }
    public enqueue(e: E): void {
        this.data.addLast(e)
    }
    public dequeue(): E {
        return this.data.removeFirst()
    }
    public getSize(): number {
        return this.data.getSize()
    }
    public isEmpty(): boolean {
        return this.data.isEmpty()
    }
    public getfront(): E {
        return this.data.getFirst()
    }

    public toString(): string {
        let res = 'Queue: front ['
        for (let i = 0, len = this.data.getSize(); i < len; i ++) {
            res += this.data.get(i)
            if (i !== len - 1) {
                res += ', '
            }
        }
        res += '] tail'
        return res
    }
}
