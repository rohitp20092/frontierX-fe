import React from 'react'
import { IconProps } from '@/types/icons'

const ShortcutIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.14288 4.28574V6.71431H3.07145V20.0715H16.4286V14H18.8572V21.2857C18.8572 21.6078 18.7292 21.9166 18.5015 22.1444C18.2738 22.3721 17.9649 22.5 17.6429 22.5H1.85717C1.53512 22.5 1.22626 22.3721 0.998539 22.1444C0.770817 21.9166 0.642883 21.6078 0.642883 21.2857V5.50003C0.642883 5.17798 0.770817 4.86912 0.998539 4.6414C1.22626 4.41367 1.53512 4.28574 1.85717 4.28574H9.14288ZM22.5 0.642883V10.3572H20.0715V4.78724L10.6085 14.2514L8.89153 12.5344L18.3532 3.07145H12.7857V0.642883H22.5Z"
        fill="#F3F3F3"
      />
    </svg>
  )
}

export default ShortcutIcon
