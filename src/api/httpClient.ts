import axios from 'axios';

class HttpClient<T> {
	private baseURL: string;
	private instance;
	constructor(baseURL: string) {
		this.baseURL = baseURL;
		this.instance = axios.create({ baseURL });
	}

	async getData(endPoint: string): Promise<T> {
		try {
			const response = await this.instance.get(endPoint);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
export default HttpClient;
