import misc from "./misc";
import * as types from "../types";

const mockData = { test: "test" };
const initState = {
	headerVideo: null,
	detailsPosition: null,
	scrollbarWidth: null,
	activeExpanded: null,
};

describe("misc reducer", () => {
	it("should return initial state", () => {
		expect(misc(undefined, {})).toEqual(initState);
	});

	it("should handle SET_HEADER_VIDEO", () => {
		expect(
			misc(initState, {
				type: types.SET_HEADER_VIDEO,
				payload: mockData,
			})
		).toEqual({ ...initState, headerVideo: mockData });
	});

	it("should handle SET_DETAILS_POSITION", () => {
		expect(
			misc(initState, {
				type: types.SET_DETAILS_POSITION,
				payload: mockData,
			})
		).toEqual({ ...initState, detailsPosition: mockData });
	});

	it("should handle SET_SCROLLBAR_WIDTH", () => {
		expect(
			misc(initState, {
				type: types.SET_SCROLLBAR_WIDTH,
				payload: mockData,
			})
		).toEqual({ ...initState, scrollbarWidth: mockData });
	});

	it("should handle SET_ACTIVE_EXPANDED", () => {
		expect(
			misc(initState, {
				type: types.SET_ACTIVE_EXPANDED,
				payload: true,
			})
		).toEqual({ ...initState, activeExpanded: true });
	});

	it("should handle CLEAR_ACTIVE_EXPANDED", () => {
		expect(
			misc(
				{ ...initState, activeExpanded: true },
				{
					type: types.CLEAR_ACTIVE_EXPANDED,
				}
			)
		).toEqual(initState);
	});

	it("should handle CLEAR_MISC", () => {
		expect(
			misc(
				{ ...initState, activeExpanded: true },
				{
					type: types.CLEAR_MISC,
				}
			)
		).toEqual(initState);
	});
});
