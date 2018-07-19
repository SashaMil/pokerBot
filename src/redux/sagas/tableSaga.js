import { put, takeLatest } from 'redux-saga/effects';
import { TABLE_ACTIONS } from '../actions/tableActions';
import { newGameRequest } from '../requests/tableRequests';
import { newHandRequest } from '../requests/tableRequests';
import { getHandRequest } from '../requests/tableRequests';
import { playerFoldRequest } from '../requests/tableRequests';

function* newGame(action) {
  try {
    let newGameId = yield newGameRequest(action.payload);
    let newHandId = yield newHandRequest(newGameId);
    console.log(newHandId);
    let currentGameInfo = yield getHandRequest(newHandId[0].id);
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
    let newGameInfo = yield playerFoldRequest();
    yield put({
      type: TABLE_ACTIONS.SET_GAME,
      payload: newGameInfo,
    });
  } catch (error) {
    console.log('GAME CRASHED -- WHOOPS', error);
  }
}

function* tableSaga() {
  yield takeLatest(TABLE_ACTIONS.NEW_GAME, newGame);
  yield takeLatest(TABLE_ACTIONS.PLAYER_FOLD, playerFold)
  // yield takeLatest(LOGIN_ACTIONS.LOGOUT, logoutUser);
}

export default tableSaga;
