import React from "react";

//Typography
import { Text, H4 } from "../shared/Headings";
//Shared components
import CenterButton from "../shared/CenterButton";

//Next Imports
import Image from "next/image";

//Icons
import TowerIcon from "../icons/TowerIcon";
import CircleIcon from "../icons/CircleIcon";
import HomeIcon from "../icons/HomeICon";
import avtar from "../../public/assets/avtar2.jpg";

interface TextI {
	Text?: string;
}

const CenterContainer = (props: TextI) => {
	return (
		<React.Fragment>
			<div className="container mx-auto">
				<div className="w-full">
					<Image src={avtar} alt="avtar" />
				</div>
				<div className="w-full text-center mt-[26px]">
					<H4 className="text-white text-[45px] font-extrabold mb-[10px]">
						Lorem ipsum
					</H4>
					<div className="w-full mb-[10px] text-base font-normal">
						<span className="text-[#F3F3F3]">Created By </span>
						<span className="text-[#FC364C]"> Lorem ipsum</span>
					</div>
					<Text className="text-[#F3F3F3] text-base	font-normal mb-[60px]">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
					</Text>
				</div>
				<div className="w-full">
					<div className="flex items-center justify-center gap-5 mb-[74px]">
						<CenterButton text="Lorem ipsum">
							<TowerIcon />
						</CenterButton>

						<CenterButton text="Lorem ipsum">
							<CircleIcon />
						</CenterButton>

						<CenterButton text="Lorem ipsum">
							<HomeIcon />
						</CenterButton>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default CenterContainer;
