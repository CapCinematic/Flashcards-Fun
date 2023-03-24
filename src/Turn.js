class Turn {
  constructor(guess, cardClass) {
    this.guess = guess;
    this.card = cardClass;
  }

  returnGuess = () => {
    return this.guess;
  };

  returnCard = () => {
    return this.card;
  };

  evaluateGuess = () => {
    if (this.guess === this.card.correctAnswer) {
      return true;
    }
    return false;
  };

  giveFeedBack = () => {
    if (this.guess === this.card.correctAnswer) {
      return "AYE YOU ARE CORRECT!";
    }
    return "YO YOU ARE WRONG!";
  };
}

module.exports = Turn;
