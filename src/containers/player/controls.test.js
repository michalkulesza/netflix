import React from "react";
import { mount } from "enzyme";
import ControlsContainer from "./controls";
import * as types from "../../redux/types";
import configureStore from "redux-mock-store";
import * as ReactRedux from "react-redux";

let useDispatch;
let store = configureStore()({});

beforeEach(() => {
	useDispatch = jest.spyOn(ReactRedux, "useDispatch");
	store.clearActions();
});

describe("<ControlsContainer/> with no props & state", () => {
	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<ControlsContainer />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should return null", () => {
		expect(wrapper.isEmptyRender()).toEqual(true);
	});
});

describe("<ControlsContainer/> props & state", () => {
	store = configureStore()({
		player: {
			type: "movie",
			title: "Testtitle",
			src: "/",
			backdrop: "/",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt?",
			ep_title: null,
			ep_number: null,
			ep_season: null,
			seasons: null,
			year: 2020,
			ageRestriction: 18,
			runtime: 199,
			volume: 0.6,
			state: "paused",
			metaLoaded: false,
		},
	});
	const handleClickPlay = jest.fn();
	const playerRef = {
		current: {
			currentTime: 0,
			duration: 198,
		},
	};

	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<ControlsContainer handleClickPlay={handleClickPlay} playerRef={playerRef} />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should not return null", () => {
		expect(wrapper.isEmptyRender()).toEqual(false);
	});
});
