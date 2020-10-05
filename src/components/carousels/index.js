import React from "react";
import { Main, Loading, LoadingItem, LoadingPlaceholder } from "./styles/carousels";

const Carousels = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Carousels.Loading = () => {
	return (
		<Loading>
			<LoadingItem>
				<LoadingPlaceholder />
				<LoadingPlaceholder />
			</LoadingItem>
			<LoadingItem>
				<LoadingPlaceholder />
				<LoadingPlaceholder />
			</LoadingItem>
			<LoadingItem>
				<LoadingPlaceholder />
				<LoadingPlaceholder />
			</LoadingItem>
		</Loading>
	);
};

export default Carousels;
