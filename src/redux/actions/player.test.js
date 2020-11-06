import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./player";
import * as types from "../types";

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockData = {
	title: "Test",
	src: "/",
	backdrop: "/test",
	ep_title: "TestTitle",
	ep_number: 1,
	ep_season: 1,
	year: 1999,
	ageRestriction: 12,
	runtime: 120,
};

beforeEach(() => {
	store = mockStore({ details: [] });
});

describe("player action", () => {
	describe("setPlayer action", () => {
		it("creates an action that sets player state with TV data", () => {
			const expectedAction = {
				type: types.SET_PLAYER_TV,
				payload: {
					title: mockData.title,
					src: mockData.src,
					backdrop: mockData.backdrop,
					ep_title: mockData.ep_title,
					ep_number: mockData.ep_number,
					ep_season: mockData.ep_season,
				},
			};

			expect(actions.setPlayer({ type: "tv", ...mockData })).toEqual(expectedAction);
		});

		it("creates an action that sets player state with Film data", () => {
			const expectedAction = {
				type: types.SET_PLAYER_FILM,
				payload: {
					title: mockData.title,
					src: mockData.src,
					backdrop: mockData.backdrop,
					year: mockData.year,
					ageRestriction: mockData.ageRestriction,
					runtime: mockData.runtime,
				},
			};

			expect(actions.setPlayer({ type: "movie", ...mockData })).toEqual(expectedAction);
		});

		it("creates an action that fails to set data and returns an error", () => {
			const expectedAction = {
				type: types.SET_ERROR,
				payload: "Whops! Something happend while setting player up.",
			};

			expect(actions.setPlayer(mockData)).toEqual(expectedAction);
		});
	});

	describe("setPlayerVolume action", () => {
		it("creates an action that sets player volume", () => {
			const expectedAction = {
				type: types.SET_PLAYER_VOLUME,
				payload: mockData,
			};

			expect(actions.setPlayerVolume(mockData)).toEqual(expectedAction);
		});
	});

	describe("setPlayerState action", () => {
		it("creates an action that sets players current state", () => {
			const expectedAction = {
				type: types.SET_PLAYER_STATE,
				payload: mockData,
			};

			expect(actions.setPlayerState(mockData)).toEqual(expectedAction);
		});
	});

	describe("setPlayerMetaLoaded action", () => {
		it("creates an action that sets player meta data state", () => {
			const expectedAction = {
				type: types.SET_PLAYER_META_LOADED,
				payload: true,
			};

			expect(actions.setPlayerMetaLoaded(true)).toEqual(expectedAction);
		});
	});
});
