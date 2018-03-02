const swap = (arr, a, b) => {
	let tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

const partition = (arr, start, end) => {
	let pivot = arr[end];

	let pIndex = start;

	for(let i = start; i < end; i++) {
		if(arr[i] <= pivot) {
			swap(arr, i, pIndex++);
		}
	}

	swap(arr, pIndex, end);

	return pIndex;
}

const quickSort = (arr, start = 0, end = arr.length - 1) => {
	if(start < end) {
		let pIndex = partition(arr, start, end);

		quickSort(arr, start, pIndex - 1);

		quickSort(arr, pIndex + 1, end);

		debugger;
	}
}

quickSort([6,4,1])