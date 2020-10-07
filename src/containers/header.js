import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalMute } from "../redux/actions";
import { Header } from "../components";
import { Button } from "../components";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { GrPlayFill, GrCircleInformation } from "react-icons/gr";

const HeaderContainer = ({
	children,
	bg,
	videoUrl,
	ageRestriction = "-",
	videoLogo,
	videoDescription,
	alt,
	...restProps
}) => {
	const dispatch = useDispatch();
	const muted = useSelector(state => state.misc.globalMute);
	const canPlay = useSelector(state => state.misc.headerVideoCanPlay);

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
			) : videoUrl ? (
				<>
					<Header.VideoWrapper>
						<Header.VideoGradient />
						<Header.Video src={videoUrl} autoPlay={canPlay} muted={muted} {...restProps} />
					</Header.VideoWrapper>
					<Header.ContainerInVideo>
						<Header.ContainerInVideoHalf>
							<Header.VideoLogo src={videoLogo} alt={alt} />
							<Header.VideoDescription>{videoDescription}</Header.VideoDescription>
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
								<Header.AgeRestriction>{ageRestriction}</Header.AgeRestriction>
							</Header.VideoMuteContainer>
						</Header.ContainerInVideoHalf>
					</Header.ContainerInVideo>
				</>
			) : null}
		</Header>
	);
};

export default HeaderContainer;
