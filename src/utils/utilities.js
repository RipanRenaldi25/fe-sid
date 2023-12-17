import axios, { all } from 'axios';
import jszip from 'jszip';
import { logoutUser, setIsLogin } from '../states';

export const registerUser = async ({
  username, password, name, nik, role = '1', phoneNumber,
}) => {
  let roleId = null;
  if (role === 'user') {
    roleId = '1';
  } else {
    roleId = '2';
  }
  const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {
    username,
    password,
    name,
    nik,
    roleId,
    phoneNumber,
  });

  return response.data;
};

export const login = async ({ username, password }) => {
  const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, { username, password });

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
    await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/auth/${getRefreshToken({ key: 'REFRESH_TOKEN' })}`);
  } catch (e) {
    console.log(e);
  }
  removeAccessToken({ key: 'ACCESS_TOKEN' });
  removeRefreshToken({ key: 'REFRESH_TOKEN' });
  removeAccessToken({ key: 'USER' });
};

export const updateAccessToken = async () => {
  const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/auth`, {
    refreshToken: getRefreshToken({ key: 'REFRESH_TOKEN' }),
  });
  putAccessTokenOnSessionStorage({ key: 'ACCESS_TOKEN', token: response.data.accessToken });
};

export const getRequests = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/requests`, {
    headers: {
      Authorization: `BEARER ${getAccessToken({ key: 'ACCESS_TOKEN' })}`,
    },
  });
  return response;
};

export const getSpecificRequest = async (requestId) => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/requests/${requestId}`, {
    headers: {
      Authorization: `BEARER ${getAccessToken({ key: 'ACCESS_TOKEN' })}`,
    },
  });
  return response;
};

export const downloadMultipleDocument = async (requestId) => {
  const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/documents/downloads`, {
    request_id: requestId,
  }, {
    headers: {
      Authorization: `BEARER ${getAccessToken({ key: 'ACCESS_TOKEN' })}`,
    },
    responseType: 'blob',
  });
  return response;
};

export const changeStatusProcess = async (requestId, process) => {
  const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/requests/${requestId}`, {
    process,
  }, {
    headers: {
      Authorization: `BEARER ${getAccessToken({ key: 'ACCESS_TOKEN' })}`,
    },
  });
  return response;
};

export const deleteCompressedDocument = async () => {
  const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/documents/compress`, {
    headers: {
      Authorization: `BEARER ${getAccessToken({ key: 'ACCESS_TOKEN' })}`,
    },
  });
  return response;
};

export const searchRequest = async ({ keyword, date, status }) => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/requests/search?keyword=${keyword}&date=${date}&status=${status}`, {
    headers: {
      Authorization: `BEARER ${getAccessToken({ key: 'ACCESS_TOKEN' })}`,
    },
  });

  return response;
};

export const getUsers = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/users`, {
    headers: {
      Authorization: `BEARER ${getAccessToken({ key: 'ACCESS_TOKEN' })}`,
    },
  });
  return response;
};

export const getUserByNIK = async (nik) => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/user/${nik}`, {
    headers: {
      Authorization: `BEARER ${getAccessToken({ key: 'ACCESS_TOKEN' })}`,
    },
  });
  return response;
};

export const getDocuments = async (requestId) => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/requests/${requestId}`, {
    headers: {
      Authorization: `BEARER ${getAccessToken({ key: 'ACCESS_TOKEN' })}`,
    },
  });

  return response.data;
};

export const getBlobImages = async (imageUrls) => {
  const allPromises = imageUrls.map(async (image) => {
    const response = await fetch(image.url);
    const blob = await response.blob();
    return {
      imageUrl: image.url,
      blob,
    };
  });
  return Promise.all(allPromises);
};

const executeDownload = async (blobs) => {
  const zipper = new jszip();
  blobs.forEach(({ imageUrl, blob }) => {
    const splitedFile = imageUrl.split('/');
    const fileName = splitedFile[splitedFile.length - 1];
    zipper.file(fileName, blob);
  });
  const zipBlob = await zipper.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(zipBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'test.zip';
  a.click();
  URL.revokeObjectURL(url);
};

export default executeDownload;
