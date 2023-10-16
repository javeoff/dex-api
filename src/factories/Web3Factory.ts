import { Contract, ethers, JsonRpcProvider } from "ethers";
import { TContractType } from "src/types/TContractType";
import Web3 from "web3";

type TAbi = any;

export class ContractFactory {
	static readonly API_KEY = process.env.INFURA_API_KEY;
	static readonly urls = {
		HTTP: 'https://mainnet.infura.io/v3/' + this.API_KEY,
		WSS: 'wss://mainnet.infura.io/v3/' + this.API_KEY,
	}

	public constructor(
		private readonly contractAddress: string,
		private readonly abi: TAbi,
	) { }

	public getContract(): Web3 {
		const contract = ContractFactory.create(
			'web3',
			ContractFactory.urls.HTTP,
			this.contractAddress,
			this.abi,
		)

		return contract;
	}

	static create(
		type: TContractType,
		url: string,
		address: string,
		abi: TAbi,
	): Web3 {
		switch (type) {
			case 'web3':
				return ContractFactory.getWeb3Contract(
					ContractFactory.urls.HTTP,
					address,
					abi
			);
			case 'ethers':
				return ContractFactory.getEthersContract(
					url,
					address,
					abi,
				) as any;
		}
	}

	static getWeb3Contract(
		url: string,
		address: string,
		abi: TAbi,
	) {
		if (url.includes('http')) {
			return new Web3(url);
		}

		const web3 = new Web3(new Web3.providers.WebsocketProvider(url));

		return new web3.eth.Contract(
			abi,
			address,
		) as any;
	}

	static getEthersContract(
		url: string,
		address: string,
		abi: TAbi,
	) {
		const provider = new JsonRpcProvider(url);

		return new ethers.Contract(
			address,
			abi,
			provider
		);
	}
}

