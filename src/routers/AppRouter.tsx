// This file contains the BrowserRouter
// It also sets some global styles and sets up a Theme
// There are two themes files, one for dark mode and one for light mode

import { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { lightTheme } from "../theme/light-theme"
import { darkTheme } from "../theme/dark-theme"

import Home from "../components/Home.component"
import UserList from "../components/UserList.component"
import User from "../components/User.component"
import NotFound from "../components/NotFound.component"

import Header from "../components/Header.component"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text.main};
    font-family: ${props => props.theme.font.main};
    margin: 0;
    padding: 0;
	font-family: 'Open sans', sans-serif;
  }
`

// Detect user's dark mode setting on their OS and use this
// to set the initial mode
const userOsDarkMode = window.matchMedia("(prefers-color-scheme: dark)")

const AppRouter: React.FC = () => {
	// I've chosen to use state on this AppRouter for the dark mode setting
	// but it could also be dispatched to the store. Since the Header component (where
	// the setting can be changed) is only one level down, and also the only place
	// where it can be changed, I've chosen to do it this way.
	const [mode, setMode] = useState(userOsDarkMode.matches ? "dark" : "light")

	return (
		<ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<BrowserRouter>
				<Header mode={mode} setMode={setMode} />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/users" component={UserList} exact />
					<Route path="/users/:id" component={User} exact />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default AppRouter
