import { useCallback } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { NoBscProviderError } from '@binance-chain/bsc-connector';
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector';
import { setupNetwork } from 'utils/wallet';
import config from 'config';
import getConnector from 'utils/getConnector';

const connector = getConnector();

const useAuth = () => {
  // const dispatch = useAppDispatch();
  const { activate, deactivate } = useWeb3React();

  const login = useCallback(async () => {
    await activate(connector, async (error: Error) => {
      if (error instanceof UnsupportedChainIdError) {
        const hasSetup = await setupNetwork();
        if (hasSetup) {
          activate(connector);
        }
      } else {
        window.localStorage.removeItem(config.authedLocalStorageKey);
        if (
          error instanceof NoEthereumProviderError ||
          error instanceof NoBscProviderError
        ) {
          console.error('No provider was found');
        } else if (
          error instanceof UserRejectedRequestErrorInjected ||
          error instanceof UserRejectedRequestErrorWalletConnect
        ) {
          if (connector instanceof WalletConnectConnector) {
            const walletConnector = connector as WalletConnectConnector;
            walletConnector.walletConnectProvider = null;
          }
          console.error('Please authorize to access your account');
        } else {
          console.error(error.name, error.message);
        }
      }
    });

    window.localStorage.setItem(config.authedLocalStorageKey, 'true');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(config.authedLocalStorageKey);
    deactivate();
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
