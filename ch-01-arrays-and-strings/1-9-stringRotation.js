/*
	String Rotation:
	Assume you have a method 'isSubstring()' which checks if one word
	is a substring of another. Given two strings - s1 and s2, write code
	to check if s2 is a rotation of s1 using only one call to isSubstring().

	Example:
	'waterbottle' is a rotation of 'erbottlewat'
*/

function sub(s1, s2) {
	if(s1.length !== s2.length) return false;
	if(s1 === s2) return true;

	return isSubstring(s1, s2+s2);
}

function isSubstring(s1, s2) {
	return s2.includes(s1);
}

let s1 = 'aaata';
let s2 = 'aataa';
let s3 = 'waterbottle';
let s4 = 'erbottlewat';
let s5 = 'mann';
let s6 = 'nnam';
console.log(sub(s1, s2)); // true
console.log(sub(s3, s4)); // true
console.log(sub(s5, s6)); // false