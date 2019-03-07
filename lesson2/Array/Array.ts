export class ArrayCl<E> {
    constructor(private capacity: number) {
        this.Array(capacity)
        this.size = 0
    }
    private data: E[]
    private size: number
    public Array(capacity: number) {
        this.data = new Array<E>(capacity)
    }
    public getSize(): number {
        return this.size
    }
    public isEmpty(): boolean {
        return this.size === 0
    }
    public getCapacity(): number {
        return this.data.length
    }
    public add(index: number, e: E): void{
        if (index < 0 || index > this.size) {
            throw Error('Add failed. Require index < 0 || index > this.size.');
        }
        if (this.size === this.data.length) {
            this.resize(2 * this.data.length)
        }
        for (let i = this.size - 1; i >= index; i--) {
            this.data[i + 1] = this.data[i]
        }
        this.data[index] = e
        this.size ++
    }
    public addLast(e: E): void {
        this.add(this.size, e)
    }
    public addFirst(e: E): void {
        this.add(0, e)
    }
    public get(index: number): E {
        if (index < 0 || index >= this.size) {
            throw Error('Get failed. Index is illegal.')
        }
        return this.data[index]
    }
    public getLast() {
        return this.get(this.size - 1)
    }
    public getFirst() {
        return this.get(0)
    }
    public set(index: number, e: E): void {
        if (index < 0 || index >= this.size) {
            throw Error('Set failed. Index is illegal.')
        }
        this.data[index] = e
    }
    public toString(): string{
        let res = `Array: size = ${this.size}, capacity = ${this.data.length} \n`
        res += '['
        for (let i = 0; i < this.size; i++) {
            res += JSON.stringify(this.data[i])
            if (i !== this.size -1) {
                res += ','
            }
        }
        res += ']'
        return res
    }
    public find(e: E): number {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return i
            }
        }
        return -1
    }
    public contain(e: E): boolean {
        return this.find(e) !== -1
    }
    public remove(index: number): E {
        if (index < 0 || index >= this.size) {
            throw Error('Remove failed. Index is illegal')
        }
        let ret = this.data[index]
        for (let i = index; i < this.size; i++) {
            this.data[i] = this.data[i + 1]
        }
        this.size --
        this.data[this.size] = null
        if (this.size === this.data.length / 4 && this.data.length / 2 !== 0) {
            this.resize(this.data.length / 2)
        }
        return ret
    }
    public removeFirst(): E {
        return this.remove(0)
    }
    public removeLast(): E {
        return this.remove(this.size - 1)
    }
    public removeElement(e: E) {
        let index = this.find(e)
        this.remove(index)
    }
    private resize(newCapacity: number) {
        let newData = new Array<E>(newCapacity)
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i]
        }
        this.data = newData
    }
}