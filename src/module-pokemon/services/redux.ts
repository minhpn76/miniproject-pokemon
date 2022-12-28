import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ReduxData, ReduxStateType } from '../../redux/types';

import { RootState } from '../../redux/store';

export interface State {
  pokemonList: any;
}

const initialState: ReduxData<State> = {
  data: {
    pokemonList: [],
  },
  status: ReduxStateType.INIT,
};

const pokemonSlice = createSlice({
  name: 'pokemonSlice',
  initialState,
  reducers: {
    getWatchPokemonStart: state => {
      state.status = ReduxStateType.LOADING;
    },
  },
});

export const { getWatchPokemonStart } = pokemonSlice.actions;

export const selectorPokemonList = (state: RootState) => state.pokemon.data;

export default pokemonSlice.reducer;
