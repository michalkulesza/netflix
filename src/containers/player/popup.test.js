import React from "react";
import { shallow } from "enzyme";
import PopupContainer from "./popup";
import { Popup } from "../../components";

describe("<PopupContainer/> with no props", () => {
	const wrapper = shallow(<PopupContainer></PopupContainer>);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should not render children", () => {
		expect(wrapper.find(Popup.Dialog).children()).toHaveLength(0);
	});
});

describe("<PopupContainer/> with no props", () => {
	const wrapper = shallow(
		<PopupContainer>
			<span>testElem</span>
			<span>testElem</span>
			<span>testElem</span>
		</PopupContainer>
	);

	it("should match the snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("should not render children", () => {
		expect(wrapper.find(Popup.Dialog).children()).toHaveLength(3);
	});
});
