import React from "react";
import {
	Item,
	Header,
	Placeholder,
	Video,
	Overlay,
	Main,
	Buttons,
	Half,
	Info,
	Genre,
	GenreWrapper,
} from "./styles/item-expanded";

const ItemExpanded = ({ children, ...restProps }) => {
	return <Item {...restProps}>{children}</Item>;
};

ItemExpanded.Header = ({ children, ...restProps }) => {
	return <Header {...restProps}>{children}</Header>;
};

ItemExpanded.Placeholder = ({ ...restProps }) => {
	return <Placeholder {...restProps} />;
};

ItemExpanded.Video = React.forwardRef((props, ref) => {
	return (
		<Video
			type="video/mp4"
			src={props.src}
			muted={props.muted}
			onEnded={props.onEnded}
			onCanPlayThrough={props.onCanPlayThrough}
			ref={ref}
		/>
	);
});

ItemExpanded.Overlay = ({ children, ...restProps }) => {
	return <Overlay {...restProps}>{children}</Overlay>;
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

ItemExpanded.Info = ({ children, ...restProps }) => {
	return <Info {...restProps}>{children}</Info>;
};

ItemExpanded.Genre = ({ children, ...restProps }) => {
	return <Genre {...restProps}>{children}</Genre>;
};

ItemExpanded.GenreWrapper = ({ children, ...restProps }) => {
	return <GenreWrapper {...restProps}>{children}</GenreWrapper>;
};

export default ItemExpanded;
