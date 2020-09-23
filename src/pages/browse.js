import React from "react";
import { Navbar } from "../components/";
import { NavbarContainer, HeaderContainer } from "../containers";

import VideoFile from "../res/videos/mindhunter_trailer.mp4";
import VideoLogo from "../res/images/mindhunter-logo.png";

const Browse = () => {
	return (
		<>
			<NavbarContainer>
				<Navbar.Divide>
					<Navbar.Logo smallLogo={true} />
					<Navbar.Menu>
						<Navbar.MenuItem>Home</Navbar.MenuItem>
						<Navbar.MenuItem>Series</Navbar.MenuItem>
						<Navbar.MenuItem>Films</Navbar.MenuItem>
						<Navbar.MenuItem>Latest</Navbar.MenuItem>
						<Navbar.MenuItem>My List</Navbar.MenuItem>
					</Navbar.Menu>
				</Navbar.Divide>
			</NavbarContainer>
			<HeaderContainer
				videoUrl={VideoFile}
				loop
				muted
				ageRestriction={12}
				videoLogo={VideoLogo}
				videoDescription={
					"In 1977, frustrated FBI hostage negotiator Holden Ford finds an unlikely ally in veteran agent Bill Tench and begins studying a new class of murderer."
				}
				alt={"Mindhunter"}
			></HeaderContainer>
		</>
	);
};

export default Browse;
