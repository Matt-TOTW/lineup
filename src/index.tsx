// This file is the entry point for the app
// It sets up a redux store and renders the AppRouter component

import React from "react"
import ReactDOM from "react-dom"
import AppRouter from "./routers/AppRouter"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"

const store = configureStore

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
