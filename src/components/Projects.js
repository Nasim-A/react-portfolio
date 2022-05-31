import React from "react";
import SectionTitle from "./SectionTitle";
import SectionHeading from "./SectionHeading";

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
									<div className="pt-8">
										<SectionHeading text={"Tic Tac Toe"} />
										<img
											src={tictactoe}
											alt="Tic Tac Toe Project"
											className="transform skew-y-3"
										/>
										<p className="mb-8">
											The classic game built with React and Tailwind CSS
										</p>
										<button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-zinc-50 font-bold py-2 px-4 rounded mr-8">
											<a href="https://clever-babka-4de805.netlify.app/">
												View Project
											</a>
										</button>
										<button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-zinc-50 font-bold py-2 px-4 rounded">
											<a href="https://github.com/Nasim-A/TicTacToe">
												View on Github
											</a>
										</button>
									</div>

									{/* Library */}
									<div className="pt-8">
										<SectionHeading text={"Library App"} />
										<img
											src={library}
											alt="Library Project"
											className="transform skew-y-3"
										/>
										<p>
											Keep track of the books in your personal library and which
											ones you have read.
										</p>
										<p className="mb-8">
											Built with react and Tailwind CSS, and stores the books in
											local storage
										</p>
										<button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-zinc-50 font-bold py-2 px-4 rounded mr-8">
											<a href="https://zingy-sfogliatella-b8dc36.netlify.app/">
												View Project
											</a>
										</button>
										<button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-zinc-50 font-bold py-2 px-4 rounded">
											<a href="https://github.com/Nasim-A/react-library">
												View on Github
											</a>
										</button>
									</div>

									{/* To Do List */}
									<div className="pt-8">
										<SectionHeading text={"To Do List"} />
										<img
											src={todolist}
											alt="To Do List Project"
											className="transform skew-y-3"
										/>
										<p className="mb-8">
											A To Do List app built with React and Tailwind CSS
										</p>
										<button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-zinc-50 font-bold py-2 px-4 rounded mr-8">
											<a href="https://vermillion-centaur-2fb75b.netlify.app/">
												View Project
											</a>
										</button>
										<button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-zinc-50 font-bold py-2 px-4 rounded">
											<a href="https://github.com/Nasim-A/todolist">
												View on Github
											</a>
										</button>
									</div>

									{/* Weather */}
									<div className="pt-8">
										<SectionHeading text={"Weather App"} />
										<img
											src={weather}
											alt="Weather Project"
											className="transform skew-y-3"
										/>
										<p>Check the weather in different locations</p>
										<p className="mb-8">
											Built with React and Bootstrap, and uses the Open Weather
											Map API to retrieve the weather data. Dynamically changes
											the background image based on the locations weather,
											pulling images from Unsplash
										</p>
										<button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-zinc-50 font-bold py-2 px-4 rounded mr-8">
											<a href="https://frosty-morse-14fe2e.netlify.app/">
												View Project
											</a>
										</button>
										<button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-zinc-50 font-bold py-2 px-4 rounded">
											<a href="https://github.com/Nasim-A/react-weather">
												View on Github
											</a>
										</button>
									</div>
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
