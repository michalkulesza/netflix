import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Header, Carousels } from "../components/";
import { NavbarContainer, HeaderContainer, CarouselsContainer, ItemDetailsContainer } from "../containers";
import LazyLoad from "react-lazyload";

import VideoFile from "../res/videos/mindhunter_trailer.mp4";
import VideoLogo from "../res/images/mindhunter-logo.png";

const Browse = () => {
	const data = useSelector(state => state.initialData);

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
			{data ? (
				<>
					<LazyLoad placeholder={<Header.Loading />}>
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
					</LazyLoad>
					<CarouselsContainer data={data} />
					<ItemDetailsContainer />
				</>
			) : (
				<>
					<Header.Loading />
					<Carousels.Loading />
				</>
			)}
		</>
	);
};

export default Browse;
