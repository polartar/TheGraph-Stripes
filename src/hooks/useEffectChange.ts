import React, { useEffect, useRef } from 'react';

/**
 * Similar to `useEffect` but skips the first run.
 */
function useEffectChange(effect: React.EffectCallback, deps?: readonly any[]) {
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    return effect();
    // eslint-disable-next-line
  }, deps);
};

export default useEffectChange;
