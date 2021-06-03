import style from './style.module.scss';
import Chart from 'components/Chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h1 className={style.heading}>
          Portfolio Value
          <small>Staking + Collateral + P&amp;L</small>
        </h1>
        <span className={style.value}>$12,430.20</span>
        <div className={style.change}>
          <span className={style.negative}>
            <FontAwesomeIcon icon={faCaretDown} />
            $1,000.00 (10%)
          </span>
          <span className={style.switch}>
            Past Week
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <div className={style.stats}>
          <Stat label="Margin Ratio" value="36.9%" />
          <Stat label="Total Exposure" value="$50,000.00" />
          <Stat label="Margin Ratio" value="3.69x" />
          <Stat label="24h Change" value="-$3,439.02" />
        </div>
      </div>
      <Chart className={style.chart} />
    </div>
  );
};

interface StatProps {
  label: string;
  value: string;
}

const Stat = ({ label, value }: StatProps) => {
  return (
    <div className={style.stat}>
      <span className={style.label}>{label}</span>
      <span className={style.value}>{value}</span>
    </div>
  );
};

export default Portfolio;
