import { put, takeLatest } from 'redux-saga/effects';
import { TABLE_ACTIONS } from '../actions/tableActions';
import { newGameRequest } from '../requests/tableRequests';
import { firstHandRequest } from '../requests/tableRequests';
import { getHandInfoRequest } from '../requests/tableRequests';
import { playerFoldRequest } from '../requests/tableRequests';
import { postNewHandRequest } from '../requests/tableRequests';
import { playerBetRequest } from '../requests/tableRequests';
import { playerCallRequest } from '../requests/tableRequests';
import { computerCallRequest } from '../requests/tableRequests';
import { getFlopAndHandInfoRequest } from '../requests/tableRequests';
import { computerFoldRequest } from '../requests/tableRequests';
import { computerBetRequest } from '../requests/tableRequests';
import { computerActionRequest } from '../requests/tableRequests';
import { getTurnAndHandInfoRequest } from '../requests/tableRequests';
import { computerActionStreetRequest } from '../requests/tableRequests';
import { postActionTypeRequest } from '../requests/tableRequests';

let gameInfo = '';
let handId = 0;
let gameId = 0;
let betInfo = 0;
let computerAction = '';
let playerAction = '';
let decision = '';

function* newGame(action) {
  try {
    gameId = yield newGameRequest(action.payload);
    console.log(gameId);
    handId = yield firstHandRequest(gameId.id);
    console.log(handId);
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
    handId = action.payload.gameInfo.id
    yield playerFoldRequest(action.payload.gameInfo);
    gameInfo = yield getHandInfoRequest(handId);
    console.log(gameInfo);
    handId = yield postNewHandRequest(gameInfo);
    gameInfo = yield getHandInfoRequest(handId.id);
    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: gameInfo,
    })
    yield put({
      type: TABLE_ACTIONS.SET_FLOP,
      payload: [],
    })
  } catch (error) {
    console.log('GAME CRASHED -- WHOOPS', error);
  }
}

function* playerCall(action) {
  try {
    handId = action.payload.gameInfo.id;
    yield playerCallRequest(action.payload.gameInfo);
    gameInfo = yield getHandInfoRequest(handId);
    console.log(gameInfo);
    // if !gameInfo.player_sb && gameInfo.player_action_counter > 0) || (gameInfo.player_sb && gameInfo.player_action_counter > 1))
    if ((!gameInfo.player_sb && gameInfo.player_action_counter > 0) || (gameInfo.player_sb && gameInfo.player_action_counter > 1)) {
      gameInfo = yield getFlopAndHandInfoRequest(handId);
      yield put({
        type: TABLE_ACTIONS.SET_FLOP,
        payload: [gameInfo.flop_card_1, gameInfo.flop_card_2, gameInfo.flop_card_3],
      })
      console.log('peekaboo', gameInfo);
      yield put({
        type: TABLE_ACTIONS.SET_GAME,
        payload: gameInfo,
      })
      gameInfo.player_action_counter = 0;
    }
    else {
      gameInfo = yield getHandInfoRequest(handId);
      yield put({
        type: TABLE_ACTIONS.SET_GAME,
        payload: gameInfo,
      })
    }

  }
  catch (error) {
    console.log('WHOOPS');
  }
}

function* playerBet(action) {
  try {
    handId = action.payload.gameInfo.id;
    yield playerBetRequest(action.payload.betAmount, action.payload.gameInfo);
    gameInfo = yield getHandInfoRequest(handId);
    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: gameInfo,
    })
  }
  catch (error) {
    console.log('WHOOPS');
  }
}

function* computerDecision(action) {

  try {

    handId = action.payload.gameInfo.id;
    gameInfo = action.payload.gameInfo;
    decision = yield computerActionRequest(handId);
    if (decision === 'FOLD') {
      yield postActionTypeRequest(decision, handId);
      console.log('COMPUTER FOLDING');
      yield computerFoldRequest(gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
      handId = yield postNewHandRequest(gameInfo);
      gameInfo = yield getHandInfoRequest(handId.id);
      yield put({
        type: TABLE_ACTIONS.SET_FLOP,
        payload: [],
      })
    }
    else if (decision === 'CALL') {
      console.log('COMPUTER CALLING');
      yield postActionTypeRequest(decision, handId);
      yield computerCallRequest(gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
      if (gameInfo.player_action_counter > 0) {
        gameInfo = yield getFlopAndHandInfoRequest(handId);
        yield put({
          type: TABLE_ACTIONS.SET_FLOP,
          payload: [gameInfo.flop_card_1, gameInfo.flop_card_2, gameInfo.flop_card_3],
        })
      }
      else {
        gameInfo = yield getHandInfoRequest(handId);
      }
    }
    else if (decision.actionType === 'BET') {
      console.log('COMPUTER RAISING');
      yield postActionTypeRequest(decision.actionType, handId);
      console.log(decision);
      yield computerBetRequest(decision.betAmount, gameInfo);
      gameInfo = yield getHandInfoRequest(handId);
    }
    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: gameInfo,
    });
  }
  catch (error) {
    console.log('WHOOPS');
  }
}

// function* computerDecisionStreet(action) {
//
//   try {
//
//     handId = action.payload.gameInfo.id;
//     gameInfo = action.payload.gameInfo;
//     decision = yield computerActionStreetRequest(gameInfo, action.payload.street);
//     console.log('yoda', decision);
//     if (decision === 'FOLD') {
//       console.log('COMPUTER FOLDING');
//       yield computerFoldRequest(gameInfo);
//       gameInfo = yield getHandInfoRequest(handId);
//       handId = yield postNewHandRequest(gameInfo);
//       gameInfo = yield getHandInfoRequest(handId.id);
//       yield put({
//         type: TABLE_ACTIONS.SET_FLOP,
//         payload: [],
//       })
//     }
//     else if (decision === 'CALL') {
//       console.log('COMPUTER CALLING');
//       yield computerCallRequest(gameInfo);
//       gameInfo = yield getHandInfoRequest(handId);
//       if (gameInfo.player_action_counter > 0) {
//         gameInfo = yield getFlopAndHandInfoRequest(handId);
//         yield put({
//           type: TABLE_ACTIONS.SET_FLOP,
//           payload: [gameInfo.flop_card_1, gameInfo.flop_card_2, gameInfo.flop_card_3],
//         })
//       }
//       else {
//         gameInfo = yield getHandInfoRequest(handId);
//       }
//     }
//     else if (decision.actionType === 'BET') {
//       console.log('COMPUTER RAISING');
//       console.log(decision);
//       yield computerBetRequest(decision.betAmount, gameInfo);
//       gameInfo = yield getHandInfoRequest(handId);
//     }
//     yield put({
//       type: TABLE_ACTIONS.SET_GAME,
//       payload: gameInfo,
//     });
//   }
//   catch (error) {
//     console.log('WHOOPS');
//   }
//
// }

function* tableSaga() {
  yield takeLatest(TABLE_ACTIONS.NEW_GAME, newGame);
  yield takeLatest(TABLE_ACTIONS.PLAYER_FOLD, playerFold);
  yield takeLatest(TABLE_ACTIONS.PLAYER_BET, playerBet);
  yield takeLatest(TABLE_ACTIONS.PLAYER_CALL, playerCall);
  yield takeLatest(TABLE_ACTIONS.COMPUTER_DECISION, computerDecision);
  // yield takeLatest(TABLE_ACTIONS.COMPUTER_DECISION_STREET, computerDecisionStreet)
}

export default tableSaga;
