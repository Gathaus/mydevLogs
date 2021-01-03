import React, { Component } from "react";

import ToolbarShop from "../toolbar-shop/toolbar-shop";
import SideDrawer from "../sidedrawer/sidedrawer";
import BackDrop from "../backdrop/backdrop";
import "./navigationShop.css";
export default class NavigationShop extends Component {
	state = {
		sideDrawerOpen: false,
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};
	render() {
		let backDrop;
		if (this.state.sideDrawerOpen) {
			backDrop = <BackDrop click={this.backdropClickHandler} />;
		}
		return (
			<div className="Navigation__General__Container">
				<ToolbarShop drawerClickHandler={this.drawerToggleClickHandler} />
				<SideDrawer
					show={this.state.sideDrawerOpen}
					closeSideBar={this.backdropClickHandler}
				/>
				{backDrop}
			</div>
		);
	}
}
