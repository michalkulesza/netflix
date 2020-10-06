import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetails, clearDetails, fetchEpisodes } from "../redux/actions";
import { ItemDetails } from "../components";

import { GlobalStyles } from "../global-styles";
import { GrClose, GrPlayFill } from "react-icons/gr";
import { GiSpeaker } from "react-icons/gi";
import { BiPlus, BiLike, BiDislike, BiCaretDown, BiCaretUp } from "react-icons/bi";

import VideoFile from "../res/videos/mindhunter_trailer.mp4";
import VideoLogo from "../res/images/mindhunter-logo.png";

const ItemDetailsContainer = () => {
	const dispatch = useDispatch();
	const isDetails = useSelector(state => state.toggles.isDetails);
	const position = useSelector(state => state.toggles.detailsPosition);
	const item = useSelector(state => state.fetchDetails);
	const episodes = useSelector(state => state.fetchEpisodes);

	const [shouldRender, setRender] = useState(isDetails);
	const [seasonsDropdownDisabled, setSeasonsDropdownDisabled] = useState(true);
	const [seasonsDropdownActive, setSeasonsDropdownActive] = useState(false);
	const [selectedSeason, setSelectedSeason] = useState(1);

	useEffect(() => {
		if (isDetails && item) setRender(true);
		if (item && item.details.number_of_seasons > 1) setSeasonsDropdownDisabled(false);
	}, [isDetails, item]);

	const onAnimationEnd = () => {
		if (!isDetails) {
			setRender(false);
			dispatch(clearDetails());
		}
	};

	const handleClose = () => {
		dispatch(setDetails(false));
	};

	const handleSeasonClick = seasonNum => {
		setSelectedSeason(seasonNum);
		setSeasonsDropdownActive(false);
		dispatch(fetchEpisodes(item.details.id, seasonNum));
	};

	return shouldRender ? (
		<ItemDetails.Container isDetails={isDetails}>
			<ItemDetails isDetails={isDetails} position={position} onAnimationEnd={onAnimationEnd}>
				<ItemDetails.Header>
					<ItemDetails.Video src={VideoFile} loop muted></ItemDetails.Video>
					<ItemDetails.Cover src={item && item.details.backdrop_path_1280}></ItemDetails.Cover>
					<ItemDetails.Overlay>
						<ItemDetails.OverlayHalf>
							<ItemDetails.Logo src={VideoLogo} alt="Video Logo" />
							<ItemDetails.ButtonsContainer>
								<ItemDetails.VideoButton>
									<GrPlayFill /> Play
								</ItemDetails.VideoButton>
								<ItemDetails.Button>
									<BiPlus />
									<ItemDetails.Label>Add to My List</ItemDetails.Label>
								</ItemDetails.Button>
								<ItemDetails.Button>
									<BiLike />
									<ItemDetails.Label>I like this</ItemDetails.Label>
								</ItemDetails.Button>
								<ItemDetails.Button>
									<BiDislike />
									<ItemDetails.Label>Not for me</ItemDetails.Label>
								</ItemDetails.Button>
							</ItemDetails.ButtonsContainer>
						</ItemDetails.OverlayHalf>
						<ItemDetails.OverlayHalf>
							<ItemDetails.OverlayButtonClose onMouseDown={handleClose}>
								<GrClose />
							</ItemDetails.OverlayButtonClose>
							<ItemDetails.Button>
								<GiSpeaker />
							</ItemDetails.Button>
						</ItemDetails.OverlayHalf>
					</ItemDetails.Overlay>
				</ItemDetails.Header>
				<ItemDetails.Info>
					<ItemDetails.InfoHalf>
						<ItemDetails.InfoContent>
							<p>96% Match</p>{" "}
							{item.details.first_air_date
								? item.details.first_air_date.slice(0, 4)
								: item.details.release_date.slice(0, 4)}{" "}
							<span>{item.ageRestriction}</span> {item.details.number_of_seasons} Season
							{item.details.number_of_seasons > 1 && "s"}
						</ItemDetails.InfoContent>
						<ItemDetails.InfoDescription>{item.details.overview}</ItemDetails.InfoDescription>
					</ItemDetails.InfoHalf>
					<ItemDetails.InfoHalf>
						<ItemDetails.InfoCast>
							<span>Cast:</span> {item.cast.map((el, i) => `${el.name}${item.cast.length - 1 !== i ? ", " : ""}`)}
						</ItemDetails.InfoCast>
						<ItemDetails.InfoCast>
							<span>Genres:</span>{" "}
							{item.details.genres.map((el, i) => `${el.name}${item.details.genres.length - 1 !== i ? ", " : ""}`)}
						</ItemDetails.InfoCast>
					</ItemDetails.InfoHalf>
				</ItemDetails.Info>
				<ItemDetails.Episodes>
					<ItemDetails.EpisodesHeader>
						Episodes
						<ItemDetails.EpisodesSeasons>
							<ItemDetails.EpisodesSeasonsButton
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
							</ItemDetails.EpisodesSeasonsButton>
							<ItemDetails.EpisodesSeasonsList seasonsDropdownActive={seasonsDropdownActive}>
								{Array.from(Array(item.details.number_of_seasons), (_, i) => (
									<ItemDetails.EpisodesSeason onMouseDown={() => handleSeasonClick(i + 1)}>
										Season {i + 1}
									</ItemDetails.EpisodesSeason>
								))}
							</ItemDetails.EpisodesSeasonsList>
						</ItemDetails.EpisodesSeasons>
					</ItemDetails.EpisodesHeader>

					<ItemDetails.EpisodesList>
						{episodes.episodes.map(item => (
							<ItemDetails.EpisodeWrapper>
								<ItemDetails.Episode>
									<ItemDetails.EpisodeNum>{item.episode_number ? item.episode_number : "-"}</ItemDetails.EpisodeNum>
									<ItemDetails.EpisodeImage src={item.still_path_300} alt="Episode preview" />
									<ItemDetails.EpisodeMain>
										<ItemDetails.EpisodeHalf>
											<ItemDetails.EpisodeTitle>{item.name}</ItemDetails.EpisodeTitle>
											<ItemDetails.EpisodeTime>57m</ItemDetails.EpisodeTime>
										</ItemDetails.EpisodeHalf>
										<ItemDetails.EpisodeHalf>
											<ItemDetails.EpisodeDescription>{item.overview.slice(0, 200)}</ItemDetails.EpisodeDescription>
										</ItemDetails.EpisodeHalf>
									</ItemDetails.EpisodeMain>
								</ItemDetails.Episode>
							</ItemDetails.EpisodeWrapper>
						))}
					</ItemDetails.EpisodesList>
				</ItemDetails.Episodes>
				<ItemDetails.Related>
					<ItemDetails.RelatedHeader>More Like This</ItemDetails.RelatedHeader>
					<ItemDetails.RelatedItems>
						{item.related.map(el => (
							<ItemDetails.RelatedItem>
								<ItemDetails.RelatedItemImage src={el.backdrop_path_500} alt="Video preview" />
								<ItemDetails.RelatedItemMain>
									<ItemDetails.RelatedItemTitle>{el.name}</ItemDetails.RelatedItemTitle>
									<ItemDetails.RelatedItemInfo>
										<span>12</span> {el.first_air_date ? el.first_air_date.slice(0, 4) : "-"}
									</ItemDetails.RelatedItemInfo>
									<ItemDetails.RelatedItemDescription>{el.overview.slice(0, 100)}</ItemDetails.RelatedItemDescription>
								</ItemDetails.RelatedItemMain>
							</ItemDetails.RelatedItem>
						))}
					</ItemDetails.RelatedItems>
				</ItemDetails.Related>

				<ItemDetails.About>
					<ItemDetails.AboutHeader>About {item.details.name}</ItemDetails.AboutHeader>
					<ItemDetails.AboutPiece>
						Creators:
						<p>
							{item.details.created_by.map((el, i) =>
								i + 1 === item.details.created_by.length ? el.name : `${el.name}, `
							)}
						</p>
					</ItemDetails.AboutPiece>
					<ItemDetails.AboutPiece>
						Cast:
						<p>{item.cast.map((el, i) => (i + 1 === item.cast.length ? el.name : `${el.name}, `))}</p>
					</ItemDetails.AboutPiece>
					<ItemDetails.AboutPiece>
						Genres:
						<p>
							{item.details.genres.map((el, i) => (i + 1 === item.details.genres.length ? el.name : `${el.name}, `))}
						</p>
					</ItemDetails.AboutPiece>
					<ItemDetails.AboutPiece>
						Maturity rating <span>{item.ageRestriction}</span>
						<p>
							{item.details.genres.map((el, i) => (i + 1 === item.details.genres.length ? el.name : `${el.name}, `))}
						</p>
					</ItemDetails.AboutPiece>
				</ItemDetails.About>
			</ItemDetails>
			<GlobalStyles disableScrolling={isDetails} />
		</ItemDetails.Container>
	) : null;
};

export default ItemDetailsContainer;
