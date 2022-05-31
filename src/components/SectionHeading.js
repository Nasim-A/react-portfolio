import React from "react";

const SectionHeading = ({ text }) => {
	return (
		<div className="flex flex-row items-center">
			<div className="bg-fuchsia-500 w-8 h-1 mr-6"></div>
			<h1 className="text-zinc-50 font-semibold text-2xl">{text}</h1>
		</div>
	);
};

export default SectionHeading;
