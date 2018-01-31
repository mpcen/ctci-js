/*
	Kth to Last:
	Implement an algorithm to find the kth to last element of a singly linked list.
*/

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(head) {
		this.head = new Node(head);
		this.size = 1;
	}

	insertTail(data) {
		if(!this.head) return this.head = new Node(data);
		if(!this.head.next) return this.head.next = new Node(data);

		let currentNode = this.head;

		while(currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = new Node(data);
		this.size += 1;
	}
}

function kthToLast(ll, k, count = 0) {
	if(!ll.head) return null;
	if(count === ll.size - 1) return ll.head;

	return kthToLast(ll.head.next, k, count += 1)
}

// ITERATIVE SOLUTION IN O(N) TIME
// function kthToLast(ll, k) {
// 	if(!ll.head) return;
	
// 	let currentNode = ll.head;
// 	let prevNode = ll.head;

// 	for(let i = 0; i < k; i++) {
// 		currentNode = currentNode.next;

// 		if(!currentNode) break;
// 	}

// 	while(currentNode) {
// 		prevNode = prevNode.next;
// 		currentNode = currentNode.next;
// 	}

// 	return prevNode;
// }

const ll = new LinkedList('a');
ll.insertTail('b')
ll.insertTail('c')
ll.insertTail('d')
ll.insertTail('e')

console.log(kthToLast(ll, 1))