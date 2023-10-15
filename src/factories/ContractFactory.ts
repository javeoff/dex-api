import { Web3Factory } from "../factories/Web3Factory";

export class ContractFactory {
	private readonly API_KEY = process.env.INFURA_API_KEY;
	private readonly urls = {
		HTTP: 'https://mainnet.infura.io/v3/' + this.API_KEY,
		WSS: 'wss://mainnet.infura.io/v3/' + this.API_KEY,
	}

	public constructor(
		private readonly contractAddress: string,
		private readonly abi: string,
	) {}

	public get web3() {
		return Web3Factory.create(this.urls.HTTP)
	}

	public getContract() {
		return new this.web3.eth.Contract(this.abi as any, this.contractAddress) as any;
	}
}

