export const getSlicedAddress = (address: string, value = 4) => {
	if (!address || address.length !== 42) return ''
	return `${address.slice(0, value)}...${address.slice(-value)}`
}

export const getLeadingAddress = (address: string, length = 12) => {
	if (!address || address.length !== 42) return ''
	return `${address.slice(0, length)}...`
}
