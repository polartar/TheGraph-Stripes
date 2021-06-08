import style from './style.module.scss';
import aaveLogo from 'assets/market_aave.png';
import yearnLogo from 'assets/market_yearn.png'
import nerveLogo from 'assets/market_nerve.png';
import { useMemo } from 'react';
import classes from 'utils/classes';

interface Props {
  market: 'AAVE' | 'Yearn' | 'Nerve';
  className?: string;
}

const MarketName = ({ market, className }: Props) => {
  const logo = useMemo(() => {
    switch (market) {
      case 'AAVE':
        return aaveLogo;
      case 'Yearn':
        return yearnLogo;
      case 'Nerve':
        return nerveLogo;
    }
  }, [market]);

  return (
    <div className={classes(style.market, className)}>
      <img src={logo} className={style.logo} />
      {market}
    </div>
  );
};

export default MarketName;
