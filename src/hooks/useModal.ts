import ModalContext from 'contexts/ModalContext';
import { useContext } from 'react';

function useModal() {
  return useContext(ModalContext);
}

export default useModal;
