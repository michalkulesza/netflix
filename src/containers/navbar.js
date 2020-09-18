import React from "react";
import { Navbar, Button } from "../components";

import Logo from "../res/logo.svg";

export default function NavbarContainer() {
	return (
		<Navbar>
			<Navbar.Container>
				<Navbar.Logo src={Logo}></Navbar.Logo>
				<Button>Sign In</Button>
			</Navbar.Container>
		</Navbar>
	);
}
