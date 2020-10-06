import { useState, useEffect } from "react";

const useScrolledDistance = () => {
	const [scrolled, setScrolled] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			let currentPosition = window.pageYOffset;
			setScrolled(currentPosition <= 0 ? 0 : currentPosition);
		};

		window.addEventListener("scroll", onScroll);
		return window.addEventListener("scroll", onScroll);
	}, [scrolled]);

	return scrolled;
};

export default useScrolledDistance;
