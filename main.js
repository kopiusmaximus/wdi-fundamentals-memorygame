
// initalize the board variable and the necessary arrays
var board = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

/* create the game board */
var createBoard = function() {
	// create the cards
	for(var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');

		// add the necessary attributes to each new card
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.innerHTML = "<img src='card_back.png' alt='back of card'>";

		// add listeners to trigger functions when a card is clicked
		newCard.addEventListener('click', flipCard);
		newCard.addEventListener('click', isTwoCards);

		// add each new card to the board
		board.appendChild(newCard);
	}
}

/* determine whether two cards are a match */
var isMatch = function(arr) {
	var isMatch = (arr[0] === arr[1]);
	return isMatch;
}

/* flip over a card to show its face */
function flipCard() {
	if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = "<img src='queen_of_hearts.png' alt='queen of hearts'>"
	} else {
		this.innerHTML = "<img src='king_of_clubs.png' alt='king of clubs'>"
	}
}

/* check to see if there are cards in play */
function isTwoCards() {
  // add card to array of cards in play
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    // based on what isMatch returns, display appropriate message
	if (isMatch(cardsInPlay)) {
	    alert('You found a match!');
	} else {
		alert('Sorry, try again.');
		// if it wasn't a match, flip the cards back over
		var flipBack = document.getElementsByClassName('card');
		for (var i = 0; i < flipBack.length; i++) {
			flipBack[i].innerHTML = "<img src='card_back.png' alt='back of card'>";
		}
	}

    // clear cards in play array for next try
    cardsInPlay = [];
  }
}

// call the create board functon to start the game
createBoard();


