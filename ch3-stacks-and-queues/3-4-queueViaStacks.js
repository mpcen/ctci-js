/*
	Queue via Stacks:
	Implement a MyQueue class which implements a queue using two stacks
*/

class StackNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class Stack {
	constructor() {
		this.top = null;
	}

	push(data) {
		const newNode = new StackNode(data, this.top);

		this.top = newNode;
	}

	pop() {
		if(!this.top) {
			return undefined;
		}

		const nodeToReturn = this.top;
		
		this.top = this.top.next;
		
		return nodeToReturn;
	}

	peek() {
		return this.top;
	}

	isEmpty() {
		return this.top === null;
	}
}

class MyQueue {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
		this.size = 0;
	}

	insert(data) {
		this.stack1.push(data);
		this.size++;
	}

	remove() {
		if(this.size === 0){ 
			return undefined;
		}
		
		while(this.size > 1) {
			this.stack2.push(this.stack1.pop().data);
			this.size--;
		}
		
		const itemToReturn = this.stack1.pop();
		
		this.size--;

		while(!this.stack2.isEmpty()) {
			this.stack1.push(this.stack2.pop().data);
			this.size++;
		}

		return itemToReturn;
	}

	peek() {
		if(this.size === 0){
			return null;
		}

		while(!this.stack1.isEmpty()) {
			this.stack2.push(this.stack1.pop().data);
			this.size--;
		}

		const itemToReturn = this.stack2.peek();

		while(!this.stack2.isEmpty()) {
			this.stack1.push(this.stack2.pop().data);
			this.size++;
		}

		return itemToReturn;
	}

	isEmpty() {
		return this.stack1.isEmpty();
	}
}


// TEST CASES
const queue = new MyQueue();
queue.isEmpty() // true
queue.insert(1)
queue.insert(2)
queue.insert(3)
queue.insert(4)
queue.peek() // 1
queue.isEmpty() // false
queue.remove()
queue.remove()
queue.peek() // 3