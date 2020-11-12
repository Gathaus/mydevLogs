import React from "react";
import { Col, Row } from "react-bootstrap";
import "./featured-categories.css";
export default function FeaturedCategories() {
	return (
		<Col>
			<Row className="mt-5 justify-content-center">
				<Col md={6}>
					<Col className="Featured__Collections-card">
						<div className="Featured__Collections-image justify-content-end">
							<div class="Featured__Collections-content">
								<span class="Featured__Collections-text">
									<h3>Lighting on Express</h3>
									<p>Dispatched within a week, from $95</p>
								</span>
								<span class="Featured__Collections-button">SHOP NOW</span>
							</div>
							<a href="#"></a>
							<img src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/Camp-1.jpg" />
						</div>
					</Col>
				</Col>
				<Col md={6}>
					<Col className="Featured__Collections-card">
						<div className="Featured__Collections-image justify-content-start">
							<div class="Featured__Collections-content">
								<span class="Featured__Collections-text">
									<h3>Lighting on Express</h3>
									<p>Dispatched within a week, from $95</p>
								</span>
								<span class="Featured__Collections-button">SEE MORE</span>
							</div>
							<a href="#"></a>
							<img src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/2017/06/Camp-2.jpg" />
						</div>
					</Col>
				</Col>
			</Row>
		</Col>
	);
}
