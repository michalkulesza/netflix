import React from "react";
import { Navbar } from "../components";

const NavbarContainer = ({ children }) => {
	return (
		<Navbar>
			<Navbar.Container>{children}</Navbar.Container>
		</Navbar>
	);
};

export default NavbarContainer;
