import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import splitReducer from "./features/split.slice";

const splitPersistConfig = {
  key: "split",
  storage,
};

const persistedSplitReducer = persistReducer(splitPersistConfig, splitReducer);

const rootReducer = combineReducers({
  split: persistedSplitReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
