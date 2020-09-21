import React from "react";
import { Header } from "../components";

export default function HeaderContainer({ children, largeLogo, button, buttonText, bg }) {
	return (
		<Header>
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
