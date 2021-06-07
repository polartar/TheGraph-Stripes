import style from './style.module.scss';
import bnbLogo from 'assets/bnb_logo.png';
import FieldWrapper, { FieldWrapperProps } from '../FieldWrapper';

interface Props extends FieldWrapperProps {
  balance?: number;
}

const CurrencyInput = ({ balance, ...fwProps }: Props) => {
  const hasBalance = balance !== undefined;

  return (
    <FieldWrapper
      {...fwProps}
      info={hasBalance && `Balance: ${balance?.toLocaleString()}`}
    >
      <div className={style.inputWrapper}>
        <input type="text" className={style.input} placeholder="0.0" />
        <div className={style.addon}>
          {hasBalance && (
            <button className={style.maxBtn} tabIndex={-1}>
              Max
            </button>
          )}
          <span className={style.currency}>
            <img src={bnbLogo} className={style.logo} />
            BUSD
          </span>
        </div>
      </div>
    </FieldWrapper>
  );
};

export default CurrencyInput;
