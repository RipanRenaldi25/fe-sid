import { configureStore } from '@reduxjs/toolkit';
import accordionReducer from './accordions/accordionReducer';
import formReducer from './Forms/FormReducer';
import authenticationReducer from './Authentication/authenticationReducer';
import requestReducer from './requests/requestReducer';
import userReducer from './users/userReducer';

export const store = configureStore({
  reducer: {
    accordion: accordionReducer,
    form: formReducer,
    auth: authenticationReducer,
    requests: requestReducer,
    users: userReducer,
  },
});
