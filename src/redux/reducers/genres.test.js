import genres from "./genres";
import * as types from "../types";

const mockData = { genres: [], genresType: "Films" };
const initState = {
	genres: null,
	genresType: null,
	selectedGenre: null,
};

describe("initialData reducer", () => {
	it("should return initial state", () => {
		expect(genres(undefined, {})).toEqual(initState);
	});

	it("should handle SET_GENRES", () => {
		expect(
			genres(initState, {
				type: types.SET_GENRES,
				payload: mockData,
			})
		).toEqual({ ...initState, genres: mockData.genres, genresType: mockData.genresType });
	});

	it("should handle SET_SELECTED_GENRE", () => {
		expect(
			genres(initState, {
				type: types.SET_SELECTED_GENRE,
				payload: mockData.genre,
			})
		).toEqual({ ...initState, selectedGenre: mockData.genre });
	});

	it("should handle CLEAR_SELECTED_GENRE", () => {
		expect(
			genres(
				{ ...initState, selectedGenre: mockData.genresType },
				{
					type: types.CLEAR_SELECTED_GENRE,
				}
			)
		).toEqual({ ...initState, selectedGenre: null });
	});

	it("should handle CLEAR_GENRES", () => {
		expect(
			genres(
				{ ...initState, selectedGenre: mockData.genresType },
				{
					type: types.CLEAR_GENRES,
				}
			)
		).toEqual(initState);
	});
});
