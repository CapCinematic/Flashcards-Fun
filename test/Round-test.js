const chai = require("chai");
const expect = chai.expect;

const data = require('../src/data');
const prototypeData = data.prototypeData;
const Turn = require("../src/Turn");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Round", () => {
  const card1Data = prototypeData[30]
  const card2Data = prototypeData[31]
  const card3Data = prototypeData[32]
  const card1 = new Card(
    card1Data.id,
    card1Data.question,
    card1Data.answers,
    card1Data.correctAnswer,
  );
  const card2 = new Card(
    card2Data.id,
    card2Data.question,
    card2Data.answers,
    card2Data.correctAnswer,
  );
  const card3 = new Card(
    card3Data.id,
    card3Data.question,
    card3Data.answers,
    card3Data.correctAnswer,
  );

  let deck; 
  let round;

  beforeEach(() => {
    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it("should be a function", () => {
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
