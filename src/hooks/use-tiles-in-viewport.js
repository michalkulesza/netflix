import React from "react";

const useTilesInViewport = () => {
	const [totalTilesInVievport, setTotalTilesInVievport] = React.useState(0);

	function changeTiles() {
		if (window.innerWidth < 768) {
			setTotalTilesInVievport(4);
		} else if (window.innerWidth >= 768 && window.innerWidth < 980) {
			setTotalTilesInVievport(5);
		} else if (window.innerWidth >= 980 && window.innerWidth < 1260) {
			setTotalTilesInVievport(6);
		} else if (window.innerWidth >= 1260 && window.innerWidth < 1800) {
			setTotalTilesInVievport(8);
		} else if (window.innerWidth >= 1800) {
			setTotalTilesInVievport(9);
		}
	}

	React.useEffect(() => {
		changeTiles();
		window.addEventListener("resize", changeTiles);

		return () => {
			window.removeEventListener("resize", changeTiles);
		};
	}, []);

	return { totalTilesInVievport };
};

export default useTilesInViewport;
