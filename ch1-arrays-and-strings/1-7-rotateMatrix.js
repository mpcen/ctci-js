/*
	Rotate Matrix:
	Given an image represented by an NxN matrix, where each pixel in the image is
	4 bytes, write a method to rotate the image by 90 degrees.

	Example:
	[1,2]	=>	[3,1]
	[3,4]	=>	[4,2]
*/

function rotateMatrix(matrix) {
	const finalMatrix = [];

	for(let i = 0; i < matrix.length; i++) {
		const arr = [];

		for(let j = matrix.length - 1; j >= 0; j--) {
			arr.push(matrix[j][i]);
		}

		finalMatrix.push(arr);
	}

	return finalMatrix;
}

// TEST CASES
let matrix1 = [[1,2],[3,4]];
console.log(rotateMatrix(matrix1)); // [[3,1],[4,2]];

let matrix2 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotateMatrix(matrix2)); // [[7,4,1],[8,5,2],[9,6,3]]

// Time complexity O(n^2), Space complexity O(n);