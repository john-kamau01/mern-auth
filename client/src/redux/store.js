import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/userSlice";
// import persistStore from "redux-persist/lib/persistStore";

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReduder = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReduder,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// The serializableCheck is going to check for some errors while we are using the redux toolkit

// export
export const persistor = persistStore(store);
