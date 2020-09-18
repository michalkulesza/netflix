import React from "react";
import { Navbar, Button } from "../components";
import { SIGN_IN } from "../constants/routes";

import Logo from "../res/logo.svg";

export default function NavbarContainer() {
	return (
		<Navbar>
			<Navbar.Container>
				<Navbar.Logo src={Logo}></Navbar.Logo>
				<Button route={SIGN_IN}>Sign In</Button>
			</Navbar.Container>
		</Navbar>
	);
}
