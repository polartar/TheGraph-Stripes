import classes from 'utils/classes';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type SidebarNavItems = {
  to: string;
  text: string;
  icon: IconProp;
}[];

interface Props {
  className?: string;
  navItems: SidebarNavItems;
}

const Sidebar = ({ className, navItems }: Props) => {
  return (
    <div className={classes(style.container, className)}>
      <ul className={style.nav}>
        {navItems.map((item, i) => (
          <li className={style.navItem} key={i}>
            <NavLink to={item.to} activeClassName={style.active}>
              <FontAwesomeIcon icon={item.icon} className={style.icon} />
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
