import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import charactersSlice from '../features/characters/charactersSlice';
import characterDetailSlice from '../features/characterDetail/characterDetailSlice';
import favouriteCharactersSlice from '../features/favouriteCharacters/favouriteCharactersSlice';
import planetDetailSlice from '../features/planetDetail/planetDetailSlice';
import searchSlice from '../features/search/searchSlice';
import starshipDetailSlice from '../features/starshipDetail/starshipDetailSlice';

const persistConfig = {
  key: 'favouriteCharacters',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  favouriteCharactersSlice
);

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    characterDetail: characterDetailSlice,
    favouriteCharacters: persistedReducer,
    planetDetail: planetDetailSlice,
    search: searchSlice,
    starshipDetail: starshipDetailSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
