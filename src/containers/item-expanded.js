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

const ItemExpandedContainer = ({ isVisible, showVideo, position, videoFile, data, episodes }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const videoPlayerRef = useRef(null);
	const containerRef = useRef(null);
	const [isPlaceholder, setIsPlaceholder] = useState(true);
	const [videoCanPlay, setVideoCanPlay] = useState(false);
	const [shouldRender, setShouldRender] = useState(false);
	const [videoEnded, setVideoEnded] = useState(false);
	const { liked, disliked, list } = useSelector(state => state.user);
	const { globalMute } = useSelector(state => state.toggles);
	const userID = JSON.parse(localStorage.getItem("authUser"))?.uid;

	useEffect(() => {
		if (data && !shouldRender && isVisible) setShouldRender(true);
	}, [data, shouldRender, isVisible]);

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
		if (data) {
			dispatch(
				setPlayer({
					type: data.details.media_type,
					title: data.details.title,
					src: videoPlayerSrc,
					backdrop: data.details.backdrop_path_1280,
					description: data.details.overview,
					ep_title: episodes && episodes[0]?.name,
					ep_number: episodes && episodes[0]?.episode_number,
					ep_season: episodes && episodes[0]?.season_number,
					year: data.details.release_date?.slice(0, 4),
					ageRestriction: data.details.ageRestriction,
					runtime: data.details.runtime,
				})
			);
			history.push(WATCH);
		}
	};

	const handleLikeClick = () => dispatch(likeVideo(userID, data.details.id));
	const handleDislikeClick = () => dispatch(dislikeVideo(userID, data.details.id));
	const handleToggleVideoList = () => dispatch(toggleVideoToList(userID, data.details.id));

	return (
		<ItemExpanded isVisible={isVisible} position={position} onTransitionEnd={handleOnAnimationEnd} ref={containerRef}>
			{shouldRender && data ? (
				<>
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
									label={list.includes(data.details.id) ? "Remove from My List" : "Add to My List"}
									onMouseDown={handleToggleVideoList}
								>
									{list.includes(data.details.id) ? <BiMinus /> : <BiPlus />}
								</Button.Round>
								<Button.Round
									inverted={liked.includes(data.details.id)}
									label={liked.includes(data.details.id) ? "Remove like" : "I like this"}
									onMouseDown={handleLikeClick}
								>
									<BiLike />
								</Button.Round>
								<Button.Round
									inverted={disliked.includes(data.details.id)}
									label={disliked.includes(data.details.id) ? "Remove dislike" : "Not for me"}
									onMouseDown={handleDislikeClick}
								>
									<BiDislike />
								</Button.Round>
							</ItemExpanded.Half>
							<ItemExpanded.Half>
								<Button.Round
									label={data.details.media_type === "movie" ? "More info" : "Episodes & Info"}
									onMouseDown={e => handleClickMoreDetails(e)}
								>
									<BiChevronDown />
								</Button.Round>
							</ItemExpanded.Half>
						</ItemExpanded.Buttons>
						<ItemExpanded.Info>
							<p>96% Match</p>
							<span>{data.ageRestriction !== "" ? `${data.ageRestriction} ` : "-"}</span>
							{data.details.media_type === "movie"
								? `${data.details?.runtime}m`
								: `${data.details?.number_of_seasons} ${data.details?.number_of_seasons > 1 ? "Seasons" : "Season"}`}
						</ItemExpanded.Info>
						<ItemExpanded.GenreWrapper>
							{data.details.genre_ids &&
								data.details.genre_ids.slice(0, 2).map((genre, i) => (
									<ItemExpanded.Genre key={i}>
										{genre}
										{i !== data.details.genre_ids.slice(0, 2).length - 1 && <span>•</span>}
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
						<ItemExpanded.Info>
							<p style={{ opacity: 0 }}>Loading...</p>
						</ItemExpanded.Info>
					</ItemExpanded.Main>
				</>
			)}
		</ItemExpanded>
	);
};

export default ItemExpandedContainer;
