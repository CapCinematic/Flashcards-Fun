const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard = () => {
    return this.deck.cards[this.turns];
  };

  takeTurn = (guess) => {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard);
      console.log(currentCard.id);
    }
    return turn.giveFeedBack();
  };

  calculatePercentCorrect = () => {
    const correctGuesses = this.turns - this.incorrectGuesses.length;
    return Math.round((correctGuesses / this.turns) * 100);
  };

  endRound = () => {
    const percentageCorrect = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${percentageCorrect}% of the questions correctly!`;
  };
}

module.exports = Round;
