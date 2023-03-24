const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Deck", () => {
  it("should be a function", () => {
    const deck = new Deck();
    expect(Deck).to.be.a("function");
  });

  it("should know how many cards are in a deck", () => {
    const card1 = new Card(
      31,
      "What is the color of Gokus normal fight attire",
      ["pink", "red", "black", "orange"],
      "orange"
    );
    const card2 = new Card(
      32,
      "What is the race of Piccolo from Drangon Ball Z?",
      ["namekian", "sayin", "human"],
      "namekian"
    );
    const card3 = new Card(
      33,
      "What is the name of the Dragon Ball character with a third eye?",
      ["freiza", "shenron", "tien", "chowzu"],
      "tien"
    );

    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });
});
