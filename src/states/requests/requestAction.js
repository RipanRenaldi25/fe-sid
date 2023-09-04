import { changeStatusProcess, deleteCompressedDocument, downloadMultipleDocument, getRequests, getSpecificRequest } from '../../utils/utilities';
import REQUESTS_TYPE from './RequestsType';

export const getRequestsActionCreator = (requests) => ({
  type: REQUESTS_TYPE.getRequests,
  payload: {
    requests,
  },
});

export const setIsFetchingActionCreator = (isFetching) => ({
  type: REQUESTS_TYPE.setIsFetching,
  payload: {
    isFetching,
  },
});

export const getSpecificRequestActionCreator = (request) => ({
  type: REQUESTS_TYPE.getSpecificRequests,
  payload: {
    request,
  },
});

export const asyncGetSpecificRequest = (requestId) => async (dispatch) => {
  try {
    const { data } = await getSpecificRequest(requestId);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

export const updateSpecificRequestActionCreator = (id, newData) => {
  return {
    type: REQUESTS_TYPE.updateSpecificRequest,
    payload: {
      id,
      newData
    }
  }
}

export const asyncDownloadDocuments = (requestId) => async (dispatch) => {
  try {
    const response = await downloadMultipleDocument(requestId);
    const blob = response.data;
    const url = URL.createObjectURL(new Blob([blob]));

    const a = document.createElement('a');
    a.href = url;
    a.download=`doc-${requestId}.zip`
    a.click();
    URL.revokeObjectURL(url);
    dispatch(asyncChangeStatusDocument(requestId, 'processed'));  
    await deleteCompressedDocument(); 
  } catch (e) {
    console.log(e);
  }
};



export const asyncChangeStatusDocument = (requestId, status) => async (dispatch) => {
  try{
    const response = await changeStatusProcess(requestId, status);
    const {data} = response.data;
    dispatch(updateSpecificRequestActionCreator(requestId, data));
  }catch(e){
    console.log(e);
  }
}

export const asyncGetRequests = () => async (dispatch) => {
  dispatch(setIsFetchingActionCreator(true));
  try {
    const response = await getRequests();
    const { data: { data } } = response;
    dispatch(getRequestsActionCreator(data));
  } catch (e) {
    console.log({ getRequest: e });
  }
  dispatch(setIsFetchingActionCreator(false));
};
