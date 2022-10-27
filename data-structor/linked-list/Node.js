class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class DoubleNode extends Node{
    constructor({ data, next, prev }){
        super(data);
        this.next = next;
        this.prev = prev;
    }
}

export {
    Node,
    DoubleNode
};
