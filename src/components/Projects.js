import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Esummit.png";
import c from "../assets/img/chem_dem.jpg";
import b from "../assets/img/bit.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
	const projects = [
		{
			title: "EDC's Esummit 2024",
			description: "Design & Development",
			imgUrl: projImg1,
		},
	];
	const projects2 = [
		{
			title: "Ongoing Bizard Project",
			description: "Design & Development",
			imgUrl: c,
		},
	];
	const projects3 = [
		{
			title: "Ongoing Bizard Project",
			description: "Design & Development",
			imgUrl: b,
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<h2>Work Experience & Projects</h2>
									<p></p>
									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Nav
											variant="pills"
											className="nav-pills mb-5 justify-content-center align-items-center"
											id="pills-tab"
										>
											<Nav.Item>
												<Nav.Link eventKey="first">Experience</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">Projects</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="third">Portfolio </Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id="slideInUp"
											className={
												isVisible ? "animate__animated animate__slideInUp" : ""
											}
										>
											<Tab.Pane eventKey="first">
												<div className="prooo">
													{projects2.map((project, index) => {
														return <ProjectCard key={index} {...project} />;
													})}
												</div>
												<div className="pura">
													<div className="project_desc">
														<div className="project_desch1">
															<h1 className="centered-heading">
																Web Developer, Bizard
															</h1>
														</div>
													</div>
												</div>

												<div className="pura">
													<div className="project_desc">
														<div className="project_desch1"></div>

														<ul>
															<li>
																<strong>Date:</strong> Ongoing
															</li>
															<li>
																<strong>Project:</strong> Contributing to the
																development of Cheminos, an online platform for
																college students offering courses, notes, and
																discussion forums
															</li>
															<li>
																Designing and implementing user-friendly web
																pages and interactive features using React.js,
																HTML, and CSS.
															</li>
															<li>
																Integrating authentication using Auth0 and
																managing data with MongoDB.
															</li>
															<br></br>
															<div className="project_desch">
																<a href="https://github.com/Vaibhavkg04/Cheminos2.2">
																	<h4>GITHUB</h4>
																</a>
															</div>
														</ul>
													</div>
												</div>
											</Tab.Pane>

											{/* ==================================================================== */}
											<Tab.Pane eventKey="second">
												<div className="prooo">
													{projects.map((project, index) => {
														return <ProjectCard key={index} {...project} />;
													})}
												</div>
												<div className="pura">
													<div className="project_desc">
														<div className="project_desch1">
															<h1 className="centered-heading">
																ESUMMIT 2024 Main Website
															</h1>
														</div>
													</div>
												</div>

												<div className="pura">
													<div className="project_desc">
														<div className="project_desch1"></div>

														<ul>
															<li>
																<strong>Date:</strong> January 2024
															</li>
															<li>
																<strong>Project:</strong> Designed and Developed
																the Main page of the ESUMMIT’s 2024 website of
																Entrepreneurship Development Club BIT Mesra.
															</li>
															<li>
																<strong>Key Sections:</strong> Events,
																Registration, Video Carousel, Past Events,
																Alumni, and Sponsor.
															</li>
															<li>
																<strong>Technologies Used:</strong> HTML, CSS,
																React.js
															</li>
															<br></br>
															<div className="project_desch">
																<a href="https://esummit.edcbitmesra.in/">
																	<h4>LINK</h4>
																</a>
																<a href="https://github.com/Vaibhavkg04/Esummit-24">
																	<h4>GITHUB</h4>
																</a>
															</div>
														</ul>
													</div>
												</div>
												{/* ============================================================================ */}

												<div className="prooo">
													{projects3.map((project, index) => {
														return <ProjectCard key={index} {...project} />;
													})}
												</div>
												<div className="pura">
													<div className="project_desc">
														<div className="project_desch1">
															<h1 className="centered-heading">
																BIT Community Hub
															</h1>
														</div>
													</div>
												</div>

												<div className="pura">
													<div className="project_desc">
														<div className="project_desch1"></div>

														<ul>
															<li>
																<strong>Project:</strong> Developed interactive
																platform for student-teacher communication,
																integrating real-time interaction features.
															</li>
															<li>
																<strong>Key Sections:</strong> Created login
																system, personalized dashboard, and specialized
																sections like Doubt and Hotel Issues.• Utilized
																MongoDB Atlas for scalable data management and
																Express.js/Node.js for efficient backend support
															</li>
															<li>
																<strong>Technologies Used:</strong> express js,
																node.js , HTML ,CSS and Javascrip, MongoDB
															</li>
															<br></br>
															<div className="project_desch">
																<a href="https://www.youtube.com/watch?v=RcAM1kb56v8">
																	<h4>LINK</h4>
																</a>
																<a href="https://github.com/Vaibhavkg04/IEEE-Megaproject-23/tree/main/BIT_COMM_HUB">
																	<h4>GITHUB</h4>
																</a>
															</div>
														</ul>
													</div>
												</div>

												{/* ============================================================================= */}
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<p></p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	);
};
