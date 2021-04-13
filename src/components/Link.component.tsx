import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import React from "react"

type buttonTypes = "" | "normal" | "primary"

export const StyledLink = styled.span<{ button: buttonTypes }>`
	a {
		color: ${props => props.theme.colors.link};
		text-decoration: none;

		${props =>
			props.button === "primary" &&
			css`
				padding: ${props => props.theme.spacing.small}
					${props => props.theme.spacing.medium};
				border: solid 1px ${props => props.theme.colors.secondary};
				border-radius: 2px;

				&:hover {
					background-color: ${props => props.theme.colors.secondary};
				}
			`}
	}
`
type Props = {
	to: string
	external?: boolean
	button?: buttonTypes
}
const StyledLinkComponent: React.FC<Props> = props => {
	return (
		<StyledLink button={props.button ? props.button : ""}>
			{props.external ? (
				<a href={props.to} target="_blank" rel="noreferrer nofollow">
					{props.children}
				</a>
			) : (
				<Link to={props.to}>{props.children}</Link>
			)}
		</StyledLink>
	)
}

export default StyledLinkComponent
