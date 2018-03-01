/*
	Validate BST:
	Implement a function to check if a binary tree is a binary search tree
*/

class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null
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

function isBST(node, min = null, max = null) {
	if(max !== null && node.data > max) {
		return false;
	}

	if(min !== null && node.data < min) {
		return false;
	}

	if(node.left && !isBST(node.left, min, node.data)) {
		return false;
	}

	if(node.right && !isBST(node.right, node.data, max)) {
		return false;
	}

	return true;
}


// TEST CASE
const tree1 = new TreeNode(4)
tree1.insert(1)
tree1.insert(9)
tree1.insert(-2)
tree1.insert(3)
tree1.insert(6)
tree1.insert(15)
console.log(isBST(tree1)); // true

const tree2 = new TreeNode(4)
tree2.insert(1)
tree2.insert(9)
tree2.insert(-2)
tree2.left.insert(5);
tree2.insert(6)
tree2.insert(15)

console.log(isBST(tree2)); // false
//Time complexity: O(n), space Complexity: O(log n)