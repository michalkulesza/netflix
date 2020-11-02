import { useEffect } from "react";

const useKeyDownListener = (onSpace, onEscape, onArrowLeft, onArrowRight, onArrowUp, onArrowDown) => {
	useEffect(() => {
		const onKeyDown = ({ key }) => {
			switch (key) {
				case " ":
					onSpace && onSpace();
					break;
				case "Escape":
					onEscape && onEscape();
					break;
				case "ArrowLeft":
					onArrowLeft && onArrowLeft();
					break;
				case "ArrowRight":
					onArrowRight && onArrowRight();
					break;
				case "ArrowUp":
					onArrowUp && onArrowUp();
					break;
				case "ArrowDown":
					onArrowDown && onArrowDown();
					break;
				default:
					break;
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [onSpace, onEscape, onArrowLeft, onArrowRight, onArrowUp, onArrowDown]);

	return;
};

export default useKeyDownListener;
