import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import DrawerToggleButton from "../sidedrawer/drawertogglebutton";
import "./toolbar.css";
//TODO add buttons right side of navbar
//TODO add currency and language dropdown left-side of navbar
//TODO add dropdown categories of navbar
const toolbar = (props) => {
	return (
		<>
			<div className="Toolbar__Header">
				<div className="toolbar__logo" href="#home">
					<img
						src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg"
						alt="Sober"
						class="logo-dark"
					/>
				</div>

				<Navbar className="toolbar" variant="dark">
					<div className="toolbar__toggle-button">
						<DrawerToggleButton click={props.drawerClickHandler} />
					</div>
					<div />

					<Nav className="toolbar__navigation-items">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#home">SHOP</Nav.Link>
						<Nav.Link href="#home">FEATURES</Nav.Link>
						<Nav.Link href="#home">PAGES</Nav.Link>
						<Nav.Link href="#home">BLOG</Nav.Link>
					</Nav>
					<span class="count cart-counter">0</span>
				</Navbar>
			</div>
		</>
	);
};

export default toolbar;
