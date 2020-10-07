import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BROWSE, SERIES, FILMS, LATEST, MYLIST } from "../constants/routes";
import { Navbar, Carousels } from "../components";
import { NavbarContainer, CarouselsContainer, DetailsContainer } from "../containers";

const Latest = () => {
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
					<CarouselsContainer data={data} />
					<DetailsContainer />
				</>
			) : (
				<Carousels.Loading />
			)}
		</>
	);
};

export default Latest;
