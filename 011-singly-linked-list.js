class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return this;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        }

        let len = 0;
        let cur = this.head;

        while (len < this.length - 2) {
            cur = cur.next;
            len++;
        }

        cur.next = null;
        this.tail = cur;
        this.length--;
        return this;
    }

    shift() {
        if (!this.head) return this;

        this.head = this.head.next;
        if (this.length === 1) this.tail = this.head;
        this.length--;
        return this;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (this.head) {
            this.head = { ...newNode, next: this.head };
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("Hello");
console.log(list);

list.pop();
list.pop();
list.pop();
console.log(list);
