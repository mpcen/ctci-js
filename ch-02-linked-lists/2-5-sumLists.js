/*
	Sum Lists:
	You have two numbers represented by a linked list, where each node contains a single digit.
	The digits are stored in reverse order, such that the 1's digit is at the head of the list.
	Write a function that adds the two numbers and returns the sum as a linked list.

	Example:
	Input: (7 -> 1 -> 6) + (5 -> 9 -> 2) = 617 + 295
	Output: (2 -> 1 -> 9) = 912
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
		const newNode = new Node(data);

		if(!this.head || !this.head.data) {
			return this.head = newNode;
		}

		let currentNode = this.head;

		while(currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = newNode;
	}
}

// SOLUTION 1
function sumLists(ll1, ll2) {
	let node1 = ll1.head;
	let node2 = ll2.head;
	let newLL = new LinkedList(null);
	let carry = 0;
	let sum = 0;

	while(node1 && node2) {
		sum = carry + node1.data + node2.data;

		if(sum >= 10) {
			sum -= 10;
			carry = 1;
		} else {
			carry = 0;
		}		

		newLL.insert(sum);

		node1 = node1.next;
		node2 = node2.next;
	}

	node1 = node1 || node2;

	while(node1) {
		sum = carry + node1.data;

		if(sum >= 10) {
			sum -= 10;
			carry = 1;
		} else {
			carry = 0;
		}

		newLL.insert(sum);

		node1 = node1.next;
	}

	return newLL;
}


// TEST CASE
const ll1 = new LinkedList(7)
ll1.insert(1)
ll1.insert(6)

const ll2 = new LinkedList(5)
ll2.insert(9)
ll2.insert(2)

console.log(sumLists(ll1, ll2))


// SOLUTION 2
/*
// helper function to iterate through a linked list and return a string in the correct order
function iterateLinkedList(ll) {
	let currentNode = ll.head;
	let str = currentNode.data.toString();

	while(currentNode.next) {
		currentNode = currentNode.next;
		str = currentNode.data.toString() + str;
	}

	return parseInt(str);
}

function sumLists(ll1, ll2) {
	let sum = iterateLinkedList(ll1) + iterateLinkedList(ll2);

	let sumLL = new LinkedList(null);
	
	for(let n of sum.toString().split('').reverse()) {
		sumLL.insert(n);
	}

	return sumLL
}*/

// Time Complexity: O(n*m), space O(n*m)