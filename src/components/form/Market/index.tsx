import { useState } from 'react';
import { faExpandAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MarketName from 'components/MarketName';
import Button from 'components/Button';
import style from './style.module.scss';
import { Market as MarketType } from 'graphql/types';
import { toCurrency } from 'utils/formatters';

interface Props {
  loading?: boolean;
  liquidities?: MarketType[];
  removeLiquidity: Function;
}

const Market = ({ loading, liquidities, removeLiquidity}: Props) => {
  const [isExpand, setIsExpand] = useState(true);
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className={style.handle} >
        <div className={style.header}>
            <div className={style.main}>
                <div className={style.value}>
                <MarketName market="AAVE" />
                <FontAwesomeIcon icon={faAngleRight}/>
                USDC Deposit Rate
                </div>
                
            </div>
            <FontAwesomeIcon icon={faExpandAlt} className={style.caret} onClick={() => setIsExpand(!isExpand)}/>
      </div>
      {
          loading ? ( <div>Loading ....</div>)
           : (
                <div className={isExpand? style.body : style.hide}>
                    {
                        (liquidities.length!==0) && liquidities.map(liquidity => {
                            return <div key={liquidity.id} className={(liquidity.id === selectedId)? style.selected : style.liquiditySection} onClick={() => setSelectedId(liquidity.id)}>
                                <div className={style.item}>
                                    <div>Pooled BUSD:</div>
                                    <div>
                                        {toCurrency(liquidity.pool.stackedLiquidity)} 
                                    </div>                       
                                </div>
                                <div className={style.item}>
                                    <div>Your pool tokens:</div>
                                    <div>{liquidity.token.name ? liquidity.token.name : 123}</div>                       
                                </div>
                                <div className={style.item}>
                                    <div>Your pool share:</div>
                                    <div>10 %</div>                       
                                </div>
                                <div className={style.item}>
                                    <div>Your pool profit:</div>
                                    <div>{toCurrency(liquidity.pool.unrealizedProfit)} BUSD</div>                       
                                </div>
                            </div>
                        })
                    }
                    {
                        (liquidities.length!==0) &&
                        <Button variant="secondary" size="medium" className={style.removeButton} onClick={() => removeLiquidity(selectedId)}>
                        Remove
                        </Button>
                    }
                </div>
           )
      }
    </div>
  );
};

export default Market;
