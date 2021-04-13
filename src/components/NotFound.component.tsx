import { BrowserRouterProps } from "react-router-dom"
import StyledContainer from "./Container.component"
import StyledSection from "./Section.component"
import StyledTitle from "./Title.component"

const NotFound: React.FC<BrowserRouterProps> = props => {
	return (
		<StyledContainer>
			<StyledSection>
				<StyledTitle>Page not found</StyledTitle>
			</StyledSection>
		</StyledContainer>
	)
}

export default NotFound
