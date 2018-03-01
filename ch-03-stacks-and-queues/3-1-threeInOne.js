/*
	Three in One:
	Describe how you could use a single array to implement three stacks.
*/

class TripleStack {
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

		// increment tops for all stacks after the stack in work
		for(let i = stack; i <= 2; i++) {
			this.stackTops[i]++;
		}
	}

	pop(stack) {
		if(this.stackSizes[stack] === 0) {
			return null;
		}

		if(this.stackSizes[stack] === 1) {
			let itemRemoved = this.stacks[this.stackTops[stack]];

			this.stacks[this.stackTops[stack]] = null;
			this.stackSizes[stack]--;
			return itemRemoved;
		}

		let itemRemoved = this.stacks.splice(this.stackTops[stack], 1);

		this.stackSizes[stack]--;

		// decrement stackTops for stacks that come after the stack being worked on
		for(let i = stack; i <= 2; i++) {
			this.stackTops[i]--;
		}

		return itemRemoved;
	}

	peek(stack) {
		return this.stacks[this.stackTops[stack]];
	}

	isEmpty(stack) {
		return this.stackSizes[stack] === 0;
	}
}



// TEST CASES
const stacks = new TripleStack()

stacks.push(0, 'a1')
stacks.push(0, 'a2')
stacks.push(1, 'b1')
stacks.push(1, 'b2')
stacks.push(2, 'c1')
stacks.push(2, 'c2')

console.log(stacks) // [a1, a2, b1, b2, c1, c2]
stacks.pop(0) // [a1, b1, b2, c1, c2]
stacks.pop(2) // [a1, b1, b2, c1]
stacks.pop(2) // [a1, b1, b2, null]
stacks.isEmpty(2) // true
stacks.peek(0) // a1