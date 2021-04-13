import React, { useState, useEffect } from "react"
import axios from "axios"
import empty from "is-empty"

import { connect, ConnectedProps } from "react-redux"
import { setMostRecent } from "../actions/basic.actions"
import { useParams } from "react-router"
import { IUser } from "../types/types"

import StyledContainer from "./Container.component"
import styled from "styled-components"
import StyledTitle from "./Title.component"

const StyledUser = styled.div<{ user: any }>`
	text-align: center;
	margin-top: ${props => props.theme.spacing.xxl};

	div.image-container {
		display: inline-block;
		background: url(${props => props.user.avatar});
		height: 124px;
		width: 124px;
		background-size: cover;
		border-radius: 62px;
	}
`

interface ParamTypes {
	id: string
}
const mapDispatchToProps = {
	setMostRecent: (userId: string, userName: string) =>
		setMostRecent(userId, userName),
}
const connector = connect(undefined, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const User: React.FC<PropsFromRedux> = props => {
	const [error, setError] = useState("")
	const [user, setUser] = useState({} as IUser)
	const { id } = useParams<ParamTypes>()

	useEffect(() => {
		axios({
			url: `https://reqres.in/api/users/${id}`,
		})
			.then(res => {
				setError("")
				setUser(res.data.data)
				props.setMostRecent(
					res.data.data.id.toString(),
					`${res.data.data.first_name} ${res.data.data.last_name}`
				)
			})
			.catch(err => {
				setError(`There was an error. Code: ${err.response.status}`)
			})
	}, [props, id])

	const renderUser = () => {
		return (
			<StyledUser user={user}>
				<div className="image-container"></div>
				<StyledTitle>
					{user.first_name} {user.last_name}
				</StyledTitle>
				<p>{user.email}</p>
			</StyledUser>
		)
	}

	return (
		<StyledContainer>
			{error && <p>{error}</p>}
			{!empty(user) && renderUser()}
		</StyledContainer>
	)
}

export default connector(User)
