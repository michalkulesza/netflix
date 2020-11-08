import fetchEpisodes from "./fetch-episodes";
import * as types from "../types";

const mockData = { test: "test" };
const initState = {
	data: null,
	isUpdating: false,
};

describe("fetchEpisodes reducer", () => {
	it("should return initial state", () => {
		expect(fetchEpisodes(undefined, {})).toEqual(initState);
	});

	it("should handle FETCH_EPISODES", () => {
		expect(
			fetchEpisodes(undefined, {
				type: types.FETCH_EPISODES,
				payload: mockData,
			})
		).toEqual({ ...initState, data: mockData });
	});

	it("should handle SET_EPISODES_UPDATING", () => {
		expect(
			fetchEpisodes(undefined, {
				type: types.SET_EPISODES_UPDATING,
			})
		).toEqual({ ...initState, isUpdating: true });
	});

	it("should handle CLEAR_EPISODES", () => {
		expect(
			fetchEpisodes(
				{ ...initState, data: mockData },
				{
					type: types.CLEAR_EPISODES,
				}
			)
		).toEqual(initState);
	});
});
