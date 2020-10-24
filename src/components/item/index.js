import React from "react";
import { forwardRef } from "react";
import { Main, Container, Wrapper, Loader } from "./styles/item";

const Item = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Item.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Item.Wrapper = forwardRef((props, ref) => {
	return (
		<Wrapper
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			grid={props.grid}
			scrollbarWidth={props.scrollbarWidth}
			ref={ref}
		>
			{props.children}
		</Wrapper>
	);
});

Item.Loader = ({ children, ...restProps }) => {
	return <Loader {...restProps}>{children}</Loader>;
};

export default Item;
