import { createSlice } from '@reduxjs/toolkit';
import { search } from 'services/reddit';

export const slice = createSlice({
  name: 'search',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setItems: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export function fetchSearchResults(searchQuery) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await search(searchQuery);
      dispatch(setItems(response.data.children));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
}

export const { setError, setLoading, setItems } = slice.actions;

export const searchSelector = (state) => state.search;

export default slice.reducer;
