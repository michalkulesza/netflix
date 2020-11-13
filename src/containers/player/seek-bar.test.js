import React from "react";
import { mount } from "enzyme";
import SeekBarContainer from "./seek-bar";
import { SeekBar } from "../../components";
import configureStore from "redux-mock-store";
import * as ReactRedux from "react-redux";

describe("<SeekBarContainer/> with no props", () => {
	let store = configureStore()({});

	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<SeekBarContainer />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});

describe("<SeekBarContainer/> with props", () => {
	let store = configureStore()({
		player: {
			state: "paused",
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
			<SeekBarContainer playerRef={playerRef} isVideoPlaying={false} />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should display correct time", () => {
		expect(wrapper.find(SeekBar.Time).contains("0:01:30")).toBe(true);
	});
});
