import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LiquidityTab from "./LiquidityTab";

import 'react-tabs/style/react-tabs.css';
import style from './style.module.scss';

const Liquidity = () => {
  return (
    <div className={style.panel}> 
      <Tabs className='tabs'>
        <TabList>
          <Tab>Trade</Tab>
          <Tab>Liquidity</Tab>
        </TabList>

        <TabPanel>
          Trade
        </TabPanel>
        <TabPanel>
          <LiquidityTab />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Liquidity;
