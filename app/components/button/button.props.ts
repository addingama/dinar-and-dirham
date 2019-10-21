import { TextStyle, TouchableOpacityProperties, ViewStyle } from "react-native"
import { ButtonPresetNames } from "./button.presets"
import { ButtonProps as BP } from "react-native-elements"

export interface ButtonProps extends BP {
  /**
   * One of the different types of text presets.
   */
  preset?: ButtonPresetNames
}