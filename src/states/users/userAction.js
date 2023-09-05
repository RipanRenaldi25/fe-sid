import { getUserByNIK, getUsers } from '../../utils/utilities';
import { setIsFetchingActionCreator } from '../requests/requestAction';

import USER_TYPE from './UserType';

export const getUsersActionCreator = (users) => ({
  type: USER_TYPE.getUsers,
  payload: {
    users,
  },
});

export function getUserActionCreator(user) {
  return ({
    type: USER_TYPE.getUser,
    payload: {
      user,
    },
  });
}

export const setUserActionCreator = (user) => ({
  type: USER_TYPE.setUser,
  payload: {
    user,
  },
});

export const clearSearchedUserActionCreator = () => ({
  type: USER_TYPE.clearSearchedUser,
});

export const asyncGetUsers = () => async (dispatch) => {
  dispatch(setIsFetchingActionCreator(true));
  try {
    const response = await getUsers();
    const { data: { data } } = response;
    dispatch(getUsersActionCreator(data));
  } catch (e) {
    console.log(e);
  }
  dispatch(setIsFetchingActionCreator(false));
};

export const asyncGetUser = (nik) => async (dispatch) => {
  dispatch(setIsFetchingActionCreator(true));
  try {
    const response = await getUserByNIK(nik);
    const { data: { data } } = response;
    dispatch(getUserActionCreator(data));
  } catch (e) {
    console.log(e);
  }
  dispatch(setIsFetchingActionCreator(false));
};
