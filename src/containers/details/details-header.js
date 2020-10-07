import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Button } from "../../components";
import { setDetails, setGlobalMute } from "../../redux/actions";

import { GrPlayFill, GrClose } from "react-icons/gr";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { BiPlus, BiLike, BiDislike } from "react-icons/bi";

const DetailsHeaderContainer = ({ VideoFile, VideoLogo, item }) => {
	const dispatch = useDispatch();
	const muted = useSelector(state => state.misc.globalMute);

	const handleClose = () => {
		dispatch(setDetails(false));
	};

	const handleMute = () => {
		dispatch(setGlobalMute(!muted));
	};

	return (
		<DetailsHeader>
			<DetailsHeader.Video src={VideoFile} loop muted></DetailsHeader.Video>
			<DetailsHeader.Cover src={item && item.details.backdrop_path_1280}></DetailsHeader.Cover>
			<DetailsHeader.Overlay>
				<DetailsHeader.OverlayHalf>
					<DetailsHeader.Logo src={VideoLogo} alt="Video Logo" />
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
					<Button.Round onMouseDown={handleMute}>{muted ? <GiSpeakerOff /> : <GiSpeaker />}</Button.Round>
				</DetailsHeader.OverlayHalf>
			</DetailsHeader.Overlay>
		</DetailsHeader>
	);
};

export default DetailsHeaderContainer;
