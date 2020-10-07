import { useState, useEffect } from "react";

const useFetchInitData = id => {
	const [prevRoute, setPrevRoute] = useState(null);

	useEffect(() => {
		if (prevRoute !== id.pathname) {
			if (/^\/browse\/my-list/.test(id.pathname)) {
				console.log("MY LIST");
				return;
			}
			if (/^\/browse\/latest/.test(id.pathname)) {
				console.log("LATEST");
				return;
			}
			if (/^\/browse\/films/.test(id.pathname)) {
				console.log("FILMS");
				return;
			}
			if (/^\/browse\/series/.test(id.pathname)) {
				console.log("SERIES");
				return;
			}
			if (/^\/browse/.test(id.pathname)) {
				console.log("BROWSE");
				return;
			}

			setPrevRoute(id.pathname);
		}
	}, [id, prevRoute]);
	return null;
};

export default useFetchInitData;
