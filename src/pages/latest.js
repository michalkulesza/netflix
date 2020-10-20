import React from "react";
import { useSelector } from "react-redux";
import { Carousels } from "../components";
import { NavbarContainer, CarouselsContainer, DetailsContainer, FooterContainer } from "../containers";

const Latest = () => {
	const { data } = useSelector(state => state.initialData);

	return (
		<>
			<NavbarContainer />
			{data ? (
				<>
					<CarouselsContainer data={data} noMargin />
					<DetailsContainer />
				</>
			) : (
				<Carousels.Loading />
			)}
			<FooterContainer />
		</>
	);
};

export default Latest;
