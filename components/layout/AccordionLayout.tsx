import React from 'react'

import { LeftContainer } from '../containers/LeftContainer'
import RightContainer from '../containers/RightContainer'
const AccordionLayout = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="mt-30 mb-[66px] w-full flex-wrap md:flex-nowrap  flex gap-4">
        <div className="md:w-1/2 w-full">
          <LeftContainer />
        </div>
        <div className="md:w-1/2 w-full">
          <RightContainer />
        </div>
      </div>
    </div>
  )
}

export default AccordionLayout
