import React from "react";
import {
	Episodes,
	EpisodesHeader,
	EpisodesSeasons,
	EpisodesSeasonsButton,
	EpisodesSeasonsList,
	EpisodesSeason,
	EpisodesList,
	Episode,
	EpisodeWrapper,
	EpisodeWrapperLoading,
	EpisodeNum,
	EpisodeImage,
	EpisodeMain,
	EpisodeHalf,
	EpisodeTitle,
	EpisodeTime,
	EpisodeDescription,
} from "./styles/details-episodes";

export const DetailsEpisodes = ({ children, ...restProps }) => {
	return <Episodes {...restProps}>{children}</Episodes>;
};

DetailsEpisodes.Header = ({ children, ...restProps }) => {
	return <EpisodesHeader {...restProps}>{children}</EpisodesHeader>;
};

DetailsEpisodes.Seasons = ({ children, ...restProps }) => {
	return <EpisodesSeasons {...restProps}>{children}</EpisodesSeasons>;
};

DetailsEpisodes.SeasonsButton = ({ children, ...restProps }) => {
	return <EpisodesSeasonsButton {...restProps}>{children}</EpisodesSeasonsButton>;
};

DetailsEpisodes.SeasonsList = ({ children, ...restProps }) => {
	return <EpisodesSeasonsList {...restProps}>{children}</EpisodesSeasonsList>;
};

DetailsEpisodes.Season = ({ children, ...restProps }) => {
	return <EpisodesSeason {...restProps}>{children}</EpisodesSeason>;
};

DetailsEpisodes.List = ({ children, ...restProps }) => {
	return <EpisodesList {...restProps}>{children}</EpisodesList>;
};

export const DetailsEpisode = ({ children, ...restProps }) => {
	return <Episode {...restProps}>{children}</Episode>;
};

DetailsEpisode.Wrapper = ({ children, ...restProps }) => {
	return <EpisodeWrapper {...restProps}>{children}</EpisodeWrapper>;
};

DetailsEpisode.WrapperLoading = ({ children, ...restProps }) => {
	return <EpisodeWrapperLoading {...restProps}>{children}</EpisodeWrapperLoading>;
};

DetailsEpisode.Num = ({ children, ...restProps }) => {
	return <EpisodeNum {...restProps}>{children}</EpisodeNum>;
};

DetailsEpisode.Image = ({ children, ...restProps }) => {
	return <EpisodeImage {...restProps}>{children}</EpisodeImage>;
};

DetailsEpisode.Main = ({ children, ...restProps }) => {
	return <EpisodeMain {...restProps}>{children}</EpisodeMain>;
};

DetailsEpisode.Half = ({ children, ...restProps }) => {
	return <EpisodeHalf {...restProps}>{children}</EpisodeHalf>;
};

DetailsEpisode.Title = ({ children, ...restProps }) => {
	return <EpisodeTitle {...restProps}>{children}</EpisodeTitle>;
};

DetailsEpisode.Time = ({ children, ...restProps }) => {
	return <EpisodeTime {...restProps}>{children}</EpisodeTime>;
};

DetailsEpisode.Description = ({ children, ...restProps }) => {
	return <EpisodeDescription {...restProps}>{children}</EpisodeDescription>;
};
