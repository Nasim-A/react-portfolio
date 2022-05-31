import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
	return (
		<div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]">
			<div className="container relative mx-auto mt-32">
				<div className="items-center flex flex-wrap">
					<div className="w-full px-4 ml-auto mr-auto text-center">
						<div className="pr-12">
							<h1 className="text-zinc-50 font-semibold text-5xl md:text-9xl">
								Hey, I'm <span className="text-fuchsia-500">Nasim</span>
							</h1>
							<p className="mt-4 text-3xl text-zinc-50">
								A front-end developer
							</p>
							<p className="mt-4 text-lg text-zinc-50">
								I build websites with React and Tailwind CSS
							</p>
							<div className="flex justify-center text-5xl mt-4 text-zinc-50">
								<a href="https://www.linkedin.com/in/nasimahmed108/">
									<FaLinkedin className="mr-4 hover:text-fuchsia-500" />
								</a>
								<a href="https://github.com/Nasim-A">
									<FaGithub className="ml-4 hover:text-fuchsia-500" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]">
				<svg
					className="absolute bottom-0 overflow-hidden"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						className="text-fuchsia-500 fill-current"
						points="2560 0 2560 100 0 100"
					></polygon>
				</svg>
			</div>
		</div>
	);
};

export default Home;
