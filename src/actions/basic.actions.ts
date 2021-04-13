// I've broken the redux process into actions and reducers
// With a more complicated store this would entail several files but I
// have opted to create just one of each to contain all the logic
// This is the actions file

const setMostRecent = (userId: string, userName: string) => {
	return {
		type: "SET_MOST_RECENT",
		userId,
		userName,
	}
}

const unsetMostRecent = () => {
	return {
		type: "UNSET_MOST_RECENT",
	}
}

const setPage = (page: string) => {
	return {
		type: "SET_PAGE",
		page,
	}
}

export { setMostRecent, unsetMostRecent, setPage }
