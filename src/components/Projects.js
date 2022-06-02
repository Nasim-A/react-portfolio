import React from "react";
import SectionTitle from "./SectionTitle";
import SectionHeading from "./SectionHeading";
import Project from "./Project";

import tictactoe from "../Projects/TicTacToe.png";
import library from "../Projects/Library.png";
import todolist from "../Projects/ToDoList.png";
import weather from "../Projects/Weather.png";

const Projects = () => {
	return (
		<div
			id="projects"
			className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[70vh] bg-slate-900"
		>
			<div className="container relative mx-auto">
				<div className="items-center flex flex-wrap">
					<div className="w-full px-4 ml-auto mr-auto text-left">
						<div className="pr-12">
							<SectionTitle text={"Projects"} />
							<div className="mt-4">
								<div className="text-gray-300 flex-1 mt-4 text-lg">
									{/* Tic Tac Toe */}
									<Project heading={"Tic Tac Toe"} image={tictactoe} alt={"Tic Tac Toe Project"} description={"The classic game built with React and Tailwind CSS"} projectLink={"https://clever-babka-4de805.netlify.app/"} githubLink={"https://github.com/Nasim-A/TicTacToe"} />

									{/* Library */}
									<Project heading={"Library App"} image={library} alt={"Library App Project"} description={"Keep track of the books in your personal library and which ones you have read. Built with react and Tailwind CSS, and stores the books in local storage"} projectLink={"https://zingy-sfogliatella-b8dc36.netlify.app/"} githubLink={"https://github.com/Nasim-A/react-library"} />

									{/* To Do List */}
									<Project heading={"To Do List"} image={todolist} alt={"To Do List Project"} description={"A To Do List app built with React and Tailwind CSS"} projectLink={"https://vermillion-centaur-2fb75b.netlify.app/"} githubLink={"https://github.com/Nasim-A/todolist"} />

									{/* Weather */}
									<Project heading={"Weather App"} image={weather} alt={"Weather App Project"} description={"Built with React and Bootstrap, and uses the Open Weather Map API to retrieve the weather data. Dynamically changes the background image based on the locations weather, pulling images from Unsplash"} projectLink={"https://frosty-morse-14fe2e.netlify.app/"} githubLink={"https://github.com/Nasim-A/react-weather"} />

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
