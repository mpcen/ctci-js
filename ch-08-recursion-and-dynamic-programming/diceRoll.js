/*

Given a number of dice, print out all of the possible rolls

*/

const diceRolls = (numOfDice, set = []) => {
	if(numOfDice === 0) {
		console.log(set);
	} else {
		for(let i = 1; i <= 6; i++) {
			diceRolls(numOfDice - 1, set.concat(i));
		}
	}
}

