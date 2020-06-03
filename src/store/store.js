import { configureStore, combineReducers } from '@reduxjs/toolkit';
import undoable from 'redux-undo';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bookmarksReducer from './bookmarksStore';
import searchReducer from './searchStore';

const reducers = combineReducers({
  search: searchReducer,
  bookmarks: undoable(bookmarksReducer),
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bookmarks'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
