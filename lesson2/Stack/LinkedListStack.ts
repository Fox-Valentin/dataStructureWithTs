import { Stack } from "./Stack";
import { LinkedList } from "../LinkedList/LinkedList";

export class LinkedListStack<E> implements Stack<E> {
    private data: LinkedList<E>
    constructor() {
        this.data = new LinkedList<E>()
    }
    public push(e: E) {
        this.data.addFirst(e)
    }
    public pop(): E{
        return this.data.removeFirst()
    }
    public peek() :E{
        return this.data.getFirst()
    }
    public getSize() :number{
        return this.data.getSize()
    }
    public isEmpty(): boolean{
        return this.data.isEmpty()
    }
    public toString(): string{
        let res = 'LinkedListStack : dummyHead '
        for (let i = 0, len = this.data.getSize(); i < len - 1; i++) {
            res += this.data.get(i).toString()
            if (i !== len) {
                res += '->'
            }
        }
        res += '  null'
        return res
    }
}