import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEpisodes } from "../../redux/actions";

import { DetailsEpisodes, DetailsEpisode } from "../../components";

import { BiCaretDown, BiCaretUp } from "react-icons/bi";

const DetailsEpisodesContainer = ({ item }) => {
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

	return episodes && item ? (
		<DetailsEpisodes>
			<DetailsEpisodes.Header>
				Episodes
				<DetailsEpisodes.Seasons>
					<DetailsEpisodes.SeasonsButton
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
					</DetailsEpisodes.SeasonsButton>
					<DetailsEpisodes.SeasonsList seasonsDropdownActive={seasonsDropdownActive}>
						{Array.from(Array(item.details.number_of_seasons), (_, i) => (
							<DetailsEpisodes.Season key={i} onMouseDown={() => handleSeasonClick(i + 1)}>
								Season {i + 1}
							</DetailsEpisodes.Season>
						))}
					</DetailsEpisodes.SeasonsList>
				</DetailsEpisodes.Seasons>
			</DetailsEpisodes.Header>{" "}
			<DetailsEpisodes.List>
				{episodes.map(episode => (
					<DetailsEpisode.Wrapper key={episode.id}>
						<DetailsEpisode>
							<DetailsEpisode.Num>{episode.episode_number ? episode.episode_number : "-"}</DetailsEpisode.Num>
							<DetailsEpisode.Image src={episode.still_path_300} alt="Episode preview" />
							<DetailsEpisode.Main>
								<DetailsEpisode.Half>
									<DetailsEpisode.Title>{episode.name}</DetailsEpisode.Title>
									<DetailsEpisode.Time>57m</DetailsEpisode.Time>
								</DetailsEpisode.Half>
								<DetailsEpisode.Half>
									<DetailsEpisode.Description>{episode.overview.slice(0, 200)}</DetailsEpisode.Description>
								</DetailsEpisode.Half>
							</DetailsEpisode.Main>
						</DetailsEpisode>
					</DetailsEpisode.Wrapper>
				))}
			</DetailsEpisodes.List>
		</DetailsEpisodes>
	) : null;
};

export default DetailsEpisodesContainer;
