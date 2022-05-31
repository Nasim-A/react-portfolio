import React from "react";
import SectionTitle from "./SectionTitle";
import SectionHeading from "./SectionHeading";

const About = () => {
	return (
		<div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[70vh] bg-slate-800">
			<div className="container relative mx-auto">
				<div className="items-center flex flex-wrap">
					<div className="w-full px-4 ml-auto mr-auto text-left">
						<div className="pr-12">
							<SectionTitle text={"About"} />

							<div className="flex mt-4">
								<div className="text-gray-300 flex-1 flex-col mt-4 mr-4 text-lg">
									<SectionHeading text={"Who am I"} />
									<p className="pt-8">
										I'm Nasim. Web development has been an interest of mine for
										many years, specifically front-end development.
									</p>
									<p className="pt-8">
										I'm open to Job opportunities where I can contribute, learn
										and grow. If you have a good opportunity that matches my
										skills and experience then please don't hesitate to contact
										me. Feel free to connect with me on{" "}
										<a
											href="https://www.linkedin.com/in/nasimahmed108/"
											className="text-fuchsia-500 hover:text-fuchsia-300"
										>
											LinkedIn
										</a>
									</p>
								</div>
								<div className="text-gray-300 flex-1 flex-col mt-4 ml-4 text-lg">
									<SectionHeading text={"Skills and Tools"} />
									<p className="pt-8">
										JavaScript, React, HTML, CSS/SCSS, TailwindCSS
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
