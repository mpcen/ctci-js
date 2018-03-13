class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = this.right = null;
	}

	insert(val) {
		if(val < this.val && this.left) {
			this.left.insert(val);
		} else if(val < this.val && !this.left) {
			this.left = new TreeNode(val);
		} else if(val > this.val && this.right) {
			this.right.insert(val);
		} else {
			this.right = new TreeNode(val);
		}
	}
}

const removeNode = (root, val) => {
	//debugger;
	if(!root || !val) {
		return null;
	}

	if(val < root.val) {
		root.left = removeNode(root.left, val);
	} else if(val > root.val) {
		root.right = removeNode(root.right, val);
	} else {
		if(!root.left && !root.right) { // leaf node
			root = null;			
		} else if(!root.left) { // 1 child - right
			root = root.right;
		} else if(!root.right) { // 1 child - left
			root = root.left;
		} else { // 2 children
			// find min value of right subtree
			let minNode = getMinValue(root.right);
			root.val = minNode.val;
			root.right = removeNode(root.right, minNode.val);
		}
	}

	return root;
}

const getMinValue = root => {
	if(!root.left && !root.right) {
		return root;
	} else {
		return getMinValue(root.left);
	}
}