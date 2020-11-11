import React from "react";
import { mount } from "enzyme";
import DetailsContainer from "./details";
import * as types from "../../redux/types";
import configureStore from "redux-mock-store";
import * as ReactRedux from "react-redux";
import { Details } from "../../components";

let useEffect;
let useDispatch;
let store = configureStore()({});

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

describe("<DetailsContainer/> with no state", () => {
	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<DetailsContainer />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should return null", () => {
		expect(wrapper.isEmptyRender()).toEqual(true);
	});
});

describe("<DetailsContainer/> with state", () => {
	store = configureStore()({
		toggles: {
			globalMute: false,
		},
		user: {
			liked: [],
			disliked: [],
			list: [],
		},
		fetchEpisodes: {
			data: [],
			isUpdating: false,
		},
		toggles: {
			isDetails: true,
		},
		misc: {
			detailsPosition: {},
			headerVideo: {
				src: "/video",
				logo: "/logo",
			},
		},
		fetchDetails: {
			details: {
				name: "testName",
				first_air_date: "2020-10-20",
				number_of_seasons: 8,
				overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, perspiciatis?",
				genres: [{ name: "testGenre" }, { name: "testGenre" }],
				created_by: [{ name: "testCreator" }],
			},
			cast: [{ name: "Test" }, { name: "Test" }, { name: "Test" }],
			ageRestriction: 18,
		},
	});

	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<DetailsContainer />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should not return null", () => {
		expect(wrapper.isEmptyRender()).toEqual(false);
	});

	it("should render details", () => {
		expect(wrapper.find(Details.AboutHeader)).toHaveLength(1);
		expect(wrapper.find(Details.AboutPiece)).toHaveLength(4);
	});

	it("should fire handleClose on overlay click", () => {
		const expectedAction = [{ payload: false, type: types.SET_IS_DETAILS }];

		wrapper.find('[data-testid="overlay"]').hostNodes().simulate("mouseDown");
		expect(store.getActions()).toEqual(expectedAction);
	});
});
