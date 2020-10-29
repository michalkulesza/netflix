import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Button } from "../../components";
import { setGlobalMute, setIsDetails } from "../../redux/actions/toggles";
import { dislikeVideo, likeVideo, toggleVideoToList } from "../../redux/actions/user";

import { GrPlayFill, GrClose } from "react-icons/gr";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { BiPlus, BiMinus, BiLike, BiDislike } from "react-icons/bi";
import placeholder from "../../res/images/placeholder_w.jpg";
import { useEffect } from "react";

let videoTimer;
let placeholderTimer;

const DetailsHeaderContainer = ({ item, scrolled }) => {
	const VideoPlayer = useRef(null);
	const dispatch = useDispatch();
	const [isPlaceholder, setIsPlaceholder] = useState(true);
	const globalMute = useSelector(state => state.toggles.globalMute);
	const headerData = useSelector(state => state.misc.headerVideo);
	const userID = JSON.parse(localStorage.getItem("authUser"))?.uid;
	const { liked, disliked, list } = useSelector(state => state.user);

	useEffect(() => {
		if (VideoPlayer.current) {
			if (scrolled < 200) {
				VideoPlayer.current.volume = 0.4;
				placeholderTimer = setTimeout(() => {
					setIsPlaceholder(false);
					videoTimer = setTimeout(() => VideoPlayer.current?.play(), 500);
				}, 2000);
			} else {
				clearTimeout(placeholderTimer);
				clearTimeout(videoTimer);
				VideoPlayer.current.pause();
			}
		}
	}, [scrolled]);
	console.log(item.id);
	const handleClose = () => dispatch(setIsDetails(false));
	const handleMute = () => dispatch(setGlobalMute(!globalMute));
	const handleListClick = () => dispatch(toggleVideoToList(userID, item.details[0].id));
	const handleLikeClick = () => dispatch(likeVideo(userID, item.details[0].id));
	const handleDislikeClick = () => dispatch(dislikeVideo(userID, item.details[0].id));

	return (
		<DetailsHeader>
			{headerData && item.details[0] ? (
				<>
					<DetailsHeader.Video src={headerData.src} muted={globalMute} ref={VideoPlayer} />
					<DetailsHeader.Cover
						src={item.details[0].backdrop_path_1280 ? item.details[0].backdrop_path_1280 : placeholder}
						isPlaceholder={isPlaceholder}
					/>
					<DetailsHeader.Overlay>
						<DetailsHeader.OverlayHalf>
							<DetailsHeader.Logo src={headerData.logo} alt="Video Logo" />
							<DetailsHeader.ButtonsContainer>
								<Button.Square>
									<GrPlayFill /> Play
								</Button.Square>
								<Button.Round
									label={list.includes(item.details[0].id) ? "Remove from My List" : "Add to My List"}
									onMouseDown={handleListClick}
								>
									{list.includes(item.details[0].id) ? <BiMinus /> : <BiPlus />}
								</Button.Round>
								<Button.Round
									inverted={liked.includes(item.details[0].id)}
									label={liked.includes(item.details[0].id) ? "Remove like" : "I like this"}
									onMouseDown={handleLikeClick}
								>
									<BiLike />
								</Button.Round>
								<Button.Round
									inverted={disliked.includes(item.details[0].id)}
									label={disliked.includes(item.details[0].id) ? "Remove dislike" : "Not for me"}
									onMouseDown={handleDislikeClick}
								>
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
