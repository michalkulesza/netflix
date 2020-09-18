import React from "react";
import faqData from "../fixtures/faqs.json";
import { Faq } from "../components";
import { NewsletterContainer } from "../containers/";

import crossIcon from "../res/icons/cross.svg";

export default function FaqContainer() {
	return (
		<>
			<Faq>
				<Faq.Container>
					<Faq.Title>Frequently Asked Questions</Faq.Title>
					<Faq.List>
						{faqData.map(item => (
							<Faq.Item key={item.id} id={item.id}>
								<Faq.Header>
									{item.header}
									<Faq.Icon>
										<img src={crossIcon} alt="" />
									</Faq.Icon>
								</Faq.Header>
								<Faq.Body>
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
}
