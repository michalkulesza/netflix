import React from "react";
import { Newsletter } from "../components/";

const NewsletterContainer = () => {
	return (
		<Newsletter>
			<Newsletter.Title>Ready to watch? Enter your email to create or restart your membership.</Newsletter.Title>
			<Newsletter.FormWrapper>
				<Newsletter.InputContainer>
					<Newsletter.InputWrapper>
						<Newsletter.Input />
						<Newsletter.Label>Email address</Newsletter.Label>
					</Newsletter.InputWrapper>
					<Newsletter.Error />
					<Newsletter.Button>GET STARTED</Newsletter.Button>
				</Newsletter.InputContainer>
			</Newsletter.FormWrapper>
		</Newsletter>
	);
};

export default NewsletterContainer;
