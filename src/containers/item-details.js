import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetails, clearDetails } from "../redux/actions";
import { ItemDetails } from "../components";

import { GlobalStyles } from "../global-styles";
import { GrClose, GrPlayFill } from "react-icons/gr";
import { GiSpeaker } from "react-icons/gi";
import { BiPlus, BiLike, BiDislike } from "react-icons/bi";

import VideoFile from "../res/videos/mindhunter_trailer.mp4";
import VideoLogo from "../res/images/mindhunter-logo.png";

const ItemDetailsContainer = () => {
	const dispatch = useDispatch();
	const isDetails = useSelector(state => state.toggles.isDetails);
	const position = useSelector(state => state.toggles.detailsPosition);
	const item = useSelector(state => state.fetchDetails);
	const [shouldRender, setRender] = useState(isDetails);

	useEffect(() => {
		if (isDetails && item) setRender(true);
	}, [isDetails, item]);

	const onAnimationEnd = () => {
		if (!isDetails) {
			setRender(false);
			dispatch(clearDetails());
		}
	};

	const handleClose = () => {
		dispatch(setDetails(false));
	};

	return shouldRender ? (
		<ItemDetails.Container isDetails={isDetails}>
			<ItemDetails isDetails={isDetails} position={position} onAnimationEnd={onAnimationEnd}>
				<ItemDetails.Header>
					<ItemDetails.Video src={VideoFile} loop muted></ItemDetails.Video>
					<ItemDetails.Cover src={item && item.details.backdrop_path_1280}></ItemDetails.Cover>
					<ItemDetails.Overlay>
						<ItemDetails.OverlayHalf>
							<ItemDetails.Logo src={VideoLogo} alt="Video Logo" />
							<ItemDetails.ButtonsContainer>
								<ItemDetails.VideoButton>
									<GrPlayFill /> Play
								</ItemDetails.VideoButton>
								<ItemDetails.Button>
									<BiPlus />
									<ItemDetails.Label>Add to My List</ItemDetails.Label>
								</ItemDetails.Button>
								<ItemDetails.Button>
									<BiLike />
									<ItemDetails.Label>I like this</ItemDetails.Label>
								</ItemDetails.Button>
								<ItemDetails.Button>
									<BiDislike />
									<ItemDetails.Label>Not for me</ItemDetails.Label>
								</ItemDetails.Button>
							</ItemDetails.ButtonsContainer>
						</ItemDetails.OverlayHalf>
						<ItemDetails.OverlayHalf>
							<ItemDetails.OverlayButtonClose onMouseDown={handleClose}>
								<GrClose />
							</ItemDetails.OverlayButtonClose>
							<ItemDetails.Button>
								<GiSpeaker />
							</ItemDetails.Button>
						</ItemDetails.OverlayHalf>
					</ItemDetails.Overlay>
				</ItemDetails.Header>
				<ItemDetails.Info>
					<ItemDetails.InfoHalf>
						<ItemDetails.InfoContent>
							<p>96% Match</p>{" "}
							{item.details.first_air_date
								? item.details.first_air_date.slice(0, 4)
								: item.details.release_date.slice(0, 4)}{" "}
							<span>{item.ageRestriction}</span> {item.details.number_of_seasons} Season
							{item.details.number_of_seasons > 1 && "s"}
						</ItemDetails.InfoContent>
						<ItemDetails.InfoDescription>{item.details.overview}</ItemDetails.InfoDescription>
					</ItemDetails.InfoHalf>
					<ItemDetails.InfoHalf>
						<ItemDetails.InfoCast>
							<span>Cast:</span> {item.cast.map((el, i) => `${el.name}${item.cast.length - 1 !== i ? ", " : ""}`)}
						</ItemDetails.InfoCast>
						<ItemDetails.InfoCast>
							<span>Genres:</span>{" "}
							{item.details.genres.map((el, i) => `${el.name}${item.details.genres.length - 1 !== i ? ", " : ""}`)}
						</ItemDetails.InfoCast>
					</ItemDetails.InfoHalf>
				</ItemDetails.Info>
			</ItemDetails>
			<GlobalStyles disableScrolling={isDetails} />
		</ItemDetails.Container>
	) : null;
};

export default ItemDetailsContainer;
