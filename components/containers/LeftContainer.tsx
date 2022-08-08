import React, { useState } from "react";
//Shared Compoonents
import { Smalltext } from "../shared/Headings";
import DropDownShared from "../shared/DropDownShared";
import LeftContainerShared from "../shared/LeftContainerShared";
//Icons
import ShortcutICon from "../icons/ShortcutIcon";
import GamesIcon from "../icons/GamesIcon";
import InstaIocn from "../icons/InstaIcon";
import TwiterIocn from "../icons/TwiterIcon";

export const LeftContainer = () => {
	const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(true);
	return (
		<div className="w-full p-5 rounded-md bg-[#16101a] text-white">
			<div className="w-full">
				<DropDownShared isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer} />
				{isOpenDrawer && (
					<div>
						<Smalltext className="mb-[23px] text-white text-sm font-normal w-11/12">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</Smalltext>
						<div className="w-full mb-2">
							<div className="w-full flex gap-5">
								<LeftContainerShared text="Lorem ipsum.com">
									<ShortcutICon />
								</LeftContainerShared>
								<LeftContainerShared text="@Lorem ipsum">
									<GamesIcon />
								</LeftContainerShared>
							</div>
							<div className="w-full flex gap-5">
								<LeftContainerShared text="Lorem ipsum.com">
									<InstaIocn />
								</LeftContainerShared>
								<div className="flex gap-3 items-center w-2/3 mb-[20px]">
									<TwiterIocn className="bg-red" />
									<Smalltext className="text-white text-sm font-normal">
										@Lorem ipsum
									</Smalltext>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
