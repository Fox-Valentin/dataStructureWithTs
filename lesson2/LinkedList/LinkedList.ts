export class NodeCl<E> {
    public e: E
    public next: any
    constructor(e: E, next: any) {
        this.e = e
        this.next = next
    }
    public toString(): string{
        return JSON.stringify(this.e)
    }
}
export class LinkedList<E> {
    private dummyHead: NodeCl<E>
    private size: number
    constructor() {
        this.size = 0
        this.dummyHead = new NodeCl(null, null)
    }
    public getSize() {
        return this.size
    }
    public isEmpty() {
        return this.size === 0
    }
    public add(index: number, e: E) {
        if (index < 0 || index > this.size) {
            throw Error('Index is illegal.')
        }
        let prev: NodeCl<E> = this.dummyHead
        for (let i = 0; i < index; i++) {
            prev = prev.next
        }
        prev.next = new NodeCl(e, prev.next)
        this.size ++
    }
    public addLast(e: E) {
        this.add(this.size, e)
    }
    public addFirst(e: E) {
        this.add(0, e)
    }
    public get(index): E{
        if (index < 0 || index > this.size) {
            throw Error('Index must be a positive number.')
        }
        let cur: NodeCl<E> = this.dummyHead.next
        for (let i = 0; i < index; i++) {
            cur = cur.next
        }
        return cur.e
    }
    public getFirst() {
        return this.get(0)
    }
    public getLast() {
        return this.get(this.size)
    }
    public set(index, e: E) {
        if (index < 0 || index > this.size) {
            throw Error('Index is illegal.')
        }
        let cur: NodeCl<E> = this.dummyHead.next
        for(let i = 0; i < index; i++) {
            cur = cur.next
        }
        cur.e = e
    }
    public setFirst(e: E) {
        this.set(0, e)
    }
    public setLast(e: E) {
        this.set(this.size, e)
    }
    public contain(e: E): boolean {
        for (let i: NodeCl<E> = this.dummyHead.next; i !== null; i = i.next) {
            if (e === i.e) {
                return true
            }
        }
        return false
    }
    public toString(): string{
        let res = 'LinkedList dummtHead ->'
        for (let i = this.dummyHead.next; i !== null; i = i.next) {
            res += i.e.toString()
            if (i !== null) {
                res += '-> '
            }
        }
        res += ' NULL'
        return res
    }
    public remove(index) {
        if (index < 0 || index > this.size) {
            throw Error('Index is illegal.')
        }
        let prev: NodeCl<E> = this.dummyHead
        for (let i = 0; i < index; i++) {
            prev = prev.next
        }
        let retNode = prev.next
        prev.next = retNode.next
        retNode.next = null
        this.size --
        return retNode.e
    }
    public removeFirst() {
        return this.remove(0)
    }
    public removeLast() {
        return this.remove(this.size)
    }
}