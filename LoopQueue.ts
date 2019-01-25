let log = console.log.bind(console)
interface LoopQueueInter {
    getSize(): number
    isEmpty(): boolean
    getCapacity(): number
    enqueue(el: any)
}

class LoopQueue implements LoopQueueInter {
    private data: Array<any>
    private front: number
    private tail: number
    private size: number

    constructor(capa) {
        this.data = new Array(capa + 1)
        this.front = 0
        this.tail = 0
        this.size = 0
    }
    /**
     * getFront
     */
    public getFront() {
        if (this.isEmpty) {
            throw Error('queue is empty')
        }
        return this.data[this.front]
    }
    /**
     * enqueue
     */
    public enqueue(el: any) {
        if (Math.floor((this.tail + 1) % this.data.length) === this.front) {
            this.resize(this.getCapacity() * 2)
        }
        this.data[this.tail] = el
        this.tail = (this.tail + 1) % this.data.length
        this.size ++
    }

    /**
     * dequeue
     */
    public dequeue() {
        if (this.isEmpty()) {
            throw Error('queue is empty')
        }
        let ret = this.data[this.front]
        this.data[this.front] = null
        this.front = (this.front + 1) % this.data.length
        this.size --
        if (this.size <= Math.floor(this.getCapacity()) / 4 && Math.floor(this.getCapacity() / 2) !== 0) {
            this.resize(Math.floor(this.getCapacity() / 2))
        }
        return ret
    }

    private resize(newCapa) {
        var newAry = new Array(newCapa + 1)
        for (var i = 0; i < this.size; i++) {
            newAry[i] = this.data[(this.front + i) % this.data.length]
        }
        this.data = newAry
        this.front = 0
        this.tail = this.size
    }
    /**
     * getSize
     */
    public getSize() {
        return this.size
    }

    /**
     * isEmpty
     */
    public isEmpty() {
        return this.front === this.tail
    }

    /**
     * getCapacity
     */
    public getCapacity() {
        return this.data.length - 1
    }

    /**
     * toString
     */
    public toString() {
        var res = `Array: size = ${this.size}, capacity = ${this.getCapacity()} \n`
        res += `Queue front ${ this.front } [`
        for (var i = this.front; i != this.tail; i = (i + 1) % this.data.length) {
            res += this.data[i]
            if ((i + 1) % this.data.length != this.tail) {
                res += ', '
            }
        }
        res += `] tail ${ this.tail }`
        return res
    }
}

export { LoopQueue }