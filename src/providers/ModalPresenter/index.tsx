import style from './style.module.scss';
import { useState, cloneElement } from 'react';
import ModalContext, { ModalsContextInterface } from 'contexts/ModalContext';
import classes from 'utils/classes';
import { createPortal } from 'react-dom';

interface Modal {
  element: JSX.Element;
  focused?: boolean;
  stashed?: boolean;
}

interface Props {
  children?: any;
}

// The ModalPresenter is our middleware component that will capture
// modal presentation calls and will append them to the list. The
// presenter can be nested in different levels and the parent that
// is closest to the child will capture the presentation.
const ModalPresenter = ({ children }: Props) => {
  const [modals, setModals] = useState<Modal[]>([]);

  const context: ModalsContextInterface = {
    present(element) {
      // Unfocus other modals
      const currentModals = modals.map((m) => {
        return { ...m, focused: false, stashed: true };
      });

      let newModals: Modal[];

      // Add new modal, but wait before focusing to enable css
      // transitions to activate. Only animate if we are adding to
      // the stack.
      if (currentModals.length > 0) {
        newModals = [...currentModals, { element, focused: true }];
        setModals([...currentModals, { element }]);
        setTimeout(() => {
          setModals(newModals);
        }, 50);
      } else {
        newModals = [...currentModals, { element, focused: true }];
        setModals(newModals);
      }
    },

    pop(count) {
      if (modals.length === 0) {
        return;
      }

      // Default number of modals to pop is 1
      if (!count || isNaN(count)) {
        count = 1;
      }

      // Remove last modal and focus previous one
      const newModals = modals.slice(0, -count);

      if (newModals.length > 0) {
        newModals[newModals.length - 1].focused = true;
        newModals[newModals.length - 1].stashed = false;
      }
      setModals(newModals);
    },

    clear() {
      if (modals.length === 0) {
        return;
      }
      setModals([]);
    },
  };

  function isPresenting() {
    return modals.length > 0;
  }

  return (
    <ModalContext.Provider value={context}>
      {children}
      {createPortal(
        <div
          className={classes(style.presenter, {
            [style.presenting]: isPresenting(),
          })}
        >
          {modals.map((modal, i) => (
            <div
              className={classes(style.modal, {
                [style.focused]: modal.focused,
                [style.stashed]: modal.stashed,
              })}
              key={i}
            >
              {cloneElement(modal.element)}
            </div>
          ))}
        </div>,
        document.body,
      )}
    </ModalContext.Provider>
  );
};

export default ModalPresenter;
