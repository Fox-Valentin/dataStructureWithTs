// import { ArrayCl } from "./Array";
let log = console.log.bind(console)
import { Stack } from "./Stack";
var sta = new Stack(10)
for (var i = 0; i < 10; i++) {
    sta.push(i)
}
log(sta.getData())
sta.pop()
log(sta.getData())
log(sta.feek())
log(sta.isEmpty())