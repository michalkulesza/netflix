import React from "react";
import { useSelector } from "react-redux";
import { useViewportWidth, useScrolledDistance, useWindowFocus } from "../hooks";

const useCanHeaderPlay = () => {
	const [canPlay, setCanPlay] = React.useState(false);

	const scrolled = useScrolledDistance();
	const viewPortWidth = useViewportWidth();
	const isUserAway = useSelector(state => state.toggles.isUserAway);
	const isWindowFocused = useWindowFocus();
	const isExpanded = useSelector(state => state.toggles.isExpanded);
	const isDetails = useSelector(state => state.toggles.isDetails);
	React.useEffect(() => {
		if (scrolled < (viewPortWidth * 0.5625) / 3 && !isExpanded && !isDetails && !isUserAway & isWindowFocused) {
			setCanPlay(true);
		} else {
			setCanPlay(false);
		}
	}, [isDetails, isExpanded, isUserAway, isWindowFocused, scrolled, viewPortWidth]);

	return canPlay;
};

export default useCanHeaderPlay;
