import React from "react";
import { useSelector } from "react-redux";
import { Header, Carousels } from "../components/";
import { NavbarContainer, HeaderContainer, CarouselsContainer, DetailsContainer } from "../containers";
import LazyLoad from "react-lazyload";
import GridContainer from "../containers/grid";

const Browse = () => {
	const data = useSelector(state => state.initialData.data);
	const headerData = useSelector(state => state.misc.headerVideo);
	const dataUpdating = useSelector(state => state.initialData.isUpdating);
	const { selectedGenre } = useSelector(state => state.genres);

	return (
		<>
			<NavbarContainer />
			{data && !dataUpdating ? (
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
