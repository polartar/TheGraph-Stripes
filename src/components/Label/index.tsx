import classes from 'utils/classes';
import style from './style.module.scss';

interface Props {
  text: string;
  className?: string;
}

const Label = ({ text, className }: Props) => {
  return <div className={classes(style.label, className)}>{text}</div>;
};

export default Label;
