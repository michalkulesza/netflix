import React from "react";
import faqData from "../fixtures/faqs.json";
import { Faq } from "../components";
import { Newsletter } from "../components";
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
				<Newsletter>
					<Newsletter.Title>Ready to watch? Enter your email to create or restart your membership.</Newsletter.Title>
					<Newsletter.FormWrapper>
						<Newsletter.InputWrapper>
							<Newsletter.Input />
							<Newsletter.Label>Email address</Newsletter.Label>
							<Newsletter.Button>GET STARTED</Newsletter.Button>
						</Newsletter.InputWrapper>
						<Newsletter.Error>Error will go here.</Newsletter.Error>
					</Newsletter.FormWrapper>
				</Newsletter>
			</Faq>
		</>
	);
}
