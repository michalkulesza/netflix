import { useState, useEffect } from "react";
import { API_KEY } from "../API_KEY";

const useFetch = query => {
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		if (!query) return;

		const fetchData = async () => {
			try {
				const response = await fetch(`https:/api.themoviedb.org/3${query}?api_key=${API_KEY}`);
				const data = await response.json();
				if (response.ok) {
					setData(data);
				} else {
					setError(data.status_message);
				}
			} catch (error) {
				console.error(error);
				setError(error.message);
			}
		};

		fetchData();
	}, [query]);

	return { error, data };
};

export default useFetch;
