import React from "react";
import { Navbar, Button } from "../components";

import Logo from "../res/logo.svg";

export default function NavbarContainer({ largeLogo, button, buttonText }) {
	return (
		<Navbar>
			<Navbar.Container>
				<Navbar.Logo largeLogo={largeLogo} src={Logo}></Navbar.Logo>
				{button === null ? null : <Button route={button}>{buttonText}</Button>}
			</Navbar.Container>
		</Navbar>
	);
}
