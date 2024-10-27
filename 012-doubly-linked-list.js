class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        const oldTail = { ...this.tail, prev: null };
        this.tail = { ...this.tail.prev, next: null };
        this.tail.prev.next = null;
        this.length--;
        return oldTail;
    }

    shift() {
        if (this.length === 0) return undefined;

        const oldHead = { ...this.head, next: null };
        this.head = { ...this.head.next, prev: null };
        this.length--;
        return oldHead;
    }

    unshift(value) {
        const newNode = new Node(value);
        this.head = { ...newNode, next: this.head ? { ...this.head, prev: newNode } : null };
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length - 1) return undefined;
        if (index === 0) return this.head;
        if (index === this.length - 1) return this.tail;

        let node;
        if (index < this.length / 2) {
            node = this.head;
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
        } else {
            node = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                node = node.prev;
            }
        }
        return node;
    }

    set(index, value) {
        const node = this.get(index);
        return !!(node ? (node.value = value) : false);
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        const newNode = new Node(value);
        this.get(index - 1).next = { ...newNode, next: { ...this.get(index), prev: newNode } };
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length - 1) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const removed = { ...this.get(index), prev: null, next: null };
        this.get(index - 1).next = this.get(index + 1);
        this.length--;
        return removed;
    }
}

const list = new DoublyLinkedList();

list.push(123);
list.push(1);
list.push(2);
list.push(233);
list.push(2323233);

// console.log(list.pop());
// console.log(list.shift());

// console.log(list.get(list.length - 1));
list.set(0, 0);
console.log(list);
