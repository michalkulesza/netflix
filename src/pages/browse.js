import React from "react";
import { useSelector } from "react-redux";
import { Header, Carousels } from "../components/";
import { NavbarContainer, HeaderContainer, CarouselsContainer, DetailsContainer } from "../containers";
import LazyLoad from "react-lazyload";
import GridContainer from "../containers/grid";

const Browse = () => {
	const { data, isUpdating } = useSelector(state => state.initialData);
	const headerData = useSelector(state => state.misc.headerVideo);
	const { selectedGenre } = useSelector(state => state.genres);

	return (
		<>
			<NavbarContainer />
			{data && !isUpdating ? (
				<>
					<LazyLoad placeholder={<Header.Loading />}>
						<HeaderContainer headerData={headerData}></HeaderContainer>
					</LazyLoad>
					{selectedGenre ? <GridContainer /> : <CarouselsContainer data={data} />}
					<DetailsContainer headerData={headerData} />
				</>
			) : (
				<>
					<Header.Loading />
					<Carousels.Loading />
				</>
			)}
		</>
	);
};

export default Browse;
