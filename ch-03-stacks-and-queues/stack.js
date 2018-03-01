/*
	Stack Implementation
	LIFO - Last in first out
	Methods:
		- pop - Removes and returns value from top of stack
		- push - Adds value onto top of stack
		- peek - Prints value on top of stack
		- isEmpty - Returns boolean showing if stack is empty
*/

class StackNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	constructor(data) {
		this.top = new StackNode(data);
	}

	push(data) {
		const newNode = new StackNode(data);
		newNode.next = this.top;
		this.top = newNode;
	}

	pop() {
		if(!this.top) return null;

		const item = this.top;
		this.top = this.top.next
		return item;
	}

	peek() {
		if(!this.top) return null;

		return this.top;
	}

	isEmpty() {
		return this.top === null;
	}
}