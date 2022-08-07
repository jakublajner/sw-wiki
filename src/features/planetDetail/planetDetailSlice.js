import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from '../../api/client';
import { loadStatus } from '../../constants';

const initialState = {
  data: {},
  status: loadStatus.IDLE,
  error: null,
};

export const fetchPlanetDetail = createAsyncThunk(
  'planetDetail/fetchPlanetDetail',
  async (planetId) => {
    const response = await client.get(`planets/${planetId}`);
    return response.data;
  }
);

export const planetDetailSlice = createSlice({
  name: 'planetDetail',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchPlanetDetail.pending, (state) => {
        state.status = loadStatus.LOADING;
      })
      .addCase(fetchPlanetDetail.fulfilled, (state, action) => {
        state.status = loadStatus.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchPlanetDetail.rejected, (state, action) => {
        state.status = loadStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

export const selectPlanetDetail = (state) => state.planetDetail.data;

export default planetDetailSlice.reducer;
