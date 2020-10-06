import React from "react";
import { useDispatch } from "react-redux";
import { ItemDetailsHeader } from "../components";
import { setDetails } from "../redux/actions";

import { GrPlayFill, GrClose } from "react-icons/gr";
import { GiSpeaker } from "react-icons/gi";
import { BiPlus, BiLike, BiDislike } from "react-icons/bi";

const ItemDetailsHeaderContainer = ({ VideoFile, VideoLogo, item }) => {
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(setDetails(false));
	};

	return (
		<ItemDetailsHeader>
			<ItemDetailsHeader.Video src={VideoFile} loop muted></ItemDetailsHeader.Video>
			<ItemDetailsHeader.Cover src={item && item.details.backdrop_path_1280}></ItemDetailsHeader.Cover>
			<ItemDetailsHeader.Overlay>
				<ItemDetailsHeader.OverlayHalf>
					<ItemDetailsHeader.Logo src={VideoLogo} alt="Video Logo" />
					<ItemDetailsHeader.ButtonsContainer>
						<ItemDetailsHeader.VideoButton>
							<GrPlayFill /> Play
						</ItemDetailsHeader.VideoButton>
						<ItemDetailsHeader.Button>
							<BiPlus />
							<ItemDetailsHeader.Label>Add to My List</ItemDetailsHeader.Label>
						</ItemDetailsHeader.Button>
						<ItemDetailsHeader.Button>
							<BiLike />
							<ItemDetailsHeader.Label>I like this</ItemDetailsHeader.Label>
						</ItemDetailsHeader.Button>
						<ItemDetailsHeader.Button>
							<BiDislike />
							<ItemDetailsHeader.Label>Not for me</ItemDetailsHeader.Label>
						</ItemDetailsHeader.Button>
					</ItemDetailsHeader.ButtonsContainer>
				</ItemDetailsHeader.OverlayHalf>
				<ItemDetailsHeader.OverlayHalf>
					<ItemDetailsHeader.OverlayButtonClose onMouseDown={handleClose}>
						<GrClose />
					</ItemDetailsHeader.OverlayButtonClose>
					<ItemDetailsHeader.Button>
						<GiSpeaker />
					</ItemDetailsHeader.Button>
				</ItemDetailsHeader.OverlayHalf>
			</ItemDetailsHeader.Overlay>
		</ItemDetailsHeader>
	);
};

export default ItemDetailsHeaderContainer;
