import React from 'react'
//Icons
import ArrowDownIcon from '../icons/ArrowDownIcon'
import CircleIcon from '../icons/CircleIcon'

//Typography
import { Title } from './Headings'

interface IDropDownProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropDownShared = ({ isOpen, setIsOpen }: IDropDownProps) => {
  return (
    <div className="w-full p-5 rounded-md bg-[#16101a] text-white">
      <div className="flex w-full justify-between items-center">
        <div className="w-full flex items-center gap-4">
          <CircleIcon />
          <Title className='"text-[#fff] font-extrabold text-base'>Lorem ipsum</Title>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  )
}

export default DropDownShared
