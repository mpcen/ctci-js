/*
	Successor:
	Write an algorithm to find the "next" node (ex: in-order successor) of a given node
	in a BST. You may assume that each node has a link to its parent.
*/

class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if(data < this.data && !this.left) {
			this.left = new TreeNode(data);
		} else if(data < this.data && this.left) {
			this.left.insert(data);
		} else if(data > this.data && !this.right) {
			this.right = new TreeNode(data);
		} else {
			this.right.insert(data);
		}
	}
}

// helper
function findNode(root, data) {
	if(!root || !data) {
		return null;
	}

	let currentNode = root;

	while(currentNode.data !== data) {
		if(data < currentNode.data) {
			currentNode = currentNode.left;
		} else {
			currentNode = currentNode.right;
		}
	}

	return currentNode;
}

function findSuccessor(root, data) {
	let currentNode = findNode(root, data);
	let successor = null;

	if(currentNode.right) {
		let tmpNode = currentNode.right;
		
		while(tmpNode !== null) {
			successor = tmpNode;
			tmpNode = tmpNode.left;
		}
	} else {
		let ancestor = root;

		while(ancestor !== currentNode) {
			if(currentNode.data < ancestor.data) {
				successor = ancestor;
				ancestor = ancestor.left;
			} else {
				ancestor = ancestor.right;
			}
		}		
	}
	
	return successor;
}

// TEST CASE
const tree1 = new TreeNode(4);
tree1.insert(3)
tree1.insert(9)
tree1.insert(-2)
tree1.insert(6)
tree1.insert(2)
tree1.insert(5)
findSuccessor(tree1, 3) // 4
findSuccessor(tree1, -2) // 2
findSuccessor(tree1, 4) // 5
// Time complexity: O(h) where h = height of tree