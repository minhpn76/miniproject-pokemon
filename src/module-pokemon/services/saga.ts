import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PaginableData, PokemonListRequest, PokemonListResponse } from '../types'
import {getListPokemonSuccess, getListPokemon, getListPokemonFail} from './redux'
import axios from 'axios';
import { API_URL } from '../constants'
import { transformPokemonListRequest, transformPokemonListResponse } from './transform'

/**list pokemon */

function* getWatchListPokemonSaga(action: ReturnType<typeof getListPokemon>) {
  const { } = action.payload
  try {
    const reps: PokemonListResponse = yield call(listPokemonReq, action.payload)
    yield put({ type: getListPokemonSuccess, payload: reps })
  } catch (error) {
    yield put({ type: getListPokemonFail })
  } finally {
  
  }
}

const listPokemonReq = async (params: PokemonListRequest): Promise<any> => {
  return axios.get(`${API_URL}/pokemon`, {
    params: transformPokemonListRequest(params),
    transformResponse: transformPokemonListResponse
  }).then(resp => resp.data)
}

function* watchGetPokemonListSaga() {
  yield takeLatest(getListPokemon.toString(), getWatchListPokemonSaga);
}

export default function* pokemonSaga() {
  yield all([
    watchGetPokemonListSaga()
  ]);
}
