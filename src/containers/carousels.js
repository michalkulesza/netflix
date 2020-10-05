import React from "react";
import { Carousels } from "../components";
import CarouselContainer from "../containers/carousel";

const CarouselsContainer = ({ data }) => {
	return (
		<Carousels>
			{data &&
				data.map((category, i) => {
					const categoryName = Object.keys(category)[0];
					const title = categoryName
						.split("_")
						.map(word => word.charAt(0).toUpperCase() + word.slice(1))
						.join(" ");
					return <CarouselContainer title={title} i={i} data={category[categoryName]} key={i} />;
				})}
		</Carousels>
	);
};

export default CarouselsContainer;
