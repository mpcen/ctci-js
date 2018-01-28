/*
	String Compression:
	Implement a method to perform basic string compression using the
	counts of repeated characters.

	Example: string 'aabcccccaaa' would become 'a2b1c5a3'
	If the string cannot be compressed, return the original string.
	Assume the string only has upper and lowercase characters.
*/

function stringCompression(str) {
	const charArr = [{char: str[0], n: 1}];
	let isCompressed = false;

	for(let i = 1; i < str.length; i++) {
		if(charArr[charArr.length - 1].char !== str[i]) {
			charArr.push({char: str[i], n: 1});
		} else {
			isCompressed = true;
			charArr[charArr.length - 1].n += 1;
		}
	}

	if(isCompressed) {
		let newStr = '';

		for(let i = 0; i < charArr.length; i++) {
			newStr += charArr[i].char + charArr[i].n
		}

		return newStr;
	}

	return str;
}

// TEST CASES
let str1 = 'aabcccccaaa';
console.log(stringCompression(str1)) // a2b1c5a3

let str2 = 'aaaaaa';
console.log(stringCompression(str2)) // a6

let str3 = 'abc';
console.log(stringCompression(str3)) // abc