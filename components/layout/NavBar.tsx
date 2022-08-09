import React from "react";

//Next Impports
import Image from "next/image";

//Icons
import SearchIcon from "../icons/SearchIcon";
import Logo from "../icons/Logo";
import imghere from "../../public/assets/avtar.png";

//Components
import Centerpan from "../containers/CenterContainer";
import { LeftContainer } from "../containers/LeftContainer";
import Footer from "./Footer";
import RightContainer from "../containers/RightContainer";

export default function Navbar() {
	const navLinks = () => {
		return <span className="ml-2">Lorem</span>;
	};
	return (
		<>
			<div className="w-full min-h-screen flex flex-col">
				<nav className="relative flex flex-wrap items-center justify-between px-3 lg:px-[40px] py-[25px] bg-black">
					<div className="container px-0 mx-auto flex flex-wrap md:flex-nowrap items-center justify-start lg:justify-between">
						<div className="w-full md:w-52 lg:w-64 relative flex justify-center xl:w-auto lg:static lg:block md:justify-start">
							<a
								className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white mb-4 md:mb-0"
								href="#pablo"
							>
								<Logo />
							</a>
						</div>
						<div className="flex ml-0 w-full xl:w-auto xl:ml-auto items-center justify-between flex-wrap md:flex-nowrap">
							<div className="relative mx-auto text-gray-600 w-full xl:w-[657px]">
								<div className="absolute top-3 left-4">
									<SearchIcon />
								</div>
								<input
									className="border-0 w-full bg-[#1F1F1F] text-[#A2A2A2] h-10 px-5 pr-16 pl-12 rounded-lg text-sm focus:outline-none"
									type="search"
									name="search"
									placeholder="Search"
								/>
							</div>
							<div className="md:pl-[41px] pl-0 w-full md:w-auto mt-4 md:mt-0">
								<ul className="flex list-none lg:ml-auto justify-center">
									<li className="nav-item">
										<a
											className="pr-3 py-2 flex items-center leading-snug text-white hover:opacity-75 text-[15px] font-extrabold"
											href="#pablo"
										>
											<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
											{navLinks()}
										</a>
									</li>
									<li className="nav-item">
										<a
											className="px-3 py-2 flex items-center leading-snug text-white hover:opacity-75 text-[15px] font-extrabold"
											href="#pablo"
										>
											<i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
											{navLinks()}
										</a>
									</li>
									<li className="nav-item">
										<a
											className="pl-3 py-2 flex items-center leading-snug text-white hover:opacity-75 text-[15px] font-extrabold"
											href="#pablo"
										>
											<i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
											{navLinks()}
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
				<div className="w-full border-custom h-[6px]"></div>
				<div className="w-full mt-2 xl:mt-[43px]">
					<div className="container mx-auto">
						<div className="w-full img-full">
							<Image className="w-full text-center" src={imghere} alt="avtar" />
						</div>
						<div className="w-full text-center mt-[-80px]">
							<Centerpan />
						</div>
					</div>
				</div>

				<div className="container mx-auto px-5">
					<div className="mt-30 mb-[66px] w-full flex-wrap md:flex-nowrap  flex gap-4">
						<div className="md:w-1/2 w-full">
							<LeftContainer />
						</div>
						<div className="md:w-1/2 w-full">
							<RightContainer />
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
}
