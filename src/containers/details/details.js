import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails, clearEpisodes } from "../../redux/actions";
import { Details } from "../../components";
import { DetailsHeaderContainer, DetailsInfoContainer, DetailsEpisodesContainer, DetailsRelatedContainer } from "../";
import { GlobalStyles } from "../../global-styles";

const DetailsContainer = headerData => {
	const dispatch = useDispatch();
	const isDetails = useSelector(state => state.toggles.isDetails);
	const position = useSelector(state => state.toggles.detailsPosition);
	const item = useSelector(state => state.fetchDetails);

	const [shouldRender, setRender] = useState(isDetails);

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

	return shouldRender ? (
		<Details.Container shouldRender={shouldRender}>
			<Details isDetails={isDetails} position={position} onAnimationEnd={onAnimationEnd}>
				<DetailsHeaderContainer headerData={headerData} src={headerData.src} item={item} />
				<DetailsInfoContainer item={item} />
				<DetailsEpisodesContainer item={item} />
				<DetailsRelatedContainer item={item} />
				<Details.About>
					{item ? (
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
