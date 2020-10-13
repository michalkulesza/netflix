import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "../components";
import { useScrolledDistance } from "../hooks/";
import { BROWSE, FILMS, SERIES, LATEST, MYLIST } from "../constants/routes";

import { BiCaretDown } from "react-icons/bi";

const NavbarContainer = ({ children }) => {
	const genresDropdown = useRef();
	const scrolledVal = useScrolledDistance();
	const [scrolled, setScrolled] = useState(scrolledVal);
	const [genresListVisible, setGenresListVisible] = useState(false);
	const { genres, type } = useSelector(state => state.genres);

	useEffect(() => {
		genresListVisible
			? document.addEventListener("mousedown", handleDocumentClick)
			: document.removeEventListener("mousedown", handleDocumentClick);

		return () => {
			document.removeEventListener("mousedown", handleDocumentClick);
		};
	}, [genresListVisible]);

	useEffect(() => {
		setScrolled(scrolledVal);
	}, [scrolledVal]);

	const handleDocumentClick = e => {
		if (genresDropdown.current?.contains(e.target)) {
			return;
		}
		setGenresListVisible(false);
	};

	return (
		<Navbar scrolled={scrolled} genres={genres}>
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
			{genres && (
				<Navbar.Genres ref={genresDropdown} genres={genres} scrolled={scrolled}>
					<h1>{type}</h1>
					<Navbar.GenresButtonWrapper>
						<Navbar.GenresButton onMouseDown={() => setGenresListVisible(!genresListVisible)}>
							<span>Genres</span>
							<BiCaretDown />
						</Navbar.GenresButton>
						<Navbar.GenresListWrapper visible={genresListVisible}>
							{Array.from(Array(Math.ceil(genres.length / 8))).map((item, i) => (
								<Navbar.GenresList key={`${genres[i].id}${i}`}>
									{genres.slice(i === 0 ? i : i * 8, i === 0 ? 8 : (i + 1) * 8).map(li => (
										<Navbar.GenresItem key={li.id}>{li.name}</Navbar.GenresItem>
									))}
								</Navbar.GenresList>
							))}
						</Navbar.GenresListWrapper>
					</Navbar.GenresButtonWrapper>
				</Navbar.Genres>
			)}
		</Navbar>
	);
};

export default NavbarContainer;
