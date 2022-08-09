import React from "react";

//Shared component
import { DropDownElements } from "./DropDownElements";

export const ElementRightContainer = () => {
	return (
		<div className="w-full p-5 rounded-md rounded-tl-none rounded-tr-none bg-[#16101a] text-white -mt-1">
			<div className="max-h-[300px] overflow-y-scroll duration-100 delay-100	">
				<div className="flex gap-1 md:gap-0 lg:gap-3 flex-wrap lg:flex-nowrap">
					<DropDownElements heading="Accessories" percent={9} />
					<DropDownElements heading="Arms" percent={15} />
					<DropDownElements heading="Background" percent={3} />
				</div>

				<div className="flex gap-1 md:gap-0 lg:gap-3 flex-wrap lg:flex-nowrap">
					<DropDownElements heading="Eye" percent={2} />
					<DropDownElements heading="Glasses" percent={92} />
					<DropDownElements heading="Hair & Hats" percent={2} />
				</div>

				{[1, 2, 3].map((value, index) => (
					<div
						key={value}
						className="flex gap-1 md:gap-0 lg:gap-3 flex-wrap lg:flex-nowrap"
					>
						<DropDownElements heading="Head" percent={46} />
						<DropDownElements heading="Legs & Clothes" percent={46} />
						<DropDownElements heading="Mouth" percent={46} />
					</div>
				))}
			</div>
		</div>
	);
};
