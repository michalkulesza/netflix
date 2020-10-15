import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenreData } from "../redux/actions/fetch-genre-data";
const OFFSET = 200;

const useFetchGenreInfinite = genreType => {
	const dispatch = useDispatch();
	const [isBottom, setIsBottom] = useState(false);
	const { id, page, total_pages } = useSelector(state => state.fetchGenreData);

	function handleScroll() {
		const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		const scrollHeight =
			(document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
		if (scrollTop + window.innerHeight + OFFSET >= scrollHeight) {
			setIsBottom(true);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (isBottom && page && total_pages && page < total_pages) {
			dispatch(fetchGenreData(genreType, id, page + 1));
			setIsBottom(false);
		}
	}, [isBottom, dispatch, genreType, id, page, total_pages]);
};

export default useFetchGenreInfinite;
