const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
  card1 = new Card(1, 'What is the color of Gokus normal fight attire', ['pink', 'red', 'black', 'orange'], 'orange');
  card2 = new Card(2, 'What is the race of Piccolo from Drangon Ball Z?', ['namekian', 'sayin', 'human'], 'namekian');
  card3 = new Card(3, 'What is the name of the Dragon Ball character with a third eye?', ['freiza', 'shenron', 'tien', 'chowzu'], 'tien');

  deck = new Deck([card1, card2, card3]);
  
  round = new Round(deck);
});

it.skip('should be a function', () => {
  const round = new round();
  expect(Round).to.be.a('function');
});

it.skip('should have a deck', () => {})

it.skip('should have a deck', () => {})
});