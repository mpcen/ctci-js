/*
	Three in One:
	Describe how you could use a single array to implement three stacks.
*/

class TripleStack = {
	constructor() {
		this.stacks = [null, null, null];
		this.stackSizes = [0, 0, 0];
		this.stackTops = [0, 1, 2];
	}

	push(stack, data) {
		// If stack n is empty
		if(this.stackSizes[stack] === 0) {
			this.stacks[this.stackTops[stack]] = data;
			this.stackSizes[stack]++;
			return;
		}

		// add new item into array at the end of its stack
		this.stacks.splice(this.stackTops[stack] + 1, 0, data);

		this.stackSizes[stack]++;

		for(let i = stack; i <= 2; i++) {
			this.stackTops[i]++;
		}
	}
}