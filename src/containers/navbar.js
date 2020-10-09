import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../components";
import { useScrolledDistance } from "../hooks/";
import { BROWSE, FILMS, SERIES, LATEST, MYLIST } from "../constants/routes";

const NavbarContainer = ({ children }) => {
	const scrolledVal = useScrolledDistance();
	const [scrolled, setScrolled] = useState(scrolledVal);

	useEffect(() => {
		setScrolled(scrolledVal);
	}, [scrolledVal]);

	return (
		<Navbar scrolled={scrolled}>
			<Navbar.Container>
				{children ? (
					children
				) : (
					<Navbar.Divide>
						<Navbar.Logo smallLogo={true} />
						<Navbar.Menu>
							<NavLink exact to={BROWSE}>
								<Navbar.MenuItem>Home</Navbar.MenuItem>
							</NavLink>
							<NavLink exact to={SERIES}>
								<Navbar.MenuItem>Series</Navbar.MenuItem>
							</NavLink>
							<NavLink exact to={FILMS}>
								<Navbar.MenuItem>Films</Navbar.MenuItem>
							</NavLink>
							<NavLink exact to={LATEST}>
								<Navbar.MenuItem>Latest</Navbar.MenuItem>
							</NavLink>
							<NavLink exact to={MYLIST}>
								<Navbar.MenuItem>My List</Navbar.MenuItem>
							</NavLink>
						</Navbar.Menu>
					</Navbar.Divide>
				)}
			</Navbar.Container>
		</Navbar>
	);
};

export default NavbarContainer;
