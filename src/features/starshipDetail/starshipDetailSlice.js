import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from '../../api/client';
import { loadStatus } from '../../constants';

const initialState = {
  data: {},
  status: loadStatus.IDLE,
  error: null,
};

export const fetchStarshipDetail = createAsyncThunk(
  'starshipDetail/fetchstarshipDetail',
  async (spaceshipId) => {
    const response = await client.get(`starships/${spaceshipId}`);
    return response.data;
  }
);

export const starshipDetailSlice = createSlice({
  name: 'starshipDetail',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchStarshipDetail.pending, (state) => {
        state.status = loadStatus.LOADING;
      })
      .addCase(fetchStarshipDetail.fulfilled, (state, action) => {
        state.status = loadStatus.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchStarshipDetail.rejected, (state, action) => {
        state.status = loadStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

export const selectStarshipDetail = (state) => state.starshipDetail.data;

export default starshipDetailSlice.reducer;
