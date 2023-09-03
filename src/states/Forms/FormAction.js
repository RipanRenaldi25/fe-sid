import FormActionType from './FormActionType';
import {
  registerUser, login, putAccessTokenOnSessionStorage, putRefreshTokenOnLocalStorage,
} from '../../utils/utilities';
import { setIsLogin, setUserActionCreator } from '../Authentication/authenticationAction';

export const changeInputActionCreator = ({ key, value }) => ({
  type: FormActionType.changeInputRegisterValue,
  payload: {
    key,
    value,
  },
});

export const clearInputRegisterActionCreator = () => ({
  type: FormActionType.clearInputRegisterValue,
});

export const changeInputLoginActionCreator = ({ key, value }) => ({
  type: FormActionType.changeInputLoginValue,
  payload: {
    key,
    value,
  },
});

export const clearInputLoginActionCreator = () => ({
  type: FormActionType.clearInputLoginValue,
});

// username, password, role, name, nik
export const asyncRegister = ({
  username, password, name, nik, role, phoneNumber,
}) => async () => {
  try {
    const data = await registerUser({
      username, password, name, nik, role, phoneNumber,
    });
    if (data) {
      alert('Registrasi berhasil');
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const asyncLogin = ({ username, password }) => async (dispatch) => {
  try {
    const { data } = await login({ username, password });
    dispatch(setUserActionCreator({
      id: data.id, username: data.username, name: data.name, role: data.role,
    }));
    dispatch(setIsLogin(true));
    putRefreshTokenOnLocalStorage({ key: 'REFRESH_TOKEN', token: data.refreshToken });
    putAccessTokenOnSessionStorage({ key: 'ACCESS_TOKEN', token: data.accessToken });
    putAccessTokenOnSessionStorage({
      key: 'USER',
      token: {
        id: data.id,
        username: data.username,
        name: data.name,
        role: data.role,
      },
    });
    alert('Login Berhasil');
  } catch ({ response }) {
    alert(response.data.message);
  }
};
