// Word Frequencies: Design a method to find the frequency of occurrences of any given word in a book.
// What if we were running this algorithm multiple times?

function wordFrequencies(book) {
    const map = new Map();
    const words = book.toLowerCase().split(' ');

    words.forEach(word => {
        if(!map.has(word)) map.set(word, 0);
        map.set(word, map.get(word) + 1);
    });

    return [...map];
}

// this returns the entire hashmap of words in O(n) time and space.
// if we wanted to run this multiple times, i'd prob reference the already-hashed dictionary by the book title or ISBN
// thus the lookup for the word frequency (if already hashed) would be O(1);


console.log(wordFrequencies('hello world my name is manny and im saying hello because im cool and im going to say it once more hello'));