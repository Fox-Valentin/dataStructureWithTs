let log = console.log.bind(console)
class ArrayCl {
    private size: number
    private data: Array<any>
    constructor(capacity: any) {
        let capa = capacity && typeof capacity === 'number' ? capacity : 10
        this.data = new Array(capa)
        this.size = 0
    }
    /**
     * resize
     */
    private resize(len) {
        len = Math.floor(len)
        var newAry = new Array(len)
        for (var i = 0; i < this.size; i++) {
            newAry[i] = this.data[i]
        }
        this.data = newAry
    }
    /**
     * getData
     */
    public getData() :string{
        var res = `Array: size = ${this.size}, capacity = ${this.data.length} \n`
        res += '['
        for (var i = 0; i < this.size; i++) {
            res += this.data[i]
            if (i < this.size - 1) {
                res += ', '
            }
        }
        res += ']'
        return res
    }
    /**
     * get
     */
    public get(index: number) {
        if (index < 0 || index >= this.size) {
            throw Error('index < 0 || index >= this.size')
        }
        return this.data[index]
    }
    /**
     * getFirst
     */
    public getFirst() {
        return this.get(0)
    }
    /**
     * getLast
     */
    public getLast() {
        return this.get(this.size - 1)
    }
    /**
     * set
     */
    public set(index: number, num: any) {
        if (index < 0 || index >= this.size) {
            throw Error('index < 0 || index >= this.size')
        }
        this.data[index] = num
    }
    /**
     * getSize
     */
    public getSize() {
        return this.size
    }

    /**
     * getCapacity
     */
    public getCapacity() {
        return this.data.length
    }

    /**
     * isEmpty
     */
    public isEmpty() : boolean{
        return this.size === 0
    }
    /**
     * addLast
     */
    public addLast(num: any) {
        this.addEl(this.size, num)
    }
    /**
     * addEl
     */
    public addEl(index: number, num: any) {
        if (index < 0) {
            throw Error('index < 0')
        }
        if (index >= this.data.length) {
            this.resize(this.data.length * 2)
        }
        for (var i = this.size; i >= index; i--) {
            this.data[i] = this.data[i - 1]
        }
        this.data[index] = num
        this.size ++
    }
    /**
     * addFirst
     */
    public addFirst(num: any) {
        this.addEl(0, num)
    }

    /**
     * contain
     */
    public contain(el: any): boolean{
        for (var i = 0; i < this.size; i++) {
            if (el === this.data[i]) {
                return true
            }
        }
        return false
    }

    /**
     * find
     */
    public find(el: any) :number {
        for (var i = 0; i < this.size; i++) {
            if (el === this.data[i]) {
                return i
            }
        }
        return -1
    }
    /**
     * removeEl
     */
    public removeEl(el: any) {
        var index = this.find(el)
        if (index >= 0) {
            for (var i = index; i < this.size; i++) {
                this.data[i] = this.data[i + 1]
            }
            this.size --
            this.data[this.size] = null
        }
    }
    /**
     * remove
     */
    public remove(index: number) {
        if (index >= 0 && index < this.size) {
            for (var i = index; i < this.size; i++) {
                this.data[i] = this.data[i + 1]
            }
            this.size--
            if (this.size < this.data.length / 4 && this.data.length / 2 !== 0) {
                this.resize(this.data.length / 2)
            }
        }
    }
    /**
     * removeFirst
     */
    public removeFirst() {
        this.remove(0)
    }
    /**
     * removeLast
     */
    public removeLast() {
        this.remove(this.size - 1)
    }
}
export { ArrayCl }