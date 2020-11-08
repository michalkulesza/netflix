import error from "./error";
import * as types from "../types";

describe("Error reducer", () => {
	it("should return initial state", () => {
		expect(error(undefined, {})).toEqual({
			error: null,
		});
	});

	it("should handle SET_ERROR", () => {
		expect(
			error([], {
				type: types.SET_ERROR,
				payload: "An error",
			})
		).toEqual({
			error: "An error",
		});
	});

	it("should handle CLEAR_ERROR", () => {
		const initState = {
			error: "An error",
		};
		expect(
			error(initState, {
				type: types.CLEAR_ERROR,
			})
		).toEqual({
			error: null,
		});
	});
});
