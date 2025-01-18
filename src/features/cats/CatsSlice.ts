import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchCats = createAsyncThunk(
  'cats/fetchCats',
  async (page: number) => {
    if (!apiKey) {
      throw new Error('API key is missing');
    }
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=15&page=${page}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey,
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);

const catsSlice = createSlice({
  name: 'cats',
  initialState: {
    cats: [] as any[],
    currentPage: 0,
    fetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCats.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.cats = [...state.cats, ...action.payload];
      state.currentPage += 1;
      state.fetching = false;
    });
    builder.addCase(fetchCats.rejected, (state) => {
      state.fetching = false;
    });
  },
});

export const selectCats = (state: RootState) => state.cats.cats;
export const selectCurrentPage = (state: RootState) => state.cats.currentPage;
export const selectFetching = (state: RootState) => state.cats.fetching;

export default catsSlice.reducer;
