import styled from "styled-components/macro";

export const Main = styled.div`
	height: auto;
	width: 100%;
	display: flex;
	overflow-x: scroll;
	margin-bottom: 300px;
	::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
`;

export const Container = styled.div`
	height: 100%;
	display: flex;
`;

export const ItemWrapper = styled.div`
	margin-right: 10px;
	height: auto;
	width: 200px;
`;

export const Item = styled.img`
	height: 100%;
	width: 100%;
	background-color: blue;
	box-sizing: content-box;
`;
