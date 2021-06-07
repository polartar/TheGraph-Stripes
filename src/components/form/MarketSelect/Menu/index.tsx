import style from './style.module.scss';
import Modal from 'components/Modal';
import Button from 'components/Button';
import useModal from 'hooks/useModal';

const Menu = () => {
  const modal = useModal();

  return (
    <Modal title="Select a Market" size="small">
      <Modal.Body>
        <div className={style.menu}>

        </div>
      </Modal.Body>
      <Modal.Actions>
        <Button variant="secondary" onClick={modal.pop}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Menu;
