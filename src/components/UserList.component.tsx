import React, { useState, useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import axios from "axios"
import { RouteComponentProps } from "react-router-dom"

import { setPage } from "../actions/basic.actions"
import { RootState } from "../store/configureStore"
import { IUser } from "../types/types"

import StyledContainer from "./Container.component"
import StyledSection from "./Section.component"
import StyledTitle from "./Title.component"
import StyledPager from "./Pager.component"
import StyledUserListItem from "./UserListItem.component"

// react-redux provides ConnectedProps which is used to infer
// the types from connect. This requires the intermediary connector
const mapStateToProps = (state: RootState) => ({
	page: state.basic.page,
})
const mapDispatchToProps = {
	setPage: (page: string) => setPage(page),
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

const UserList: React.FC<RouteComponentProps & PropsFromRedux> = props => {
	const [error, setError] = useState("")
	const [users, setUsers] = useState([] as IUser[])
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		// The main entry to this page (the button on the home page) is just /users
		// If there is a query present in the url, use that, as it has either been entered
		// manually, or it's come from clicking on the pager
		// If no query present, check the store
		// If that is empty as well, go to page 1

		// Prioritise url query over store
		const query: string = props.location.search.split("=")[1] || props.page

		if (!query || parseInt(query) < 1) {
			// Treat q<1 as out of bounds, go to page 1
			props.history.replace(`/users?page=1`)
		} else if (query !== props.location.search.split("=")[1]) {
			// Else go to query, but only if it has changed since last render
			props.history.replace(`/users?page=${query}`)
		}

		axios({
			url: `https://reqres.in/api/users?page=${query}`,
		})
			.then(res => {
				setError("")
				setUsers(res.data.data)
				setTotalPages(res.data.total_pages)
				props.setPage(query)
				if (query > res.data.total_pages) {
					setError(`There are only ${res.data.total_pages} pages`)
				}
			})
			.catch(err => {
				props.setPage(query)
				setError(`There was an error. Code: ${err.response.status}`)
			})
	}, [props])

	const renderPager = () => {
		const currentPage: number = parseInt(
			props.location.search.split("=")[1]
		)

		return (
			<StyledPager
				currentPage={currentPage}
				goToPage={goToPage}
				totalPages={totalPages}
			/>
		)
	}

	const goToPage = (e: React.MouseEvent, page: number) => {
		e.preventDefault()

		props.history.push(`/users?page=${page}`)
	}

	const renderUserList = () => {
		return users.map((user, index: number) => {
			return (
				<StyledUserListItem
					key={index}
					user={user}
					goToUser={goToUser}
				/>
			)
		})
	}

	const goToUser = (e: React.MouseEvent, id: number) => {
		e.preventDefault()

		props.history.push(`/users/${id}`)
	}

	return (
		<StyledContainer>
			<StyledSection>
				<StyledTitle>Users list</StyledTitle>
				{error && <p>{error}</p>}
				{totalPages > 0 && renderPager()}
				{users.length > 0 && renderUserList()}
			</StyledSection>
		</StyledContainer>
	)
}

export default connector(UserList)
