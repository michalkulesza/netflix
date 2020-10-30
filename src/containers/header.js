import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalMute } from "../redux/actions/toggles";
import { fetchDetailsMovie, fetchDetailsTv } from "../redux/actions/fetch-details";
import { setPlayer } from "../redux/actions/player";
import { Header, Button } from "../components";
import { useCanHeaderPlay } from "../hooks";
import { BASE_PATH } from "../constants/config";
import { WATCH } from "../constants/routes";
import { useHistory } from "react-router-dom";

import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { GrPlayFill, GrCircleInformation } from "react-icons/gr";
import placeholder from "../res/images/placeholder_w.jpg";
const videoPlayerSrc = `${BASE_PATH}/video/night`;

let posterTimer;

const HeaderContainer = ({ headerData, bg, children }) => {
	const videoPlayer = useRef(null);
	const dispatch = useDispatch();
	const history = useHistory();
	const canPlay = useCanHeaderPlay();
	const { globalMute } = useSelector(state => state.toggles);
	const { selectedGenre } = useSelector(state => state.genres);
	const episodes = useSelector(state => state.fetchEpisodes.data);
	const details = useSelector(state => state.fetchDetails);
	const [videoEnded, setVideoEnded] = useState(false);
	const [videoCanPlay, setVideoCanPlay] = useState(false);
	const [posterIsVisible, setPosterIsVisible] = useState(true);

	useEffect(() => {
		if (videoPlayer.current) {
			videoPlayer.current.volume = 0.4;

			if (canPlay && videoCanPlay && !videoEnded) {
				posterTimer = setTimeout(() => {
					setPosterIsVisible(false);
					videoPlayer.current && videoPlayer.current.play();
				}, 2500);
			} else {
				clearTimeout(posterTimer);
				setPosterIsVisible(true);
				videoPlayer.current && videoPlayer.current.pause();
			}
		}

		return () => {
			clearTimeout(posterTimer);
		};
	}, [canPlay, videoCanPlay, videoEnded]);

	const handleMute = () => {
		dispatch(setGlobalMute(!globalMute));
	};

	const handlePlay = () => {
		dispatch(
			setPlayer({
				type: headerData.media_type,
				id: headerData.id,
				title: headerData.title,
				src: videoPlayerSrc,
				backdrop: headerData.backdrop,
				description: headerData.description,
				ep_title: episodes && episodes[0].name,
				ep_number: episodes && episodes[0]?.episode_number,
				ep_season: episodes && episodes[0]?.season_number,
				year: details.release_date
					? details?.release_date.slice(0, 4)
					: details.first_air_date
					? details.first_air_date.slice(0, 4)
					: 2020,
				ageRestriction: headerData.ageRestriction,
				runtime: details.runtime ? details.runtime : details.episode_run_time ? details.episode_run_time[0] : 60,
			})
		);

		history.push(WATCH);
	};

	const handleMouseEnter = () =>
		headerData.media_type === "movie"
			? dispatch(fetchDetailsMovie(headerData.id))
			: dispatch(fetchDetailsTv(headerData.id));

	return !selectedGenre ? (
		<Header>
			{bg ? (
				<>
					<Header.BackgroundWrapper>
						<Header.Background>
							<Header.BackgroundImg src={bg} />
						</Header.Background>
						<Header.BackgroundGradient />
					</Header.BackgroundWrapper>
					<Header.Container>{children}</Header.Container>
					<Header.Border />
				</>
			) : headerData ? (
				<>
					<Header.VideoWrapper>
						<Header.VideoGradient />
						<Header.VideoPoster
							src={headerData.backdrop ? headerData.backdrop : placeholder}
							visible={posterIsVisible}
						/>
						<Header.Video
							src={headerData.src}
							autoPlay={canPlay}
							onCanPlayThrough={() => setVideoCanPlay(true)}
							onEnded={() => setVideoEnded(true)}
							muted={globalMute}
							ref={videoPlayer}
						/>
					</Header.VideoWrapper>
					<Header.ContainerInVideo>
						<Header.ContainerInVideoHalf>
							<Header.VideoLogo src={headerData.logo} alt={headerData.title} />
							<Header.VideoDescription>{headerData.description}</Header.VideoDescription>
							<Header.VideoButtonsContainer onMouseEnter={handleMouseEnter}>
								<Button.Square onMouseDown={handlePlay}>
									<GrPlayFill /> Play
								</Button.Square>
								<Button.Square iconScale="1.4" dark>
									<GrCircleInformation /> More Info
								</Button.Square>
							</Header.VideoButtonsContainer>
						</Header.ContainerInVideoHalf>
						<Header.ContainerInVideoHalf>
							<Header.VideoMuteContainer>
								<Button.Round onMouseDown={handleMute}>{globalMute ? <GiSpeakerOff /> : <GiSpeaker />}</Button.Round>
								<Header.AgeRestriction>{headerData.ageRestriction}</Header.AgeRestriction>
							</Header.VideoMuteContainer>
						</Header.ContainerInVideoHalf>
					</Header.ContainerInVideo>
				</>
			) : null}
		</Header>
	) : null;
};

export default HeaderContainer;
