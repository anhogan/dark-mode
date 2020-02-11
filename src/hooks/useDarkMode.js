import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode-enabled');
  
  useEffect(() => {
    const className = 'dark-mode';
    const element = window.document.body;
    if(darkMode === 'dark-mode-enabled') {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    };
  }, [darkMode]);

  return [storedValue, setValue];
};

export default useDarkMode;