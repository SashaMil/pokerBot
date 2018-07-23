const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const computerLogic = require('../modules/computerLogic.js')

router.get('/:id', (req, res) => {
  console.log('DINO TIME', req.params.id);
  const queryText = `SELECT * FROM hand WHERE id=$1`;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      let computerAction = (computerLogic(result.rows[0].player_bet, result.rows[0].computer_bet, result.rows[0].pot, result.rows[0].computer_chips, result.rows[0].player_chips, result.rows[0].computer_card_1, result.rows[0].computer_card_2));
      console.log(computerAction);
      if (computerAction === 'CALL' || computerAction === 'FOLD') {
        res.send(computerAction);
      }
      else {
        res.send(computerAction);
      }
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});








module.exports = router;