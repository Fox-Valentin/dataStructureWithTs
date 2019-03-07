import { LinkedList } from "./LinkedList";
const log = console.log.bind(console)
function main() {
    let linkedList = new LinkedList<number>()
    for (let i = 0; i < 5; i++) {
        linkedList.addFirst(i)
    }
    log(linkedList.toString())
    linkedList.set(2, 666)
    linkedList.remove(2)
    log(linkedList.toString())
}
main()
