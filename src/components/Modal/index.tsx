import style from './style.module.scss';
import { ReactNode } from 'react';
import classes from 'utils/classes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useKey, { Key } from 'hooks/useKey';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import useModal from 'hooks/useModal';

export type ModalSize = 'large' | 'medium' | 'small';

interface Props {
  title?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  size?: ModalSize;
  /** If provided then you must handle the modal pop manually */
  onClose?: () => void;
}

const Modal = ({
  title,
  children,
  className,
  headerClassName,
  size = 'medium',
  onClose,
}: Props) => {
  const modal = useModal();

  function close() {
    if (!!onClose) {
      onClose();
    } else {
      modal.pop();
    }
  }

  useKey(Key.Escape, () => {
    close();
  });

  function renderCloseBtn() {
    return (
      <button className={style.close} onClick={close}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    );
  }

  return (
    <div
      className={classes(
        style.modal,
        {
          [style.small]: size === 'small',
          [style.medium]: size === 'medium',
          [style.large]: size === 'large',
        },
        className,
      )}
    >
      <div className={classes(style.header, headerClassName)}>
        <h3 className={style.heading}>{title}</h3>
        {renderCloseBtn()}
      </div>
      {children}
    </div>
  );
};

interface ModalBodyProps {
  children?: any;
  className?: string;
}

Modal.Body = ({ children, className }: ModalBodyProps) => (
  <div className={classes(style.body, className)}>{children}</div>
);

interface ModalActionsProps {
  children: ReactNode;
  className?: string;
}

Modal.Actions = ({ children, className }: ModalActionsProps) => (
  <div className={classes(style.actions, className)}>{children}</div>
);

export default Modal;
