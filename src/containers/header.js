import React, { useState } from "react";
import { Header } from "../components";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { GrPlayFill, GrCircleInformation } from "react-icons/gr";

const HeaderContainer = ({ children, bg, videoUrl, ageRestriction = "-", videoLogo, alt, ...restProps }) => {
	const [videoMuted, setVideoMuted] = useState(false);

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
						<Header.Video src={videoUrl} type="video/mp4" {...restProps} muted={videoMuted ? true : false} />
					</Header.VideoWrapper>
					<Header.ContainerInVideo>
						<Header.ContainerInVideoHalf>
							<Header.VideoLogo src={videoLogo} alt={alt} />
							<Header.VideoDescription>
								In 1977, frustrated FBI hostage negotiator Holden Ford finds an unlikely ally in veteran agent Bill
								Tench and begins studying a new class of murderer.
							</Header.VideoDescription>
							<Header.VideoButtonsContainer>
								<Header.VideoButton>
									<GrPlayFill /> Play
								</Header.VideoButton>
								<Header.VideoButton>
									<GrCircleInformation /> More Info
								</Header.VideoButton>
							</Header.VideoButtonsContainer>
						</Header.ContainerInVideoHalf>
						<Header.ContainerInVideoHalf>
							<Header.VideoMuteButton onMouseDown={() => setVideoMuted(!videoMuted)}>
								{videoMuted ? <GiSpeakerOff /> : <GiSpeaker />}
							</Header.VideoMuteButton>
							<Header.AgeRestriction>{ageRestriction}</Header.AgeRestriction>
						</Header.ContainerInVideoHalf>
					</Header.ContainerInVideo>
				</>
			) : null}
		</Header>
	);
};

export default HeaderContainer;
