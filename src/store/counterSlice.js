import { createSlice } from '@reduxjs/toolkit';
// import { games } from 'services';

export const slice = createSlice({
  name: 'games',
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedGame: '',
  },
  reducers: {
    getGamesIsLoading: (state) => {
      state.loading = true;
    },
    getGamesSuccess: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
      state.error = null;
    },
    getGamesFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    filter: (state, { payload }) => {
      state.items = state.items.filter((game) =>
        game.genres.some((genre) => genre.title === payload)
      );
    },
    setSelectedGame: (state, { payload }) => {
      state.selectedGame = payload;
    },
  },
});

export function filterByGenre(genre) {
  return async (dispatch) => {
    await dispatch(getGames());
    dispatch(filter(genre));
  };
}

export function getGames() {
  return async (dispatch) => {
    dispatch(getGamesIsLoading());

    // try {
    //   const response = await games.fetchGames();
    //   dispatch(getGamesSuccess(response.data));
    // } catch (error) {
    //   dispatch(getGamesFailure(error.message));
    // }
  };
}

export const {
  getGamesIsLoading,
  getGamesSuccess,
  getGamesFailure,
  filter,
  setSelectedGame,
} = slice.actions;

export const gamesSelector = (state) => state.games;

export default slice.reducer;
