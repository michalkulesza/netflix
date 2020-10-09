import React from "react";
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from "../components";

const JumbotronContainer = () => {
	return jumboData
		? jumboData.map(item => (
				<Jumbotron key={item.id}>
					<Jumbotron.Container direction={item.direction}>
						<Jumbotron.Half direction={item.direction}>
							<Jumbotron.Title>{item.title}</Jumbotron.Title>
							<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
						</Jumbotron.Half>
						<Jumbotron.Half direction={item.direction}>
							<Jumbotron.Image src={item.image} alt={item.alt} />
						</Jumbotron.Half>
					</Jumbotron.Container>
				</Jumbotron>
		  ))
		: null;
};

export default JumbotronContainer;
