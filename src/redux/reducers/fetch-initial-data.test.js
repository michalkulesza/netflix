import initialData from "./fetch-initial-data";
import * as types from "../types";

const mockData = { test: "test" };
const initState = {
	isUpdating: false,
	data: null,
	userList: null,
};

describe("initialData reducer", () => {
	it("should return initial state", () => {
		expect(initialData(undefined, {})).toEqual(initState);
	});

	it("should handle SET_INITIAL_DATA", () => {
		expect(
			initialData(initState, {
				type: types.SET_INITIAL_DATA,
				payload: mockData,
			})
		).toEqual({ ...initState, data: mockData });
	});

	it("should handle SET_INITIAL_LIST", () => {
		expect(
			initialData(initState, {
				type: types.SET_INITIAL_LIST,
				payload: mockData,
			})
		).toEqual({ ...initState, list: mockData });
	});

	it("should handle SET_DATA_UPDATING", () => {
		expect(
			initialData(initState, {
				type: types.SET_DATA_UPDATING,
				payload: true,
			})
		).toEqual({ ...initState, isUpdating: true });
	});

	it("should handle CLEAR_INITIAL_DATA", () => {
		expect(
			initialData(initState, {
				type: types.CLEAR_INITIAL_DATA,
			})
		).toEqual(initState);
	});
});
