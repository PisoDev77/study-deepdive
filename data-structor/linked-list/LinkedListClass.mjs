import { Node } from './Node.js';

export default class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    has(data){
        return !!this.get(data);
    }

    get(data){
        let currNode = this.head;
        while (currNode !== null){
            if (currNode.data === data){
                return currNode;
            }
            currNode = currNode.next;
        }
        return null;
    }

    insert(data, findingData = null){
        const insertToTail = () => {
            if (this.has(data)){
                return TypeError(`${data} already exists.`);
            }
            const newNode = new Node(data);
            if (!this.tail){
                this.head = newNode;
                this.tail = this.head;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }

            return newNode;
        };
        const insertToAmong = () => {
            const prevNode = this.get(findingData);
            if (!prevNode){
                return TypeError(`${findingData} doesn't exists.`);
            }
            const newNode = new Node(data);

            newNode.next = prevNode.next;
            prevNode.next = newNode;

            return newNode;
        };

        return findingData === null ? insertToTail() : insertToAmong();
    }

    remove(data){
        let currNode = this.head;
        const foundNode = this.get(data);
        let prevNode = null;

        while (currNode !== null){
            if (currNode === foundNode){
                prevNode.next = currNode.next;
                if (foundNode === this.tail){
                    this.tail = prevNode;
                }
                break;
            }
            prevNode = currNode;
            currNode = currNode.next;
        }
        return !!this.get(data);
    }

    get isCircular(){
        return !!this.tail.next;
    }

    set isCircular(bool){
        if (bool){
            this.tail.next = this.head;
        } else {
            this.tail.next = null;
        }
    }
}

// const single = new LinkedList();
// single.insert('Fst Node');
// single.insert('2nd Node');
// single.insert('Insertion', 'Fst Node');
// single.insert('3rd Node');
// single.remove('2nd Node');
// single.isCircular = true;
// console.log(single);
