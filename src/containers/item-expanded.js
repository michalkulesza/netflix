import React from "react";
import LazyLoad from "react-lazyload";
import { ItemExpanded } from "../components";

import { BiPlay, BiPlus, BiLike, BiDislike, BiChevronDown } from "react-icons/bi";

const ItemExpandedContainer = ({ isExpanded, showVideo, position, item, videoFile }) => {
	return (
		<ItemExpanded isExpanded={isExpanded} position={position}>
			<ItemExpanded.Header>
				<ItemExpanded.Placeholder
					src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
					alt="Poster"
					showVideo={showVideo}
				/>
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
						</ItemExpanded.Button>
						<ItemExpanded.Button>
							<BiLike />
						</ItemExpanded.Button>
						<ItemExpanded.Button>
							<BiDislike />
						</ItemExpanded.Button>
					</ItemExpanded.Half>
					<ItemExpanded.Half>
						<ItemExpanded.Button>
							<BiChevronDown />
						</ItemExpanded.Button>
					</ItemExpanded.Half>
				</ItemExpanded.Buttons>
				<ItemExpanded.Info>
					<p>96% Match</p>
					<span>{`12 `}</span>2 Seasons
				</ItemExpanded.Info>
				<ItemExpanded.Genre>
					Casual <span>•</span> Drama
				</ItemExpanded.Genre>
			</ItemExpanded.Main>
		</ItemExpanded>
	);
};

export default ItemExpandedContainer;
