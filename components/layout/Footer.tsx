import React from "react";

//Icons
import Logo from "../icons/Logo";

const Footer = () => {
	return (
		<footer className=" bg-black w-full mt-auto">
			<div className="text-center p-6 w-full flex items-center justify-center py-14 lg:pt-[97px] lg:pb-[85px]">
				<Logo />
			</div>
		</footer>
	);
};

export default Footer;
