import { useWeb3React } from '@web3-react/core';
import Button from 'components/Button';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';

const AccountModal = () => {
  const modal = useModal();
  const { account, deactivate } = useWeb3React();

  function logout() {
    deactivate();
    modal.pop();
  }

  return (
    <Modal title="Your Wallet">
      <Modal.Body>
        <p>{account}</p>
        <Button variant="danger" onClick={logout}>Logout</Button>
      </Modal.Body>
    </Modal>
  );
};

export default AccountModal;
