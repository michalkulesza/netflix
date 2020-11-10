import React from "react";
import { mount } from "enzyme";
import DetailsRelatedContainer from "./details-related";
import { DetailsRelated } from "../../components";

const mockItem = {
	related: [
		{
			id: 1,
			backdrop_path_500: "/",
			name: "test",
			first_air_date: "2020-10-20",
			overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim!",
		},
		{
			id: 2,
			backdrop_path_500: "/",
			name: "test",
			first_air_date: "2020-10-20",
			overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim!",
		},
	],
};

describe("<DetailsRelatedContainer/> with no props", () => {
	const wrapper = mount(<DetailsRelatedContainer />);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should return null", () => {
		expect(wrapper.isEmptyRender()).toEqual(true);
	});
});

describe("<DetailsRelatedContainer/> with props", () => {
	const wrapper = mount(<DetailsRelatedContainer item={mockItem} />);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should render realted items", () => {
		expect(wrapper.find(DetailsRelated.Item)).toHaveLength(2);
	});
});
