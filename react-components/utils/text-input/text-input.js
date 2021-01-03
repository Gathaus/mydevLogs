import React from "react";
import "./text-input.scss";
import { GrSearch } from "react-icons/gr";
import { IconContext } from "react-icons";

function TextInput() {
	//TODO add functuonality to search button
	return (
		<div className="Text__Input__Wrapper">
			<input
				class="Text__Input-input"
				placeholder="Please Enter Text"
				type="text"
			></input>
			<span class="Text__Input__Underline"></span>

			<IconContext.Provider value={{ size: "1.5em" }}>
				<div className="Text_Input_search-button">
					<GrSearch />
				</div>
			</IconContext.Provider>
		</div>
	);
}

export default TextInput;
