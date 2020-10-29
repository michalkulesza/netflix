import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dislikeVideo, likeVideo, toggleVideoToList } from "../redux/actions/user";
import { setIsDetails, setGlobalMute } from "../redux/actions/toggles";
import { setPlayer } from "../redux/actions/player";
import { setDetailsPosition } from "../redux/actions/misc";
import { useHistory } from "react-router-dom";
import { ItemExpanded, Button } from "../components";
import { WATCH } from "../constants/routes";
import LazyLoad from "react-lazyload";
import { BASE_PATH } from "../constants/config";

import { BiPlay, BiPlus, BiMinus, BiLike, BiDislike, BiChevronDown } from "react-icons/bi";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import placeholder from "../res/images/placeholder_w.jpg";
const videoPlayerSrc = `${BASE_PATH}/video/night`;

const ItemExpandedContainer = ({ isVisible, showVideo, position, videoFile }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const videoPlayerRef = useRef(null);
	const containerRef = useRef(null);
	const [isPlaceholder, setIsPlaceholder] = useState(true);
	const [videoCanPlay, setVideoCanPlay] = useState(false);
	const [itemCache, setItemCache] = useState(null);
	const [shouldRender, setShouldRender] = useState(false);
	const [videoEnded, setVideoEnded] = useState(false);
	const item = useSelector(state => state.fetchDetails);
	const { globalMute } = useSelector(state => state.toggles);
	const episodes = useSelector(state => state.fetchEpisodes.data);
	const userID = JSON.parse(localStorage.getItem("authUser"))?.uid;
	const { liked, disliked, list } = useSelector(state => state.user);

	useEffect(() => {
		if (item && !isVisible) setItemCache(item);
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
		if (itemCache) {
			dispatch(
				setPlayer({
					type: itemCache.details.media_type,
					title: itemCache.details.title,
					src: videoPlayerSrc,
					backdrop: itemCache.details.backdrop_path_1280,
					description: itemCache.details.overview,
					ep_title: episodes && episodes[0]?.name,
					ep_number: episodes && episodes[0]?.episode_number,
					ep_season: episodes && episodes[0]?.season_number,
					year: itemCache.details.release_date?.slice(0, 4),
					ageRestriction: itemCache.details.ageRestriction,
					runtime: itemCache.details.runtime,
				})
			);
			history.push(WATCH);
		}
	};

	const handleLikeClick = () => dispatch(likeVideo(userID, item.details.id));
	const handleDislikeClick = () => dispatch(dislikeVideo(userID, item.details.id));
	const handleToggleVideoList = () => dispatch(toggleVideoToList(userID, item.details.id));

	return (
		<ItemExpanded isVisible={isVisible} position={position} onTransitionEnd={handleOnAnimationEnd} ref={containerRef}>
			{shouldRender && itemCache ? (
				<>
					<ItemExpanded.Header>
						<ItemExpanded.Placeholder
							src={
								itemCache.details.backdrop_path_500
									? itemCache.details.backdrop_path_500
									: itemCache.details.poster_path_500
									? itemCache.details.poster_path_500
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
								<Button.Round
									label={list.includes(itemCache.details.id) ? "Remove from My List" : "Add to My List"}
									onMouseDown={handleToggleVideoList}
								>
									{list.includes(itemCache.details.id) ? <BiMinus /> : <BiPlus />}
								</Button.Round>
								<Button.Round
									inverted={liked.includes(itemCache.details.id)}
									label={liked.includes(itemCache.details.id) ? "Remove like" : "I like this"}
									onMouseDown={handleLikeClick}
								>
									<BiLike />
								</Button.Round>
								<Button.Round
									inverted={disliked.includes(itemCache.details.id)}
									label={disliked.includes(itemCache.details.id) ? "Remove dislike" : "Not for me"}
									onMouseDown={handleDislikeClick}
								>
									<BiDislike />
								</Button.Round>
							</ItemExpanded.Half>
							<ItemExpanded.Half>
								<Button.Round
									label={itemCache.details.media_type === "movie" ? "More info" : "Episodes & Info"}
									onMouseDown={e => handleClickMoreDetails(e)}
								>
									<BiChevronDown />
								</Button.Round>
							</ItemExpanded.Half>
						</ItemExpanded.Buttons>
						<ItemExpanded.Info>
							<p>96% Match</p>
							<span>{itemCache.ageRestriction !== "" ? `${itemCache.ageRestriction} ` : "-"}</span>
							{itemCache.details.media_type === "movie"
								? `${itemCache.details?.runtime}m`
								: `${itemCache.details?.number_of_seasons} ${
										itemCache.details?.number_of_seasons > 1 ? "Seasons" : "Season"
								  }`}
						</ItemExpanded.Info>
						<ItemExpanded.GenreWrapper>
							{itemCache.details.genre_ids &&
								itemCache.details.genre_ids.slice(0, 2).map((genre, i) => (
									<ItemExpanded.Genre key={i}>
										{genre}
										{i !== itemCache.details.genre_ids.slice(0, 2).length - 1 && <span>•</span>}
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
