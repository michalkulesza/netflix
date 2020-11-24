import React from "react";
import { mount } from "enzyme";
import VolumeSliderContainer from "./seek-bar";
import { SeekBar } from "../../components";
import configureStore from "redux-mock-store";
import * as ReactRedux from "react-redux";

describe("<VolumeSliderContainer/> with no props", () => {
	let store = configureStore()({});

	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<VolumeSliderContainer />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});

describe("<VolumeSliderContainer/> with props", () => {
	let store = configureStore()({
		player: {
			state: "paused",
			volume: 1.0,
		},
	});

	const playerRef = {
		current: {
			currentTime: 10,
			duration: 100,
		},
	};

	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<VolumeSliderContainer playerRef={playerRef} visible={true} />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});
