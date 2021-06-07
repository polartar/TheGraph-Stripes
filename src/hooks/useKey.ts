import { useEffect } from 'react';

export enum Key {
  Escape = 27,
  Up = 38,
  Down = 40,
  Enter = 13,
}

const useKey = (key: Key | Key[], handler: (e?: KeyboardEvent) => void) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (
        (Array.isArray(key) && key.includes(e.keyCode)) ||
        e.keyCode === key
      ) {
        handler(e);
      }
    };

    document.addEventListener('keydown', handleKeydown, false);
    return () => {
      document.removeEventListener('keydown', handleKeydown, false);
    };
  }, [handler, key]);
};

export default useKey;
