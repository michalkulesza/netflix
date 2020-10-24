import React from "react";
import { useSelector } from "react-redux";
import { Header, Carousels } from "../components/";
import {
	NavbarContainer,
	CarouselsContainer,
	DetailsContainer,
	FooterContainer,
	HeaderContainer,
	ItemExpandedContainer,
} from "../containers";
import GridContainer from "../containers/grid";

const Browse = () => {
	const { data, isUpdating } = useSelector(state => state.initialData);
	const headerData = useSelector(state => state.misc.headerVideo);
	const { selectedGenre } = useSelector(state => state.genres);

	return (
		<>
			<NavbarContainer />
			{data && !isUpdating ? (
				<div style={{ position: "relative" }}>
					<HeaderContainer headerData={headerData}></HeaderContainer>
					{selectedGenre ? <GridContainer /> : <CarouselsContainer data={data} />}
					<DetailsContainer headerData={headerData} />
					<ItemExpandedContainer />
				</div>
			) : (
				<>
					<Header.Loading />
					<Carousels.Loading />
				</>
			)}
			<FooterContainer />
		</>
	);
};

export default Browse;
