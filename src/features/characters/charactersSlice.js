import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from '../../api/client';
import { loadStatus } from '../../constants';
import { getPathFromAPiUrl } from '../../utils/url';

const initialState = {
  data: [],
  status: loadStatus.IDLE,
  error: null,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response = await client.get('people');
    return response.data;
  }
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = loadStatus.LOADING;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = loadStatus.SUCCESS;
        const { results } = action.payload;

        if (Array.isArray(results)) {
          results.forEach((item) => {
            item.path = getPathFromAPiUrl(item.url, 'character');
          });
        }

        state.data = [...results];
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = loadStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

export const selectAllCharacters = (state) => state.characters.data;

export default charactersSlice.reducer;
