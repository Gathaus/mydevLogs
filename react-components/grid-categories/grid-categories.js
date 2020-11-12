import React from "react";
import { Col, Row } from "react-bootstrap";

import "./grid-categories.css";
export default function GridCategories() {
	return (
			<Col>
				<Row className="justify-content-md-center mt-5">
					<Col md={3}>
						<Row>
							<Col className="Categories__Overview-card">
								<div className="Categories__Overview-card-button">
									<a href="#"></a>
									Footwear
								</div>
								<div className="Categories__Overview-image">
									<img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/footwear.jpg" />
								</div>
							</Col>
						</Row>
						<Row>
							<Col className="Categories__Overview-card">
								<div className="Categories__Overview-card-button">
									<a href="#"></a>
									Accessories
								</div>
								<div className="Categories__Overview-image">
									<img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/Accessories.jpg" />
								</div>
							</Col>
						</Row>
					</Col>
					<Col md={4} className="Categories__Overview-card">
						<div className="Categories__Overview-image">
							<div className="Categories__Overview-card-buttons">
								<div className="Categories__Overview-card-button1">
									<a href="#"></a>
									Woman
								</div>
								<div className="Categories__Overview-card-button2">
									<a href="#"></a>
									Man
								</div>
							</div>

							<img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/woman-man.jpg" />
						</div>
					</Col>
					<Col md={3}>
						<Row>
							<Col className="Categories__Overview-card">
								<div className="Categories__Overview-card-button">
									<a href="#"></a>
									Hats
								</div>
								<div className="Categories__Overview-image">
									<img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/Hats.jpg" />
								</div>
							</Col>
						</Row>
						<Row>
							<Col className="Categories__Overview-card">
								<div className="Categories__Overview-card-button">
									<a href="#"></a>
									Bags
								</div>
								<div className="Categories__Overview-image">
									<img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/bags.jpg" />
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
	);
}
