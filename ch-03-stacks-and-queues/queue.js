/*
	Queue Implementation
	FIFO - First in first out
	Methods:
	- add - Adds an item to the end of the list
	- remove - Removes the first item out of the list
	- peek - Returns the first item of the list
	- isEmpty - Returns true if the list is empty
*/

class QueueNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor(data) {
		const newItem = new QueueNode(data);

		this.first = newItem;
		this.last = newItem;
	}

	add(data) {
		const newItem = new QueueNode(data);

		if(!this.first) {
			this.first = newItem;
		}
		
		if(this.last) {
			this.last.next = newItem;
		}

		this.last = newItem;
	}

	remove() {
		if(!this.first) return null;

		const item = this.first;

		this.first = item.next;

		if(!this.first) {
			this.last = null;
		}

		return item;
	}

	peek() {
		if(!this.first) return null;

		return this.first;
	}

	isEmpty() {
		return this.first === null;
	}
}