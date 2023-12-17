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
      console.log(action.payload);
      return {
        ...state,
        requests: state.requests.map((request) => {
          console.log({ request });
          if (request.id === action.payload.id) {
            console.log('true');
            return {
              ...request,
              process: action.payload.process,
            };
          }
          return request;
        }),
        requestSearched: state.requestSearched.map((request) => ({
          ...request,
          process: request.id === action.payload.id ? action.payload.process : request.process,
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
