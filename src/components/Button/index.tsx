import classes from 'utils/classes';
import style from './style.module.scss';

interface Props {
  size?: 'small' | 'medium' | 'large';
  children?: any;
  onClick?: (e: any) => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'danger';
}

const Button = ({
  size = 'medium',
  children,
  onClick,
  className,
  variant = 'dark',
}: Props) => {
  return (
    <button
      className={classes(style.button, className, style[variant], {
        [style.small]: size === 'small',
        [style.medium]: size === 'medium',
        [style.large]: size === 'large',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
