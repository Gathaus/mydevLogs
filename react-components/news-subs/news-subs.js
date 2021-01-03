import React from "react";
import "./news-subs.css";
import TextInput2 from "../../utils/text-input-2/text-input-2";
export default function NewsSubs() {
	return (
		<div className="Newsletter__Padder-class">
			<div className="Newsletter__Container pt-5 pb-5">
				<div className=" Newsletter__Section-container pb-5">
					<div>
						<h3 className="Newsletter__Section-Header pt-5 pb-3">Newsletter</h3>
						<span className="Newsletter__Section-span">
							Get timely updates from your favorite products
						</span>
					</div>
					<div className="pt-4">
						<TextInput2 />
					</div>
				</div>
			</div>
		</div>
	);
}
