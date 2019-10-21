import * as React from "react"

import { textPresets, viewPresets } from "./button.presets"
import { ButtonProps } from "./button.props"
import { Button as RNEButton } from "react-native-elements"

export const Button = (props: ButtonProps) => {
  // grab the props
  const {
    preset = "primary",
    style: styleOverride,
    ...rest
  } = props

  // assemble the style
  const viewPresetToUse = viewPresets[preset] || viewPresets.primary
  const textPresetToUse = textPresets[preset] || textPresets.primary

  const viewStyle = { ...viewPresetToUse }
  const textStyle = { ...textPresetToUse }

  return (
    <RNEButton  {...rest} titleStyle={textStyle} buttonStyle={viewStyle}/>
  )
}