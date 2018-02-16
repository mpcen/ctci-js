/*
	Check Balanced:
	Implement a function to check if a binary tree is balanced. For the purposes of this question,
	a balanced tree is defined to be a tree such that the heights of the two subtrees of any
	node never differ by more than one.
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
		} else if (data > this.data && !this.right) {
			this.right = new TreeNode(data);
		} else {
			this.right.insert(data);
		}
	}
}

function isBalanced(tree) {
	if(!tree) {
		return true;
	}

	const cache = {
		min: Number.MAX_SAFE_INTEGER,
		max: Number.MIN_SAFE_INTEGER
	};

	checkHeight(tree, cache, 0);

	return cache.max - cache.min <= 1;
}

function checkHeight(node, cache, depth) {
	if(!node) {
		if(depth < cache.min) {
			cache.min = depth;
		}

		if(depth > cache.max) {
			cache.max = depth;
		}
	} else {
		checkHeight(node.left, cache, depth + 1);
		checkHeight(node.right, cache, depth + 1);
	}
}

// TEST CASES
const treeNode1 = new TreeNode(4);
treeNode1.insert(1);
treeNode1.insert(7);
treeNode1.insert(-4);
treeNode1.insert(2);
treeNode1.insert(3);
console.log(isBalanced(treeNode1)) // false

const treeNode2 = new TreeNode(4);
treeNode2.insert(1);
treeNode2.insert(7);
treeNode2.insert(-4);
treeNode2.insert(2);
console.log(isBalanced(treeNode2)) // true
// time complexity = O(n), space O(n);