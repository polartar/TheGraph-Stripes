import style from './style.module.scss';
import Panel from 'components/Panel';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import useModal from 'hooks/useModal';
import HistoryModal from './HistoryModal';
import MarketSelect from 'components/form/MarketSelect';
import CurrencyInput from 'components/form/CurrencyInput';
import RangeInput from 'components/form/RangeInput';

const Trade = () => {
  const modal = useModal();

  function showHistory() {
    modal.present(<HistoryModal />);
  }

  return (
    <Panel
      heading="Exchange"
      subHeading="Trade swaps in an instant"
      actions={[
        {
          icon: faHistory,
          onClick: showHistory,
        },
      ]}
      className={style.panel}
    >
      <MarketSelect className="mbm" />
      <CurrencyInput label="Collateral" join="bottom" balance={12300.22} />
      <RangeInput
        label="Leverage"
        min={1}
        max={10}
        valueFormat={(val) => `${val}x`}
        join="both"
      />
      <CurrencyInput label="Position Size" join="top" helpText="Your position size is (collateral - our fee) * leverage." />
    </Panel>
  );
};

export default Trade;
