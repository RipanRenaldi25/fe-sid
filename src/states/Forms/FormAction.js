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

export const changeInputSearchFormActionCreator = ({ key, value }) => ({
  type: FormActionType.changeInputSearchBar,
  payload: {
    key, value,
  },
});

export const clearSearchbarInput = () => ({
  type: FormActionType.removeSearchInput,
});

export const clearInputSearchBar = () => ({
  type: FormActionType.clearInputSearchBar,
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

export const changeInputNikBarActionCreator = ({ key, value }) => ({
  type: FormActionType.changeInputNikBar,
  payload: {
    key,
    value,
  },
});

export const clearInputNikBarActionCreator = () => ({
  type: FormActionType.clearInputNikBar,
});

export const clearInputLoginActionCreator = () => ({
  type: FormActionType.clearInputLoginValue,
});

export const ToggleOpenModal = (isOpen) => ({
  type: FormActionType.toggleOpenModal,
  payload: {
    isOpen,
  },
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
    if (e.response.status === 422) {
      alert('isi form terlebih dahulu');
    }
  }
};

export const asyncLogin = ({ username, password }) => async (dispatch) => {
  try {
    const { data } = await login({ username, password });
    let role = null;
    if (data.roleId === 'user' || data.roleId === '1') {
      role = 'user';
    } else {
      role = 'admin';
    }
    dispatch(setUserActionCreator({
      id: data.nik, username: data.username, name: data.name, role,
    }));
    dispatch(setIsLogin(true));
    putRefreshTokenOnLocalStorage({ key: 'REFRESH_TOKEN', token: data.refreshToken });
    putAccessTokenOnSessionStorage({ key: 'ACCESS_TOKEN', token: data.accessToken });
    putAccessTokenOnSessionStorage({
      key: 'USER',
      token: {
        id: data.nik,
        username: data.username,
        name: data.name,
        role,
      },
    });
    alert('Login Berhasil');
  } catch ({ response }) {
    alert(response.data.message);
  }
};
