import style from './style.module.scss';
import Portfolio from './components/Portfolio';
import Positions from './components/Positions';
import Markets from './components/Markets';

const Overview = () => {
  return (
    <div>
      <Portfolio className={style.portfolio} />
      <Positions />
      <Markets />
    </div>
  );
};

export default Overview;
