import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LiveSignum from 'components/LiveSignum';
import MarketName from 'components/MarketName';
import useModal from 'hooks/useModal';
import { useEffect, useState } from 'react';
import classes from 'utils/classes';
import Menu from './Menu';
import style from './style.module.scss';

interface Props {
  className?: string;
}

const MarketSelect = ({ className }: Props) => {
  const [marketRate, setMarketRate] = useState('6.54%');
  const [oracleRate, setOracleRate] = useState('14.32%');
  const modal = useModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketRate(`${(6 + randomNumber()).toFixed(2)}%`);
      setOracleRate(`${(12 + randomNumber()).toFixed(2)}%`);
    }, 2000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  function openMenu() {
    modal.present(<Menu />);
  }

  return (
    <div className={classes(style.handle, className)} onClick={openMenu}>
      <div className={style.main}>
        <div className={style.value}>
          <MarketName market="AAVE" />
          <FontAwesomeIcon icon={faAngleRight} />
          USDC Deposit Rate
        </div>
        <div className={style.rates}>
          <div className={style.rate}>
            <span className={style.rateLabel}>Oracle (Floating) Rate</span>
            <LiveSignum value={oracleRate} className={style.rateAmount} />
          </div>
          <div className={style.rate}>
            <span className={style.rateLabel}>Market (Fixed) Rate</span>
            <LiveSignum value={marketRate} className={style.rateAmount} />
          </div>
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleDown} className={style.caret} />
    </div>
  );
};

function randomNumber() {
  return Math.floor(Math.random() * (1000 - 100) + 100) / 100;
}

export default MarketSelect;
