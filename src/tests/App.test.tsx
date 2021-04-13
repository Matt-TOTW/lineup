import React from "react"
import { mount } from "enzyme"
import "./__mocks__/matchMedia"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import AppRouter from "../routers/AppRouter"
import configureStore from "../store/configureStore"
import { act } from "react-dom/test-utils"
import StyledUserListItem from "../components/UserListItem.component"

const store = configureStore

test("loads up the AppRouter, and routes to the /users page", async () => {
	// Mock the axios call
	const mock = new MockAdapter(axios)
	mock.onGet("https://reqres.in/api/users?page=1").reply(200, {
		data: [
			{
				id: 1,
				first_name: "John",
				last_name: "Doe",
				avatar: "http://image.png",
			},
		],
	})

	// Mount inside the real store and use MemoryRouter
	// The BrowserRouter is mocked, see /test/__mocks__
	const app = mount(
		<Provider store={store}>
			<MemoryRouter initialEntries={["/users?page=1"]} initialIndex={0}>
				<AppRouter />
			</MemoryRouter>
		</Provider>
	)

	// await the result of the mocked api call which occurs inside useEffect
	await act(
		() =>
			new Promise<void>(resolve => {
				setImmediate(() => {
					app.update()
					resolve()
				})
			})
	)
	const users = app.find(StyledUserListItem)
	const storeState = store.getState()

	expect(storeState.basic.page).toBe("1")
	expect(users).toHaveLength(1)
})
