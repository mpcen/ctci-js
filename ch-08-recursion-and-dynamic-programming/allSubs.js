/*

Given a list of items, print out all of the possible subsets

*/

const allSubs = (arr, s = []) => {
	if(!arr.length) {
		console.log(s)
	} else {
		// choose
		let item = arr.shift();
		s.push(item);
		
		// explore
		allSubs(arr, s) // explore with
		s.pop();
		allSubs(arr, s); // explore without

		// unchoose
		arr.unshift(item);
	}
}