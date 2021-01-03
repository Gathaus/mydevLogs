import React, { useEffect } from "react";
import "./registerpage.css";
export default function Registerpage() {
	useEffect(() => {
		document.getElementById("root").firstChild.style.paddingBottom = 0;
	});
	return (
		<>
			<div className="Login__Page-container">
				<div class="Login__Page-bold-line"></div>
				<div class="Login__Page-container">
					<div class="Login__Page-window">
						<div class="Login__Page-overlay"></div>
						<div class="Login__Page-content">
							<div class="Login__Page-welcome">Hello There!</div>
							<div class="Login__Page-subtitle">
								We're almost done. Before using our services you need to create
								an account.
							</div>
							<div class="Login__Page-input-fields">
								<input
									type="text"
									placeholder="Username"
									class="Login__Page-input-line Login__Page-full-width"
								></input>
								<input
									type="email"
									placeholder="Email"
									class="Login__Page-input-line Login__Page-full-width"
								></input>
								<input
									type="password"
									placeholder="Password"
									class="Login__Page-input-line Login__Page-full-width"
								></input>
                                
							</div>
							<div class="Login__Page-spacing">
								or continue with{" "}
								<span class="Login__Page-highlight">Google</span><br/>
                                <a href="/login" className="Login__Page-highlight">I Have an Account!</a>
							</div>
							<div>
								<button class="Login__Page-ghost-round Login__Page-full-width">
									Create Account
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
