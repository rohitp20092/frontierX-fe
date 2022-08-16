import React from 'react'
import { Text, Smalltext } from '../shared/Headings'

interface IDropDownElementsProps {
  heading: string
  percent: number
}

export const DropDownElements = ({ heading, percent }: IDropDownElementsProps) => {
  return (
    <div className="box-border flex flex-col gap-1 justify-center text-center w-full mb-3 p-4 bg-[#0D0D0D] rounded-md font-extrabold text-white text-[15px] border-2 border-[#0D0D0D] hover:border-[#FC364C]">
      <Smalltext className='text-[#8E8B8F]'>{heading}</Smalltext>
      <Text className="text-[#F6F6F6] font-semibold">Lorem ipsum</Text>
      <Smalltext className='text-[#8E8B8F] text-sm'>{percent} %</Smalltext>
    </div>
  )
}
