import { useField } from 'formik';
import FieldWrapper, { FieldWrapperProps } from '../FieldWrapper';
import style from './style.module.scss';

interface Props extends FieldWrapperProps {
  name: string;
  min: number;
  max: number;
  valueFormat?: (val: number) => string;
}

const RangeInput = ({
  name,
  min,
  max,
  valueFormat = (val) => `${val}`,
  ...fwProps
}: Props) => {
  const [field, meta, helpers] = useField<number>(name);

  return (
    <FieldWrapper {...fwProps}>
      <div className={style.wrapper}>
        <input
          type="range"
          min={min}
          max={max}
          className={style.input}
          {...field}
        />
        <span className={style.value}>{valueFormat(field.value)}</span>
      </div>
    </FieldWrapper>
  );
};

export default RangeInput;
