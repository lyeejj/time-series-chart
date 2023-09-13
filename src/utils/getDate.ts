export const getDate = (responseDate: string) => {
	const date = new Date(responseDate);
	const year = date.getFullYear();
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const day = ('0' + date.getDate()).slice(-2);
	const dateStr = `${year}-${month}-${day}`;
	return dateStr;
};
export const getTime = (responseDate: string) => {
	const date = new Date(responseDate);
	const hour = ('0' + date.getHours()).slice(-2);
	const minute = ('0' + date.getMinutes()).slice(-2);
	const second = ('0' + date.getSeconds()).slice(-2);
	const dateStr = `${hour}:${minute}:${second}`;
	return dateStr;
};
