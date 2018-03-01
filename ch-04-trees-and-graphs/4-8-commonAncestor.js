/*
	First common Ancestor:
	Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.
	Avoid storing additional nodes in a data structore. NOTE: This is not necessarily a BST.
*/

class TreeNode {
	constructor(data, parent = null) {
		this.data = data;
		this.left = null;
		this.right = null;
		this.parent = parent;
	}
}

function getHeight(node) {
	let height = 0;

	while(node) {
		node = node.parent;
		if(node) {
			height++;
		}
	}

	return height;
}

function traverseUp(node, count) {
	for(let i = 0; i < count; i++) {
		node = node.parent;
	}

	return node;
}

function findFirstAncestor(node1, node2) {
	const node1Height = getHeight(node1);
	const node2Height = getHeight(node2);

	node1 = traverseUp(node1, node1Height - node2Height);
	node2 = traverseUp(node2, node2Height - node1Height);

	while(node1 !== node2) {
		node1 = node1.parent;
		node2 = node2.parent;
	}

	return node1;
}


// TEST CASE
let a = new TreeNode('a', null);
let b = new TreeNode('b', a);
let c = new TreeNode('c', a);
let d = new TreeNode('d', b);
let e = new TreeNode('e', c);
let f = new TreeNode('f', c);
let g = new TreeNode('g', d);
let h = new TreeNode('h', d);
let i = new TreeNode('i', e);
let j = new TreeNode('j', e);
a.left = b;
b.left = d;
d.left = g;
d.right = h;
a.right = c;
c.left = e;
e.left = i;
e.right = j;
c.right = f;

console.log(findFirstAncestor(g,d)); // d
console.log(findFirstAncestor(g,i)); // a
console.log(findFirstAncestor(i,f)); // c
// Time Complexity: O(logn)