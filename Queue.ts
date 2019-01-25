import { ArrayCl } from "./Array";
interface QueueInter {
    enqueue(el: any): void
    dequeue(): any
    getSize(): number
    getCapacity(): number
    toString(): string
    isEmpty(): boolean
    getFront(): any
}

class Queue implements QueueInter {
    private array: ArrayCl
    constructor(capa) {
        this.array = new ArrayCl(capa)
    }
    /**
     * enqueue
     */
    public enqueue(el: any) {
        this.array.addLast(el)
    }
    /**
     * dequeue
     */
    public dequeue() {
        return this.array.removeLast()
    }
    /**
     * getSize
     */
    public getSize() {
        return this.array.getSize()
    }

    /**
     * getCapacity
     */
    public getCapacity() {
        return this.array.getCapacity()
    }
    /**
     * isEmpty
     */
    public isEmpty() {
        return this.array.isEmpty()
    }

    /**
     * getFront
     */
    public getFront() {
        return this.array.getFirst()
    }
    /**
     * toString
     */
    public toString() {
        let res = 'front ['
        let len = this.array.getSize()
        for (var i = 0; i < len; i++) {
            res += this.array.get(i)
            if (i !== len - 1) {
                res += ', '
            }
        }
        res += '] tail'
        return res
    }
}

export { Queue }