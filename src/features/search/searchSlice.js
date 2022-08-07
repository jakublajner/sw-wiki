import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from '../../api/client';
import { loadStatus } from '../../constants';

const initialState = {
  data: null,
  status: loadStatus.IDLE,
  error: null,
};

export const searchItems = createAsyncThunk(
  'search/searchItems',
  async (query) => {
    const endpoints = ['people', 'planets', 'starships'];

    const [people, planets, starships] = await Promise.all(
      endpoints.map((endpoint) => client.get(`${endpoint}/?search=${query}`))
    );

    const result = {
      characters: people.data.results,
      planets: planets.data.results,
      starships: starships.data.results,
    };

    return result;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetState: (state) => {
      state.status = loadStatus.IDLE;
      state.data = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(searchItems.pending, (state) => {
        state.status = loadStatus.LOADING;
      })
      .addCase(searchItems.fulfilled, (state, action) => {
        state.status = loadStatus.SUCCESS;
        state.data = action.payload;
      })
      .addCase(searchItems.rejected, (state, action) => {
        state.status = loadStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

export const selectAllSearchResults = (state) => state.search.data;

export const { resetState } = searchSlice.actions;

export default searchSlice.reducer;
