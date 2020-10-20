import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearSelectedGenre, setSelectedGenre } from "../redux/actions/genres";
import { Navbar } from "../components";
import { useScrolledDistance } from "../hooks/";
import { BROWSE, FILMS, SERIES, LATEST, MYLIST } from "../constants/routes";

import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { clearGenreData, fetchGenreData } from "../redux/actions/fetch-genre-data";

const NavbarContainer = ({ children }) => {
	const dispatch = useDispatch();
	const genresDropdown = useRef();
	// const location = useLocation();
	const scrolled = useScrolledDistance();
	const [genresListVisible, setGenresListVisible] = useState(false);
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
	const [currentLocation] = useState(null);
	const { genres, genresType, selectedGenre } = useSelector(state => state.genres);

	useEffect(() => {
		genresListVisible
			? document.addEventListener("mousedown", handleDocumentClick)
			: document.removeEventListener("mousedown", handleDocumentClick);

		return () => {
			document.removeEventListener("mousedown", handleDocumentClick);
		};
	}, [genresListVisible]);

	const handleDocumentClick = e => {
		if (genresDropdown.current?.contains(e.target)) {
			return;
		}
		setGenresListVisible(false);
	};

	const handleGenreItemClick = (genre, genreID) => {
		dispatch(clearGenreData());
		dispatch(setSelectedGenre(genre));
		dispatch(fetchGenreData(genresType.toLowerCase(), genreID));
		setGenresListVisible(false);
	};

	const handleMobileMenuClick = () => setMobileMenuVisible(!mobileMenuVisible);

	return (
		<Navbar scrolled={scrolled} genres={genres}>
			<Navbar.Container>
				{children ? (
					children
				) : (
					<Navbar.Divide>
						<Navbar.Logo />
						<Navbar.MenuWrapper>
							<Navbar.Menu>
								<NavLink exact to={BROWSE}>
									<Navbar.MenuItem>Home</Navbar.MenuItem>
								</NavLink>
								<NavLink exact to={SERIES} onMouseDown={() => dispatch(clearSelectedGenre())}>
									<Navbar.MenuItem>Series</Navbar.MenuItem>
								</NavLink>
								<NavLink exact to={FILMS} onMouseDown={() => dispatch(clearSelectedGenre())}>
									<Navbar.MenuItem>Films</Navbar.MenuItem>
								</NavLink>
								<NavLink exact to={LATEST}>
									<Navbar.MenuItem>Latest</Navbar.MenuItem>
								</NavLink>
								<NavLink exact to={MYLIST}>
									<Navbar.MenuItem>My List</Navbar.MenuItem>
								</NavLink>
							</Navbar.Menu>
							<Navbar.MenuMobile>
								<button onMouseDown={handleMobileMenuClick}>
									{currentLocation} {mobileMenuVisible ? <BiCaretUp /> : <BiCaretDown />}
								</button>

								<Navbar.MenuListMobile isVisible={mobileMenuVisible}>
									<NavLink exact to={BROWSE}>
										<Navbar.MenuItemMobile>Home</Navbar.MenuItemMobile>
									</NavLink>
									<NavLink exact to={SERIES} onMouseDown={() => dispatch(clearSelectedGenre())}>
										<Navbar.MenuItemMobile>Series</Navbar.MenuItemMobile>
									</NavLink>
									<NavLink exact to={FILMS} onMouseDown={() => dispatch(clearSelectedGenre())}>
										<Navbar.MenuItemMobile>Films</Navbar.MenuItemMobile>
									</NavLink>
									<NavLink exact to={LATEST}>
										<Navbar.MenuItemMobile>Latest</Navbar.MenuItemMobile>
									</NavLink>
									<NavLink exact to={MYLIST}>
										<Navbar.MenuItemMobile>My List</Navbar.MenuItemMobile>
									</NavLink>
								</Navbar.MenuListMobile>
							</Navbar.MenuMobile>
						</Navbar.MenuWrapper>
					</Navbar.Divide>
				)}
			</Navbar.Container>
			{genres && (
				<Navbar.Genres genres={genres} scrolled={scrolled}>
					{selectedGenre ? (
						<>
							<button onMouseDown={() => dispatch(clearSelectedGenre())}>{genresType}</button>
							<span>&gt;</span>
							<h1>{selectedGenre}</h1>
						</>
					) : (
						<>
							<h1>{genresType}</h1>
							<Navbar.GenresButtonWrapper ref={genresDropdown}>
								<Navbar.GenresButton onMouseDown={() => setGenresListVisible(!genresListVisible)}>
									<span>Genres</span>
									<BiCaretDown />
								</Navbar.GenresButton>
								<Navbar.GenresListWrapper visible={genresListVisible}>
									{Array.from(Array(Math.ceil(genres.length / 8))).map((_, i) => (
										<Navbar.GenresList key={`${genres[i].id}${i}`}>
											{genres.slice(i === 0 ? i : i * 8, i === 0 ? 8 : (i + 1) * 8).map(li => (
												<Navbar.GenresItem key={li.id} onMouseDown={() => handleGenreItemClick(li.name, li.id)}>
													{li.name}
												</Navbar.GenresItem>
											))}
										</Navbar.GenresList>
									))}
								</Navbar.GenresListWrapper>
							</Navbar.GenresButtonWrapper>
						</>
					)}
				</Navbar.Genres>
			)}
		</Navbar>
	);
};

export default NavbarContainer;
