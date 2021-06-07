import style from './style.module.scss';
import aaveLogo from 'assets/market_aave.png';
import yearnLogo from 'assets/market_yearn.png'
import { useMemo } from 'react';
import classes from 'utils/classes';

interface Props {
  market: 'aave' | 'yearn';
  className?: string;
}

const MarketName = ({ market, className }: Props) => {
  const { name, logo } = useMemo(() => {
    switch (market) {
      case 'aave':
        return { name: 'AAVE', logo: aaveLogo };
      case 'yearn':
        return { name: 'Yearn', logo: yearnLogo };
    }
  }, [market]);

  return (
    <div className={classes(style.market, className)}>
      <img src={logo} className={style.logo} />
      {name}
    </div>
  );
};

export default MarketName;
