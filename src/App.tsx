import { BscConnector } from '@binance-chain/bsc-connector';
import { faExchangeAlt, faTachometerAlt, faTint, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import Insurance from 'views/Insurance';
import Liquidity from 'views/Liquidity';
import NotFound from 'views/NotFound';
import Overview from 'views/Overview';
import Trade from 'views/Trade';
import Dashboard from './components/Dashboard';

const connector = new InjectedConnector({ supportedChainIds: [97] });

function App() {
  const match = useRouteMatch();
  const { activate, deactivate, account, chainId } = useWeb3React();

  function login() {
    activate(connector);
  }

  function logout() {
    deactivate();
  }

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
      {/* <p>Strips.finance app</p>
      {account ? (
        <>
          <p>
            {account} {chainId}
          </p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Connect</button>
      )} */}
    </Dashboard>
  );
}

export default App;
