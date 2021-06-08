import MarketsContext from 'contexts/MarketsContext';
import { useContext } from 'react';

function useMarkets() {
  return useContext(MarketsContext);
}

export default useMarkets;
