import { TooltipProps } from 'recharts';
import styled from '@emotion/styled';

function CustomTooltip({ active, payload }: TooltipProps<string, string>) {
	if (active && payload && payload.length) {
		const tooltipData = payload[0].payload;
		return (
			<TooltipContainer>
				<TooltipContent>{tooltipData.id}</TooltipContent>
				<TooltipContent>
					<ContentAreaBox />
					{tooltipData.value_area}
				</TooltipContent>
				<TooltipContent>
					<ContentBarBox />
					{tooltipData.value_bar}
				</TooltipContent>
			</TooltipContainer>
		);
	}

	return null;
}
export default CustomTooltip;

const TooltipContainer = styled.ul`
	width: 100px;
	height: 80px;
	padding: 0.8rem;
	background-color: rgba(110, 110, 110, 0.8);
	border-radius: 10px;
	color: #fff;
`;

const TooltipContent = styled.li`
	margin-bottom: 0.3rem;
`;

const ContentAreaBox = styled.div`
	display: inline-block;
	width: 10px;
	height: 10px;
	margin-right: 0.2rem;
	background-color: #a5db58;
`;
const ContentBarBox = styled.div`
	display: inline-block;
	width: 10px;
	height: 10px;
	margin-right: 0.2rem;
	background-color: #a8a4e5;
`;
