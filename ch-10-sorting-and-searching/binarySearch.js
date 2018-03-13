const binarySearch = (arr, val, start = 0, end = arr.length - 1) => {
	if(start > end) {
		return -1;
	}

	let mid = Math.floor((end + start) / 2);

	if(arr[mid] === val) {
		return mid;
	} else {
		if(val < arr[mid]) {
			return binarySearch(arr, val, start, mid-1);
		} else {
			return binarySearch(arr, val, mid+1, end)
		}
	}
}