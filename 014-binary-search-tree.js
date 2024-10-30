class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let cur = this.root;
        while (true) {
            if (cur.value === value) return undefined;

            if (cur.value > value) {
                if (!cur.left) {
                    cur.left = newNode;
                    return this;
                }
                cur = cur.left;
            }

            if (cur.value < value) {
                if (!cur.right) {
                    cur.right = newNode;
                    return this;
                }
                cur = cur.right;
            }
        }
    }

    find(value) {
        if (!this.root) return false;

        let cur = this.root;
        while (true) {
            if (cur.value === value) return true;

            if (cur.value > value) {
                if (!cur.left) return false;
                cur = cur.left;
            }

            if (cur.value < value) {
                if (!cur.right) return false;
                cur = cur.right;
            }
        }
    }
}

const tree = new BinarySearchTree();

// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(2);
// tree.root.left.right = new Node(5);
// tree.root.right.right = new Node(22);

tree.insert(10);
tree.insert(112);
tree.insert(15);
tree.insert(2);
tree.insert(5);
tree.insert(22);
tree.insert(512);
tree.insert(5);

console.log(tree);

console.log(tree.find(1234));
