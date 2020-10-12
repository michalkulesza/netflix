import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Button } from "../../components";
import { setIsDetails } from "../../redux/actions/toggles";
import { setGlobalMute } from "../../redux/actions/misc";

import { GrPlayFill, GrClose } from "react-icons/gr";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { BiPlus, BiLike, BiDislike } from "react-icons/bi";
import placeholder from "../../res/images/placeholder_w.jpg";

const DetailsHeaderContainer = ({ item }) => {
	const dispatch = useDispatch();
	const globalMute = useSelector(state => state.misc.globalMute);
	const headerData = useSelector(state => state.misc.headerVideo);

	const handleClose = () => {
		dispatch(setIsDetails(false));
	};

	const handleMute = () => {
		dispatch(setGlobalMute(!globalMute));
	};

	return (
		<DetailsHeader>
			{headerData && item ? (
				<>
					<DetailsHeader.Video src={headerData.src} autoPlay muted />
					<DetailsHeader.Cover
						src={item.details.backdrop_path_1280 ? item.details.backdrop_path_1280 : placeholder}
					></DetailsHeader.Cover>
					<DetailsHeader.Overlay>
						<DetailsHeader.OverlayHalf>
							<DetailsHeader.Logo src={headerData.logo} alt="Video Logo" />
							<DetailsHeader.ButtonsContainer>
								<Button.Square>
									<GrPlayFill /> Play
								</Button.Square>
								<Button.Round label="Add to My List">
									<BiPlus />
								</Button.Round>
								<Button.Round label="I like this">
									<BiLike />
								</Button.Round>
								<Button.Round label="Not for me">
									<BiDislike />
								</Button.Round>
							</DetailsHeader.ButtonsContainer>
						</DetailsHeader.OverlayHalf>
						<DetailsHeader.OverlayHalf>
							<Button.Round dark onMouseDown={handleClose}>
								<GrClose />
							</Button.Round>
							<Button.Round onMouseDown={handleMute}>{globalMute ? <GiSpeakerOff /> : <GiSpeaker />}</Button.Round>
						</DetailsHeader.OverlayHalf>
					</DetailsHeader.Overlay>
				</>
			) : (
				<DetailsHeader.Loading />
			)}
		</DetailsHeader>
	);
};

export default DetailsHeaderContainer;
