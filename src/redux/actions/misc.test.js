import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./misc";
import * as types from "../types";

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockData = { isTest: true };

beforeEach(() => {
	store = mockStore({ details: [] });
});

describe("misc action", () => {
	describe("setHeaderVideo", () => {
		it("creates an action that sets header video", () => {
			const expectedAction = {
				type: types.SET_HEADER_VIDEO,
				payload: mockData,
			};

			expect(actions.setHeaderVideo(mockData)).toEqual(expectedAction);
		});
	});

	describe("setDetailsPosition", () => {
		it("creates an action that sets position of details component", () => {
			const expectedAction = {
				type: types.SET_DETAILS_POSITION,
				payload: { x: 1, y: 2, width: "100", height: "200" },
			};

			expect(actions.setDetailsPosition(1, 2, "100", "200")).toEqual(expectedAction);
		});
	});

	describe("setScrollbarWidth", () => {
		it("creates an action that sets width of scrollbar", () => {
			const expectedAction = {
				type: types.SET_SCROLLBAR_WIDTH,
				payload: mockData,
			};

			expect(actions.setScrollbarWidth(mockData)).toEqual(expectedAction);
		});

		describe("setActiveExpanded", () => {
			it("creates an action that sets width of scrollbar", () => {
				const expectedAction = {
					type: types.SET_ACTIVE_EXPANDED,
					payload: { parent: mockData, item: mockData },
				};

				expect(actions.setActiveExpanded(mockData, mockData)).toEqual(expectedAction);
			});
		});

		describe("clearActiveExpanded", () => {
			it("creates an action that clears expanded state", () => {
				const expectedAction = {
					type: types.CLEAR_ACTIVE_EXPANDED,
				};

				expect(actions.clearActiveExpanded()).toEqual(expectedAction);
			});
		});
	});
});
