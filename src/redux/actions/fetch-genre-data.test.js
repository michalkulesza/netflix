import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./fetch-genre-data";
import * as types from "../types";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../../constants/config";

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchEpisodes action", () => {
	let store;
	const type = 1;
	const page = 1;
	const genreID = 123;
	const mockData = { data: { details: ["testDetails"] } };

	beforeEach(() => {
		store = mockStore({ details: [] });
		mock.reset();
	});

	it("creates an action that fetches genre & sets updating state", () => {
		const expectedAction = [
			{
				type: types.SET_GENRE_DATA_UPDATING,
				payload: true,
			},
			{
				type: types.FETCH_GENRE_DATA,
				payload: { ...mockData, id: genreID },
			},
			{
				type: types.SET_GENRE_DATA_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${config.BASE_PATH}/genre/${type}?genreID=${genreID}&page=${page}`).reply(200, mockData);

		return store.dispatch(actions.fetchGenreData(type, genreID, page)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fetches more genre pages & sets updating state", () => {
		const page = 12;
		const expectedAction = [
			{
				type: types.SET_GENRE_DATA_UPDATING,
				payload: true,
			},
			{
				type: types.FETCH_MORE_GENRE_DATA,
				payload: { ...mockData, id: genreID },
			},
			{
				type: types.SET_GENRE_DATA_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${config.BASE_PATH}/genre/${type}?genreID=${genreID}&page=${page}`).reply(200, mockData);

		return store.dispatch(actions.fetchGenreData(type, genreID, page)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails to fetch genre & sets error", () => {
		const expectedAction = [
			{
				type: types.SET_GENRE_DATA_UPDATING,
				payload: true,
			},
			{
				type: types.SET_ERROR,
				payload: "Whops! Something happend while getting genre media.",
			},
			{
				type: types.SET_GENRE_DATA_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${config.BASE_PATH}/genre/${type}?genreID=${genreID}&page=${page}`).reply(400);

		return store.dispatch(actions.fetchGenreData(type, genreID, page)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that clears genre data", () => {
		const expectedAction = {
			type: types.CLEAR_GENRE_DATA,
		};

		expect(actions.clearGenreData()).toEqual(expectedAction);
	});
});
