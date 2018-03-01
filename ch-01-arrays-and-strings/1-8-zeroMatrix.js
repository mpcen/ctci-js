/*
	Zero Matrix:
	Write an algorithm such that if an element in an MxN matrix is 0, its
	entire row and column are set to 0.

	Example:
	1,2,0,4		0,0,0,0
	5,6,7,9	=>	5,6,0,9
	4,4,2,6		4,4,0,6
*/

function zeroMatrix(matrix) {
	const zeroCols = {};

	for(let i = 0; i < matrix.length; i++) {
		for(let j = 0; j < matrix[i].length; j++) {
			if(zeroCols[j]) {
				matrix[i][j] = 0;
			} else if(matrix[i][j] === 0) {
				matrix[i] = Array(matrix[i].length).fill(0);
				zeroCols[j] = 1;
				break;
			}
		}
	}

	return matrix;
}


// TEST CASE
let matrix1 = [[1,2,0,4],[5,6,7,9],[4,4,2,6]];
console.log(zeroMatrix(matrix1)); // [[0,0,0,0],[5,6,0,9][4,4,0,6]];
// Time Complexity: O(n*m), space: O(n)