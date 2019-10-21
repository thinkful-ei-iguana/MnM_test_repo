'use strict';


function decode(werd) {
	let message = '';
	if (werd[0] === 'a') {
		message += werd.charAt(1);
	}
	else if (werd[0] === 'b') {
		message += werd.charAt(2);
	}
	else if (werd[0] === 'c') {
		message += werd.charAt(3);
	}
	else if (werd[0] === 'd') {
		message += werd.charAt(4);
	}
	else {
		message += ' ';
	}
	return message;
}
let sentence = 'craft block argon meter bells brown croon droop';

let arr = sentence.split(' ');
let secret = '';
for (let i = 0; i < arr.length; i++) {
	secret += decode(arr[i]);
}

console.log(secret);
