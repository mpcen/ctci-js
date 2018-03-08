const diceRollSum = (numOfDice, sum, sumSoFar = 0, set = []) => {
	if(numOfDice === 0) {
		console.log(set);
	} else {
		for(let i = 1; i <= 6; i++) {
			if(sumSoFar + i + 1 * (numOfDice - 1) <= sum &&
			   sumSoFar + i + 6 * (numOfDice - 1) >= sum) {
			    diceRollSum(numOfDice - 1, sum, sumSoFar + i, set.concat(i));
			}
		}
	}
}

diceRollSum(3, 4);