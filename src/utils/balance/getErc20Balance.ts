import type { Contract } from 'ethers';
import { formatUnits } from "ethers";

export const getErc20Balance = async (
  contract: Contract,
  address: string,
  decimals: number
) => {
  const balance = await contract
    .balanceOf(address)
    .then((bigNumBalance: any) => {
      const strBalance = formatUnits(bigNumBalance, decimals)
        .slice(0, 9);
      return parseFloat(strBalance);
    });
  return balance;
};
