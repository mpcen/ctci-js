// Palindrome Permutation: Given a string, write a function to check if it
// is a permutation of a palindrome.
// Example:
//input: 'Tact Coa'
//output: True (permutations: 'taco cat', 'atco cta')

function palindromePermutation(str) {
	// clean string
	str = str.replace(/[^\w]/ig, "").toLowerCase();

	// initialize map
	const strMap = {};

	// build map
	for(let char of str) {
		if(!strMap[char]) {
			strMap[char] = 1;
		} else {
			if(strMap[char] === 0) {
				strMap[char] += 1;
			} else {
				strMap[char] -= 1;
			}
		}
	}

	// calculate sum of map values
	let sum = 0;

	for(let char in strMap) {
		sum += strMap[char];
	}

	return sum === 0 || sum === 1 ? true : false;
}

// TEST CASE
let str1 = 'Tact Coa';
let str2 = 'asdff';
console.log(palindromePermutation(str1)); // true
console.log(palindromePermutation(str2)); // false
// Time Complexity: O(n)