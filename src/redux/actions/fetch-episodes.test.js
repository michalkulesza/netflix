import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./fetch-episodes";
import * as types from "../types";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BASE_PATH } from "../../constants/config";

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchEpisodes action", () => {
	let store;
	const id = 101;
	const season = 1;
	const mockData = { data: { details: ["testDetails"] } };

	beforeEach(() => {
		store = mockStore({ details: [] });
		mock.reset();
	});

	it("creates an action that fetches episodes & sets updating state", () => {
		const expectedAction = [
			{
				type: types.SET_EPISODES_UPDATING,
				payload: true,
			},
			{
				type: types.FETCH_EPISODES,
				payload: mockData,
			},
			{
				type: types.SET_EPISODES_UPDATING,
				payload: false,
			},
		];

		mock.onGet(`${BASE_PATH}/episodes?id=${id}&season=${season}`).reply(200, mockData);

		return store.dispatch(actions.fetchEpisodes(id, season)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that clears episodes", () => {
		const expectedAction = {
			type: types.CLEAR_EPISODES,
		};

		expect(actions.clearEpisodes()).toEqual(expectedAction);
	});
});
