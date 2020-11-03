import React from "react";
import { useSelector } from "react-redux";
import { Carousels } from "../components/";
import { NavbarContainer, DetailsContainer, FooterContainer } from "../containers";
import GridContainer from "../containers/grid";

const MyList = () => {
	const { list, isUpdating } = useSelector(state => state.initialData);
	const user = useSelector(state => state.user?.info);

	return (
		<>
			<NavbarContainer />
			{list && user ? (
				<>
					<GridContainer data={list} isUpdating={isUpdating} />
					<DetailsContainer />
				</>
			) : (
				<Carousels.Loading />
			)}
			<FooterContainer />
		</>
	);
};

export default MyList;
