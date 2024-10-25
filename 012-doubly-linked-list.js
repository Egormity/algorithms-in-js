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

        const oldTail = this.tail;
        this.tail = { ...this.tail.prev, next: null };
        this.tail.prev.next = null;
        this.length--;
        return oldTail;
    }
}

const list = new DoublyLinkedList();

list.push(123);
list.push(1);
list.push(2);
list.push(233);
list.push(2323233);

// console.log(list.pop());

console.log(list);
