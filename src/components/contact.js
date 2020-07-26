import React from "react";
import { Grid, Cell } from "react-mdl";
import MyForm from "./myform";
import { BsEnvelopeOpenFill, BsPersonPlusFill } from "react-icons/bs";

function contact() {
	return (
		<div className="contact-body">
			<Grid className="contact-grid">
				<Cell col={6}>
					<h2>Oslin Johnson</h2>
					<img
						src={require("./profile.jpeg")}
						alt="avatar"
						style={{ height: "200px" }}
					/>

					<p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
						Cell:071 248 2443 <BsPersonPlusFill />
					</p>
					<p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
						Email: ossiekcjohnson@gmail.com <BsEnvelopeOpenFill />
					</p>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<p>
						Please leave a message in the contact form and leave your email
						address or hit me up my cell
					</p>
				</Cell>
				<Cell>
					<MyForm />
				</Cell>
			</Grid>
		</div>
	);
}

export default contact;
