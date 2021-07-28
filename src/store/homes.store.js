import { api } from '@/services/api.service';

class HomesStore {
	constructor() {
		this.list = [];
	}

	async getHomesList() {
		try {
			const response = await api.getList();
			this.list = response.data;
			return response.data;
		} catch (err) {
			console.log(err);
		}
	}
}

export const homesStore = new HomesStore();