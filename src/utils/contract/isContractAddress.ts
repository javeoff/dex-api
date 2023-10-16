import Web3 from "web3";

export const isContractAddress = async (web3: Web3, addr: string) => {
  const contractCode = await web3.eth.getCode(addr);

  return contractCode !== '0x';
};
