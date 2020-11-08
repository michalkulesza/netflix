import fetchDetails from "./fetch-details";
import * as types from "../types";

const mockData = { test: "test" };

describe("fetchDetails reducer", () => {
	it("should return initial state", () => {
		expect(fetchDetails(undefined, {})).toEqual(null);
	});

	it("should handle FETCH_DETAILS", () => {
		expect(
			fetchDetails(undefined, {
				type: types.FETCH_DETAILS,
				payload: mockData,
			})
		).toEqual(mockData);
	});

	it("should handle CLEAR_DETAILS", () => {
		expect(
			fetchDetails(mockData, {
				type: types.CLEAR_DETAILS,
			})
		).toEqual(null);
	});
});
