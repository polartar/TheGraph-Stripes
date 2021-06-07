import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MarketName from 'components/MarketName';
import useModal from 'hooks/useModal';
import classes from 'utils/classes';
import Menu from './Menu';
import style from './style.module.scss';

interface Props {
  className?: string;
}

const MarketSelect = ({ className }: Props) => {
  const modal = useModal();

  function openMenu() {
    modal.present(<Menu />);
  }

  return (
    <div className={classes(style.handle, className)} onClick={openMenu}>
      <div className={style.main}>
        <div className={style.value}>
          <MarketName market="aave" />
          <FontAwesomeIcon icon={faAngleRight} />
          USDC Deposit Rate
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleDown} className={style.caret} />
    </div>
  );
};

export default MarketSelect;
