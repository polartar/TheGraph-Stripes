import Label from 'components/Label';
import Signum from 'components/Signum';
import style from './style.module.scss';

interface Props {
  amount: string;
  code: string;
  showChange?: boolean;
}

const Currency = ({ amount, code, showChange }: Props) => {
  return (
    <div className={style.container}>
      {showChange ? <Signum value={amount} /> : amount}
      <Label text={code} className={style.label} />
    </div>
  );
};

export default Currency;
