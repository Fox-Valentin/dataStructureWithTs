import { ArrayCl } from "./Array"
const log = console.log.bind(console)
class Person {
    constructor(
        private name: string,
        private score: number
    ) {}
}
function main() {
    let ary: ArrayCl<number> = new ArrayCl(10)
    for (let i = 0 ; i < 10; i++) {
        ary.addLast(i)
    }
    ary.addLast(11)
    ary.removeLast()
    log(ary.contain(10))
    log(ary.toString())
}
main()