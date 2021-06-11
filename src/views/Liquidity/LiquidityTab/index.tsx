import style from '../style.module.scss';
import PanelWithButton from 'components/PanelWithButton';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import Market from 'components/form/Market';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import MarketNameExpand from 'components/MarketNameExpand';
import useMarkets from 'hooks/useMarkets';
import { Market as MarketType } from 'graphql/types';
import { useEffect, useState } from 'react';

const Liquidity = () => {
  const { data } = useMarkets();
  const [loading, setLoading] = useState(true);
  const [liquidities, setLiquidities] = useState([] as Array<MarketType>)
  const [liquidity, setLiquidity] = useState({} as MarketType)

  useEffect(() => {
    if (!data) {
      return;
    }
    
    const tmpData = data.markets[randomNumber(data.markets.length)];
    setLiquidities([tmpData]);
    setLiquidity(tmpData);
    setLoading(false);
  }, [data])

  const addLiquidity = () => {
    liquidities.push({
      ...liquidity,
      id: new Date().getTime() + '0'
    });
    setLiquidities(liquidities.slice());
  }

  const removeLiquidity = (id) => {
    if (!id) {
        return;
    }
    const arr = liquidities.filter(item => item.id !== id);
    setLiquidities(arr);
  } 

  const initLiquidity = () => {
    setLiquidities([liquidity]);
  }
  return (
    <PanelWithButton
      heading="Liquidity"
      subHeading="Add liquidity to receive LP tokens"
      buttonName="Add Liquidity"
      actions={[
        {
          icon: faHistory,
          onClick: () => {},
        },
      ]}
      className={style.panel}
      addLiquidity={addLiquidity}
      initLiquidity={initLiquidity}
    >
      <div  className={style.subheader}>
        <h2 className={style.subheading}>Your Liquidity</h2>
        
        <div className={style.actions}>
            <button className={style.action} >
              <FontAwesomeIcon icon={faQuestionCircle} />
            </button>
        </div>
      </div>
      {
        liquidities.map(item => {
          return (
            <Market loading={loading} liquidity={item} removeLiquidity={removeLiquidity}/>
          )
        })
      }
     </PanelWithButton>
  )
}

function randomNumber(len) {
  return Math.floor(Math.random() * len);
}
export default Liquidity;
