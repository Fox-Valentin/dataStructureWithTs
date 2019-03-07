import { BST } from "./BST";

class TestObj {
    constructor(
        public age: number,
        public name: string
    ) {}
    public compareTo(x: TestObj): number {
        return this.age - x.age
    }
}

const log = console.log.bind(console)
function main() {
    const bst = new BST()
    const obj1 = new TestObj(10, 'ss')
    const obj2 = new TestObj(11, 'ww')
    const obj3 = new TestObj(9, 'mm')
    bst.add(obj1)
    bst.add(obj2)
    bst.add(obj3)
    log(bst.toString())
    log('================')
    // bst.removeMin()
    bst.removeMax()
    log(bst.toString())
    // bst.levelOrder()
}
main()