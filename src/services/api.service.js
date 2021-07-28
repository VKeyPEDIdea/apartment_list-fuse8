import { apiConfig } from '@/config/api.config.js';
import axios from '@/plugins/axios/';

class Api {
	constructor(config) {
		this.url = config.url;
	}

	async getList() {
		const response = await axios.get('/homes');
		switch (response.status) {
			case 200:
				return response;
			default:
				return { err: true, message: response.error };
		}
	}
}

export const api = new Api(apiConfig);