import React from "react";
import { DetailsRelated } from "../../components";

import { GrPlayFill } from "react-icons/gr";

const DetailsRelatedContainer = ({ item }) => {
	return (
		item.related && (
			<DetailsRelated>
				<DetailsRelated.Header>More Like This</DetailsRelated.Header>
				<DetailsRelated.Items>
					{item.related.map(el => (
						<DetailsRelated.Item key={el.id}>
							<DetailsRelated.ItemImageWrapper>
								<DetailsRelated.ItemImage src={el.backdrop_path_500} alt="Video preview" />
								<DetailsRelated.ItemImageOverlay>
									<DetailsRelated.ItemImageOverlayButton>
										<GrPlayFill />
									</DetailsRelated.ItemImageOverlayButton>
								</DetailsRelated.ItemImageOverlay>
							</DetailsRelated.ItemImageWrapper>
							<DetailsRelated.ItemMain>
								<DetailsRelated.ItemTitle>{el.name ? el.name : el.title}</DetailsRelated.ItemTitle>
								<DetailsRelated.ItemInfo>
									<span>12</span> {el.first_air_date ? el.first_air_date.slice(0, 4) : el.release_date.slice(0, 4)}
								</DetailsRelated.ItemInfo>
								<DetailsRelated.ItemDescription>{el.overview.slice(0, 100)}</DetailsRelated.ItemDescription>
							</DetailsRelated.ItemMain>
						</DetailsRelated.Item>
					))}
				</DetailsRelated.Items>
			</DetailsRelated>
		)
	);
};

export default DetailsRelatedContainer;
