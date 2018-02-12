class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		if(data < this.data && !this.left) {
			this.left = new Node(data);
		} else if (data < this.data && this.left) {
			this.left.insert(data);
		} else if (data > this.data && !this.right) {
			this.right = new Node(data);
		} else {
			this.right.insert(data);
		}
	}
}

function minimalTree(arr) {
	const queue = [];

	if(arr.length && !queue.length) {
		queue.push(arr.splice(arr.length/2 - 1, 1)[0]);
	}

	while(arr.length) {
		if(arr.length === 1 || arr.length === 2) {
			arr.forEach(n => queue.push(n));
			break;
		}

		const midIndex = Math.floor(arr.length/2);
		const leftArr = arr.slice(0, midIndex);
		const rightArr = arr.slice(midIndex + 1, arr.length);

		queue.push(leftArr.splice(Math.floor(leftArr.length/2) + leftArr.length % 2 - 1, 1)[0]);
		queue.push(rightArr.splice(Math.floor(rightArr.length/2) + rightArr.length % 2 - 1, 1)[0]);

		arr = [...leftArr, arr[midIndex], ...rightArr];
	}

	const tree = new Node(queue.shift());

	while(queue.length) {
		tree.insert(queue.shift());
	}

	return tree;
}


let arr = [-7, -1, 2, 4, 19, 32, 64, 99];

console.log(minimalTree(arr))