// I've broken the redux process into actions and reducers
// With a more complicated store this would entail several files but I
// have opted to create just one of each to contain all the logic
// This is the reducer file

import { AnyAction } from "redux"

interface basicState {
	userId: string
	userName: string
	page: string
}

const basicDefaultState: basicState = {
	userId: "",
	userName: "",
	page: "",
}

const basicReducer = function (state = basicDefaultState, action: AnyAction) {
	switch (action.type) {
		case "SET_MOST_RECENT": {
			return {
				...state,
				userId: action.userId,
				userName: action.userName,
			}
		}
		case "UNSET_MOST_RECENT": {
			return {
				...state,
				userId: "",
				userName: "",
			}
		}
		case "SET_PAGE": {
			return {
				...state,
				page: action.page,
			}
		}
		default: {
			return state
		}
	}
}

export default basicReducer
