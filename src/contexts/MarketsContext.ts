import { MarketsQuery } from 'graphql/types';
import { createContext } from 'react';

export interface MarketsContextInterface {
  loading: boolean;
  data: MarketsQuery;
}

const MarketsContext = createContext<MarketsContextInterface>(null);

export default MarketsContext;
