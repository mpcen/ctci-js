// One Away: There are three types of edits that can be performed on string:
// insert, delete, replace. Given two strings, write a function to check
// if they are one or zero edits away
/*
Example:
pale, pal -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/


function oneAway(str1, str2) {
	// clean strings
	str1 = str1.replace(/[^\w]/ig, "").toLowerCase();
	str2 = str2.replace(/[^\w]/ig, "").toLowerCase();

	// init map
	const str1Map = {};
	let str1MapLength = 0;

	const str2Map = {};
	let str2MapLength = 0;

	// create map from str1
	for(let char of str1) {
		if(!str1Map[char]) {
			str1Map[char] = 1;
			str1MapLength += 1;
		} else {
			str1Map[char] += 1;
		}
	}

	// create map from str2
	for(let char of str2) {
		if(!str2Map[char]) {
			str2Map[char] = 1;
			str2MapLength += 1;
		} else {
			str2Map[char] += 1;
		}
	}

	// iterate/calculate diff's from str1Map and str2Map
	let sum = 0;
	let largerMap = str1MapLength >= str2MapLength ? str1Map : str2Map;

	for(let char in largerMap) {
		if(str2Map[char]) {
			sum += Math.abs(largerMap[char] - str2Map[char]);
		} else {
			sum += 1;
		}
	}

	// if sum === 1 || 0, return true, else return false
	return sum === 1 || sum === 0 ? true : false;
}

// TEST CASE
let str1 = 'pale';
let str2 = 'ple';

let str3 = 'pales';
let str4 = 'pale';

let str5 = 'pale';
let str6 = 'bale';

let str7 = 'pale';
let str8 = 'bake';

console.log(oneAway(str1, str2)); // true
console.log(oneAway(str3, str4)); // true
console.log(oneAway(str5, str6)); // true
console.log(oneAway(str7, str8)); // false
//Time Complexity: O(n*m)