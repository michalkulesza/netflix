import React from "react";
import { useSelector } from "react-redux";
import { useViewportWidth, useScrolledDistance, useWindowFocus } from "../hooks";

const useCanHeaderPlay = () => {
	const [canPlay, setCanPlay] = React.useState(false);

	const scrolled = useScrolledDistance();
	const viewPortWidth = useViewportWidth();
	const isWindowFocused = useWindowFocus();
	const { activeExpanded } = useSelector(state => state.misc);
	const { isDetails } = useSelector(state => state.toggles);
	React.useEffect(() => {
		if (scrolled < (viewPortWidth * 0.5625) / 3 && !activeExpanded && !isDetails && isWindowFocused) {
			setCanPlay(true);
		} else {
			setCanPlay(false);
		}
	}, [isDetails, activeExpanded, isWindowFocused, scrolled, viewPortWidth]);

	return canPlay;
};

export default useCanHeaderPlay;
