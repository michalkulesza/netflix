import styled from "styled-components/macro";
import { respondTo } from "../../../styles/respondTo";

export const Main = styled.div`
	position: fixed;
	max-width: 1920px;
	margin: 0 auto;
	padding-top: 10px;
	width: 100%;
	height: auto;
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

	${respondTo.sm`
		margin: 0 45px;
	`};

	${respondTo.xs`
		margin: 0 2.5rem;
	`};
`;

export const Logo = styled.img`
	height: ${({ largeLogo, smallLogo }) => (largeLogo ? "34px" : smallLogo ? "25px" : "24px")};
	padding-top: 0.5em;
	margin-right: 1.5em;

	${respondTo.md`
		height: ${({ largeLogo, smallLogo }) => (largeLogo ? "46px" : smallLogo ? "33px" : "36px")};
	`};

	${respondTo.sm`
		height: ${({ largeLogo, smallLogo }) => (largeLogo ? "42px" : smallLogo ? "30px" : "32px")};
	`};

	${respondTo.xs`
		height: ${({ largeLogo, smallLogo }) => (largeLogo ? "55px" : smallLogo ? "35px" : "45px")};
	`};
`;

export const Menu = styled.ul`
	display: flex;
	align-items: center;

	a.active {
		font-weight: 600;
		li {
			color: #fff;
		}
	}
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

export const Divide = styled.div`
	display: flex;
`;
