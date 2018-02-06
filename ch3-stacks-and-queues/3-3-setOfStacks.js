/*
	Set of Stacks:
	Imagine a literal set of plates, if the stack of plates gets too high, it might toppple.
	Therefore, in real life we would likely start a new stack wheb the previous stack exceeds
	some threshold. Implement a data structore SetOfStacks that mimics this. SetOfStacks should
	be composed of several stacks and should create a new stack once the previous one exceeds capacity.
	SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is,
	pop() should return the same values as it would if there were just a single stack).
*/

class StackNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class SetOfStacks {
	constructor(maxPlates) {
		this.maxPlates = maxPlates;		
		this.stacks = [];
		this.topPlate = null;
		this.currentStackCount = 0;
	}

	push(data) {
		const newNode = new StackNode(data);

		// if stacks are completely empty
		if(!this.stacks.length) {
			this.stacks = [newNode];
			this.topPlate = newNode;
			this.currentStackCount++;
			// if stack has reached max capacity
		} else if(this.currentStackCount === this.maxPlates) {
			newNode.next = this.topPlate;
			this.topPlate = newNode;
			this.stacks.push(newNode);
			this.currentStackCount = 1;
		} else {
			// all other cases
			newNode.next = this.topPlate;
			this.topPlate = newNode;
			this.currentStackCount++;
		}		
	}

	pop() {
		if(!this.stacks.length) {
			return undefined;
		}
		
		const plateToReturn = this.topPlate;
		
		if(this.currentStackCount === 1) {
			this.stacks.pop();
			this.currentStackCount = 3;
		} else {
			this.currentStackCount--
		}

		this.topPlate = this.topPlate.next;

		return plateToReturn;
	}
}

const stacks = new SetOfStacks(3)
stacks.push('a1')
stacks.push('a2')
stacks.push('a3')

stacks.push('b1')
stacks.push('b2')
stacks.push('b3')