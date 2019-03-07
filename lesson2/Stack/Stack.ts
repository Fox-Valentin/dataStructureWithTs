import { ArrayCl } from "../Array/Array";
export interface Stack<E> {
    push(e: E): void
    pop(): E
    peek(): E
    getSize(): number
    isEmpty(): boolean
}
export class ArrayStack<E> implements Stack<E> {
    private data: ArrayCl<E>
    constructor() {
        this.data = new ArrayCl<E>(10)
    }
    public push(e: E) {
        this.data.addLast(e)
    }
    public pop() {
        return this.data.removeLast()
    }
    public peek() {
        return this.data.getLast()
    }
    public getSize() {
        return this.data.getSize()
    }
    public isEmpty() {
        return this.data.isEmpty()
    }
    public getCapacity() {
        return this.data.getCapacity()
    }
    public toString() {
        let res = 'Stack: ['
        for (let i = 0, len = this.data.getSize(); i < len; i++) {
            res += this.data.get(i)
            if (i !== len -1) {
                res += ', '
            }
        }
        res += '] top'
        return res
    }
}