import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Interest from "./interest";

function AboutMe() {
	return (
		<div style={{ width: "100%", margin: "auto" }}>
			<Grid className="about-body">
				<Cell className="cv-left-col" col={4}>
					<div style={{ textAlign: "center" }}>
						<img
							src={require("./profile.jpeg")}
							alt="avatar"
							style={{ height: "300px", border: "20px" }}
						/>
					</div>
					<h2 style={{ paddingTop: "2em" }}>Oslin Johnson</h2>
					<h4 style={{ color: "grey" }}>Web developer</h4>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<h4>Personal Information</h4>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<p></p>
					<h5>Location: Cape Town Western Cape</h5>
					<p></p>
					<h5>Phone: 0712482443</h5>
					<p></p>
					<h5>Email: ossiekcjohnson@gmail.com </h5>
					<h5>LinkedIn: www.linkedin.com/in/oslin-johnson </h5>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<p></p>
					<h4>Languages </h4>
					<p>English: Read and write fluently</p>
					<p>Afrikiaans: Read and write fluently</p>

					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<h4>Programming Languages</h4>
					<Skills skill="JavaScript" progress={60} />
					<Skills skill="HTML" progress={70} />
					<Skills skill="CSS" progress={70} />
					<Skills skill="React" progress={60} />
					<Skills skill="Python" progress={70} />
					<Skills skill="MongoDB" progress={50} />

					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<h5>Some humour</h5>
					<p>
						Why does Python live on land? Because it's above C level. N'oublie
						pas de vivre.
					</p>
				</Cell>

				<Cell className="cv-right-col" col={8}>
					<h2>About me </h2>
					<p className="about-text">
						I was first exposed to computers when I started school and it always
						intrigued me. I never knew my calling at first , but through many
						different experiences I learnt more about myself and what I want
						from life. My interest for coding started with the more research I
						did on it. I spoke to web developers, I watched videos and read up
						to gain more information about coding and web developing. I haven’t
						been exposed to coding before I joined Life Choices Academy , but it
						is one of the best choices I have made. Genius is 1% talent and 99%
						hard work. Drive and passion led me here. Diligent and a committed
						worker. Aspiring web developer. Team player. Firmly believe that
						teamwork makes the dream work. "We do not need magic to transform
						the world. We carry all the power we need inside ourselves already."
						-J.K Rowling
					</p>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<h2>Education</h2>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />

					<Education
						startYear={2006}
						endYear={2010}
						schoolName="Elsies River High"
						schoolDescription="Subjects: English, Afrikaans, Life Science, Accounting, Mathematics, Physical Science"
					/>
					<Education
						startYear={2012}
						endYear={2013}
						schoolName="North-Link College"
						schoolDescription="Courses Completed: Motor Mechanics N1-N2 coureses and completed it. Done CMBMT Motor Mechanic Level 1"
					/>
					<Education
						startYear={2014}
						endYear={2015}
						schoolName="Imperial Technical Training Academy "
						schoolDescription="Courses Completed: CBMT Motor Mechanic – Level 2, CBMT Motor Mechanic – Level 3  , CBMT Motor Mechanic – Level 4"
					/>
					<Education
						startYear={2020}
						endYear={2020}
						schoolName="Life Choices Coding Academy "
						schoolDescription="Courses Completed: Web Development bootcamp"
					/>

					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<h2>Experience</h2>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<Experience
						startYear={2013}
						endYear={2013}
						jobName="Motor Mechanic Apprentice"
						jobDescription="An apprentice at Hyundai Pardien Eiland "
					/>
					<Experience
						startYear={2013}
						endYear={2015}
						jobName="Motor Mechanic Apprentice"
						jobDescription="An apprentice at Engine and Gearbox Exchange "
					/>
					<Experience
						startYear={2017}
						endYear={2020}
						jobName="Roadmarking "
						jobDescription="A general worker at Lourens Roadmarking "
					/>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />

					<h2>Certifications</h2>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<Experience
						endYear={2012}
						jobName="Modular Training- Motor Mechanics Level 1 "
						jobDescription="Northlink College "
					/>
					<Experience
						endYear={2017}
						jobName="Trade Certification for Aumotive Motor Mechanic"
						jobDescription="-Imperial Techincal Training Acamedy"
					/>

					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<h2>Interests</h2>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<Interest hobbiesDescription="Enjoy watching and playing football" />

					<Interest hobbiesDescription="I love swimming " />

					<Interest hobbiesDescription="I enjoying watching intense, nail biting series and movies" />

					<Interest hobbiesDescription="Taking road trips are among one of favourite things to do." />
				</Cell>
			</Grid>
		</div>
	);
}

export default AboutMe;
