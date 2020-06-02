import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchStore';
import bookmarksReducer from './bookmarksStore';

export default configureStore({
  reducer: {
    search: searchReducer,
    bookmarks: bookmarksReducer,
  },
});
