import style from './style.module.scss';
import {
  cloneElement,
  useState,
  useRef,
  useEffect,
  CSSProperties,
} from 'react';
import classes from 'utils/classes';
import { createPortal } from 'react-dom';
import getElOffset from 'utils/getElOffset';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

interface Props {
  children: JSX.Element;
  content: JSX.Element | string;
  position?: TooltipPosition;
  disabled?: boolean;
}

const Tooltip = ({ children, content, position = 'top', disabled }: Props) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [inlineStyle, setInlineStyle] = useState<CSSProperties>();
  const handleRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<any>(null);

  useEffect(() => {
    if (show) {
      positionTooltip();
    }
    // eslint-disable-next-line
  }, [show, content]);

  useEffect(() => {
    const el = handleRef.current;
    if (el === null) {
      return;
    }

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
    // eslint-disable-next-line
  }, [handleRef]);

  function positionTooltip() {
    const handle = handleRef.current,
      tooltip = tooltipRef.current,
      css: CSSProperties = {};

    if (handle === null) {
      return;
    }

    if (['top', 'bottom'].includes(position)) {
      css.left =
        getElOffset(handle, 'left') +
        handle.offsetWidth / 2 -
        tooltip.offsetWidth / 2;
    }

    if (['left', 'right'].includes(position)) {
      css.top =
        getElOffset(handle, 'top') +
        handle.offsetHeight / 2 -
        tooltip.offsetHeight / 2;
    }

    if ('top' === position) {
      css.top = getElOffset(handle, 'top') - tooltip.offsetHeight;
    }

    if ('bottom' === position) {
      css.top = getElOffset(handle, 'top') + handle.offsetHeight;
    }

    if ('left' === position) {
      css.left = getElOffset(handle, 'left') - tooltip.offsetWidth;
    }

    if ('right' === position) {
      css.left = getElOffset(handle, 'left') + handle.offsetWidth;
    }

    setInlineStyle(css);
    setVisible(true);
  }

  function onMouseEnter() {
    if (!disabled) {
      setShow(true);
    }
  }

  function onMouseLeave() {
    setShow(false);
    setVisible(false);
  }

  return (
    <>
      {cloneElement(children, { ref: handleRef })}
      {show &&
        createPortal(
          <div
            className={classes(style.tooltip, {
              [style.top]: position === 'top',
              [style.right]: position === 'right',
              [style.bottom]: position === 'bottom',
              [style.left]: position === 'left'
            })}
            style={{
              ...inlineStyle,
              visibility: visible ? 'visible' : 'hidden',
            }}
            ref={tooltipRef}
          >
            {content}
          </div>,
          document.body,
        )}
    </>
  );
};

export default Tooltip;
