import { useEffect, useState } from 'react';
import { ChartData, ResponseData } from '../types';
import HttpClient from '../api/httpClient';

const useChartData = () => {
	const [chartData, setChartData] = useState<ChartData[]>([]);
	const httpClient = new HttpClient<ResponseData>('/data');
	useEffect(() => {
		const fetchChartData = async () => {
			const response = await httpClient.getData('mockData.json');
			const convertedData = Object.entries(response.response).map(([date, value]) => ({
				date,
				id: value.id,
				value_area: value.value_area,
				value_bar: value.value_bar,
			}));
			setChartData(convertedData);
		};
		fetchChartData();
	}, []);

	return chartData;
};
export default useChartData;
