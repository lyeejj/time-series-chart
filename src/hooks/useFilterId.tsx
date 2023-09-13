import { useState } from 'react';

function useFilterId() {
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const resetFilter = () => {
		setSelectedId(null);
	};
	const handleSelectedId = (id: string) => {
		setSelectedId(id);
	};

	return { selectedId, resetFilter, handleSelectedId };
}
export default useFilterId;
