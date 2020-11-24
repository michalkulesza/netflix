import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./genres";
import * as types from "../types";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../../constants/config";

let store;
const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockData = { data: { details: ["testDetails"] } };

beforeEach(() => {
	store = mockStore({ details: [] });
	mock.reset();
});

describe("setSeriesGenres action", () => {
	it("creates an action that fetches series genres", () => {
		const expectedAction = [
			{
				type: types.SET_GENRES,
				payload: { genres: mockData, genresType: "Series" },
			},
		];

		mock.onGet(`${config.BASE_PATH}/genres/series`).reply(200, mockData);

		return store.dispatch(actions.setSeriesGenres()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails fetching series genres and sets an error", () => {
		const expectedAction = [
			{
				type: types.SET_ERROR,
				payload: "Whops! Something happend while getting genres.",
			},
		];

		mock.onGet(`${config.BASE_PATH}/genres/series`).reply(400);

		return store.dispatch(actions.setSeriesGenres()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("setFilmsGenres action", () => {
	it("creates an action that fetches series genres", () => {
		const expectedAction = [
			{
				type: types.SET_GENRES,
				payload: { genres: mockData, genresType: "Films" },
			},
		];

		mock.onGet(`${config.BASE_PATH}/genres/films`).reply(200, mockData);

		return store.dispatch(actions.setFilmsGenres()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails fetching series genres and sets an error", () => {
		const expectedAction = [
			{
				type: types.SET_ERROR,
				payload: "Whops! Something happend while getting genres.",
			},
		];

		mock.onGet(`${config.BASE_PATH}/genres/films`).reply(400);

		return store.dispatch(actions.setFilmsGenres()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("clearGenres", () => {
	it("creates an action that clears genres", () => {
		const expectedAction = {
			type: types.CLEAR_GENRES,
			payload: mockData,
		};

		expect(actions.clearGenres(mockData)).toEqual(expectedAction);
	});
});

describe("setSelectedGenre", () => {
	it("creates an action that sets passed genre", () => {
		const expectedAction = {
			type: types.SET_SELECTED_GENRE,
			payload: mockData,
		};

		expect(actions.setSelectedGenre(mockData)).toEqual(expectedAction);
	});
});

describe("clearSelectedGenre", () => {
	it("creates an action that clears selected genre", () => {
		const expectedAction = {
			type: types.CLEAR_SELECTED_GENRE,
		};

		expect(actions.clearSelectedGenre()).toEqual(expectedAction);
	});
});
