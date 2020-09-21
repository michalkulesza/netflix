import React from "react";
import { Navbar } from "../components";

export default function NavbarContainer({ children }) {
	return (
		<Navbar>
			<Navbar.Container>{children}</Navbar.Container>
		</Navbar>
	);
}
