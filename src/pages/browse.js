import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Carousels } from "../components/";
import { NavbarContainer, HeaderContainer, CarouselsContainer, DetailsContainer } from "../containers";
import { setInitialData } from "../redux/actions";
import LazyLoad from "react-lazyload";
import VideoFile from "../res/videos/mindhunter_trailer.mp4";
import VideoLogo from "../res/images/mindhunter-logo.png";

const Browse = () => {
	const dispatch = useDispatch();
	const data = useSelector(state => state.initialData);

	useEffect(() => {
		dispatch(setInitialData(null));
	}, [dispatch]);

	return (
		<>
			<NavbarContainer />
			{data ? (
				<>
					<LazyLoad placeholder={<Header.Loading />}>
						<HeaderContainer
							videoUrl={VideoFile}
							ageRestriction={12}
							videoLogo={VideoLogo}
							videoDescription={
								"In 1977, frustrated FBI hostage negotiator Holden Ford finds an unlikely ally in veteran agent Bill Tench and begins studying a new class of murderer."
							}
							alt={"Mindhunter"}
						></HeaderContainer>
					</LazyLoad>
					<CarouselsContainer data={data} />
					<DetailsContainer />
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
