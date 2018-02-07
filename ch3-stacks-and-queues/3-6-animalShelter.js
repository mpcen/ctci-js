/*
	Animal Shelter:
	An animal shelter, which holds only dogs and cats operates on a strictly "first in, first out" basis.
	People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they
	can select whether they would prefer a dog or cat (and will receive the oldest animal of that type).
	They cannot select which specific animal they would like. Create the data structures to maintain this
	system and implement operations such as enqueue, dequeueAny, dequeueDog and dequeueCat. You may use
	the built-in LinkedList data structure.
*/

class LinkedListNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	insertHead(data) {
		const newNode = new LinkedListNode(data);

		if(!this.head) { // if LL is empty
			this.head = newNode;
			this.tail = newNode;
			return;
		}

		newNode.next = this.head;
		this.head = newNode;
	}

	removeTail() {
		// if no nodes
		if(!this.tail) {
			return null;
		}

		// if 1 node
		if(!this.head.next) {
			const tail = this.head;
			
			this.head = null;
			this.tail = null;
			
			return tail;
		}

		let currentNode = this.head;

		while(currentNode.next.next) {
			currentNode = currentNode.next;
		}

		const tail = currentNode.next;

		currentNode.next = null;

		return tail;
	}

	peekTail() {
		// if no nodes
		if(!this.tail) {
			return null;
		}

		// if 1 node
		if(!this.head.next) {
			return this.tail;
		}

		let currentNode = this.head;

		while(currentNode.next.next) {
			currentNode = currentNode.next;
		}

		return currentNode.next;
	}
}

class AnimalShelter {
	constructor() {
		this.dog = new LinkedList();
		this.cat = new LinkedList();
		this.time = 0;
	}

	enqueue(animal) {
		const animalData = { type: animal, time: this.time };

		this[animal].insertHead(animalData);
		
		this.time++;
	}

	dequeueAny() {
		const oldestDog = this.dog.peekTail();
		const oldestCat = this.cat.peekTail();

		if(!oldestDog && !oldestCat) {
			return null;
		}

		if(!oldestCat) {
			return this.dequeueDog();
		}

		if(!oldestDog) {
			this.dequeueCat();
		}

		const oldestAnimal = oldestDog.data.time < oldestCat.data.time ? 'dog' : 'cat';
		
		return this[oldestAnimal].removeTail();
	}

	dequeueDog() {
		return this.dog.removeTail();
	}

	dequeueCat() {
		return this.cat.removeTail();
	}
}

// TEST CASE
const animalShelter = new AnimalShelter();

animalShelter.enqueue('dog')
animalShelter.enqueue('dog')
animalShelter.enqueue('dog')
animalShelter.enqueue('cat')
animalShelter.enqueue('cat')

console.log(animalShelter)
/*
	dogs: 2 -> 1 -> 0
	cats: 4 -> 3
*/

animalShelter.dequeueAny();
/*
	returns: dog(0)
	dogs: 2 -> 1
	cats: 4 -> 3
*/

animalShelter.dequeueCat();
/*
	returns: cat(3)
	dogs: 2 -> 1
	cats: 4
*/

animalShelter.dequeueAny();
/*
	returns: dog(1)
	dogs: 2
	cats: 4
*/

animalShelter.dequeueDog();
/*
	returns: dog(2)
	dogs: null
	cats: 4
*/