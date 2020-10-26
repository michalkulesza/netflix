import React from "react";
import { DetailsInfo } from "../../components";

const DetailsInfoContainer = ({ item }) => {
	return (
		<DetailsInfo>
			{item ? (
				<>
					<DetailsInfo.Half>
						<DetailsInfo.Content>
							{item.details[0] && (
								<>
									<p>96% Match</p>{" "}
									{item.details[0].first_air_date
										? item.details[0].first_air_date.slice(0, 4)
										: item.details[0].release_date.slice(0, 4)}{" "}
									<span>{item.ageRestriction === "" ? "0" : item.ageRestriction}</span>{" "}
									{item.details[0].number_of_seasons
										? `${item.details[0].number_of_seasons} Season`
										: `${item.details[0].runtime}min`}
									{item.details[0].number_of_seasons > 1 && "s"}
								</>
							)}
						</DetailsInfo.Content>
						<DetailsInfo.Description>{item.details[0]?.overview}</DetailsInfo.Description>
					</DetailsInfo.Half>
					<DetailsInfo.Half>
						<DetailsInfo.Cast>
							{item.cast && item.cast.length > 0 && (
								<>
									<span>Cast:</span> {item.cast.map((el, i) => `${el.name}${item.cast.length - 1 !== i ? ", " : ""}`)}
								</>
							)}
						</DetailsInfo.Cast>
						<DetailsInfo.Cast>
							<span>Genres:</span>{" "}
							{item.details[0] &&
								item.details[0].genres.map(
									(el, i) => `${el.name}${item.details[0].genres.length - 1 !== i ? ", " : ""}`
								)}
						</DetailsInfo.Cast>
					</DetailsInfo.Half>
				</>
			) : (
				<DetailsInfo.Loading />
			)}
		</DetailsInfo>
	);
};

export default DetailsInfoContainer;
