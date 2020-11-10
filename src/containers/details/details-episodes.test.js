import React from "react";
import { mount } from "enzyme";
import DetailsEpisodesContainer from "./details-episodes";
import { DetailsEpisode, DetailsEpisodes } from "../../components/";
import configureStore from "redux-mock-store";
import * as ReactRedux from "react-redux";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

let useEffect;
let store = configureStore()({
	fetchEpisodes: {
		data: [],
		isUpdating: false,
	},
});

const mockUseEffect = () => {
	useEffect.mockImplementationOnce(f => f());
};

beforeEach(() => {
	useEffect = jest.spyOn(React, "useEffect");
	mockUseEffect();
	mockUseEffect();
});

describe("<DetailsEpisodesContainer/> with no props", () => {
	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<DetailsEpisodesContainer />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});

describe("<DetailsEpisodesContainer/> with props and updating", () => {
	store = configureStore()({
		fetchEpisodes: {
			data: [],
			isUpdating: true,
		},
	});

	const mockItem = {};

	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<DetailsEpisodesContainer item={mockItem} />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should contain <DetailsEpisode.WrapperLoading />", () => {
		expect(wrapper.contains(DetailsEpisode.WrapperLoading)).toBeTruthy();
	});
});

describe("<DetailsEpisodesContainer/> with props", () => {
	store = configureStore()({
		fetchEpisodes: {
			data: [
				{
					id: 1,
					episode_number: 9,
					still_path_300: "/",
					name: "Test",
					overview: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, illo.",
				},
				{
					id: 2,
					episode_number: 9,
					still_path_300: "/",
					name: "Test2",
					overview: "Vel, illo.",
				},
			],
			isUpdating: false,
		},
	});

	const mockItem = {
		details: {
			number_of_seasons: 11,
		},
	};

	const wrapper = mount(
		<ReactRedux.Provider store={store}>
			<DetailsEpisodesContainer item={mockItem} />
		</ReactRedux.Provider>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should not contain <DetailsEpisode.WrapperLoading />", () => {
		expect(wrapper.contains(<DetailsEpisode.WrapperLoading />)).toBeFalsy();
	});

	it("should render list of seasons", () => {
		expect(wrapper.find(DetailsEpisodes.Season).length).toBe(mockItem.details.number_of_seasons);
	});

	it("should render list of episodes", () => {
		expect(wrapper.find(DetailsEpisode.Wrapper).length).toBe(store.getState().fetchEpisodes.data.length);
	});

	it("should display correct icon depending on clicked button", () => {
		expect(wrapper.contains(<BiCaretDown />)).toBeTruthy();
		wrapper.find(DetailsEpisodes.SeasonsButton).simulate("mouseDown");
		expect(wrapper.contains(<BiCaretUp />)).toBeTruthy();
	});
});
