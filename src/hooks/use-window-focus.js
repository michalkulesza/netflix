import React from "react";

const useWindowFocus = () => {
	const [isFocused, setIsFocused] = React.useState(0);

	const setFocus = () => setIsFocused(true);
	const setBlur = () => setIsFocused(false);

	React.useEffect(() => {
		window.addEventListener("focus", setFocus);
		window.addEventListener("blur", setBlur);

		return () => {
			window.removeEventListener("focus", setFocus);
			window.removeEventListener("blur", setBlur);
		};
	}, []);

	return isFocused;
};

export default useWindowFocus;
