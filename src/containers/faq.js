import React, { useState } from "react";
import faqData from "../fixtures/faqs.json";
import { Faq } from "../components";
import { NewsletterContainer } from "../containers/";

import crossIcon from "../res/icons/cross.svg";

const FaqContainer = () => {
	const [currentlyOpened, setCurrentlyOpened] = useState(null);

	return (
		<>
			<Faq>
				<Faq.Container>
					<Faq.Title>Frequently Asked Questions</Faq.Title>
					<Faq.List>
						{faqData.map(item => (
							<Faq.Item key={item.id}>
								<Faq.Header
									onClick={() => {
										currentlyOpened === item.id ? setCurrentlyOpened(null) : setCurrentlyOpened(item.id);
									}}
								>
									{item.header}
									<Faq.Icon active={currentlyOpened === item.id}>
										<img src={crossIcon} alt="Toggle Item" />
									</Faq.Icon>
								</Faq.Header>
								<Faq.Body active={currentlyOpened === item.id}>
									<Faq.Text>{item.body}</Faq.Text>
								</Faq.Body>
							</Faq.Item>
						))}
					</Faq.List>
				</Faq.Container>
				<NewsletterContainer></NewsletterContainer>
			</Faq>
		</>
	);
};

export default FaqContainer;
