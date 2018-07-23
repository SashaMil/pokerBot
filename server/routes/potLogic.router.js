const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/playerFold', (req, res) => {
  console.log(req.body);
  let handId = req.body.gameInfo.id;
  let newPot = 0;
  let newComputerChips = req.body.gameInfo.computer_chips + req.body.gameInfo.pot;
  let playerAction = !req.body.player_action

  const queryText = `UPDATE hand SET pot=$2, computer_chips=$3, player_action=$4 WHERE id=$1;`;
  pool.query(queryText, [handId, newPot, newComputerChips, playerAction])
    .then((result) => {
      console.log('Finished folding player hand');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error folding player hand');
      res.sendStatus(500);
    })

});

router.put('/computerFold', (req, res) => {

  let handId = req.body.handId;
  let newPot = 0;
  let newPlayerChips = req.body.playerChips + req.body.pot;
  let playerAction = !req.body.player_action;

  const queryText = `UPDATE hand SET pot=$2, player_chips=$3, player_action=$4 WHERE id=$1;`;
  pool.query(queryText, [handId, newPot, newPlayerChips, playerAction])
    .then((result) => {
      console.log('Finished folding player hand');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error folding player hand');
      res.sendStatus(500);
    })

});

router.put('/computerCall', (req, res) => {
  console.log('walrus', req.body);
  let handId = req.body.gameInfo.id;
  let callAmount = req.body.gameInfo.player_bet - req.body.gameInfo.computer_bet;
  let newComputerBet = req.body.gameInfo.player_bet;
  let computerCallAmount = req.body.betInfo;
  let newPot = req.body.gameInfo.pot + callAmount;
  let newComputerChips = req.body.gameInfo.computer_chips - callAmount;
  let playerAction = !req.body.gameInfo.player_action;
  const queryText = `UPDATE hand SET pot=$2, computer_chips=$3, player_action=$4, computer_bet=$5 WHERE id=$1`;
  pool.query(queryText, [handId, newPot, newComputerChips, playerAction, newComputerBet])
    .then((result) => {
      console.log('Finished changing db for computer call');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error making player bet');
      res.sendStatus(500);
    })

});

router.put('/playerCall', (req, res) => {
  let handId = req.body.gameInfo.id;
  let callAmount = req.body.gameInfo.computer_bet - req.body.gameInfo.player_bet;
  let newPlayerBet = req.body.gameInfo.computer_bet;
  let newPot = req.body.gameInfo.pot + callAmount;
  let newPlayerChips = req.body.gameInfo.player_chips - callAmount;
  let playerAction = !req.body.gameInfo.player_action;

  const queryText = 'UPDATE hand SET pot=$2, player_chips=$3, player_action=$4, player_bet=$5 WHERE id=$1';
  pool.query(queryText, [handId, newPot, newPlayerChips, playerAction, newPlayerBet])
    .then((result) => {
      console.log('Finished making player bet');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error making player bet');
      res.sendStatus(500);
    })
})

router.put('/playerBet', (req, res) => {

  console.log('vulture', req.body);
  let handId = req.body.gameInfo.id;
  let newPlayerBet = req.body.betAmount + req.body.gameInfo.player_bet;
  let newPot = req.body.betAmount + req.body.gameInfo.pot;
  let newPlayerChips = req.body.gameInfo.player_chips - req.body.betAmount;
  let playerAction = !req.body.gameInfo.player_action;

  const queryText = 'UPDATE hand SET pot=$2, player_chips=$3, player_action=$4, player_bet=$5 WHERE id=$1';
  pool.query(queryText, [handId, newPot, newPlayerChips, playerAction, newPlayerBet])
    .then((result) => {
      console.log('Finished making player bet');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error making player bet');
      res.sendStatus(500);
    })

});

router.put('/computerBet', (req, res) => {
  console.log('Jay-Z', req.body);
  let handId = req.body.gameInfo.id;
  let computerBet = req.body.betInfo;
  let newPot = computerBet + req.body.gameInfo.pot;
  let newComputerChips = req.body.gameInfo.computer_chips - computerBet;
  let playerAction = !req.body.gameInfo.player_action;

  const queryText = 'UPDATE hand SET pot=$2, computer_chips=$3, player_action=$4 WHERE id=$1';
  pool.query(queryText, [handId, newPot, newComputerChips, playerAction])
    .then((result) => {
      console.log('Finished making computer bet');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error making computer bet');
      res.sendStatus(500);
    })
})













module.exports = router;
