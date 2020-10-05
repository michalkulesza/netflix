import React from "react";
import { useDispatch } from "react-redux";
// import { fetchDetailsMovie, fetchDetailsTv } from "../redux/actions";
import { setDetails, setDetailsPosition } from "../redux/actions";
import LazyLoad from "react-lazyload";
import { ItemExpanded } from "../components";

import { BiPlay, BiPlus, BiLike, BiDislike, BiChevronDown } from "react-icons/bi";

const ItemExpandedContainer = ({ isExpanded, showVideo, position, item, videoFile }) => {
	const dispatch = useDispatch();

	return (
		<ItemExpanded isExpanded={isExpanded} position={position}>
			<ItemExpanded.Header>
				<ItemExpanded.Placeholder src={item.poster_path_500} alt="Poster" showVideo={showVideo} />
				{isExpanded && (
					<LazyLoad>
						<ItemExpanded.Video src={videoFile} muted={!showVideo} loop showVideo={showVideo} />
					</LazyLoad>
				)}
			</ItemExpanded.Header>
			<ItemExpanded.Main>
				<ItemExpanded.Buttons>
					<ItemExpanded.Half>
						<ItemExpanded.Button inverted>
							<BiPlay />
						</ItemExpanded.Button>
						<ItemExpanded.Button>
							<BiPlus />
							<ItemExpanded.Label>Add to My List</ItemExpanded.Label>
						</ItemExpanded.Button>
						<ItemExpanded.Button>
							<BiLike />
							<ItemExpanded.Label>I like this</ItemExpanded.Label>
						</ItemExpanded.Button>
						<ItemExpanded.Button>
							<BiDislike />
							<ItemExpanded.Label>Not for me</ItemExpanded.Label>
						</ItemExpanded.Button>
					</ItemExpanded.Half>
					<ItemExpanded.Half>
						<ItemExpanded.Button
							onMouseDown={({ currentTarget }) => {
								const elemPos = currentTarget.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect();
								dispatch(setDetailsPosition(elemPos.x, elemPos.y, elemPos.width, elemPos.height));
								dispatch(setDetails(true));
							}}

							// onClick={() =>
							// 	item.media_type === "movie" ? dispatch(fetchDetailsMovie(item.id)) : dispatch(fetchDetailsTv(item.id))
							// }
						>
							<BiChevronDown />
							<ItemExpanded.Label lastButton>
								{item.media_type === "movie" ? "More info" : "Episodes & Info"}
							</ItemExpanded.Label>
						</ItemExpanded.Button>
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
