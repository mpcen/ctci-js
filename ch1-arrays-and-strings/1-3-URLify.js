// URLify: Write a method to replace all spaces in a string with %20.
// Function takes two arguments, the str and the length of the string

// Solution using regex
function URLify(str) {
	return str.replace(/[" "]/, "%20").trim();
}

// Test Case
let str = 'Hello World     ';
console.log(URLify(str)); // 'Hello%20World'