class Test {
    public name: string
    private age: number
}

interface TestInt extends Test {
    hobby: Array<string>
}

class Test2 extends Test implements TestInt {
    public hobby: Array<string>
    public name: string
}