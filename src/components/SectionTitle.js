import React from "react";

const SectionTitle = ({ text }) => {
	return (
		<div className="flex flex-row justify-start items-center mb-8">
			<div className="bg-fuchsia-500 w-16 h-1 mr-6"></div>
			<h1 className="text-gray-500 font-semibold text-base">{text}</h1>
		</div>
	);
};

export default SectionTitle;
