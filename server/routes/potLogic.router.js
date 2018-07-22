const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/playerFold', (req, res) => {

  let handId = req.body.handId;
  let newPot = 0;
  let newComputerChips = req.body.computerChips + req.body.pot;
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

  let computerCallAmount = req.body.betInfo;
  let handId = req.body.gameInfo.id;
  let newComputerChips = req.body.gameInfo.computer_chips - computerCallAmount;
  let newPot = req.body.gameInfo.pot + computerCallAmount;

  const queryText = `UPDATE hand SET pot=$2, computer_chips=$3 WHERE id=$1`;
  pool.query(queryText, [handId, newPot, newComputerChips])
    .then((result) => {
      console.log('Finished changing db for computer call');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error making player bet');
      res.sendStatus(500);
    })

});

router.put('/playerBet', (req, res) => {

  let handId = req.body.gameInfo.id;
  let playerBet = req.body.betInfo;
  let newPot = playerBet + req.body.gameInfo.pot;
  console.log('gorillas', req.body);
  let newPlayerChips = req.body.gameInfo.player_chips - playerBet;
  let playerAction = !req.body.gameInfo.player_action;

  const queryText = 'UPDATE hand SET pot=$2, player_chips=$3, player_action=$4 WHERE id=$1';
  pool.query(queryText, [handId, newPot, newPlayerChips, playerAction])
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
