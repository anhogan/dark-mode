import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [storedValue, setStoredValue] = useLocalStorage('dark-mode', 'toggle');
  
  useEffect(() => {
    const className = 'dark-mode';
    const element = window.document.body;
    if(!storedValue) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    };
  }, [storedValue]);

  return [storedValue, setStoredValue];
};

export default useDarkMode;