import React from "react";
import { HeaderContainer, NavbarContainer, FooterContainer } from "../containers";
import { Header, Navbar } from "../components";
import Background from "../res/home-bg.jpg";

export default function SignIn() {
	return (
		<>
			<NavbarContainer>
				<Navbar.Logo largeLogo={true} />
			</NavbarContainer>
			<HeaderContainer bg={Background}>
				<Header.Inner></Header.Inner>
			</HeaderContainer>
			<FooterContainer></FooterContainer>
		</>
	);
}
