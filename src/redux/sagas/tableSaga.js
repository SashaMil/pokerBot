import { put, takeLatest } from 'redux-saga/effects';
import { TABLE_ACTIONS } from '../actions/tableActions';
import { newGameRequest } from '../requests/tableRequests';
import { firstHandRequest } from '../requests/tableRequests';
import { getHandInfoRequest } from '../requests/tableRequests';
import { playerFoldRequest } from '../requests/tableRequests';
import { postNewHandRequest } from '../requests/tableRequests';
import { playerBetRequest } from '../requests/tableRequests';
import { computerPreflopReactionRequest } from '../requests/tableRequests';
import { computerPreflopActionRequest } from '../requests/tableRequests';
import { computerCallRequest } from '../requests/tableRequests';
import { getFlopAndHandInfoRequest } from '../requests/tableRequests';
import { computerFoldRequest } from '../requests/tableRequests';
import { computerBetRequest } from '../requests/tableRequests';

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
    console.log(gameInfo);
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
    computerAction = yield computerPreflopReactionRequest(betInfo, handId, playerAction);
    console.log('moose PEOPLE', computerAction);
    if (computerAction === 'CALL') {
      yield computerCallRequest(betInfo, gameInfo);
      gameInfo = yield getFlopAndHandInfoRequest(handId);
    }
    else if (computerAction === 'FOLD') {
      console.log('COMPUTER FOLD GOES HERE');
      console.log(gameInfo);
      yield computerFoldRequest(gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
      handId = yield postNewHandRequest(gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
    }
    else if (computerAction.computerAction === 'RAISE') {
      console.log('COMPUTER REACTION RAISE GOES HERE');
      yield computerCallRequest(computerAction.callAmount, gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
      yield computerBetRequest(computerAction.raiseAmount, gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
      gameInfo.player_action = true;
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

function* computerPreflopAction(action) {
  try {
    console.log(action.payload);
    handId = action.payload.gameInfo.id;
    computerAction = yield computerPreflopActionRequest(handId);
    console.log(computerAction);
    if (computerAction === 'CALL') {
      yield computerCallRequest(betInfo, gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
    }
    else if (computerAction === 'FOLD') {
      console.log('COMPUTER FOLD GOES HERE', );
      yield computerFoldRequest(gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
      handId = yield postNewHandRequest(gameInfo);
      handId = handId.id
      gameInfo = yield getHandInfoRequest(handId);
    }
    else if (computerAction.computerAction === 'RAISE') {
      console.log('COMPUTER RAISE GOES HERE');
      yield computerCallRequest(computerAction.callAmount, gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
      yield computerBetRequest(computerAction.raiseAmount, gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
      gameInfo.player_action = true;
    }
    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: gameInfo,
    });
  }
  catch(error) {
    console.log('GAME CRASHED -WHOOPS', error);
  }
}

function* tableSaga() {
  yield takeLatest(TABLE_ACTIONS.NEW_GAME, newGame);
  yield takeLatest(TABLE_ACTIONS.PLAYER_FOLD, playerFold);
  yield takeLatest(TABLE_ACTIONS.COMPUTER_PREFLOP_REACTION, computerPreflopReaction);
  yield takeLatest(TABLE_ACTIONS.COMPUTER_PREFLOP_ACTION, computerPreflopAction);
}

export default tableSaga;
