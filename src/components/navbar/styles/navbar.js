import styled from "styled-components/macro";
import { respondTo } from "../../../styles/respondTo";

export const Main = styled.div`
	position: ${({ genres }) => (genres ? "absolute" : "fixed")};
	max-width: 1920px;
	margin: 0 auto;
	width: 100%;
	height: 62px;
	z-index: 100;
	background: ${({ scrolled }) =>
		scrolled > 0 ? "#141414" : "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));"};
	transition: background 0.5s ease-in-out;

	${respondTo.xs`
		padding: 12px 0;
	`};
`;

export const Container = styled.div`
	margin: 0 5%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	${respondTo.sm`
		margin: 0 45px;
	`};

	${respondTo.xs`
		margin: 0 2.5rem;
	`};
`;

export const Logo = styled.img`
	height: ${({ largeLogo }) => (largeLogo ? "35px" : "30px")};
	padding-top: 0.5em;
	margin-right: 1.5em;

	${respondTo.sm`
		height: ${({ largeLogo }) => (largeLogo ? "42px" : "32px")};
	`};

	${respondTo.xs`
		height: ${({ largeLogo }) => (largeLogo ? "39px" : "35px")};
	`};
`;

export const MenuWrapper = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
`;

export const Menu = styled.ul`
	position: absolute;
	display: flex;
	align-items: center;
	visibility: hidden;

	a.active {
		font-weight: 600;
		li {
			color: #fff;
		}
	}

	${respondTo.xs`
		visibility: visible;
	`};
`;

export const MenuItem = styled.li`
	color: #e5e5e5;
	cursor: pointer;
	transition: color 0.4s;
	margin-right: 1.8em;
	font-size: 0.8em;

	&:hover {
		color: #b3b3b3;
	}
`;

export const MenuMobile = styled.div`
	visibility: visible;
	position: absolute;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	font-size: 0.8em;

	button {
		background-color: transparent;
		color: #fff;
		display: flex;
		align-items: center;

		span {
			transform: scale(1.2);
		}
	}

	${respondTo.xs`
		visibility: hidden;
	`};
`;

export const MenuListMobile = styled.ul`
	display: flex;
	font-size: 1.2em;
	width: max-content;
	position: absolute;
	top: 80%;
	background-color: #141414;
	padding: 1em 2em 0;
	flex-direction: column;
	opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

export const MenuItemMobile = styled.li`
	margin-bottom: 1.1em;
`;

export const Divide = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	width: 60%;
`;

export const Genres = styled.div`
	position: ${({ scrolled }) => (scrolled > 62 ? "fixed" : "absolute")};
	top: ${({ scrolled }) => (scrolled > 62 ? "0" : "100%")};
	left: 0;
	height: 50px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 2em 2.5em;
	background-color: ${({ scrolled }) => (scrolled > 0 ? "#141414" : "transparent")};
	transition: background-color 500ms ease-in-out;

	h1 {
		font-size: 2.5em;
		font-weight: 600;
		margin-right: 1em;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	> button {
		font-size: 1.1em;
		font-weight: 500;
		margin-right: 0.5em;
		color: #808080;
		background-color: transparent;
	}

	span {
		margin-right: 0.5em;
		color: #808080;
	}
`;

export const GenresButtonWrapper = styled.div`
	position: relative;
`;

export const GenresButton = styled.button`
	font-size: 0.7em;
	font-weight: 600;
	display: flex;
	align-items: center;
	background-color: black;
	color: white;
	border: 1px solid white;
	padding: 5px 10px;
	span {
		margin-right: 1em;
	}
`;

export const GenresListWrapper = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	display: flex;
	background-color: rgba(0, 0, 0, 0.9);
	border: solid 1px rgba(255, 255, 255, 0.15);
	padding: 5px 10px;
	opacity: ${({ visible }) => (visible ? "1" : "0")};
	pointer-events: ${({ visible }) => (visible ? "all" : "none")};
	transition: opacity 200ms ease-in-out;
`;

export const GenresList = styled.ul`
	max-height: 300px;
	margin-right: 2em;
	line-height: 1.5em;
`;

export const GenresItem = styled.li`
	font-size: 0.9em;
	cursor: pointer;
	white-space: nowrap;

	&:hover {
		text-decoration: underline;
	}
`;
