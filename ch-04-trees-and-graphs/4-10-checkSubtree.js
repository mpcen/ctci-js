/*
	Check Subtree:
	T1 and T2 are two very large binary trees, with T1 much larger than T2. Create an algorithm
	to determine if T2 is a subtree of T1.

	A tree T2 is a subtree of T1 if there exists a node in T1 such that the subtree of n is
	identical to T2. That is, if you cut off the tree at node n, two two trees would be identical.

	Solution: Because JS objects are referenced based we can just run a breadth first traversal until we find
	a matching node. We then run an === on both nodes. But this is too easy, instead we'll breadth-first
	traverse T1 until node value of t2 root is found. once found, run a pre-order traverse on both t2 and
	the possible subtree inside t1. if all nodes end up being equal, we conclude that t2 is a subtree of t1,
	else return false.
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

function findNode(t1, node) {
	const queue = [t1];

	while(queue.length) {
		const currentNode = queue.shift();

		if(currentNode.data === node.data) {
			return currentNode;
		}

		if(currentNode.left) {
			queue.push(currentNode.left)
		}

		if(currentNode.right) {
			queue.push(currentNode.right)
		}
	}

	return null;
}

function verifyTrees(t1, t2) {
	if(!t1 && !t2) {
		return true;
	} else if(t1 && !t2 || !t1 && t2) {
		return false;
	} else if(t1.data === t2.data) {
		return verifyTrees(t1.left, t2.left) && verifyTrees(t1.right, t2.right);
	} else {
		return false;
	}
}

function checkSubtree(t1, t2) {
	const t1SubTree = findNode(t1, t2);
	return verifyTrees(t1SubTree, t2);
}


// TEST CASE
const t1 = new TreeNode(4);
t1.left = new TreeNode(3);
t1.left.left = new TreeNode(-1);
t1.left.left.left = new TreeNode(-2);
t1.left.left.right = new TreeNode(6);
t1.left.right = new TreeNode(2);
t1.left.right.left = new TreeNode(8);

t1.right = new TreeNode(17);
t1.right.left = new TreeNode(12);
t1.right.left.left = new TreeNode(14);
t1.right.right = new TreeNode(32);
t1.right.right.left = new TreeNode(80);
t1.right.right.right = new TreeNode(84);

const t2 = new TreeNode(17);
t2.left = new TreeNode(12);
t2.left.left = new TreeNode(14);
t2.right = new TreeNode(32);
t2.right.left = new TreeNode(80);
t2.right.right = new TreeNode(84);

console.log(checkSubtree(t1, t2)); // true
// Time Complexity: O(n*m)