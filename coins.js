//select document elements
let amount = document.getElementById('amount');
let output = document.getElementById('output');
let btn = document.getElementById('btn');

//arrays to hold names, values, and counts
let coins = ['quarters: ', 'dimes: ', 'nickels: ', 'pennies: '];
let values = [0.25, 0.1, 0.05, 0.01];
let counts = [];

//count coins
function countCoins(amt) {
	for (let i = 0; i < values.length; i++) {
		let count = 0;
		while (amt >= values[i]) {  //if the amount is greater than current coin value
			count += 1;  //count once
			amt -= values[i];  //subtract the value from the amount
		}
		counts.push(count);  //push the count to the array, loop will move to next coin value and repeat
	}
}

function printCoins(arr1, arr2) {
	let message = '';
	for (var i = 0; i < arr1.length; i++) {
		message += `<p>${arr1[i]} ${arr2[i]}</p>` //print the names and counts of each coin to the page
	}
	return message;
}

btn.addEventListener('click', function () {
	countCoins(amount.value);
	output.innerHTML = printCoins(coins, counts);
});