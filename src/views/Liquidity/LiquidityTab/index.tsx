import style from '../style.module.scss';
import PanelWithButton from 'components/PanelWithButton';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import Market from 'components/form/Market';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import MarketName from 'components/MarketName';

const Liquidity = () => {
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
    >
      <div  className={style.subheader}>
        <h2 className={style.subheading}>Your Liquidity</h2>
        
        <div className={style.actions}>
            <button className={style.action} >
              <FontAwesomeIcon icon={faQuestionCircle} />
            </button>
        </div>
      </div>
      <Market />
      <MarketName market='Yearn' className='wrapper'/>
    </PanelWithButton>
  )
}

export default Liquidity;
