import { NetworkId } from "src/enums";
import { IDexConfigRecord } from "src/types/IDexConfigRecord";
import { ISushiswapParams } from "./types/ISushiswapParams";

export const SushiswapV3Config: IDexConfigRecord<ISushiswapParams> = {
	[NetworkId.MAINNET]: {
		factory: '0xbACEB8eC6b9355Dfc0269C18bac9d6E2Bdc29C4F',
		quoter: '0x64e8802FE490fa7cc61d3463958199161Bb608A7',
		router: '0x00F23572b16c5e9e58e7b965DEF51Ff8Ff546E34',
	},
	[NetworkId.POLYGON]: {
		factory: '0x917933899c6a5f8e37f31e19f92cdbff7e8ff0e2',
		quoter: '0xb1E835Dc2785b52265711e17fCCb0fd018226a6e',
		router: '0x34D41cE301257a4615D4F5AD260FA91D03925243',
	},
	[NetworkId.BSC]: {
		factory: '0x126555dd55a39328F69400d6aE4F782Bd4C34ABb',
		quoter: '0xb1E835Dc2785b52265711e17fCCb0fd018226a6e',
		router: '0xDCf4EE5B700e2a5Fec458e06B763A4a3E3004494',
	},
	[NetworkId.AVALANCHE]: {
		factory: '0x3e603C14aF37EBdaD31709C4f848Fc6aD5BEc715',
		quoter: '0xb1E835Dc2785b52265711e17fCCb0fd018226a6e',
		router: '0x24c90C7d8fb463722e304A71255341610Fa7589b',
	},
	[NetworkId.FANTOM]: {
		factory: '0x7770978eED668a3ba661d51a773d3a992Fc9DDCB',
		quoter: '0xb1E835Dc2785b52265711e17fCCb0fd018226a6e',
		router: '0xDCf4EE5B700e2a5Fec458e06B763A4a3E3004494',
	},
	[NetworkId.ARBITRUM]: {
		factory: '0x1af415a1eba07a4986a52b6f2e7de7003d82231e',
		quoter: '0x0524E833cCD057e4d7A296e3aaAb9f7675964Ce1',
		router: '0xbDa4176fD98b47018aF673805d069b9dbd49373D',
	},
	[NetworkId.OPTIMISM]: {
		factory: '0x9c6522117e2ed1fE5bdb72bb0eD5E3f2bdE7DBe0',
		quoter: '0xb1E835Dc2785b52265711e17fCCb0fd018226a6e',
		router: '0xa05d8C3F278fC7b20b39Ea7A3035E3aD8D808c78',
	},
	[NetworkId.BASE]: {
		factory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
		quoter: '0xb1E835Dc2785b52265711e17fCCb0fd018226a6e',
		router: '0xCc0e85901f33D375FcdD9a888B05Df9616F68277',
	}
}
