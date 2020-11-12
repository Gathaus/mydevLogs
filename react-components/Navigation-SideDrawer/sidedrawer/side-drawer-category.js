import React, { useState } from "react";
import "./side-drawer-category.scss";
import { AiFillCaretRight } from "react-icons/ai";
export default function SideDrawerCategory(props) {
	const [clicked, setclicked] = useState(false);

	const toggle = () => {
		setclicked(!clicked);
	};
	return (
		<>
			<div onClick={toggle} className="SideDrawerCategory__Category-container">
				<a href="#">
					{props.CategoryName}
					<AiFillCaretRight
						className={
							clicked
								? "SideDrawerCategory__Category-icon-active"
								: "SideDrawerCategory__Category-icon"
						}
					/>
				</a>
			</div>
			{clicked ? (
				<div className="SideDrawerCategory_NestedCategories-active ">
					{props.children}
				</div>
			) : (
				<div className="SideDrawerCategory_NestedCategories">
					{props.children}
				</div>
			)}
		</>
	);
}
