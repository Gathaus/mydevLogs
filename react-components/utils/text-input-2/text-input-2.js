import React from "react";
import "./text-input-2.scss";

function TextInput2() {
	return (
		<div className="Text__Input2__Wrapper">
			<input
				className="Text__Input2-input"
				placeholder="Please Enter Text"
				type="text"
			></input>
			<input className="Text__Input2-submit" type="submit" value ="Subscribe"></input>

		</div>
	);
}

export default TextInput2;
