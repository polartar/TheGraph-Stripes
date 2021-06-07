import { createContext } from 'react';

export interface ModalsContextInterface {
  present: (element: JSX.Element) => void;
  pop: (count?: number) => void;
  clear: () => void;
}

const ModalContext = createContext<ModalsContextInterface>(null as any);

export default ModalContext;
