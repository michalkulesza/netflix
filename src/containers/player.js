import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Player } from "../components";

const data = {
	src: "http://localhost:8888/video/night",
	title: "Angry looking fella",
	backdrop: "http://image.tmdb.org/t/p/w1280/aO5ILS7qnqtFIprbJ40zla0jhpu.jpg",
	description:
		"Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
	year: 1991,
	ageRestriction: 12,
	length: 69,
};

const PlayerContainer = () => {
	const [canPlay, setCanPlay] = useState(false);
	// const data = useSelector(state => state.player);

	const handleCanPlay = () => setCanPlay(true);

	return (
		<Player>
			<Player.OverlayContainer>
				<Player.OverlayTop>
					<Player.OverlayTitle>{data.title}</Player.OverlayTitle>
				</Player.OverlayTop>
				<Player.OverlayMiddle></Player.OverlayMiddle>
				<Player.OverlayBottom></Player.OverlayBottom>
			</Player.OverlayContainer>
			<Player.PlaceholderContainer>
				<Player.Placeholder src={data.backdrop} />
			</Player.PlaceholderContainer>
			<Player.VideoContainer>
				<Player.Video onCanPlay={handleCanPlay} src={data.src} />
			</Player.VideoContainer>
		</Player>
	);
};

export default PlayerContainer;
