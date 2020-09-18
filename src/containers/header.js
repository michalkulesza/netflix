import React from "react";
import { Header } from "../components";
import { NavbarContainer } from "../containers/";

export default function HeaderContainer({ children, largeLogo, button, buttonText, bg }) {
	return (
		<Header>
			<NavbarContainer largeLogo={largeLogo} button={button} buttonText={buttonText} />
			<Header.BackgroundWrapper>
				<Header.Background>
					<Header.BackgroundImg src={bg} />
				</Header.Background>
				<Header.BackgroundGradient />
			</Header.BackgroundWrapper>
			<Header.Container>{children}</Header.Container>
		</Header>
	);
}
