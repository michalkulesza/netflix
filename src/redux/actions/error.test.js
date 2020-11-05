import * as actions from "./error";
import * as types from "../types";

describe("Error action", () => {
	it("creates an action to add an error", () => {
		const text = "New error";
		const expectedAction = {
			type: types.SET_ERROR,
			payload: text,
		};

		expect(actions.setError(text)).toEqual(expectedAction);
	});

	it("creates an action clear error", () => {
		const expectedAction = {
			type: types.CLEAR_ERROR,
		};

		expect(actions.clearError()).toEqual(expectedAction);
	});
});
