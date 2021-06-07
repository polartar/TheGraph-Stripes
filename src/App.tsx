import {
  faExchangeAlt,
  faTachometerAlt,
  faTint,
  faUmbrella,
} from '@fortawesome/free-solid-svg-icons';
import { Redirect, Route, Switch } from 'react-router';
import Insurance from 'views/Insurance';
import Liquidity from 'views/Liquidity';
import NotFound from 'views/NotFound';
import Overview from 'views/Overview';
import Trade from 'views/Trade';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Dashboard
      navItems={[
        { text: 'Overview', icon: faTachometerAlt, to: `/overview` },
        { text: 'Trade', icon: faExchangeAlt, to: `/trade` },
        { text: 'Liquidity', icon: faTint, to: `/liquidity` },
        { text: 'Insurance', icon: faUmbrella, to: `/insurance` },
      ]}
    >
      <Switch>
        <Route path="/overview" component={Overview} exact />
        <Route path="/trade" component={Trade} exact />
        <Route path="/liquidity" component={Liquidity} exact />
        <Route path="/insurance" component={Insurance} exact />
        <Redirect exact from="/" to="/overview" />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

export default App;
