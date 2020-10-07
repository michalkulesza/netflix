import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEpisodes } from "../redux/actions";

import { ItemDetailsEpisodes, ItemDetailsEpisode } from "../components";

import { BiCaretDown, BiCaretUp } from "react-icons/bi";

const ItemDetailsEpisodesContainer = ({ item }) => {
	const dispatch = useDispatch();
	const episodes = useSelector(state => state.fetchEpisodes);
	const [seasonsDropdownDisabled, setSeasonsDropdownDisabled] = useState(true);
	const [seasonsDropdownActive, setSeasonsDropdownActive] = useState(false);
	const [selectedSeason, setSelectedSeason] = useState(1);

	const handleSeasonClick = seasonNum => {
		setSelectedSeason(seasonNum);
		setSeasonsDropdownActive(false);
		dispatch(fetchEpisodes(item.details.id, seasonNum));
	};

	useEffect(() => {
		if (item && item.details.number_of_seasons > 1) setSeasonsDropdownDisabled(false);
	}, [item]);

	return (
		episodes &&
		item && (
			<ItemDetailsEpisodes>
				<ItemDetailsEpisodes.Header>
					Episodes
					<ItemDetailsEpisodes.Seasons>
						<ItemDetailsEpisodes.SeasonsButton
							onMouseDown={() => !seasonsDropdownDisabled && setSeasonsDropdownActive(!seasonsDropdownActive)}
							seasonsDropdownActive={seasonsDropdownActive}
							seasonsDropdownDisabled={seasonsDropdownDisabled}
						>
							<span>Season {selectedSeason}</span>
							{seasonsDropdownActive && !seasonsDropdownDisabled ? (
								<BiCaretUp />
							) : !seasonsDropdownActive && !seasonsDropdownDisabled ? (
								<BiCaretDown />
							) : null}
						</ItemDetailsEpisodes.SeasonsButton>
						<ItemDetailsEpisodes.SeasonsList seasonsDropdownActive={seasonsDropdownActive}>
							{Array.from(Array(item.details.number_of_seasons), (_, i) => (
								<ItemDetailsEpisodes.Season onMouseDown={() => handleSeasonClick(i + 1)}>
									Season {i + 1}
								</ItemDetailsEpisodes.Season>
							))}
						</ItemDetailsEpisodes.SeasonsList>
					</ItemDetailsEpisodes.Seasons>
				</ItemDetailsEpisodes.Header>{" "}
				<ItemDetailsEpisodes.List>
					{episodes.episodes.map(item => (
						<ItemDetailsEpisode.Wrapper>
							<ItemDetailsEpisode>
								<ItemDetailsEpisode.Num>{item.episode_number ? item.episode_number : "-"}</ItemDetailsEpisode.Num>
								<ItemDetailsEpisode.Image src={item.still_path_300} alt="Episode preview" />
								<ItemDetailsEpisode.Main>
									<ItemDetailsEpisode.Half>
										<ItemDetailsEpisode.Title>{item.name}</ItemDetailsEpisode.Title>
										<ItemDetailsEpisode.Time>57m</ItemDetailsEpisode.Time>
									</ItemDetailsEpisode.Half>
									<ItemDetailsEpisode.Half>
										<ItemDetailsEpisode.Description>{item.overview.slice(0, 200)}</ItemDetailsEpisode.Description>
									</ItemDetailsEpisode.Half>
								</ItemDetailsEpisode.Main>
							</ItemDetailsEpisode>
						</ItemDetailsEpisode.Wrapper>
					))}
				</ItemDetailsEpisodes.List>
			</ItemDetailsEpisodes>
		)
	);
};

export default ItemDetailsEpisodesContainer;
