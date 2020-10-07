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
	Loading,
	Placeholder,
} from "./styles/header";

const Header = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Header.Border = function ({ children, ...restProps }) {
	return <Border {...restProps}>{children}</Border>;
};

Header.BackgroundWrapper = function ({ children, ...restProps }) {
	return <BackgroundWrapper {...restProps}>{children}</BackgroundWrapper>;
};

Header.Background = function ({ children, ...restProps }) {
	return <Background {...restProps}>{children}</Background>;
};

Header.BackgroundImg = function ({ children, ...restProps }) {
	return <BackgroundImg {...restProps}>{children}</BackgroundImg>;
};

Header.BackgroundGradient = function ({ children, ...restProps }) {
	return <BackgroundGradient {...restProps}>{children}</BackgroundGradient>;
};

Header.Container = function ({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Inner = function ({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Header.Heading = function ({ children, ...restProps }) {
	return <Heading {...restProps}>{children}</Heading>;
};

Header.SubHeading = function ({ children, ...restProps }) {
	return <SubHeading {...restProps}>{children}</SubHeading>;
};

Header.Video = function ({ children, ...restProps }) {
	return (
		<Video type="video/mp4" {...restProps}>
			{children}
		</Video>
	);
};

Header.VideoWrapper = function ({ children, ...restProps }) {
	return <VideoWrapper {...restProps}>{children}</VideoWrapper>;
};

Header.VideoGradient = function ({ children, ...restProps }) {
	return <VideoGradient {...restProps}>{children}</VideoGradient>;
};

Header.ContainerInVideo = function ({ children, ...restProps }) {
	return <ContainerInVideo {...restProps}>{children}</ContainerInVideo>;
};

Header.ContainerInVideoHalf = function ({ children, ...restProps }) {
	return <ContainerInVideoHalf {...restProps}>{children}</ContainerInVideoHalf>;
};

Header.AgeRestriction = function ({ children, ...restProps }) {
	return <AgeRestriction {...restProps}>{children}</AgeRestriction>;
};

Header.VideoLogo = function ({ children, ...restProps }) {
	return <VideoLogo {...restProps}>{children}</VideoLogo>;
};

Header.VideoDescription = function ({ children, ...restProps }) {
	return <VideoDescription {...restProps}>{children}</VideoDescription>;
};
Header.VideoButtonsContainer = function ({ children, ...restProps }) {
	return <VideoButtonsContainer {...restProps}>{children}</VideoButtonsContainer>;
};

Header.VideoMuteContainer = function ({ children, ...restProps }) {
	return <VideoMuteContainer {...restProps}>{children}</VideoMuteContainer>;
};

Header.Loading = function () {
	return (
		<Loading>
			<Placeholder />
		</Loading>
	);
};

export default Header;
