import React from "react";
import { useDispatch } from "react-redux";
import { DetailsHeader } from "../../components";
import { setDetails } from "../../redux/actions";

import { GrPlayFill, GrClose } from "react-icons/gr";
import { GiSpeaker } from "react-icons/gi";
import { BiPlus, BiLike, BiDislike } from "react-icons/bi";

const DetailsHeaderContainer = ({ VideoFile, VideoLogo, item }) => {
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(setDetails(false));
	};

	return (
		<DetailsHeader>
			<DetailsHeader.Video src={VideoFile} loop muted></DetailsHeader.Video>
			<DetailsHeader.Cover src={item && item.details.backdrop_path_1280}></DetailsHeader.Cover>
			<DetailsHeader.Overlay>
				<DetailsHeader.OverlayHalf>
					<DetailsHeader.Logo src={VideoLogo} alt="Video Logo" />
					<DetailsHeader.ButtonsContainer>
						<DetailsHeader.VideoButton>
							<GrPlayFill /> Play
						</DetailsHeader.VideoButton>
						<DetailsHeader.Button>
							<BiPlus />
							<DetailsHeader.Label>Add to My List</DetailsHeader.Label>
						</DetailsHeader.Button>
						<DetailsHeader.Button>
							<BiLike />
							<DetailsHeader.Label>I like this</DetailsHeader.Label>
						</DetailsHeader.Button>
						<DetailsHeader.Button>
							<BiDislike />
							<DetailsHeader.Label>Not for me</DetailsHeader.Label>
						</DetailsHeader.Button>
					</DetailsHeader.ButtonsContainer>
				</DetailsHeader.OverlayHalf>
				<DetailsHeader.OverlayHalf>
					<DetailsHeader.OverlayButtonClose onMouseDown={handleClose}>
						<GrClose />
					</DetailsHeader.OverlayButtonClose>
					<DetailsHeader.Button>
						<GiSpeaker />
					</DetailsHeader.Button>
				</DetailsHeader.OverlayHalf>
			</DetailsHeader.Overlay>
		</DetailsHeader>
	);
};

export default DetailsHeaderContainer;
