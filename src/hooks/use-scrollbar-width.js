import { useState, useEffect } from "react";

const useScrollbarWidth = () => {
	const [widthPx, setWidthPx] = useState(0);
	const [widthVw, setWidthVw] = useState(0);

	useEffect(() => {
		const scrollBarWidthPx = window.outerWidth - window.innerWidth;
		const scrollbarVW =
			Math.round(((scrollBarWidthPx / window.outerWidth) * 10000000 + Number.EPSILON) * 10000000) / 1000000000000;

		if (scrollBarWidthPx !== widthPx) {
			setWidthPx(scrollBarWidthPx);
			setWidthVw(scrollbarVW);
		}
	}, [widthPx]);

	return widthVw;
};

export default useScrollbarWidth;
