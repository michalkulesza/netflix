import React, { useState } from "react";
import { Faq } from "../components";
import { NewsletterContainer } from "../containers/";

import faqData from "../fixtures/faqs.json";
import crossIcon from "../res/icons/cross.svg";

const FaqContainer = () => {
	const [currentlyOpened, setCurrentlyOpened] = useState(null);

	return faqData ? (
		<Faq>
			<Faq.Container>
				<Faq.Title>Frequently Asked Questions</Faq.Title>
				<Faq.List>
					{faqData.map(item => (
						<Faq.Item key={item.id && item.id}>
							<Faq.Header
								onClick={() => {
									item.id && currentlyOpened === item.id ? setCurrentlyOpened(null) : setCurrentlyOpened(item.id);
								}}
							>
								<p>{item.header && item.header}</p>
								<Faq.Icon active={currentlyOpened === item.id}>
									<img src={crossIcon} alt="Toggle Item" />
								</Faq.Icon>
							</Faq.Header>
							<Faq.Body active={item.id && currentlyOpened === item.id}>
								<Faq.Text>{item.body && item.body}</Faq.Text>
							</Faq.Body>
						</Faq.Item>
					))}
				</Faq.List>
			</Faq.Container>
			<NewsletterContainer></NewsletterContainer>
		</Faq>
	) : null;
};

export default FaqContainer;
