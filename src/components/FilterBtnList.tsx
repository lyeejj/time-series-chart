import styled from '@emotion/styled';

interface FilterBtnListProps {
	filterIds: string[];
	resetFilter: () => void;
	handleSelectedId: (id: string) => void;
}

function FilterBtnList({ filterIds, resetFilter, handleSelectedId }: FilterBtnListProps) {
	return (
		<FilterList>
			<ItemButton onClick={resetFilter}>해제</ItemButton>
			{filterIds.map(id => (
				<ItemButton onClick={() => handleSelectedId(id)}>{id}</ItemButton>
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

const ItemButton = styled.button`
	padding: 8px 10px;
	border: 1px solid #626262;
	border-radius: 10px;
	background-color: transparent;
	color: #505050;
	font-size: 1.1rem;
	cursor: pointer;

	&:hover,
	&:focus {
		border: 1px solid #62dd8b;
		color: #62dd8b;
	}
`;
