import React from "react";
import { mount } from "enzyme";
import DetailsHeaderContainer from "./details-header";
import { DetailsHeader, Button } from "../../components";
import * as types from "../../redux/types";
import configureStore from "redux-mock-store";
import * as ReactRedux from "react-redux";
import thunk from "redux-thunk";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();

let useEffect;
let useDispatch;
const store = configureStore([thunk])({
	toggles: {
		globalMute: false,
	},
	misc: {
		headerVideo: {
			src: "/video",
			logo: "/logo",
		},
	},
	user: {
		liked: [],
		disliked: [],
		list: [],
	},
});

const mockItem = {
	media_type: "tv",
	id: 1234567890,
	name: "TestTitle",
	backdrop_path_1280: "/backdrop",
};

const mockScrolled = 0;

Object.defineProperty(window, "localStorage", {
	value: {
		getItem: jest.fn(() =>
			JSON.stringify({
				uid: 1234,
			})
		),
	},
});

const mockUseEffect = () => {
	useEffect.mockImplementationOnce(f => f());
};

beforeEach(() => {
	useEffect = jest.spyOn(React, "useEffect");
	useDispatch = jest.spyOn(ReactRedux, "useDispatch");
	mockUseEffect();
	mockUseEffect();
	store.clearActions();
});

describe("<DetailsHeaderContainer/> with no props", () => {
	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<DetailsHeaderContainer />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should render loading component", () => {
		expect(wrapper.find(DetailsHeader.Loading)).toBeTruthy();
	});
});

describe("<DetailsHeaderContainer/> with props", () => {
	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<DetailsHeaderContainer item={mockItem} scrolled={mockScrolled} />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should not render loading component", () => {
		expect(wrapper.contains(<DetailsHeader.Loading />)).toBeFalsy();
	});

	it("should dispatch data to player on a 'Play' click", () => {
		const expectedAction = [
			{
				payload: {
					backdrop: "/backdrop",
					ep_number: 1,
					ep_season: 6,
					ep_title: "Title of the episode",
					src: "",
					title: "TestTitle",
				},
				type: types.SET_PLAYER_TV,
			},
		];

		wrapper.find('[data-testid="playButton"]').hostNodes().simulate("mouseDown");
		expect(store.getActions()).toEqual(expectedAction);
	});

	it("should dispatch an action on Close button click", () => {
		const expectedAction = [{ payload: false, type: types.SET_IS_DETAILS }];

		wrapper.find('[data-testid="closeButton"]').hostNodes().simulate("mouseDown");
		expect(store.getActions()).toEqual(expectedAction);
	});

	it("should dispatch an action on Mute button click", () => {
		const expectedAction = [{ payload: true, type: types.SET_GLOBAL_MUTE }];

		wrapper.find('[data-testid="muteButton"]').hostNodes().simulate("mouseDown");
		expect(store.getActions()).toEqual(expectedAction);
	});

	it("should play the video if video exists", () => {
		const pauseStub = jest.spyOn(window.HTMLMediaElement.prototype, "play").mockImplementation(() => {});

		expect(pauseStub).not.toBeCalled();
		act(() => jest.runAllTimers());
		expect(pauseStub).toBeCalled();
	});
});
