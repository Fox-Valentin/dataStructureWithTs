import { LinkedListStack } from "../Stack/LinkedListStack";
import { LinkedListQueue } from "../Queue/LinkedListQueue";

class Node<E> {
    public e: E
    public left: Node<E>
    public right: Node<E>
    constructor(e: E) {
        this.e = e
        this.left = null
        this.right = null
    }
}
export class BST<E> {
    private root: Node<E>
    private size: number
    constructor() {
        this.root = null
        this.size = 0
    }
    public getSize() {
        return this.size
    }
    public isEmpty() {
        return this.size === 0
    }
    public add(e: E) {
        this.root = this.addFn(this.root, e)
    }
    private equals(x, y) {
        return JSON.stringify(x) === JSON.stringify(y)
    }
    public addFn(node: Node<E>, e): Node<E>{
        if (node === null) {
            this.size++
            return new Node(e)
        }
        if (e.compareTo(node.e) < 0) {
            node.left = this.addFn(node.left, e)
        } else if(e.compareTo(node.e) > 0) {
            node.right = this.addFn(node.right, e)
        }
        return node
    }
    public contains(e: E): boolean {
        return this.containsFn(this.root, e)
    }
    private containsFn(node: Node<E>, e): boolean {
        if (node === null) {
            return false
        }
        if (this.equals(e, node.e)) {
            return true
        } else if (e.compareTo(node.e) < 0) {
            return this.containsFn(node.left, e)
        } else {
            return this.containsFn(node.right, e)
        }
    }
    public levelOrder() {
        let queue = new LinkedListQueue<Node<E>>()
        queue.enqueue(this.root)
        while (!queue.isEmpty()) {
            const curNode = queue.dequeue()
            console.log(JSON.stringify(curNode.e))
            if (curNode.left !== null) {
                queue.enqueue(curNode.left)
            }
            if (curNode.right !== null) {
                queue.enqueue(curNode.right)
            }
        }
    }
    public preOrder() {
        this.preOrderFn(this.root)
    }
    private preOrderFn(node: Node<E>) {
        if (node === null) {
            return
        }
        console.log(node.e)
        this.preOrderFn(node.left)
        this.preOrderFn(node.right)
    }
    public preOrderNR() {
        const stack = new LinkedListStack<Node<E>>()
        stack.push(this.root)
        while (!stack.isEmpty()) {
            let tempNode = stack.pop()
            console.log(tempNode.e)
            if (tempNode.right !== null) {
                stack.push(tempNode.right)
            }
            if (tempNode.left !== null) {
                stack.push(tempNode.left)
            }
        }
    }
    public inOrder() {
        this.inOrderFn(this.root)
    }
    private inOrderFn(node: Node<E>) {
        if (node === null) {
            return
        }
        this.inOrderFn(node.left)
        console.log(node.e)
        this.inOrderFn(node.right)
    }
    public postOrder() {
        this.postOrderFn(this.root)
    }
    private postOrderFn(node: Node<E>) {
        if (node === null) {
            return
        }
        this.postOrderFn(node.right)
        this.postOrderFn(node.left)
        console.log(node.e)
    }

    public minimum(): E{
        if (this.size === 0) {
            throw Error('Cannot find minmum from an empty BST.')
        }
        return this.minmumFn(this.root).e
    }
    private minmumFn(node: Node<E>): Node<E>{
        if (node.left === null) {
            return node
        }
        return this.minmumFn(node.left)
    }
    public maxmum(): E{
        if (this.size === 0) {
            throw Error('Cannot find maxmum from an empty BST.')
        }
        return this.maxmumFn(this.root).e
    }
    private maxmumFn(node: Node<E>): Node<E>{
        if (node.right === null) {
            return node
        }
        return this.maxmumFn(node.right)
    }
    public removeMin(): E{
        let ret = this.minimum()
        this.root = this.removeMinFn(this.root)
        return ret
    }
    private removeMinFn(node: Node<E>): Node<E> {
        if (node.left === null) {
            let curNode = node.right
            node.right = null
            this.size--
            return curNode
        }
        node.left = this.removeMinFn(node.left)
        return node
    }
    public removeMax(): E{
        let ret = this.maxmum()
        this.root = this.removeMaxFn(this.root)
        return ret
    }
    private removeMaxFn(node: Node<E>): Node<E>{
        if (node.right === null) {
            let curNode = node.left
            node.left = null
            this.size --
            return curNode
        }
        node.right = this.removeMaxFn(node.right)
        return node
    }
    public remove(e: E) {
        this.root = this.removeFn(this.root, e)
    }
    private removeFn(node: Node<E>, e): Node<E> {
        if (node === null) {
            return null
        }
        if (e.compareTo(node.e) < 0) {
            return this.removeFn(node.left, e)
        } else if (e.compareTo(node.e) > 0) {
            return this.removeFn(node.right, e)
        } else { // e equals node.e
            if (node.left === null) {
                let curNode = node.left
                node.left = null
                this.size--
                return curNode
            } else if(node.right === null) {
                let curNode = node.right
                node.right = null
                this.size--
                return curNode
            } else {
                let successor = this.minmumFn(node.right)
                successor.right = this.removeMinFn(node.right)
                successor.left = node.left
                node.left = node.right = null
                return successor
            }
        }

    }
    public toString(): string {
        return this.generateBSTString(this.root, 0)
    }
    private generateBSTString(node: Node<E>, depth: number): string {
        let res = ''
        if (node === null) {
            res = this.deepString(0) + 'null\n'
            return res
        }
        res += this.deepString(depth) + `${JSON.stringify(node.e)}\n`
        res += this.generateBSTString(node.left, depth + 1)
        res += this.generateBSTString(node.right, depth + 1)
        return res
    }
    private deepString(depth: number): string {
        let res = ''
        for (let i = 0; i < depth; i++) {
            res += '--'
        }
        return res
    }
}