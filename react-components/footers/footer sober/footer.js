import React, { Component } from "react";
import {
	AiOutlineInstagram,
	AiFillGithub,
	AiFillLinkedin,
} from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

export default class Footer extends Component {
	render() {
		return (
			<>
				<footer className="Footer_Container">
					<Container fluid className="Footer__Sub-container text-right">
						<Row className="Footer_Row-container">
							<Col md={6} className="text-left footer-text-container">
								<span className="footer-text">
									{" "}
									<a href="#">©2016 Sober</a>
								</span>
								<span className="footer-text">
									{" "}
									<a>Blog</a>
								</span>
								<span className="footer-text">
									{" "}
									<a>FAQs</a>
								</span>
								<span className="footer-text">
									{" "}
									<a>Contact us</a>
								</span>
							</Col>
							<Col md={6} className="Footer__Links">
								<a
									href="https://github.com/Gathaus"
									target="_blank"
									className=""
								>
									<AiFillGithub />
								</a>
								<a
									href="https://www.instagram.com/rizamertyagci/"
									target="_blank"
								>
									<AiOutlineInstagram />
								</a>
								<a href="https://www.linkedin.com/in/rmy1/" target="_blank">
									<AiFillLinkedin />
								</a>
							</Col>
						</Row>
					</Container>
				</footer>
			</>
		);
	}
}
{
	/* <div className="container mt-2">
						<div className="row d-flex  Footer__Line">
							<div className="col-md-6 text-left footer-text-container">
								<span className="footer-text"> <a>©2016 Sober</a></span>
								<span className="footer-text"> <a>Blog</a></span>
								<span className="footer-text"> <a>FAQs</a></span>
								<span className="footer-text"> <a>Contact us</a></span>
							</div>
							<div className="col-md-4 footer-links text-right">
								<div className="container">
									<a
										href="https://github.com/Gathaus"
										target="_blank"
										className=""
									>
										Github
									</a>
									<a
										href="https://www.instagram.com/rizamertyagci/"
										target="_blank"
									>
										Instagram
									</a>
									<a href="https://www.linkedin.com/in/rmy1/" target="_blank">
										Linkedin
									</a>
								</div>
							</div>
						</div>
					</div> */
}
