import style from './style.module.scss';
import aaveLogo from 'assets/market_aave.png';
import yearnLogo from 'assets/market_yearn.png'
import nerveLogo from 'assets/market_nerve.png';
import { useMemo } from 'react';
import classes from 'utils/classes';
import { faExpandAlt, faAngleRight}  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      default:
        return yearnLogo;
    }
  }, [market]);

  return (
    <div className={classes(style.market, className)}>
      <div className={style.name}>
        <img src={logo} className={style.logo} />
        {market}
        <FontAwesomeIcon icon={faAngleRight}/>
        yEth Vault
      </div>
      <FontAwesomeIcon icon={faExpandAlt} />
    </div>
  );
};

export default MarketName;
