import { Queue } from "./Queue";

export class LoopQueue<E> implements Queue<E> {
    private data: E[]
    private front: number
    private tail: number
    private size: number
    constructor(capacity: number) {
        this.data = new Array<E>(capacity + 1)
        this.front = 0
        this.tail = 0
        this.size = 0
    }
    public getSize() {
        return this.size
    }
    public isEmpty() {
        return this.front === this.size
    }
    public getCapacity(): number{
        return this.data.length - 1
    }
    public enqueue(e: E) {
        if (this.front === (this.tail + 1) % this.data.length) {
            this.resize(this.getCapacity() * 2)
        }
        this.data[this.tail] = e
        this.tail = (this.tail + 1) % this.data.length
        this.size++
    }
    public dequeue(): E {
        if (this.isEmpty()) {
            throw Error('Cannot dequeue from an empty queue')
        }
        let res: E = this.data[this.front]
        this.data[this.front] = null
        this.front = (this.front + 1) % this.data.length
        this.size --
        if (this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0) {
            this.resize(this.getCapacity() / 2)
        }
        return res
    }
    private resize(newNapacity: number) {
        let newArry = new Array<E>(newNapacity + 1)
        for (let i = 0; i < this.size; i++) {
            newArry[i] = this.data[(this.front + i) % this.data.length]
        }
        this.data = newArry
        this.front = 0
        this.tail = this.size
    }
    public getfront(): E{
        if (this.isEmpty()) {
            throw Error('Cannot getFront from an empty queue')
        }
        return this.data[this.front]
    }

    public toString(): string{
        let res = 'Queue: front ['
        for (let i = this.front; i != this.tail; i = (i + 1) % this.data.length) {
            res += this.data[i]
            if ((i + 1) % this.data.length != this.tail) {
                res += ', '
            }
        }
        res += `] tail; size: ${this.size}, Capacity: ${this.getCapacity()}`
        return res
    }
}