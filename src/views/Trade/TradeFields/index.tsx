import CurrencyInput from 'components/form/CurrencyInput';
import MarketSelect from 'components/form/MarketSelect';
import RangeInput from 'components/form/RangeInput';
import { useFormikContext } from 'formik';
import useWeb3 from 'hooks/useWeb3';
import { useEffect, useRef } from 'react';
import { FormValues } from '..';

const TradeFields = () => {
  const form = useFormikContext<FormValues>();
  const ignoreChange = useRef<string>();
  const { account, library } = useWeb3();

  useEffect(() => {
    if (!library) {
      return;
    }

    // console.log(account, library.getBalance);

    // console.log();
    library.eth.getBalance(account).then(res => {
      console.log(res);
    })
  }, [library]);

  // Bind collateral and leverage to position
  useEffect(() => {
    if (ignoreChange.current === 'collateral') {
      ignoreChange.current = null;
      return;
    }

    const { collateral, leverage } = form.values;
    const position =
      collateral !== '' ? `${parseFloat(collateral) * leverage}` : '';
    form.setFieldValue('position', position);

    ignoreChange.current = 'position';
  }, [form.values.collateral, form.values.leverage]);

  // Bind position to collateral
  useEffect(() => {
    if (ignoreChange.current === 'position') {
      ignoreChange.current = null;
      return;
    }

    const { position, leverage } = form.values;
    const collateral = position !== '' ? `${parseFloat(position) / leverage}` : '';
    form.setFieldValue('collateral', collateral);

    ignoreChange.current = 'collateral';
  }, [form.values.position]);

  return (
    <>
      <MarketSelect className="mbm" />
      <CurrencyInput
        name="position"
        label="Position Size"
        join="bottom"
        helpText="Position size = (collateral - our fee) * leverage."
      />
      <RangeInput
        name="leverage"
        label="Leverage"
        min={1}
        max={10}
        valueFormat={(val) => `${val}x`}
        join="both"
      />
      <CurrencyInput
        name="collateral"
        label="Collateral"
        join="top"
        balance={12300.22}
        className="mbm"
      />
    </>
  );
};

export default TradeFields;
