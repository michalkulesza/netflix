import React from "react";
import { motion } from "framer-motion";

const AnimationContainer = ({ children, ...restProps }) => {
	return (
		<motion.div
			style={null}
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 1.02 }}
			transition={{ duration: 0.3 }}
			{...restProps}
		>
			{children}
		</motion.div>
	);
};

export default AnimationContainer;
