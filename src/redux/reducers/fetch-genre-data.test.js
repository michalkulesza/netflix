import fetchGenreData from "./fetch-genre-data";
import * as types from "../types";

const mockData = { data: [], page: 1, total_pages: 11, id: 101 };
const mockMoreData = [{}];

const initState = {
	data: null,
	page: null,
	total_pages: null,
	id: null,
	isUpdating: false,
};

const initStateOnSecondRun = {
	data: [],
	page: 12,
	total_pages: 14,
	id: 121212,
	isUpdating: false,
};

describe("fetchGenreData reducer", () => {
	it("should return initial state", () => {
		expect(fetchGenreData(undefined, {})).toEqual(initState);
	});

	it("should handle FETCH_GENRE_DATA", () => {
		expect(
			fetchGenreData(undefined, {
				type: types.FETCH_GENRE_DATA,
				payload: mockData,
			})
		).toEqual({ ...initState, ...mockData });
	});

	it("should handle FETCH_MORE_GENRE_DATA", () => {
		expect(
			fetchGenreData(initStateOnSecondRun, {
				type: types.FETCH_MORE_GENRE_DATA,
				payload: { ...initStateOnSecondRun, data: mockMoreData },
			})
		).toEqual({ ...initStateOnSecondRun, data: mockMoreData });
	});

	it("should handle SET_GENRE_DATA_UPDATING", () => {
		expect(
			fetchGenreData(initState, {
				type: types.SET_GENRE_DATA_UPDATING,
				payload: true,
			})
		).toEqual({ ...initState, isUpdating: true });
	});

	it("should handle CLEAR_GENRE_DATA", () => {
		expect(
			fetchGenreData(initStateOnSecondRun, {
				type: types.CLEAR_GENRE_DATA,
			})
		).toEqual(initState);
	});
});
