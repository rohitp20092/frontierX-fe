import React from 'react'

//Next Impports
import Image from 'next/image'
import imghere from '../../public/assets/avtar.png'

import Centerpan from '@/components/containers/CenterContainer'

const CenterLayout = () => {
  return (
    <React.Fragment>
      <div className="w-full border-custom h-[6px]"></div>
      <div className="w-full mt-2 xl:mt-[43px]">
        <div className="container mx-auto">
          <div className="w-full img-full px-[14px]">
            <Image className="w-full text-center rounded-lg" src={imghere} alt="avtar" />
          </div>
          <div className="w-full text-center mt-[-80px]">
            <Centerpan />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CenterLayout
