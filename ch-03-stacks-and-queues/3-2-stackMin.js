/*
	Stack Min:
	How would you design a stack which, in addition to push and pop,
	has a function 'min' which returns the minimum element?
	Push, pop and min should all operate in O(1) time.
*/

/*
	Explanation:
	Track the min value at the time of new node push so you're always able to get the min in O(1) from top of stack.
*/

class StackNode {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.min = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
	}

	push(data) {
		let newItem = new StackNode(data);

		if(!this.top) {
			this.top = newItem;
			
			newItem.min = data;

			return;
		}

		if(newItem.data < this.top.min) {
			newItem.min = newItem.data
		} else {
			newItem.min = this.top.min;
		}

		newItem.next = this.top;

		this.top = newItem;
	}

	pop() {
		if(!this.top) {
			return null;
		}

		let itemToReturn = this.top;

		this.top = this.top.next;

		return itemToReturn;
	}

	min() {
		return this.top.min;
	}
}