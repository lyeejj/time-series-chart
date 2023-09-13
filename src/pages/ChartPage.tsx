import styled from '@emotion/styled';
import Chart from '../components/Chart';

function ChartPage() {
	return (
		<>
			<ChartTitle>Time Series Chart</ChartTitle>
			<Chart />
		</>
	);
}
export default ChartPage;

const ChartTitle = styled.h1`
	font-size: 1.5rem;
	text-align: center;
	margin: 45px;
	color: #505050;
`;
