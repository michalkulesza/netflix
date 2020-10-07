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
	EpisodeNum,
	EpisodeImage,
	EpisodeMain,
	EpisodeHalf,
	EpisodeTitle,
	EpisodeTime,
	EpisodeDescription,
} from "./styles/item-details-episodes";

export const ItemDetailsEpisodes = ({ children, ...restProps }) => {
	return <Episodes {...restProps}>{children}</Episodes>;
};

ItemDetailsEpisodes.Header = ({ children, ...restProps }) => {
	return <EpisodesHeader {...restProps}>{children}</EpisodesHeader>;
};

ItemDetailsEpisodes.Seasons = ({ children, ...restProps }) => {
	return <EpisodesSeasons {...restProps}>{children}</EpisodesSeasons>;
};

ItemDetailsEpisodes.SeasonsButton = ({ children, ...restProps }) => {
	return <EpisodesSeasonsButton {...restProps}>{children}</EpisodesSeasonsButton>;
};

ItemDetailsEpisodes.SeasonsList = ({ children, ...restProps }) => {
	return <EpisodesSeasonsList {...restProps}>{children}</EpisodesSeasonsList>;
};

ItemDetailsEpisodes.Season = ({ children, ...restProps }) => {
	return <EpisodesSeason {...restProps}>{children}</EpisodesSeason>;
};

ItemDetailsEpisodes.List = ({ children, ...restProps }) => {
	return <EpisodesList {...restProps}>{children}</EpisodesList>;
};

export const ItemDetailsEpisode = ({ children, ...restProps }) => {
	return <Episode {...restProps}>{children}</Episode>;
};

ItemDetailsEpisode.Wrapper = ({ children, ...restProps }) => {
	return <EpisodeWrapper {...restProps}>{children}</EpisodeWrapper>;
};

ItemDetailsEpisode.Num = ({ children, ...restProps }) => {
	return <EpisodeNum {...restProps}>{children}</EpisodeNum>;
};

ItemDetailsEpisode.Image = ({ children, ...restProps }) => {
	return <EpisodeImage {...restProps}>{children}</EpisodeImage>;
};

ItemDetailsEpisode.Main = ({ children, ...restProps }) => {
	return <EpisodeMain {...restProps}>{children}</EpisodeMain>;
};

ItemDetailsEpisode.Half = ({ children, ...restProps }) => {
	return <EpisodeHalf {...restProps}>{children}</EpisodeHalf>;
};

ItemDetailsEpisode.Title = ({ children, ...restProps }) => {
	return <EpisodeTitle {...restProps}>{children}</EpisodeTitle>;
};

ItemDetailsEpisode.Time = ({ children, ...restProps }) => {
	return <EpisodeTime {...restProps}>{children}</EpisodeTime>;
};

ItemDetailsEpisode.Description = ({ children, ...restProps }) => {
	return <EpisodeDescription {...restProps}>{children}</EpisodeDescription>;
};
