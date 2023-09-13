import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useChartData from '../hooks/useChartData';

function Chart() {
	const chartData = useChartData();
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
