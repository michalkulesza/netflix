import player from "./player";
import * as types from "../types";

const mockData = { test: "test" };
const initState = {
	type: null,
	title: null,
	src: null,
	backdrop: null,
	description: null,
	ep_title: null,
	ep_number: null,
	ep_season: null,
	seasons: null,
	year: null,
	ageRestriction: null,
	runtime: null,
	volume: 0.6,
	state: "paused",
	metaLoaded: false,
};

describe("player reducer", () => {
	it("should return initial state", () => {
		expect(player(undefined, {})).toEqual(initState);
	});

	it("should handle SET_PLAYER_TV", () => {
		expect(
			player(initState, {
				type: types.SET_PLAYER_TV,
				payload: mockData,
			})
		).toEqual({ ...initState, type: "tv", ...mockData });
	});

	it("should handle SET_PLAYER_FILM", () => {
		expect(
			player(initState, {
				type: types.SET_PLAYER_FILM,
				payload: mockData,
			})
		).toEqual({ ...initState, type: "film", ...mockData });
	});

	it("should handle SET_PLAYER_VOLUME", () => {
		expect(
			player(initState, {
				type: types.SET_PLAYER_VOLUME,
				payload: 1,
			})
		).toEqual({ ...initState, volume: 1 });
	});

	it("should handle SET_PLAYER_SEASONS", () => {
		expect(
			player(initState, {
				type: types.SET_PLAYER_SEASONS,
				payload: 1,
			})
		).toEqual({ ...initState, seasons: 1 });
	});

	it("should handle SET_PLAYER_STATE", () => {
		expect(
			player(initState, {
				type: types.SET_PLAYER_STATE,
				payload: "playing",
			})
		).toEqual({ ...initState, state: "playing" });
	});

	it("should handle SET_PLAYER_META_LOADED", () => {
		expect(
			player(initState, {
				type: types.SET_PLAYER_META_LOADED,
				payload: true,
			})
		).toEqual({ ...initState, metaLoaded: true });
	});

	it("should handle CLEAR_PLAYER", () => {
		expect(
			player(
				{ ...initState, metaLoaded: true },
				{
					type: types.CLEAR_PLAYER,
				}
			)
		).toEqual(initState);
	});
});
