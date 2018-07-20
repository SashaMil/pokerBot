import { put, takeLatest } from 'redux-saga/effects';
import { TABLE_ACTIONS } from '../actions/tableActions';
import { newGameRequest } from '../requests/tableRequests';
import { firstHandRequest } from '../requests/tableRequests';
import { getHandRequest } from '../requests/tableRequests';
import { playerFoldRequest } from '../requests/tableRequests';
import { postNewHandRequest } from '../requests/tableRequests';
import { playerRaisePreflopRequest } from '../requests/tableRequests';
import { computerPreflopRequest } from '../requests/tableRequests';
import { computerCallPreflopRequest } from '../requests/tableRequests';

let currentGameInfo = '';
let newHandId = 0;
let newGameId = 0;
let playerRaiseOrBet = 0;
let computerAction = '';

function* newGame(action) {
  try {
    newGameId = yield newGameRequest(action.payload);
    newHandId = yield firstHandRequest(newGameId);
    console.log(newHandId);
    currentGameInfo = yield getHandRequest(newHandId[0].id);
    console.log('dinosaurs', currentGameInfo);
    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: currentGameInfo,
    })
  } catch (error) {
    console.log('GAME FAILED TO START -- CHECK YOUR SERVER', error);
  }
}

function* playerFold(action) {
  try {
    yield playerFoldRequest(action.payload);
    currentGameInfo = yield getHandRequest(action.payload.handId);
    console.log('cheetah', currentGameInfo);
    newHandId = yield postNewHandRequest(currentGameInfo);
    currentGameInfo = yield getHandRequest(newHandId[0].id)

    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: currentGameInfo,
    })
  } catch (error) {
    console.log('GAME CRASHED -- WHOOPS', error);
  }
}

function* playerRaisePreflop(action) {
  try {
    console.log('birdStuff', action.payload.chips);
    playerRaiseOrBet = action.payload.chips;
    newHandId = action.payload.currentGameInfo.id;
    yield playerRaisePreflopRequest(action.payload);
    currentGameInfo = yield getHandRequest(action.payload.currentGameInfo.id)
    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: currentGameInfo,
    })
    computerAction = yield computerPreflopRequest(playerRaiseOrBet, newHandId, 'RAISE');
    console.log('gazzelle', computerAction);
    if (computerAction[0] === 'CALL') {
      yield computerCallPreflopRequest(computerAction);
    }
    currentGameInfo = yield getHandRequest(action.payload.currentGameInfo.id);
    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: currentGameInfo,
    });
  }
  catch(error) {
    console.log('GAME CRASHED -- WHOOPS', error);
  }
}

function* tableSaga() {
  yield takeLatest(TABLE_ACTIONS.NEW_GAME, newGame);
  yield takeLatest(TABLE_ACTIONS.PLAYER_FOLD, playerFold);
  yield takeLatest(TABLE_ACTIONS.PLAYER_RAISE_PREFLOP, playerRaisePreflop);
  // yield takeLatest(LOGIN_ACTIONS.LOGOUT, logoutUser);
}

export default tableSaga;
