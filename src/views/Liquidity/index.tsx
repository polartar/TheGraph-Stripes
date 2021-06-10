import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LiquidityTab from "./LiquidityTab";
import Panel from 'components/Panel';
import 'react-tabs/style/react-tabs.css';
import style from './style.module.scss';

const Liquidity = () => {
  return (
    <div className={style.panel}> 
      <Tabs defaultIndex={1}>
        <TabList className={style.tablist}>
          <Tab>Trade</Tab>
          <Tab>Liquidity</Tab>
        </TabList>

        <TabPanel>
          <Panel
            heading="Trade"
            subHeading=""
            actions={[ ]}
            className={style.panel}
          >
            </Panel>
        </TabPanel>
        <TabPanel>
          <LiquidityTab />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Liquidity;
