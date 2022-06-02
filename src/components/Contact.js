import React from "react";
import SectionTitle from "./SectionTitle";
import SectionHeading from "./SectionHeading";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
	return (
		<div
			id="contact"
			className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[70vh] bg-slate-800"
		>
			<div className="container relative mx-auto">
				<div className="items-center flex flex-wrap">
					<div className="w-full px-4 ml-auto mr-auto text-left">
						<div className="pr-12">
							<SectionTitle text={"Contact"} />
							<div className="mt-4">
								<div className="text-gray-300 flex-1 mt-4 text-lg">
									<SectionHeading
										text={
											"Interested in working with me or just want to say hi?"
										}
									/>
									<p className="pt-8">
										Reach out to me by sending an email to{" "}
										<a
											href="mailto:ahmednasim108@gmail.com"
											className="text-fuchsia-500 hover:text-fuchsia-300"
										>
											ahmednasim108@gmail.com
										</a>{" "}
										or connect with me on{" "}
										<a
											href="https://www.linkedin.com/in/nasimahmed108/"
											className="text-fuchsia-500 hover:text-fuchsia-300"
										>
											LinkedIn
										</a>
										<div className="flex text-5xl mt-4">
											<a href="https://www.linkedin.com/in/nasimahmed108/">
												<FaLinkedin className="mr-4 hover:text-fuchsia-500" />
											</a>
											<a href="https://github.com/Nasim-A">
												<FaGithub className="ml-4 hover:text-fuchsia-500" />
											</a>
										</div>
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

export default Contact;
