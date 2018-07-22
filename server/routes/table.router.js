const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const Deck = require('../modules/deck.js')


router.post('/newGame', (req, res) => {
  console.log('dinosaur time', req.body);
  const queryText = `INSERT INTO game (computer_type, user_id)
                    Values ($1, $2)
                    RETURNING id;`;
  return pool.query(queryText, [req.body.difficulty, req.body.userId])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log('Error handling newGameRequest', error);
      res.sendStatus(500);
    })

});

router.post('/firstHand', (req, res) => {
  console.log('polar bear', req.body);
  // console.log('giraffe', req.body.id[0].id);
  let deck = new Deck;
  deck.shuffle();
  // Dealing cards as you would in person
  let computerCard1 = deck.deal();
  let playerCard1 = deck.deal();
  let computerCard2 = deck.deal();
  let playerCard2 = deck.deal();

  let burnCard1 = deck.deal();
  let flopCard1 = deck.deal();
  let flopCard2 = deck.deal()
  let flopCard3 = deck.deal();
  let burnCard2 = deck.deal();
  let turn = deck.deal();
  let burnCard3 = deck.deal();
  let river = deck.deal();

  let arr = [true, false];
  let bool = arr[Math.floor(Math.random() * (2))];
  const queryText = `INSERT INTO hand (computer_chips, computer_card_1, player_card_1, computer_card_2, player_card_2, player_chips, player_sb, pot, game_id, flop_card_1, flop_card_2, flop_card_3, turn, river)
                    Values
                    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
                    RETURNING id`;
  if (bool) {
    pool.query(queryText, [1490, computerCard1, playerCard1, computerCard2, playerCard2, 1495, bool, 15, req.body.newGameId, flopCard1, flopCard2, flopCard3, turn, river])
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((error) => {
        res.sendStatus(500);
      })
  } else {
    pool.query(queryText, [1495, computerCard1, playerCard1, computerCard2, playerCard2, 1490, bool, 15, req.body.newGameId, flopCard1, flopCard2, flopCard3, turn, river])
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((error) => {
        res.sendStatus(500);
      })
  }
});

  router.get('/getHandInfo/:id', (req, res) => {
    console.log('elephant', req.params.id);
    let handId = req.params.id;
    const queryText = `SELECT player_chips, computer_chips, pot, game_id, player_card_1, player_card_2, player_sb, id FROM hand WHERE id=$1`
    pool.query(queryText, [handId])
      .then((result) => {
        console.log('Successfully got hand details', result.rows);
        // Change values of flop, turn, river here
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log('Error sending hand details', error);
        res.sendStatus(500);
      })
  });

  router.get('/getFlopAndHand/:id', (req, res) => {
    console.log('moneytime', req.params.id);
    let id = req.params.id;
    const queryText = `SELECT player_chips, computer_chips, pot, game_id, player_card_1, player_card_2, player_sb, flop_card_1, flop_card_2, flop_card_3, id FROM  hand WHERE id=$1`
    pool.query(queryText, [id])
      .then((result) => {
        console.log('Successfully got hand details', result.rows);
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log('Error sending flop and hand details', error);
        res.sendStatus(500);
      })
  });

  // router.put('/flop', (req, res) => {
  //   console.log('flop', req.body);
  //
  // })


  router.post('/postNewHand', (req, res) => {
    console.log(req.body);
    console.log('antelope', req.body.gameInfo.computerChips);
    let deck = new Deck;
    deck.shuffle();
    // Dealing cards as you would in person
    let computerCard1 = deck.deal();
    let playerCard1 = deck.deal();
    let computerCard2 = deck.deal();
    let playerCard2 = deck.deal();
    let burnCard1 = deck.deal();
    let flopCard1 = deck.deal();
    let flopCard2 = deck.deal();
    let flopCard3 = deck.deal();
    let burnCard2 = deck.deal();
    let turn = deck.deal();
    let burnCard3 = deck.deal();
    let river = deck.deal();

    const queryText = `INSERT INTO hand (computer_chips, computer_card_1, player_card_1, computer_card_2, player_card_2, player_chips, player_sb, pot, game_id, flop_card_1, flop_card_2, flop_card_3, turn, river)
                      Values
                      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
                      RETURNING id`;

    if (req.body.gameInfo.player_sb) {
      pool.query(queryText, [req.body.gameInfo.computer_chips - 10, computerCard1, playerCard1, computerCard2, playerCard2, req.body.gameInfo.player_chips - 5, !req.body.gameInfo.player_sb, req.body.gameInfo.pot + 15, req.body.gameInfo.game_id, flopCard1, flopCard2, flopCard3, turn, river])
        .then((result) => {
          res.send(result.rows[0]);
          console.log('hyena');
        })
        .catch((error) => {
          res.sendStatus(500);
        })
    } else {
      pool.query(queryText, [req.body.gameInfo.computer_chips - 5, computerCard1, playerCard1, computerCard2, playerCard2, req.body.gameInfo.player_chips - 10, !req.body.gameInfo.player_sb, req.body.gameInfo.pot + 15, req.body.gameInfo.game_id, flopCard1, flopCard2, flopCard3, turn, river])
        .then((result) => {
          res.send(result.rows[0]);
          console.log('success');
        })
        .catch((error) => {
          res.sendStatus(500);
          console.log('whoops');
        })
      }

  });






module.exports = router;
