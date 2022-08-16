import React from "react";

//Icons
import FooterLogo from "../icons/FooterLogo";

const Footer = () => {
	return (
		<footer className=" bg-black w-full mt-auto">
			<div className="text-center p-6 w-full flex items-center justify-center py-14 lg:pt-[97px] lg:pb-[85px]">
				<FooterLogo />
			</div>
		</footer>
	);
};

export default Footer;
