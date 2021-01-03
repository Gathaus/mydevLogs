import React, { Component } from "react";
import {AiFillFacebook,AiFillGithub,AiFillLinkedin} from "react-icons/ai" 
import "./footer.css";

export default class Footer extends Component {
	render() {
		return (
			<>
				<footer class="Footer-Container">
					<div class="footer-right">
						<a href="#">
							<i class="fa fa-facebook"><AiFillFacebook/></i>
						</a>
						<a href="#">
							<i class="fa fa-twitter"><AiFillGithub/></i>
						</a>
						<a href="#">
							<i class="fa fa-linkedin"><AiFillLinkedin/></i>
						</a>
					</div>

					<div class="footer-left">
						<p class="footer-links">
							<a class="link-1" href="#">
								Home
							</a>

							<a href="#">Blog</a>

							<a href="#">Pricing</a>

							<a href="#">About</a>

							<a href="#">Faq</a>

							<a href="#">Contact</a>
						</p>

						<p>Rıza Mert Yağcı &copy; 2020</p>
					</div>
				</footer>
			</>
		);
	}
}
