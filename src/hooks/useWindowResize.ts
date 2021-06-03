import { useEffect } from 'react';

function useWindowResize(callback: (window?: Window) => void) {
  const onWindowResize = () => {
    callback(window);
  };

  const hookWindowEvents = () => {
    window.addEventListener('resize', onWindowResize);
    onWindowResize();
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  };

  useEffect(hookWindowEvents, []);
}

export default useWindowResize;
