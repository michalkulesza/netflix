import React from "react";
import { Carousel } from "../components";

const CarouselContainer = ({ data }) => {
	return (
		<Carousel>
			{data
				? data.map((categories, i) => {
						const categoryName = Object.keys(categories)[0];
						// const title = Object.keys(categories)[0];
						return (
							<Carousel.Container key={i}>
								{categories[categoryName]
									? categories[categoryName].map(item => (
											<Carousel.ItemWrapper key={item.id}>
												<Carousel.Item src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="logo" />
											</Carousel.ItemWrapper>
									  ))
									: "Error"}
							</Carousel.Container>
						);
				  })
				: "Loading..."}
		</Carousel>
	);
};

export default CarouselContainer;
