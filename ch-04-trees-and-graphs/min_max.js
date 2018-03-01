/*
	Given a BST, return the min value.
	Then return the max value
*/

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if(data < this.data && !this.left) {
			this.left = new Node(data);
		} else if(data < this.data && this.left) {
			this.left.insert(data);
		} else if(data > this.data && !this.right) {
			this.right = new Node(data);
		} else {
			this.right.insert(data);
		}
	}

	getMin() {
		if(!this.left) {
			return this.data;
		}

		return this.left.getMin();
	}

	getMax() {
		if(!this.right) {
			return this.data;
		}

		return this.right.getMax();
	}
}