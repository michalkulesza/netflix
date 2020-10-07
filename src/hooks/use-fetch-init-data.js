import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	setInitialData,
	fetchInitialDataBrowse,
	fetchInitialDataSeries,
	fetchInitialDataFilms,
	fetchInitialDataLatest,
} from "../redux/actions";

const useFetchInitData = id => {
	const dispatch = useDispatch();
	const [prevRoute, setPrevRoute] = useState(null);
	const cachedBrowseData = useSelector(state => state.cacheInitialData.browseCache);
	const cachedSeriesData = useSelector(state => state.cacheInitialData.seriesCache);
	const cachedFilmsData = useSelector(state => state.cacheInitialData.filmsCache);
	const cachedLatestData = useSelector(state => state.cacheInitialData.latestCache);
	const initialData = useSelector(state => state.initialData);

	useEffect(() => {
		if (prevRoute !== id.pathname) {
			if (/^\/browse\/my-list/.test(id.pathname)) {
				console.log("Navigated to: /MY LIST");
				return;
			}

			if (/^\/browse\/latest/.test(id.pathname)) {
				if (!initialData) {
					if (cachedLatestData) {
						if (cachedLatestData !== initialData) {
							dispatch(setInitialData(cachedLatestData));
							console.log("Served cached latest data.");
						}
						return;
					} else {
						dispatch(fetchInitialDataLatest());
						console.log("Fetched and cached series data.");
					}
				}
				return;
			}

			if (/^\/browse\/films/.test(id.pathname)) {
				if (!initialData) {
					if (cachedFilmsData) {
						if (cachedFilmsData !== initialData) {
							dispatch(setInitialData(cachedFilmsData));
							console.log("Served cached films data.");
						}
						return;
					} else {
						dispatch(fetchInitialDataFilms());
						console.log("Fetched and cached series data.");
					}
				}
				return;
			}

			if (/^\/browse\/series/.test(id.pathname)) {
				if (!initialData) {
					if (cachedSeriesData) {
						if (cachedSeriesData !== initialData) {
							dispatch(setInitialData(cachedSeriesData));
							console.log("Served cached series data.");
						}
						return;
					} else {
						dispatch(fetchInitialDataSeries());
						console.log("Fetched and cached series data.");
					}
				}
				return;
			}

			if (/^\/browse/.test(id.pathname)) {
				if (!initialData) {
					if (cachedBrowseData) {
						if (cachedBrowseData !== initialData) {
							dispatch(setInitialData(cachedBrowseData));
							console.log("Served cached browse data.");
						}
						return;
					} else {
						dispatch(fetchInitialDataBrowse());
						console.log("Fetched and cached browse data.");
					}
				}
				return;
			}

			setPrevRoute(id.pathname);
		}
	}, [id, prevRoute, cachedBrowseData, cachedSeriesData, cachedFilmsData, cachedLatestData, dispatch, initialData]);
	return null;
};

export default useFetchInitData;
