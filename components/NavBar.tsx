import React from "react";
import Image from "next/image";
import SearchIcon from "./icons/SearchIcon";
import Logo from "./icons/Logo";
import imghere from "../public/assets/avtar.png";
import Centerpan from "./CenterContainer";

export default function Navbar() {
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<a
							className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
							href="#pablo"
						>
							<Logo />
						</a>
						<div>
							<div className="pt-2 relative mx-auto text-gray-600">
								<SearchIcon />
								<input
									className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
									type="search"
									name="search"
									placeholder="Search"
								></input>
							</div>
						</div>
					</div>
					<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
						<li className="nav-item">
							<a
								className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
								href="#pablo"
							>
								<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
								<span className="ml-2">Lorem</span>
							</a>
						</li>
						<li className="nav-item">
							<a
								className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
								href="#pablo"
							>
								<i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
								<span className="ml-2">Lorem</span>
							</a>
						</li>
						<li className="nav-item">
							<a
								className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
								href="#pablo"
							>
								<i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
								<span className="ml-2">Lorem</span>
							</a>
						</li>
					</ul>
					{/* </div> */}
				</div>
			</nav>
			<div>
				<Image src={imghere} alt="avtar" />
			</div>
			<Centerpan />
		</>
	);
}
