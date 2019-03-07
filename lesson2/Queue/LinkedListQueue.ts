import { Queue } from "./Queue";
import { NodeCl } from "../LinkedList/LinkedList";

export class LinkedListQueue<E> implements Queue<E> {
    private head: NodeCl<E>
    private tail: NodeCl<E>
    private size: number

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    public getSize(): number {
        return this.size
    }
    public isEmpty(): boolean {
        return this.size === 0
    }
    public getfront(): E{
        if (this.isEmpty()) {
            throw Error('Cannot getFront from an empty queue')
        }
        return this.head.e
    }
    public enqueue(e) {
        let newNode = new NodeCl(e, null)
        if (this.tail === null) {
            this.tail = newNode
            this.head = this.tail
        } else {
            this.tail.next = newNode
            this.tail = this.tail.next
        }
        this.size ++
    }
    public dequeue(): E{
        if (this.isEmpty()) {
            throw Error('Cannot dequeue from an empty queue')
        }
        let retNode = this.head
        this.head = this.head.next
        retNode.next = null
        if (this.head === null) {
            this.tail = null
        }
        this.size --
        return retNode.e
    }

    public toString(): string {
        let res = 'Queue front '
        for(let i = this.head; i !== null; i = i.next) {
            res += i.e.toString()
            if (i !== null) {
                res += ' ->'
            }
        }
        res += 'null tail'
        return res
    }
}