import React from "react";
import { DetailsInfo } from "../../components";

const DetailsInfoContainer = ({ item }) => {
	return (
		<DetailsInfo>
			{item ? (
				<>
					<DetailsInfo.Half>
						<DetailsInfo.Content>
							{item.details && (
								<>
									<p>96% Match</p>{" "}
									{item.details.first_air_date
										? item.details.first_air_date.slice(0, 4)
										: item.details.release_date.slice(0, 4)}{" "}
									<span>{item.ageRestriction === "" ? "0" : item.ageRestriction}</span>{" "}
									{item.details.number_of_seasons
										? `${item.details.number_of_seasons} Season`
										: `${item.details.runtime}min`}
									{item.details.number_of_seasons > 1 && "s"}
								</>
							)}
						</DetailsInfo.Content>
						<DetailsInfo.Description>{item.details?.overview}</DetailsInfo.Description>
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
							{item.details &&
								item.details.genres.map((el, i) => `${el.name}${item.details.genres.length - 1 !== i ? ", " : ""}`)}
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
