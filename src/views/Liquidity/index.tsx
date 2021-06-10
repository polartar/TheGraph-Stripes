import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Liquidity;
