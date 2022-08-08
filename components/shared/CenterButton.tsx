import React, { ReactElement } from "react";
import { Text } from "../shared/Headings";

interface IButtonProps {
	children?: ReactElement;
	text?: string;
}
const CenterButton = ({ children, text }: IButtonProps) => {
	return (
		<button className="box-border flex items-center justify-center gap-4  h-[50px] w-[184px] p-4 bg-[#080906] rounded-md font-extrabold text-white text-[15px]">
			{children}
			<Text className="text-[#fff]">{text}</Text>
		</button>
	);
};

export default CenterButton;
