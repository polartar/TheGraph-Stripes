import style from './style.module.scss';
import Panel from 'components/Panel';
import { faArrowUp, faHistory } from '@fortawesome/free-solid-svg-icons';
import useModal from 'hooks/useModal';
import HistoryModal from './HistoryModal';
import { Form, Formik } from 'formik';
import TradeFields from './TradeFields';
import Button from 'components/Button';

export interface FormValues {
  collateral: string;
  leverage: number;
  position: string;
}

const Trade = () => {
  const modal = useModal();

  const initialValues: FormValues = {
    collateral: '',
    leverage: 5,
    position: '',
  };

  function showHistory() {
    modal.present(<HistoryModal />);
  }

  function handleSubmit(values: FormValues) {
    console.log('submit', values);
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <TradeFields />
          <Button variant="positive" size="large" icon={faArrowUp} block>
            Open Long Position
          </Button>
        </Form>
      </Formik>
    </Panel>
  );
};

export default Trade;
