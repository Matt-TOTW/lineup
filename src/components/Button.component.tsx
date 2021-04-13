import styled, { css } from "styled-components"

const StyledButton = styled.button<{
	primary?: boolean
	secondary?: boolean
}>`
	cursor: pointer;
	background: transparent;
	border: none;
	margin: 0;
	padding: 0;
	color: ${props => props.theme.colors.link};
	&:disabled {
		opacity: 0.6;
	}

	${props =>
		props.primary &&
		css`
			border-radius: 3px;
			border: 2px solid ${props => props.theme.colors.main};
			color: palevioletred;
			padding: 0.25em 1em;
		`}

	${props =>
		props.secondary &&
		css`
			margin: 0;
			padding: 0;
		`}
`

export default StyledButton
