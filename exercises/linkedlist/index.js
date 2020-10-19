// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.insertAt(data, 0);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.getAt(0);
    }

    getLast() {
        // if (!this.head) 
        //     return null;

        // let node = this.head;
        // while (node) {
        //     if (!node.next) {
        //         return node;
        //     }
        //     node = node.next;
        // }
        return this.getAt(this.size() -1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.removeAt(0);
    }

    removeLast() {
        // if (!this.head) {
        //     return;
        // }

        // if (!this.head.next) {
        //     this.head = null;
        //     return;
        // }

        // let previous = this.head;
        // let node = this.head.next;

        // while (node.next) {
        //     previous = node;
        //     node = node.next;
        // }

        // previous.next = null;

        this.removeAt(this.size() - 1);
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head || index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);

        previous.next = node;
    }

    forEach(fnCallback) {
        for (let node of this) {
            fnCallback(node);
        }
    }

    *[Symbol.iterator]() {
        if (!this.head) return;

        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
