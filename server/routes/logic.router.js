const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/playerFold', (req, res) => {
  console.log('dragontime', req.body);
  let id = req.body.foldInfo.handId;
  let newPot = 0;
  let newComputerChips = req.body.foldInfo.computer_chips + req.body.foldInfo.pot;
  console.log(newComputerChips);
  console.log(id);

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













module.exports = router;
