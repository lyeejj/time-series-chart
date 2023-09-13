import { useEffect, useState } from 'react';
import { ChartData, ResponseData } from '../types';
import HttpClient from '../api/httpClient';
import { getDate, getTime } from '../utils/getDate';

const useChartData = () => {
	const [chartData, setChartData] = useState<ChartData[]>([]);
	const [regionArr, setRegionArr] = useState<string[]>([]);
	const httpClient = new HttpClient<ResponseData>('/data');
	useEffect(() => {
		const fetchChartData = async () => {
			const response = await httpClient.getData('mockData.json');
			const convertedData = Object.entries(response.response).map(([date, value]) => ({
				date: getDate(date),
				time: getTime(date),
				id: value.id,
				value_area: value.value_area,
				value_bar: value.value_bar,
			}));
			const regionIds = [...new Set(convertedData.map(data => data.id))];
			setRegionArr(regionIds);
			setChartData(convertedData);
		};
		fetchChartData();
	}, []);

	return { chartData, regionArr };
};
export default useChartData;
