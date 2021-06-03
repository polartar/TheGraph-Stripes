import Header from './Header'
import Sidebar, { SidebarNavItems } from './Sidebar'
import style from './style.module.scss'

interface Props {
  children?: any
  navItems: SidebarNavItems
}

const Dashboard = ({ children, navItems }: Props) => {
  return (
    <div className={style.container}>
      <Header className={style.header} />
      <div className={style.main}>
        <Sidebar className={style.sidebar} navItems={navItems} />
        <div className={style.content}>{children}</div>
      </div>
    </div>
  )
}

export default Dashboard
