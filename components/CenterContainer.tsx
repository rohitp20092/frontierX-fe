import React from "react";
import { Text, H2, H4 } from "./shared/Headings";
import Image from "next/image";
import TowerIcon from "./icons/TowerIcon";
import CircleIcon from "./icons/CircleIcon";
import HomeIcon from "./icons/HomeICon";
import avtar from "../public/assets/avtar2.jpg";

interface TextI {
	Text?: string;
}

const CenterContainer = (props: TextI) => {
	return (
		<React.Fragment>
			<div>
				<Image src={avtar} alt="avtar" />
				<H4 className="text-[#000]">Lorem ipsum</H4>
				<span>Created By</span>
				<span>Lorem ipsum</span>
				<Text>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
				</Text>
			</div>
			<div className="flex space-x-2">
				<button className="box-border h-8 w-32 p-4 bg-black ...">
					<TowerIcon className="bg-red" />
					<Text className="text-[#fff] -mt-[20px] ml-3 ">Lorem ipsum</Text>
				</button>
				<button className="box-border h-8 w-32 p-4 bg-black ...">
					<CircleIcon />
					<Text className="text-[#fff] -mt-[20px] ml-3">Lorem ipsum</Text>
				</button>
				<button className="box-border h-8 w-32 p-4 bg-black ...">
					<HomeIcon />
					<Text className="text-[#fff] -mt-[20px] ml-3">Lorem ipsum</Text>
				</button>
			</div>
		</React.Fragment>
	);
};

export default CenterContainer;
