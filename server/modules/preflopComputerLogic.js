function preflopComputerLogic (actionType, raiseAmount, position, computerChips, playerChips, computerCard1, computerCard2) {

  const startingHands = [];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  for (let x = 0; x < values.length; x++) {
      for (let y = 0; y < values.length; y++) {
          startingHands.push(values[x]+values[y]);
      }
  }

  return startingHands;


  // if (actionType === 'playerBet') {
  //
  // }
}






module.exports = preflopComputerLogic;