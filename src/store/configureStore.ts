import { configureStore } from "@reduxjs/toolkit"
import basicReducer from "../reducers/basic.reducer"

const store = configureStore({
	reducer: {
		basic: basicReducer,
	},
})

// The two lines below are from the docs at
// https://redux.js.org/recipes/usage-with-typescript
// Inferring the types here allows for easy modification of the store without worrying about types

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
