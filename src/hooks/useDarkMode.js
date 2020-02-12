import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
  const [storedValue, setStoredValue] = useLocalStorage('dark-mode', false);
  
  useEffect(() => {
    const className = 'dark-mode';
    const element = window.document.body;
    if(storedValue) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    };
  }, [storedValue]);

  return [storedValue, setStoredValue];
};

export default useDarkMode;