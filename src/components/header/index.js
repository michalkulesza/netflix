import React from "react";
import {
	Main,
	Border,
	Background,
	BackgroundImg,
	BackgroundGradient,
	BackgroundWrapper,
	Container,
	Inner,
	Heading,
	SubHeading,
	Video,
	VideoWrapper,
	VideoGradient,
	ContainerInVideo,
	ContainerInVideoHalf,
	AgeRestriction,
	VideoLogo,
	VideoDescription,
	VideoButtonsContainer,
	VideoMuteContainer,
	VideoPoster,
	Loading,
	Placeholder,
} from "./styles/header";

const Header = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Header.Border = ({ children, ...restProps }) => {
	return <Border {...restProps}>{children}</Border>;
};

Header.BackgroundWrapper = ({ children, ...restProps }) => {
	return <BackgroundWrapper {...restProps}>{children}</BackgroundWrapper>;
};

Header.Background = ({ children, ...restProps }) => {
	return <Background {...restProps}>{children}</Background>;
};

Header.BackgroundImg = ({ children, ...restProps }) => {
	return <BackgroundImg {...restProps}>{children}</BackgroundImg>;
};

Header.BackgroundGradient = ({ children, ...restProps }) => {
	return <BackgroundGradient {...restProps}>{children}</BackgroundGradient>;
};

Header.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Header.Inner = ({ children, ...restProps }) => {
	return <Inner {...restProps}>{children}</Inner>;
};

Header.Heading = ({ children, ...restProps }) => {
	return <Heading {...restProps}>{children}</Heading>;
};

Header.SubHeading = ({ children, ...restProps }) => {
	return <SubHeading {...restProps}>{children}</SubHeading>;
};

Header.Video = React.forwardRef((props, ref) => {
	return (
		<Video
			type="video/mp4"
			ref={ref}
			src={props.src}
			poster={props.poster}
			autoPlay={props.autoPlay}
			muted={props.muted}
			onCanPlayThrough={props.onCanPlayThrough}
		></Video>
	);
});

Header.VideoWrapper = ({ children, ...restProps }) => {
	return <VideoWrapper {...restProps}>{children}</VideoWrapper>;
};

Header.VideoGradient = ({ children, ...restProps }) => {
	return <VideoGradient {...restProps}>{children}</VideoGradient>;
};

Header.VideoPoster = ({ children, ...restProps }) => {
	return <VideoPoster {...restProps}>{children}</VideoPoster>;
};

Header.ContainerInVideo = ({ children, ...restProps }) => {
	return <ContainerInVideo {...restProps}>{children}</ContainerInVideo>;
};

Header.ContainerInVideoHalf = ({ children, ...restProps }) => {
	return <ContainerInVideoHalf {...restProps}>{children}</ContainerInVideoHalf>;
};

Header.AgeRestriction = ({ children, ...restProps }) => {
	return <AgeRestriction {...restProps}>{children}</AgeRestriction>;
};

Header.VideoLogo = ({ children, ...restProps }) => {
	return <VideoLogo {...restProps}>{children}</VideoLogo>;
};

Header.VideoDescription = ({ children, ...restProps }) => {
	return <VideoDescription {...restProps}>{children}</VideoDescription>;
};
Header.VideoButtonsContainer = ({ children, ...restProps }) => {
	return <VideoButtonsContainer {...restProps}>{children}</VideoButtonsContainer>;
};

Header.VideoMuteContainer = ({ children, ...restProps }) => {
	return <VideoMuteContainer {...restProps}>{children}</VideoMuteContainer>;
};

Header.Loading = () => {
	return (
		<Loading>
			<Placeholder />
		</Loading>
	);
};

export default Header;
