import React, { useState } from "react";
import { ElementRightContainer } from "../shared/ElementRightContainer";
import DropDownShared from "../shared/DropDownShared";

const RightContainer = () => {
	const [isOpenFirstDrawer, setIsOpenFirstDrawer] = useState<boolean>(true);
	const [isOpenSecondDrawer, setIsOpenSecondDrawer] = useState<boolean>(false);

	return (
		<>
			<DropDownShared
				isOpen={isOpenFirstDrawer}
				setIsOpen={setIsOpenFirstDrawer}
			/>
			{isOpenFirstDrawer && <ElementRightContainer />}

			<div className="pt-8">
				<DropDownShared
					isOpen={isOpenSecondDrawer}
					setIsOpen={setIsOpenSecondDrawer}
				/>
				{isOpenSecondDrawer && <ElementRightContainer />}
			</div>
		</>
	);
};

export default RightContainer;
