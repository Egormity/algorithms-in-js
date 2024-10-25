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

    get(index) {
        if (index < 0 || index > this.length - 1) return undefined;

        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur;
    }

    set(index, value) {
        const node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        const newNode = new Node(value);
        newNode.next = this.get(index);
        this.get(index - 1).next = newNode;
        this.length++;
        return true;
    }

    delete(index) {
        if (index < 0 || index > this.length - 1) return false;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        this.length--;
        return (this.get(index - 1).next = this.get(index + 1));
    }

    reverse() {
        for (let i = 0; i < this.length / 2; i++) {
            // prettier-ignore
            [
                this.get(i).value,
                this.get(this.length - (i + 1)).value
            ] 
            = 
            // prettier-ignore
            [
                this.get(this.length - (i + 1)).value,
                this.get(i).value,
            ];
        }
    }

    print() {
        const arr = [];
        let cur = this.head;
        while (cur) {
            arr.push(cur.val);
            cur = cur.next;
        }
        console.log(arr);
    }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("Hello asdasddas");
list.push("Hello 2");
// console.log(list);

// list.pop();
// list.pop();
// list.pop();
// console.log(list);

// console.log(list.get(22));

list.insert(0, 0);
list.insert(4, 2);
// console.log(list);

list.delete(1);
list.print();
list.reverse();
list.print();
