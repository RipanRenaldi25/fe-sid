import REQUESTS_TYPE from './RequestsType';

const initialState = {
  isFetching: false,
  error: '',
  requests: [],
  requestSearched: [],
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
        requests: state.requests.map((request) => {
          if (request.request_id === action.payload.id) {
            return {
              ...request,
              processed: action.payload.processed,
            };
          }
          return request;
        }),
        requestSearched: state.requestSearched.map((request) => ({
          ...request,
          processed: request.request_id === action.payload.id ? action.payload.processed : request.processed,
        })),
      };
    case REQUESTS_TYPE.setRequestSearch:
      return {
        ...state,
        requestSearched: [...action.payload.request],
      };
    case REQUESTS_TYPE.removeSetRequestSearch:
      return {
        ...state,
        requestSearched: [],
      };
    default:
      return state;
  }
};

export default requestReducer;
