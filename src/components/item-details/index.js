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
	EpisodeWrapper,
	EpisodeNum,
	EpisodeImage,
	EpisodeMain,
	EpisodeHalf,
	EpisodeTitle,
	EpisodeTime,
	EpisodeDescription,
	Related,
	RelatedHeader,
	RelatedItems,
	RelatedItem,
	RelatedItemImage,
	RelatedItemMain,
	RelatedItemTitle,
	RelatedItemInfo,
	RelatedItemDescription,
	About,
	AboutHeader,
	AboutPiece,
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

ItemDetails.EpisodeWrapper = ({ children, ...restProps }) => {
	return <EpisodeWrapper {...restProps}>{children}</EpisodeWrapper>;
};

ItemDetails.EpisodeNum = ({ children, ...restProps }) => {
	return <EpisodeNum {...restProps}>{children}</EpisodeNum>;
};

ItemDetails.EpisodeImage = ({ children, ...restProps }) => {
	return <EpisodeImage {...restProps}>{children}</EpisodeImage>;
};

ItemDetails.EpisodeMain = ({ children, ...restProps }) => {
	return <EpisodeMain {...restProps}>{children}</EpisodeMain>;
};

ItemDetails.EpisodeHalf = ({ children, ...restProps }) => {
	return <EpisodeHalf {...restProps}>{children}</EpisodeHalf>;
};

ItemDetails.EpisodeTitle = ({ children, ...restProps }) => {
	return <EpisodeTitle {...restProps}>{children}</EpisodeTitle>;
};

ItemDetails.EpisodeTime = ({ children, ...restProps }) => {
	return <EpisodeTime {...restProps}>{children}</EpisodeTime>;
};

ItemDetails.EpisodeDescription = ({ children, ...restProps }) => {
	return <EpisodeDescription {...restProps}>{children}</EpisodeDescription>;
};

ItemDetails.Related = ({ children, ...restProps }) => {
	return <Related {...restProps}>{children}</Related>;
};

ItemDetails.RelatedHeader = ({ children, ...restProps }) => {
	return <RelatedHeader {...restProps}>{children}</RelatedHeader>;
};

ItemDetails.RelatedItems = ({ children, ...restProps }) => {
	return <RelatedItems {...restProps}>{children}</RelatedItems>;
};

ItemDetails.RelatedItem = ({ children, ...restProps }) => {
	return <RelatedItem {...restProps}>{children}</RelatedItem>;
};

ItemDetails.RelatedItemImage = ({ children, ...restProps }) => {
	return <RelatedItemImage {...restProps}>{children}</RelatedItemImage>;
};

ItemDetails.RelatedItemMain = ({ children, ...restProps }) => {
	return <RelatedItemMain {...restProps}>{children}</RelatedItemMain>;
};

ItemDetails.RelatedItemTitle = ({ children, ...restProps }) => {
	return <RelatedItemTitle {...restProps}>{children}</RelatedItemTitle>;
};

ItemDetails.RelatedItemInfo = ({ children, ...restProps }) => {
	return <RelatedItemInfo {...restProps}>{children}</RelatedItemInfo>;
};

ItemDetails.RelatedItemDescription = ({ children, ...restProps }) => {
	return <RelatedItemDescription {...restProps}>{children}</RelatedItemDescription>;
};

ItemDetails.About = ({ children, ...restProps }) => {
	return <About {...restProps}>{children}</About>;
};

ItemDetails.AboutHeader = ({ children, ...restProps }) => {
	return <AboutHeader {...restProps}>{children}</AboutHeader>;
};

ItemDetails.AboutPiece = ({ children, ...restProps }) => {
	return <AboutPiece {...restProps}>{children}</AboutPiece>;
};

export default ItemDetails;
