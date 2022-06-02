import React from "react";
import SectionHeading from "./SectionHeading";

const Project = ({
	heading,
	image,
	alt,
	description,
	projectLink,
	githubLink,
}) => {
	return (
		<div className="pt-8">
			<SectionHeading text={heading} />
			<img src={image} alt={alt} />
			<p className="mb-8">{description}</p>
			<button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-zinc-50 font-bold py-2 px-4 rounded mr-8 mb-4">
				<a href={projectLink}>View Project</a>
			</button>
			<button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-zinc-50 font-bold py-2 px-4 rounded">
				<a href={githubLink}>View on Github</a>
			</button>
		</div>
	);
};

export default Project;
