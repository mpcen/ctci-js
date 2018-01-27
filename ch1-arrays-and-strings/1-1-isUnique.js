// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// solution using hashmap
// runtime O(n)
// space O(n)

/*
function isUnique(str) {
	const strMap = {};

	for(let i = 0; i < str.length; i++) {
		if(!strMap[str[i]]) {
			strMap[str[i]] = 1;
		} else {
			return false;
		}
	}

	return true;
}

// TEST CASES
let str1 = 'helloworld';
let str2 = 'asdf123'
console.log(`testing 'helloworld': ${isUnique(str1)}`); // false
console.log(`testing 'asdf123': ${isUnique(str2)}`); // true
*/


// Solution using sorting
// time complexity O(n log(n))
function isUnique(str) {
	str = str
		.replace(/[^\w]/ig, "")
		.toLowerCase()
		.split('')
		.sort((a, b) => a > b)
		.join('');

	for(let i = 0; i < str.length - 1; i++) {
		for(let j = i + 1; j < str.length; j++) {
			if(str[i] === str[j]) {
				return false;
			}
		}
	}

	return true;
}

// TEST CASES
let str1 = 'helloworld';
let str2 = 'asdf123';
let str3 = 'heLlo world!';
console.log(`testing 'helloworld': ${isUnique(str1)}`); // false
console.log(`testing 'asdf123': ${isUnique(str2)}`); // true
console.log(`testing 'heLlo world!': ${isUnique(str3)}`); // false