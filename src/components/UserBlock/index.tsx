import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import AccountModal from 'components/AccountModal';
import Button from 'components/Button';
import useAuth from 'hooks/useAuth';
import useModal from 'hooks/useModal';
import style from './style.module.scss';

const UserBlock = () => {
  const { login } = useAuth();
  const { account } = useWeb3React();
  const modal = useModal();

  function openAccount() {
    modal.present(<AccountModal />);
  }

  return (
    <div className={style.userBlock}>
      {account ? (
        <Button variant="primary" onClick={openAccount}>
          {truncateAccount(account)}
        </Button>
      ) : (
        <Button variant="primary" onClick={login}>
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

function truncateAccount(account: string) {
  const first4 = account.substr(0, 4);
  const last4 = account.substr(-4);
  return `${first4}...${last4}`;
}

export default UserBlock;
