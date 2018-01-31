/*
	Delete Middle Node:
	Implement an algorithm to delete a node in the middle
	(ie: Any node but the first and last node, not
	necessarily in the exact middle) of a singly linked list,
	given only access to that node.

	Example:
	Input: the node 'c' from the linked list a -> b -> c -> d -> e -> f
	Result: Nothing is returned but the new linked list is:
	a -> b -> d -> e -> f
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
		if(!this.head) {
			return this.head = new Node(data);
		}

		let currentNode = this.head;

		while(currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = new Node(data);
	}
}

function deleteMiddleNode(ll, mid) {
	let currentNode = ll.head;
	let prevNode = null;

	while(currentNode.next) {
		prevNode = currentNode;
		currentNode = currentNode.next;

		if(currentNode.data === mid) {
			prevNode.next = currentNode.next;
			currentNode = currentNode.next;
			return;
		}
	}
}

//TEST CASE
const ll = new LinkedList('a');
ll.insert('b')
ll.insert('c')
ll.insert('d')
ll.insert('e')
ll.insert('f')
// ll = a -> b -> c -> d -> e -> f
deleteMiddleNode(ll, 'c')
// ll = a -> b -> d -> e -> f