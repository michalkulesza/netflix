import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./fetch-details";
import * as types from "../types";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../../constants/config";

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("FetchDetailsMovie action", () => {
	const id = 101;
	const payload = { details: ["testDetails"] };
	const mockData = { data: payload };
	let store;

	const expectedSuccesfullAction = [
		{
			type: types.FETCH_DETAILS,
			payload: mockData,
		},
	];

	beforeEach(() => {
		store = mockStore({ details: [] });
		mock.reset();
	});

	it("creates an action to fetch movie details", () => {
		const callback = jest.fn();
		mock.onGet(`${config.BASE_PATH}/details/movie?id=${id}`).reply(200, mockData);

		return store.dispatch(actions.fetchDetailsMovie(id, callback)).then(() => {
			expect(store.getActions()).toEqual(expectedSuccesfullAction);
		});
	});

	it("creates an action that succesfully fetches & calls a callback", () => {
		const callback = jest.fn();
		mock.onGet(`${config.BASE_PATH}/details/movie?id=${id}`).reply(200, mockData);

		return store.dispatch(actions.fetchDetailsMovie(id, callback)).then(() => {
			expect(callback).toHaveBeenCalledTimes(1);
		});
	});

	it("creates an action that fails to fetch and sets an error", () => {
		mock.onGet(`${config.BASE_PATH}/details/movie?id=${id}`).reply(400);
		const expectedFailedAction = [
			{
				payload: "Whops! Something happend while getting movie details.",
				type: "SET_ERROR",
			},
		];

		return store.dispatch(actions.fetchDetailsMovie(id)).then(() => {
			expect(store.getActions()).toEqual(expectedFailedAction);
		});
	});
});

describe("FetchDetailsTv action", () => {
	const id = 101;
	const payload = { details: ["testDetails"] };
	const mockData = { data: payload };
	let store;

	const expectedSuccesfullAction = [
		{
			type: types.FETCH_DETAILS,
			payload: mockData,
		},
		{
			type: types.FETCH_EPISODES,
			payload: mockData,
		},
	];

	beforeEach(() => {
		mock.reset();
		store = mockStore({ details: [] });
	});

	it("creates an action to fetch tv details", () => {
		mock
			.onGet(`${config.BASE_PATH}/details/tv?id=${id}`)
			.reply(200, mockData)
			.onGet(`${config.BASE_PATH}/episodes?id=${id}&season=1`)
			.reply(200, mockData);

		return store.dispatch(actions.fetchDetailsTv(id)).then(() => {
			expect(store.getActions()).toEqual(expectedSuccesfullAction);
		});
	});

	it("creates an action that succesfully fetches & calls a callback", () => {
		const callback1 = jest.fn();
		const callback2 = jest.fn();

		mock
			.onGet(`${config.BASE_PATH}/details/tv?id=${id}`)
			.reply(200, mockData)
			.onGet(`${config.BASE_PATH}/episodes?id=${id}&season=1`)
			.reply(200, mockData);

		return store.dispatch(actions.fetchDetailsTv(id, callback1, callback2)).then(() => {
			expect(callback1).toHaveBeenCalledTimes(1);
			expect(callback2).toHaveBeenCalledTimes(1);
		});
	});

	it("creates an action that fails to fetch and sets an error", () => {
		const expectedFailedAction = [
			{
				payload: "Whops! Something happend while getting tv details.",
				type: "SET_ERROR",
			},
		];

		mock
			.onGet(`${config.BASE_PATH}/details/tv?id=${id}`)
			.reply(400)
			.onGet(`${config.BASE_PATH}/episodes?id=${id}&season=1`)
			.reply(400);

		return store.dispatch(actions.fetchDetailsTv(id)).then(() => {
			expect(store.getActions()).toEqual(expectedFailedAction);
		});
	});
});
