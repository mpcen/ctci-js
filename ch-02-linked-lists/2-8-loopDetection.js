/*
	Loop Detection:
	Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

	Example:
	Input: a -> b -> c -> d -> e -> c [the same c from earlier]
	Output: c
*/

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(data) {
		this.head = new Node(data);
	}

	insert(data) {
		if(!this.head || !this.head.data) {
			this.head = new Node(data);
		}

		let currentNode = this.head;

		while(currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = new Node(data);
	}
}

function loopDetection(ll) {
	if(!ll.head) {
		return null;
	}

	let slowNode = ll.head;
	let fastNode = ll.head.next.next;

	while(fastNode) {
		if(slowNode === fastNode) {
			return slowNode;
		}

		slowNode = slowNode.next;
		fastNode = fastNode.next

		if(fastNode.next) {
			fastNode = fastNode.next;
		}
	}

	return null;
}

const ll = new LinkedList('a');
ll.insert('b')
ll.insert('c')
ll.insert('d')
ll.insert('e')

ll.head.next.next.next.next.next = ll.head.next;

console.log(loopDetection(ll))