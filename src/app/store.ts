import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { userAPI } from '../services/user-service';

const reducer = combineReducers({
  [userAPI.reducerPath]: userAPI.reducer
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
