import toggles from "./toggles";
import * as types from "../types";

const initState = {
	globalMute: true,
	isDetails: false,
	authChange: false,
};

describe("toggles reducer", () => {
	it("should return initial state", () => {
		expect(toggles(undefined, {})).toEqual(initState);
	});

	it("should handle SET_GLOBAL_MUTE", () => {
		expect(
			toggles(initState, {
				type: types.SET_GLOBAL_MUTE,
				payload: false,
			})
		).toEqual({ ...initState, globalMute: false });
	});

	it("should handle SET_IS_DETAILS", () => {
		expect(
			toggles(initState, {
				type: types.SET_IS_DETAILS,
				payload: true,
			})
		).toEqual({ ...initState, isDetails: true });
	});

	it("should handle AUTH_CHANGE", () => {
		expect(
			toggles(initState, {
				type: types.AUTH_CHANGE,
				payload: true,
			})
		).toEqual({ ...initState, authChange: true });
	});

	it("should handle CLEAR_TOGGLES", () => {
		expect(
			toggles(
				{ initState, authChange: true },
				{
					type: types.CLEAR_TOGGLES,
				}
			)
		).toEqual(initState);
	});
});
