import React from "react";
import { Newsletter } from "../components/";

export default function NewsletterContainer() {
	return (
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
	);
}
