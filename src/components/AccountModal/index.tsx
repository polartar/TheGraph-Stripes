import { useWeb3React } from '@web3-react/core';
import Button from 'components/Button';
import Modal from 'components/Modal';
import useAuth from 'hooks/useAuth';
import useModal from 'hooks/useModal';

const AccountModal = () => {
  const modal = useModal();
  const { logout } = useAuth();
  const { account } = useWeb3React();

  function doLogout() {
    logout();
    modal.pop();
  }

  return (
    <Modal title="Your Wallet">
      <Modal.Body>
        <p>{account}</p>
        <Button variant="negative" onClick={doLogout}>Logout</Button>
      </Modal.Body>
    </Modal>
  );
};

export default AccountModal;
