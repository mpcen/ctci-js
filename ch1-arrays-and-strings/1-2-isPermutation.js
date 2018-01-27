// Check Permutation: Given two strings, write a method to decide if one is a
// permutation of the other

function isPermutation(str1, str2) {
	if(str1.length !== str2.length) return false;

	// clean strings by removing spaces, special chars, etc
	str1 = str1.replace(/[^\w]/ig, "");
	str2 = str2.replace(/[^\w]/ig, "");

	const strMap = {};

	// build map for str1
	for(let i = 0; i < str1.length; i++) {
		if(!strMap[str1[i]]) {
			strMap[str1[i]] = 1;
		} else {
			strMap[str1[i]] += 1;
		}
	}

	for(let i = 0; i < str2.length; i++) {
		if(!strMap[str2[i]]) {
			return false;
		} else {
			strMap[str2[i]] -= 1;

			if(strMap[str2[i]] < 0) {
				return false;
			}
		}
	}

	for(let char in strMap) {
		if(strMap[char] !== 0) {
			return false;
		}
	}

	return true;
}

// TEST CASES
let str1 = 'abc';
let str2 = 'cbb';

let str3 = 'hello world';
let str4 = 'world olleh';

console.log(isPermutation(str1, str2)); //false
console.log(isPermutation(str3, str4)); // true

// Time complexity = O(m*n)