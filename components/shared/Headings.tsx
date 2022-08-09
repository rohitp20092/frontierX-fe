import React from 'react'

//FontAwesome
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface Props {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  icon?: IconDefinition
  onClick?: () => void
}

export const H4 = (props: Props) => {
  return (
    <h4
      onClick={props.onClick}
      className={`${props.className} font-normal  text-[2rem] leading-[46px]`}
    >
      {props.children}
    </h4>
  )
}

export const Title = (props: Props) => {
  return (
    <div onClick={props.onClick} className={`${props.className} font-semibold  text-sm`}>
      {props.children}
    </div>
  )
}

export const Text = (props: Props) => {
  return (
    <div onClick={props.onClick} className={`${props.className} font-normal text-sm`}>
      {props.children}
    </div>
  )
}

export const Smalltext = (props: Props) => {
  return (
    <div onClick={props.onClick} className={`${props.className} font-normal text-xs`}>
      {props.children}
    </div>
  )
}
