import React from "react";

const Home = () => {
	return (
		<div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[70vh]">
			<div className="container relative mx-auto">
				<div className="items-center flex flex-wrap">
					<div className="w-full px-4 ml-auto mr-auto text-center">
						<div className="pr-12">
							<h1 className="text-zinc-50 font-semibold text-5xl md:text-9xl">
								Hey, I'm <span className="text-fuchsia-500">Nasim</span>
							</h1>
							<p className="mt-4 text-3xl text-gray-300">
								A front-end developer
							</p>
							<p className="mt-4 text-lg text-gray-300">
								I build websites with React and Tailwind CSS
							</p>
							<p className="mt-4 text-lg text-gray-300">
								Connect with me on LinkedIn or check out my GitHub
							</p>
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
