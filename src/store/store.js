import { configureStore } from '@reduxjs/toolkit';
import undoable from 'redux-undo';

import bookmarksReducer from './bookmarksStore';
import searchReducer from './searchStore';

export default configureStore({
  reducer: {
    search: searchReducer,
    bookmarks: undoable(bookmarksReducer),
  },
});
