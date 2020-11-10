import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails } from "../../redux/actions/fetch-details";
import { clearEpisodes } from "../../redux/actions/fetch-episodes";
import { setIsDetails } from "../../redux/actions/toggles";
import { Details } from "../../components";
import { DetailsHeaderContainer, DetailsInfoContainer, DetailsEpisodesContainer, DetailsRelatedContainer } from "../";
import { GlobalStyles } from "../../global-styles";
import { useKeyDownListener } from "../../hooks";

const DetailsContainer = () => {
	const dispatch = useDispatch();
	const isDetails = useSelector(state => state?.toggles?.isDetails);
	const detailsPosition = useSelector(state => state?.misc?.detailsPosition);
	const item = useSelector(state => state.fetchDetails);
	const [scrolled, setScrolled] = useState(0);
	const [shouldRender, setRender] = useState(isDetails);

	const handleCloseCallback = () => dispatch(setIsDetails(false));

	useKeyDownListener(null, handleCloseCallback);

	useEffect(() => {
		if (isDetails) setRender(true);
	}, [isDetails]);

	const onAnimationEnd = () => {
		if (!isDetails) {
			setRender(false);
			dispatch(clearDetails());
			dispatch(clearEpisodes());
		}
	};

	const handleScroll = e => {
		setScrolled(e.nativeEvent.target.scrollTop);
	};

	return shouldRender ? (
		<Details.Container shouldRender={shouldRender} onScroll={e => handleScroll(e)}>
			<Details.OverlayTrigger onMouseDown={handleCloseCallback} data-testid="overlay" />
			<Details isDetails={isDetails} position={detailsPosition} onAnimationEnd={onAnimationEnd}>
				<DetailsHeaderContainer item={item.details} scrolled={scrolled} />
				<DetailsInfoContainer item={item} />
				<DetailsEpisodesContainer item={item} />
				<DetailsRelatedContainer item={item} />
				<Details.About>
					{item?.details ? (
						<>
							<Details.AboutHeader>
								About {item.details.name ? item.details.name : item.details.title}
							</Details.AboutHeader>
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
										{item.details.genres.map((el, i) =>
											i + 1 === item.details.genres.length ? el.name : `${el.name}, `
										)}
									</p>
								</Details.AboutPiece>
							)}
							{item.ageRestriction && (
								<Details.AboutPiece>
									Maturity rating <span>{item.ageRestriction}</span>
									<p>Suitable for ages {item.ageRestriction} and up</p>
								</Details.AboutPiece>
							)}
						</>
					) : null}
				</Details.About>
			</Details>
			<GlobalStyles disableScrolling={isDetails} />
		</Details.Container>
	) : null;
};

export default DetailsContainer;
