import LinkedList from "./LinkedListClass.mjs";
import { DoubleNode } from './Node.js';

class DoubleLinkedList extends LinkedList{
    insert(data){
        const newNode = super.insert(data);
        const prev = this.getPrevNode(newNode);
        const newDoubleNode = new DoubleNode({
            data: newNode.data,
            next: newNode.next,
            prev,
        });
        console.log(this, newDoubleNode);
        if (prev) prev.next = newDoubleNode;
        else this.head.prev = prev;
    }

    getPrevNode(node){
        let currNode = this.head;
        let prevNode = null;

        while (currNode !== null){
            if (currNode === node){
                return prevNode;
            }
            prevNode = currNode;
            currNode = currNode.next;
        }
        return null;
    }
}

const doublelinkList = new DoubleLinkedList();
doublelinkList.insert('Fst Double Node');
doublelinkList.insert('2nd Double Node');
doublelinkList.isCircular = true;
console.log(doublelinkList);
