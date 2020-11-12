import React, { Component } from "react";

import Toolbar from "../toolbar/toolbar";
import SideDrawer from "../sidedrawer/sidedrawer";
import BackDrop from "../backdrop/backdrop";

export default class Navigation extends Component {
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
			<div>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
				<SideDrawer
					show={this.state.sideDrawerOpen}
					closeSideBar={this.backdropClickHandler}
				/>
				{backDrop}
				<main style={{ marginTop: "64px" }}>
					<p>Main page content</p>
				</main>
			</div>
		);
	}
}
