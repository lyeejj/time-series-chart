import { useEffect, useState } from 'react';
import HttpClient from '../api/httpClient';
import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartData, ResponseData } from '../types';

function Chart() {
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
			console.log(convertedData);
			setChartData(convertedData);
		};
		fetchChartData();
	}, []);
	return (
		<ComposedChart
			width={1200}
			height={400}
			data={chartData}
			margin={{
				top: 20,
				right: 20,
				bottom: 20,
				left: 20,
			}}
		>
			<CartesianGrid stroke="#f5f5f5" />
			<XAxis dataKey="date" />
			<YAxis yAxisId="left" domain={[0, (max: number) => Math.max(max * 2, 200)]} />
			<YAxis yAxisId="right" orientation="right" />
			<Tooltip />
			<Legend />
			<Bar yAxisId="right" dataKey="value_bar" barSize={20} fill="#8884d8" />
			<Area yAxisId="left" dataKey="value_area" fill="#a5db58" stroke="#a5db58" />
		</ComposedChart>
	);
}
export default Chart;
