const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");
const Round = require("../src/Round");

describe("Turn", () => {
  it("should be a function", () => {
    const turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of a turn", () => {
    const card = new Card();
    const turn = new Turn("guess", card);
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it("should check for guess and new card", () => {
    const card = new Card(
      1,
      "What is the color of Gokus normal fight attire",
      ["pink", "red", "black", "orange"],
      "orange"
    );
    const turn = new Turn("orange", card);

    expect(turn.guess).to.equal("orange");
    expect(turn.card).to.deep.equal(card);
  });
  it("should return a guess", () => {
    const card = new Card(
      2,
      "What is the race of Piccolo from Drangon Ball Z?",
      ["namekian", "sayin", "human"],
      "namekian"
    );
    const turn = new Turn("namekian", card);
    expect(turn.returnGuess()).to.equal("namekian");
  });

  it("should return a card", () => {
    const card = new Card(
      2,
      "What is the race of Piccolo from Drangon Ball Z?",
      ["namekian", "sayin", "human"],
      "namekian"
    );
    const turn = new Turn("namekian", card);
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it("should state if guess is correct", () => {
    const card = new Card(
      3,
      "What is the name of the Dragon Ball character with a third eye?",
      ["freiza", "shenron", "tien", "chowzu"],
      "tien"
    );
    const turn = new Turn("tien", card);
    expect(turn.evaluateGuess()).to.be.equal(true);
  });

  it("should state if guess is incorrect", () => {
    const card = new Card(
      3,
      "What is the name of the Dragon Ball character with a third eye?",
      ["freiza", "shenron", "tien", "chowzu"],
      "tien"
    );
    const turn = new Turn("chowzu", card);
    expect(turn.evaluateGuess()).to.be.equal(false);
  });

  it("should state if a guess is true", () => {
    const card = new Card(
      3,
      "What is the name of the Dragon Ball character with a third eye?",
      ["freiza", "shenron", "tien", "chowzu"],
      "tien"
    );
    const turn = new Turn("tien", card);
    expect(turn.giveFeedBack()).to.equal("AYE YOU ARE CORRECT!");
  });

  it("should state if a guess is false", () => {
    const card = new Card(
      3,
      "What is the name of the Dragon Ball character with a third eye?",
      ["freiza", "shenron", "tien", "chowzu"],
      "tien"
    );
    const turn = new Turn("chowzu", card);
    expect(turn.giveFeedBack()).to.equal("YO YOU ARE WRONG!");
  });
});
