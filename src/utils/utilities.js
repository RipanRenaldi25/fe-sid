import axios from 'axios';

// username, password, role, name, nik
export const registerUser = async ({
  username, password, name, nik, role,
}) => {
  const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/register`, {
    username,
    password,
    name,
    nik,
    role,
  });
  console.log({ response });

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
    console.log('token tidak ditemukan');
    return;
  }
  return JSON.parse(sessionStorage.getItem(key));
};

export const getRefreshToken = ({ key }) => {
  if (!localStorage.getItem(key)) {
    console.log('Refresh token tidak ditemukan');
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
