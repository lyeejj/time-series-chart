import styled from '@emotion/styled';

interface FilterBtnListProps {
	filterIds: string[];
	resetFilter: () => void;
	handleSelectedId: (id: string) => void;
	selectedId: string | null;
}

function FilterBtnList({ ...props }: FilterBtnListProps) {
	return (
		<FilterList>
			<ItemButton isSelected={false} onClick={props.resetFilter}>
				해제
			</ItemButton>
			{props.filterIds.map(id => (
				<ItemButton
					key={id}
					isSelected={props.selectedId === id}
					onClick={() => props.handleSelectedId(id)}
				>
					{id}
				</ItemButton>
			))}
		</FilterList>
	);
}
export default FilterBtnList;

const FilterList = styled.div`
	display: flex;
	gap: 0.8rem;
	margin: 30px 100px;
`;

const ItemButton = styled.button<{ isSelected: boolean }>`
	padding: 8px 10px;
	border: 1px solid ${props => (props.isSelected ? '#62dd8b' : '#626262')};
	border-radius: 10px;
	background-color: transparent;
	color: ${props => (props.isSelected ? '#62dd8b' : '#505050')};
	font-size: 1.1rem;
	cursor: pointer;

	&:hover {
		border: 1px solid #62dd8b;
		color: #62dd8b;
	}
`;
