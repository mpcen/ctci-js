/*
	Lsit Of Depths:
	Given a Binary Tree, design an algorithm which creates a linked list of all nodes
	at each depth (e.g. if you have a tree with depth D, you will have D linked lists).
*/

class LinkedListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(data) {
		this.head = new LinkedListNode(data);
	}

	addToTail(data) {
		const newNode = new LinkedListNode(data);

		let currentNode = this.head;

		while(currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = newNode;
	}
}

class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if(data < this.data && !this.left) {
			this.left = new TreeNode(data);
		} else if (data < this.data && this.right) {
			this.left.insert(data);
		} else if (data > this.data && !this.right) {
			this.right = new TreeNode(data);
		} else {
			this.right.insert(data);
		}
	}
}

// RECURSIVE SOLUTION
function createListFromTreeDepths(tree) {
	const lists = [];
	addToList(lists, tree, 0);
	return lists;
}

function addToList(lists, node, depth) {
	if(node) {
		if(!lists[depth]) {
			lists[depth] = new LinkedList(node.data);
		} else {
			lists[depth].addToTail(node.data);
		}		

		addToList(lists, node.left, depth + 1);
		addToList(lists, node.right, depth + 1);
	}
}

//ITERATIVE SOLUTION
// function createListFromTreeDepths(rootNode) {
// 	const treeQueue = [rootNode, 'end'];	
// 	const lists = [];
// 	let listQueue = [];

// 	while(treeQueue.length) {	
// 		const node = treeQueue.shift();
	
// 		if(node !== 'end') {
// 			if(node.left) treeQueue.push(node.left);
// 			if(node.right) treeQueue.push(node.right);
			
// 			listQueue.push(node.data);
// 		} else {
// 			if(treeQueue.length) {
// 				treeQueue.push('end');								
// 			}

// 			const ll = new LinkedList(listQueue.shift());

// 			while(listQueue.length) {
// 				ll.addToTail(listQueue.shift());
// 			}

// 			lists.push(ll);
// 			listQueue = [];
// 		}
// 	}

// 	return lists;
// }

// TEST CASE
const tree = new TreeNode(4);
tree.insert(1)
tree.insert(7)
tree.insert(-1)
tree.insert(3)
tree.insert(5)
tree.insert(8)

console.log(createListFromTreeDepths(tree));
/*
output: Array of the following Linked List's
	4 -> null
	1 -> 7 -> null
	-1 -> 3 -> 5 -> 8 -> null
*/