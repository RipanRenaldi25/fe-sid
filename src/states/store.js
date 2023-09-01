import { configureStore } from '@reduxjs/toolkit';
import accordionReducer from './accordions/accordionReducer';

export const store = configureStore({
  reducer: {
    accordion: accordionReducer,
  },
});
