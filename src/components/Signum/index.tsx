import style from './style.module.scss';

interface Props {
  value: string;
}

const Signum = ({ value }: Props) => {
  const positive = value[0] !== '-';

  if (positive) {
    return <span className={style.positive}>{value}</span>;
  }

  return <span className={style.negative}>{value}</span>;
};

export default Signum;
