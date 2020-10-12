import React from "react";
import { useSelector } from "react-redux";
import { Header, Carousels } from "../components/";
import { NavbarContainer, HeaderContainer, CarouselsContainer, DetailsContainer } from "../containers";
import LazyLoad from "react-lazyload";

const Browse = () => {
	const data = useSelector(state => state.initialData.data);
	const headerData = useSelector(state => state.misc.headerVideo);
	const dataUpdating = useSelector(state => state.initialData.isUpdating);

	return (
		<>
			<NavbarContainer />
			{data && !dataUpdating ? (
				<>
					<LazyLoad placeholder={<Header.Loading />}>
						<HeaderContainer headerData={headerData}></HeaderContainer>
					</LazyLoad>
					<CarouselsContainer data={data} />
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
