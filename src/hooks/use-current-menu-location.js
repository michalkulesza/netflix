import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useCurrentMenuLocation = () => {
	const [currentLocation, setCurrentLocation] = useState(null);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname.match("series")) {
			setCurrentLocation("Series");
			return;
		}
		if (location.pathname.match("films")) {
			setCurrentLocation("Films");
			return;
		}
		if (location.pathname.match("latest")) {
			setCurrentLocation("Latest");
			return;
		}
		if (location.pathname.match("my-list")) {
			setCurrentLocation("My List");
			return;
		}

		setCurrentLocation("Home");
	}, [location, currentLocation]);

	return currentLocation;
};

export default useCurrentMenuLocation;
