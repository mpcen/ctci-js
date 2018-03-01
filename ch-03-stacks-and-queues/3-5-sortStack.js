/*
	Sort Stack:
	Write a program to sort a stack such that the smallest items are on top. You can use
	an additional temporary stack but you may not copy the elements into any other data
	structure (such as an array). The stack supports the following operations:
	push, pop, peek, isEmpty
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
			return null;
		}

		const nodeToRemove = this.top;

		this.top = this.top.next;

		return nodeToRemove.data;
	}

	peek() {
		return this.top.data;
	}

	isEmpty() {
		return this.top === null;
	}
}



function sortStack(s1) {
	const s2 = new Stack();
	let tmp = null;

	while(!s1.isEmpty()) {
		tmp = s1.pop();

		while(!s2.isEmpty() && s2.peek() > tmp) {
			s1.push(s2.pop());
		}

		s2.push(tmp);
	}

	while(!s2.isEmpty()) {
		s1.push(s2.pop());
	}

	return s1;
}

// TEST CASE

const stack = new Stack();

stack.push(5);
stack.push(3);
stack.push(2);
stack.push(8);
stack.push(1);
stack.push(6);
console.log(stack) // bottom -> [6 -> 1 -> 8 -> 2 -> 3 -> 5] <- top

console.log(sortStack(stack)); // bottom -> [8 -> 6 -> 5 -> 3 -> 2 -> 1] <- top

// Time complexity O(n^2), space O(n)