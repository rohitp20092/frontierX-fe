import React, { useState } from 'react'

// icons 
import ToolTipIcon from '../icons/ToolTipIcon'

//Shared components
import { ElementRightContainer } from '@/components/shared/ElementRightContainer'
import DropDownShared from '@/components/shared/DropDownShared'

const RightContainer = () => {
  const [isOpenFirstDrawer, setIsOpenFirstDrawer] = useState<boolean>(true)
  const [isOpenSecondDrawer, setIsOpenSecondDrawer] = useState<boolean>(false)

  return (
    <React.Fragment>
      <DropDownShared isOpen={isOpenFirstDrawer} setIsOpen={setIsOpenFirstDrawer}><ToolTipIcon/></DropDownShared>
      {isOpenFirstDrawer && <ElementRightContainer />}
      

      <div className="pt-4 md:pt-8 scroll-custom">
        <DropDownShared isOpen={isOpenSecondDrawer} setIsOpen={setIsOpenSecondDrawer} />
        {isOpenSecondDrawer && <ElementRightContainer />}
      </div>
    </React.Fragment>
  )
}

export default RightContainer
