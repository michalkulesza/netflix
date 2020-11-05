import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./fetch-initial-data";
import * as types from "../types";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BASE_PATH } from "../../constants/config";

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store;
const mockData = { data: { details: ["testDetails"] } };

beforeEach(() => {
	store = mockStore({ details: [] });
	mock.reset();
});

describe("fetchInitialDataBrowse action", () => {
	it("creates an action that fetches initial browse data", () => {
		const expectedAction = [
			{
				type: types.SET_DATA_UPDATING,
				payload: true,
			},
			{
				type: types.SET_INITIAL_DATA,
				payload: mockData,
			},
			{
				type: types.SET_DATA_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${BASE_PATH}/initial/browse`).reply(200, mockData);

		return store.dispatch(actions.fetchInitialDataBrowse()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails fetching initial browse data and sets an error", () => {
		const expectedAction = [
			{
				type: types.SET_DATA_UPDATING,
				payload: true,
			},
			{
				type: types.SET_ERROR,
				payload: "Whops! Something happend while getting data.",
			},
			{
				type: types.SET_DATA_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${BASE_PATH}/initial/browse`).reply(400);

		return store.dispatch(actions.fetchInitialDataBrowse()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("fetchInitialDataSeries action", () => {
	it("creates an action that fetches initial series data", () => {
		const expectedAction = [
			{
				type: types.SET_DATA_UPDATING,
				payload: true,
			},
			{
				type: types.SET_INITIAL_DATA,
				payload: mockData,
			},
			{
				type: types.SET_DATA_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${BASE_PATH}/initial/series`).reply(200, mockData);

		return store.dispatch(actions.fetchInitialDataSeries()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails fetching initial series data and sets an error", () => {
		const expectedAction = [
			{
				type: types.SET_DATA_UPDATING,
				payload: true,
			},
			{
				type: types.SET_ERROR,
				payload: "Whops! Something happend while getting data.",
			},
			{
				type: types.SET_DATA_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${BASE_PATH}/initial/series`).reply(400);

		return store.dispatch(actions.fetchInitialDataSeries()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("fetchInitialDataFilms action", () => {
	it("creates an action that fetches initial films data", () => {
		const expectedAction = [
			{
				type: types.SET_DATA_UPDATING,
				payload: true,
			},
			{
				type: types.SET_INITIAL_DATA,
				payload: mockData,
			},
			{
				type: types.SET_DATA_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${BASE_PATH}/initial/films`).reply(200, mockData);

		return store.dispatch(actions.fetchInitialDataFilms()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails fetching initial films data and sets an error", () => {
		const expectedAction = [
			{
				type: types.SET_DATA_UPDATING,
				payload: true,
			},
			{
				type: types.SET_ERROR,
				payload: "Whops! Something happend while getting data.",
			},
			{
				type: types.SET_DATA_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${BASE_PATH}/initial/films`).reply(400);

		return store.dispatch(actions.fetchInitialDataFilms()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("fetchInitialDataLatest action", () => {
	it("creates an action that fetches initial latest data", () => {
		const expectedAction = [
			{
				type: types.SET_DATA_UPDATING,
				payload: true,
			},
			{
				type: types.SET_INITIAL_DATA,
				payload: mockData,
			},
			{
				type: types.SET_DATA_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${BASE_PATH}/initial/latest`).reply(200, mockData);

		return store.dispatch(actions.fetchInitialDataLatest()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails fetching initial latest data and sets an error", () => {
		const expectedAction = [
			{
				type: types.SET_DATA_UPDATING,
				payload: true,
			},
			{
				type: types.SET_ERROR,
				payload: "Whops! Something happend while getting data.",
			},
			{
				type: types.SET_DATA_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${BASE_PATH}/initial/latest`).reply(400);

		return store.dispatch(actions.fetchInitialDataLatest()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("fetchInitialDataList action", () => {
	const userID = 12345;
	Object.defineProperty(window, "localStorage", {
		value: {
			getItem: jest.fn(() =>
				JSON.stringify({
					uid: userID,
				})
			),
		},
	});

	it("creates an action that fetches initial list data", () => {
		const expectedAction = [
			{
				type: types.SET_INITIAL_LIST,
				payload: mockData,
			},
		];

		mock.onGet(`${BASE_PATH}/initial/list?userID=${userID}`).reply(200, mockData);

		return store.dispatch(actions.fetchInitialDataList()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails fetching initial list data and sets an error", () => {
		const expectedAction = [
			{
				type: types.SET_ERROR,
				payload: "Whops! Something happend while getting user list data.",
			},
		];

		mock.onGet(`${BASE_PATH}/initial/list?userID=${userID}`).reply(400);

		return store.dispatch(actions.fetchInitialDataList()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});
