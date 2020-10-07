import React from "react";
import { useSelector } from "react-redux";
import { Carousels } from "../components/";
import { NavbarContainer, CarouselsContainer, DetailsContainer } from "../containers";

const MyList = () => {
	const data = useSelector(state => state.initialData);

	return (
		<>
			<NavbarContainer />
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

export default MyList;
