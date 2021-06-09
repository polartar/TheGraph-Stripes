import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';

function useWeb3() {
  return useWeb3React<Web3>();
}

export default useWeb3;
