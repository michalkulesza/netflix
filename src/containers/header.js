import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalMute } from "../redux/actions/misc";
import { Header, Button } from "../components";
import { useViewportWidth, useScrolledDistance, useWindowFocus } from "../hooks";

import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { GrPlayFill, GrCircleInformation } from "react-icons/gr";
import placeholder from "../res/images/placeholder_w.jpg";

const HeaderContainer = ({ headerData, bg, children, ...restProps }) => {
	const videoPlayer = useRef(null);
	const dispatch = useDispatch();
	const scrolled = useScrolledDistance();
	const viewPortWidth = useViewportWidth();
	const [videoEnded, setVideoEnded] = useState(false);
	const [videoCanPlay, setVideoCanPlay] = useState(false);
	const [posterIsVisible, setPosterIsVisible] = useState(true);
	const muted = useSelector(state => state.misc.globalMute);
	const isExpanded = useSelector(state => state.toggles.isExpanded);
	const isUserAway = useSelector(state => state.toggles.isUserAway);
	const isWindowFocused = useWindowFocus();
	const canPlay =
		scrolled < (viewPortWidth * 0.5625) / 3 &&
		!isExpanded &&
		!posterIsVisible &&
		!videoEnded & !isUserAway & isWindowFocused;

	useEffect(() => {
		if (videoPlayer.current) {
			videoPlayer.current.volume = 0.4;
			canPlay ? setTimeout(() => videoPlayer.current.play(), 500) : videoPlayer.current.pause();
		}
	}, [canPlay]);

	useEffect(() => {
		if (videoCanPlay && !videoEnded && !isExpanded) {
			setTimeout(() => setPosterIsVisible(false), 2000);
		} else {
			setPosterIsVisible(true);
		}
	}, [videoCanPlay, videoEnded, isExpanded]);

	const handleMute = () => {
		dispatch(setGlobalMute(!muted));
	};

	return (
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
							onCanPlay={() => setVideoCanPlay(true)}
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
	);
};

export default HeaderContainer;
