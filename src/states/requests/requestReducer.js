import REQUESTS_TYPE from './RequestsType';

const initialState = {
  isFetching: false,
  error: '',
  requests: [],
};

const requestReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUESTS_TYPE.getRequests:
      return {
        ...state,
        requests: action.payload.requests,
      };
    case REQUESTS_TYPE.setIsFetching:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    case REQUESTS_TYPE.updateSpecificRequest:
      return {
        ...state,
        requests: state.requests.map((request) => ({
          ...request,
          processed: request.request_id === action.payload.id ? action.payload.newData.processed : request.processed
        }))
      }
    default:
      return state;
  }
};

export default requestReducer;
