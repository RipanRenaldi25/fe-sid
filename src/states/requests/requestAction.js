import {
  changeStatusProcess, deleteCompressedDocument, downloadMultipleDocument, getRequests, searchRequest,
} from '../../utils/utilities';
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

export const updateSpecificRequestActionCreator = (id, processed) => ({
  type: REQUESTS_TYPE.updateSpecificRequest,
  payload: {
    id,
    processed,
  },
});

export const setRequestSearch = (request) => ({
  type: REQUESTS_TYPE.setRequestSearch,
  payload: {
    request,
  },
});

export const removeSearchRequest = () => ({
  type: REQUESTS_TYPE.removeSetRequestSearch,
});

// ----------------------------------------------------------------------------------- //

export const asyncChangeStatusDocument = (requestId, status) => async (dispatch) => {
  try {
    await changeStatusProcess(requestId, status);
    dispatch(updateSpecificRequestActionCreator(requestId, status));
  } catch (e) {
    console.log(e);
  }
};

export const asyncDownloadDocuments = (requestId) => async (dispatch) => {
  try {
    const response = await downloadMultipleDocument(requestId);
    const blob = response.data;
    const url = URL.createObjectURL(new Blob([blob]));

    const a = document.createElement('a');
    a.href = url;
    a.download = `doc-${requestId}.zip`;
    a.click();
    URL.revokeObjectURL(url);
    dispatch(asyncChangeStatusDocument(requestId, 'processed'));
    await deleteCompressedDocument();
    dispatch(updateSpecificRequestActionCreator(requestId, 'procesesd'));
  } catch (e) {
    console.log(e);
  }
};

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

export const asyncSearchRequest = ({ keyword, date, status }) => async (dispatch) => {
  try {
    const { data: response } = await searchRequest({ keyword, date, status });
    dispatch(setRequestSearch(response.data));
  } catch (e) {
    console.log(e);
  }
};
