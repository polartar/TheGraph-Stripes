import { useEffect } from 'react';
import useAuth from 'hooks/useAuth';
import getConnector from 'utils/getConnector';
import config from 'config';

const connector = getConnector();

const useEagerConnect = () => {
  const { login } = useAuth();

  useEffect(() => {
    if (!window.localStorage.getItem(config.authedLocalStorageKey)) {
      return;
    }

    connector.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        login();
      }
    });
  }, [login]);
};

export default useEagerConnect;
