import React from "react";

const useViewportWidth = () => {
	const [width, setWidth] = React.useState(0);

	const updateWidth = () => {
		setWidth(window.innerWidth);
	};

	React.useEffect(() => {
		updateWidth();
		window.addEventListener("resize", updateWidth);

		return () => {
			window.removeEventListener("resize", updateWidth);
		};
	}, []);

	return width;
};

export default useViewportWidth;
