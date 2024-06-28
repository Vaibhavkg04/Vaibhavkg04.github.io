import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
	return (
		<Col size={12} sm={6} md={4} className="project-card-col">
			<div className="proimg">
				<div className="proj-imgbx">
					<img className="pro_img" src={imgUrl} />
					<div className="proj-txtx">
						<h4>{title}</h4>
						<span>{description}</span>
					</div>
				</div>
			</div>
		</Col>
	);
};
