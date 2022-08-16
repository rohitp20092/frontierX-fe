import React, { ReactElement } from 'react'

import Link from 'next/link'


//shared components
import { Smalltext } from '../shared/Headings'

interface ILeftContainerSharedProps {
  children?: ReactElement
  text?: string
}
const LeftContainerShared = ({ children,  text }: ILeftContainerSharedProps) => {
  return (
    <div className="flex gap-3 items-center w-2/3 mb-[20px]">
      {children}
    
      <Link href="/">
          <a>  <Smalltext className="text-[#FC364C] hover:text-[#fff] text-sm font-normal">{text}</Smalltext></a>
        </Link>
    </div>
  )
}

export default LeftContainerShared
