import React from "react";
import Image from "next/image";
import SearchIcon from "../icons/SearchIcon";
import Logo from "../icons/Logo";
import imghere from "../../public/assets/avtar.png";
import Centerpan from "../containers/CenterContainer";
import { LeftContainer } from "../containers/LeftContainer";
import Footer from "./Footer";
import RightContainer from "../containers/RightContainer";

export default function Navbar() {
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-[40px] py-[25px] bg-black">
				<div className="container px-0 mx-auto flex items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<a
							className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
							href="#pablo"
						>
							<Logo />
						</a>
					</div>
					<div className="flex ml-auto items-center justify-between">
						<div className="relative mx-auto text-gray-600 w-[657px]">
							<div className="absolute top-3 left-4">
								<SearchIcon />
							</div>
							<input
								className="border-0 w-full bg-[#1F1F1F] text-[#A2A2A2] h-10 px-5 pr-16 pl-12 rounded-lg text-sm focus:outline-none"
								type="search"
								name="search"
								placeholder="Search"
							></input>
						</div>
						<div className="pl-[41px]">
							<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
								<li className="nav-item">
									<a
										className="pr-3 py-2 flex items-center leading-snug text-white hover:opacity-75 text-[15px] font-extrabold"
										href="#pablo"
									>
										<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
										<span className="ml-2">Lorem</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="px-3 py-2 flex items-center leading-snug text-white hover:opacity-75 text-[15px] font-extrabold"
										href="#pablo"
									>
										<i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
										<span className="ml-2">Lorem</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="pl-3 py-2 flex items-center leading-snug text-white hover:opacity-75 text-[15px] font-extrabold"
										href="#pablo"
									>
										<i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
										<span className="ml-2">Lorem</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<div className="w-full border-custom h-[6px]"></div>
			<div className="w-full mt-[43px]">
				<div className="w-full">
					<Image className="w-full" src={imghere} alt="avtar" />
				</div>
				<div className="w-full text-center mt-[-80px]">
					<Centerpan />
				</div>
			</div>

			<div className="container mx-auto px-5">
				<div className="mt-30 mb-[66px] w-full flex gap-4">
					<div className="w-1/2">
						<LeftContainer />
					</div>
					<div className="w-1/2">
						<RightContainer />
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
