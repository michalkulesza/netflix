import React from "react";
import { Navbar, Header } from "../components/";
import { NavbarContainer, HeaderContainer } from "../containers";
import VideoFile from "../res/videos/mindhunter_trailer.mp4";

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
			<HeaderContainer videoUrl={VideoFile}></HeaderContainer>
		</>
	);
};

export default Browse;
