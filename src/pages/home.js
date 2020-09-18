import React from "react";
import { HeaderContainer, JumbotronContainer, FaqContainer, FooterContainer, NewsletterContainer } from "../containers";
import { Header } from "../components";
import { SIGN_IN } from "../constants/routes";
import Background from "../res/home-bg.jpg";

export default function Home() {
	return (
		<>
			<HeaderContainer button={SIGN_IN} buttonText={"Sign In"} bg={Background}>
				<Header.Inner>
					<Header.Heading>Unlimited movies, TV shows, and more.</Header.Heading>
					<Header.SubHeading>Watch anywhere. Cancel anytime.</Header.SubHeading>
					<NewsletterContainer></NewsletterContainer>
				</Header.Inner>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqContainer />
			<FooterContainer />
		</>
	);
}
