class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

// RECURSIVE SOLUTION
function minimalTree(arr, start = 0, end = arr.length - 1) {
	if(end < start) {
		return null;
	}

	const mid = Math.floor((start + end) / 2);
	const node = new Node(arr[mid]);

	node.left = minimalTree(arr, start, mid - 1);
	node.right = minimalTree(arr, mid + 1, end);

	return node;
}

// TEST CASE
console.log(minimalTree([-7, -1, 2, 4, 19, 32, 64, 99]));


// ITERATIVE SOLUTION
// function minimalTree(arr) {
// 	const queue = [];

// 	if(arr.length && !queue.length) {
// 		queue.push(arr.splice(arr.length/2 - 1, 1)[0]);
// 	}

// 	while(arr.length) {
// 		if(arr.length === 1 || arr.length === 2) {
// 			arr.forEach(n => queue.push(n));
// 			break;
// 		}

// 		const midIndex = Math.floor(arr.length/2);
// 		const leftArr = arr.slice(0, midIndex);
// 		const rightArr = arr.slice(midIndex + 1, arr.length);

// 		queue.push(leftArr.splice(Math.floor(leftArr.length/2) + leftArr.length % 2 - 1, 1)[0]);
// 		queue.push(rightArr.splice(Math.floor(rightArr.length/2) + rightArr.length % 2 - 1, 1)[0]);

// 		arr = [...leftArr, arr[midIndex], ...rightArr];
// 	}

// 	const tree = new Node(queue.shift());

// 	while(queue.length) {
// 		tree.insert(queue.shift());
// 	}

// 	return tree;
// }