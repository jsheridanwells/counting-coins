let amount = document.getElementById('amount');
let output = document.getElementById('output');
let btn = document.getElementById('btn');

let values = [0.25, 0.1, 0.05, 0.01];
let counts = [];
let coins = ['quarters: ', 'dimes: ', 'nickels: ', 'pennies: '];

function countCoins(amt) {
	for (let i = 0; i < values.length; i++) {
		let count = 0;
		while (amt >= values[i]) {
			count += 1;
			amt -= values[i];
		}
		counts.push(count);
	}
}

function printCoins(arr1, arr2) {
	let message = '';
	for (var i = 0; i < arr1.length; i++) {
		message += `<p>${arr1[i]} ${arr2[i]}</p>`
	}
	return message;
}

btn.addEventListener('click', function () {
	countCoins(amount.value);
	output.innerHTML = printCoins(coins, counts);
});


//version with object:

// let amount = 0.56;
// let coins = {
// 	quarters: 0,
// 	dimes: 0,
// 	nickels: 0,
// 	pennies: 0
// };

// function countCoins(amount) {
// 	while (amount >= 0.25) {
// 		coins.quarters += 1;
// 		amount -= 0.25;
// 	}
// 	while (amount >= 0.1) {
// 		coins.dimes += 1;
// 		amount -= 0.1;
// 	}
// 	while (amount >= 0.05) {
// 		coins.nickels += 1;
// 		amount -=0.05
// 	}
// 	while (amount >= 0.01) {
// 		coins.pennies += 1
// 		amount -= 0.01;
// 	}
// 	return coins;
// }

// console.log(countCoins(amount));