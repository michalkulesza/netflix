import React from "react";
import { useSelector } from "react-redux";
import { useViewportWidth, useScrolledDistance, useWindowFocus } from "../hooks";

const useCanHeaderPlay = () => {
	const [canPlay, setCanPlay] = React.useState(false);

	const scrolled = useScrolledDistance();
	const viewPortWidth = useViewportWidth();
	const isWindowFocused = useWindowFocus();
	const isExpanded = useSelector(state => state.toggles.isExpanded);
	const isDetails = useSelector(state => state.toggles.isDetails);
	React.useEffect(() => {
		if (scrolled < (viewPortWidth * 0.5625) / 3 && !isExpanded && !isDetails && isWindowFocused) {
			setCanPlay(true);
		} else {
			setCanPlay(false);
		}
	}, [isDetails, isExpanded, isWindowFocused, scrolled, viewPortWidth]);

	return canPlay;
};

export default useCanHeaderPlay;
