import React from 'react'
import { Text, Smalltext } from '../shared/Headings'

interface IDropDownElementsProps {
  heading: string
  percent: number
}

export const DropDownElements = ({ heading, percent }: IDropDownElementsProps) => {
  return (
    <div className="box-border flex flex-col gap-1 justify-center text-center w-full mb-3 p-4 bg-[#080906] rounded-md font-extrabold text-white text-[15px]">
      <Smalltext>{heading}</Smalltext>
      <Text className="text-[#fff]">Lorem ipsum</Text>
      <Smalltext>{percent} %</Smalltext>
    </div>
  )
}
