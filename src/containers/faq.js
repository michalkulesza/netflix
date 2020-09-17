import React from "react";
import faqData from "../fixtures/faqs.json";
import { Faq } from "../components";
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
								<Faq.Body>{item.body}</Faq.Body>
							</Faq.Item>
						))}
					</Faq.List>
				</Faq.Container>
			</Faq>
		</>
	);
}
