import MarketsContext from 'contexts/MarketsContext';
import { useMarketsQuery } from 'graphql/types';
import { useEffect, useState } from 'react';

interface Props {
  children?: any;
}

const MarketsProvider = ({ children }: Props) => {
  const { loading, error, data } = useMarketsQuery();
  // const [markets, setMarkets] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setMarkets(randomNumber());
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <MarketsContext.Provider value={{ loading, data }}>
      {children}
    </MarketsContext.Provider>
  );
};

export default MarketsProvider;
