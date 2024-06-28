import meter1 from "../assets/img/n.jpg";
import a from "../assets/img/r.png";
import b from "../assets/img/no.png";
import c from "../assets/img/m.png";
import d from "../assets/img/j.png";
import e from "../assets/img/h.png";
import f from "../assets/img/g.png";
import g from "../assets/img/ex.png";
import h from "../assets/img/cs.png";
import i from "../assets/img/c_.png";

import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>
							<p></p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>
								<div className="item">
									<img src={a} alt="Image" />
								</div>
								<div className="item">
									<img src={b} alt="Image" />
									<h5></h5>
								</div>
								<div className="item">
									<img src={c} alt="Image" />
									<h5> </h5>
								</div>
								<div className="item">
									<img src={d} alt="Image" />
									<h5></h5>
								</div>
								<div className="item">
									<img src={e} alt="Image" />
								</div>
								<div className="item">
									<img src={f} alt="Image" />
								</div>
								<div className="item">
									<img src={g} alt="Image" />
								</div>
								<div className="item">
									<img src={h} alt="Image" />
								</div>
								<div className="item">
									<img src={i} alt="Image" />
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp} alt="Image" />
		</section>
	);
};
