import React from "react"
import styled from "styled-components"
import StyledButton from "./Button.component"

const StyledPager = styled.div`
	width: 300px;
	display: flex;
	justify-content: space-between;
	margin-bottom: ${props => props.theme.spacing.medium};

	span {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 30px;
		width: 30px;
		border-radius: 15px;
		border: solid 1px ${props => props.theme.colors.main};
	}
`

type Props = {
	currentPage: number
	goToPage(e: React.MouseEvent, page: number): void
	totalPages: number
}
const Pager: React.FC<Props> = ({ currentPage, goToPage, totalPages }) => {
	return (
		<StyledPager>
			<StyledButton
				disabled={currentPage <= 1 ? true : false}
				onClick={e => goToPage(e, currentPage - 1)}
			>
				Prev
			</StyledButton>
			<span>{currentPage}</span>
			<StyledButton
				disabled={currentPage >= totalPages ? true : false}
				onClick={e => goToPage(e, currentPage + 1)}
			>
				Next
			</StyledButton>
		</StyledPager>
	)
}

export default Pager
