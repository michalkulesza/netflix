import React, { useState, useEffect } from "react";
import ErrorNotification from "../components/error-notification";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../redux/actions/error";

import { BiError } from "react-icons/bi";

let dismissTimer;

const ErrorNotificationContainer = () => {
	const dispatch = useDispatch();
	const error = useSelector(state => state.error.error);
	const [shouldRender, setRender] = useState(false);
	const [errorCopy, setErrorCopy] = useState(error);

	useEffect(() => {
		if (error) {
			setRender(true);
			setErrorCopy(error);
			dismissTimer = setTimeout(() => dispatch(clearError()), 4000);
		}
	}, [error, dispatch]);

	const onAnimationEnd = () => {
		if (!error) {
			setRender(false);
		}
	};

	const handleClick = () => {
		clearTimeout(dismissTimer);
		dispatch(clearError());
	};

	return (
		shouldRender && (
			<ErrorNotification.Wrapper>
				<ErrorNotification error={error} onMouseDown={handleClick} onAnimationEnd={onAnimationEnd}>
					<BiError /> {errorCopy}
				</ErrorNotification>
			</ErrorNotification.Wrapper>
		)
	);
};

export default ErrorNotificationContainer;
