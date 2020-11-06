import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./toggles";
import * as types from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("toggles action", () => {
	let store;
	const mockData = true;
	beforeEach(() => {
		store = mockStore({ details: [] });
	});

	describe("setIsDetails action", () => {
		it("creates an action that sets details toggle", () => {
			const expectedAction = {
				type: types.SET_IS_DETAILS,
				payload: mockData,
			};

			expect(actions.setIsDetails(mockData)).toEqual(expectedAction);
		});
	});

	describe("setGlobalMute action", () => {
		it("creates an action that sets global mute toggle", () => {
			const expectedAction = {
				type: types.SET_GLOBAL_MUTE,
				payload: mockData,
			};

			expect(actions.setGlobalMute(mockData)).toEqual(expectedAction);
		});
	});
});
