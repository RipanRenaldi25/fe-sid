import axios from 'axios';
import { logoutUser, setIsLogin } from '../states';

// username, password, role, name, nik
export const registerUser = async ({
  username, password, name, nik, role, phoneNumber,
}) => {
  const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/register`, {
    username,
    password,
    name,
    nik,
    role,
    phone: phoneNumber,
  });

  return response.data;
};

export const login = async ({ username, password }) => {
  const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/login`, { username, password });

  return response.data;
};

export const putAccessTokenOnSessionStorage = ({ key, token }) => {
  if (sessionStorage.getItem(key)) {
    sessionStorage.removeItem(key);
  }
  sessionStorage.setItem(key, JSON.stringify(token));
};

export const putRefreshTokenOnLocalStorage = ({ key, token }) => {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }
  localStorage.setItem(key, JSON.stringify(token));
};

export const getAccessToken = ({ key }) => {
  if (!sessionStorage.getItem(key)) {
    return;
  }
  return JSON.parse(sessionStorage.getItem(key));
};

export const getRefreshToken = ({ key }) => {
  if (!localStorage.getItem(key)) {
    return;
  }
  return JSON.parse(localStorage.getItem(key));
};

export const removeAccessToken = ({ key }) => {
  sessionStorage.removeItem(key);
};

export const removeRefreshToken = ({ key }) => {
  localStorage.removeItem(key);
};

export const getFileType = (fileType) => {
  if (fileType === 'application/pdf') {
    return fileType;
  }
  return fileType.split('/')[0];
};

export const getFileSize = (size) => {
  const sizeInMb = size / 1_000_000;
  return `${sizeInMb.toFixed(1)} MB`;
};

export const splitFileName = (fileName) => {
  const splitedFileName = fileName.split('.');
  const fileExtension = splitedFileName[splitedFileName.length - 1];
  const originalName = splitedFileName.slice(0, splitedFileName.length - 1).join(' ');

  return [originalName, fileExtension];
};

export const logout = async (dispatch) => {
  dispatch(setIsLogin(false));
  dispatch(logoutUser());
  try {
    await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/authentications/${getRefreshToken({ key: 'REFRESH_TOKEN' })}`);
  } catch (e) {
    console.log(e);
  }
  removeAccessToken({ key: 'ACCESS_TOKEN' });
  removeRefreshToken({ key: 'REFRESH_TOKEN' });
  removeAccessToken({ key: 'USER' });
};

export const updateAccessToken = async () => {
  const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/authentications`, {
    refreshToken: getRefreshToken({ key: 'REFRESH_TOKEN' }),
  });
  putAccessTokenOnSessionStorage({ key: 'ACCESS_TOKEN', token: response.data.accessToken });
};