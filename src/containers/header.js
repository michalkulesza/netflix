import React from "react";
import { Header } from "../components";
import { NavbarContainer } from "../containers/";
import Background from "../res/home-bg.jpg";

export default function HeaderContainer({ children, largeLogo, button, buttonText }) {
	return (
		<Header>
			<NavbarContainer largeLogo={largeLogo} button={button} buttonText={buttonText} />
			<Header.BackgroundWrapper>
				<Header.Background>
					<Header.BackgroundImg src={Background} />
				</Header.Background>
				<Header.BackgroundGradient />
			</Header.BackgroundWrapper>
			<Header.Container>{children}</Header.Container>
		</Header>
	);
}
