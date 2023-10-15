import Web3 from "web3";

export class Web3Factory {
	static create(url: string) {
		if (url.includes('http')) {
			return new Web3(url);
		}

		 return new Web3(new Web3.providers.WebsocketProvider(url));
	}
}

