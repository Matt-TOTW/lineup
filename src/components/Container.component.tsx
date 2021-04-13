import styled from "styled-components"

const StyledContainer = styled.div`
	width: 100%;
	max-width: ${props => props.theme.spacing.desktopContainer.max};
	min-width: ${props => props.theme.spacing.desktopContainer.min};
	margin: auto;
	display: inherit;
	justify-content: inherit;
	padding: 0 8px;
	box-sizing: border-box;
`

export default StyledContainer
