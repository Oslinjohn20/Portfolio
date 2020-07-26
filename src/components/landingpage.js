import React from "react";
import { Grid, Cell } from "react-mdl";

function landingpage() {
	return (
		<div style={{ width: "100%", margin: "auto" }}>
			<Grid className="landing-grid">
				<Cell col={12}>
					<div className="avatar-card">
						<img
							src={require("./profile.jpeg")}
							alt="avatar"
							className="avatar-img"
						/>
					</div>
					<div className="banner-text">
						<h1>Junior Web Developer</h1>

						<hr />
						<p>
							HTML/CSS | Boostrap | JavaScript | React | MySQL | MongoDB |
							NodeJS
						</p>
						<div className="social-links">
							{/* LinkedIn */}
							<a
								href="https://www.linkedin.com/in/oslin-johnson-9400691ab"
								rel="noopener noreferrer"
								target="_blank"
							>
								<i className="fa fa-linkedin-square" aria-hidden="true"></i>
							</a>
							{/* Github */}
							<a
								href="https://github.com/Oslinjohn20/repositories"
								rel="noopener noreferrer"
								target="_blank"
							>
								<i className="fa fa-github-square" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</Cell>
			</Grid>
		</div>
	);
}

export default landingpage;
