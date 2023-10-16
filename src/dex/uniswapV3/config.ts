import { NetworkId } from "src/enums";
import { IDexConfigRecord } from "src/types/IDexConfigRecord";
import { IUniswapV3Params } from "./types/IUniswapV3Params";

export const UniswapV3Config: IDexConfigRecord<IUniswapV3Params> = {
	[NetworkId.MAINNET]: {
		factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
		quoter: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e',
		router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
	},
	[NetworkId.BSC]: {
		factory: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
		quoter: '0x78D78E420Da98ad378D7799bE8f4AF69033EB077',
		router: '0x83c346ba3d4bf36b308705e24fad80999401854b',
	},
	[NetworkId.POLYGON]: {
		factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
		quoter: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e',
		router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
	},
	[NetworkId.BASE]: {
		factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
		quoter: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e',
		router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
	},
	[NetworkId.OPTIMISM]: {
		factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
		quoter: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e',
		router: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
	},
	[NetworkId.AVALANCHE]: {
		factory: '0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD',
		quoter: '0xbe0F5544EC67e9B3b2D979aaA43f18Fd87E6257F',
		router: '0x33895c09a0ec0718ce66ab35dfd0b656d77cd053',
	},
	[NetworkId.BASE]: {
		factory: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
		quoter: '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a',
		router: '0xaeE2b8d4A154e36f479dAeCe3FB3e6c3c03d396E',
	}
}
