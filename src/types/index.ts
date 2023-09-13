export interface ChartData {
	date: string;
	id: string;
	value_area: number;
	value_bar: number;
}

export interface ResponseData {
	response: Record<string, ChartData>;
}
