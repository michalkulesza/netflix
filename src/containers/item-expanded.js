import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDetails, setIsExpanded, setGlobalMute } from "../redux/actions/toggles";
import { setDetailsPosition } from "../redux/actions/misc";
import { fetchDetailsMovie, fetchDetailsTv } from "../redux/actions/fetch-details";
import LazyLoad from "react-lazyload";
import { ItemExpanded, Button } from "../components";

import { BiPlay, BiPlus, BiLike, BiDislike, BiChevronDown } from "react-icons/bi";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import placeholder from "../res/images/placeholder_h.jpg";

const ItemExpandedContainer = ({ isExpanded, showVideo, position, item, videoFile }) => {
	const dispatch = useDispatch();
	const videoPlayerRef = useRef(null);
	const containerRef = useRef(null);
	const [isPlaceholder, setIsPlaceholder] = useState(true);
	const [videoCanPlay, setVideoCanPlay] = useState(false);
	const [videoEnded, setVideoEnded] = useState(false);
	const { globalMute } = useSelector(state => state.toggles);

	useEffect(() => {
		if (!isExpanded) {
			dispatch(setIsExpanded(false));
			setIsPlaceholder(true);
			videoPlayerRef.current && videoPlayerRef.current.pause();
		}
	}, [isExpanded, dispatch]);

	useEffect(() => {
		if (showVideo) {
			if (!videoEnded && videoPlayerRef.current && videoCanPlay) {
				setIsPlaceholder(false);
				videoPlayerRef.current.volume = 0.4;
				videoPlayerRef.current.play();
			} else {
				setIsPlaceholder(true);
			}
		}
	}, [showVideo, videoEnded, videoCanPlay]);

	const handleClickMoreDetails = ({ currentTarget }) => {
		const elemPos = currentTarget.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect();
		dispatch(setDetailsPosition(elemPos.x, elemPos.y, elemPos.width, elemPos.height));
		dispatch(setIsDetails(true));
	};

	const handleMouseEnter = () =>
		item.media_type === "movie" ? dispatch(fetchDetailsMovie(item.id)) : dispatch(fetchDetailsTv(item.id));

	const handleMuteClick = () => dispatch(setGlobalMute(!globalMute));

	const handleVideoCanPlayThrough = () => setVideoCanPlay(true);

	const handleVideoEnded = () => setVideoEnded(true);

	return (
		item && (
			<ItemExpanded isExpanded={isExpanded} position={position} onMouseEnter={handleMouseEnter} ref={containerRef}>
				<ItemExpanded.Header>
					<ItemExpanded.Placeholder
						src={
							item.backdrop_path_500
								? item.backdrop_path_500
								: item.poster_path_500
								? item.poster_path_500
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
					<LazyLoad>
						<ItemExpanded.Video
							src={videoFile}
							muted={globalMute}
							ref={videoPlayerRef}
							onCanPlayThrough={handleVideoCanPlayThrough}
							onEnded={handleVideoEnded}
						/>
					</LazyLoad>
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
								label={item.media_type === "movie" ? "More info" : "Episodes & Info"}
								onMouseDown={e => handleClickMoreDetails(e)}
							>
								<BiChevronDown />
							</Button.Round>
						</ItemExpanded.Half>
					</ItemExpanded.Buttons>
					<ItemExpanded.Info>
						<p>96% Match</p>
						<span>{`12 `}</span>
						{item.media_type === "movie" ? "1h 40m" : "3 Seasons"}
					</ItemExpanded.Info>
					<ItemExpanded.GenreWrapper>
						{item.genre_ids &&
							item.genre_ids.slice(0, 2).map((genre, i) => (
								<ItemExpanded.Genre key={i}>
									{genre}
									{i !== item.genre_ids.slice(0, 2).length - 1 && <span>•</span>}
								</ItemExpanded.Genre>
							))}
					</ItemExpanded.GenreWrapper>
				</ItemExpanded.Main>
			</ItemExpanded>
		)
	);
};

export default ItemExpandedContainer;
