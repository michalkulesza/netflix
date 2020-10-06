import React from "react";
import { ItemDetailsInfo } from "../components";

const ItemDetailsInfoContainer = ({ item }) => {
	return (
		<ItemDetailsInfo>
			<ItemDetailsInfo.Half>
				<ItemDetailsInfo.Content>
					<p>96% Match</p>{" "}
					{item.details.first_air_date
						? item.details.first_air_date.slice(0, 4)
						: item.details.release_date.slice(0, 4)}{" "}
					<span>{item.ageRestriction}</span>{" "}
					{item.details.number_of_seasons ? `${item.details.number_of_seasons} Seasons` : `${item.details.runtime}min`}
					{item.details.number_of_seasons > 1 && "s"}
				</ItemDetailsInfo.Content>
				<ItemDetailsInfo.Description>{item.details.overview}</ItemDetailsInfo.Description>
			</ItemDetailsInfo.Half>
			<ItemDetailsInfo.Half>
				<ItemDetailsInfo.Cast>
					<span>Cast:</span> {item.cast.map((el, i) => `${el.name}${item.cast.length - 1 !== i ? ", " : ""}`)}
				</ItemDetailsInfo.Cast>
				<ItemDetailsInfo.Cast>
					<span>Genres:</span>{" "}
					{item.details.genres.map((el, i) => `${el.name}${item.details.genres.length - 1 !== i ? ", " : ""}`)}
				</ItemDetailsInfo.Cast>
			</ItemDetailsInfo.Half>
		</ItemDetailsInfo>
	);
};

export default ItemDetailsInfoContainer;
