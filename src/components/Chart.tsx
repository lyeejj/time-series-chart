import CustomTooltip from './CustomTooltip';
import FilterBtnList from './FilterBtnList';
import useChartData from '../hooks/useChartData';
import useFilterId from '../hooks/useFilterId';
import {
	ResponsiveContainer,
	ComposedChart,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Cell,
} from 'recharts';

function Chart() {
	const { chartData, regionArr } = useChartData();
	const { selectedId, resetFilter, handleSelectedId } = useFilterId();
	const date = chartData[0]?.date;

	return (
		<>
			<FilterBtnList
				filterIds={regionArr}
				resetFilter={resetFilter}
				handleSelectedId={handleSelectedId}
				selectedId={selectedId}
			/>
			<ResponsiveContainer width="100%" height={400}>
				<ComposedChart
					data={chartData}
					margin={{
						top: 20,
						right: 50,
						bottom: 20,
						left: 50,
					}}
				>
					<CartesianGrid stroke="#f5f5f5" />
					<XAxis
						dataKey="time"
						minTickGap={30}
						label={{ value: `${date}일자`, position: 'insideBottomLeft', dx: -15, dy: 20 }}
					/>
					<YAxis
						yAxisId="left"
						domain={[0, (max: number) => Math.max(max * 2, 200)]}
						label={{ value: 'area', angle: -90, position: 'left' }}
					/>
					<YAxis
						yAxisId="right"
						orientation="right"
						label={{ value: 'bar', angle: 90, position: 'right', offset: 18 }}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Legend />
					<Bar yAxisId="right" dataKey="value_bar" barSize={20} fill="#a8a4e5">
						{chartData.map((entry, index) => (
							<Cell key={index} fill={entry.id === selectedId ? '#7871dd' : '#a8a4e5'} />
						))}
					</Bar>
					<Area yAxisId="left" dataKey="value_area" fill="#a5db58" stroke="#a5db58" />
				</ComposedChart>
			</ResponsiveContainer>
		</>
	);
}
export default Chart;
