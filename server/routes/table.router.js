const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const Deck = require('../modules/deck.js')

let computerType = 'Normal';

let gameInfo = {};

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

  gameInfo = {playerHand: playerHand, computerHand: computerHand, playerChips: 1495, computerChips: 1490, pot: 0, playerSb: bool};



  const queryText = `INSERT INTO game (computer_type)
                    Values
                    ($1)`;
  pool.query(queryText, [computerType])
    .then((result) => {
      if (bool) {
        res.send({playerHand: playerHand, playerChips: 1495, computerChips: 1490, pot: 0, playerSb: bool});
        // createNewHand(newGameInfo);
      }
      else {
        res.send({playerHand: playerHand, playerChips: 1495, computerChips: 1490, pot: 0, playerSb: bool});
        // createNewHand(newGameInfo);
      }
    })
    .catch((error) => {
      console.log('Error handling newGameRequest', error);
      res.sendStatus(500);
    })

});

router.get('/newHand', (req, res) => {
  console.log(gameInfo);
  const queryText = `INSERT INTO hand (computer_chips, computer_hand, player_hand, player_chips, player_sb, pot)
                    Values
                    ($1, $2, $3, $4, $5, $6)`;
  pool.query(queryText, [gameInfo.computerChips, gameInfo.computerHand, gameInfo.playerHand, gameInfo.playerChips, gameInfo.playerSb, gameInfo.pot])
    .then((result) => {
      console.log('Finished creating new hand');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error creating new hand in db', error);
      res.sendStatus(500);
    })
})



/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
