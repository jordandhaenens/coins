

function coinCounter(amount) {
	var coinPurse = {quarters: 0, dimes: 0, nickels: 0, pennies: 0};

	var change = amount;
	coinPurse.quarters = Math.floor(change / .25);
	change = parseFloat((change - (coinPurse.quarters * .25)).toFixed(2));
	console.log(change);

	coinPurse.dimes = Math.floor(change / .1);
	change = parseFloat((change - (coinPurse.dimes * .1)).toFixed(2));
	console.log(change);

	coinPurse.nickels = Math.floor(change / .05);
	change = parseFloat((change - (coinPurse.nickels * .05)).toFixed(2));
	console.log(change);

	coinPurse.pennies = change;
	console.log(change);

	return coinPurse;
}

console.log(coinCounter(1.49));
coinCounter(1.49);