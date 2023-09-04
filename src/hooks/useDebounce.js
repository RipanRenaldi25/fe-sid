import { useEffect, useState } from 'react';

const useDebounce = (defaultValue, delay) => {
  const [debounceValue, setDebounceValue] = useState(defaultValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(defaultValue);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [defaultValue]);

  return debounceValue;
};

export default useDebounce;
