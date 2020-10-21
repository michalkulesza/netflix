import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDetails, setIsExpanded, setGlobalMute } from "../redux/actions/toggles";
import { clearExpandedPosition, setDetailsPosition } from "../redux/actions/misc";
import { ItemExpanded, Button } from "../components";

import { BiPlay, BiPlus, BiLike, BiDislike, BiChevronDown } from "react-icons/bi";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import placeholder from "../res/images/placeholder_h.jpg";
import { useClickOutside } from "../hooks";

const transformOrigin = "middle"; //REMOVE

const ItemExpandedContainer = () => {
	const dispatch = useDispatch();
	const videoPlayerRef = useRef(null);
	const expandedRef = useRef(null);
	const [isPlaceholder, setIsPlaceholder] = useState(true);
	const [videoCanPlay, setVideoCanPlay] = useState(false);
	const [videoEnded, setVideoEnded] = useState(false);
	const { globalMute, isExpanded } = useSelector(state => state.toggles);
	const { expandedPosition: position, headerVideo } = useSelector(state => state.misc);
	const data = useSelector(state => state.fetchDetails);

	useClickOutside(expandedRef, () => dispatch(clearExpandedPosition()));

	useEffect(() => {
		if (!position && isExpanded) {
			dispatch(setIsExpanded(false));
		}
	}, [position, dispatch, isExpanded]);

	useEffect(() => {
		if (!videoEnded && videoPlayerRef.current && videoCanPlay) {
			setIsPlaceholder(false);
			videoPlayerRef.current.volume = 0.4;
			videoPlayerRef.current.play();
		} else {
			setIsPlaceholder(true);
		}
	}, [videoEnded, videoCanPlay]);

	const handleClickMoreDetails = ({ currentTarget }) => {
		const elemPos = currentTarget.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect();
		dispatch(setDetailsPosition(elemPos.x, elemPos.y, elemPos.width, elemPos.height));
		dispatch(setIsDetails(true));
	};

	const handleMouseEnter = () => {};
	// item.media_type === "movie" ? dispatch(fetchDetailsMovie(item.id)) : dispatch(fetchDetailsTv(item.id));

	const handleMuteClick = () => dispatch(setGlobalMute(!globalMute));

	const handleVideoCanPlayThrough = () => setVideoCanPlay(true);

	const handleVideoEnded = () => setVideoEnded(true);

	return data && position ? (
		<ItemExpanded
			position={position}
			transformOrigin={transformOrigin}
			onMouseEnter={handleMouseEnter}
			offset={window.pageYOffset}
			ref={expandedRef}
		>
			<ItemExpanded.Header>
				<ItemExpanded.Placeholder
					src={
						data.details.backdrop_path_500
							? data.details.backdrop_path_500
							: data.details.poster_path_500
							? data.details.poster_path_500
							: placeholder
					}
					alt="Poster"
					isPlaceholder={isPlaceholder}
				/>
				<ItemExpanded.Overlay>
					<Button.Round onMouseDown={handleMuteClick} marginRight={"0"}>
						{globalMute ? <GiSpeakerOff /> : <GiSpeaker />}
					</Button.Round>
				</ItemExpanded.Overlay>
				<ItemExpanded.Video
					src={headerVideo.src}
					muted={globalMute}
					ref={videoPlayerRef}
					onCanPlayThrough={handleVideoCanPlayThrough}
					onEnded={handleVideoEnded}
				/>
			</ItemExpanded.Header>
			<ItemExpanded.Main>
				<ItemExpanded.Buttons>
					<ItemExpanded.Half>
						<Button.Round inverted>
							<BiPlay />
						</Button.Round>
						<Button.Round label="Add to My List">
							<BiPlus />
						</Button.Round>
						<Button.Round label="I like this">
							<BiLike />
						</Button.Round>
						<Button.Round label="Not for me">
							<BiDislike />
						</Button.Round>
					</ItemExpanded.Half>
					<ItemExpanded.Half>
						<Button.Round
							label={data.details.runtime ? "More info" : "Episodes & Info"}
							onMouseDown={e => handleClickMoreDetails(e)}
						>
							<BiChevronDown />
						</Button.Round>
					</ItemExpanded.Half>
				</ItemExpanded.Buttons>
				<ItemExpanded.Info>
					<p>96% Match</p>
					<span>{`12 `}</span>
					{data.details.runtime
						? `${data.details.runtime}min`
						: data.details.number_of_seasons
						? `${data.details.number_of_seasons}${data.details.number_of_seasons === 1 ? " Season" : " Seasons"}`
						: null}
				</ItemExpanded.Info>
				<ItemExpanded.GenreWrapper>
					{data.details.genres?.slice(0, 2).map((genre, i) => (
						<ItemExpanded.Genre key={i}>
							{genre.name}
							{i !== data.details.genres.slice(0, 2).length - 1 && <span>•</span>}
						</ItemExpanded.Genre>
					))}
				</ItemExpanded.GenreWrapper>
			</ItemExpanded.Main>
		</ItemExpanded>
	) : null;
};
export default ItemExpandedContainer;
