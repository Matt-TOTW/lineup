import styled from "styled-components"
import { connect, ConnectedProps } from "react-redux"
import React, { Dispatch, SetStateAction } from "react"

import { RootState } from "../store/configureStore"
import { unsetMostRecent } from "../actions/basic.actions"

import StyledContainer from "./Container.component"
import StyledButton from "./Button.component"
import LinkComponent from "./Link.component"

// react-redux provides ConnectedProps which is used to infer
// the types from connect. This requires the intermediary connector
const mapStateToProps = (state: RootState) => ({
	mostRecent: {
		id: state.basic.userId,
		name: state.basic.userName,
	},
})
const mapDispatchToProps = {
	clearMostRecent: () => unsetMostRecent(),
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
	mode: string
	setMode: Dispatch<SetStateAction<string>>
}

// Adding some simple styles to the component
const StyledHeader = styled.header`
	background-color: ${props => props.theme.colors.secondary};
	display: flex;
	justify-content: space-between;
	padding: ${props => props.theme.spacing.medium} 0;
`
const Header: React.FC<Props> = props => {
	const clearMostRecent = (e: React.MouseEvent) => {
		e.preventDefault()

		props.clearMostRecent()
	}

	return (
		<StyledHeader>
			<StyledContainer>
				<LinkComponent to={`/`}>Line Up code challenge</LinkComponent>
				{props.mostRecent.id && (
					<div>
						<LinkComponent to={`/users/${props.mostRecent.id}`}>
							Most recent: {props.mostRecent.name}
						</LinkComponent>
						<StyledButton
							secondary
							onClick={e => clearMostRecent(e)}
						>
							&nbsp;clear
						</StyledButton>
					</div>
				)}
				<div>
					<StyledButton
						secondary
						disabled={props.mode === "light" ? true : false}
						onClick={e => props.setMode("light")}
					>
						light
					</StyledButton>{" "}
					|{" "}
					<StyledButton
						secondary
						disabled={props.mode === "dark" ? true : false}
						onClick={e => props.setMode("dark")}
					>
						dark
					</StyledButton>
				</div>
			</StyledContainer>
		</StyledHeader>
	)
}

export default connector(Header)
