import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	fetchInitialDataBrowse,
	fetchInitialDataSeries,
	fetchInitialDataFilms,
	fetchInitialDataLatest,
	fetchInitialDataList,
} from "../redux/actions/fetch-initial-data";
import { setHeaderVideo } from "../redux/actions/misc";
import { useLocation } from "react-router-dom";
import { BrowseVideo, FilmsVideo, SeriesVideo } from "../fixtures/videos";
import { clearGenres, setFilmsGenres, setSeriesGenres } from "../redux/actions/genres";

const useFetchInitData = () => {
	const location = useLocation();
	const dataUpdating = useSelector(state => state.initialData.isUpdating);
	const dispatch = useDispatch();

	useEffect(() => {
		const handleRoutesData = (fetch, header) => {
			if (!dataUpdating) {
				dispatch(clearGenres());
				dispatch(fetch());
				dispatch(setHeaderVideo(header));
			}
		};

		if (/^\/browse\/my-list/.test(location.pathname)) {
			dispatch(clearGenres());
			return;
		}

		if (/^\/browse\/latest/.test(location.pathname)) {
			handleRoutesData(fetchInitialDataLatest, FilmsVideo);
			return;
		}

		if (/^\/browse\/films/.test(location.pathname)) {
			handleRoutesData(fetchInitialDataFilms, FilmsVideo);
			dispatch(setFilmsGenres());
			return;
		}

		if (/^\/browse\/series/.test(location.pathname)) {
			handleRoutesData(fetchInitialDataSeries, SeriesVideo);
			dispatch(setSeriesGenres());
			return;
		}

		if (/^\/browse/.test(location.pathname)) {
			handleRoutesData(fetchInitialDataBrowse, BrowseVideo);
			dispatch(fetchInitialDataList());
			return;
		}
		// eslint-disable-next-line
	}, [location.pathname]);
	return null;
};

export default useFetchInitData;
