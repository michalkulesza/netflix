import React, { useState, useEffect } from "react";
import { Navbar } from "../components";
import { useScrolledDistance } from "../hooks/";

const NavbarContainer = ({ children }) => {
	const scrolledVal = useScrolledDistance();
	const [scrolled, setScrolled] = useState(scrolledVal);

	useEffect(() => {
		setScrolled(scrolledVal);
	}, [scrolledVal]);

	return (
		<Navbar scrolled={scrolled}>
			<Navbar.Container>{children}</Navbar.Container>
		</Navbar>
	);
};

export default NavbarContainer;
