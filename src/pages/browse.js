import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BROWSE, FILMS, SERIES, LATEST, MYLIST } from "../constants/routes";
import { Navbar, Header, Carousels } from "../components/";
import { NavbarContainer, HeaderContainer, CarouselsContainer, DetailsContainer } from "../containers";
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
						<Link to={BROWSE}>
							<Navbar.MenuItem>Home</Navbar.MenuItem>
						</Link>
						<Link to={SERIES}>
							<Navbar.MenuItem>Series</Navbar.MenuItem>
						</Link>
						<Link to={FILMS}>
							<Navbar.MenuItem>Films</Navbar.MenuItem>
						</Link>
						<Link to={LATEST}>
							<Navbar.MenuItem>Latest</Navbar.MenuItem>
						</Link>
						<Link to={MYLIST}>
							<Navbar.MenuItem>My List</Navbar.MenuItem>
						</Link>
					</Navbar.Menu>
				</Navbar.Divide>
			</NavbarContainer>
			{data ? (
				<>
					<LazyLoad placeholder={<Header.Loading />}>
						<HeaderContainer
							videoUrl={VideoFile}
							ageRestriction={12}
							videoLogo={VideoLogo}
							videoDescription={
								"In 1977, frustrated FBI hostage negotiator Holden Ford finds an unlikely ally in veteran agent Bill Tench and begins studying a new class of murderer."
							}
							alt={"Mindhunter"}
						></HeaderContainer>
					</LazyLoad>
					<CarouselsContainer data={data} />
					<DetailsContainer />
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
