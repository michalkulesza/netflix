import React from "react";
import { mount } from "enzyme";
import DetailsInfoContainer from "./details-info";
import { DetailsInfo } from "../../components";

const mockItem = {
	details: {
		first_air_date: "2020-10-20",
		number_of_seasons: 8,
		overview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, perspiciatis?",
		genres: [{ name: "testGenre" }, { name: "testGenre" }],
	},
	cast: [{ name: "Test" }, { name: "Test" }, { name: "Test" }],
	ageRestriction: 18,
};

describe("<DetailsInfoContainer/> with no props", () => {
	const wrapper = mount(<DetailsInfoContainer />);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should render loading component", () => {
		expect(wrapper.find(DetailsInfo.Loading)).toHaveLength(1);
	});
});

describe("<DetailsInfoContainer/> with props", () => {
	const wrapper = mount(<DetailsInfoContainer item={mockItem} />);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should not render loading component", () => {
		expect(wrapper.find(DetailsInfo.Loading)).toHaveLength(0);
	});
});
