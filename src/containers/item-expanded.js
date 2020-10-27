import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDetails, setGlobalMute } from "../redux/actions/toggles";
import { setPlayerFilm, setPlayerTV } from "../redux/actions/player";
import { setDetailsPosition } from "../redux/actions/misc";
import { useHistory } from "react-router-dom";
import { ItemExpanded, Button } from "../components";
import { WATCH } from "../constants/routes";
import LazyLoad from "react-lazyload";

import { BiPlay, BiPlus, BiLike, BiDislike, BiChevronDown } from "react-icons/bi";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import placeholder from "../res/images/placeholder_w.jpg";
const videoPlayerSrc = "http://localhost:8888/video/night";

const ItemExpandedContainer = ({ isVisible, showVideo, position, videoFile }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const videoPlayerRef = useRef(null);
	const containerRef = useRef(null);
	const [isPlaceholder, setIsPlaceholder] = useState(true);
	const [videoCanPlay, setVideoCanPlay] = useState(false);
	const [videoEnded, setVideoEnded] = useState(false);
	const [itemCache, setItemCache] = useState(null);
	const [shouldRender, setShouldRender] = useState(false);
	const { globalMute } = useSelector(state => state.toggles);
	const item = useSelector(state => state.fetchDetails?.details[0]);
	const ageRestriction = useSelector(state => state.fetchDetails?.ageRestriction);
	const episodes = useSelector(state => state.fetchEpisodes.data);

	useEffect(() => {
		setItemCache(null);
	}, []);

	useEffect(() => {
		if (item && !itemCache) setItemCache(item);
		if (item && !shouldRender && isVisible) setShouldRender(true);
	}, [item, itemCache, shouldRender, isVisible]);

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

	const handleMuteClick = () => dispatch(setGlobalMute(!globalMute));

	const handleClickMoreDetails = ({ currentTarget }) => {
		const elemPos = currentTarget.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect();
		dispatch(setDetailsPosition(elemPos.x, elemPos.y, elemPos.width, elemPos.height));
		dispatch(setIsDetails(true));
	};

	const handleVideoCanPlayThrough = () => setVideoCanPlay(true);
	const handleVideoEnded = () => setVideoEnded(true);
	const handleOnAnimationEnd = () => {
		if (!isVisible) {
			setShouldRender(false);
			setIsPlaceholder(true);
		}
	};

	const handlePlay = () => {
		if (item && ageRestriction) {
			if (item.media_type === "movie") {
				dispatch(
					setPlayerFilm({
						title: item.title,
						src: videoPlayerSrc,
						backdrop: item.backdrop_path_1280,
						description: item.overview,
						year: item.release_date?.slice(0, 4),
						ageRestriction,
						runtime: item.runtime,
					})
				);
				history.push(WATCH);
			}
			if (item.media_type === "tv") {
				dispatch(
					setPlayerTV({
						id: item.id,
						title: item.name,
						src: videoPlayerSrc,
						backdrop: item.backdrop_path_1280,
						description: item.overview,
						ep_title: episodes[0]?.name,
						ep_number: episodes[0]?.episode_number,
						ep_season: episodes[0]?.season_number,
					})
				);
				history.push(WATCH);
			}
		}
	};

	return (
		<ItemExpanded isVisible={isVisible} position={position} onTransitionEnd={handleOnAnimationEnd} ref={containerRef}>
			{shouldRender && itemCache ? (
				<>
					<ItemExpanded.Header>
						<ItemExpanded.Placeholder
							src={
								itemCache.backdrop_path_500
									? itemCache.backdrop_path_500
									: itemCache.poster_path_500
									? itemCache.poster_path_500
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
								<Button.Round inverted onMouseDown={handlePlay}>
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
									label={itemCache.media_type === "movie" ? "More info" : "Episodes & Info"}
									onMouseDown={e => handleClickMoreDetails(e)}
								>
									<BiChevronDown />
								</Button.Round>
							</ItemExpanded.Half>
						</ItemExpanded.Buttons>
						<ItemExpanded.Info>
							<p>96% Match</p>
							<span>{`${ageRestriction} `}</span>
							{itemCache.media_type === "movie"
								? `${itemCache?.runtime}m`
								: `${itemCache?.number_of_seasons} ${itemCache?.number_of_seasons > 1 ? "Seasons" : "Season"}`}
						</ItemExpanded.Info>
						<ItemExpanded.GenreWrapper>
							{itemCache.genre_ids &&
								itemCache.genre_ids.slice(0, 2).map((genre, i) => (
									<ItemExpanded.Genre key={i}>
										{genre}
										{i !== itemCache.genre_ids.slice(0, 2).length - 1 && <span>•</span>}
									</ItemExpanded.Genre>
								))}
						</ItemExpanded.GenreWrapper>
					</ItemExpanded.Main>
				</>
			) : (
				<>
					<ItemExpanded.Header>
						<ItemExpanded.Loading />
					</ItemExpanded.Header>
					<ItemExpanded.Main>
						<ItemExpanded.Buttons></ItemExpanded.Buttons>
						<ItemExpanded.Half>
							<Button.Round isLoading></Button.Round>
							<Button.Round isLoading></Button.Round>
						</ItemExpanded.Half>
					</ItemExpanded.Main>
				</>
			)}
		</ItemExpanded>
	);
};

export default ItemExpandedContainer;
