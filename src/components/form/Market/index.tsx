import { useState } from 'react';
import { faExpandAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MarketName from 'components/MarketName';
import Button from 'components/Button';
import classes from 'utils/classes';
import style from './style.module.scss';

interface Props {
  className?: string;
  bodyItems?: Array<{name, value}>;
}

const Market = ({ className, bodyItems}: Props) => {
  const [isExpand, setIsExpand] = useState(true);

  return (
    <div className={classes(style.handle, className)} onClick={() => setIsExpand(!isExpand)}>
        <div className={style.header}>
            <div className={style.main}>
                <div className={style.value}>
                <MarketName market="AAVE" />
                <FontAwesomeIcon icon={faAngleRight} />
                USDC Deposit Rate
                </div>
                
            </div>
            <FontAwesomeIcon icon={faExpandAlt} className={style.caret} />
      </div>
      <div className={isExpand? style.body : style.hide}>
          {
          bodyItems?.map(item => {
              return (
                  <div key={item.name} className={style.bodyItem}>
                      <div>{item.name}:</div>
                      <div>{item.value}</div>                          
                  </div>
              )
          })
          }
          {
              bodyItems?.length &&
              <Button variant="secondary" size="medium">
                Remove
               </Button>
          }
      </div>
    </div>
  );
};

function randomNumber() {
  return Math.floor(Math.random() * (1000 - 100) + 100) / 100;
}

export default Market;
