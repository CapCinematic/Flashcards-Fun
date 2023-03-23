const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
it.skip('should be a function', () => {
  const deck = new deck();
  expect(Deck).to.be.a('function');
});

it.skip('should know how many cards are in a deck', () => {
  const card1 = new Card(1, 'What is the color of Gokus normal fight attire', ['pink', 'red', 'black', 'orange'], 'orange');
  const card2 = new Card(2, 'What is the race of Piccolo from Drangon Ball Z?', ['namekian', 'sayin', 'human'], 'namekian');
  const card3 = new Card(3, 'What is the name of the Dragon Ball character with a third eye?', ['freiza', 'shenron', 'tien', 'chowzu'], 'tien');

  const deck = new Deck([card1, card2, card3]
    )
  expect(deck.countCards()).to.equal(3);
});
});