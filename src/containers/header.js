import React from "react";
import { Header } from "../components";
import Newsletter from "../containers/";

export default function HeaderContainer() {
	return (
		<Header>
			<Header.Container>
				<Header.Inner>
					<Header.Heading>Unlimited movies, TV shows, and more.</Header.Heading>
					<Header.SubHeading>Watch anywhere. Cancel anytime.</Header.SubHeading>
					<Newsletter></Newsletter>
				</Header.Inner>
			</Header.Container>
		</Header>
	);
}
