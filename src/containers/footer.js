import React from "react";
import Footer from "../components/footer";

import footerData from "../fixtures/footer-links.json";

const FooterContainer = () => {
	return footerData ? (
		<Footer>
			<Footer.Container>
				<Footer.Heading>{footerData.data?.headerText}</Footer.Heading>
				<Footer.Grid>
					{footerData.columns?.map(column => (
						<Footer.Ul key={column.columnId && column.columnId}>
							{column.links?.map(link => (
								<Footer.Li key={link.id}>{link.text}</Footer.Li>
							))}
						</Footer.Ul>
					))}
				</Footer.Grid>
				<Footer.Text>{footerData.data?.footerText}</Footer.Text>
			</Footer.Container>
		</Footer>
	) : null;
};

export default FooterContainer;
