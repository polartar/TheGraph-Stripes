import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from 'utils/classes';
import style from './style.module.scss';

interface Props {
  size?: 'small' | 'medium' | 'large';
  children?: any;
  onClick?: (e: any) => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'negative' | 'positive';
  block?: boolean;
  icon?: IconProp;
}

const Button = ({
  size = 'medium',
  children,
  onClick,
  className,
  variant = 'dark',
  block,
  icon
}: Props) => {
  return (
    <button
      className={classes(style.button, className, style[variant], {
        [style.small]: size === 'small',
        [style.medium]: size === 'medium',
        [style.large]: size === 'large',
        [style.block]: block
      })}
      onClick={onClick}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className={style.icon} />
      )}
      {children}
    </button>
  );
};

export default Button;
