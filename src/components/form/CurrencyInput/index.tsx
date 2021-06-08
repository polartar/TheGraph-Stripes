import style from './style.module.scss';
import bnbLogo from 'assets/bnb_logo.png';
import FieldWrapper, { FieldWrapperProps } from '../FieldWrapper';
import { useField } from 'formik';

interface Props extends FieldWrapperProps {
  name: string;
  balance?: number;
}

const CurrencyInput = ({ name, balance, ...fwProps }: Props) => {
  const hasBalance = balance !== undefined;
  const [field, meta, helpers] = useField<string>(name);

  function handleChange(e: any) {
    const value = e.target.value as string;

    if (value.match(/^(\d+)?\.?(\d+)?$/)) {
      helpers.setValue(value);
    }
  }

  function max(e: any) {
    e.preventDefault();
    helpers.setValue(`${balance}`);
  }

  return (
    <FieldWrapper
      {...fwProps}
      info={hasBalance && `Balance: ${balance?.toLocaleString()}`}
    >
      <div className={style.inputWrapper}>
        <input
          type="text"
          className={style.input}
          placeholder="0.0"
          {...field}
          onChange={handleChange}
        />
        <div className={style.addon}>
          {hasBalance && (
            <button className={style.maxBtn} tabIndex={-1} onClick={max}>
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
