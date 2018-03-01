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
			return this.head = new Node(data);
		}

		let currentNode = this.head;

		while(currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = new Node(data);
	}
}

// Solution 1
function isPalindrome(ll) {
	const stack = [];

	let currentNode = ll.head;

	if(!currentNode) {
		return false;
	}

	while(currentNode) {
		stack.push(currentNode.data);

		currentNode = currentNode.next;
	}

	currentNode = ll.head;

	while(stack.length) {
		if(stack.pop() !== currentNode.data) {
			return false;
		}

		currentNode = currentNode.next;
	}

	return true;
}

let ll = new LinkedList('a')
ll.insert('b')
ll.insert('u')
ll.insert('t')
ll.insert('u')
ll.insert('b')
ll.insert('a')

console.log(ll) // a -> b -> u -> t -> u -> b -> a

console.log(isPalindrome(ll)) // true