/*
Design the data structures for a generic deck of cards.

	Card:
		- number
		- suit

	Deck:
		- cards
		- top
		+ shuffle()
		+ deal()
		+ createNewDeck()
*/

class Card {
	constructor(suit, number) {
		this.suit = suit;
		this.number = number;
	}
}

class Deck {
	constructor() {
		this.undealtCards = [];
		this.dealtCards = [];
		this.suits = ['Heart', 'Club', 'Spade', 'Diamond'];
		this.numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

		this.createNewDeck();
	}

	createNewDeck() {
		this.suits.forEach(suit => {
			this.numbers.forEach(number => {
				this.undealtCards.push(new Card(suit, number));
			});
		});
	}

	shuffleDeck() {
		let shuffledDeck = [];
		let numCards = this.undealtCards.length;

		while(this.undealtCards.length) {
			let randomNumber = Math.floor(Math.random() * Math.floor(numCards));
			let randomCard = this.undealtCards.splice([randomNumber], 1)[0];
			shuffledDeck.push(randomCard);
			numCards--;
		}

		this.undealtCards = shuffledDeck;
	}

	dealCard() {
		const cardToDeal = this.undealtCards.pop();
		
		this.dealtCards.push(cardToDeal);
		
		return cardToDeal;
	}

	collectDeck() {
		this.dealtCards = [];
		this.undealtCards = [];
		this.createNewDeck();
		this.shuffleDeck();
	}	
}