// import { ArrayCl } from "./Array";
let log = console.log.bind(console)
import { LoopQueue } from "./LoopQueue";
import { Queue } from "./Queue";

function oprater(q: any, qCount) {
    let random = Math.floor(Math.random() * 10)
    let startTime = new Date().getTime()
    for (var i = 0; i < qCount; i++) {
        q.enqueue(random)
    }
    for (var i = 0; i < qCount; i++) {
        q.dequeue(random)
    }
    let enDTime = new Date().getTime()
    log(enDTime - startTime)
}
let count = 100000
let LQ = new LoopQueue(count)
let Q = new Queue(count)
oprater(LQ, count)
oprater(Q, count)