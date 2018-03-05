/*

Triple Step:
A child is running up a staircase with n steps and can hop either 1 step, 2 steps or 3 steps at a time.
Implement  a method to count how many possible ways the child can run up the stairs.

*/

const mem = {
	0: 1
}

const possibleWays = n => {
	if(n < 0) {
		return 0;
	} else if(n === 0) {
		return mem[n];
	} else {
		if(!mem.hasOwnProperty(n)) {
			mem[n] = possibleWays(n - 1) + possibleWays(n - 2) + possibleWays(n - 3);
		}
		return mem[n];
	}
}