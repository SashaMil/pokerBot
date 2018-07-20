const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const preflopComputerLogic = require('../modules/preflopComputerLogic.js');

router.post('/computerPreflop', (req, res) => {
  console.log('eagleTime', req.body);
  let playerBet = req.body.playerBetInfo;
  let playerAction = req.body.action;
  const queryText = `SELECT * FROM hand WHERE id=$1`;
  pool.query(queryText, [req.body.handId])
    .then((result) => {
      console.log('baboon time', result.rows);
      let computerAction = (preflopComputerLogic(playerAction, playerBet, result.rows[0].pot, result.rows[0].computer_chips, result.rows[0].player_chips, result.rows[0].computer_card_1, result.rows[0].computer_card_2));
      console.log(computerAction);
      res.send(['CALL', playerBet, result.rows[0].pot, result.rows[0].computer_chips, result.rows[0].id]);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});








module.exports = router;
