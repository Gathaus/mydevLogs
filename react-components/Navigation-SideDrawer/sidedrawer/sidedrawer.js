import React, { useState } from "react";
import "./sidedrawer.css";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons";
import TextInput from "../../utils/text-input/text-input";
import SideDrawerCategory from "./side-drawer-category";
const SideDrawer = (props) => {
	let drawerClasses = "side-drawer";
	if (props.show) {
		drawerClasses = "side-drawer open";
	}
	//TODO make category links component
	return (
		<>
			<nav className={drawerClasses}>
				{props.show ? (
					<IconContext.Provider value={{ size: "2em" }}>
						<div className="closeSideDrawer" onClick={props.closeSideBar}>
							<GrClose />
						</div>
					</IconContext.Provider>
				) : (
					<div></div>
				)}
				<div className="SideDrawer__TextInput">
					<TextInput />
				</div>
				<ul>
					<SideDrawerCategory CategoryName="HOME">
						<a href="#">Home</a>
						<br />
						<a href="#">Home</a>
						<br />
						<a href="#">Home</a>
						<br />
						<a href="#">Home</a>
						<br />
						<a href="#">Home</a>
						<br />
					</SideDrawerCategory>
					<SideDrawerCategory CategoryName="SHOP">
						<a href="#">SHOP</a>
						<br />
						<a href="#">SHOP</a>
						<br />
						<a href="#">SHOP</a>
						<br />
						<a href="#">SHOP</a>
						<br />
						<a href="#">SHOP</a>
						<br />
					</SideDrawerCategory>

					<SideDrawerCategory CategoryName="FEATURES">
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
					</SideDrawerCategory>
					<SideDrawerCategory CategoryName="PAGES">
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
					</SideDrawerCategory>

					<SideDrawerCategory CategoryName="BLOG">
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
						<a href="#">FEATURES</a>
						<br />
					</SideDrawerCategory>
				</ul>
			</nav>
		</>
	);
};
export default SideDrawer;
