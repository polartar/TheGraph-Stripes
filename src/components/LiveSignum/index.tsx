import style from './style.module.scss';
import {
  faCaretDown,
  faCaretUp,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from 'utils/classes';

interface Props {
  value: string;
  className?: string;
}

const LiveSignum = ({ value, className }: Props) => {
  const lastValue = useRef(parseFloat(value));
  const [direction, setDirection] = useState<'up' | 'down'>();

  useEffect(() => {
    const floatVal = parseFloat(value);

    if (floatVal > lastValue.current) {
      setDirection('up');
    } else if (floatVal < lastValue.current) {
      setDirection('down');
    }

    lastValue.current = floatVal;
  }, [value]);

  if (direction === 'up') {
    return (
      <span className={classes(style.positive, className)}>
        <FontAwesomeIcon icon={faCaretUp} className={style.icon} />
        {value}
      </span>
    );
  }

  if (direction === 'down') {
    return (
      <span className={classes(style.negative, className)}>
        <FontAwesomeIcon icon={faCaretDown} className={style.icon} />
        {value}
      </span>
    );
  }

  return (
    <span className={className}>
      <FontAwesomeIcon icon={faCaretUp} className={style.icon} />
      {value}
    </span>
  );
};

export default LiveSignum;
