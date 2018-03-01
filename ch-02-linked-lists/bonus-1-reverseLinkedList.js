/*
	Palindrome:
	Implement a function to check if a linked list is a palindrome
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

function reverseLinkedList(ll) {
	let currentNode = ll.head;
	let prevNode = null;
	let nextNode = null;

	while(currentNode) {
		nextNode = currentNode.next;
		currentNode.next = prevNode;
		prevNode = currentNode;
		currentNode = nextNode;
	}

	ll.head = prevNode;

	return ll;
}


// TEST CASE
const ll = new LinkedList(1);
ll.insert(2)
ll.insert(3)
ll.insert(4)
ll.insert(5)

console.log(ll) // 1 -> 2 -> 3 -> 4 -> 5

console.log(reverseLinkedList(ll)) // 5 -> 4 -> 3 -> 2 -> 1
