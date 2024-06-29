import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import v from "../assets/img/vaibh_pic.jpg";

import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = [
		"Full Stack Developer",
		"Competetive Programer",
		"Tech Enthusiast",
		"Coder",
	];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="aligh-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<span className="tagline">Welcome to my Portfolio</span>
									<h1>
										{`Hi! I'm Vaibhav a`}{" "}
										<span
											className="txt-rotate"
											dataPeriod="1500"
											data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
										>
											<span className="wrap">{text}</span>
										</span>
									</h1>
									<p>
										I am a Tech Enthusiast based in Jharkhand, India, pursuing
										an undergraduate degree in Electronics and Communication
										from BIT, Mesra. I am passionate about coding, developing
										applications, and building websites using the MERN Stack. I
										actively participate in competitive programming to sharpen
										my problem-solving skills. Continuously working to improve
										my abilities, I aim to create impactful and innovative
										full-stack web applications.
									</p>
									<div>
										<a href="https://drive.google.com/file/d/1z-U6rBS0eXe3xhknngHwVLNpf6tzrWBE/view">
											<h3>Resume</h3>
										</a>
									</div>
									<button onClick={() => console.log("connect")}>
										Let’s Connect <ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__zoomIn" : ""
									}
								>
									<img className="vkg" src={v} alt="Header Img" />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
