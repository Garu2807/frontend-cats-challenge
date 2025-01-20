import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { CatState } from './types/CatState';
import * as api from './api';

const initialState: CatState = {
  cats: [],
  currentPage: 0,
  fetching: false,
  error: undefined,
};
export const getCats = createAsyncThunk(
  'cats/getCats',
  async (page: number) => {
    const cats = await api.getCats(page);
    return cats;
  }
);

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCats.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(getCats.fulfilled, (state, action) => {
      if (action.payload.length > 0) {
        state.cats = [...state.cats, ...action.payload]; // Добавляем новые котики к существующим
        state.currentPage += 1; // Увеличиваем текущую страницу
      } else {
        console.warn('No more cats to fetch'); // Обработка случая, если данные закончились
      }
      state.fetching = false; // Сбрасываем состояние загрузки
    });

    builder.addCase(getCats.rejected, (state) => {
      state.fetching = false;
    });
  },
});

export const selectCats = (state: RootState) => state.cats.cats;
export const selectCurrentPage = (state: RootState) => state.cats.currentPage;
export const selectFetching = (state: RootState) => state.cats.fetching;

export default catsSlice.reducer;
