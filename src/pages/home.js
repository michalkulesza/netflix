import React from "react";
import {
	HeaderContainer,
	NavbarContainer,
	JumbotronContainer,
	FaqContainer,
	FooterContainer,
	NewsletterContainer,
} from "../containers";
import { Header, Navbar, Button } from "../components";
import { SIGN_IN } from "../constants/routes";

import Background from "../res/home-bg.jpg";

const Home = () => {
	return (
		<>
			<NavbarContainer>
				<Navbar.Logo />
				<Button route={SIGN_IN}>Sign In</Button>
			</NavbarContainer>
			<HeaderContainer bg={Background}>
				<Header.Inner>
					<Header.Heading>Unlimited movies, TV shows, and more.</Header.Heading>
					<Header.SubHeading>Watch anywhere. Cancel anytime.</Header.SubHeading>
					<NewsletterContainer />
				</Header.Inner>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqContainer />
			<FooterContainer />
		</>
	);
};

export default Home;
