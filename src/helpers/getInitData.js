import { API_KEY } from "../API_KEY";

const getInitData = async () => {
	try {
		const trending = await fetch(`https:/api.themoviedb.org/3/trending/films/week?api_key=${API_KEY}`)
			.then(response => response.json())
			.then(data => data.results)
			.catch(err => console.error(err));

		const popular = await fetch(`https:/api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
			.then(response => response.json())
			.then(data => data.results)
			.catch(err => console.error(err));

		const toprated = await fetch(`https:/api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
			.then(response => response.json())
			.then(data => data.results)
			.catch(err => console.error(err));

		const upcoming = await fetch(`https:/api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
			.then(response => response.json())
			.then(data => data.results)
			.catch(err => console.error(err));

		return [{ trending }, { popular }, { toprated }, { upcoming }, { trending }];
	} catch (err) {
		const error = err.message;
		return { error };
	}
};

export default getInitData;
