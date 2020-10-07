import styled from "styled-components/macro";

export const Related = styled.div`
	width: 100%;
	padding: 0 3em;
	margin-bottom: 3em;
`;

export const RelatedHeader = styled.div`
	font-size: 1.4em;
	font-weight: 600;
	margin-bottom: 1em;
`;

export const RelatedItems = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1em;
`;

export const RelatedItem = styled.div`
	width: 100%;
	background-color: #2f2f2f;
	border-radius: 5px;
	overflow: hidden;
	cursor: pointer;
`;

export const RelatedItemImage = styled.img`
	width: 100%;
`;

export const RelatedItemImageWrapper = styled.div`
	position: relative;
`;

export const RelatedItemImageOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity 0.3s ease-in-out;
	opacity: ${({ hovered }) => (hovered ? "1" : "0")};
`;

export const RelatedItemImageOverlayButton = styled.div`
	height: 50px;
	width: 50px;
	display: flex;
	background-color: rgba(30, 30, 20, 0.5);
	border: 1px solid #fff;
	justify-content: center;
	align-items: center;
	border-radius: 50%;

	svg {
		transform: scale(1.4);

		path {
			stroke: #fff;
		}
	}
`;

export const RelatedItemMain = styled.div`
	padding: 1em 1em 2em 1em;
`;

export const RelatedItemTitle = styled.div`
	margin-bottom: 0.3em;
	font-weight: 600;
`;

export const RelatedItemInfo = styled.div`
	margin-bottom: 1em;
	color: #e9e9e9;

	span {
		border: 1px solid #636363;
		padding: 0.1em 0.3em;
	}
`;

export const RelatedItemDescription = styled.div`
	font-size: 0.9em;
	line-height: 1.3em;
	color: #e9e9e9;
`;
