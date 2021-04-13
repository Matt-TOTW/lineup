import StyledTitle from "./Title.component"
import StyledContainer from "./Container.component"
import StyledSection from "./Section.component"
import LinkComponent from "./Link.component"
import styled from "styled-components"

// StyledHome builds on StyledContainer
const StyledHome = styled(StyledContainer)`
	text-align: center;
`
// MassiveTitle builds on StyledTitle
const MassiveTitle = styled(StyledTitle)`
	font-size: 15rem;
	font-weight: bold;
	margin: 5rem 0;
	font-family: "Karantina", cursive;
	letter-spacing: 1rem;
`

const Home: React.FC = () => {
	return (
		<StyledHome>
			<StyledSection>
				<MassiveTitle>HELLO</MassiveTitle>
				<LinkComponent to={`/users`} button="primary">
					Users
				</LinkComponent>
			</StyledSection>
			<StyledSection>
				<p>Thanks for having a look at my code. Here is a rundown:</p>
				<p>
					The app uses React with Typescript, Redux and Styled
					Components. For easy styling theme files are used to define
					common styles. These theme files are at src/theme. The
					rendered file depends on the dark mode setting of the user
					and can also be manually set by the user.
				</p>
				<p>
					/src/index.tsx is the entrypoint. From here a redux store is
					configured. The store is used for a couple of things. It's
					used to store the most recently viewed user, for easy
					navigation, and it's also used to store the last viewed page
					number on the /users page.
				</p>
				<p>
					Some simple tests use Jest and Enzyme to mock the
					BrowserRouter and test some basic functionality. An
					enhancement might be to write some more specific tests.
				</p>
			</StyledSection>
		</StyledHome>
	)
}

export default Home
