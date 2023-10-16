import type { JsonRpcProvider } from 'ethers';
import { formatUnits } from "ethers";

export const getNativeBalance = async (
  provider: JsonRpcProvider,
  address: string
) => {
  const balance = await provider.getBalance(address).then((bigNumBalance) => {
    const strBalance = formatUnits(bigNumBalance, 18).slice(0, 9);
    return parseFloat(strBalance);
  });
  return balance;
};
