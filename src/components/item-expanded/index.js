import React from "react";
import { Item, Header, Placeholder, Video, Main, Buttons, Half, Button, Info, Genre } from "./styles/item-expanded";

const ItemExpanded = ({ children, ...restProps }) => {
	return <Item {...restProps}>{children}</Item>;
};

ItemExpanded.Header = ({ children, ...restProps }) => {
	return <Header {...restProps}>{children}</Header>;
};

ItemExpanded.Placeholder = ({ ...restProps }) => {
	return <Placeholder {...restProps} />;
};

ItemExpanded.Video = ({ ...restProps }) => {
	return <Video type="video/mp4" {...restProps} />;
};

ItemExpanded.Main = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

ItemExpanded.Buttons = ({ children, ...restProps }) => {
	return <Buttons {...restProps}>{children}</Buttons>;
};

ItemExpanded.Half = ({ children, ...restProps }) => {
	return <Half {...restProps}>{children}</Half>;
};

ItemExpanded.Button = ({ children, ...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

ItemExpanded.Info = ({ children, ...restProps }) => {
	return <Info {...restProps}>{children}</Info>;
};

ItemExpanded.Genre = ({ children, ...restProps }) => {
	return <Genre {...restProps}>{children}</Genre>;
};

export default ItemExpanded;
