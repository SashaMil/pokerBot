import { put, takeLatest } from 'redux-saga/effects';
import { TABLE_ACTIONS } from '../actions/tableActions';
import { newGameRequest } from '../requests/tableRequests';
import { firstHandRequest } from '../requests/tableRequests';
import { getHandInfoRequest } from '../requests/tableRequests';
import { playerFoldRequest } from '../requests/tableRequests';
import { postNewHandRequest } from '../requests/tableRequests';
import { playerBetRequest } from '../requests/tableRequests';
import { computerPreflopRequest } from '../requests/tableRequests';
import { computerCallPreflopRequest } from '../requests/tableRequests';
import { getFlopAndHandRequest } from '../requests/tableRequests';

let gameInfo = '';
let handId = 0;
let gameId = 0;
let betInfo = 0;
let computerAction = '';
let playerAction = '';

function* newGame(action) {
  try {
    gameId = yield newGameRequest(action.payload);
    handId = yield firstHandRequest(gameId.id);
    gameInfo = yield getHandInfoRequest(handId.id);
    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: gameInfo,
    })
  } catch (error) {
    console.log('GAME FAILED TO START -- CHECK YOUR SERVER', error);
  }
}

function* playerFold(action) {
  try {
    handId = action.payload.handId
    yield playerFoldRequest(action.payload);
    gameInfo = yield getHandInfoRequest(handId);
    handId = yield postNewHandRequest(gameInfo);
    gameInfo = yield getHandInfoRequest(handId.id)

    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: gameInfo,
    })
  } catch (error) {
    console.log('GAME CRASHED -- WHOOPS', error);
  }
}

function* computerPreflopReaction(action) {
  try {
    betInfo = action.payload.betInfo;
    gameInfo = action.payload.gameInfo;
    handId = action.payload.gameInfo.id;
    playerAction = action.payload.playerAction;
    if (playerAction === 'RAISE') {
      yield playerBetRequest(betInfo, gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
      yield put({
        type: TABLE_ACTIONS.SET_GAME,
        payload: gameInfo,
      })
    }
    computerAction = yield computerPreflopRequest(betInfo, handId, playerAction);
    if (computerAction[0] === 'CALL') {
      yield computerCallPreflopRequest(computerAction);
      gameInfo = yield getFlopAndHandRequest(action.payload.gameInfo.id);
    }
    else if (computerAction[0] === 'FOLD') {
      console.log('COMPUTER FOLD GOES HERE');
    }
    else if (computerAction[0] === 'RAISE') {
      console.log('COMPUTER RAISE GOES HERE');
    }
    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: gameInfo,
    });
  }
  catch(error) {
    console.log('GAME CRASHED -- WHOOPS', error);
  }
}

// function* computerPreflopAction(action) {
//   try {
//     console.log(action.payload);
//   }
//   catch(error) {
//     console.log('GAME CRASHED -WHOOPS', error);
//   }
// }

function* tableSaga() {
  yield takeLatest(TABLE_ACTIONS.NEW_GAME, newGame);
  yield takeLatest(TABLE_ACTIONS.PLAYER_FOLD, playerFold);
  yield takeLatest(TABLE_ACTIONS.COMPUTER_PREFLOP_REACTION, computerPreflopReaction);
  // yield takeLatest(TABLE_ACTIONS.COMPUTER_PREFLOP_ACTION, computerPreflopAction);
  // yield takeLatest(LOGIN_ACTIONS.LOGOUT, logoutUser);
}

export default tableSaga;
