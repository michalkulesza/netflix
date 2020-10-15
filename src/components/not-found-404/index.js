import React from "react";
import { Main, Heading, Text } from "./styles/not-found-404";
import { Button } from "../";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";

const NotFound404 = ({ children }) => {
	return (
		<Main>
			<Heading>404</Heading>
			<Text>Page has not been found</Text>
			<Button>
				<Link to={HOME}>TAKE ME BACK</Link>
			</Button>
			{children}
		</Main>
	);
};

export default NotFound404;
