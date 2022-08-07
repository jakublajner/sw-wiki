import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const favouriteCharactersSlice = createSlice({
  name: 'favouriteCharacters',
  initialState,
  reducers: {
    addFavouriteCharacter: (state, action) => {
      const { path, name } = action.payload;
      if (!state.data.find((item) => item.path === path)) {
        state.data = [...state.data, { path, name }];
      } else {
        state.data = [...state.data.filter((item) => item.path !== path)];
      }
    },
  },
});

export const selectFavouriteCharacters = (state) =>
  state.favouriteCharacters.data;

export const selectFavouriteCharacter = (state, path) =>
  state.favouriteCharacters.data.find((character) => character.path === path);

export const { addFavouriteCharacter } = favouriteCharactersSlice.actions;

export default favouriteCharactersSlice.reducer;
