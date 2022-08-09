import React from 'react'

//Typography
import { Text, H4 } from '@/components/shared/Headings'
//Shared components
import CenterButton from '@/components/shared/CenterButton'

//Next Imports
import Image from 'next/image'

//Icons
import TowerIcon from '@/components/icons/TowerIcon'
import CircleIcon from '@/components/icons/CircleIcon'
import HomeIcon from '@/components/icons/HomeICon'
import avtar from '../../public/assets/avtar2.jpg'

interface TextI {
  Text?: string
}

const CenterContainer = (props: TextI) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="w-full">
          <div className="w-16 sm:w-24 xl:w-48 mx-auto mt-10 xl:mt-1">
            <Image className="rounded-full" src={avtar} alt="avtar" />
          </div>
        </div>
        <div className="w-full text-center mt-[26px]">
          <H4 className="text-white text-[45px] font-extrabold mb-[10px]">Lorem ipsum</H4>
          <div className="w-full mb-[10px] text-base font-normal">
            <p className="text-[#F3F3F3]">Created By </p>
            <p className="text-[#FC364C]"> Lorem ipsum</p>
          </div>
          <Text className="text-[#F3F3F3] text-base	font-normal mb-8 sm:mb-[60px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </Text>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 md:gap-5 md:mb-[74px] mb-10 px-2">
            <CenterButton text="Lorem ipsum">
              <TowerIcon />
            </CenterButton>

            <CenterButton text="Lorem ipsum">
              <CircleIcon />
            </CenterButton>

            <CenterButton text="Lorem ipsum">
              <HomeIcon />
            </CenterButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CenterContainer
