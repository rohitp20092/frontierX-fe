import React, { ReactElement } from "react";

//shared components
import { Smalltext } from "../shared/Headings";

interface ILeftContainerSharedProps {
	children?: ReactElement;
	text?: string;
}
const LeftContainerShared = ({ children, text }: ILeftContainerSharedProps) => {
	return (
		<div className="flex gap-3 items-center w-2/3 mb-[20px]">
			{children}
			<Smalltext className="text-[#FC364C] text-sm font-normal">
				{text}
			</Smalltext>
		</div>
	);
};

export default LeftContainerShared;
