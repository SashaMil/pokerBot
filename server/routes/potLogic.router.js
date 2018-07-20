const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/playerFold', (req, res) => {

  let id = req.body.foldInfo.id;
  let newPot = 0;
  let newComputerChips = req.body.foldInfo.computer_chips + req.body.foldInfo.pot;

  const queryText = `UPDATE hand SET pot=$2, computer_chips=$3 WHERE id=$1;`;
  pool.query(queryText, [id, newPot, newComputerChips])
    .then((result) => {
      console.log('Finished folding player hand');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error folding player hand');
      res.sendStatus(500);
    })

});

router.put('/playerRaisePreflop', (req, res) => {

  let handId = req.body.betInfo.currentGameInfo.id;
  let newPot = req.body.betInfo.chips + req.body.betInfo.currentGameInfo.pot;
  let playerBet = req.body.betInfo.chips;
  let newPlayerChips = req.body.betInfo.currentGameInfo.player_chips - playerBet;

  const queryText = 'UPDATE hand SET pot=$2, player_chips=$3 WHERE id=$1';
  pool.query(queryText, [handId, newPot, newPlayerChips])
    .then((result) => {
      console.log('Finished making player bet');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error making player bet');
      res.sendStatus(500);
    })

});













module.exports = router;
