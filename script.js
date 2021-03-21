function checkAge() {
	const age = +prompt('Enter age please:');
	if (age >= 0 && age <= 12) {
		alert('This is child');
	} else if (age > 12 && age <= 18 ) {
		alert('This is teenager');
	} else if (age > 18 && age <= 60 ) {
		alert('This is adult');
	} else if (age > 60 && age <= 110) {
		alert('This is elder');
	} else {
		alert('This is wrong value');
	}
}

function findSymbol() {
	const number = +prompt('Select number on keyboard:');
	let message = '';
	switch (number) {
		case 1:
			message = '!';
			break;
		case 2:
			message = '@';
			break;
		case 3:
			message = '#';
			break;
		case 4:
			message = '$';
			break;
		case 5:
			message = '%';
			break;
		case 6:
			message ='^';
			break;
		case 7:
			message ='&';
			break;
		case 8:
			message ='*';
			break;
		case 9:
			message ='(';
			break;
		case 0:
			message =')';
			break;
		default:
			message =`This isn't a number`;
	}
	alert (`Symbol you pressed: ${message}`);
}


function findSymbolNormal() {
	const number = +prompt('Select number on keyboard:');
	const symbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
	if (isFinite(number)) {
		alert (`Symbol you pressed: ${symbols[number]}`);
	} else {
		alert (`This isn't a number`);
	}
}

function sameNums() {
	const number = prompt('Enter 3-number value:');
	if (number.length === 3 && isFinite(number)) {
		if (number[0] === number[1] || number[1] === number[2] || number[2] === number[0]) {
			alert('The same numbers detected!');
		} else {
			alert('No matches found');
		}
	}
	else {
		alert ('Wrong value!')
	}
}

function sameNums1() {
	const number = prompt('Enter 3-number value:');
	if (number.length === 3 && isFinite(number)) {
		//let newNumber = number => {return [...new Set(number)].join('')};
		let newNumber = (number => [...new Set(number)].join(''))();
		if (number !== newNumber) {
			alert('The same numbers detected!');
		}
		else {
			alert('No matches found');
		}
	}
	else {
		alert ('Wrong value!')
	}
}

function leapYear() {
	const year = prompt('Enter year:');
	if (year % 400  && ((year % 4) && (year % 100))) {
		alert('This is ordinary year');
	} else {
		alert('This is leap year');
	}
}

function palindromeChecker() {
	const number = prompt('Give me a 5-digit number, please:');
	if (isFinite(number) && number.length === 5) {
		isPalindrome(number) ? alert("Hey! This is a palindrome!") : alert("Whoops! This isn't a palindrome");
	} else {
		alert('A number has to be 5 digits long!')
	}
}
function isPalindrome(val) {
	return (
		val === val
			.split("")
			.reverse()
			.join("")
	);
}

function cornerBoy() {
	const payment = +prompt('How much you agree to pay for?');
	if (payment > 0 && payment < 200) {
		alert('There is no discount for greedy persons, dude!');
	} else if(payment >= 200 && payment <= 300) {
		alert('Can we propose 3% discount for you?');
	} else if(payment >= 300 && payment <= 500) {
		alert('Can we propose 5% discount for you?');
	} else if(payment > 500) {
		alert('Wow! 7% discount is only for you, fellow!');
	} else {
		alert('Hey! You want to say that I owes money to you?!');
	}
}

function fitterRoundSquare() {
	const circLength = +prompt('Give me a circle length, please');
	const squarePerimeter = +prompt('Give me a square perimeter, please');
	(circLength / Math.PI <= squarePerimeter/4) 
		? alert('The circle fits into this square') 
		: alert('Circle doesn\'t fit inside such square');
}

function getNextDay(presentDay) {
	let oDate = new Date(presentDay);
	oDate.setDate(oDate.getDate() + 1);
	oDate = oDate.toLocaleDateString('en-GB', {  
		day:   'numeric',
		month: 'short',
		year:  'numeric',
	});
	alert(`The next day will be: ${oDate}`);
}

function convertCurrency(amount, currency) {
	const curCourse = [[0.84, "EUR"], [27.72, "UAH"], [1.7, "AZN"]];
	const cache = (amount * curCourse[currency][0]).toFixed(2);
	alert(`Take your cache: ${cache} ${curCourse[currency][1]}, please :\)`);
	console.log(amount);
	console.log(currency);
}

function checkQuiz(arrAnswers) {
	let result = 0;
	for(let i = 0; i <= 2; i++) {
		if (arrAnswers[i]) {
			result += 2;
		};
	};
	alert(`Your score is ${result} points!`);
}

function processForm(oForm) {
	const task = oForm.elements.task.value;
	switch (task) {
		case "checkTheAge":
			checkAge();
			break;
		case "findTheSymbol":
			findSymbol();
			break;
		case "checkSameNums":
			sameNums();
			break;
		case "checkLeapYear":
			leapYear();
			break;
		case "checkThePalindrome":
			palindromeChecker();
			break;
		case "convertTheCurrency":
			convertCurrency(oForm.elements.usdAmount.value, +oForm.elements.currency.value);
			break;
		case "checkTheDiscount":
			cornerBoy();
			break;
		case "checkCircleFitting":
			fitterRoundSquare();
			break;
		case "checkUserQuiz":
			checkQuiz([
				oForm.elements.task1.value,
				oForm.elements.task2.value,
				oForm.elements.task3.value
			]);
			break;
		case "checkNextDate":
			getNextDay(oForm.elements.calendar.value);
			break;
	}
}