import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useFormInput = (stateKey, actionCreator) => {
  const { form, auth } = useSelector((states) => states);
  const dispatch = useDispatch();
  const onChangeInputHandler = (payload) => {
    dispatch(actionCreator.onChangeInput(payload));
  };

  const clearInputValue = () => {
    dispatch(actionCreator.onClearAction());
  };

  const asyncEventHandler = (payload) => {
    dispatch(actionCreator.onAsyncAction(payload));
    clearInputValue();
  };

  return [form[stateKey], { onChangeInputHandler, asyncEventHandler }];
};

export default useFormInput;
