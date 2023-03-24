const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Round", () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(
      1,
      "What is the color of Gokus normal fight attire",
      ["pink", "red", "black", "orange"],
      "orange"
    );
    card2 = new Card(
      2,
      "What is the race of Piccolo from Drangon Ball Z?",
      ["namekian", "sayin", "human"],
      "namekian"
    );
    card3 = new Card(
      3,
      "What is the name of the Dragon Ball character with a third eye?",
      ["freiza", "shenron", "tien", "chowzu"],
      "tien"
    );

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it.skip("should be a function", () => {
    const round = new round();
    expect(Round).to.be.a("function");
  });

  it.skip("should have a deck", () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it.skip("should start with no turns and no incorrect guesses taken", () => {
    expect(round.turn).to.equal(0);
    expect(round.incorrectGuesses).to.equal([]);
  });

  it.skip("it should return current card after a guess", () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it.skip("it should be able to take a turn", () => {
    expect(round.takeTurn("orange").to.be.instanceof(Turn));
  });

  it.skip("it should update turn count", () => {
    round.takeTurn("orange");
    expect(round.turns).to.equal(1);
    round.takeTurn("sayin");
    expect(round.turns).to.equal(2);
  });

  it.skip("it should evaluate the guess", () => {
    round.takeTurn("orange");
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn("sayin");
    expect(round.incorrectGuesses).to.deep.equal([2]);
  });

  it.skip("it should return feedback from the guess", () => {
    expect(round.takeTurn("orange")).to.equal("AYE YOU ARE CORRECT!");
    expect(round.takeTurn("sayin")).to.equal("YO YOU ARE WRONG!");
  });

  it.skip("it should calculate percent of correct guesses", () => {
    round.takeTurn("orange");
    round.takeTurn("sayin");
    expect(round.CalculatePercentCorrect()).to.equal(50);
    round.takeTurn("shenron");
    expect(round.CalculatePercentCorrect()).to.equal(33);
  });

  it.skip("it should end the round and return percentage of correct guesses", () => {
    round.takeTurn("orange");
    round.takeTurn("sayin");
    round.takeTurn("shenron");
    expect(round.endRound()).to.equal(
      "** Round over! ** You answered <>% of the questions correctly!"
    );
  });
});
