import USER_TYPE from './UserType';

const initialState = {
  users: [],
  userSearched: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_TYPE.getUsers:
      return {
        ...state,
        users: action.payload.users,
      };
    case USER_TYPE.getUser:
      return {
        ...state,
        userSearched: action.payload.user,
      };
    case USER_TYPE.clearSearchedUser:
      return {
        ...state,
        userSearched: [],
      };
    default:
      return state;
  }
};

export default userReducer;
