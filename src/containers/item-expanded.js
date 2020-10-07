import React from "react";
import { useDispatch } from "react-redux";
import { setDetails, setDetailsPosition, fetchDetailsMovie, fetchDetailsTv } from "../redux/actions";
import LazyLoad from "react-lazyload";
import { ItemExpanded, Button } from "../components";

import { BiPlay, BiPlus, BiLike, BiDislike, BiChevronDown } from "react-icons/bi";

const ItemExpandedContainer = ({ isExpanded, showVideo, position, item, videoFile }) => {
	const dispatch = useDispatch();

	const handleClickMoreDetails = ({ currentTarget }) => {
		const elemPos = currentTarget.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect();
		dispatch(setDetailsPosition(elemPos.x, elemPos.y, elemPos.width, elemPos.height));
		dispatch(setDetails(true));
	};

	const preloadDetailsData = () => {
		item.media_type === "movie" ? dispatch(fetchDetailsMovie(item.id)) : dispatch(fetchDetailsTv(item.id));
	};

	return (
		<ItemExpanded isExpanded={isExpanded} position={position} onMouseEnter={preloadDetailsData}>
			<ItemExpanded.Header>
				<ItemExpanded.Placeholder src={item.backdrop_path_500} alt="Poster" showVideo={showVideo} />
				{isExpanded && (
					<LazyLoad>
						<ItemExpanded.Video src={videoFile} autoPlay muted loop showVideo={showVideo} />
					</LazyLoad>
				)}
			</ItemExpanded.Header>
			<ItemExpanded.Main>
				<ItemExpanded.Buttons>
					<ItemExpanded.Half>
						<Button.Round inverted>
							<BiPlay />
						</Button.Round>
						<Button.Round label="Add to My List">
							<BiPlus />
						</Button.Round>
						<Button.Round label="I like this">
							<BiLike />
						</Button.Round>
						<Button.Round label="Not for me">
							<BiDislike />
						</Button.Round>
					</ItemExpanded.Half>
					<ItemExpanded.Half>
						<Button.Round
							label={item.media_type === "movie" ? "More info" : "Episodes & Info"}
							onMouseDown={e => handleClickMoreDetails(e)}
						>
							<BiChevronDown />
						</Button.Round>
					</ItemExpanded.Half>
				</ItemExpanded.Buttons>
				<ItemExpanded.Info>
					<p>96% Match</p>
					<span>{`12 `}</span>
					{item.media_type === "movie" ? "1h 40m" : "3 Seasons"}
				</ItemExpanded.Info>
				<ItemExpanded.GenreWrapper>
					{item.genre_ids.slice(0, 2).map((genre, i) => (
						<ItemExpanded.Genre key={i}>
							{genre}
							{i !== 1 && <span> • </span>}
						</ItemExpanded.Genre>
					))}
				</ItemExpanded.GenreWrapper>
			</ItemExpanded.Main>
		</ItemExpanded>
	);
};

export default ItemExpandedContainer;
