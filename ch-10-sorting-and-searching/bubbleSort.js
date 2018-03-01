const swap = (arr, a, b) => {
	let tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;

	return arr;
}

const bubbleSort = arr => {
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length - 1; j++) {
			if(arr[j] > arr[j+1]) {
				swap(arr, j, j+1)
			}
		}
	}

	return arr;
}