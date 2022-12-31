import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ReduxData, ReduxStateType } from '../../redux/types';

import { RootState } from '../../redux/store';
import { PaginableData, PokemonListRequest, PokemonListResponse } from '../types';

export interface State {
  isAnimate: boolean;
  listPokemonData: PaginableData<PokemonListResponse>;
  myBag: any
}

const initialState: ReduxData<State> = {
  data: {
    isAnimate: false,
    listPokemonData: {
      data: [],
      totalPage: 0,
      totalRecords: 0
    },
    myBag: []
  },
  
  status: ReduxStateType.INIT,
};

const pokemonSlice = createSlice({
  name: 'pokemonSlice',
  initialState,
  reducers: {
    makeAnimate: (state, action: PayloadAction<boolean>) => {
      state.data.isAnimate = action.payload
    },
    getListPokemon: (state, action: PayloadAction<PokemonListRequest>) => {
      state.status = ReduxStateType.INIT;
    },
    getListPokemonSuccess: (state, action: PayloadAction<PaginableData<PokemonListResponse>>) => {
      state.status = ReduxStateType.SUCCESS;
      state.data.listPokemonData = action.payload
    },
    getListPokemonFail: state => {
      state.status = ReduxStateType.ERROR;
    },
    getWatchMyBagStart: state => {
      state.data.myBag = []
      state.status = ReduxStateType.LOADING;
    },
    getWatchMyBagSuccess: state => {
      state.data.myBag = []
      state.status = ReduxStateType.SUCCESS;
    },
    getWatchMyBagFail: state => {
      state.data.myBag = []
      state.status = ReduxStateType.ERROR;
    }
  },
});

export const { makeAnimate, getListPokemonFail, getListPokemon, getListPokemonSuccess } = pokemonSlice.actions;

export const selectorPokemonList = (state: RootState) => state.pokemon.data;

export default pokemonSlice.reducer;
