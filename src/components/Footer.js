import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<MailchimpForm />
					<Col size={12} sm={6}>
						<br></br>
						<br></br>
						<h2>Vaibhav's Portfolio</h2>
						Thank you for visiting my personal portfolio website. Connect with
						me over socials.
					</Col>

					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a href="https://www.linkedin.com/in/vaibhav-gupta-9b03a7270/">
								<img src={navIcon1} alt="Icon" />
							</a>

							<a href="https://www.linkedin.com/in/vaibhav-gupta-9b03a7270/">
								<img src={navIcon3} alt="Icon" />
							</a>
						</div>
					</Col>
					<div>
						<p>Keep Rising 🚀. Connect with me over live chat!</p>
						<br></br>
						<h2>Contact Info</h2>
						<br></br>
						<p>+91 9263516049</p>
						<p>vaibhavkumargupta.2004@gmail.com</p>
						<p>Ranchi, Jharkhand-05</p>
						<br></br>
					</div>
				</Row>
			</Container>
		</footer>
	);
};
