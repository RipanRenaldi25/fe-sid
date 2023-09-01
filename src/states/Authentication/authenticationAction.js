import AUTHENTICATION_TYPE from './AuthenticationType';

export const setUserActionCreator = ({
  id, username, name, role,
}) => ({
  type: AUTHENTICATION_TYPE.setUserLogin,
  payload: {
    id,
    name,
    username,
    role,
  },
});

export const logoutUser = () => ({
  type: AUTHENTICATION_TYPE.logouUser,
});

export const setIsLogin = (isLogin) => ({
  type: AUTHENTICATION_TYPE.setIsLogin,
  payload: {
    isLogin,
  },
});
