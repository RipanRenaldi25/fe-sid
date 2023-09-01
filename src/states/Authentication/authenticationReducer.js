import AUTHENTICATION_TYPE from './AuthenticationType';

const initialState = {
  isLogin: false,
  error: '',
  isLoading: false,
  user: {
    id: '',
    username: '',
    role: '',
    name: '',
  },
};

const authenticationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTHENTICATION_TYPE.setIsLogin:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    case AUTHENTICATION_TYPE.setToggleFetching:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case AUTHENTICATION_TYPE.setErrorMessage:
      return {
        ...state,
        error: action.payload.error,
      };
    case AUTHENTICATION_TYPE.setUserLogin:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          username: action.payload.username,
          role: action.payload.role,
          name: action.payload.name,
        },
      };
    case AUTHENTICATION_TYPE.logouUser:
      return {
        ...state,
        user: {
          id: '',
          username: '',
          role: '',
          name: '',
        },
      };
    default:
      return state;
  }
};

export default authenticationReducer;
