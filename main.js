/*

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour= "king";

if (cardOne === cardTwo) {
	alert('You found a match!')
} else {
	alert('Sorry, try again.')
}

if (cardTwo === cardFour) {
	alert('You found a match!')
} else {
	alert('Sorry, try again.')
}

if (cardThree === cardFour) {
	alert('You found a match!')
} else {
	alert('Sorry, try again.')
}
*/
var board = document.getElementById('game-board');
var numCards = 4;

// create the cards
for(var i = 0; i < numCards; i++) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	board.appendChild(newCard);
}

var createBoard = function(numCards) {
	var cards = getElementsByClassName('card');
	for (i = 0; i < numCards; i++) {
		cards[i].innerHTML = "king or queen";
	}
}

