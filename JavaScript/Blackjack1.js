function Card(suit, rank){
	this.suit = suit
	this.rank = rank
  this.value = Math.min(rank, 10)
	this.name = `${rank} of ${suit}`
}

function Deck(){
	var deck = []
	var suits = ["hearts", "clubs", "diamonds", "spades"]

	for(var rank = 1; rank <= 13; rank++){
		for(var suit = 0; suit < suits.length; suit++){
			deck.push(new Card(suits[suit], rank))
		}
	}

	this.deal = function(){
		if(deck){
			return deck.pop()
		}
	}

	this.shuffle = function(){
		for(var i = 0; i < deck.length; i++){
			var rand_index = Math.floor(Math.random() * deck.length)
			var temp = deck[i]
			deck[i] = deck[rand_index]
			deck[rand_index] = temp
		}
	}
  // shuffle the deck automatically
	this.shuffle()
  // console.log(deck)
}

// -------------------
function Player(name, deck) {
  this.name = name;
  this.hand = [];
  this.total = 0; // total points in hand
  this.cards = 0; // number of cards
  this.status = ""  // player status

  this.takeCard = function() {
    var the_card = deck.deal();
    this.hand.push(the_card);
    this.cards++;
    this.total += the_card.value;
  }

	this.checkHand = function() {
		// return true if still drawing, false if not
		if (this.status != "draw") {  // player stayed or folded
			return false;
		}
		if (this.total < 17) {  // could draw another
			this.takeCard();
			console.log("player"+this.name, "draws", this.hand[this.cards-1].name, ", total", this.total);
		}
		else if (this.total < 21) { // stay
			console.log("player"+this.name, "stays");
			this.status = "stay";
			return false;
		}
		if (this.total > 21) { // fold
			console.log("player"+this.name, "folds");
			this.status = "fold";
			return false;
		}
		if (this.total == 21) {  // win
			console.log("player"+this.name, "wins");
			this.status = "win";
			return false;
		}
		return true;
	}

}

// -------------------
function Blackjack(numOfPlayers) {
  this.gameDeck = new Deck();
  player = [];
  this.addPlayers = function(numOfPlayers) {
    for (i = 0; i < numOfPlayers; i++) {
      player.push(new Player("player"+i, this.gameDeck));
      player[i].status = "draw";
    }
  }
  this.addPlayers(numOfPlayers);
  // deal 2 cards to each player
  for (i = 0; i < numOfPlayers; i++) {
    var me = player[i];
    me.takeCard();
    me.takeCard();
    console.log("player"+i, "cards: "+me.hand[0].name+", "+me.hand[1].name+", total "+me.total);
  }
  var game_in_progress = true;

  while (game_in_progress) {
    // check each player's cards, draw if under 21, break when none are still playing
		var still_drawing = 0;	// count # of players still drawing
    for (i = 0; i < numOfPlayers; i++) {
      var me = player[i];
			me.checkHand();
			if (me.status == "win") {	// got a winner, break
				game_in_progress = false;
				break;
			}
			if (me.status == "draw") {
        still_drawing++;
      }
    }
    if (!still_drawing) {
      game_in_progress = false;
      break;
    }
  }
  // at end of game, announce which players either won or tied
  console.log("Game has ended");
  for (i = 0; i < numOfPlayers; i++) {
    if (player[i].status == "win") {
      console.log("player"+i, "wins");
    }
    else if (player[i].status == "fold") {
      console.log("player"+i, "loses");
    }
    else {
      console.log("player"+i, "stays at", player[i].total);
    }
  }

}

// -------------------
var game = new Blackjack(4);
