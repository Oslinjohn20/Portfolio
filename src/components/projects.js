import React from "react";
import {
	Card,
	CardTitle,
	CardActions,
	Button,
	CardText,
	CardMenu,
} from "react-mdl";

function projects() {
	return (
		<div className="projects-grid">
			{/* Project1 */}
			<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
				<CardTitle
					style={{
						color: "#fff",
						height: "50px",
						background: "#283c86",
					}}
				>
					#React Project #1
				</CardTitle>
				<CardText>
					<img
						src={require("./github-finder.png")}
						alt="profile pic"
						style={{ height: "200px", width: "310px" }}
					/>
					Github Finder
					<p>
						This is a react-app that finds users on github, using any
						characters.
					</p>
				</CardText>
				<CardActions border>
					<Button colored>
						<a href="https://githubfinder0023.netlify.app/">Live demo</a>
					</Button>
				</CardActions>
				<CardMenu style={{ color: "#fff" }}></CardMenu>
			</Card>
			{/* Project2 */}
			<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
				<CardTitle
					style={{
						color: "#fff",
						height: "50px",
						background: "#283c86",
					}}
				>
					#React Project #2
				</CardTitle>
				<CardText>
					<img
						src={require("./contact-keeper.png")}
						alt="profile pic"
						style={{ height: "200px", width: "310px" }}
					/>
					Contact Kepper
					<p>
						Thsi react-app is connected with a MongoDB server that allows user
						to store contacts
					</p>
				</CardText>
				<CardActions border>
					<Button colored>
						<a
							href="https://powerful-stream-30459.herokuapp.com/"
							rel="noopener noreferrer"
							target="_blank"
						>
							Live demo
						</a>
					</Button>
				</CardActions>
				<CardMenu style={{ color: "#fff" }}></CardMenu>
			</Card>
			{/* Project3 */}
			<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
				<CardTitle
					className="card-title3"
					style={{
						color: "#fff",
						height: "50px",
						background: "#283c86",
					}}
				>
					#React Project #3
				</CardTitle>
				<CardText>
					<img
						src={require("./it-logger.png")}
						alt="profile pic"
						style={{ height: "200px", width: "310px" }}
					/>
					IT-Logger
					<p>
						A react-app that stores work done and problems that can be logged.
					</p>
				</CardText>
				<CardActions border>
					<Button colored>
						<a
							href="https://fervent-hoover-6acb9b.netlify.app"
							rel="noopener noreferrer"
							target="_blank"
						>
							Live demo
						</a>
					</Button>
				</CardActions>
				<CardMenu style={{ color: "#fff" }}></CardMenu>
			</Card>

		
		</div>
	);
}

export default projects;
