const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const Deck = require('../modules/deck.js')

/**
 * GET route template
 */
router.get('/newGame', (req, res) => {
  let deck = new Deck;
  deck.shuffle();
  let playerHand = [];
  let computerHand = [];
  playerHand.push(deck.deal());
  computerHand.push(deck.deal());
  playerHand.push(deck.deal());
  computerHand.push(deck.deal());
  console.log(playerHand);
  res.send(playerHand);
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
