import { InjectedConnector } from "@web3-react/injected-connector"

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const injected = new InjectedConnector({ supportedChainIds: [chainId] })

function getConnector() {
  return injected;
}

export default getConnector;
