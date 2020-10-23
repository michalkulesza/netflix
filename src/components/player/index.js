import React from "react";
import { Main } from "./styles/player";

const Player = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default Player;
