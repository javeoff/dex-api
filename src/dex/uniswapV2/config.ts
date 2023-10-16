import { NetworkId } from "src/enums";
import { IDexConfigRecord } from "src/types/IDexConfigRecord";
import { IUniswapV2Params } from "./types/IUniswapV2Params";

export const UniswapV3Config: IDexConfigRecord<IUniswapV2Params> = {
	[NetworkId.MAINNET]: {
		factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
	},
	[NetworkId.ROPSTEN]: {
		factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
	},
}
