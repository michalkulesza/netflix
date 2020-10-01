import React, { useState } from "react";
import { Item } from "../components";
import LazyLoad from "react-lazyload";
import VideoFile from "../res/videos/mindhunter_trailer.mp4";

import { BiPlay, BiPlus, BiLike, BiDislike, BiChevronDown } from "react-icons/bi";

// import Loader from "../res/icons/spinner.gif";
let hoverTimer;
let videoTimer;

const ItemContainer = ({ item, i, scrolled, isFirstSlide, totalTilesInVievport }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [showVideo, setShowVideo] = useState(false);

	const markItemsPosition = i => {
		const offset = isFirstSlide ? 0 : 1;
		const items = totalTilesInVievport - 2;

		if (i === 0 + offset) {
			return "first";
		}

		if (i > 0 + offset && i < items + offset) {
			return "middle";
		}

		if (i === items + offset) {
			return "last";
		}

		return "outside";
	};

	const position = markItemsPosition(i);

	return (
		<Item.Wrapper
			onMouseEnter={() => {
				hoverTimer = setTimeout(() => {
					setIsExpanded(true);
					videoTimer = setTimeout(() => {
						setShowVideo(true);
					}, 2000);
				}, 500);
			}}
			onMouseLeave={() => {
				console.log("jojo");
				setIsExpanded(false);
				setShowVideo(false);
				clearTimeout(hoverTimer);
				clearTimeout(videoTimer);
			}}
			key={item.id}
			scrolled={scrolled}
			className={position}
		>
			<LazyLoad once>
				<Item src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="Poster" />
				<Item.ExpandedSmall isExpanded={isExpanded} position={position} onMouseLeave={() => console.log("bobo")}>
					<Item.ExpandedSmallHeader>
						<Item.ExpandedSmallPlaceholder
							src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
							alt="Poster"
							showVideo={showVideo}
						/>
						{isExpanded && (
							<LazyLoad>
								<Item.ExpandedSmallVideo src={VideoFile} muted={!showVideo} loop showVideo={showVideo} />
							</LazyLoad>
						)}
					</Item.ExpandedSmallHeader>
					<Item.ExpandedSmallMain>
						<Item.ExpandedSmallButtons>
							<Item.ExpandedSmallButtonsHalf>
								<Item.ExpandedSmallButton inverted>
									<BiPlay />
								</Item.ExpandedSmallButton>
								<Item.ExpandedSmallButton>
									<BiPlus />
								</Item.ExpandedSmallButton>
								<Item.ExpandedSmallButton>
									<BiLike />
								</Item.ExpandedSmallButton>
								<Item.ExpandedSmallButton>
									<BiDislike />
								</Item.ExpandedSmallButton>
							</Item.ExpandedSmallButtonsHalf>
							<Item.ExpandedSmallButtonsHalf>
								<Item.ExpandedSmallButton>
									<BiChevronDown />
								</Item.ExpandedSmallButton>
							</Item.ExpandedSmallButtonsHalf>
						</Item.ExpandedSmallButtons>
						<Item.ExpandedSmallInfo>
							<p>96% Match</p>
							<span>{`12 `}</span>2 Seasons
						</Item.ExpandedSmallInfo>
						<Item.ExpandedSmallGenre>
							Casual <span>•</span> Drama
						</Item.ExpandedSmallGenre>
					</Item.ExpandedSmallMain>
				</Item.ExpandedSmall>
			</LazyLoad>
		</Item.Wrapper>
	);
};

export default ItemContainer;
