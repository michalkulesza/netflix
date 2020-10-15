import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalMute } from "../redux/actions/toggles";
import { Header, Button } from "../components";
import { useCanHeaderPlay } from "../hooks";

import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { GrPlayFill, GrCircleInformation } from "react-icons/gr";
import placeholder from "../res/images/placeholder_w.jpg";

let posterTimer;

const HeaderContainer = ({ headerData, bg, children, ...restProps }) => {
	const videoPlayer = useRef(null);
	const dispatch = useDispatch();
	const canPlay = useCanHeaderPlay();
	const muted = useSelector(state => state.toggles.globalMute);
	const { selectedGenre } = useSelector(state => state.genres);
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
				}, 500);
			} else {
				clearTimeout(posterTimer);
				setPosterIsVisible(true);
				videoPlayer.current && videoPlayer.current.pause();
			}
		}
	}, [canPlay, videoCanPlay, videoEnded]);

	const handleMute = () => {
		dispatch(setGlobalMute(!muted));
	};

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
							muted={muted}
							ref={videoPlayer}
						/>
					</Header.VideoWrapper>
					<Header.ContainerInVideo>
						<Header.ContainerInVideoHalf>
							<Header.VideoLogo src={headerData.logo} alt={headerData.title} />
							<Header.VideoDescription>{headerData.description}</Header.VideoDescription>
							<Header.VideoButtonsContainer>
								<Button.Square>
									<GrPlayFill /> Play
								</Button.Square>
								<Button.Square iconScale="1.4" dark>
									<GrCircleInformation /> More Info
								</Button.Square>
							</Header.VideoButtonsContainer>
						</Header.ContainerInVideoHalf>
						<Header.ContainerInVideoHalf>
							<Header.VideoMuteContainer>
								<Button.Round onMouseDown={handleMute}>{muted ? <GiSpeakerOff /> : <GiSpeaker />}</Button.Round>
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
