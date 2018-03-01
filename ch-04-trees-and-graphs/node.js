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
		} else if (data > this.data && !this.right) {
			this.right = new Node(data);
		} else {
			this.right.insert(data);
		}
	}

	contains(data) {
		if(data === this.data) {
			return this;
		}

		if(data < this.data && this.left) {
			return this.left.contains(data);
		} else if(data > this.data && this.right) {
			return this.right.contains(data);
		} else {
			return null;
		}
	}

	traverseDF(fn, order) {
		if(order === 'pre-order') {
			fn(this);
		}

		if(this.left) {
			this.left.traverseDF(fn, order);
		}

		if(order === 'in-order') {
			fn(this);
		}

		if(this.right) {
			this.right.traverseDF(fn, order);
		}

		if(order === 'post-order') {
			fn(this);
		}
	}

	traverseBF(fn) {
		const queue = [this];

		while(queue.length) {
			const node = queue.shift();

			if(node.left) {
				queue.push(node.left);
			}

			if(node.right) {
				queue.push(node.right);
			}

			fn(node);
		}
	}
}