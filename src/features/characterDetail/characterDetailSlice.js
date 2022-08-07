import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from '../../api/client';
import { getPathFromAPiUrl } from '../../utils/url';
import { loadStatus } from '../../constants';

const initialState = {
  data: {},
  status: loadStatus.IDLE,
  error: null,
};

export const fetchCharacterDetail = createAsyncThunk(
  'characterDetail/fetchCharacterDetail',
  async (characterId) => {
    const response = await client.get(`people/${characterId}/`);
    return response.data;
  }
);

export const characterDetailSlice = createSlice({
  name: 'characterDetail',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCharacterDetail.pending, (state) => {
        state.status = loadStatus.LOADING;
      })
      .addCase(fetchCharacterDetail.fulfilled, (state, action) => {
        state.status = loadStatus.SUCCESS;
        const character = action.payload;
        character.path = getPathFromAPiUrl(character.url, 'character');
        state.data = character;
      })
      .addCase(fetchCharacterDetail.rejected, (state, action) => {
        state.status = loadStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

export const selectCharacterDetail = (state) => state.characterDetail.data;

export default characterDetailSlice.reducer;
