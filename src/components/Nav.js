import React from "react";
import { Link } from "react-scroll";
import { FaBars, FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-slate-800 mb-3 border-b-4 border-fuchsia-500">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<a
							className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-zinc-50"
							href="https://nasimahmed.co.uk"
						>
							<span className="text-fuchsia-500">Nasim</span> Ahmed
						</a>
						<button
							className="text-zinc-50 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i>
								<FaBars />
							</i>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li>
								<Link to="about" spy={true} smooth={true}>
									<div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-50 hover:text-fuchsia-500 hover:cursor-pointer">
										About
									</div>
								</Link>
							</li>
							<li>
								<Link to="projects" spy={true} smooth={true}>
									<div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-50 hover:text-fuchsia-500 hover:cursor-pointer">
										Projects
									</div>
								</Link>
							</li>
							<li>
								<Link to="contact" spy={true} smooth={true}>
									<div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-50 hover:text-fuchsia-500 hover:cursor-pointer">
										Contact
									</div>
								</Link>
							</li>

							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-zinc-50 hover:text-fuchsia-500 mt-[-3px]"
									href="https://www.linkedin.com/in/nasimahmed108/"
								>
									<i className="text-lg leading-lg text-zinc-50 opacity-75"></i>
									<span className="ml-2">
										<FaLinkedin />
									</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-zinc-50 hover:text-fuchsia-500 mt-[-3px]"
									href="https://github.com/Nasim-A"
								>
									<i className="text-lg leading-lg text-zinc-50 opacity-75"></i>
									<span className="ml-2">
										<FaGithub />
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
