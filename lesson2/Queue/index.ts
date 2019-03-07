import { ArrayQueue } from "./Queue";
import { LoopQueue } from "./LoopQueue";
import { LinkedListQueue } from "./LinkedListQueue";
const log = console.log.bind(console)
function main() {
    let queue = new LinkedListQueue<number>()
    for (let i = 0; i < 10; i++) {
        queue.enqueue(i)
        if (i % 3 ===2) {
            queue.dequeue()
        }
        log(queue.toString())
    }
}
main()