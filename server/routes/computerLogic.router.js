const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const preflopComputerLogic = require('../modules/preflopComputerLogic.js');

// router.post('/computerPreflop', (req, res) => {
//   console.log('eagleTime', req.body);
//   console.log(preflopComputerLogic().length);
//   const queryText = `SELECT * FROM hand WHERE id=$1`;
//   pool.query(queryText, [req.body.handId])
//     .then((result) => {
//       console.log(result.rows);
//
//     })
//     .catch((error) => {
//       res.sendStatus(500);
//     })
// });
//







module.exports = router;
