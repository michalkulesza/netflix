import React from "react";

import {
	Main,
	Container,
	Header,
	Video,
	Cover,
	Overlay,
	OverlayHalf,
	OverlayButtonClose,
	Button,
	Label,
	Logo,
	VideoButton,
	ButtonsContainer,
	Info,
	InfoHalf,
	InfoContent,
	InfoDescription,
	InfoCast,
	Episodes,
	EpisodesHeader,
	EpisodesSeasons,
	EpisodesSeasonsButton,
	EpisodesSeasonsList,
	EpisodesSeason,
	EpisodesList,
	Episode,
} from "./styles/item-details";

const ItemDetails = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

ItemDetails.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

ItemDetails.Header = ({ children, ...restProps }) => {
	return <Header {...restProps}>{children}</Header>;
};

ItemDetails.Video = ({ ...restProps }) => {
	return <Video type="video/mp4" {...restProps} />;
};

ItemDetails.Cover = ({ children, ...restProps }) => {
	return <Cover {...restProps}>{children}</Cover>;
};

ItemDetails.Overlay = ({ children, ...restProps }) => {
	return <Overlay {...restProps}>{children}</Overlay>;
};

ItemDetails.OverlayHalf = ({ children, ...restProps }) => {
	return <OverlayHalf {...restProps}>{children}</OverlayHalf>;
};

ItemDetails.OverlayButtonClose = ({ children, ...restProps }) => {
	return <OverlayButtonClose {...restProps}>{children}</OverlayButtonClose>;
};

ItemDetails.Button = ({ children, ...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

ItemDetails.Label = ({ children, ...restProps }) => {
	return <Label {...restProps}>{children}</Label>;
};

ItemDetails.Logo = ({ children, ...restProps }) => {
	return <Logo {...restProps}>{children}</Logo>;
};

ItemDetails.VideoButton = ({ children, ...restProps }) => {
	return <VideoButton {...restProps}>{children}</VideoButton>;
};

ItemDetails.ButtonsContainer = ({ children, ...restProps }) => {
	return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
};

ItemDetails.Info = ({ children, ...restProps }) => {
	return <Info {...restProps}>{children}</Info>;
};

ItemDetails.InfoHalf = ({ children, ...restProps }) => {
	return <InfoHalf {...restProps}>{children}</InfoHalf>;
};

ItemDetails.InfoContent = ({ children, ...restProps }) => {
	return <InfoContent {...restProps}>{children}</InfoContent>;
};

ItemDetails.InfoDescription = ({ children, ...restProps }) => {
	return <InfoDescription {...restProps}>{children}</InfoDescription>;
};

ItemDetails.InfoCast = ({ children, ...restProps }) => {
	return <InfoCast {...restProps}>{children}</InfoCast>;
};

ItemDetails.Episodes = ({ children, ...restProps }) => {
	return <Episodes {...restProps}>{children}</Episodes>;
};

ItemDetails.EpisodesHeader = ({ children, ...restProps }) => {
	return <EpisodesHeader {...restProps}>{children}</EpisodesHeader>;
};

ItemDetails.EpisodesSeasons = ({ children, ...restProps }) => {
	return <EpisodesSeasons {...restProps}>{children}</EpisodesSeasons>;
};

ItemDetails.EpisodesSeasonsButton = ({ children, ...restProps }) => {
	return <EpisodesSeasonsButton {...restProps}>{children}</EpisodesSeasonsButton>;
};

ItemDetails.EpisodesSeasonsList = ({ children, ...restProps }) => {
	return <EpisodesSeasonsList {...restProps}>{children}</EpisodesSeasonsList>;
};

ItemDetails.EpisodesSeason = ({ children, ...restProps }) => {
	return <EpisodesSeason {...restProps}>{children}</EpisodesSeason>;
};

ItemDetails.EpisodesList = ({ children, ...restProps }) => {
	return <EpisodesList {...restProps}>{children}</EpisodesList>;
};

ItemDetails.Episode = ({ children, ...restProps }) => {
	return <Episode {...restProps}>{children}</Episode>;
};

export default ItemDetails;
