export const deepClone = (input: any) => {
	return JSON.parse(JSON.stringify(input))
}
