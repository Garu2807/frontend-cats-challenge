import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';

import { CatState } from './types/CatState';

const initialState: CatState = {
  cats: [],
  error: undefined,
};

export const getCats = createAsyncThunk('cats/getCats', async () => {
  return api.getCats();
});

const CatSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCats.fulfilled, (state, action) => {
      state.cats = action.payload;
    });
    builder.addCase(getCats.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export default CatSlice.reducer;
