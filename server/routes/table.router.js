const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const Deck = require('../modules/deck.js')

let computerType = 'Normal';

/**
 * GET route template
 */
router.get('/newGame', (req, res) => {
  // Creating new instantiation from Deck class and using shuffling method to randomize
  let deck = new Deck;
  deck.shuffle();
  // Dealing cards as you would in person
  let playerHand = [];
  let computerHand = [];
  playerHand.push(deck.deal());
  computerHand.push(deck.deal());
  playerHand.push(deck.deal());
  computerHand.push(deck.deal());
  // Sending back newGame newGameInfo
  let arr = [true, false];
  let bool = arr[Math.floor(Math.random() * (2))];

  const queryText = `INSERT INTO game (computer_type)
                    Values
                    ($1)`;
  pool.query(queryText, [computerType])
    .then((result) => {
      res.send({playerHand: playerHand, playerChips: 1500, computerChips: 1500, pot: 0, playerSb: bool});
    })
    .catch((error) => {
      console.log('Error handling newGameRequest', error);
      res.sendStatus(500);
    })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
