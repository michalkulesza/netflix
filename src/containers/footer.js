import React from "react";
import footerData from "../fixtures/footer-links.json";
import Footer from "../components/footer";

export default function FooterContainer() {
	return (
		<Footer>
			<Footer.Container>
				<Footer.Heading>{footerData.data.headerText}</Footer.Heading>
				<Footer.Grid>
					{footerData.columns.map(column => (
						<Footer.Ul key={column.columnId}>
							{column.links.map(link => (
								<Footer.Li key={link.id}>{link.text}</Footer.Li>
							))}
						</Footer.Ul>
					))}
				</Footer.Grid>
				<Footer.Text>{footerData.data.footerText}</Footer.Text>
			</Footer.Container>
		</Footer>
	);
}
