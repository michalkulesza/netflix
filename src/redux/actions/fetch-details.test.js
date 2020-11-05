import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./fetch-details";
import * as types from "../types";
import mockAxios from "axios";

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
			payload,
		},
	];

	beforeEach(() => {
		store = mockStore({ details: [] });
	});

	it("creates an action to fetch movie details", () => {
		const callback = jest.fn();
		mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockData));

		return store.dispatch(actions.fetchDetailsMovie(id, callback)).then(() => {
			expect(store.getActions()).toEqual(expectedSuccesfullAction);
		});
	});

	it("creates an action that calls a callback", () => {
		const callback = jest.fn();
		mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockData));

		return store.dispatch(actions.fetchDetailsMovie(id, callback)).then(() => {
			expect(callback).toHaveBeenCalledTimes(1);
		});
	});

	it("creates an action that sets an error on reject", () => {
		mockAxios.get.mockImplementationOnce(() => Promise.reject());
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
