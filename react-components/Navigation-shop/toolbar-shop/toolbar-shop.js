import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import DrawerToggleButton from "../sidedrawer/drawertogglebutton";
import "./toolbar-shop.css";
import { GrCart, GrSearch } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import NavigationSubMenu from "../navigation-submenu/navigation-submenu";
import Dropdown from "../dropdown/dropdown";
//TODO add buttons right side of navbar
//TODO add currency and language dropdown left-side of navbar
//TODO add dropdown categories of navbar
const ToolbarShop = (props) => {
	const [searchValue, setSearchValue] = useState("");

	const onChange = (event) => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<>
			<div className="Toolbar__Shop__Header">
				<Navbar className="toolbar Navbar__Container" variant="dark">
					<div className="toolbar__Shop__toggle-button">
						<DrawerToggleButton click={props.drawerClickHandler} />
					</div>

					<Nav className="toolbar__Shop__navigation-items">
						<div className="Toolbar__Shop__Links-container">
							<div className="Toolbar__Shop__Menu-container">
								<Nav.Link className="Toolbar_Menu" href="#home">
									Home
								</Nav.Link>
								<NavigationSubMenu className="Toolbar__Shop__Submenu" />
							</div>
							<div className="Toolbar__Shop__Menu-container">
								<Nav.Link href="#home">SHOP</Nav.Link>
								<NavigationSubMenu className="Toolbar__Shop__Submenu" />
							</div>
							<div className="Toolbar__Shop__Menu-container">
								<Nav.Link href="#home">FEATURES</Nav.Link>
								<NavigationSubMenu className="Toolbar__Shop__Submenu" />
							</div>
							<div className="Toolbar__Shop__Menu-container">
								<Nav.Link href="#home">PAGES</Nav.Link>
								<NavigationSubMenu className="Toolbar__Shop__Submenu" />
							</div>
							<div className="Toolbar__Shop__Menu-container">
								<Nav.Link href="#home">BLOG</Nav.Link>
								<NavigationSubMenu className="Toolbar__Shop__Submenu" />
							</div>
						</div>
					</Nav>
					<div className="toolbar__Shop__logo" href="#home">
						<img
							src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg"
							alt="Sober"
							class="logo-dark"
						/>
					</div>
					<Nav className="Toolbar__Shop__Icon-container mb-4">
						<div className="Toolbar_Search-container">
							<input
								onChange={onChange}
								className="Toolbar__Shop__Search-text"
								placeholder="Search"
								type="text"
							></input>
						</div>
						<AiOutlineUser className="Toolbar__Shop__User-icon" />
						<AiOutlineUser className="Toolbar__Shop__User-icon" />
						<GrCart />
						<div className="Toolbar__Shop__Black-ball">0</div>
					</Nav>
				</Navbar>
			</div>
		</>
	);
};

export default ToolbarShop;
