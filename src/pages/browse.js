import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Carousels } from "../components/";
import { NavbarContainer, HeaderContainer, CarouselsContainer, DetailsContainer } from "../containers";
import { setInitialData } from "../redux/actions";
import LazyLoad from "react-lazyload";

const Browse = () => {
	const dispatch = useDispatch();
	const data = useSelector(state => state.initialData);
	const headerData = useSelector(state => state.misc.headerVideo);

	useEffect(() => {
		dispatch(setInitialData(null));
	}, [dispatch]);

	return (
		<>
			<NavbarContainer />
			{data ? (
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
