const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () =>{
  it.skip('should be a function', () => {
    const turn = new turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of a turn', () => {
    const card = new Card();
    const turn = new Turn('answer', card)
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it.skip('should have a guess', () =>{})

  it.skip('should have a card', () =>{})

  it.skip('should return a guess', () =>{})

  it.skip('should return a card', () =>{})

  it.skip('should state if guess is correct', () =>{})

  it.skip('should state if guess is incorrect', () =>{})

  it.skip('should state if a guess is true', () =>{})

  it.skip('should state if a guess is false', () =>{})
  

})