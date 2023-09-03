import FormActionType from './FormActionType';

const initialState = {
  registerInput: {
    firstName: '',
    lastName: '',
    nik: '',
    username: '',
    password: '',
    phoneNumber: '',
  },
  loginInput: {
    username: '',
    password: '',
  },
};

const formReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FormActionType.changeInputRegisterValue:
      return {
        ...state,
        registerInput: {
          ...state.registerInput,
          [action.payload.key]: action.payload.value,
        },
      };
    case FormActionType.clearInputRegisterValue:
      return {
        ...state,
        registerInput: {
          firstName: '',
          lastName: '',
          nik: '',
          username: '',
          password: '',
          phoneNumber: '',
        },
      };
    case FormActionType.changeInputLoginValue:
      return {
        ...state,
        loginInput: {
          ...state.loginInput,
          [action.payload.key]: action.payload.value,
        },
      };
    case FormActionType.clearInputLoginValue:
      return {
        ...state,
        loginInput: {
          username: '',
          password: '',
        },
      };
    default:
      return state;
  }
};

export default formReducer;
