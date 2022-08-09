import React, { ReactElement } from 'react'

//Typography
import { Text } from '../shared/Headings'

interface IButtonProps {
  children?: ReactElement
  text?: string
}
const CenterButton = ({ children, text }: IButtonProps) => {
  return (
    <button className="box-border flex items-center justify-center sm:gap-4 gap-2 h-[35px] sm:h-[50px] w-[96px] sm:w-[184px] sm:p-4 p-1 bg-[#080906] rounded-md font-extrabold text-white text-[15px]">
      {children}
      <Text className="text-[#fff] text-[10px] sm:text-sm">{text}</Text>
    </button>
  )
}

export default CenterButton
