import React from "react";
import { Header } from "../components";
import { NavbarContainer, NewsletterContainer } from "../containers/";
import Background from "../res/home-bg.jpg";

export default function HeaderContainer() {
	return (
		<Header>
			<NavbarContainer />
			<Header.BackgroundWrapper>
				<Header.Background>
					<Header.BackgroundImg src={Background} />
				</Header.Background>
				<Header.BackgroundGradient />
			</Header.BackgroundWrapper>
			<Header.Container>
				<Header.Inner>
					<Header.Heading>Unlimited movies, TV shows, and more.</Header.Heading>
					<Header.SubHeading>Watch anywhere. Cancel anytime.</Header.SubHeading>
					<NewsletterContainer></NewsletterContainer>
				</Header.Inner>
			</Header.Container>
		</Header>
	);
}
