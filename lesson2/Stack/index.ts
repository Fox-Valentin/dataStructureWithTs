import { ArrayStack } from "./Stack";
import { LinkedListStack } from "./LinkedListStack";
const log = console.log.bind(console)
function main() {
    let stack = new LinkedListStack<number>()
    for (let i = 0; i < 10; i++) {
        stack.push(i)
        log(stack.toString())
    }
    log(stack.peek())
    stack.pop()
    log(stack.toString())
}

main()
