import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import configSlice from './reducers/configSlice';


export const store = configureStore({
  reducer: {
    config: configSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
