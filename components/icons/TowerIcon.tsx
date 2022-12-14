import React from 'react'
import { IconProps } from '../../types/icons'

const TowerIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.73684 12.8H0.789474V6.4H4.73684V12.8ZM3.15789 11.2V8H2.36842V11.2H3.15789ZM7.89474 11.2V4.8H7.10526V11.2H7.89474ZM9.47368 12.8H5.52632V3.2H9.47368V12.8ZM12.6316 11.2V1.6H11.8421V11.2H12.6316ZM14.2105 12.8H10.2632V0H14.2105V12.8ZM15 16H0V14.4H15V16Z"
        fill="#F3F3F3"
      />
    </svg>
  )
}

export default TowerIcon
