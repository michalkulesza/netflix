import React, { useState, useContext, createContext } from "react";
import { Main, Container, Title, List, Item, Header, Icon, Body } from "./styles/faq";

const CurrentlyOpenedContext = createContext();
const CurrentIdContext = createContext();

const Faq = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Faq.Container = function FaqContainer({ children, ...restProps }) {
	const [currentlyOpened, setCurrentlyOpened] = useState(null);

	return (
		<CurrentlyOpenedContext.Provider value={{ currentlyOpened, setCurrentlyOpened }}>
			<Container {...restProps}>{children}</Container>
		</CurrentlyOpenedContext.Provider>
	);
};

Faq.Title = function FaqTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Faq.List = function FaqList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Faq.Item = function FaqItem({ id, children, ...restProps }) {
	return (
		<CurrentIdContext.Provider value={{ id }}>
			<Item {...restProps}>{children}</Item>
		</CurrentIdContext.Provider>
	);
};

Faq.Header = function FaqHeader({ children, ...restProps }) {
	const { currentlyOpened, setCurrentlyOpened } = useContext(CurrentlyOpenedContext);
	const { id } = useContext(CurrentIdContext);

	return (
		<Header
			onClick={() => {
				currentlyOpened === id ? setCurrentlyOpened(null) : setCurrentlyOpened(id);
			}}
			{...restProps}
		>
			{children}
		</Header>
	);
};

Faq.Icon = function FaqIcon({ children, ...restProps }) {
	const { currentlyOpened } = useContext(CurrentlyOpenedContext);
	const { id } = useContext(CurrentIdContext);

	return (
		<Icon active={currentlyOpened === id} {...restProps}>
			{children}
		</Icon>
	);
};

Faq.Body = function FaqBody({ children, ...restProps }) {
	const { currentlyOpened } = useContext(CurrentlyOpenedContext);
	const { id } = useContext(CurrentIdContext);

	return (
		<Body active={currentlyOpened === id} {...restProps}>
			{children}
		</Body>
	);
};

export default Faq;
