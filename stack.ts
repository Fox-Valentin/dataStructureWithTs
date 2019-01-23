import { ArrayCl } from "./Array";

interface StackInter {
    push(el: any): any
    pop() :void
    feek() :any
    isEmpty() :boolean
    getSize() :number
    getData() :string
}

class Stack {
    private data: ArrayCl
    constructor (capa) {
        this.data = new ArrayCl(capa)
    }

    /**
     * push
     */
    public push(el) {
        this.data.addLast(el)
    }

    /**
     * pop
     */
    public pop() {
        this.data.removeLast()
    }
    /**
     * feek
     */
    public feek() {
        return this.data.getLast()
    }
    /**
     * isEmpty
     */
    public isEmpty() {
        return this.data.isEmpty()
    }
    /**
     * getSize
     */
    public getSize() {
        return this.data.getSize()
    }

    /**
     * getData
     */
    public getData() {
        var capa = this.data.getCapacity()
        var size = this.data.getSize()
        var str = `capacity: ${this.data.getCapacity()}, size: ${this.data.getSize()}\n`
        str += '['
        for (var i = 0; i < size; i++) {
            if (i === size - 1) {
                str += `${this.data.get(i)}] top`
            } else {
                str += `${this.data.get(i)}, `
            }
        }
        return str
    }
}

export { Stack }