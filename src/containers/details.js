import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails, clearEpisodes } from "../redux/actions";
import { Details } from "../components";
import { ItemDetailsHeaderContainer, ItemDetailsInfoContainer, ItemDetailsEpisodesContainer } from "./";

import { GlobalStyles } from "../global-styles";
import { GrPlayFill } from "react-icons/gr";

import VideoFile from "../res/videos/mindhunter_trailer.mp4";
import VideoLogo from "../res/images/mindhunter-logo.png";

const DetailsContainer = () => {
	const dispatch = useDispatch();
	const isDetails = useSelector(state => state.toggles.isDetails);
	const position = useSelector(state => state.toggles.detailsPosition);
	const item = useSelector(state => state.fetchDetails);

	const [shouldRender, setRender] = useState(isDetails);

	useEffect(() => {
		if (isDetails && item) setRender(true);
	}, [isDetails, item]);

	const onAnimationEnd = () => {
		if (!isDetails) {
			setRender(false);
			dispatch(clearDetails());
			dispatch(clearEpisodes());
		}
	};

	return shouldRender ? (
		<Details.Container isDetails={isDetails}>
			<Details isDetails={isDetails} position={position} onAnimationEnd={onAnimationEnd}>
				<ItemDetailsHeaderContainer VideoFile={VideoFile} VideoLogo={VideoLogo} item={item} />
				<ItemDetailsInfoContainer item={item} />
				<ItemDetailsEpisodesContainer item={item} />

				{item.related && (
					<Details.Related>
						<Details.RelatedHeader>More Like This</Details.RelatedHeader>
						<Details.RelatedItems>
							{item.related.map(el => (
								<Details.RelatedItem key={el.id}>
									<Details.RelatedItemImageWrapper>
										<Details.RelatedItemImage src={el.backdrop_path_500} alt="Video preview" />
										<Details.RelatedItemImageOverlay>
											<Details.RelatedItemImageOverlayButton>
												<GrPlayFill />
											</Details.RelatedItemImageOverlayButton>
										</Details.RelatedItemImageOverlay>
									</Details.RelatedItemImageWrapper>
									<Details.RelatedItemMain>
										<Details.RelatedItemTitle>{el.name ? el.name : el.title}</Details.RelatedItemTitle>
										<Details.RelatedItemInfo>
											<span>12</span> {el.first_air_date ? el.first_air_date.slice(0, 4) : el.release_date.slice(0, 4)}
										</Details.RelatedItemInfo>
										<Details.RelatedItemDescription>{el.overview.slice(0, 100)}</Details.RelatedItemDescription>
									</Details.RelatedItemMain>
								</Details.RelatedItem>
							))}
						</Details.RelatedItems>
					</Details.Related>
				)}

				<Details.About>
					<Details.AboutHeader>About {item.details.name ? item.details.name : item.details.title}</Details.AboutHeader>

					{item.details.created_by && (
						<Details.AboutPiece>
							Creators:
							<p>
								{item.details.created_by.map((el, i) =>
									i + 1 === item.details.created_by.length ? el.name : `${el.name}, `
								)}
							</p>
						</Details.AboutPiece>
					)}

					{item.cast && (
						<Details.AboutPiece>
							Cast:
							<p>{item.cast.map((el, i) => (i + 1 === item.cast.length ? el.name : `${el.name}, `))}</p>
						</Details.AboutPiece>
					)}

					{item.details.genres && (
						<Details.AboutPiece>
							Genres:
							<p>
								{item.details.genres.map((el, i) => (i + 1 === item.details.genres.length ? el.name : `${el.name}, `))}
							</p>
						</Details.AboutPiece>
					)}

					{item.ageRestriction && (
						<Details.AboutPiece>
							Maturity rating <span>{item.ageRestriction}</span>
							<p>Suitable for ages {item.ageRestriction} and up</p>
						</Details.AboutPiece>
					)}
				</Details.About>
			</Details>
			<GlobalStyles disableScrolling={isDetails} />
		</Details.Container>
	) : null;
};

export default DetailsContainer;
