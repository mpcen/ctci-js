/*
	Partition:
	Write code to partition a linked list around a value x, such that all nodes less than x
	come before all nodes greater than or equal to x. If x is contained within the list, the 
	values of x only need to be after the elements less than x. The partition element x can
	appear anywhere in the "right partition"; it does not need to appear between the left
	and right partitions:

	Example:
	Input:    3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5]
	Output:   3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8	
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
		if(!this.head.data) {
			return this.head = new Node(data);
		}

		let currentNode = this.head;

		while(currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = new Node(data);
	}
}

function partitionX(ll, x) {
	if(!ll.head) return null;

	let currentNode = ll.head;
	let prevNode = ll.head;
	let newLinkedList = new LinkedList(null);

	while(currentNode.next) {
		if(currentNode.data < x) {
			newLinkedList.insert(currentNode.data);

			if(currentNode === ll.head) {
				ll.head = ll.head.next;
				currentNode = ll.head;
				prevNode = currentNode;
			} else {
				prevNode.next = currentNode.next;
				currentNode = currentNode.next;
			}			
		} else {
			prevNode = currentNode;
			currentNode = currentNode.next;
		}
	}

	currentNode = newLinkedList.head;

	while(currentNode.next) {
		currentNode = currentNode.next;
	}

	currentNode.next = ll.head;

	return newLinkedList;
}


//TEST CASE
const ll = new LinkedList(3)
ll.insert(5)
ll.insert(8)
ll.insert(5)
ll.insert(10)
ll.insert(2)
ll.insert(1)

console.log(ll) // 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
console.log(partitionX(ll, 5)) // 3 -> 2 -> 1 -> 5 -> 8 -> 5 -> 10
// Time Complexity O(n), space O(n)