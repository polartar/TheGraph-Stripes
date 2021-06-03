import style from './style.module.scss';
import logo from 'assets/logo_dark.png';
import { NavLink } from 'react-router-dom';
import classes from 'utils/classes';

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <div className={classes(style.container, className)}>
      <div className={style.brand}>
        <NavLink to="/" className={style.logoLink}>
          <img src={logo} className={style.logoImg} />
        </NavLink>
      </div>
      <div className={style.content}>

      </div>
    </div>
  );
}

export default Header;
