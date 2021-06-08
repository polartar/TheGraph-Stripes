import React from 'react';
// import { ModalProvider } from '@pancakeswap/uikit'
import { Web3ReactProvider } from '@web3-react/core';
import { BrowserRouter } from 'react-router-dom';
import ModalPresenter from 'providers/ModalPresenter';
import MarketsProvider from 'providers/MarketsProvider';
import ApolloProvider from 'providers/ApolloProvider';
// import { HelmetProvider } from 'react-helmet-async'
// import { Provider } from 'react-redux'
// import { getLibrary } from 'utils/web3React'
// import { ThemeContextProvider } from 'contexts/ThemeContext'
// import { LanguageProvider } from 'contexts/Localization'
// import { RefreshContextProvider } from 'contexts/RefreshContext'
// import { ToastsProvider } from 'contexts/ToastsContext'
// import store from 'state'

function getLibrary(provider: any) {
  return provider; // this will vary according to whether you use e.g. ethers or web3.js
}

const Providers: React.FC = ({ children }) => {
  return (
    <ApolloProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MarketsProvider>
          <BrowserRouter>
            <ModalPresenter>{children}</ModalPresenter>
          </BrowserRouter>
        </MarketsProvider>
      </Web3ReactProvider>
    </ApolloProvider>
  );
};

export default Providers;
