/*
	Intersection:
	Given two singly linked lists, determine if the two lists intersect.
	Return the intersecting node. Node that the intersection is defined
	based on reference, not value. That is, if the kth node of the first
	linked list is the exact same node (by reference) as the jth node of
	the second linked list, they are intersecting.
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
			return this.head = new Node(data);
		}

		let currentNode = this.head;

		while(currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = new Node(data);
	}
}

// Helper to get tail and size of ll
function getTailAndSize(ll) {
	let currentNode = ll.head;
	let counter = 1;

	while(currentNode.next) {
		currentNode = currentNode.next;
		counter++;
	}

	return { tail: currentNode, size: counter };
}

function intersection(ll1, ll2) {
	if(!ll1.head || !ll2.head) {
		return false;
	}

	// get size of linkedlists
	const ll1TailAndSize = getTailAndSize(ll1);
	const ll2TailAndSize = getTailAndSize(ll2);

	if(ll1TailAndSize.tail !== ll2TailAndSize.tail) {
		return false;
	}

	// get diff of linkedlists
	const llDiff = ll1TailAndSize.size - ll2TailAndSize.size;

	// if lists are the same size, start iterating through them now
	if(llDiff === 0) {
		return traverseLinkedLists(ll1, ll2);
	}

	// get a head start on larger linked list
	llDiff < 0 ? headStartTraverse(ll2, llDiff) : headStartTraverse(ll1, llDiff);

	// iterate through both lists together
	traverseLinkedLists(ll1, ll2);
}

// traverse helper
function traverseLinkedLists(ll1, ll2) {
	let currentNode1 = ll1.head;
	let currentNode2 = ll2.head;

	while(currentNode1 && currentNode2) {
		if(currentNode1 === currentNode2) {
			return true;
		}

		currentNode1 = currentNode1.next;
		currentNode2 = currentNode2.next;
	}

	return false;
}

// headstart helper
function headStartTraverse(ll, diff) {
	const currentNode = ll.head;

	for(let i = 0; i < diff; i++) {
		currentNode = currentNode.next;
	}

	ll.head = currentNode;

	return ll;
}


// Test Case
let sameNode = {name: 'same'};

let ll1 = new LinkedList('a');
ll1.insert('b');
ll1.insert('c');
ll1.insert(sameNode);
ll1.insert('d');
ll1.insert('e');

let ll2 = new LinkedList(1);
ll2.insert(2);
ll2.insert(3);
ll2.head.next.next.next = ll1.head.next.next.next;

// LL1: a -> b -> c -> sameNode -> d -> e
//						  ^
//						  |
// LL2: 		1 -> 2 -> 3

console.log(intersection(ll1, ll2)) // true