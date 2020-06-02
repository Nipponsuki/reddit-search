import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'bookmarks',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      const item = state.items.find((el) => el.id === payload.id);
      if (item) {
        return;
      }
      state.items = [...state.items, payload];
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter((el) => el.id !== payload.id);
    },
  },
});

export const { addItem, removeItem } = slice.actions;

export const bookmarksSelector = (state) => state.bookmarks;

export default slice.reducer;
