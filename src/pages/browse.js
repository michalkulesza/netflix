import React from "react";
import { useSelector } from "react-redux";
import { Header, Carousels } from "../components/";
import { NavbarContainer, CarouselsContainer, DetailsContainer, FooterContainer, HeaderContainer } from "../containers";
import GridContainer from "../containers/grid";

const Browse = () => {
	const { data, isUpdating } = useSelector(state => state.initialData);
	const listData = useSelector(state => state.initialData?.list);
	const headerData = useSelector(state => state.misc.headerVideo);
	const genreData = useSelector(state => state.fetchGenreData);
	const { selectedGenre } = useSelector(state => state.genres);
	const user = useSelector(state => state.user?.info);

	return (
		<>
			<NavbarContainer />
			{data && !isUpdating && user ? (
				<div style={{ position: "relative", overflow: "hidden" }}>
					<HeaderContainer headerData={headerData}></HeaderContainer>
					{selectedGenre ? (
						<GridContainer data={genreData.data} isUpdating={genreData.isUpdating} />
					) : (
						<CarouselsContainer listData={listData} data={data} />
					)}
					<DetailsContainer headerData={headerData} />
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
