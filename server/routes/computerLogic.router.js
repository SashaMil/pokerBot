const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const computerPreflopReactionLogic = require('../modules/computerPreflopReactionLogic.js');
const computerPreflopActionLogic = require('../modules/computerPreflopActionLogic.js')

router.post('/computerPreflopReaction', (req, res) => {
  let playerBet = req.body.playerBetInfo;
  let playerAction = req.body.playerAction;
  const queryText = `SELECT * FROM hand WHERE id=$1`;
  pool.query(queryText, [req.body.handId])
    .then((result) => {
      let computerAction = (computerPreflopReactionLogic(playerAction, playerBet, result.rows[0].pot, result.rows[0].computer_chips, result.rows[0].player_chips, result.rows[0].computer_card_1, result.rows[0].computer_card_2));
      console.log(computerAction);
      if (computerAction === 'CALL' || computerAction === 'FOLD') {
        res.send(computerAction);
      }
      else {
        res.send({computerAction: computerAction[0], callAmount: computerAction[1], raiseAmount: computerAction[2]});
      }
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});

router.get('/computerPreflopAction/:id', (req, res) => {
  console.log('DINO TIME', req.params.id);
  const queryText = `SELECT * FROM hand WHERE id=$1`;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      let computerAction = (computerPreflopActionLogic(result.rows[0].pot, result.rows[0].computer_chips, result.rows[0].player_chips, result.rows[0].computer_card_1, result.rows[0].computer_card_2));
      console.log(computerAction);
      if (computerAction === 'CALL' || computerAction === 'FOLD') {
        res.send(computerAction);
      }
      else {
        res.send({computerAction: computerAction[0], callAmount: computerAction[1], raiseAmount: computerAction[2]});
      }
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});








module.exports = router;
