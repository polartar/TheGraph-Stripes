import FieldWrapper, { FieldWrapperProps } from '../FieldWrapper';
import style from './style.module.scss';

interface Props extends FieldWrapperProps {
  min: number;
  max: number;
  valueFormat?: (val: string) => string;
}

const RangeInput = ({ min, max, valueFormat, ...fwProps }: Props) => {
  valueFormat = valueFormat ? valueFormat : (val) => val;

  return (
    <FieldWrapper {...fwProps}>
      <div className={style.wrapper}>
        <input type="range" min={min} max={max} className={style.input} />
        <span className={style.value}>{valueFormat('10')}</span>
      </div>
    </FieldWrapper>
  );
};

export default RangeInput;
