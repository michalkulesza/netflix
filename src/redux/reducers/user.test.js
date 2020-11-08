import user from "./user";
import * as types from "../types";

const mockData = "12345";
const mockDataObject = { id: 123 };
const initState = null;
const initStateSecondRun = {
	liked: [],
	disliked: [],
	list: [],
};

describe("user reducer", () => {
	it("should return initial state", () => {
		expect(user(undefined, {})).toEqual(initState);
	});

	it("should handle SET_USER", () => {
		expect(
			user(initState, {
				type: types.SET_USER,
				payload: initStateSecondRun,
			})
		).toEqual(initStateSecondRun);
	});

	it("should handle TOGGLE_LIKE_VIDEO => TOGGLE ADD", () => {
		expect(
			user(initStateSecondRun, {
				type: types.TOGGLE_LIKE_VIDEO,
				payload: mockData,
			})
		).toEqual({ ...initStateSecondRun, liked: [mockData] });
	});

	it("should handle TOGGLE_LIKE_VIDEO => TOGGLE REMOVE", () => {
		expect(
			user(
				{ ...initStateSecondRun, liked: [mockData] },
				{
					type: types.TOGGLE_LIKE_VIDEO,
					payload: mockData,
				}
			)
		).toEqual(initStateSecondRun);
	});

	it("should handle TOGGLE_DISLIKE_VIDEO => TOGGLE ADD", () => {
		expect(
			user(initStateSecondRun, {
				type: types.TOGGLE_DISLIKE_VIDEO,
				payload: mockData,
			})
		).toEqual({ ...initStateSecondRun, disliked: [mockData] });
	});

	it("should handle TOGGLE_DISLIKE_VIDEO => TOGGLE REMOVE", () => {
		expect(
			user(
				{ ...initStateSecondRun, disliked: [mockData] },
				{
					type: types.TOGGLE_DISLIKE_VIDEO,
					payload: mockData,
				}
			)
		).toEqual(initStateSecondRun);
	});

	it("should handle TOGGLE_VIDEO_LIST => TOGGLE ADD", () => {
		expect(
			user(initStateSecondRun, {
				type: types.TOGGLE_VIDEO_LIST,
				payload: mockDataObject,
			})
		).toEqual({ ...initStateSecondRun, list: [mockDataObject] });
	});

	it("should handle TOGGLE_VIDEO_LIST => TOGGLE REMOVE", () => {
		expect(
			user(
				{ ...initStateSecondRun, list: [mockDataObject] },
				{
					type: types.TOGGLE_VIDEO_LIST,
					payload: mockDataObject,
				}
			)
		).toEqual(initStateSecondRun);
	});

	it("should handle CLEAR_USER", () => {
		expect(
			user(initStateSecondRun, {
				type: types.CLEAR_USER,
			})
		).toEqual(initState);
	});
});
