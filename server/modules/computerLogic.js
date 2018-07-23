function computerLogic (playerBet, computerBet, pot, computerChips, playerChips, computerCard1, computerCard2, street) {

  if (street) {
    console.log('dolphin baby', street.flop);
    let street = street.flop;
    computerCard1 = parseInt(computerCard1.slice(0, -1));
    computerCard2 = parseInt(computerCard2.slice(0 ,-1));
    street = street.map(x => parseInt(x.slice(0, -1)));
    console.log(flop);
    let computerHand = [computerCard1, computerCard2];

    console.log(computerHand, flop, findPairs(computerHand, flop));
    if (findPairs.length === 1) {
      return 'CALL';
    }
    if (findPairs.length === 0 && playerBet > computerBet) {
      return 'FOLD';
    }
    if (findPairs.length === 2) {
      return {actionType: 'BET', betAmount: playerBet * 3};
    }

  }

  function findPairs(hand, street) {
    let pairs = [];
    for (let card of hand) {
      for (let thing of street) {
        if (hand[card] === street[thing]) {
          pairs.push(hand[card]);
        }
      }
    }
    console.log('dolphin time', pairs);
  }

  let possibleAces = formatPossibleAces(computerCard1, computerCard2);
  computerCard1 = possibleAces[0];
  computerCard2 = possibleAces[1];
  console.log(playerBet, computerBet, pot, computerChips, playerChips, computerCard1, computerCard2);
  let handPoints = (evaluateStartingHand(computerCard1, computerCard2));

  if (handPoints === 0 && playerBet > computerBet) {
    return 'FOLD';
  }

  if (handPoints === 0 && playerBet === computerBet) {
    return 'CALL';
  }

  if (handPoints === 1 || handPoints === 2) {
    return 'CALL';
  }

  if (handPoints >= 3) {
    if (playerBet === 0) {
      return {actionType: 'BET', betAmount: 30}
    }
    return {actionType: 'BET', betAmount: playerBet * 3}
  }

}

function evaluateStartingHand(str1, str2) {
  let handValue = 0;
  // Sum of values of 20
  if (parseInt(str1.slice(0, -1)) + parseInt(str2.slice(0,-1)) > 20) {
    handValue += 3;
  }
  // Suits Match
  if (str1[str1.length - 1] === str2[str2.length - 1]) {
    handValue += 1;
  }
  // Cards Match
  if (str1.slice(0, -1) === str2.slice(0, -1)) {
    handValue += 3;
  }
  // Difference of only one
  if (parseInt(str1.slice(0, -1)) - parseInt(str2.slice(0, -1)) === 1 || parseInt(str2.slice(0, -1)) - parseInt(str1.slice(0, -1)) === 1) {
    handValue += 1;
  }
  return handValue;
}

function formatPossibleAces(str1, str2) {
  let result = [];
  let newString1 = ''
  let newString2 = '';

  if (str1.length === 2 && str1[0] === '1') {
    newString1 += '14' + str1[str1.length - 1];
    result.push(newString1);
  } else {
    result.push(str1);
  }
  if (str2.length === 2 && str2[0] === '1') {
    newString2 += '14' + str2[str2.length - 1];
    result.push(newString2);
  } else {
    result.push(str2);
  }
  return result;
}






module.exports = computerLogic;
