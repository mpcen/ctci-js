/*
	Remove Dups:
	Write code to remove duplicates from an unsorted linked list.
	Follow Up: What about without using a buffer?	
*/

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(head) {
		this.head = new Node(head);
	}

	insertTail(data) {
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

function removeDups(ll) {
	if(!ll.head) return;
	if(!ll.head.next) return;
	
	const nodeMap = {};

	let currentNode = ll.head;
	let prevNode = null;

	while(currentNode.next) {
		if(!nodeMap[currentNode.data]) {
			nodeMap[currentNode.data] = 1;

			prevNode = currentNode;
			currentNode = currentNode.next;
		} else {
			prevNode.next = currentNode.next;
			currentNode = currentNode.next			
		}
	}

	return ll;
}

// TEST CASE:
let ll = new LinkedList('a')
ll.insertTail('b')
ll.insertTail('a')
ll.insertTail('c')

console.log(removeDups(ll)); // a -> b -> c -> null
// Time Complexity: O(n), Space ComplexityL O(n)

/*
	Without a buffer you can do this using "Runner Technique" with 2 pointers in O(n^2) time
*/