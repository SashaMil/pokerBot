function computerPreflopActionLogic (pot, computerChips, playerChips, computerCard1, computerCard2) {

  let possibleAces = formatPossibleAces(computerCard1, computerCard2);
  computerCard1 = possibleAces[0];
  computerCard2 = possibleAces[1];
  console.log(computerCard1, computerCard2);
  let handPoints = (evaluateHandPreflop(computerCard1, computerCard2));

  if (handPoints >= 0) {
    return 'FOLD';
  }
  if (handPoints === 9) {
    return 'CALL';
  }
  if (handPoints === 6) {
    return 'CALL';
  }
  if (handPoints === 10) {
    return ['RAISE', playerBet, (playerBet * 3) - playerBet];
  }
  // console.log(evaluateHandPreflop(computerCard1, computerCard2));
  // return(evaluateHandPreflop(computerCard1, computerCard2));

}

function evaluateHandPreflop(str1, str2) {
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






module.exports = computerPreflopActionLogic;
